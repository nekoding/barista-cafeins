import type { companies } from '../../prisma/cafeins/cafeins-client'
import { cafeinsClient } from '../../utils/database'

const getCompanyByCode = async (
  companyCode: string,
): Promise<companies | null> => {
  return await cafeinsClient.companies.findFirst({
    where: {
      code: companyCode,
    },
  })
}

export { getCompanyByCode }
