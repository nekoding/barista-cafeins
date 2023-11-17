import type { site_points } from '../../prisma/cafeins/cafeins-client'
import { cafeinsClient } from '../../utils/database'

export const getSitePointsByNearestCoords = async (
  lat: number,
  lng: number,
  distance: number = 4,
  limit: number = 1,
  offset: number = 0,
): Promise<site_points[] | []> => {
  return await cafeinsClient.$queryRaw<site_points[]>`SELECT * FROM (
    SELECT 
      sp.uuid,
      sp.id, 
      sp.village_id,
      sp.name,
      sp.longitude,
      sp.latitude, 
      ST_DistanceSphere(sp.geometry, ST_Point(${lng}, ${lat})) as distance FROM site_point.site_points sp
  ) s WHERE s.distance <= ${distance} ORDER BY s.distance ASC LIMIT ${limit} OFFSET ${offset}`
}

export const createSitePoint = async (
  uuid: string,
  villageId: number,
  name: string,
  code: string,
  latitude: number,
  longitude: number,
  geometry: string,
  siteCategoryId: number,
  userId: string,
  createdAt: string,
  updatedAt: string,
): Promise<void> => {
  await cafeinsClient.$transaction(async (trx) => {
    // value longitude and latitude is reversed in db cafeins
    await trx.$queryRaw`INSERT INTO "site_point.site_points"
      (village_id, name, code, latitude, longitude, geometry, site_category_id, created_user_id, modified_user_id, created_at, updated_at, uuid)
    VALUES (${villageId}, ${name}, ${code}, ${longitude}, ${latitude}, ${geometry}, ${siteCategoryId}, ${userId}, ${userId}, ${createdAt}, ${updatedAt}, ${uuid})`
  })
}

export const getSitePointByUuid = async (
  uuid: string,
): Promise<site_points | null> => {
  return await cafeinsClient.site_points.findFirst({
    where: {
      uuid,
    },
  })
}
