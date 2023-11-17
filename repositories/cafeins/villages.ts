import type { villages } from '../../prisma/cafeins/cafeins-client'
import type { CustomCode } from '../../types/cafeins/villages'
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

export const generatedCode = async (
  prefix: string,
  villageId: string,
): Promise<string | null> => {
  const result = await cafeinsClient.$queryRaw<CustomCode[]>`
    SELECT
      CONCAT('${prefix}-', c.city_code, '-', d.code_area, v.code_area) as code
      FROM administrative_area.villages v 
      INNER JOIN administrative_area.districts d ON d.id = v.district_id
      INNER JOIN administrative_area.cities c ON c.id = d.city_id
    WHERE v.id = '${villageId}' 
  `

  if (result.length === 0) {
    return null
  }

  return result[0].code
}
