interface BaristaSitePoint {
  uuid: string
  cafeins_uuid: string
  name: string
  company_code: string
  site_group_code: string
  latitude: number
  longitude: number
  geometry: string
  created_at: string
  updated_at: string
  created_employee_no: string
  modified_employee_no: string
  status?: string
  last_read?: Date | string
  is_migrated?: boolean
}

export type { BaristaSitePoint }
