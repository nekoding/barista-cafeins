interface CafeinRoute {
  id: number
  uuid: string
  site_category_id: number
  name: string
  site_from: string
  site_to: string
  geometry: string
  length: number
  route_method_id: number
  route_ownership_id: number
  created_at: string
  updated_at?: string
  deleted_at?: string
  created_user_id?: number
  modified_user_id?: number
  deleted_user_id?: number
}

export type { CafeinRoute }
