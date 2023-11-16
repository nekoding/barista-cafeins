import type { Asset } from '../../prisma/barista/barista-client'
import { baristaClient } from '../../utils/database'

export const getAssetsUnmigrated = async (
  limit: number = 100,
  offset: number = 0,
): Promise<Asset[] | []> => {
  return await baristaClient.asset.findMany({
    where: {
      is_migrated: false,
      status: null,
    },
    take: limit,
    skip: offset,
  })
}
