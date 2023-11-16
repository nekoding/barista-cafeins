import type { Project } from '../../prisma/barista/barista-client'
import { baristaClient } from '../../utils/database'

export const getProjectsUnmigrated = async (
  limit: number = 100,
  offset: number = 0,
): Promise<Project[]> => {
  return await baristaClient.project.findMany({
    where: {
      is_migrated: false,
      status: null,
    },
    take: limit,
    skip: offset,
  })
}

export const getMigratedProjectByGroupCode = async (
  groupCode: string,
): Promise<Project | null> => {
  return await baristaClient.project.findFirst({
    where: {
      NOT: {
        cafeins_uuid: null,
      },
      is_migrated: true,
      project_group_code: groupCode,
    },
  })
}
