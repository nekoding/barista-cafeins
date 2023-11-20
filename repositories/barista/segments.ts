import type { Segment } from '../../prisma/barista/barista-client'
import { baristaClient } from '../../utils/database'

const getSegmentsUnmigrated = async (): Promise<Segment[]> => {
  return await baristaClient.segment.findMany({
    where: {
      is_migrated: false,
      cafeins_uuid: null,
      status: null,
    },
  })
}

export { getSegmentsUnmigrated }
