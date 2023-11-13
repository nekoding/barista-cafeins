import type { site_points } from '../../prisma/cafeins/cafeins-client'
import { cafeinsClient } from '../../utils/database'

export const findSitePointsByNearestCoords = async (
  lat: number,
  lng: number,
  distance: number = 4,
  limit: number = 1,
): Promise<site_points[] | null> => {
  return await cafeinsClient.$queryRaw<site_points[]>`SELECT * FROM (
    SELECT 
      sp.id, 
      sp.village_id,
      sp.name,
      sp.longitude,
      sp.latitude, 
      ST_DistanceSphere(sp.geometry, ST_Point(${lng}, ${lat})) as distance FROM site_point.site_points sp
  ) s WHERE s.distance <= ${distance} ORDER BY s.distance ASC LIMIT ${limit}`
}
