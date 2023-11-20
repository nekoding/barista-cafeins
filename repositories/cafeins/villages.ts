import type { BaristaVillage } from '../../types/cafeins/villages'
import { cafeinsClient } from '../../utils/database'

const getVilagesByCoords = async (
  lat: number,
  lng: number,
): Promise<BaristaVillage | null> => {
  const result = await cafeinsClient.$queryRaw<BaristaVillage[]>`
    SELECT 
      v.id as village_id,
      v.name as village_name,
      v.code as village_code,
      v.code_area as village_code_area,
      c.id as city_id,
      c.name as city_name,
      c.code as city_code,
      c.city_code as city_code_area,
      d.id as district_id,
      d.name as district_name,
      d.code as district_code,
      d.code_area as district_code_area,
      p.id as province_id,
      p.name as province_name,
      p.code as province_code
    FROM administrative_area.villages v 
    JOIN administrative_area.districts d ON d.id = v.district_id
    JOIN administrative_area.cities c ON c.id = d.city_id
    JOIN administrative_area.provinces p ON p.id = c.province_id
    WHERE ST_Contains(v.geometry, ST_Point(${lng}, ${lat})) 
    LIMIT 1 OFFSET 0`

  if (result.length === 0) {
    return null
  }

  return result[0]
}

export { getVilagesByCoords }
