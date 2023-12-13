Object.defineProperty(exports, '__esModule', { value: true })

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser')

const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.5.2
 * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
 */
Prisma.prismaVersion = {
  client: '5.5.2',
  engine: 'aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a',
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`)
}
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`)
}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`)
}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`)
}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`)
}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`)
}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`)
}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`)
}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`)
}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`)
}
Prisma.validator = Public.validator

/**
 * Extensions
 */
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`)
}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`)
}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull,
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable',
})

exports.Prisma.CitiesScalarFieldEnum = {
  id: 'id',
  province_id: 'province_id',
  name: 'name',
  year: 'year',
  source_id: 'source_id',
  area: 'area',
  area_in_ha: 'area_in_ha',
  area_in_km: 'area_in_km',
  status: 'status',
  code: 'code',
  province_code: 'province_code',
  city_code: 'city_code',
  type: 'type',
}

exports.Prisma.DistrictsScalarFieldEnum = {
  id: 'id',
  city_id: 'city_id',
  city_code: 'city_code',
  name: 'name',
  year: 'year',
  source_id: 'source_id',
  area: 'area',
  area_in_ha: 'area_in_ha',
  area_in_km: 'area_in_km',
  code: 'code',
  status: 'status',
  code_area: 'code_area',
}

exports.Prisma.ProvincesScalarFieldEnum = {
  id: 'id',
  code: 'code',
  name: 'name',
  source_id: 'source_id',
  published_year: 'published_year',
  area: 'area',
  area_in_ha: 'area_in_ha',
  area_in_km: 'area_in_km',
  status: 'status',
  updated_at: 'updated_at',
  created_at: 'created_at',
}

exports.Prisma.VillagesScalarFieldEnum = {
  id: 'id',
  district_id: 'district_id',
  district_code: 'district_code',
  name: 'name',
  year: 'year',
  source_id: 'source_id',
  area: 'area',
  area_in_ha: 'area_in_ha',
  area_in_km: 'area_in_km',
  status: 'status',
  code: 'code',
  old_village_id: 'old_village_id',
  zip_code: 'zip_code',
  code_area: 'code_area',
}

exports.Prisma.Asset_categoriesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  created_user_id: 'created_user_id',
  modified_user_id: 'modified_user_id',
  deleted_user_id: 'deleted_user_id',
  is_terminated_point: 'is_terminated_point',
  network_rule_id: 'network_rule_id',
  domain_rule_id: 'domain_rule_id',
  circuit_type_id: 'circuit_type_id',
  code: 'code',
  icon_filename: 'icon_filename',
  icon_file_url: 'icon_file_url',
  terminate_type_id: 'terminate_type_id',
  uuid: 'uuid',
  network_rule_uuid: 'network_rule_uuid',
  domain_rule_uuid: 'domain_rule_uuid',
  circuit_type_uuid: 'circuit_type_uuid',
  terminate_type_uuid: 'terminate_type_uuid',
}

exports.Prisma.Asset_category_equipment_levelsScalarFieldEnum = {
  id: 'id',
  asset_category_id: 'asset_category_id',
  equipment_category_id: 'equipment_category_id',
  level_no: 'level_no',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  created_user_id: 'created_user_id',
  modified_user_id: 'modified_user_id',
  deleted_user_id: 'deleted_user_id',
  asset_category_uuid: 'asset_category_uuid',
  equipment_category_uuid: 'equipment_category_uuid',
}

exports.Prisma.Asset_group_attachmentsScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  file_type: 'file_type',
  asset_group_id: 'asset_group_id',
  filename: 'filename',
  file_url: 'file_url',
  description: 'description',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  created_user_id: 'created_user_id',
  modified_user_id: 'modified_user_id',
  deleted_user_id: 'deleted_user_id',
}

exports.Prisma.Asset_groupsScalarFieldEnum = {
  id: 'id',
  asset_category_id: 'asset_category_id',
  name: 'name',
  description: 'description',
  created_user_id: 'created_user_id',
  modified_user_id: 'modified_user_id',
  deleted_user_id: 'deleted_user_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  code: 'code',
  uuid: 'uuid',
  asset_category_uuid: 'asset_category_uuid',
}

exports.Prisma.AssetsScalarFieldEnum = {
  id: 'id',
  asset_category_id: 'asset_category_id',
  asset_group_id: 'asset_group_id',
  site_point_id: 'site_point_id',
  asset_ownership_id: 'asset_ownership_id',
  area_ownership_id: 'area_ownership_id',
  name: 'name',
  description: 'description',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  created_user_id: 'created_user_id',
  modified_user_id: 'modified_user_id',
  deleted_user_id: 'deleted_user_id',
  code: 'code',
  uuid: 'uuid',
  asset_category_uuid: 'asset_category_uuid',
  asset_group_uuid: 'asset_group_uuid',
  site_point_uuid: 'site_point_uuid',
  asset_ownership_uuid: 'asset_ownership_uuid',
  area_ownership_uuid: 'area_ownership_uuid',
  status: 'status',
  node_name: 'node_name',
}

exports.Prisma.Equipment_categoriesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  type: 'type',
  is_single: 'is_single',
  is_transaction: 'is_transaction',
  description: 'description',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  created_user_id: 'created_user_id',
  modified_user_id: 'modified_user_id',
  deleted_user_id: 'deleted_user_id',
  uuid: 'uuid',
}

