import type { Segment } from '../../prisma/barista/barista-client'
import { baristaClient } from '../../utils/database'

const getSegmentsUnmigrated = async (
  limit: number = 100,
  offset: number = 0,
): Promise<Segment[]> => {
  return await baristaClient.segment.findMany({
    where: {
      is_migrated: false,
      cafeins_uuid: null,
      status: null,
    },
    take: limit,
    skip: offset,
  })
}

export { getSegmentsUnmigrated }
