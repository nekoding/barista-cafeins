interface BaristaRoute {
  uuid: string
  cafeins_uuid?: string
  unique_id: string
  name: string
  geometry: string
  length?: number
  created_at?: Date
  updated_at?: Date
  created_employee_no: string
  modified_employee_no?: string
  site_group_code_from: string
  site_group_code_to: string
  route_method: string
  route_ownership: string
  status?: string
  last_read?: Date
  is_migrated?: boolean
  site_group_from_uuid?: string
  site_group_from_cafein_uuid?: string
  site_group_to_uuid?: string
  site_group_to_cafein_uuid?: string
}

export type { BaristaRoute }