exports.Prisma.EquipmentsScalarFieldEnum = {
  id: 'id',
  equipment_category_id: 'equipment_category_id',
  name: 'name',
  description: 'description',
  number: 'number',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  created_user_id: 'created_user_id',
  modified_user_id: 'modified_user_id',
  deleted_user_id: 'deleted_user_id',
  uuid: 'uuid',
  equipment_category_uuid: 'equipment_category_uuid',
}

exports.Prisma.Master_asset_group_itemsScalarFieldEnum = {
  id: 'id',
  asset_group_id: 'asset_group_id',
  equipment_id: 'equipment_id',
  path: 'path',
  max_slot: 'max_slot',
  max_port: 'max_port',
  core_in: 'core_in',
  core_out: 'core_out',
  port_type_id: 'port_type_id',
  row: 'row',
  column: 'column',
  orientation: 'orientation',
  is_restart: 'is_restart',
  number: 'number',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  created_user_id: 'created_user_id',
  modified_user_id: 'modified_user_id',
  deleted_user_id: 'deleted_user_id',
  uuid: 'uuid',
  asset_group_uuid: 'asset_group_uuid',
  equipment_uuid: 'equipment_uuid',
  path_uuid: 'path_uuid',
  port_type_uuid: 'port_type_uuid',
}

exports.Prisma.Port_categoriesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  created_user_id: 'created_user_id',
  modified_user_id: 'modified_user_id',
  deleted_user_id: 'deleted_user_id',
  uuid: 'uuid',
}

exports.Prisma.Port_typesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  is_front_back: 'is_front_back',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  created_user_id: 'created_user_id',
  modified_user_id: 'modified_user_id',
  deleted_user_id: 'deleted_user_id',
  port_category_id: 'port_category_id',
  uuid: 'uuid',
  port_category_uuid: 'port_category_uuid',
}

exports.Prisma.Asset_recapsScalarFieldEnum = {
  id: 'id',
  project_uuid: 'project_uuid',
  vendor_uuid: 'vendor_uuid',
  milestone_uuid: 'milestone_uuid',
  asset_group_uuid: 'asset_group_uuid',
  project_id: 'project_id',
  vendor_id: 'vendor_id',
  milestone_id: 'milestone_id',
  asset_group_id: 'asset_group_id',
  is_generated: 'is_generated',
  code_spec: 'code_spec',
  total: 'total',
  service: 'service',
  material: 'material',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  created_user_id: 'created_user_id',
  modified_user_id: 'modified_user_id',
  deleted_user_id: 'deleted_user_id',
}

exports.Prisma.BudgetsScalarFieldEnum = {
  id: 'id',
  project_uuid: 'project_uuid',
  vendor_uuid: 'vendor_uuid',
  milestone_uuid: 'milestone_uuid',
  project_id: 'project_id',
  vendor_id: 'vendor_id',
  milestone_id: 'milestone_id',
  type: 'type',
  is_generated: 'is_generated',
  is_system: 'is_system',
  description: 'description',
  uom: 'uom',
  total: 'total',
  material_price: 'material_price',
  service_price: 'service_price',
  total_price: 'total_price',
  is_done: 'is_done',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  created_user_id: 'created_user_id',
  modified_user_id: 'modified_user_id',
  deleted_user_id: 'deleted_user_id',
}

exports.Prisma.Cable_recapsScalarFieldEnum = {
  id: 'id',
  project_uuid: 'project_uuid',
  vendor_uuid: 'vendor_uuid',
  milestone_uuid: 'milestone_uuid',
  cable_group_uuid: 'cable_group_uuid',
  function_uuid: 'function_uuid',
  project_id: 'project_id',
  vendor_id: 'vendor_id',
  milestone_id: 'milestone_id',
  cable_group_id: 'cable_group_id',
  function_id: 'function_id',
  is_generated: 'is_generated',
  code_spec: 'code_spec',
  total_cable: 'total_cable',
  total_slack: 'total_slack',
  sub_total: 'sub_total',
  uom: 'uom',
  service: 'service',
  material: 'material',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  created_user_id: 'created_user_id',
  modified_user_id: 'modified_user_id',
  deleted_user_id: 'deleted_user_id',
}

exports.Prisma.Permit_item_recapsScalarFieldEnum = {
  id: 'id',
  project_uuid: 'project_uuid',
  vendor_uuid: 'vendor_uuid',
  milestone_uuid: 'milestone_uuid',
  permit_type_uuid: 'permit_type_uuid',
  project_id: 'project_id',
  vendor_id: 'vendor_id',
  milestone_id: 'milestone_id',
  is_generated: 'is_generated',
  total_length: 'total_length',
  total_site: 'total_site',
  permit_duration: 'permit_duration',
  ownership_name: 'ownership_name',
  service: 'service',
  material: 'material',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  created_user_id: 'created_user_id',
  modified_user_id: 'modified_user_id',
  deleted_user_id: 'deleted_user_id',
}

exports.Prisma.Recap_mappingsScalarFieldEnum = {
  id: 'id',
  subject_type: 'subject_type',
  service: 'service',
  material: 'material',
  created_user_id: 'created_user_id',
  modified_user_id: 'modified_user_id',
  deleted_user_id: 'deleted_user_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
}

