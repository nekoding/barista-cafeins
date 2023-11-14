import type { Prisma } from '../prisma/cafeins/cafeins-client'
import { getProjectsUnmigrated } from '../repositories/barista/projects'
import { cafeinsClient } from '../utils/database'

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
      throw new Error(`User not found: ${project.created_employee_no}`)
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
    })
  }

  await cafeinsClient.$transaction(async (trx) => {
    await trx.projects.createMany({
      data: createProjects,
    })
  })
}
