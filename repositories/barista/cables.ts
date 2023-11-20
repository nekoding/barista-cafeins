import type { Cable } from '../../prisma/barista/barista-client'
import { baristaClient } from '../../utils/database'

const getCablesUnmigrated = async (): Promise<Cable[]> => {
  return await baristaClient.cable.findMany({
    where: {
      is_migrated: false,
      cafeins_uuid: null,
      status: null,
    },
  })
}

export { getCablesUnmigrated }
