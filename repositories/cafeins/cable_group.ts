import type { cable_groups } from '../../prisma/cafeins/cafeins-client'
import { cafeinsClient } from '../../utils/database'

const getCableGroupByName = async (
  name: string,
): Promise<cable_groups | null> => {
  return await cafeinsClient.cable_groups.findFirst({
    where: {
      name,
    },
  })
}

export { getCableGroupByName }
