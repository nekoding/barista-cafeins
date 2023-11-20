import type { AssetUnmigrated } from '../../types/barista/assets'
import { baristaClient } from '../../utils/database'

export const getAssetsUnmigrated = async (
  limit: number = 100,
  offset: number = 0,
): Promise<AssetUnmigrated[]> => {
  return await baristaClient.asset.findMany({
    where: {
      is_migrated: false,
      cafeins_uuid: null,
      status: null,
    },
    include: {
      project: {
        select: {
          cafeins_uuid: true,
          company_code: true,
        },
      },
      sitepoint: {
        select: {
          cafeins_uuid: true,
          company_code: true,
          latitude: true,
          longitude: true,
        },
      },
    },
    take: limit,
    skip: offset,
  })
}
