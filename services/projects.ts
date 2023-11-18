import moment from 'moment'
import type { Project } from '../prisma/barista/barista-client'
import type {
  companies,
  projects,
  users,
  vendors,
} from '../prisma/cafeins/cafeins-client'
import { getProjectsUnmigrated } from '../repositories/barista/projects'
import { getCompanyByCode } from '../repositories/cafeins/companies'
import { getUserByEmployeeNo } from '../repositories/cafeins/users'
import { getVendorByVendorNo } from '../repositories/cafeins/vendors'
import { baristaClient, cafeinsClient } from '../utils/database'
import { logger } from '../utils/logger'
import { LogLevel, writeToLog } from './logs'
import { AuditEvent } from '../types/cafeins/audit'

const getCreatedUserByEmployeeNo = getUserByEmployeeNo

const getModifiedUserByEmployeeNo = getUserByEmployeeNo

const getProjectOwnerByEmployeeNo = getUserByEmployeeNo

const getProjectCompanyByCode = getCompanyByCode

const getProjectVendorByVendorNo = getVendorByVendorNo

const generateCounterNumberByCreatedTime = async (
  project: Project,
): Promise<string> => {
  const prefixIdentifier = `CAF-${project.company_code}`
  const timeIdentitfier = moment(project.created_at).format('YYYYMM')
  const lastProject = await cafeinsClient.projects.findFirst({
    where: {
      code: {
        contains: timeIdentitfier,
      },
    },
    orderBy: {
      code: 'desc',
    },
  })

  let counterSequence = 1
  if (lastProject?.code != null) {
    const lastCounterSequence = lastProject.code.substring(
      lastProject.code.length - 3,
    )
    counterSequence = parseInt(lastCounterSequence) + 1
  }

  const finalCode = `${prefixIdentifier}-${timeIdentitfier}-${String(
    counterSequence,
  ).padStart(3, '0')}`
  return finalCode
}

type ValidatedData = [users, users, users, companies, vendors, string]
const validateData = async (project: Project): Promise<ValidatedData> => {
  const [
    createdUser,
    modifiedUser,
    projectOwner,
    projectCompany,
    projectVendor,
    projectCode,
  ] = await Promise.all([
    getCreatedUserByEmployeeNo(project.created_employee_no),
    getModifiedUserByEmployeeNo(
      project.modified_employee_no ?? project.created_employee_no,
    ),
    getProjectOwnerByEmployeeNo(project.owner_nik),
    getProjectCompanyByCode(project.company_code),
    getProjectVendorByVendorNo(project.vendor_no),
    generateCounterNumberByCreatedTime(project),
  ])

  if (createdUser == null) {
    throw new Error('project created user not found in database')
  }

  if (modifiedUser == null) {
    throw new Error('project modified user not found in database')
  }

  if (projectOwner == null) {
    throw new Error('project owner user not found in database')
  }

  if (projectCompany == null) {
    throw new Error('project company not found in database')
  }

  if (projectVendor == null) {
    throw new Error('project vendor not found in database')
  }

  return [
    createdUser,
    modifiedUser,
    projectOwner,
    projectCompany,
    projectVendor,
    projectCode,
  ]
}

const serializedProjectData = (project: projects): string => {
  return JSON.stringify({
    ...project,
    id: project.id.toString(),
    created_user_id: project.created_user_id?.toString(),
    modified_user_id: project.modified_user_id?.toString(),
    company_id: project.company_id.toString(),
    vendor_id: project.vendor_id?.toString(),
    project_owner_id: project.project_owner_id?.toString(),
    project_group_id: project.project_group_id?.toString(),
  })
}

export const syncProjects = async (): Promise<void> => {
  try {
    logger.info('sync projects start')
    const projects = await getProjectsUnmigrated()
    const defaultTags = ['project migration']
    for (const tag of defaultTags) {
      await cafeinsClient.tags.upsert({
        update: {},
        create: {
          tag,
        },
        where: {
          tag,
        },
      })
    }

    for (const project of projects) {
      try {
        const [
          createdUser,
          modifiedUser,
          projectOwner,
          projectCompany,
          projectVendor,
          projectCode,
        ] = await validateData(project)

        await cafeinsClient.$transaction(async (trx) => {
          const projectCreated = await trx.projects.create({
            data: {
              uuid: project.uuid,
              name: project.name,
              code: projectCode,
              company_id: projectCompany.id,
              vendor_id: projectVendor.id,
              created_at: project.created_at,
              updated_at: project.updated_at,
              created_user_id: createdUser.id,
              modified_user_id: modifiedUser.id,
              description: project.description,
              project_group_id:
                process.env.PROJECT_PROJECT_GROUP_ID != null
                  ? parseInt(process.env.PROJECT_PROJECT_GROUP_ID)
                  : null,
              status: 'incomplete',
              latest_step: '0',
              project_owner_id: projectOwner.id,
              po_number: project.po_number,
              tag: defaultTags.join(','),
            },
          })

          const serialized = serializedProjectData(projectCreated)

          await trx.audits.create({
            data: {
              user_type: `App\\Models\\User`,
              user_id: createdUser.id,
              event: AuditEvent.CREATED,
              auditable_type: `Modules\\Master\\Entities\\Project`,
              auditable_id: projectCreated.id,
              old_values: '[]',
              new_values: serialized,
              user_agent: 'Barista',
              created_at: new Date(),
              updated_at: new Date(),
            },
          })

          await baristaClient.project.update({
            where: {
              uuid: project.uuid,
            },
            data: {
              status: 'CREATED',
              is_migrated: true,
              last_read: new Date(),
              cafeins_uuid: project.uuid,
            },
          })

          logger.info(`sync project ${project.uuid} success`)
        })
      } catch (error: any) {
        error.ctx = {
          uuid: project.uuid,
          table: 'projects',
        }

        throw error
      }
    }

    logger.info('sync projects finish')
  } catch (error: any) {
    await writeToLog(
      LogLevel.ERROR,
      error.message.replace(/\n/g, ''),
      error.ctx,
    )

    throw new Error(error.message.replace(/\n/g, ''))
  }
}
