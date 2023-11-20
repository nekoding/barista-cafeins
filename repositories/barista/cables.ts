import type { Cable } from '../../prisma/barista/barista-client'
import { baristaClient } from '../../utils/database'

const getCablesUnmigrated = async (): Promise<Cable[]> => {
  return await baristaClient.cable.findMany({})
}

export { getCablesUnmigrated }
