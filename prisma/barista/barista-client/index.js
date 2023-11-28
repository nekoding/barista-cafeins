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
  company_code: 'company_code',
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
      {
        fromEnvVar: null,
        value: 'linux-musl-openssl-3.0.x',
      },
      {
        fromEnvVar: null,
        value: 'rhel-openssl-1.1.x',
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
  postinstall: false,
  inlineDatasources: {
    db: {
      url: {
        fromEnvVar: 'DATABASE_BARISTA_URL',
        value: null,
      },
    },
  },
  inlineSchema:
    'Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgICAgICAgID0gInByaXNtYS1jbGllbnQtanMiCiAgb3V0cHV0ICAgICAgICAgID0gImJhcmlzdGEtY2xpZW50IgogIHByZXZpZXdGZWF0dXJlcyA9IFsicG9zdGdyZXNxbEV4dGVuc2lvbnMiXQogIGJpbmFyeVRhcmdldHMgICA9IFsibmF0aXZlIiwgImxpbnV4LW11c2wtb3BlbnNzbC0zLjAueCIsICJyaGVsLW9wZW5zc2wtMS4xLngiXQp9CgpkYXRhc291cmNlIGRiIHsKICBwcm92aWRlciAgID0gInBvc3RncmVzcWwiCiAgdXJsICAgICAgICA9IGVudigiREFUQUJBU0VfQkFSSVNUQV9VUkwiKQogIGV4dGVuc2lvbnMgPSBbcG9zdGdpc10KfQoKZW51bSBNSUdSQVRJT05fU1RBVFVTIHsKICBDUkVBVEVECiAgVVBEQVRFRAp9CgovLyBNb2RlbAptb2RlbCBQcm9qZWN0IHsKICB1dWlkICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICBAaWQgQGRlZmF1bHQoZGJnZW5lcmF0ZWQoImdlbl9yYW5kb21fdXVpZCgpIikpIEBkYi5VdWlkCiAgY2FmZWluc191dWlkICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgQGRiLlV1aWQKICBjb21wYW55X2NvZGUgICAgICAgICBTdHJpbmcKICB2ZW5kb3Jfbm8gICAgICAgICAgICBTdHJpbmcKICBuYW1lICAgICAgICAgICAgICAgICBTdHJpbmcKICBwcm9qZWN0X2dyb3VwX2NvZGUgICBTdHJpbmcgICAgICAgICAgICBAdW5pcXVlCiAgY3JlYXRlZF9hdCAgICAgICAgICAgRGF0ZVRpbWUgICAgICAgICAgQGRlZmF1bHQobm93KCkpCiAgdXBkYXRlZF9hdCAgICAgICAgICAgRGF0ZVRpbWUgICAgICAgICAgQHVwZGF0ZWRBdAogIGNyZWF0ZWRfZW1wbG95ZWVfbm8gIFN0cmluZwogIG1vZGlmaWVkX2VtcGxveWVlX25vIFN0cmluZz8KICBkZXNjcmlwdGlvbiAgICAgICAgICBTdHJpbmc/CiAgcG9fbnVtYmVyICAgICAgICAgICAgU3RyaW5nPwogIG93bmVyX25hbWUgICAgICAgICAgIFN0cmluZwogIG93bmVyX25payAgICAgICAgICAgIFN0cmluZwogIHN0YXR1cyAgICAgICAgICAgICAgIE1JR1JBVElPTl9TVEFUVVM/CiAgbGFzdF9yZWFkICAgICAgICAgICAgRGF0ZVRpbWU/CiAgaXNfbWlncmF0ZWQgICAgICAgICAgQm9vbGVhbiAgICAgICAgICAgQGRlZmF1bHQoZmFsc2UpCiAgYXNzZXRzICAgICAgICAgICAgICAgQXNzZXRbXQogIENhYmxlICAgICAgICAgICAgICAgIENhYmxlW10gICAgICAgICAgIEByZWxhdGlvbigiY2FibGVfcHJvamVjdCIpCiAgU2VnbWVudCAgICAgICAgICAgICAgU2VnbWVudFtdICAgICAgICAgQHJlbGF0aW9uKCJzZWdtZW50X3Byb2plY3QiKQoKICBAQG1hcCgicHJvamVjdHMiKQp9Cgptb2RlbCBTaXRlUG9pbnQgewogIHV1aWQgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoZGJnZW5lcmF0ZWQoImdlbl9yYW5kb21fdXVpZCgpIikpIEBkYi5VdWlkCiAgY2FmZWluc191dWlkICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgICAgIEBkYi5VdWlkCiAgbmFtZSAgICAgICAgICAgICAgICAgU3RyaW5nCiAgY29tcGFueV9jb2RlICAgICAgICAgU3RyaW5nCiAgc2l0ZV9ncm91cF9jb2RlICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgIEB1bmlxdWUKICBsYXRpdHVkZSAgICAgICAgICAgICBGbG9hdAogIGxvbmdpdHVkZSAgICAgICAgICAgIEZsb2F0CiAgZ2VvbWV0cnkgICAgICAgICAgICAgVW5zdXBwb3J0ZWQoImdlb21ldHJ5Iik/CiAgY3JlYXRlZF9hdCAgICAgICAgICAgRGF0ZVRpbWUgICAgICAgICAgICAgICAgIEBkZWZhdWx0KG5vdygpKQogIHVwZGF0ZWRfYXQgICAgICAgICAgIERhdGVUaW1lICAgICAgICAgICAgICAgICBAdXBkYXRlZEF0CiAgY3JlYXRlZF9lbXBsb3llZV9ubyAgU3RyaW5nCiAgbW9kaWZpZWRfZW1wbG95ZWVfbm8gU3RyaW5nPwogIHN0YXR1cyAgICAgICAgICAgICAgIE1JR1JBVElPTl9TVEFUVVM/CiAgbGFzdF9yZWFkICAgICAgICAgICAgRGF0ZVRpbWU/CiAgaXNfbWlncmF0ZWQgICAgICAgICAgQm9vbGVhbiAgICAgICAgICAgICAgICAgIEBkZWZhdWx0KGZhbHNlKQogIGFzc2V0cyAgICAgICAgICAgICAgIEFzc2V0W10KICBSb3V0ZUZyb20gICAgICAgICAgICBSb3V0ZVtdICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKCJyb3V0ZV9zaXRlcG9pbnRfZnJvbSIpCiAgUm91dGVUbyAgICAgICAgICAgICAgUm91dGVbXSAgICAgICAgICAgICAgICAgIEByZWxhdGlvbigicm91dGVfc2l0ZXBvaW50X3RvIikKICBDYWJsZUZyb20gICAgICAgICAgICBDYWJsZVtdICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKCJjYWJsZV9zaXRlcG9pbnRfZnJvbSIpCiAgQ2FibGVUbyAgICAgICAgICAgICAgQ2FibGVbXSAgICAgICAgICAgICAgICAgIEByZWxhdGlvbigiY2FibGVfc2l0ZXBvaW50X3RvIikKICBTZWdtZW50RnJvbSAgICAgICAgICBTZWdtZW50W10gICAgICAgICAgICAgICAgQHJlbGF0aW9uKCJzZWdtZW50X3NpdGVwb2ludF9mcm9tIikKICBTZWdtZW50VG8gICAgICAgICAgICBTZWdtZW50W10gICAgICAgICAgICAgICAgQHJlbGF0aW9uKCJzZWdtZW50X3NpdGVwb2ludF90byIpCgogIEBAbWFwKCJzaXRlX3BvaW50cyIpCn0KCm1vZGVsIExvZyB7CiAgdXVpZCAgICAgICBTdHJpbmcgICAgQGlkIEBkZWZhdWx0KGRiZ2VuZXJhdGVkKCJnZW5fcmFuZG9tX3V1aWQoKSIpKSBAZGIuVXVpZAogIGxldmVsICAgICAgU3RyaW5nCiAgbWVzc2FnZSAgICBTdHJpbmcKICBtZXRhICAgICAgIEpzb24/CiAgY3JlYXRlZF9hdCBEYXRlVGltZSAgQGRlZmF1bHQobm93KCkpCiAgdXBkYXRlZF9hdCBEYXRlVGltZSAgQHVwZGF0ZWRBdAogIGRlbGV0ZWRfYXQgRGF0ZVRpbWU/CgogIEBAbWFwKCJsb2dzIikKfQoKbW9kZWwgQXNzZXQgewogIHV1aWQgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgIEBpZCBAZGVmYXVsdChkYmdlbmVyYXRlZCgiZ2VuX3JhbmRvbV91dWlkKCkiKSkgQGRiLlV1aWQKICBjYWZlaW5zX3V1aWQgICAgICAgICBTdHJpbmc/ICAgICAgICAgICBAZGIuVXVpZAogIHVuaXF1ZV9pZCAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgIEB1bmlxdWUKICBuYW1lICAgICAgICAgICAgICAgICBTdHJpbmcKICBkZXNjcmlwdGlvbiAgICAgICAgICBTdHJpbmc/CiAgY3JlYXRlZF9hdCAgICAgICAgICAgRGF0ZVRpbWUgICAgICAgICAgQGRlZmF1bHQobm93KCkpCiAgdXBkYXRlZF9hdCAgICAgICAgICAgRGF0ZVRpbWUgICAgICAgICAgQHVwZGF0ZWRBdAogIGNyZWF0ZWRfZW1wbG95ZWVfbm8gIFN0cmluZwogIG1vZGlmaWVkX2VtcGxveWVlX25vIFN0cmluZz8KICBjb2RlICAgICAgICAgICAgICAgICBTdHJpbmcKICBhc3NldF9ncm91cF9jb2RlICAgICBTdHJpbmcKICBwcm9qZWN0X2dyb3VwX2NvZGUgICBTdHJpbmcKICBzaXRlX2dyb3VwX2NvZGUgICAgICBTdHJpbmcKICBhc3NldF9jYXRlZ29yeSAgICAgICBTdHJpbmcKICBhc3NldF9vd25lcnNoaXAgICAgICBTdHJpbmcKICBhcmVhX293bmVyc2hpcCAgICAgICBTdHJpbmcKICBzdGF0dXMgICAgICAgICAgICAgICBNSUdSQVRJT05fU1RBVFVTPwogIGxhc3RfcmVhZCAgICAgICAgICAgIERhdGVUaW1lPwogIGlzX21pZ3JhdGVkICAgICAgICAgIEJvb2xlYW4gICAgICAgICAgIEBkZWZhdWx0KGZhbHNlKQoKICBwcm9qZWN0ICAgUHJvamVjdCAgIEByZWxhdGlvbihmaWVsZHM6IFtwcm9qZWN0X2dyb3VwX2NvZGVdLCByZWZlcmVuY2VzOiBbcHJvamVjdF9ncm91cF9jb2RlXSkKICBzaXRlcG9pbnQgU2l0ZVBvaW50IEByZWxhdGlvbihmaWVsZHM6IFtzaXRlX2dyb3VwX2NvZGVdLCByZWZlcmVuY2VzOiBbc2l0ZV9ncm91cF9jb2RlXSkKCiAgQEBtYXAoImFzc2V0cyIpCn0KCm1vZGVsIFJvdXRlIHsKICB1dWlkICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGRiZ2VuZXJhdGVkKCJnZW5fcmFuZG9tX3V1aWQoKSIpKSBAZGIuVXVpZAogIGNhZmVpbnNfdXVpZCAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICBAZGIuVXVpZAogIHVuaXF1ZV9pZCAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICBAdW5pcXVlCiAgbmFtZSAgICAgICAgICAgICAgICAgU3RyaW5nCiAgZ2VvbWV0cnkgICAgICAgICAgICAgVW5zdXBwb3J0ZWQoImdlb21ldHJ5Iik/CiAgbGVuZ3RoICAgICAgICAgICAgICAgRGVjaW1hbD8gICAgICAgICAgICAgICAgIEBkYi5EZWNpbWFsKDEwLCAzKQogIGNyZWF0ZWRfYXQgICAgICAgICAgIERhdGVUaW1lICAgICAgICAgICAgICAgICBAZGVmYXVsdChub3coKSkKICB1cGRhdGVkX2F0ICAgICAgICAgICBEYXRlVGltZSAgICAgICAgICAgICAgICAgQHVwZGF0ZWRBdAogIGNyZWF0ZWRfZW1wbG95ZWVfbm8gIFN0cmluZwogIG1vZGlmaWVkX2VtcGxveWVlX25vIFN0cmluZz8KICBzaXRlX2dyb3VwX2NvZGVfZnJvbSBTdHJpbmcKICBzaXRlX2dyb3VwX2NvZGVfdG8gICBTdHJpbmcKICByb3V0ZV9tZXRob2QgICAgICAgICBTdHJpbmcKICByb3V0ZV9vd25lcnNoaXAgICAgICBTdHJpbmcKICBzdGF0dXMgICAgICAgICAgICAgICBNSUdSQVRJT05fU1RBVFVTPwogIGxhc3RfcmVhZCAgICAgICAgICAgIERhdGVUaW1lPwogIGlzX21pZ3JhdGVkICAgICAgICAgIEJvb2xlYW4gICAgICAgICAgICAgICAgICBAZGVmYXVsdChmYWxzZSkKICBzaXRlcG9pbnRfZnJvbSAgICAgICBTaXRlUG9pbnQgICAgICAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW3NpdGVfZ3JvdXBfY29kZV9mcm9tXSwgcmVmZXJlbmNlczogW3NpdGVfZ3JvdXBfY29kZV0sIG5hbWU6ICJyb3V0ZV9zaXRlcG9pbnRfZnJvbSIpCiAgc2l0ZXBvaW50X3RvICAgICAgICAgU2l0ZVBvaW50ICAgICAgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtzaXRlX2dyb3VwX2NvZGVfdG9dLCByZWZlcmVuY2VzOiBbc2l0ZV9ncm91cF9jb2RlXSwgbmFtZTogInJvdXRlX3NpdGVwb2ludF90byIpCgogIEBAbWFwKCJyb3V0ZXMiKQp9Cgptb2RlbCBDYWJsZSB7CiAgdXVpZCAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICBAaWQgQGRlZmF1bHQoZGJnZW5lcmF0ZWQoImdlbl9yYW5kb21fdXVpZCgpIikpIEBkYi5VdWlkCiAgY2FmZWluc191dWlkICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICBAZGIuVXVpZAogIHVuaXF1ZV9pZCAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgQHVuaXF1ZQogIHByb2plY3RfZ3JvdXBfY29kZSAgICAgICAgU3RyaW5nCiAgbmFtZSAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcKICBkZXNjcmlwdGlvbiAgICAgICAgICAgICAgIFN0cmluZz8KICBsZW5ndGggICAgICAgICAgICAgICAgICAgIERlY2ltYWwgICAgICAgICAgIEBkYi5EZWNpbWFsKDEwLCAzKQogIGNyZWF0ZWRfYXQgICAgICAgICAgICAgICAgRGF0ZVRpbWUgICAgICAgICAgQGRlZmF1bHQobm93KCkpCiAgdXBkYXRlZF9hdCAgICAgICAgICAgICAgICBEYXRlVGltZSAgICAgICAgICBAdXBkYXRlZEF0CiAgY3JlYXRlZF9lbXBsb3llZV9ubyAgICAgICBTdHJpbmcKICBtb2RpZmllZF9lbXBsb3llZV9ubyAgICAgIFN0cmluZz8KICBjYWJsZV9jYXRlZ29yeSAgICAgICAgICAgIFN0cmluZwogIGNhYmxlX2dyb3VwICAgICAgICAgICAgICAgU3RyaW5nCiAgc2l0ZV9ncm91cF9jb2RlX2Zyb20gICAgICBTdHJpbmcKICBzaXRlX2dyb3VwX2NvZGVfdG8gICAgICAgIFN0cmluZwogIGFzc2V0X293bmVyc2hpcCAgICAgICAgICAgU3RyaW5nCiAgYXJlYV9vd25lcnNoaXAgICAgICAgICAgICBTdHJpbmcKICBwbGFjZW1lbnRfdHlwZSAgICAgICAgICAgIFN0cmluZwogIGZ1bmN0aW9uICAgICAgICAgICAgICAgICAgU3RyaW5nCiAgcm91dGVfdW5pcXVlX2lkX3BlbWJlbnR1ayBTdHJpbmc/CiAgc3RhdHVzICAgICAgICAgICAgICAgICAgICBNSUdSQVRJT05fU1RBVFVTPwogIGxhc3RfcmVhZCAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/CiAgaXNfbWlncmF0ZWQgICAgICAgICAgICAgICBCb29sZWFuICAgICAgICAgICBAZGVmYXVsdChmYWxzZSkKICBzaXRlcG9pbnRfZnJvbSAgICAgICAgICAgIFNpdGVQb2ludCAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtzaXRlX2dyb3VwX2NvZGVfZnJvbV0sIHJlZmVyZW5jZXM6IFtzaXRlX2dyb3VwX2NvZGVdLCBuYW1lOiAiY2FibGVfc2l0ZXBvaW50X2Zyb20iKQogIHNpdGVwb2ludF90byAgICAgICAgICAgICAgU2l0ZVBvaW50ICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW3NpdGVfZ3JvdXBfY29kZV90b10sIHJlZmVyZW5jZXM6IFtzaXRlX2dyb3VwX2NvZGVdLCBuYW1lOiAiY2FibGVfc2l0ZXBvaW50X3RvIikKICBwcm9qZWN0ICAgICAgICAgICAgICAgICAgIFByb2plY3QgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtwcm9qZWN0X2dyb3VwX2NvZGVdLCByZWZlcmVuY2VzOiBbcHJvamVjdF9ncm91cF9jb2RlXSwgbmFtZTogImNhYmxlX3Byb2plY3QiKQoKICBAQG1hcCgiY2FibGVzIikKfQoKbW9kZWwgU2VnbWVudCB7CiAgdXVpZCAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICBAaWQgQGRlZmF1bHQoZGJnZW5lcmF0ZWQoImdlbl9yYW5kb21fdXVpZCgpIikpIEBkYi5VdWlkCiAgY2FmZWluc191dWlkICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICBAZGIuVXVpZAogIHVuaXF1ZV9pZCAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgQHVuaXF1ZQogIHByb2plY3RfZ3JvdXBfY29kZSAgICAgICAgU3RyaW5nCiAgbmFtZSAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcKICBjcmVhdGVkX2F0ICAgICAgICAgICAgICAgIERhdGVUaW1lICAgICAgICAgIEBkZWZhdWx0KG5vdygpKQogIHVwZGF0ZWRfYXQgICAgICAgICAgICAgICAgRGF0ZVRpbWUgICAgICAgICAgQHVwZGF0ZWRBdAogIGNyZWF0ZWRfZW1wbG95ZWVfbm8gICAgICAgU3RyaW5nCiAgbW9kaWZpZWRfZW1wbG95ZWVfbm8gICAgICBTdHJpbmc/CiAgc2l0ZV9ncm91cF9jb2RlX2Zyb20gICAgICBTdHJpbmcKICBzaXRlX2dyb3VwX2NvZGVfdG8gICAgICAgIFN0cmluZwogIHJvdXRlX3VuaXF1ZV9pZF9wZW1iZW50dWsgU3RyaW5nPwogIHN0YXR1cyAgICAgICAgICAgICAgICAgICAgTUlHUkFUSU9OX1NUQVRVUz8KICBsYXN0X3JlYWQgICAgICAgICAgICAgICAgIERhdGVUaW1lPwogIGlzX21pZ3JhdGVkICAgICAgICAgICAgICAgQm9vbGVhbiAgICAgICAgICAgQGRlZmF1bHQoZmFsc2UpCiAgc2l0ZXBvaW50X2Zyb20gICAgICAgICAgICBTaXRlUG9pbnQgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbc2l0ZV9ncm91cF9jb2RlX2Zyb21dLCByZWZlcmVuY2VzOiBbc2l0ZV9ncm91cF9jb2RlXSwgbmFtZTogInNlZ21lbnRfc2l0ZXBvaW50X2Zyb20iKQogIHNpdGVwb2ludF90byAgICAgICAgICAgICAgU2l0ZVBvaW50ICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW3NpdGVfZ3JvdXBfY29kZV90b10sIHJlZmVyZW5jZXM6IFtzaXRlX2dyb3VwX2NvZGVdLCBuYW1lOiAic2VnbWVudF9zaXRlcG9pbnRfdG8iKQogIHByb2plY3QgICAgICAgICAgICAgICAgICAgUHJvamVjdCAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW3Byb2plY3RfZ3JvdXBfY29kZV0sIHJlZmVyZW5jZXM6IFtwcm9qZWN0X2dyb3VwX2NvZGVdLCBuYW1lOiAic2VnbWVudF9wcm9qZWN0IikKCiAgQEBtYXAoInNlZ21lbnRzIikKfQo=',
  inlineSchemaHash:
    '92930938de603b4d25c0293ae52a6365a2adf74640ca6f9ac8f6579fcbd4e08e',
  noEngine: false,
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
  '{"models":{"Project":{"dbName":"projects","fields":[{"name":"uuid","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"dbgenerated","args":["gen_random_uuid()"]},"isGenerated":false,"isUpdatedAt":false},{"name":"cafeins_uuid","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"company_code","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"vendor_no","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"project_group_code","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"created_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updated_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":true},{"name":"created_employee_no","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"modified_employee_no","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"description","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"po_number","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"owner_name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"owner_nik","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"enum","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"MIGRATION_STATUS","isGenerated":false,"isUpdatedAt":false},{"name":"last_read","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"is_migrated","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","default":false,"isGenerated":false,"isUpdatedAt":false},{"name":"assets","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Asset","relationName":"AssetToProject","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"Cable","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Cable","relationName":"cable_project","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"Segment","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Segment","relationName":"segment_project","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"SitePoint":{"dbName":"site_points","fields":[{"name":"uuid","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"dbgenerated","args":["gen_random_uuid()"]},"isGenerated":false,"isUpdatedAt":false},{"name":"cafeins_uuid","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"company_code","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"site_group_code","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"latitude","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","isGenerated":false,"isUpdatedAt":false},{"name":"longitude","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","isGenerated":false,"isUpdatedAt":false},{"name":"created_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updated_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":true},{"name":"created_employee_no","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"modified_employee_no","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"enum","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"MIGRATION_STATUS","isGenerated":false,"isUpdatedAt":false},{"name":"last_read","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"is_migrated","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","default":false,"isGenerated":false,"isUpdatedAt":false},{"name":"assets","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Asset","relationName":"AssetToSitePoint","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"RouteFrom","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Route","relationName":"route_sitepoint_from","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"RouteTo","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Route","relationName":"route_sitepoint_to","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"CableFrom","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Cable","relationName":"cable_sitepoint_from","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"CableTo","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Cable","relationName":"cable_sitepoint_to","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"SegmentFrom","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Segment","relationName":"segment_sitepoint_from","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"SegmentTo","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Segment","relationName":"segment_sitepoint_to","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Log":{"dbName":"logs","fields":[{"name":"uuid","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"dbgenerated","args":["gen_random_uuid()"]},"isGenerated":false,"isUpdatedAt":false},{"name":"level","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"message","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"meta","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"created_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updated_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":true},{"name":"deleted_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Asset":{"dbName":"assets","fields":[{"name":"uuid","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"dbgenerated","args":["gen_random_uuid()"]},"isGenerated":false,"isUpdatedAt":false},{"name":"cafeins_uuid","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"unique_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"description","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"created_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updated_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":true},{"name":"created_employee_no","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"modified_employee_no","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"code","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"asset_group_code","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"project_group_code","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"site_group_code","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"asset_category","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"asset_ownership","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"area_ownership","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"enum","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"MIGRATION_STATUS","isGenerated":false,"isUpdatedAt":false},{"name":"last_read","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"is_migrated","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","default":false,"isGenerated":false,"isUpdatedAt":false},{"name":"project","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Project","relationName":"AssetToProject","relationFromFields":["project_group_code"],"relationToFields":["project_group_code"],"isGenerated":false,"isUpdatedAt":false},{"name":"sitepoint","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"SitePoint","relationName":"AssetToSitePoint","relationFromFields":["site_group_code"],"relationToFields":["site_group_code"],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Route":{"dbName":"routes","fields":[{"name":"uuid","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"dbgenerated","args":["gen_random_uuid()"]},"isGenerated":false,"isUpdatedAt":false},{"name":"cafeins_uuid","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"unique_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"length","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"created_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updated_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":true},{"name":"created_employee_no","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"modified_employee_no","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"site_group_code_from","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"site_group_code_to","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"route_method","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"route_ownership","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"enum","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"MIGRATION_STATUS","isGenerated":false,"isUpdatedAt":false},{"name":"last_read","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"is_migrated","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","default":false,"isGenerated":false,"isUpdatedAt":false},{"name":"sitepoint_from","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"SitePoint","relationName":"route_sitepoint_from","relationFromFields":["site_group_code_from"],"relationToFields":["site_group_code"],"isGenerated":false,"isUpdatedAt":false},{"name":"sitepoint_to","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"SitePoint","relationName":"route_sitepoint_to","relationFromFields":["site_group_code_to"],"relationToFields":["site_group_code"],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Cable":{"dbName":"cables","fields":[{"name":"uuid","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"dbgenerated","args":["gen_random_uuid()"]},"isGenerated":false,"isUpdatedAt":false},{"name":"cafeins_uuid","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"unique_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"project_group_code","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"description","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"length","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"created_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updated_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":true},{"name":"created_employee_no","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"modified_employee_no","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"cable_category","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"cable_group","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"site_group_code_from","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"site_group_code_to","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"asset_ownership","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"area_ownership","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"placement_type","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"function","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"route_unique_id_pembentuk","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"enum","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"MIGRATION_STATUS","isGenerated":false,"isUpdatedAt":false},{"name":"last_read","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"is_migrated","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","default":false,"isGenerated":false,"isUpdatedAt":false},{"name":"sitepoint_from","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"SitePoint","relationName":"cable_sitepoint_from","relationFromFields":["site_group_code_from"],"relationToFields":["site_group_code"],"isGenerated":false,"isUpdatedAt":false},{"name":"sitepoint_to","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"SitePoint","relationName":"cable_sitepoint_to","relationFromFields":["site_group_code_to"],"relationToFields":["site_group_code"],"isGenerated":false,"isUpdatedAt":false},{"name":"project","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Project","relationName":"cable_project","relationFromFields":["project_group_code"],"relationToFields":["project_group_code"],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Segment":{"dbName":"segments","fields":[{"name":"uuid","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"dbgenerated","args":["gen_random_uuid()"]},"isGenerated":false,"isUpdatedAt":false},{"name":"cafeins_uuid","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"unique_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"project_group_code","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"created_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updated_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":true},{"name":"created_employee_no","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"modified_employee_no","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"site_group_code_from","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"site_group_code_to","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"route_unique_id_pembentuk","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"enum","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"MIGRATION_STATUS","isGenerated":false,"isUpdatedAt":false},{"name":"last_read","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"is_migrated","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","default":false,"isGenerated":false,"isUpdatedAt":false},{"name":"sitepoint_from","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"SitePoint","relationName":"segment_sitepoint_from","relationFromFields":["site_group_code_from"],"relationToFields":["site_group_code"],"isGenerated":false,"isUpdatedAt":false},{"name":"sitepoint_to","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"SitePoint","relationName":"segment_sitepoint_to","relationFromFields":["site_group_code_to"],"relationToFields":["site_group_code"],"isGenerated":false,"isUpdatedAt":false},{"name":"project","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Project","relationName":"segment_project","relationFromFields":["project_group_code"],"relationToFields":["project_group_code"],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false}},"enums":{"MIGRATION_STATUS":{"values":[{"name":"CREATED","dbName":null},{"name":"UPDATED","dbName":null}],"dbName":null}},"types":{}}',
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
path.join(__dirname, 'libquery_engine-linux-musl-openssl-3.0.x.so.node')
path.join(
  process.cwd(),
  'prisma/barista/barista-client/libquery_engine-linux-musl-openssl-3.0.x.so.node',
)

// file annotations for bundling tools to include these files
path.join(__dirname, 'libquery_engine-rhel-openssl-1.1.x.so.node')
path.join(
  process.cwd(),
  'prisma/barista/barista-client/libquery_engine-rhel-openssl-1.1.x.so.node',
)
// file annotations for bundling tools to include these files
path.join(__dirname, 'schema.prisma')
path.join(process.cwd(), 'prisma/barista/barista-client/schema.prisma')