exports.Prisma.Route_recapsScalarFieldEnum = {
  id: 'id',
  project_uuid: 'project_uuid',
  vendor_uuid: 'vendor_uuid',
  milestone_uuid: 'milestone_uuid',
  route_method_uuid: 'route_method_uuid',
  route_ownership_uuid: 'route_ownership_uuid',
  project_id: 'project_id',
  vendor_id: 'vendor_id',
  milestone_id: 'milestone_id',
  route_method_id: 'route_method_id',
  route_ownership_id: 'route_ownership_id',
  is_generated: 'is_generated',
  total: 'total',
  uom: 'uom',
  service: 'service',
  material: 'material',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  created_user_id: 'created_user_id',
  modified_user_id: 'modified_user_id',
  deleted_user_id: 'deleted_user_id',
}

exports.Prisma.Segment_retributionsScalarFieldEnum = {
  id: 'id',
  project_uuid: 'project_uuid',
  vendor_uuid: 'vendor_uuid',
  milestone_uuid: 'milestone_uuid',
  segment_uuid: 'segment_uuid',
  project_id: 'project_id',
  vendor_id: 'vendor_id',
  milestone_id: 'milestone_id',
  segment_id: 'segment_id',
  is_generated: 'is_generated',
  biaya_retribusi: 'biaya_retribusi',
  end_period: 'end_period',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  created_user_id: 'created_user_id',
  modified_user_id: 'modified_user_id',
  deleted_user_id: 'deleted_user_id',
}

exports.Prisma.Slack_support_recapsScalarFieldEnum = {
  id: 'id',
  project_uuid: 'project_uuid',
  vendor_uuid: 'vendor_uuid',
  milestone_uuid: 'milestone_uuid',
  project_id: 'project_id',
  vendor_id: 'vendor_id',
  milestone_id: 'milestone_id',
  is_generated: 'is_generated',
  quantity_slack: 'quantity_slack',
  quantity_support_slack: 'quantity_support_slack',
  service: 'service',
  material: 'material',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  created_user_id: 'created_user_id',
  modified_user_id: 'modified_user_id',
  deleted_user_id: 'deleted_user_id',
}

exports.Prisma.Splice_core_recapsScalarFieldEnum = {
  id: 'id',
  project_uuid: 'project_uuid',
  vendor_uuid: 'vendor_uuid',
  milestone_uuid: 'milestone_uuid',
  asset_uuid: 'asset_uuid',
  project_id: 'project_id',
  vendor_id: 'vendor_id',
  milestone_id: 'milestone_id',
  asset_id: 'asset_id',
  is_generated: 'is_generated',
  total_splice: 'total_splice',
  total_patch: 'total_patch',
  service: 'service',
  material: 'material',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  created_user_id: 'created_user_id',
  modified_user_id: 'modified_user_id',
  deleted_user_id: 'deleted_user_id',
}

exports.Prisma.TimelinesScalarFieldEnum = {
  id: 'id',
  project_uuid: 'project_uuid',
  vendor_uuid: 'vendor_uuid',
  milestone_uuid: 'milestone_uuid',
  permit_type_uuid: 'permit_type_uuid',
  project_id: 'project_id',
  vendor_id: 'vendor_id',
  milestone_id: 'milestone_id',
  is_generated: 'is_generated',
  total_length: 'total_length',
  total_site: 'total_site',
  permit_duration: 'permit_duration',
  ownership_name: 'ownership_name',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  created_user_id: 'created_user_id',
  modified_user_id: 'modified_user_id',
  deleted_user_id: 'deleted_user_id',
}

exports.Prisma.Cable_categoriesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  created_user_id: 'created_user_id',
  modified_user_id: 'modified_user_id',
  deleted_user_id: 'deleted_user_id',
  uuid: 'uuid',
}

exports.Prisma.Cable_group_itemsScalarFieldEnum = {
  id: 'id',
  cable_id: 'cable_id',
  cable_group_id: 'cable_group_id',
  component_category_id: 'component_category_id',
  transaction_status_id: 'transaction_status_id',
  path: 'path',
  number: 'number',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  created_user_id: 'created_user_id',
  modified_user_id: 'modified_user_id',
  deleted_user_id: 'deleted_user_id',
  uuid: 'uuid',
  cable_uuid: 'cable_uuid',
  cable_group_uuid: 'cable_group_uuid',
  component_category_uuid: 'component_category_uuid',
  transaction_status_uuid: 'transaction_status_uuid',
  path_uuid: 'path_uuid',
}

exports.Prisma.Cable_groupsScalarFieldEnum = {
  id: 'id',
  cable_category_id: 'cable_category_id',
  name: 'name',
  description: 'description',
  max_tube: 'max_tube',
  max_core: 'max_core',
  core_per_tube: 'core_per_tube',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  created_user_id: 'created_user_id',
  modified_user_id: 'modified_user_id',
  deleted_user_id: 'deleted_user_id',
  uuid: 'uuid',
  cable_category_uuid: 'cable_category_uuid',
}

exports.Prisma.Cable_historiesScalarFieldEnum = {
  id: 'id',
  cable_id: 'cable_id',
  parent_cable_id: 'parent_cable_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  created_user_id: 'created_user_id',
  modified_user_id: 'modified_user_id',
  deleted_user_id: 'deleted_user_id',
  uuid: 'uuid',
  cable_uuid: 'cable_uuid',
  parent_cable_uuid: 'parent_cable_uuid',
}

