import { baristaClient } from '../../utils/database'

export const getRouteUnmigrated = async (
  limit: number = 100,
  offset: number = 0,
): Promise<BaristaRoute[] | []> => {
  return await baristaClient.$queryRaw`SELECT 
        uuid,
        cafeins_uuid,
        unique_id,
        name,
        geometry::text,
        length,
        created_at,
        updated_at,
        created_employee_no,
        modified_employee_no,
        site_group_code_from,
        site_group_code_to,
        route_method,
        route_ownership,
        status,
        last_read,
        is_migrated
    FROM routes WHERE is_migrated = false AND status IS NULL LIMIT ${limit} OFFSET ${offset}`
}
