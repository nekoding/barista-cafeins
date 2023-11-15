import type { PrismaClient } from '../prisma/barista/barista-client'
import type { Prisma } from '../prisma/cafeins/cafeins-client'
import { getProjectsUnmigrated } from '../repositories/barista/projects'
import { baristaClient, cafeinsClient } from '../utils/database'
import { LogLevel, writeToLog } from './logs'

export const syncProjects = async (): Promise<void> => {
  const projects = await getProjectsUnmigrated()

  const createProjects: Prisma.projectsCreateManyInput[] = []
  for (const project of projects) {
    const user = await cafeinsClient.users.findFirst({
      where: {
        t_employee_id: project.created_employee_no,
      },
    })

    if (user == null) {
      await writeToLog(
        LogLevel.ERROR,
        'project owner not found cannot migrate data',
        {
          employee_no: project.created_employee_no,
          uuid: project.uuid,
          name: project.name,
          code: project.project_group_code,
          table: 'project',
        },
      )

      throw new Error('project owner not found cannot migrate data')
    }

    createProjects.push({
      uuid: project.uuid,
      company_id: project.company_code,
      vendor_id: project.vendor_no,
      name: project.name,
      code: project.project_group_code,
      description: project.description,
      po_number: project.po_number,
      status: 'incomplete',
      created_user_id: user.id,
      modified_user_id: user.id,
      project_owner_id: user.id,
      created_at: project.created_at,
      updated_at: project.updated_at,
    })
  }

  await cafeinsClient.$transaction(async (trx) => {
    // migrate data
    await trx.projects.createMany({
      data: createProjects,
      skipDuplicates: true,
    })

    // mark data synchronized
    for (const project of projects) {
      await baristaClient.$transaction(async (trx) => {
        await trx.project.update({
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

        await writeToLog(
          LogLevel.INFO,
          'project created in cafeins',
          {
            employee_no: project.created_employee_no,
            uuid: project.uuid,
            name: project.name,
            code: project.project_group_code,
            table: 'project',
          },
          trx as PrismaClient,
        )
      })
    }
  })
}