exports.Prisma.Cable_routesScalarFieldEnum = {
  id: 'id',
  cable_id: 'cable_id',
  route_id: 'route_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  created_user_id: 'created_user_id',
  modified_user_id: 'modified_user_id',
  deleted_user_id: 'deleted_user_id',
  uuid: 'uuid',
  cable_uuid: 'cable_uuid',
  route_uuid: 'route_uuid',
}

exports.Prisma.CablesScalarFieldEnum = {
  id: 'id',
  cable_category_id: 'cable_category_id',
  cable_group_id: 'cable_group_id',
  name: 'name',
  code: 'code',
  site_from: 'site_from',
  site_to: 'site_to',
  description: 'description',
  length: 'length',
  is_active: 'is_active',
  asset_ownership_id: 'asset_ownership_id',
  area_ownership_id: 'area_ownership_id',
  placement_type_id: 'placement_type_id',
  function_id: 'function_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  created_user_id: 'created_user_id',
  modified_user_id: 'modified_user_id',
  deleted_user_id: 'deleted_user_id',
  uuid: 'uuid',
  cable_category_uuid: 'cable_category_uuid',
  cable_group_uuid: 'cable_group_uuid',
  site_from_uuid: 'site_from_uuid',
  site_to_uuid: 'site_to_uuid',
  asset_ownership_uuid: 'asset_ownership_uuid',
  area_ownership_uuid: 'area_ownership_uuid',
  placement_type_uuid: 'placement_type_uuid',
  function_uuid: 'function_uuid',
}

exports.Prisma.ColorsScalarFieldEnum = {
  id: 'id',
  color_number: 'color_number',
  color: 'color',
  hexa_code: 'hexa_code',
  description: 'description',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  created_user_id: 'created_user_id',
  modified_user_id: 'modified_user_id',
  deleted_user_id: 'deleted_user_id',
  uuid: 'uuid',
}

exports.Prisma.Component_categoriesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  created_user_id: 'created_user_id',
  modified_user_id: 'modified_user_id',
  deleted_user_id: 'deleted_user_id',
  uuid: 'uuid',
}

exports.Prisma.SlacksScalarFieldEnum = {
  id: 'id',
  site_point_id: 'site_point_id',
  cable_id: 'cable_id',
  length: 'length',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  created_user_id: 'created_user_id',
  modified_user_id: 'modified_user_id',
  deleted_user_id: 'deleted_user_id',
  uuid: 'uuid',
  site_point_uuid: 'site_point_uuid',
  cable_uuid: 'cable_uuid',
}

exports.Prisma.Application_parametersScalarFieldEnum = {
  id: 'id',
  type: 'type',
  code: 'code',
  name: 'name',
  description: 'description',
  color: 'color',
  order: 'order',
  value: 'value',
  is_other: 'is_other',
  access_rights: 'access_rights',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  created_user_id: 'created_user_id',
  modified_user_id: 'modified_user_id',
  deleted_user_id: 'deleted_user_id',
  uuid: 'uuid',
}

exports.Prisma.AreasScalarFieldEnum = {
  id: 'id',
  region_id: 'region_id',
  code: 'code',
  label: 'label',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  created_user_id: 'created_user_id',
  modified_user_id: 'modified_user_id',
  deleted_user_id: 'deleted_user_id',
  uuid: 'uuid',
  region_uuid: 'region_uuid',
}

exports.Prisma.Cluster_zipcodesScalarFieldEnum = {
  id: 'id',
  zip_code: 'zip_code',
  region_id: 'region_id',
  area_id: 'area_id',
  cluster_id: 'cluster_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  created_user_id: 'created_user_id',
  modified_user_id: 'modified_user_id',
  deleted_user_id: 'deleted_user_id',
  uuid: 'uuid',
  region_uuid: 'region_uuid',
  area_uuid: 'area_uuid',
  cluster_uuid: 'cluster_uuid',
}

exports.Prisma.ClustersScalarFieldEnum = {
  id: 'id',
  region_id: 'region_id',
  area_id: 'area_id',
  code: 'code',
  label: 'label',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  created_user_id: 'created_user_id',
  modified_user_id: 'modified_user_id',
  deleted_user_id: 'deleted_user_id',
  uuid: 'uuid',
  region_uuid: 'region_uuid',
  area_uuid: 'area_uuid',
}

exports.Prisma.CompaniesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  created_user_id: 'created_user_id',
  modified_user_id: 'modified_user_id',
  deleted_user_id: 'deleted_user_id',
  code: 'code',
  uuid: 'uuid',
}

exports.Prisma.Company_coveragesScalarFieldEnum = {
  id: 'id',
  company_id: 'company_id',
  region_id: 'region_id',
  area_id: 'area_id',
  cluster_id: 'cluster_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  created_user_id: 'created_user_id',
  modified_user_id: 'modified_user_id',
  deleted_user_id: 'deleted_user_id',
  uuid: 'uuid',
  company_uuid: 'company_uuid',
  region_uuid: 'region_uuid',
  area_uuid: 'area_uuid',
  cluster_uuid: 'cluster_uuid',
}

