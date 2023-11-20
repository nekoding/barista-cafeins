import type {
  PrismaClient,
  projects,
} from '../../prisma/cafeins/cafeins-client'
import { cafeinsClient } from '../../utils/database'

const createProjects = async (
  c: PrismaClient,
  projectCompanyId: string,
  projectVendorId: string,
  projectName: string,
  projectCreatedAt: string,
  projectUpdatedAt: string,
  projectCreatorId: string,
  projectGroupId: number,
  projectStatus: string,
  projectDescription: string | null,
  projectOwnerId: string,
  projectPoNumber: string | null,
  projectUuid: string,
  prefixCode: string,
  counterCode: number,
  projectTags: string[],
): Promise<any> => {
  await c.$executeRaw`
    INSERT INTO master.projects (
      company_id,
      vendor_id,
      name,
      created_at,
      updated_at,
      created_user_id,
      modified_user_id,
      project_group_id,
      code,
      status,
      description,
      project_owner_id,
      po_number,
      uuid,
      tag
    ) VALUES (
      ${projectCompanyId},
      ${projectVendorId},
      ${projectName},
      ${projectCreatedAt}::timestamp,
      ${projectUpdatedAt}::timestamp,
      ${projectCreatorId},
      ${projectCreatorId},
      ${projectGroupId},
      (
        SELECT CONCAT(
          ${prefixCode}::text,
          TO_CHAR(${projectCreatedAt}::timestamp, 'YYYYMM'),
          '-',
          LPAD(
            ${counterCode}::text,
            3,
            '0'
          )
        )
      ),
      ${projectStatus},
      ${projectDescription},
      ${projectOwnerId},
      ${projectPoNumber},
      ${projectUuid}::uuid,
      ${projectTags.join(',')}
    )
  `
}

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

export { createProjects, findProjectByUuid, getLatestProjectByCode }
