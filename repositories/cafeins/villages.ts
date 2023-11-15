import type { villages } from '../../prisma/cafeins/cafeins-client'
import { cafeinsClient } from '../../utils/database'

export const getVilagesByCoords = async (
  lat: number,
  lng: number,
  limit: number = 1,
  offset: number = 0,
): Promise<villages[] | []> => {
  return await cafeinsClient.$queryRaw<villages[]>`SELECT 
    v.id,
    v.name,
    v.zip_code
  FROM administrative_area.villages v 
  WHERE ST_Contains(v.geometry, ST_Point(${lng}, ${lat})) LIMIT ${limit} OFFSET ${offset}`
}
