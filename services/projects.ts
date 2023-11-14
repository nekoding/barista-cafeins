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
      await writeToLog(LogLevel.ERROR, 'user not found', {
        employee_id: project.created_employee_no,
        uuid: project.uuid,
      })

      throw new Error('user not found')
    }

    createProjects.push({
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
    await baristaClient.project.updateMany({
      data: {
        is_migrated: true,
        last_read: new Date(),
        status: 'CREATED',
      },
      where: {
        uuid: {
          in: projects.map((project) => project.uuid),
        },
      },
    })
  })
}
