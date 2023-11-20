import type { cable_categories } from '../../prisma/cafeins/cafeins-client'
import { cafeinsClient } from '../../utils/database'

const getCableCategoryByName = async (
  name: string,
): Promise<cable_categories | null> => {
  return await cafeinsClient.cable_categories.findFirst({
    where: {
      name,
    },
  })
}

export { getCableCategoryByName }