exports.Prisma.EmployeesScalarFieldEnum = {
  id: 'id',
  t_employee_id: 't_employee_id',
  employee_name: 'employee_name',
  employee_no: 'employee_no',
  employee_initial: 'employee_initial',
  organization_name: 'organization_name',
  start_of_work: 'start_of_work',
  end_of_work: 'end_of_work',
  jenjang_jabatan_name: 'jenjang_jabatan_name',
  direktorat: 'direktorat',
  divisi: 'divisi',
  bagian: 'bagian',
  sub_bagian: 'sub_bagian',
  email: 'email',
  employee_no_atasan: 'employee_no_atasan',
  employee_no_atasan_real: 'employee_no_atasan_real',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  created_user_id: 'created_user_id',
  modified_user_id: 'modified_user_id',
  deleted_user_id: 'deleted_user_id',
  uuid: 'uuid',
}

exports.Prisma.MilestonesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  code: 'code',
  description: 'description',
  order: 'order',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  created_user_id: 'created_user_id',
  modified_user_id: 'modified_user_id',
  deleted_user_id: 'deleted_user_id',
  uuid: 'uuid',
}

exports.Prisma.Object_variablesScalarFieldEnum = {
  id: 'id',
  subject_type: 'subject_type',
  subject_id: 'subject_id',
  variable_type_id: 'variable_type_id',
  variable_id: 'variable_id',
  option_id: 'option_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  created_user_id: 'created_user_id',
  modified_user_id: 'modified_user_id',
  deleted_user_id: 'deleted_user_id',
  uuid: 'uuid',
  subject_uuid: 'subject_uuid',
  variable_type_uuid: 'variable_type_uuid',
  variable_uuid: 'variable_uuid',
  option_uuid: 'option_uuid',
}

exports.Prisma.Option_itemsScalarFieldEnum = {
  id: 'id',
  option_id: 'option_id',
  name: 'name',
  code: 'code',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  created_user_id: 'created_user_id',
  modified_user_id: 'modified_user_id',
  deleted_user_id: 'deleted_user_id',
  uuid: 'uuid',
  option_uuid: 'option_uuid',
}

exports.Prisma.OptionsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  code: 'code',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  created_user_id: 'created_user_id',
  modified_user_id: 'modified_user_id',
  deleted_user_id: 'deleted_user_id',
  uuid: 'uuid',
}

exports.Prisma.Project_assetsScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  project_id: 'project_id',
  asset_id: 'asset_id',
  created_user_id: 'created_user_id',
  modified_user_id: 'modified_user_id',
  deleted_user_id: 'deleted_user_id',
  uuid: 'uuid',
  project_uuid: 'project_uuid',
  asset_uuid: 'asset_uuid',
}

exports.Prisma.Project_groupsScalarFieldEnum = {
  id: 'id',
  code: 'code',
  name: 'name',
  description: 'description',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  created_user_id: 'created_user_id',
  modified_user_id: 'modified_user_id',
  deleted_user_id: 'deleted_user_id',
  uuid: 'uuid',
}

exports.Prisma.Project_justificationsScalarFieldEnum = {
  id: 'id',
  project_id: 'project_id',
  description: 'description',
  filename: 'filename',
  file_url: 'file_url',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  created_user_id: 'created_user_id',
  modified_user_id: 'modified_user_id',
  deleted_user_id: 'deleted_user_id',
  uuid: 'uuid',
  project_uuid: 'project_uuid',
}

exports.Prisma.Project_milestonesScalarFieldEnum = {
  id: 'id',
  project_id: 'project_id',
  milestone_id: 'milestone_id',
  status: 'status',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  created_user_id: 'created_user_id',
  modified_user_id: 'modified_user_id',
  deleted_user_id: 'deleted_user_id',
  uuid: 'uuid',
  project_uuid: 'project_uuid',
  milestone_uuid: 'milestone_uuid',
}

exports.Prisma.Project_sharesScalarFieldEnum = {
  id: 'id',
  project_id: 'project_id',
  milestone_id: 'milestone_id',
  user_type_id: 'user_type_id',
  user_id: 'user_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  created_user_id: 'created_user_id',
  modified_user_id: 'modified_user_id',
  deleted_user_id: 'deleted_user_id',
  uuid: 'uuid',
  project_uuid: 'project_uuid',
  milestone_uuid: 'milestone_uuid',
  user_type_uuid: 'user_type_uuid',
  user_uuid: 'user_uuid',
}

exports.Prisma.ProjectsScalarFieldEnum = {
  id: 'id',
  company_id: 'company_id',
  vendor_id: 'vendor_id',
  name: 'name',
  spk_no: 'spk_no',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  created_user_id: 'created_user_id',
  modified_user_id: 'modified_user_id',
  deleted_user_id: 'deleted_user_id',
  is_done: 'is_done',
  latest_step: 'latest_step',
  project_group_id: 'project_group_id',
  code: 'code',
  status: 'status',
  tag: 'tag',
  purpose_id: 'purpose_id',
  description: 'description',
  project_owner_id: 'project_owner_id',
  milestone_id: 'milestone_id',
  tag_activity: 'tag_activity',
  po_number: 'po_number',
  uuid: 'uuid',
  company_uuid: 'company_uuid',
  vendor_uuid: 'vendor_uuid',
  project_group_uuid: 'project_group_uuid',
  purpose_uuid: 'purpose_uuid',
  project_owner_uuid: 'project_owner_uuid',
  milestone_uuid: 'milestone_uuid',
}

