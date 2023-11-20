import type { PrismaClient } from '../../prisma/cafeins/cafeins-client'
import type { CafeinRoute } from '../../types/cafeins/route'

const createRoutes = async (
  client: PrismaClient,
  data: {
    uuid: string
    siteCategoryId: string
    name: string
    siteFrom: number | string
    siteTo: number | string
    geometry: string
    length: number
    routeMethodId: string
    routeOwnershipId: string
    createdAt: Date
    updatedAt: Date
    createdUserId?: string
    modifiedUserId?: string
  },
): Promise<number> => {
  return await client.$executeRaw`INSERT INTO site_point.routes (uuid, site_category_id, name, site_from, site_to, geometry, length, route_method_id, route_ownership_id, created_at, updated_at, created_user_id, modified_user_id
    ) VALUES (
        ${data.uuid}::uuid, 
        ${data.siteCategoryId}::bigint, 
        ${data.name}, 
        ${data.siteFrom}, 
        ${data.siteTo}, 
        ${data.geometry}::geometry, 
        ${data.length},
        ${data.routeMethodId}::bigint,
        ${data.routeOwnershipId}::bigint,
        ${data.createdAt}, 
        ${data.updatedAt}, 
        ${data.createdUserId}::bigint, 
        ${data.modifiedUserId}::bigint
    )`
}

const findRouteByUuid = async (
  prismaClient: PrismaClient,
  uuid: string,
): Promise<CafeinRoute | null> => {
  const result = await prismaClient.$queryRaw<CafeinRoute[]>`SELECT 
    id,
    uuid,
    site_category_id,
    name,
    site_from,
    site_to,
    geometry::text,
    length,
    route_method_id,
    route_ownership_id,
    created_at,
    updated_at,
    deleted_at,
    created_user_id,
    modified_user_id,
    deleted_user_id
  FROM site_point.routes WHERE uuid = ${uuid}::uuid LIMIT 1`

  if (result.length < 1) {
    return null
  }

  return result[0]
}

export { createRoutes, findRouteByUuid }
