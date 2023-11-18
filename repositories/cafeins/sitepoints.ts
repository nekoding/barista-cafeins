import type {
  PrismaClient,
  site_points,
} from '../../prisma/cafeins/cafeins-client'
import type { CafeinsSitePoint } from '../../types/cafeins/sitepoint'
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
  prismaClient: PrismaClient,
  uuid: string,
  villageId: number | string,
  siteCategoryId: number | string,
  name: string,
  code: string,
  latitude: number,
  longitude: number,
  geometry: string,
  createdUserId: number | string,
  modifiedUserId: number | string,
  createdAt: Date | string,
  updatedAt: Date | string,
): Promise<number> => {
  // value longitude and latitude is reversed in db cafeins
  return await prismaClient.$executeRaw`INSERT INTO site_point.site_points(
      uuid,
      village_id,
      site_category_id,
      name, 
      code, 
      latitude, 
      longitude, 
      geometry, 
      created_user_id, 
      modified_user_id, 
      created_at, 
      updated_at, 
  ) VALUES (
    ${uuid}, 
    ${villageId}, 
    ${siteCategoryId},
    ${name}, 
    ${code}, 
    ${longitude}, 
    ${latitude}, 
    ${geometry}, 
    ${createdUserId}, 
    ${modifiedUserId}, 
    ${createdAt}, 
    ${updatedAt}, 
  )`
}

export const findSitePointByUuid = async (
  uuid: string,
): Promise<CafeinsSitePoint | null> => {
  const result = await cafeinsClient.$queryRaw<
    CafeinsSitePoint[]
  >`SELECT * FROM site_point.site_points sp WHERE sp.uuid = ${uuid} LIMIT 1 OFFSET 0`

  if (result.length < 1) {
    return null
  }

  return result[0]
}
