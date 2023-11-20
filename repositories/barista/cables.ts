import type { Cable } from '../../prisma/barista/barista-client'
import { baristaClient } from '../../utils/database'

const getCablesUnmigrated = async (
  limit: number = 100,
  offset: number = 0,
): Promise<Cable[]> => {
  return await baristaClient.cable.findMany({
    where: {
      is_migrated: false,
      cafeins_uuid: null,
      status: null,
    },
    take: limit,
    skip: offset,
  })
}

export { getCablesUnmigrated }
