import type { PrismaClient, Project } from '../prisma/barista/barista-client'
import type { PrismaClient as CafeinsPrismaClient } from '../prisma/cafeins/cafeins-client'
import { getProjectsUnmigrated } from '../repositories/barista/projects'
import { getCompanyByCode } from '../repositories/cafeins/companies'
import {
  createProjects,
  getLatestProjectByCode,
} from '../repositories/cafeins/projects'
import { getUserByEmployeeNo } from '../repositories/cafeins/users'
import { getVendorByVendorNo } from '../repositories/cafeins/vendors'
import { baristaClient, cafeinsClient } from '../utils/database'
import { parsingCounterNumber } from '../utils/helpers'
import { logger } from '../utils/logger'
import { LogLevel, writeToLog } from './logs'

export const syncProjects = async (): Promise<void> => {
  try {
    logger.info('sync projects start')
    const projects = await getProjectsUnmigrated()

    for (const project of projects) {
      try {
        const [projectCreator, projectOwner, projectCompany, projectVendor] =
          await prepareData(project)

        // set project group id to "project group migration"
        const projectGroupId = parseInt(
          process.env.PROJECT_PROJECT_GROUP_ID ?? '1',
        )

        // set default tag to = "project migration"
        const defaultTags = ['project migration']

        await cafeinsClient.$transaction(async (trx) => {
          // first or create project tag
          for (const tag of defaultTags) {
            await trx.tags.upsert({
              where: {
                tag,
              },
              create: {
                tag,
              },
              update: {},
            })
          }

          // parsing counter number
          let counter = 1
          const prefixCode = `CAF-${project.company_code}-`
          const latestProject = await getLatestProjectByCode(
            project.created_at.toLocaleString(),
          )
          if (latestProject?.code !== null) {
            counter = parsingCounterNumber(
              latestProject.code,
              latestProject.code.length - 3,
              3,
            )
          }

          // create project
          await createProjects(
            trx as CafeinsPrismaClient,
            projectCompany.id as unknown as string,
            projectVendor.id as unknown as string,
            project.name,
            project.created_at.toLocaleString(),
            project.updated_at.toLocaleString(),
            projectCreator.id as unknown as string,
            projectGroupId,
            'incomplete',
            project.description,
            projectOwner.id as unknown as string,
            project.po_number,
            project.uuid,
            prefixCode,
            counter,
            defaultTags,
          )

          // mark project as migrated
          await baristaClient.$transaction(async (baristaTrx) => {
            // update project
            await baristaTrx.project.update({
              data: {
                is_migrated: true,
                last_read: new Date(),
                status: 'CREATED',
                cafeins_uuid: project.uuid,
              },
              where: {
                uuid: project.uuid,
              },
            })

            // write to log
            await writeToLog(
              LogLevel.INFO,
              'project created in cafeins',
              {
                employee_no: project.created_employee_no,
                uuid: project.uuid,
                name: project.name,
                code: project.project_group_code,
                table: 'projects',
              },
              baristaTrx as PrismaClient,
            )
          })
        })
      } catch (error: any) {
        error.ctx = {
          uuid: project.uuid,
          table: 'projects',
        }

        throw error
      }
    }

    logger.info('sync projects success')
  } catch (error: any) {
    await writeToLog(
      LogLevel.ERROR,
      error.message.replace(/\n/g, ''),
      error.ctx,
    )

    throw new Error(error.message.replace(/\n/g, ''))
  }
}

const prepareData = async (project: Project): Promise<any> => {
  // validation created_employee_no and project owner
  if (project.created_employee_no == null || project.owner_nik == null) {
    throw new Error('project creator not found cannot migrate data')
  }

  const [projectCreator, projectOwner, projectCompany, projectVendor] =
    await Promise.all([
      getUserByEmployeeNo(project.created_employee_no),
      getUserByEmployeeNo(project.owner_nik),
      getCompanyByCode(project.company_code),
      getVendorByVendorNo(project.vendor_no),
    ])

  // validation project creator
  if (projectCreator == null) {
    throw new Error('project creator not found cannot migrate data')
  }

  // validation project owner
  if (projectOwner == null) {
    throw new Error('project owner not found cannot migrate data')
  }

  // validation company_code
  if (projectCompany == null) {
    throw new Error('project company not found cannot migrate data')
  }

  // validation vendor_no
  if (projectVendor == null) {
    throw new Error('project vendor not found cannot migrate data')
  }

  return [projectCreator, projectOwner, projectCompany, projectVendor]
}
