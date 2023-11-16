import type { asset_groups } from '../../prisma/cafeins/cafeins-client'
import { cafeinsClient } from '../../utils/database'

export const getAssetGroupByCode = async (
  code: string,
): Promise<asset_groups | null> => {
  return await cafeinsClient.asset_groups.findFirst({
    where: {
      code,
    },
  })
}
