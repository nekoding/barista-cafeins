import type { assets } from '../../prisma/cafeins/cafeins-client'
import { cafeinsClient } from '../../utils/database'

export const getAllAssetsWithCoords = async (
  lat: number,
  lng: number,
  distance: number,
  limit: number = 10,
  offset: number = 0,
): Promise<assets[]> => {
  return await cafeinsClient.$queryRaw<assets[]>`WITH site_point_distances AS (
    SELECT 
        sp.id as site_point_id,
        ST_DistanceSphere(sp.geometry, ST_Point(${lng}, ${lat})) as distance
    FROM site_point.site_points sp 
  ) SELECT * from asset.assets a JOIN site_point_distances spd ON a.site_point_id = spd.site_point_id 
  WHERE spd.distance <= ${distance} ORDER BY spd.distance ASC LIMIT ${limit} OFFSET ${offset}`
}

export const getAllAssets = async (
  limit: number = 10,
  offset: number = 0,
): Promise<assets[]> => {
  return await cafeinsClient.assets.findMany({
    where: {
      deleted_at: null,
    },
    take: limit,
    skip: offset,
  })
}
