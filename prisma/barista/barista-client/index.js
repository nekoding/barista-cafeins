Object.defineProperty(exports, '__esModule', { value: true })

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
} = require('./runtime/library')

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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
 * Extensions
 */
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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

const path = require('path')

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
 * Create the Client
 */
const config = {
  generator: {
    name: 'client',
    provider: {
      fromEnvVar: null,
      value: 'prisma-client-js',
    },
    output: {
      value:
        '/home/nekoding/Project/bunjs/barista-cafeins/prisma/barista/barista-client',
      fromEnvVar: null,
    },
    config: {
      engineType: 'library',
    },
    binaryTargets: [
      {
        fromEnvVar: null,
        value: 'debian-openssl-3.0.x',
        native: true,
      },
    ],
    previewFeatures: ['postgresqlExtensions'],
    isCustomOutput: true,
  },
  relativeEnvPaths: {
    rootEnvPath: '../../../.env',
    schemaEnvPath: '../../../.env',
  },
  relativePath: '..',
  clientVersion: '5.5.2',
  engineVersion: 'aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a',
  datasourceNames: ['db'],
  activeProvider: 'postgresql',
  inlineDatasources: {
    db: {
      url: {
        fromEnvVar: 'DATABASE_BARISTA_URL',
        value: null,
      },
    },
  },
  inlineSchema:
    'Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgICAgICAgID0gInByaXNtYS1jbGllbnQtanMiCiAgb3V0cHV0ICAgICAgICAgID0gImJhcmlzdGEtY2xpZW50IgogIHByZXZpZXdGZWF0dXJlcyA9IFsicG9zdGdyZXNxbEV4dGVuc2lvbnMiXQp9CgpkYXRhc291cmNlIGRiIHsKICBwcm92aWRlciAgID0gInBvc3RncmVzcWwiCiAgdXJsICAgICAgICA9IGVudigiREFUQUJBU0VfQkFSSVNUQV9VUkwiKQogIGV4dGVuc2lvbnMgPSBbcG9zdGdpc10KfQoKZW51bSBNSUdSQVRJT05fU1RBVFVTIHsKICBDUkVBVEVECiAgVVBEQVRFRAp9CgovLyBNb2RlbAptb2RlbCBQcm9qZWN0IHsKICB1dWlkICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICBAaWQgQGRlZmF1bHQoZGJnZW5lcmF0ZWQoImdlbl9yYW5kb21fdXVpZCgpIikpIEBkYi5VdWlkCiAgY2FmZWluc191dWlkICAgICAgICAgU3RyaW5nPwogIGNvbXBhbnlfY29kZSAgICAgICAgIFN0cmluZwogIHZlbmRvcl9ubyAgICAgICAgICAgIFN0cmluZwogIG5hbWUgICAgICAgICAgICAgICAgIFN0cmluZwogIHByb2plY3RfZ3JvdXBfY29kZSAgIFN0cmluZyAgICAgICAgICAgIEB1bmlxdWUKICBjcmVhdGVkX2F0ICAgICAgICAgICBEYXRlVGltZSAgICAgICAgICBAZGVmYXVsdChub3coKSkKICB1cGRhdGVkX2F0ICAgICAgICAgICBEYXRlVGltZSAgICAgICAgICBAdXBkYXRlZEF0CiAgY3JlYXRlZF9lbXBsb3llZV9ubyAgU3RyaW5nPwogIG1vZGlmaWVkX2VtcGxveWVlX25vIFN0cmluZz8KICBkZXNjcmlwdGlvbiAgICAgICAgICBTdHJpbmc/CiAgcG9fbnVtYmVyICAgICAgICAgICAgU3RyaW5nPwogIG93bmVyX25hbWUgICAgICAgICAgIFN0cmluZwogIG93bmVyX25payAgICAgICAgICAgIFN0cmluZwogIHN0YXR1cyAgICAgICAgICAgICAgIE1JR1JBVElPTl9TVEFUVVM/CiAgbGFzdF9yZWFkICAgICAgICAgICAgRGF0ZVRpbWU/CiAgaXNfbWlncmF0ZWQgICAgICAgICAgQm9vbGVhbiAgICAgICAgICAgQGRlZmF1bHQoZmFsc2UpCgogIEBAbWFwKCJwcm9qZWN0cyIpCn0KCm1vZGVsIFNpdGVQb2ludCB7CiAgdXVpZCAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChkYmdlbmVyYXRlZCgiZ2VuX3JhbmRvbV91dWlkKCkiKSkgQGRiLlV1aWQKICBjYWZlaW5zX3V1aWQgICAgICAgICBTdHJpbmc/CiAgbmFtZSAgICAgICAgICAgICAgICAgU3RyaW5nCiAgc2l0ZV9ncm91cF9jb2RlICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgIEB1bmlxdWUKICBsYXRpdHVkZSAgICAgICAgICAgICBGbG9hdAogIGxvbmdpdHVkZSAgICAgICAgICAgIEZsb2F0CiAgZ2VvbWV0cnkgICAgICAgICAgICAgVW5zdXBwb3J0ZWQoImdlb21ldHJ5Iik/CiAgY3JlYXRlZF9hdCAgICAgICAgICAgRGF0ZVRpbWUgICAgICAgICAgICAgICAgIEBkZWZhdWx0KG5vdygpKQogIHVwZGF0ZWRfYXQgICAgICAgICAgIERhdGVUaW1lICAgICAgICAgICAgICAgICBAdXBkYXRlZEF0CiAgY3JlYXRlZF9lbXBsb3llZV9ubyAgU3RyaW5nPwogIG1vZGlmaWVkX2VtcGxveWVlX25vIFN0cmluZz8KICBzdGF0dXMgICAgICAgICAgICAgICBNSUdSQVRJT05fU1RBVFVTPwogIGxhc3RfcmVhZCAgICAgICAgICAgIERhdGVUaW1lPwogIGlzX21pZ3JhdGVkICAgICAgICAgIEJvb2xlYW4gICAgICAgICAgICAgICAgICBAZGVmYXVsdChmYWxzZSkKCiAgQEBtYXAoInNpdGVfcG9pbnRzIikKfQoKbW9kZWwgTG9nIHsKICB1dWlkICAgICAgIFN0cmluZyAgICBAaWQgQGRlZmF1bHQoZGJnZW5lcmF0ZWQoImdlbl9yYW5kb21fdXVpZCgpIikpIEBkYi5VdWlkCiAgbGV2ZWwgICAgICBTdHJpbmcKICBtZXNzYWdlICAgIFN0cmluZwogIG1ldGEgICAgICAgSnNvbj8KICBjcmVhdGVkX2F0IERhdGVUaW1lICBAZGVmYXVsdChub3coKSkKICB1cGRhdGVkX2F0IERhdGVUaW1lICBAdXBkYXRlZEF0CiAgZGVsZXRlZF9hdCBEYXRlVGltZT8KCiAgQEBtYXAoImxvZ3MiKQp9Cgptb2RlbCBBc3NldCB7CiAgdXVpZCAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGRiZ2VuZXJhdGVkKCJnZW5fcmFuZG9tX3V1aWQoKSIpKSBAZGIuVXVpZAogIGNhZmVpbnNfdXVpZCAgICAgICAgIFN0cmluZz8KICB1bmlxdWVfaWQgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICBAdW5pcXVlCiAgbmFtZSAgICAgICAgICAgICAgICAgU3RyaW5nCiAgZGVzY3JpcHRpb24gICAgICAgICAgU3RyaW5nPwogIGNyZWF0ZWRfYXQgICAgICAgICAgIERhdGVUaW1lICAgICAgICAgIEBkZWZhdWx0KG5vdygpKQogIHVwZGF0ZWRfYXQgICAgICAgICAgIERhdGVUaW1lICAgICAgICAgIEB1cGRhdGVkQXQKICBjcmVhdGVkX2VtcGxveWVlX25vICBTdHJpbmc/CiAgbW9kaWZpZWRfZW1wbG95ZWVfbm8gU3RyaW5nPwogIGNvZGUgICAgICAgICAgICAgICAgIFN0cmluZwogIGFzc2V0X2dyb3VwX2NvZGUgICAgIFN0cmluZwogIHByb2plY3RfZ3JvdXBfY29kZSAgIFN0cmluZwogIHNpdGVfZ3JvdXBfY29kZSAgICAgIFN0cmluZwogIGFzc2V0X2NhdGVnb3J5ICAgICAgIFN0cmluZwogIGFzc2V0X293bmVyc2hpcCAgICAgIFN0cmluZwogIGFyZWFfb3duZXJzaGlwICAgICAgIFN0cmluZwogIHN0YXR1cyAgICAgICAgICAgICAgIE1JR1JBVElPTl9TVEFUVVM/CiAgbGFzdF9yZWFkICAgICAgICAgICAgRGF0ZVRpbWU/CiAgaXNfbWlncmF0ZWQgICAgICAgICAgQm9vbGVhbiAgICAgICAgICAgQGRlZmF1bHQoZmFsc2UpCgogIEBAbWFwKCJhc3NldHMiKQp9Cgptb2RlbCBSb3V0ZSB7CiAgdXVpZCAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChkYmdlbmVyYXRlZCgiZ2VuX3JhbmRvbV91dWlkKCkiKSkgQGRiLlV1aWQKICBjYWZlaW5zX3V1aWQgICAgICAgICBTdHJpbmc/CiAgdW5pcXVlX2lkICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgIEB1bmlxdWUKICBuYW1lICAgICAgICAgICAgICAgICBTdHJpbmcKICBnZW9tZXRyeSAgICAgICAgICAgICBVbnN1cHBvcnRlZCgiZ2VvbWV0cnkiKT8KICBsZW5ndGggICAgICAgICAgICAgICBEZWNpbWFsPyAgICAgICAgICAgICAgICAgQGRiLkRlY2ltYWwoMTAsIDMpCiAgY3JlYXRlZF9hdCAgICAgICAgICAgRGF0ZVRpbWUgICAgICAgICAgICAgICAgIEBkZWZhdWx0KG5vdygpKQogIHVwZGF0ZWRfYXQgICAgICAgICAgIERhdGVUaW1lICAgICAgICAgICAgICAgICBAdXBkYXRlZEF0CiAgY3JlYXRlZF9lbXBsb3llZV9ubyAgU3RyaW5nPwogIG1vZGlmaWVkX2VtcGxveWVlX25vIFN0cmluZz8KICBzaXRlX2dyb3VwX2NvZGVfZnJvbSBTdHJpbmcKICBzaXRlX2dyb3VwX2NvZGVfdG8gICBTdHJpbmcKICByb3V0ZV9tZXRob2QgICAgICAgICBTdHJpbmcKICByb3V0ZV9vd25lcnNoaXAgICAgICBTdHJpbmcKICBzdGF0dXMgICAgICAgICAgICAgICBNSUdSQVRJT05fU1RBVFVTPwogIGxhc3RfcmVhZCAgICAgICAgICAgIERhdGVUaW1lPwogIGlzX21pZ3JhdGVkICAgICAgICAgIEJvb2xlYW4gICAgICAgICAgICAgICAgICBAZGVmYXVsdChmYWxzZSkKCiAgQEBtYXAoInJvdXRlcyIpCn0KCm1vZGVsIENhYmxlIHsKICB1dWlkICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgIEBpZCBAZGVmYXVsdChkYmdlbmVyYXRlZCgiZ2VuX3JhbmRvbV91dWlkKCkiKSkgQGRiLlV1aWQKICB1bmlxdWVfaWQgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgIEB1bmlxdWUKICBwcm9qZWN0X2dyb3VwX2NvZGUgICAgICAgIFN0cmluZwogIG5hbWUgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nCiAgZGVzY3JpcHRpb24gICAgICAgICAgICAgICBTdHJpbmc/CiAgbGVuZ3RoICAgICAgICAgICAgICAgICAgICBEZWNpbWFsICAgICAgICAgICBAZGIuRGVjaW1hbCgxMCwgMykKICBjcmVhdGVkX2F0ICAgICAgICAgICAgICAgIERhdGVUaW1lICAgICAgICAgIEBkZWZhdWx0KG5vdygpKQogIHVwZGF0ZWRfYXQgICAgICAgICAgICAgICAgRGF0ZVRpbWUgICAgICAgICAgQHVwZGF0ZWRBdAogIGNyZWF0ZWRfZW1wbG95ZWVfbm8gICAgICAgU3RyaW5nPwogIG1vZGlmaWVkX2VtcGxveWVlX25vICAgICAgU3RyaW5nPwogIGNhYmxlX2NhdGVnb3J5ICAgICAgICAgICAgU3RyaW5nCiAgY2FibGVfZ3JvdXAgICAgICAgICAgICAgICBTdHJpbmcKICBzaXRlX2dyb3VwX2NvZGVfZnJvbSAgICAgIFN0cmluZwogIHNpdGVfZ3JvdXBfY29kZV90byAgICAgICAgU3RyaW5nCiAgYXNzZXRfb3duZXJzaGlwICAgICAgICAgICBTdHJpbmcKICBhcmVhX293bmVyc2hpcCAgICAgICAgICAgIFN0cmluZwogIHBsYWNlbWVudF90eXBlICAgICAgICAgICAgU3RyaW5nCiAgZnVuY3Rpb24gICAgICAgICAgICAgICAgICBTdHJpbmcKICByb3V0ZV91bmlxdWVfaWRfcGVtYmVudHVrIFN0cmluZz8KICBzdGF0dXMgICAgICAgICAgICAgICAgICAgIE1JR1JBVElPTl9TVEFUVVM/CiAgbGFzdF9yZWFkICAgICAgICAgICAgICAgICBEYXRlVGltZT8KICBpc19taWdyYXRlZCAgICAgICAgICAgICAgIEJvb2xlYW4gICAgICAgICAgIEBkZWZhdWx0KGZhbHNlKQoKICBAQG1hcCgiY2FibGVzIikKfQoKbW9kZWwgU2VnbWVudCB7CiAgdXVpZCAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICBAaWQgQGRlZmF1bHQoZGJnZW5lcmF0ZWQoImdlbl9yYW5kb21fdXVpZCgpIikpIEBkYi5VdWlkCiAgdW5pcXVlX2lkICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICBAdW5pcXVlCiAgcHJvamVjdF9ncm91cF9jb2RlICAgICAgICBTdHJpbmcKICBuYW1lICAgICAgICAgICAgICAgICAgICAgIFN0cmluZwogIGNyZWF0ZWRfYXQgICAgICAgICAgICAgICAgRGF0ZVRpbWUgICAgICAgICAgQGRlZmF1bHQobm93KCkpCiAgdXBkYXRlZF9hdCAgICAgICAgICAgICAgICBEYXRlVGltZSAgICAgICAgICBAdXBkYXRlZEF0CiAgY3JlYXRlZF9lbXBsb3llZV9ubyAgICAgICBTdHJpbmc/CiAgbW9kaWZpZWRfZW1wbG95ZWVfbm8gICAgICBTdHJpbmc/CiAgc2l0ZV9ncm91cF9jb2RlX2Zyb20gICAgICBTdHJpbmcKICBzaXRlX2dyb3VwX2NvZGVfdG8gICAgICAgIFN0cmluZwogIHJvdXRlX3VuaXF1ZV9pZF9wZW1iZW50dWsgU3RyaW5nPwogIHN0YXR1cyAgICAgICAgICAgICAgICAgICAgTUlHUkFUSU9OX1NUQVRVUz8KICBsYXN0X3JlYWQgICAgICAgICAgICAgICAgIERhdGVUaW1lPwogIGlzX21pZ3JhdGVkICAgICAgICAgICAgICAgQm9vbGVhbiAgICAgICAgICAgQGRlZmF1bHQoZmFsc2UpCgogIEBAbWFwKCJzZWdtZW50cyIpCn0K',
  inlineSchemaHash:
    '5ef8aee399b448be70b4655870a96c6aa53bb4b2c8c87f96cff48015209465cf',
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    'prisma/barista/barista-client',
    'barista/barista-client',
  ]

  const alternativePath =
    alternativePaths.find((altPath) => {
      return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
    }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse(
  '{"models":{"Project":{"dbName":"projects","fields":[{"name":"uuid","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"dbgenerated","args":["gen_random_uuid()"]},"isGenerated":false,"isUpdatedAt":false},{"name":"cafeins_uuid","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"company_code","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"vendor_no","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"project_group_code","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"created_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updated_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":true},{"name":"created_employee_no","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"modified_employee_no","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"description","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"po_number","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"owner_name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"owner_nik","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"enum","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"MIGRATION_STATUS","isGenerated":false,"isUpdatedAt":false},{"name":"last_read","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"is_migrated","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","default":false,"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"SitePoint":{"dbName":"site_points","fields":[{"name":"uuid","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"dbgenerated","args":["gen_random_uuid()"]},"isGenerated":false,"isUpdatedAt":false},{"name":"cafeins_uuid","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"site_group_code","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"latitude","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","isGenerated":false,"isUpdatedAt":false},{"name":"longitude","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","isGenerated":false,"isUpdatedAt":false},{"name":"created_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updated_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":true},{"name":"created_employee_no","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"modified_employee_no","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"enum","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"MIGRATION_STATUS","isGenerated":false,"isUpdatedAt":false},{"name":"last_read","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"is_migrated","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","default":false,"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Log":{"dbName":"logs","fields":[{"name":"uuid","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"dbgenerated","args":["gen_random_uuid()"]},"isGenerated":false,"isUpdatedAt":false},{"name":"level","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"message","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"meta","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"created_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updated_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":true},{"name":"deleted_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Asset":{"dbName":"assets","fields":[{"name":"uuid","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"dbgenerated","args":["gen_random_uuid()"]},"isGenerated":false,"isUpdatedAt":false},{"name":"cafeins_uuid","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"unique_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"description","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"created_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updated_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":true},{"name":"created_employee_no","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"modified_employee_no","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"code","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"asset_group_code","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"project_group_code","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"site_group_code","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"asset_category","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"asset_ownership","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"area_ownership","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"enum","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"MIGRATION_STATUS","isGenerated":false,"isUpdatedAt":false},{"name":"last_read","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"is_migrated","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","default":false,"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Route":{"dbName":"routes","fields":[{"name":"uuid","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"dbgenerated","args":["gen_random_uuid()"]},"isGenerated":false,"isUpdatedAt":false},{"name":"cafeins_uuid","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"unique_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"length","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"created_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updated_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":true},{"name":"created_employee_no","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"modified_employee_no","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"site_group_code_from","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"site_group_code_to","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"route_method","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"route_ownership","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"enum","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"MIGRATION_STATUS","isGenerated":false,"isUpdatedAt":false},{"name":"last_read","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"is_migrated","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","default":false,"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Cable":{"dbName":"cables","fields":[{"name":"uuid","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"dbgenerated","args":["gen_random_uuid()"]},"isGenerated":false,"isUpdatedAt":false},{"name":"unique_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"project_group_code","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"description","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"length","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"created_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updated_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":true},{"name":"created_employee_no","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"modified_employee_no","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"cable_category","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"cable_group","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"site_group_code_from","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"site_group_code_to","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"asset_ownership","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"area_ownership","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"placement_type","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"function","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"route_unique_id_pembentuk","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"enum","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"MIGRATION_STATUS","isGenerated":false,"isUpdatedAt":false},{"name":"last_read","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"is_migrated","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","default":false,"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Segment":{"dbName":"segments","fields":[{"name":"uuid","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"dbgenerated","args":["gen_random_uuid()"]},"isGenerated":false,"isUpdatedAt":false},{"name":"unique_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"project_group_code","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"created_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updated_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":true},{"name":"created_employee_no","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"modified_employee_no","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"site_group_code_from","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"site_group_code_to","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"route_unique_id_pembentuk","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"enum","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"MIGRATION_STATUS","isGenerated":false,"isUpdatedAt":false},{"name":"last_read","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"is_migrated","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","default":false,"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false}},"enums":{"MIGRATION_STATUS":{"values":[{"name":"CREATED","dbName":null},{"name":"UPDATED","dbName":null}],"dbName":null}},"types":{}}',
)
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)

const { warnEnvConflicts } = require('./runtime/library')

warnEnvConflicts({
  rootEnvPath:
    config.relativeEnvPaths.rootEnvPath &&
    path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
  schemaEnvPath:
    config.relativeEnvPaths.schemaEnvPath &&
    path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath),
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, 'libquery_engine-debian-openssl-3.0.x.so.node')
path.join(
  process.cwd(),
  'prisma/barista/barista-client/libquery_engine-debian-openssl-3.0.x.so.node',
)
// file annotations for bundling tools to include these files
path.join(__dirname, 'schema.prisma')
path.join(process.cwd(), 'prisma/barista/barista-client/schema.prisma')
