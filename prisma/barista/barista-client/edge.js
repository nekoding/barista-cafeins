
Object.defineProperty(exports, "__esModule", { value: true });

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
  client: "5.5.2",
  engine: "aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
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
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

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
  is_migrated: 'is_migrated'
};

exports.Prisma.SiteScalarFieldEnum = {
  uuid: 'uuid',
  name: 'name',
  site_group_code: 'site_group_code',
  latitude: 'latitude',
  longitude: 'longitude',
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
  is_migrated: 'is_migrated'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.ProjectStatus = exports.$Enums.ProjectStatus = {
  CREATED: 'CREATED',
  UPDATED: 'UPDATED'
};

exports.Prisma.ModelName = {
  Project: 'Project',
  Site: 'Site'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/home/nekoding/Project/bunjs/barista-cafeins/prisma/barista/barista-client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "debian-openssl-3.0.x",
        "native": true
      }
    ],
    "previewFeatures": [
      "postgresqlExtensions"
    ],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "..",
  "clientVersion": "5.5.2",
  "engineVersion": "aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_BARISTA_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgICAgICAgID0gInByaXNtYS1jbGllbnQtanMiCiAgb3V0cHV0ICAgICAgICAgID0gImJhcmlzdGEtY2xpZW50IgogIHByZXZpZXdGZWF0dXJlcyA9IFsicG9zdGdyZXNxbEV4dGVuc2lvbnMiXQp9CgpkYXRhc291cmNlIGRiIHsKICBwcm92aWRlciAgID0gInBvc3RncmVzcWwiCiAgdXJsICAgICAgICA9IGVudigiREFUQUJBU0VfQkFSSVNUQV9VUkwiKQogIGV4dGVuc2lvbnMgPSBbcG9zdGdpc10KfQoKZW51bSBQcm9qZWN0U3RhdHVzIHsKICBDUkVBVEVECiAgVVBEQVRFRAp9CgovLyBNb2RlbAptb2RlbCBQcm9qZWN0IHsKICB1dWlkICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICBAaWQgQGRlZmF1bHQoZGJnZW5lcmF0ZWQoImdlbl9yYW5kb21fdXVpZCgpIikpIEBkYi5VdWlkCiAgY2FmZWluc191dWlkICAgICAgICAgU3RyaW5nPwogIGNvbXBhbnlfY29kZSAgICAgICAgIFN0cmluZz8KICB2ZW5kb3Jfbm8gICAgICAgICAgICBTdHJpbmc/CiAgbmFtZSAgICAgICAgICAgICAgICAgU3RyaW5nPwogIHByb2plY3RfZ3JvdXBfY29kZSAgIFN0cmluZyAgICAgICAgIEB1bmlxdWUKICBjcmVhdGVkX2F0ICAgICAgICAgICBEYXRlVGltZSAgICAgICBAZGVmYXVsdChub3coKSkKICB1cGRhdGVkX2F0ICAgICAgICAgICBEYXRlVGltZSAgICAgICBAdXBkYXRlZEF0CiAgY3JlYXRlZF9lbXBsb3llZV9ubyAgQmlnSW50PwogIG1vZGlmaWVkX2VtcGxveWVlX25vIEJpZ0ludD8KICBkZXNjcmlwdGlvbiAgICAgICAgICBTdHJpbmc/CiAgcG9fbnVtYmVyICAgICAgICAgICAgU3RyaW5nPwogIG93bmVyX25hbWUgICAgICAgICAgIFN0cmluZz8KICBvd25lcl9uaWsgICAgICAgICAgICBTdHJpbmc/CiAgc3RhdHVzICAgICAgICAgICAgICAgUHJvamVjdFN0YXR1cz8KICBsYXN0X3JlYWQgICAgICAgICAgICBEYXRlVGltZT8KICBpc19taWdyYXRlZCAgICAgICAgICBCb29sZWFuICAgICAgICBAZGVmYXVsdChmYWxzZSkKCiAgQEBtYXAoInByb2plY3RzIikKfQoKbW9kZWwgU2l0ZSB7CiAgdXVpZCAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChkYmdlbmVyYXRlZCgiZ2VuX3JhbmRvbV91dWlkKCkiKSkgQGRiLlV1aWQKICBuYW1lICAgICAgICAgICAgICAgICBTdHJpbmcKICBzaXRlX2dyb3VwX2NvZGUgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgQHVuaXF1ZQogIGxhdGl0dWRlICAgICAgICAgICAgIEZsb2F0CiAgbG9uZ2l0dWRlICAgICAgICAgICAgRmxvYXQKICBnZW9tZXRyeSAgICAgICAgICAgICBVbnN1cHBvcnRlZCgiZ2VvbWV0cnkiKT8KICBjcmVhdGVkX2F0ICAgICAgICAgICBEYXRlVGltZSAgICAgICAgICAgICAgICAgQGRlZmF1bHQobm93KCkpCiAgdXBkYXRlZF9hdCAgICAgICAgICAgRGF0ZVRpbWUgICAgICAgICAgICAgICAgIEB1cGRhdGVkQXQKICBjcmVhdGVkX2VtcGxveWVlX25vICBCaWdJbnQ/CiAgbW9kaWZpZWRfZW1wbG95ZWVfbm8gQmlnSW50PwogIGRlc2NyaXB0aW9uICAgICAgICAgIFN0cmluZz8KICBwb19udW1iZXIgICAgICAgICAgICBTdHJpbmc/CiAgb3duZXJfbmFtZSAgICAgICAgICAgU3RyaW5nPwogIG93bmVyX25payAgICAgICAgICAgIFN0cmluZz8KICBzdGF0dXMgICAgICAgICAgICAgICBQcm9qZWN0U3RhdHVzPwogIGxhc3RfcmVhZCAgICAgICAgICAgIERhdGVUaW1lPwogIGlzX21pZ3JhdGVkICAgICAgICAgIEJvb2xlYW4gICAgICAgICAgICAgICAgICBAZGVmYXVsdChmYWxzZSkKCiAgQEBtYXAoInNpdGUiKQp9Cg==",
  "inlineSchemaHash": "0e1ee87acdd5296cc40cb2cc5e7b3c186c2f3b8c5555a1673250c2b8ec12d3e3"
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Project\":{\"dbName\":\"projects\",\"fields\":[{\"name\":\"uuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cafeins_uuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"company_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vendor_no\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"project_group_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"created_employee_no\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modified_employee_no\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"po_number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"owner_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"owner_nik\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProjectStatus\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_read\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_migrated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Site\":{\"dbName\":\"site\",\"fields\":[{\"name\":\"uuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"site_group_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"latitude\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"longitude\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"created_employee_no\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modified_employee_no\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"po_number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"owner_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"owner_nik\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProjectStatus\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_read\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_migrated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"ProjectStatus\":{\"values\":[{\"name\":\"CREATED\",\"dbName\":null},{\"name\":\"UPDATED\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)


config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_BARISTA_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_BARISTA_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_BARISTA_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

