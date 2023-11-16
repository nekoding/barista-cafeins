import type { asset_categories } from '../../prisma/cafeins/cafeins-client'
import { cafeinsClient } from '../../utils/database'

export const getAssetCategoryByCode = async (
  code: string,
): Promise<asset_categories | null> => {
  return await cafeinsClient.asset_categories.findFirst({
    where: {
      code,
    },
  })
}
