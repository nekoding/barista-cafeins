import type { SitePoint } from '../../prisma/barista/barista-client'
import { baristaClient } from '../../utils/database'

export const getSitePointUnmigrated = async (
  limit: number = 100,
  offset: number = 0,
): Promise<BaristaSitePoint[] | []> => {
  return await baristaClient.$queryRaw`SELECT 
    uuid,
    name,
    company_code,
    site_group_code,
    latitude,
    longitude,
    geometry::text,
    created_at,
    updated_at,
    created_employee_no,
    modified_employee_no,
    status,
    last_read,
    is_migrated
  FROM site_points WHERE is_migrated = false AND status IS NULL LIMIT ${limit} OFFSET ${offset}`
}

export const getMigratedSitePointByGroupCode = async (
  groupCode: string,
): Promise<SitePoint | null> => {
  return await baristaClient.sitePoint.findFirst({
    where: {
      NOT: {
        cafeins_uuid: null,
      },
      is_migrated: true,
      site_group_code: groupCode,
    },
  })
}
