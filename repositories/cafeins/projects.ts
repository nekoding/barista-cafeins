import type { projects } from '../../prisma/cafeins/cafeins-client'
import { cafeinsClient } from '../../utils/database'

const findProjectByUuid = async (uuid: string): Promise<projects | null> => {
  return await cafeinsClient.projects.findFirst({
    where: {
      uuid,
    },
  })
}

const getLatestProjectByCode = async (
  projectCreatedAt: string,
): Promise<projects | null> => {
  const result = await cafeinsClient.$queryRaw<projects[] | []>`
    SELECT * FROM master.projects p WHERE p.code LIKE (SELECT CONCAT('%', TO_CHAR(${projectCreatedAt}::timestamp, 'YYYYMM'), '%')) ORDER BY p.code DESC LIMIT 1 OFFSET 0
  `

  if (result.length < 1) {
    return null
  }

  return result[0]
}

export { findProjectByUuid, getLatestProjectByCode }
