import type { application_parameters } from '../../prisma/cafeins/cafeins-client'
import { cafeinsClient } from '../../utils/database'

export const getApplicationParameterByCode = async (
  code: string,
): Promise<application_parameters | null> => {
  return await cafeinsClient.application_parameters.findFirst({
    where: {
      code,
    },
  })
}
