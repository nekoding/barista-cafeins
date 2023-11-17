import type { PrismaClient } from '../../prisma/cafeins/cafeins-client'

export const createRoutes = async (
  client: PrismaClient,
  uuid: string,
  siteCategoryId: bigint,
  name: string,
  siteFrom: bigint,
  siteTo: bigint,
  geometry: string,
  createdAt?: Date,
  updatedAt?: Date,
  createdUserId?: bigint,
  updatedUserId?: bigint,
): Promise<number> => {
  return await client.$executeRaw`INSERT INTO site_point.routes (
        uuid, site_category_id, name, site_from, site_to, geometry, created_at, updated_at, created_user_id, updated_user_id
    ) VALUES (
        ${uuid}::uuid, 
        ${siteCategoryId}, 
        ${name}, 
        ${siteFrom}, 
        ${siteTo}, 
        ${geometry}, 
        ${createdAt ?? new Date()}, 
        ${updatedAt ?? new Date()}, 
        ${createdUserId}, 
        ${updatedUserId}
    )`
}
