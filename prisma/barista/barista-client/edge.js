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
} = require('./runtime/edge')

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
    'Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgICAgICAgID0gInByaXNtYS1jbGllbnQtanMiCiAgb3V0cHV0ICAgICAgICAgID0gImJhcmlzdGEtY2xpZW50IgogIHByZXZpZXdGZWF0dXJlcyA9IFsicG9zdGdyZXNxbEV4dGVuc2lvbnMiXQogIGJpbmFyeVRhcmdldHMgICA9IFsibmF0aXZlIiwgImxpbnV4LW11c2wtb3BlbnNzbC0zLjAueCJdCn0KCmRhdGFzb3VyY2UgZGIgewogIHByb3ZpZGVyICAgPSAicG9zdGdyZXNxbCIKICB1cmwgICAgICAgID0gZW52KCJEQVRBQkFTRV9CQVJJU1RBX1VSTCIpCiAgZXh0ZW5zaW9ucyA9IFtwb3N0Z2lzXQp9CgplbnVtIE1JR1JBVElPTl9TVEFUVVMgewogIENSRUFURUQKICBVUERBVEVECn0KCi8vIE1vZGVsCm1vZGVsIFByb2plY3QgewogIHV1aWQgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgIEBpZCBAZGVmYXVsdChkYmdlbmVyYXRlZCgiZ2VuX3JhbmRvbV91dWlkKCkiKSkgQGRiLlV1aWQKICBjYWZlaW5zX3V1aWQgICAgICAgICBTdHJpbmc/ICAgICAgICAgICBAZGIuVXVpZAogIGNvbXBhbnlfY29kZSAgICAgICAgIFN0cmluZwogIHZlbmRvcl9ubyAgICAgICAgICAgIFN0cmluZwogIG5hbWUgICAgICAgICAgICAgICAgIFN0cmluZwogIHByb2plY3RfZ3JvdXBfY29kZSAgIFN0cmluZyAgICAgICAgICAgIEB1bmlxdWUKICBjcmVhdGVkX2F0ICAgICAgICAgICBEYXRlVGltZSAgICAgICAgICBAZGVmYXVsdChub3coKSkKICB1cGRhdGVkX2F0ICAgICAgICAgICBEYXRlVGltZSAgICAgICAgICBAdXBkYXRlZEF0CiAgY3JlYXRlZF9lbXBsb3llZV9ubyAgU3RyaW5nCiAgbW9kaWZpZWRfZW1wbG95ZWVfbm8gU3RyaW5nPwogIGRlc2NyaXB0aW9uICAgICAgICAgIFN0cmluZz8KICBwb19udW1iZXIgICAgICAgICAgICBTdHJpbmc/CiAgb3duZXJfbmFtZSAgICAgICAgICAgU3RyaW5nCiAgb3duZXJfbmlrICAgICAgICAgICAgU3RyaW5nCiAgc3RhdHVzICAgICAgICAgICAgICAgTUlHUkFUSU9OX1NUQVRVUz8KICBsYXN0X3JlYWQgICAgICAgICAgICBEYXRlVGltZT8KICBpc19taWdyYXRlZCAgICAgICAgICBCb29sZWFuICAgICAgICAgICBAZGVmYXVsdChmYWxzZSkKICBhc3NldHMgICAgICAgICAgICAgICBBc3NldFtdCiAgQ2FibGUgICAgICAgICAgICAgICAgQ2FibGVbXSAgICAgICAgICAgQHJlbGF0aW9uKCJjYWJsZV9wcm9qZWN0IikKICBTZWdtZW50ICAgICAgICAgICAgICBTZWdtZW50W10gICAgICAgICBAcmVsYXRpb24oInNlZ21lbnRfcHJvamVjdCIpCgogIEBAbWFwKCJwcm9qZWN0cyIpCn0KCm1vZGVsIFNpdGVQb2ludCB7CiAgdXVpZCAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChkYmdlbmVyYXRlZCgiZ2VuX3JhbmRvbV91dWlkKCkiKSkgQGRiLlV1aWQKICBjYWZlaW5zX3V1aWQgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgQGRiLlV1aWQKICBuYW1lICAgICAgICAgICAgICAgICBTdHJpbmcKICBjb21wYW55X2NvZGUgICAgICAgICBTdHJpbmcKICBzaXRlX2dyb3VwX2NvZGUgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgQHVuaXF1ZQogIGxhdGl0dWRlICAgICAgICAgICAgIEZsb2F0CiAgbG9uZ2l0dWRlICAgICAgICAgICAgRmxvYXQKICBnZW9tZXRyeSAgICAgICAgICAgICBVbnN1cHBvcnRlZCgiZ2VvbWV0cnkiKT8KICBjcmVhdGVkX2F0ICAgICAgICAgICBEYXRlVGltZSAgICAgICAgICAgICAgICAgQGRlZmF1bHQobm93KCkpCiAgdXBkYXRlZF9hdCAgICAgICAgICAgRGF0ZVRpbWUgICAgICAgICAgICAgICAgIEB1cGRhdGVkQXQKICBjcmVhdGVkX2VtcGxveWVlX25vICBTdHJpbmcKICBtb2RpZmllZF9lbXBsb3llZV9ubyBTdHJpbmc/CiAgc3RhdHVzICAgICAgICAgICAgICAgTUlHUkFUSU9OX1NUQVRVUz8KICBsYXN0X3JlYWQgICAgICAgICAgICBEYXRlVGltZT8KICBpc19taWdyYXRlZCAgICAgICAgICBCb29sZWFuICAgICAgICAgICAgICAgICAgQGRlZmF1bHQoZmFsc2UpCiAgYXNzZXRzICAgICAgICAgICAgICAgQXNzZXRbXQogIFJvdXRlRnJvbSAgICAgICAgICAgIFJvdXRlW10gICAgICAgICAgICAgICAgICBAcmVsYXRpb24oInJvdXRlX3NpdGVwb2ludF9mcm9tIikKICBSb3V0ZVRvICAgICAgICAgICAgICBSb3V0ZVtdICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKCJyb3V0ZV9zaXRlcG9pbnRfdG8iKQogIENhYmxlRnJvbSAgICAgICAgICAgIENhYmxlW10gICAgICAgICAgICAgICAgICBAcmVsYXRpb24oImNhYmxlX3NpdGVwb2ludF9mcm9tIikKICBDYWJsZVRvICAgICAgICAgICAgICBDYWJsZVtdICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKCJjYWJsZV9zaXRlcG9pbnRfdG8iKQogIFNlZ21lbnRGcm9tICAgICAgICAgIFNlZ21lbnRbXSAgICAgICAgICAgICAgICBAcmVsYXRpb24oInNlZ21lbnRfc2l0ZXBvaW50X2Zyb20iKQogIFNlZ21lbnRUbyAgICAgICAgICAgIFNlZ21lbnRbXSAgICAgICAgICAgICAgICBAcmVsYXRpb24oInNlZ21lbnRfc2l0ZXBvaW50X3RvIikKCiAgQEBtYXAoInNpdGVfcG9pbnRzIikKfQoKbW9kZWwgTG9nIHsKICB1dWlkICAgICAgIFN0cmluZyAgICBAaWQgQGRlZmF1bHQoZGJnZW5lcmF0ZWQoImdlbl9yYW5kb21fdXVpZCgpIikpIEBkYi5VdWlkCiAgbGV2ZWwgICAgICBTdHJpbmcKICBtZXNzYWdlICAgIFN0cmluZwogIG1ldGEgICAgICAgSnNvbj8KICBjcmVhdGVkX2F0IERhdGVUaW1lICBAZGVmYXVsdChub3coKSkKICB1cGRhdGVkX2F0IERhdGVUaW1lICBAdXBkYXRlZEF0CiAgZGVsZXRlZF9hdCBEYXRlVGltZT8KCiAgQEBtYXAoImxvZ3MiKQp9Cgptb2RlbCBBc3NldCB7CiAgdXVpZCAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGRiZ2VuZXJhdGVkKCJnZW5fcmFuZG9tX3V1aWQoKSIpKSBAZGIuVXVpZAogIGNhZmVpbnNfdXVpZCAgICAgICAgIFN0cmluZz8gICAgICAgICAgIEBkYi5VdWlkCiAgdW5pcXVlX2lkICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgQHVuaXF1ZQogIG5hbWUgICAgICAgICAgICAgICAgIFN0cmluZwogIGRlc2NyaXB0aW9uICAgICAgICAgIFN0cmluZz8KICBjcmVhdGVkX2F0ICAgICAgICAgICBEYXRlVGltZSAgICAgICAgICBAZGVmYXVsdChub3coKSkKICB1cGRhdGVkX2F0ICAgICAgICAgICBEYXRlVGltZSAgICAgICAgICBAdXBkYXRlZEF0CiAgY3JlYXRlZF9lbXBsb3llZV9ubyAgU3RyaW5nCiAgbW9kaWZpZWRfZW1wbG95ZWVfbm8gU3RyaW5nPwogIGNvZGUgICAgICAgICAgICAgICAgIFN0cmluZwogIGFzc2V0X2dyb3VwX2NvZGUgICAgIFN0cmluZwogIHByb2plY3RfZ3JvdXBfY29kZSAgIFN0cmluZwogIHNpdGVfZ3JvdXBfY29kZSAgICAgIFN0cmluZwogIGFzc2V0X2NhdGVnb3J5ICAgICAgIFN0cmluZwogIGFzc2V0X293bmVyc2hpcCAgICAgIFN0cmluZwogIGFyZWFfb3duZXJzaGlwICAgICAgIFN0cmluZwogIHN0YXR1cyAgICAgICAgICAgICAgIE1JR1JBVElPTl9TVEFUVVM/CiAgbGFzdF9yZWFkICAgICAgICAgICAgRGF0ZVRpbWU/CiAgaXNfbWlncmF0ZWQgICAgICAgICAgQm9vbGVhbiAgICAgICAgICAgQGRlZmF1bHQoZmFsc2UpCgogIHByb2plY3QgICBQcm9qZWN0ICAgQHJlbGF0aW9uKGZpZWxkczogW3Byb2plY3RfZ3JvdXBfY29kZV0sIHJlZmVyZW5jZXM6IFtwcm9qZWN0X2dyb3VwX2NvZGVdKQogIHNpdGVwb2ludCBTaXRlUG9pbnQgQHJlbGF0aW9uKGZpZWxkczogW3NpdGVfZ3JvdXBfY29kZV0sIHJlZmVyZW5jZXM6IFtzaXRlX2dyb3VwX2NvZGVdKQoKICBAQG1hcCgiYXNzZXRzIikKfQoKbW9kZWwgUm91dGUgewogIHV1aWQgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoZGJnZW5lcmF0ZWQoImdlbl9yYW5kb21fdXVpZCgpIikpIEBkYi5VdWlkCiAgY2FmZWluc191dWlkICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgICAgIEBkYi5VdWlkCiAgdW5pcXVlX2lkICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgIEB1bmlxdWUKICBuYW1lICAgICAgICAgICAgICAgICBTdHJpbmcKICBnZW9tZXRyeSAgICAgICAgICAgICBVbnN1cHBvcnRlZCgiZ2VvbWV0cnkiKT8KICBsZW5ndGggICAgICAgICAgICAgICBEZWNpbWFsPyAgICAgICAgICAgICAgICAgQGRiLkRlY2ltYWwoMTAsIDMpCiAgY3JlYXRlZF9hdCAgICAgICAgICAgRGF0ZVRpbWUgICAgICAgICAgICAgICAgIEBkZWZhdWx0KG5vdygpKQogIHVwZGF0ZWRfYXQgICAgICAgICAgIERhdGVUaW1lICAgICAgICAgICAgICAgICBAdXBkYXRlZEF0CiAgY3JlYXRlZF9lbXBsb3llZV9ubyAgU3RyaW5nCiAgbW9kaWZpZWRfZW1wbG95ZWVfbm8gU3RyaW5nPwogIHNpdGVfZ3JvdXBfY29kZV9mcm9tIFN0cmluZwogIHNpdGVfZ3JvdXBfY29kZV90byAgIFN0cmluZwogIHJvdXRlX21ldGhvZCAgICAgICAgIFN0cmluZwogIHJvdXRlX293bmVyc2hpcCAgICAgIFN0cmluZwogIHN0YXR1cyAgICAgICAgICAgICAgIE1JR1JBVElPTl9TVEFUVVM/CiAgbGFzdF9yZWFkICAgICAgICAgICAgRGF0ZVRpbWU/CiAgaXNfbWlncmF0ZWQgICAgICAgICAgQm9vbGVhbiAgICAgICAgICAgICAgICAgIEBkZWZhdWx0KGZhbHNlKQogIHNpdGVwb2ludF9mcm9tICAgICAgIFNpdGVQb2ludCAgICAgICAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbc2l0ZV9ncm91cF9jb2RlX2Zyb21dLCByZWZlcmVuY2VzOiBbc2l0ZV9ncm91cF9jb2RlXSwgbmFtZTogInJvdXRlX3NpdGVwb2ludF9mcm9tIikKICBzaXRlcG9pbnRfdG8gICAgICAgICBTaXRlUG9pbnQgICAgICAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW3NpdGVfZ3JvdXBfY29kZV90b10sIHJlZmVyZW5jZXM6IFtzaXRlX2dyb3VwX2NvZGVdLCBuYW1lOiAicm91dGVfc2l0ZXBvaW50X3RvIikKCiAgQEBtYXAoInJvdXRlcyIpCn0KCm1vZGVsIENhYmxlIHsKICB1dWlkICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgIEBpZCBAZGVmYXVsdChkYmdlbmVyYXRlZCgiZ2VuX3JhbmRvbV91dWlkKCkiKSkgQGRiLlV1aWQKICBjYWZlaW5zX3V1aWQgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgIEBkYi5VdWlkCiAgdW5pcXVlX2lkICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICBAdW5pcXVlCiAgcHJvamVjdF9ncm91cF9jb2RlICAgICAgICBTdHJpbmcKICBuYW1lICAgICAgICAgICAgICAgICAgICAgIFN0cmluZwogIGRlc2NyaXB0aW9uICAgICAgICAgICAgICAgU3RyaW5nPwogIGxlbmd0aCAgICAgICAgICAgICAgICAgICAgRGVjaW1hbCAgICAgICAgICAgQGRiLkRlY2ltYWwoMTAsIDMpCiAgY3JlYXRlZF9hdCAgICAgICAgICAgICAgICBEYXRlVGltZSAgICAgICAgICBAZGVmYXVsdChub3coKSkKICB1cGRhdGVkX2F0ICAgICAgICAgICAgICAgIERhdGVUaW1lICAgICAgICAgIEB1cGRhdGVkQXQKICBjcmVhdGVkX2VtcGxveWVlX25vICAgICAgIFN0cmluZwogIG1vZGlmaWVkX2VtcGxveWVlX25vICAgICAgU3RyaW5nPwogIGNhYmxlX2NhdGVnb3J5ICAgICAgICAgICAgU3RyaW5nCiAgY2FibGVfZ3JvdXAgICAgICAgICAgICAgICBTdHJpbmcKICBzaXRlX2dyb3VwX2NvZGVfZnJvbSAgICAgIFN0cmluZwogIHNpdGVfZ3JvdXBfY29kZV90byAgICAgICAgU3RyaW5nCiAgYXNzZXRfb3duZXJzaGlwICAgICAgICAgICBTdHJpbmcKICBhcmVhX293bmVyc2hpcCAgICAgICAgICAgIFN0cmluZwogIHBsYWNlbWVudF90eXBlICAgICAgICAgICAgU3RyaW5nCiAgZnVuY3Rpb24gICAgICAgICAgICAgICAgICBTdHJpbmcKICByb3V0ZV91bmlxdWVfaWRfcGVtYmVudHVrIFN0cmluZz8KICBzdGF0dXMgICAgICAgICAgICAgICAgICAgIE1JR1JBVElPTl9TVEFUVVM/CiAgbGFzdF9yZWFkICAgICAgICAgICAgICAgICBEYXRlVGltZT8KICBpc19taWdyYXRlZCAgICAgICAgICAgICAgIEJvb2xlYW4gICAgICAgICAgIEBkZWZhdWx0KGZhbHNlKQogIHNpdGVwb2ludF9mcm9tICAgICAgICAgICAgU2l0ZVBvaW50ICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW3NpdGVfZ3JvdXBfY29kZV9mcm9tXSwgcmVmZXJlbmNlczogW3NpdGVfZ3JvdXBfY29kZV0sIG5hbWU6ICJjYWJsZV9zaXRlcG9pbnRfZnJvbSIpCiAgc2l0ZXBvaW50X3RvICAgICAgICAgICAgICBTaXRlUG9pbnQgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbc2l0ZV9ncm91cF9jb2RlX3RvXSwgcmVmZXJlbmNlczogW3NpdGVfZ3JvdXBfY29kZV0sIG5hbWU6ICJjYWJsZV9zaXRlcG9pbnRfdG8iKQogIHByb2plY3QgICAgICAgICAgICAgICAgICAgUHJvamVjdCAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW3Byb2plY3RfZ3JvdXBfY29kZV0sIHJlZmVyZW5jZXM6IFtwcm9qZWN0X2dyb3VwX2NvZGVdLCBuYW1lOiAiY2FibGVfcHJvamVjdCIpCgogIEBAbWFwKCJjYWJsZXMiKQp9Cgptb2RlbCBTZWdtZW50IHsKICB1dWlkICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgIEBpZCBAZGVmYXVsdChkYmdlbmVyYXRlZCgiZ2VuX3JhbmRvbV91dWlkKCkiKSkgQGRiLlV1aWQKICBjYWZlaW5zX3V1aWQgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgIEBkYi5VdWlkCiAgdW5pcXVlX2lkICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICBAdW5pcXVlCiAgcHJvamVjdF9ncm91cF9jb2RlICAgICAgICBTdHJpbmcKICBuYW1lICAgICAgICAgICAgICAgICAgICAgIFN0cmluZwogIGNyZWF0ZWRfYXQgICAgICAgICAgICAgICAgRGF0ZVRpbWUgICAgICAgICAgQGRlZmF1bHQobm93KCkpCiAgdXBkYXRlZF9hdCAgICAgICAgICAgICAgICBEYXRlVGltZSAgICAgICAgICBAdXBkYXRlZEF0CiAgY3JlYXRlZF9lbXBsb3llZV9ubyAgICAgICBTdHJpbmcKICBtb2RpZmllZF9lbXBsb3llZV9ubyAgICAgIFN0cmluZz8KICBzaXRlX2dyb3VwX2NvZGVfZnJvbSAgICAgIFN0cmluZwogIHNpdGVfZ3JvdXBfY29kZV90byAgICAgICAgU3RyaW5nCiAgcm91dGVfdW5pcXVlX2lkX3BlbWJlbnR1ayBTdHJpbmc/CiAgc3RhdHVzICAgICAgICAgICAgICAgICAgICBNSUdSQVRJT05fU1RBVFVTPwogIGxhc3RfcmVhZCAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/CiAgaXNfbWlncmF0ZWQgICAgICAgICAgICAgICBCb29sZWFuICAgICAgICAgICBAZGVmYXVsdChmYWxzZSkKICBzaXRlcG9pbnRfZnJvbSAgICAgICAgICAgIFNpdGVQb2ludCAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtzaXRlX2dyb3VwX2NvZGVfZnJvbV0sIHJlZmVyZW5jZXM6IFtzaXRlX2dyb3VwX2NvZGVdLCBuYW1lOiAic2VnbWVudF9zaXRlcG9pbnRfZnJvbSIpCiAgc2l0ZXBvaW50X3RvICAgICAgICAgICAgICBTaXRlUG9pbnQgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbc2l0ZV9ncm91cF9jb2RlX3RvXSwgcmVmZXJlbmNlczogW3NpdGVfZ3JvdXBfY29kZV0sIG5hbWU6ICJzZWdtZW50X3NpdGVwb2ludF90byIpCiAgcHJvamVjdCAgICAgICAgICAgICAgICAgICBQcm9qZWN0ICAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbcHJvamVjdF9ncm91cF9jb2RlXSwgcmVmZXJlbmNlczogW3Byb2plY3RfZ3JvdXBfY29kZV0sIG5hbWU6ICJzZWdtZW50X3Byb2plY3QiKQoKICBAQG1hcCgic2VnbWVudHMiKQp9Cg==',
  inlineSchemaHash:
    'da505372adfb01748cadb16f25ceb5adc42da4ecc73572461ff6a898e8fb7be7',
  noEngine: false,
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse(
  '{"models":{"Project":{"dbName":"projects","fields":[{"name":"uuid","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"dbgenerated","args":["gen_random_uuid()"]},"isGenerated":false,"isUpdatedAt":false},{"name":"cafeins_uuid","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"company_code","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"vendor_no","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"project_group_code","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"created_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updated_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":true},{"name":"created_employee_no","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"modified_employee_no","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"description","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"po_number","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"owner_name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"owner_nik","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"enum","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"MIGRATION_STATUS","isGenerated":false,"isUpdatedAt":false},{"name":"last_read","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"is_migrated","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","default":false,"isGenerated":false,"isUpdatedAt":false},{"name":"assets","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Asset","relationName":"AssetToProject","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"Cable","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Cable","relationName":"cable_project","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"Segment","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Segment","relationName":"segment_project","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"SitePoint":{"dbName":"site_points","fields":[{"name":"uuid","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"dbgenerated","args":["gen_random_uuid()"]},"isGenerated":false,"isUpdatedAt":false},{"name":"cafeins_uuid","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"company_code","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"site_group_code","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"latitude","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","isGenerated":false,"isUpdatedAt":false},{"name":"longitude","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","isGenerated":false,"isUpdatedAt":false},{"name":"created_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updated_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":true},{"name":"created_employee_no","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"modified_employee_no","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"enum","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"MIGRATION_STATUS","isGenerated":false,"isUpdatedAt":false},{"name":"last_read","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"is_migrated","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","default":false,"isGenerated":false,"isUpdatedAt":false},{"name":"assets","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Asset","relationName":"AssetToSitePoint","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"RouteFrom","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Route","relationName":"route_sitepoint_from","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"RouteTo","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Route","relationName":"route_sitepoint_to","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"CableFrom","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Cable","relationName":"cable_sitepoint_from","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"CableTo","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Cable","relationName":"cable_sitepoint_to","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"SegmentFrom","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Segment","relationName":"segment_sitepoint_from","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"SegmentTo","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Segment","relationName":"segment_sitepoint_to","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Log":{"dbName":"logs","fields":[{"name":"uuid","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"dbgenerated","args":["gen_random_uuid()"]},"isGenerated":false,"isUpdatedAt":false},{"name":"level","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"message","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"meta","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","isGenerated":false,"isUpdatedAt":false},{"name":"created_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updated_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":true},{"name":"deleted_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Asset":{"dbName":"assets","fields":[{"name":"uuid","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"dbgenerated","args":["gen_random_uuid()"]},"isGenerated":false,"isUpdatedAt":false},{"name":"cafeins_uuid","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"unique_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"description","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"created_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updated_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":true},{"name":"created_employee_no","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"modified_employee_no","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"code","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"asset_group_code","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"project_group_code","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"site_group_code","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"asset_category","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"asset_ownership","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"area_ownership","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"enum","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"MIGRATION_STATUS","isGenerated":false,"isUpdatedAt":false},{"name":"last_read","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"is_migrated","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","default":false,"isGenerated":false,"isUpdatedAt":false},{"name":"project","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Project","relationName":"AssetToProject","relationFromFields":["project_group_code"],"relationToFields":["project_group_code"],"isGenerated":false,"isUpdatedAt":false},{"name":"sitepoint","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"SitePoint","relationName":"AssetToSitePoint","relationFromFields":["site_group_code"],"relationToFields":["site_group_code"],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Route":{"dbName":"routes","fields":[{"name":"uuid","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"dbgenerated","args":["gen_random_uuid()"]},"isGenerated":false,"isUpdatedAt":false},{"name":"cafeins_uuid","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"unique_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"length","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"created_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updated_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":true},{"name":"created_employee_no","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"modified_employee_no","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"site_group_code_from","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"site_group_code_to","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"route_method","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"route_ownership","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"enum","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"MIGRATION_STATUS","isGenerated":false,"isUpdatedAt":false},{"name":"last_read","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"is_migrated","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","default":false,"isGenerated":false,"isUpdatedAt":false},{"name":"sitepoint_from","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"SitePoint","relationName":"route_sitepoint_from","relationFromFields":["site_group_code_from"],"relationToFields":["site_group_code"],"isGenerated":false,"isUpdatedAt":false},{"name":"sitepoint_to","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"SitePoint","relationName":"route_sitepoint_to","relationFromFields":["site_group_code_to"],"relationToFields":["site_group_code"],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Cable":{"dbName":"cables","fields":[{"name":"uuid","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"dbgenerated","args":["gen_random_uuid()"]},"isGenerated":false,"isUpdatedAt":false},{"name":"cafeins_uuid","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"unique_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"project_group_code","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"description","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"length","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"created_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updated_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":true},{"name":"created_employee_no","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"modified_employee_no","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"cable_category","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"cable_group","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"site_group_code_from","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"site_group_code_to","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"asset_ownership","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"area_ownership","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"placement_type","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"function","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"route_unique_id_pembentuk","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"enum","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"MIGRATION_STATUS","isGenerated":false,"isUpdatedAt":false},{"name":"last_read","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"is_migrated","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","default":false,"isGenerated":false,"isUpdatedAt":false},{"name":"sitepoint_from","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"SitePoint","relationName":"cable_sitepoint_from","relationFromFields":["site_group_code_from"],"relationToFields":["site_group_code"],"isGenerated":false,"isUpdatedAt":false},{"name":"sitepoint_to","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"SitePoint","relationName":"cable_sitepoint_to","relationFromFields":["site_group_code_to"],"relationToFields":["site_group_code"],"isGenerated":false,"isUpdatedAt":false},{"name":"project","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Project","relationName":"cable_project","relationFromFields":["project_group_code"],"relationToFields":["project_group_code"],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Segment":{"dbName":"segments","fields":[{"name":"uuid","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"dbgenerated","args":["gen_random_uuid()"]},"isGenerated":false,"isUpdatedAt":false},{"name":"cafeins_uuid","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"unique_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"project_group_code","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"created_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updated_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":true},{"name":"created_employee_no","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"modified_employee_no","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"site_group_code_from","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"site_group_code_to","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"route_unique_id_pembentuk","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"enum","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"MIGRATION_STATUS","isGenerated":false,"isUpdatedAt":false},{"name":"last_read","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"is_migrated","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","default":false,"isGenerated":false,"isUpdatedAt":false},{"name":"sitepoint_from","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"SitePoint","relationName":"segment_sitepoint_from","relationFromFields":["site_group_code_from"],"relationToFields":["site_group_code"],"isGenerated":false,"isUpdatedAt":false},{"name":"sitepoint_to","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"SitePoint","relationName":"segment_sitepoint_to","relationFromFields":["site_group_code_to"],"relationToFields":["site_group_code"],"isGenerated":false,"isUpdatedAt":false},{"name":"project","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Project","relationName":"segment_project","relationFromFields":["project_group_code"],"relationToFields":["project_group_code"],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false}},"enums":{"MIGRATION_STATUS":{"values":[{"name":"CREATED","dbName":null},{"name":"UPDATED","dbName":null}],"dbName":null}},"types":{}}',
)
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_BARISTA_URL:
      (typeof globalThis !== 'undefined' &&
        globalThis['DATABASE_BARISTA_URL']) ||
      (typeof process !== 'undefined' &&
        process.env &&
        process.env.DATABASE_BARISTA_URL) ||
      undefined,
  },
})

if (
  (typeof globalThis !== 'undefined' && globalThis['DEBUG']) ||
  (typeof process !== 'undefined' && process.env && process.env.DEBUG) ||
  undefined
) {
  Debug.enable(
    (typeof globalThis !== 'undefined' && globalThis['DEBUG']) ||
      (typeof process !== 'undefined' && process.env && process.env.DEBUG) ||
      undefined,
  )
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)
