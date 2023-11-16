import type { PrismaClient } from '../../prisma/cafeins/cafeins-client'

export const createProjects = async (
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
  projectCompanyCode: string,
): Promise<any> => {
  const prefixCode = `CAF-${projectCompanyCode}-`

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
      uuid
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
            (SELECT count(p.id) + 1 from master.projects p WHERE p.code LIKE (SELECT CONCAT('%', TO_CHAR(${projectCreatedAt}::timestamp, 'YYYYMM'), '%')))::text,
            3,
            '0'
          )
        )
      ),
      ${projectStatus},
      ${projectDescription},
      ${projectOwnerId},
      ${projectPoNumber},
      ${projectUuid}::uuid
    )
  `
}
