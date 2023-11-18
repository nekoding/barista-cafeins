export interface CafeinsSitePoint {
  id: number
  village_id: number
  name: string
  latitude: number
  longitude: number
  site_category_id: number
  geometry?: string
  code?: string
  uuid: string
  created_at: Date | string
  updated_at: Date | string
  deleted_at: Date | string
  created_user_id?: number
  modified_user_id?: number
  deleted_user_id?: number
}
