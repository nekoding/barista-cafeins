import type { Project } from '../../prisma/barista/barista-client'
import { baristaClient } from '../../utils/database'

export const getProjectsUnmigrated = async (
  limit: number = 100,
): Promise<Project[]> => {
  return await baristaClient.project.findMany({
    where: {
      NOT: {
        company_code: null,
        vendor_no: null,
        owner_nik: null,
      },
      is_migrated: false,
      status: null,
    },
    take: limit,
  })
}
