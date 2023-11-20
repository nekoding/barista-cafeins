import type { Route } from '../../prisma/barista/barista-client'
import type { BaristaRoute } from '../../types/barista/routes'
import { baristaClient } from '../../utils/database'

const getRouteUnmigrated = async (
  limit: number = 100,
  offset: number = 0,
): Promise<BaristaRoute[] | []> => {
  return await baristaClient.$queryRaw`SELECT 
    r.uuid,
    r.cafeins_uuid,
    r.unique_id,
    r.name,
    r.geometry::text,
    r.length,
    r.created_at,
    r.updated_at,
    r.created_employee_no,
    r.modified_employee_no,
    r.site_group_code_from,
    r.site_group_code_to,
    r.route_method,
    r.route_ownership,
    r.status,
    r.last_read,
    r.is_migrated,
    sp1.uuid as site_group_from_uuid,
    sp1.cafeins_uuid as site_group_from_cafein_uuid,
    sp2.uuid as site_group_to_uuid,
    sp2.cafeins_uuid as site_group_to_cafein_uuid
  FROM routes r
  LEFT JOIN site_points sp1 ON sp1.site_group_code = r.site_group_code_from
  LEFT JOIN site_points sp2 ON sp2.site_group_code = r.site_group_code_to
  WHERE r.is_migrated = false AND r.status IS NULL AND r.cafeins_uuid IS NULL LIMIT ${limit} OFFSET ${offset}`
}

const getRouteByUniqueId = async (uniqueId: string): Promise<Route | null> => {
  return await baristaClient.route.findFirst({
    where: {
      unique_id: uniqueId,
    },
  })
}

export { getRouteUnmigrated, getRouteByUniqueId }