exports.Prisma.Purpose_milestonesScalarFieldEnum = {
  id: 'id',
  purpose_id: 'purpose_id',
  milestone_id: 'milestone_id',
  description: 'description',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  created_user_id: 'created_user_id',
  modified_user_id: 'modified_user_id',
  deleted_user_id: 'deleted_user_id',
  uuid: 'uuid',
  purpose_uuid: 'purpose_uuid',
  milestone_uuid: 'milestone_uuid',
}

exports.Prisma.PurposesScalarFieldEnum = {
  id: 'id',
  code: 'code',
  name: 'name',
  description: 'description',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  created_user_id: 'created_user_id',
  modified_user_id: 'modified_user_id',
  deleted_user_id: 'deleted_user_id',
  uuid: 'uuid',
}

exports.Prisma.RegionsScalarFieldEnum = {
  id: 'id',
  code: 'code',
  label: 'label',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  created_user_id: 'created_user_id',
  modified_user_id: 'modified_user_id',
  deleted_user_id: 'deleted_user_id',
  uuid: 'uuid',
}

exports.Prisma.TagsScalarFieldEnum = {
  id: 'id',
  tag: 'tag',
  uuid: 'uuid',
}

exports.Prisma.User_companiesScalarFieldEnum = {
  id: 'id',
  company_id: 'company_id',
  is_active: 'is_active',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  created_user_id: 'created_user_id',
  modified_user_id: 'modified_user_id',
  deleted_user_id: 'deleted_user_id',
  user_id: 'user_id',
  uuid: 'uuid',
  company_uuid: 'company_uuid',
  user_uuid: 'user_uuid',
}

exports.Prisma.Variable_valuesScalarFieldEnum = {
  id: 'id',
  subject_type: 'subject_type',
  subject_id: 'subject_id',
  variable_id: 'variable_id',
  value: 'value',
  option_item_id: 'option_item_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  created_user_id: 'created_user_id',
  modified_user_id: 'modified_user_id',
  deleted_user_id: 'deleted_user_id',
  uuid: 'uuid',
  subject_uuid: 'subject_uuid',
  variable_uuid: 'variable_uuid',
  option_item_uuid: 'option_item_uuid',
}

exports.Prisma.VariablesScalarFieldEnum = {
  id: 'id',
  variable_type_id: 'variable_type_id',
  option_id: 'option_id',
  variable_name: 'variable_name',
  description: 'description',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  created_user_id: 'created_user_id',
  modified_user_id: 'modified_user_id',
  deleted_user_id: 'deleted_user_id',
  is_thumbnail: 'is_thumbnail',
  uuid: 'uuid',
  variable_type_uuid: 'variable_type_uuid',
  option_uuid: 'option_uuid',
}

exports.Prisma.VendorsScalarFieldEnum = {
  id: 'id',
  vendor_no: 'vendor_no',
  vendor_type_id: 'vendor_type_id',
  name: 'name',
  description: 'description',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  created_user_id: 'created_user_id',
  modified_user_id: 'modified_user_id',
  deleted_user_id: 'deleted_user_id',
  uuid: 'uuid',
  vendor_type_uuid: 'vendor_type_uuid',
}

exports.Prisma.AuditsScalarFieldEnum = {
  id: 'id',
  user_type: 'user_type',
  user_id: 'user_id',
  event: 'event',
  auditable_type: 'auditable_type',
  auditable_id: 'auditable_id',
  old_values: 'old_values',
  new_values: 'new_values',
  url: 'url',
  ip_address: 'ip_address',
  user_agent: 'user_agent',
  tags: 'tags',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
}

exports.Prisma.Failed_jobsScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  connection: 'connection',
  queue: 'queue',
  payload: 'payload',
  exception: 'exception',
  failed_at: 'failed_at',
}

exports.Prisma.JobsScalarFieldEnum = {
  id: 'id',
  queue: 'queue',
  payload: 'payload',
  attempts: 'attempts',
  reserved_at: 'reserved_at',
  available_at: 'available_at',
  created_at: 'created_at',
}

exports.Prisma.MenusScalarFieldEnum = {
  id: 'id',
  label: 'label',
  menu_id: 'menu_id',
  icon: 'icon',
  sort: 'sort',
  router: 'router',
  router_parameter: 'router_parameter',
  is_heading: 'is_heading',
  menu_parent_id: 'menu_parent_id',
  module: 'module',
  sub_module: 'sub_module',
  allowed_permission: 'allowed_permission',
  router_selected_active: 'router_selected_active',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  uuid: 'uuid',
}

exports.Prisma.MigrationsScalarFieldEnum = {
  id: 'id',
  migration: 'migration',
  batch: 'batch',
}

exports.Prisma.Model_has_permissionsScalarFieldEnum = {
  permission_id: 'permission_id',
  model_type: 'model_type',
  model_id: 'model_id',
}

exports.Prisma.Model_has_rolesScalarFieldEnum = {
  role_id: 'role_id',
  model_type: 'model_type',
  model_id: 'model_id',
}

exports.Prisma.Nodejs_migrationsScalarFieldEnum = {
  id: 'id',
  timestamp: 'timestamp',
  name: 'name',
  uuid: 'uuid',
}

exports.Prisma.Password_reset_tokensScalarFieldEnum = {
  email: 'email',
  token: 'token',
  created_at: 'created_at',
  uuid: 'uuid',
}

