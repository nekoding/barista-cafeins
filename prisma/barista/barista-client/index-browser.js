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

exports.Prisma.ProjectScalarFieldEnum = {
  uuid: 'uuid',
  cafeins_uuid: 'cafeins_uuid',
  company_code: 'company_code',
  vendor_no: 'vendor_no',
  name: 'name',
  project_group_code: 'project_group_code',
  created_at: 'created_at',
  updated_at: 'updated_at',
  created_employee_no: 'created_employee_no',
  modified_employee_no: 'modified_employee_no',
  description: 'description',
  po_number: 'po_number',
  owner_name: 'owner_name',
  owner_nik: 'owner_nik',
  status: 'status',
  last_read: 'last_read',
  is_migrated: 'is_migrated',
}

exports.Prisma.SitePointScalarFieldEnum = {
  uuid: 'uuid',
  cafeins_uuid: 'cafeins_uuid',
  name: 'name',
  site_group_code: 'site_group_code',
  latitude: 'latitude',
  longitude: 'longitude',
  created_at: 'created_at',
  updated_at: 'updated_at',
  created_employee_no: 'created_employee_no',
  modified_employee_no: 'modified_employee_no',
  status: 'status',
  last_read: 'last_read',
  is_migrated: 'is_migrated',
}

exports.Prisma.LogScalarFieldEnum = {
  uuid: 'uuid',
  level: 'level',
  message: 'message',
  meta: 'meta',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
}

exports.Prisma.AssetScalarFieldEnum = {
  uuid: 'uuid',
  cafeins_uuid: 'cafeins_uuid',
  unique_id: 'unique_id',
  name: 'name',
  description: 'description',
  created_at: 'created_at',
  updated_at: 'updated_at',
  created_employee_no: 'created_employee_no',
  modified_employee_no: 'modified_employee_no',
  code: 'code',
  asset_group_code: 'asset_group_code',
  project_group_code: 'project_group_code',
  site_group_code: 'site_group_code',
  asset_category: 'asset_category',
  asset_ownership: 'asset_ownership',
  area_ownership: 'area_ownership',
  status: 'status',
  last_read: 'last_read',
  is_migrated: 'is_migrated',
}

exports.Prisma.RouteScalarFieldEnum = {
  uuid: 'uuid',
  cafeins_uuid: 'cafeins_uuid',
  unique_id: 'unique_id',
  name: 'name',
  length: 'length',
  created_at: 'created_at',
  updated_at: 'updated_at',
  created_employee_no: 'created_employee_no',
  modified_employee_no: 'modified_employee_no',
  site_group_code_from: 'site_group_code_from',
  site_group_code_to: 'site_group_code_to',
  route_method: 'route_method',
  route_ownership: 'route_ownership',
  status: 'status',
  last_read: 'last_read',
  is_migrated: 'is_migrated',
}

exports.Prisma.CableScalarFieldEnum = {
  uuid: 'uuid',
  cafeins_uuid: 'cafeins_uuid',
  unique_id: 'unique_id',
  project_group_code: 'project_group_code',
  name: 'name',
  description: 'description',
  length: 'length',
  created_at: 'created_at',
  updated_at: 'updated_at',
  created_employee_no: 'created_employee_no',
  modified_employee_no: 'modified_employee_no',
  cable_category: 'cable_category',
  cable_group: 'cable_group',
  site_group_code_from: 'site_group_code_from',
  site_group_code_to: 'site_group_code_to',
  asset_ownership: 'asset_ownership',
  area_ownership: 'area_ownership',
  placement_type: 'placement_type',
  function: 'function',
  route_unique_id_pembentuk: 'route_unique_id_pembentuk',
  status: 'status',
  last_read: 'last_read',
  is_migrated: 'is_migrated',
}

exports.Prisma.SegmentScalarFieldEnum = {
  uuid: 'uuid',
  cafeins_uuid: 'cafeins_uuid',
  unique_id: 'unique_id',
  project_group_code: 'project_group_code',
  name: 'name',
  created_at: 'created_at',
  updated_at: 'updated_at',
  created_employee_no: 'created_employee_no',
  modified_employee_no: 'modified_employee_no',
  site_group_code_from: 'site_group_code_from',
  site_group_code_to: 'site_group_code_to',
  route_unique_id_pembentuk: 'route_unique_id_pembentuk',
  status: 'status',
  last_read: 'last_read',
  is_migrated: 'is_migrated',
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
exports.MIGRATION_STATUS = exports.$Enums.MIGRATION_STATUS = {
  CREATED: 'CREATED',
  UPDATED: 'UPDATED',
}

exports.Prisma.ModelName = {
  Project: 'Project',
  SitePoint: 'SitePoint',
  Log: 'Log',
  Asset: 'Asset',
  Route: 'Route',
  Cable: 'Cable',
  Segment: 'Segment',
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
