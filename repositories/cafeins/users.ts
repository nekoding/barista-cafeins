import type { users } from '../../prisma/cafeins/cafeins-client'
import { cafeinsClient } from '../../utils/database'

const getUserByEmployeeNo = async (
  employeeNo: string,
): Promise<users | null> => {
  return await cafeinsClient.users.findFirst({
    where: {
      employees: {
        employee_no: employeeNo,
      },
    },
  })
}

export { getUserByEmployeeNo }