exports.Prisma.PermissionsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  guard_name: 'guard_name',
  group: 'group',
  module: 'module',
  sub_module: 'sub_module',
  created_at: 'created_at',
  updated_at: 'updated_at',
  uuid: 'uuid',
}

exports.Prisma.Personal_access_tokensScalarFieldEnum = {
  id: 'id',
  tokenable_type: 'tokenable_type',
  tokenable_id: 'tokenable_id',
  name: 'name',
  token: 'token',
  abilities: 'abilities',
  last_used_at: 'last_used_at',
  expires_at: 'expires_at',
  created_at: 'created_at',
  updated_at: 'updated_at',
  uuid: 'uuid',
}

exports.Prisma.Privilege_group_itemsScalarFieldEnum = {
  id: 'id',
  privilege_group_id: 'privilege_group_id',
  region_id: 'region_id',
  area_id: 'area_id',
  cluster_id: 'cluster_id',
  deleted_at: 'deleted_at',
  created_at: 'created_at',
  updated_at: 'updated_at',
  created_user_id: 'created_user_id',
  modified_user_id: 'modified_user_id',
  deleted_user_id: 'deleted_user_id',
  privilege_group_uuid: 'privilege_group_uuid',
  region_uuid: 'region_uuid',
  area_uuid: 'area_uuid',
  cluster_uuid: 'cluster_uuid',
  uuid: 'uuid',
}

exports.Prisma.Privilege_groupsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  deleted_at: 'deleted_at',
  created_at: 'created_at',
  updated_at: 'updated_at',
  created_user_id: 'created_user_id',
  modified_user_id: 'modified_user_id',
  deleted_user_id: 'deleted_user_id',
  uuid: 'uuid',
}

exports.Prisma.Role_has_permissionsScalarFieldEnum = {
  permission_id: 'permission_id',
  role_id: 'role_id',
}

exports.Prisma.RolesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  guard_name: 'guard_name',
  label: 'label',
  description: 'description',
  is_active: 'is_active',
  is_admin: 'is_admin',
  is_super_admin: 'is_super_admin',
  group: 'group',
  created_at: 'created_at',
  updated_at: 'updated_at',
  created_user_id: 'created_user_id',
  modified_user_id: 'modified_user_id',
  deleted_user_id: 'deleted_user_id',
  deleted_at: 'deleted_at',
  uuid: 'uuid',
}

exports.Prisma.Spatial_ref_sysScalarFieldEnum = {
  srid: 'srid',
  auth_name: 'auth_name',
  auth_srid: 'auth_srid',
  srtext: 'srtext',
  proj4text: 'proj4text',
}

exports.Prisma.User_password_historiesScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  password: 'password',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  created_user_id: 'created_user_id',
  modified_user_id: 'modified_user_id',
  deleted_user_id: 'deleted_user_id',
  uuid: 'uuid',
}

exports.Prisma.UsersScalarFieldEnum = {
  id: 'id',
  user_type_id: 'user_type_id',
  t_employee_id: 't_employee_id',
  username: 'username',
  name: 'name',
  email: 'email',
  phone: 'phone',
  password: 'password',
  last_login: 'last_login',
  account_actived_at: 'account_actived_at',
  created_user_id: 'created_user_id',
  modified_user_id: 'modified_user_id',
  deleted_user_id: 'deleted_user_id',
  remember_token: 'remember_token',
  deleted_at: 'deleted_at',
  created_at: 'created_at',
  updated_at: 'updated_at',
  two_factor_secret: 'two_factor_secret',
  two_factor_recovery_codes: 'two_factor_recovery_codes',
  two_factor_confirmed_at: 'two_factor_confirmed_at',
  privilege_group_id: 'privilege_group_id',
  vendor_id: 'vendor_id',
  login_failed_attempt: 'login_failed_attempt',
  uuid: 'uuid',
  is_vendor_pic: 'is_vendor_pic',
  user_type_uuid: 'user_type_uuid',
  privilege_group_uuid: 'privilege_group_uuid',
  vendor_uuid: 'vendor_uuid',
}

exports.Prisma.RoutesScalarFieldEnum = {
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  created_user_id: 'created_user_id',
  modified_user_id: 'modified_user_id',
  deleted_user_id: 'deleted_user_id',
  id: 'id',
  site_category_id: 'site_category_id',
  name: 'name',
  site_from: 'site_from',
  site_to: 'site_to',
  length: 'length',
  route_method_id: 'route_method_id',
  route_ownership_id: 'route_ownership_id',
  uuid: 'uuid',
  site_category_uuid: 'site_category_uuid',
  site_from_uuid: 'site_from_uuid',
  site_to_uuid: 'site_to_uuid',
}

exports.Prisma.Segment_routesScalarFieldEnum = {
  id: 'id',
  segment_id: 'segment_id',
  route_id: 'route_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  created_user_id: 'created_user_id',
  modified_user_id: 'modified_user_id',
  deleted_user_id: 'deleted_user_id',
  uuid: 'uuid',
  segment_uuid: 'segment_uuid',
  route_uuid: 'route_uuid',
}

exports.Prisma.SegmentsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  code: 'code',
  site_from: 'site_from',
  site_to: 'site_to',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  created_user_id: 'created_user_id',
  modified_user_id: 'modified_user_id',
  deleted_user_id: 'deleted_user_id',
  uuid: 'uuid',
  site_from_uuid: 'site_from_uuid',
  site_to_uuid: 'site_to_uuid',
}

