import type { Project } from '../../prisma/barista/barista-client'
import { baristaClient } from '../../utils/database'

export const getProjectsUnmigrated = async (
  limit: number = 100,
): Promise<Project[]> => {
  return await baristaClient.project.findMany({
    where: {
      is_migrated: false,
      status: null,
    },
    take: limit,
  })
}