exports.Prisma.Site_categoriesScalarFieldEnum = {
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  created_user_id: 'created_user_id',
  modified_user_id: 'modified_user_id',
  deleted_user_id: 'deleted_user_id',
  id: 'id',
  name: 'name',
  uuid: 'uuid',
}

exports.Prisma.Site_pointsScalarFieldEnum = {
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  created_user_id: 'created_user_id',
  modified_user_id: 'modified_user_id',
  deleted_user_id: 'deleted_user_id',
  id: 'id',
  village_id: 'village_id',
  name: 'name',
  latitude: 'latitude',
  longitude: 'longitude',
  site_category_id: 'site_category_id',
  code: 'code',
  uuid: 'uuid',
  site_category_uuid: 'site_category_uuid',
}

exports.Prisma.LayerScalarFieldEnum = {
  topology_id: 'topology_id',
  layer_id: 'layer_id',
  schema_name: 'schema_name',
  table_name: 'table_name',
  feature_column: 'feature_column',
  feature_type: 'feature_type',
  level: 'level',
  child_id: 'child_id',
}

exports.Prisma.TopologyScalarFieldEnum = {
  id: 'id',
  name: 'name',
  srid: 'srid',
  precision: 'precision',
  hasz: 'hasz',
}

exports.Prisma.Project_segmentsScalarFieldEnum = {
  id: 'id',
  project_id: 'project_id',
  segment_id: 'segment_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  created_user_id: 'created_user_id',
  modified_user_id: 'modified_user_id',
  deleted_user_id: 'deleted_user_id',
}

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc',
}

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
}

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive',
}

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last',
}

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull,
}

exports.Prisma.ModelName = {
  cities: 'cities',
  districts: 'districts',
  provinces: 'provinces',
  villages: 'villages',
  asset_categories: 'asset_categories',
  asset_category_equipment_levels: 'asset_category_equipment_levels',
  asset_group_attachments: 'asset_group_attachments',
  asset_groups: 'asset_groups',
  assets: 'assets',
  equipment_categories: 'equipment_categories',
  equipments: 'equipments',
  master_asset_group_items: 'master_asset_group_items',
  port_categories: 'port_categories',
  port_types: 'port_types',
  asset_recaps: 'asset_recaps',
  budgets: 'budgets',
  cable_recaps: 'cable_recaps',
  permit_item_recaps: 'permit_item_recaps',
  recap_mappings: 'recap_mappings',
  route_recaps: 'route_recaps',
  segment_retributions: 'segment_retributions',
  slack_support_recaps: 'slack_support_recaps',
  splice_core_recaps: 'splice_core_recaps',
  timelines: 'timelines',
  cable_categories: 'cable_categories',
  cable_group_items: 'cable_group_items',
  cable_groups: 'cable_groups',
  cable_histories: 'cable_histories',
  cable_routes: 'cable_routes',
  cables: 'cables',
  colors: 'colors',
  component_categories: 'component_categories',
  slacks: 'slacks',
  application_parameters: 'application_parameters',
  areas: 'areas',
  cluster_zipcodes: 'cluster_zipcodes',
  clusters: 'clusters',
  companies: 'companies',
  company_coverages: 'company_coverages',
  employees: 'employees',
  milestones: 'milestones',
  object_variables: 'object_variables',
  option_items: 'option_items',
  options: 'options',
  project_assets: 'project_assets',
  project_groups: 'project_groups',
  project_justifications: 'project_justifications',
  project_milestones: 'project_milestones',
  project_shares: 'project_shares',
  projects: 'projects',
  purpose_milestones: 'purpose_milestones',
  purposes: 'purposes',
  regions: 'regions',
  tags: 'tags',
  user_companies: 'user_companies',
  variable_values: 'variable_values',
  variables: 'variables',
  vendors: 'vendors',
  audits: 'audits',
  failed_jobs: 'failed_jobs',
  jobs: 'jobs',
  menus: 'menus',
  migrations: 'migrations',
  model_has_permissions: 'model_has_permissions',
  model_has_roles: 'model_has_roles',
  nodejs_migrations: 'nodejs_migrations',
  password_reset_tokens: 'password_reset_tokens',
  permissions: 'permissions',
  personal_access_tokens: 'personal_access_tokens',
  privilege_group_items: 'privilege_group_items',
  privilege_groups: 'privilege_groups',
  role_has_permissions: 'role_has_permissions',
  roles: 'roles',
  spatial_ref_sys: 'spatial_ref_sys',
  user_password_histories: 'user_password_histories',
  users: 'users',
  routes: 'routes',
  segment_routes: 'segment_routes',
  segments: 'segments',
  site_categories: 'site_categories',
  site_points: 'site_points',
  layer: 'layer',
  topology: 'topology',
  project_segments: 'project_segments',
}

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          workerd: 'Cloudflare Workers',
          deno: 'Deno and Deno Deploy',
          netlify: 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message +=
            edgeRuntimeName +
            '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message +=
            'this browser environment, or has been bundled for the browser (running in `' +
            runtime +
            '`).'
        }

        message += `
If this is unexpected, please open an issue: https://github.com/prisma/prisma/issues`

        throw new Error(message)
      },
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
