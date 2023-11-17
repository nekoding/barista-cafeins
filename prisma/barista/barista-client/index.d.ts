
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model SitePoint
 * 
 */
export type SitePoint = $Result.DefaultSelection<Prisma.$SitePointPayload>
/**
 * Model Log
 * 
 */
export type Log = $Result.DefaultSelection<Prisma.$LogPayload>
/**
 * Model Asset
 * 
 */
export type Asset = $Result.DefaultSelection<Prisma.$AssetPayload>
/**
 * Model Route
 * 
 */
export type Route = $Result.DefaultSelection<Prisma.$RoutePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const MIGRATION_STATUS: {
  CREATED: 'CREATED',
  UPDATED: 'UPDATED'
};

export type MIGRATION_STATUS = (typeof MIGRATION_STATUS)[keyof typeof MIGRATION_STATUS]

}

export type MIGRATION_STATUS = $Enums.MIGRATION_STATUS

export const MIGRATION_STATUS: typeof $Enums.MIGRATION_STATUS

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Projects
 * const projects = await prisma.project.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Projects
   * const projects = await prisma.project.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs>;

  /**
   * `prisma.sitePoint`: Exposes CRUD operations for the **SitePoint** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SitePoints
    * const sitePoints = await prisma.sitePoint.findMany()
    * ```
    */
  get sitePoint(): Prisma.SitePointDelegate<ExtArgs>;

  /**
   * `prisma.log`: Exposes CRUD operations for the **Log** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Logs
    * const logs = await prisma.log.findMany()
    * ```
    */
  get log(): Prisma.LogDelegate<ExtArgs>;

  /**
   * `prisma.asset`: Exposes CRUD operations for the **Asset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assets
    * const assets = await prisma.asset.findMany()
    * ```
    */
  get asset(): Prisma.AssetDelegate<ExtArgs>;

  /**
   * `prisma.route`: Exposes CRUD operations for the **Route** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Routes
    * const routes = await prisma.route.findMany()
    * ```
    */
  get route(): Prisma.RouteDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Project: 'Project',
    SitePoint: 'SitePoint',
    Log: 'Log',
    Asset: 'Asset',
    Route: 'Route'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'project' | 'sitePoint' | 'log' | 'asset' | 'route'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>,
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      SitePoint: {
        payload: Prisma.$SitePointPayload<ExtArgs>
        fields: Prisma.SitePointFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SitePointFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SitePointPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SitePointFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SitePointPayload>
          }
          findFirst: {
            args: Prisma.SitePointFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SitePointPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SitePointFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SitePointPayload>
          }
          findMany: {
            args: Prisma.SitePointFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SitePointPayload>[]
          }
          create: {
            args: Prisma.SitePointCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SitePointPayload>
          }
          createMany: {
            args: Prisma.SitePointCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SitePointDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SitePointPayload>
          }
          update: {
            args: Prisma.SitePointUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SitePointPayload>
          }
          deleteMany: {
            args: Prisma.SitePointDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SitePointUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SitePointUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SitePointPayload>
          }
          aggregate: {
            args: Prisma.SitePointAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSitePoint>
          }
          groupBy: {
            args: Prisma.SitePointGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SitePointGroupByOutputType>[]
          }
          count: {
            args: Prisma.SitePointCountArgs<ExtArgs>,
            result: $Utils.Optional<SitePointCountAggregateOutputType> | number
          }
        }
      }
      Log: {
        payload: Prisma.$LogPayload<ExtArgs>
        fields: Prisma.LogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LogFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LogFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          findFirst: {
            args: Prisma.LogFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LogFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          findMany: {
            args: Prisma.LogFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LogPayload>[]
          }
          create: {
            args: Prisma.LogCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          createMany: {
            args: Prisma.LogCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.LogDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          update: {
            args: Prisma.LogUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          deleteMany: {
            args: Prisma.LogDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.LogUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.LogUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          aggregate: {
            args: Prisma.LogAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLog>
          }
          groupBy: {
            args: Prisma.LogGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LogGroupByOutputType>[]
          }
          count: {
            args: Prisma.LogCountArgs<ExtArgs>,
            result: $Utils.Optional<LogCountAggregateOutputType> | number
          }
        }
      }
      Asset: {
        payload: Prisma.$AssetPayload<ExtArgs>
        fields: Prisma.AssetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssetFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssetFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          findFirst: {
            args: Prisma.AssetFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssetFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          findMany: {
            args: Prisma.AssetFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>[]
          }
          create: {
            args: Prisma.AssetCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          createMany: {
            args: Prisma.AssetCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AssetDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          update: {
            args: Prisma.AssetUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          deleteMany: {
            args: Prisma.AssetDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AssetUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AssetUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          aggregate: {
            args: Prisma.AssetAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAsset>
          }
          groupBy: {
            args: Prisma.AssetGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AssetGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssetCountArgs<ExtArgs>,
            result: $Utils.Optional<AssetCountAggregateOutputType> | number
          }
        }
      }
      Route: {
        payload: Prisma.$RoutePayload<ExtArgs>
        fields: Prisma.RouteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RouteFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoutePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RouteFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          findFirst: {
            args: Prisma.RouteFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoutePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RouteFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          findMany: {
            args: Prisma.RouteFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>[]
          }
          create: {
            args: Prisma.RouteCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          createMany: {
            args: Prisma.RouteCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.RouteDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          update: {
            args: Prisma.RouteUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          deleteMany: {
            args: Prisma.RouteDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RouteUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RouteUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          aggregate: {
            args: Prisma.RouteAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRoute>
          }
          groupBy: {
            args: Prisma.RouteGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RouteGroupByOutputType>[]
          }
          count: {
            args: Prisma.RouteCountArgs<ExtArgs>,
            result: $Utils.Optional<RouteCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    uuid: string | null
    cafeins_uuid: string | null
    company_code: string | null
    vendor_no: string | null
    name: string | null
    project_group_code: string | null
    created_at: Date | null
    updated_at: Date | null
    created_employee_no: string | null
    modified_employee_no: string | null
    description: string | null
    po_number: string | null
    owner_name: string | null
    owner_nik: string | null
    status: $Enums.MIGRATION_STATUS | null
    last_read: Date | null
    is_migrated: boolean | null
  }

  export type ProjectMaxAggregateOutputType = {
    uuid: string | null
    cafeins_uuid: string | null
    company_code: string | null
    vendor_no: string | null
    name: string | null
    project_group_code: string | null
    created_at: Date | null
    updated_at: Date | null
    created_employee_no: string | null
    modified_employee_no: string | null
    description: string | null
    po_number: string | null
    owner_name: string | null
    owner_nik: string | null
    status: $Enums.MIGRATION_STATUS | null
    last_read: Date | null
    is_migrated: boolean | null
  }

  export type ProjectCountAggregateOutputType = {
    uuid: number
    cafeins_uuid: number
    company_code: number
    vendor_no: number
    name: number
    project_group_code: number
    created_at: number
    updated_at: number
    created_employee_no: number
    modified_employee_no: number
    description: number
    po_number: number
    owner_name: number
    owner_nik: number
    status: number
    last_read: number
    is_migrated: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    uuid?: true
    cafeins_uuid?: true
    company_code?: true
    vendor_no?: true
    name?: true
    project_group_code?: true
    created_at?: true
    updated_at?: true
    created_employee_no?: true
    modified_employee_no?: true
    description?: true
    po_number?: true
    owner_name?: true
    owner_nik?: true
    status?: true
    last_read?: true
    is_migrated?: true
  }

  export type ProjectMaxAggregateInputType = {
    uuid?: true
    cafeins_uuid?: true
    company_code?: true
    vendor_no?: true
    name?: true
    project_group_code?: true
    created_at?: true
    updated_at?: true
    created_employee_no?: true
    modified_employee_no?: true
    description?: true
    po_number?: true
    owner_name?: true
    owner_nik?: true
    status?: true
    last_read?: true
    is_migrated?: true
  }

  export type ProjectCountAggregateInputType = {
    uuid?: true
    cafeins_uuid?: true
    company_code?: true
    vendor_no?: true
    name?: true
    project_group_code?: true
    created_at?: true
    updated_at?: true
    created_employee_no?: true
    modified_employee_no?: true
    description?: true
    po_number?: true
    owner_name?: true
    owner_nik?: true
    status?: true
    last_read?: true
    is_migrated?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    uuid: string
    cafeins_uuid: string | null
    company_code: string
    vendor_no: string
    name: string
    project_group_code: string
    created_at: Date
    updated_at: Date
    created_employee_no: string | null
    modified_employee_no: string | null
    description: string | null
    po_number: string | null
    owner_name: string | null
    owner_nik: string | null
    status: $Enums.MIGRATION_STATUS | null
    last_read: Date | null
    is_migrated: boolean
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    cafeins_uuid?: boolean
    company_code?: boolean
    vendor_no?: boolean
    name?: boolean
    project_group_code?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_employee_no?: boolean
    modified_employee_no?: boolean
    description?: boolean
    po_number?: boolean
    owner_name?: boolean
    owner_nik?: boolean
    status?: boolean
    last_read?: boolean
    is_migrated?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    uuid?: boolean
    cafeins_uuid?: boolean
    company_code?: boolean
    vendor_no?: boolean
    name?: boolean
    project_group_code?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_employee_no?: boolean
    modified_employee_no?: boolean
    description?: boolean
    po_number?: boolean
    owner_name?: boolean
    owner_nik?: boolean
    status?: boolean
    last_read?: boolean
    is_migrated?: boolean
  }


  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      cafeins_uuid: string | null
      company_code: string
      vendor_no: string
      name: string
      project_group_code: string
      created_at: Date
      updated_at: Date
      created_employee_no: string | null
      modified_employee_no: string | null
      description: string | null
      po_number: string | null
      owner_name: string | null
      owner_nik: string | null
      status: $Enums.MIGRATION_STATUS | null
      last_read: Date | null
      is_migrated: boolean
    }, ExtArgs["result"]["project"]>
    composites: {}
  }


  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProjectFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>
    ): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Project that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProjectFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>
    ): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const projectWithUuidOnly = await prisma.project.findMany({ select: { uuid: true } })
     * 
    **/
    findMany<T extends ProjectFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
    **/
    create<T extends ProjectCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>
    ): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Projects.
     *     @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     *     @example
     *     // Create many Projects
     *     const project = await prisma.project.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProjectCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
    **/
    delete<T extends ProjectDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>
    ): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProjectUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>
    ): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProjectDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProjectUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
    **/
    upsert<T extends ProjectUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>
    ): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Project model
   */ 
  interface ProjectFieldRefs {
    readonly uuid: FieldRef<"Project", 'String'>
    readonly cafeins_uuid: FieldRef<"Project", 'String'>
    readonly company_code: FieldRef<"Project", 'String'>
    readonly vendor_no: FieldRef<"Project", 'String'>
    readonly name: FieldRef<"Project", 'String'>
    readonly project_group_code: FieldRef<"Project", 'String'>
    readonly created_at: FieldRef<"Project", 'DateTime'>
    readonly updated_at: FieldRef<"Project", 'DateTime'>
    readonly created_employee_no: FieldRef<"Project", 'String'>
    readonly modified_employee_no: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly po_number: FieldRef<"Project", 'String'>
    readonly owner_name: FieldRef<"Project", 'String'>
    readonly owner_nik: FieldRef<"Project", 'String'>
    readonly status: FieldRef<"Project", 'MIGRATION_STATUS'>
    readonly last_read: FieldRef<"Project", 'DateTime'>
    readonly is_migrated: FieldRef<"Project", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }


  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }


  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }


  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }


  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }


  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }


  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }


  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
  }


  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }


  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }


  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
  }


  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
  }



  /**
   * Model SitePoint
   */

  export type AggregateSitePoint = {
    _count: SitePointCountAggregateOutputType | null
    _avg: SitePointAvgAggregateOutputType | null
    _sum: SitePointSumAggregateOutputType | null
    _min: SitePointMinAggregateOutputType | null
    _max: SitePointMaxAggregateOutputType | null
  }

  export type SitePointAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type SitePointSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type SitePointMinAggregateOutputType = {
    uuid: string | null
    cafeins_uuid: string | null
    name: string | null
    site_group_code: string | null
    latitude: number | null
    longitude: number | null
    created_at: Date | null
    updated_at: Date | null
    created_employee_no: string | null
    modified_employee_no: string | null
    status: $Enums.MIGRATION_STATUS | null
    last_read: Date | null
    is_migrated: boolean | null
  }

  export type SitePointMaxAggregateOutputType = {
    uuid: string | null
    cafeins_uuid: string | null
    name: string | null
    site_group_code: string | null
    latitude: number | null
    longitude: number | null
    created_at: Date | null
    updated_at: Date | null
    created_employee_no: string | null
    modified_employee_no: string | null
    status: $Enums.MIGRATION_STATUS | null
    last_read: Date | null
    is_migrated: boolean | null
  }

  export type SitePointCountAggregateOutputType = {
    uuid: number
    cafeins_uuid: number
    name: number
    site_group_code: number
    latitude: number
    longitude: number
    created_at: number
    updated_at: number
    created_employee_no: number
    modified_employee_no: number
    status: number
    last_read: number
    is_migrated: number
    _all: number
  }


  export type SitePointAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type SitePointSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type SitePointMinAggregateInputType = {
    uuid?: true
    cafeins_uuid?: true
    name?: true
    site_group_code?: true
    latitude?: true
    longitude?: true
    created_at?: true
    updated_at?: true
    created_employee_no?: true
    modified_employee_no?: true
    status?: true
    last_read?: true
    is_migrated?: true
  }

  export type SitePointMaxAggregateInputType = {
    uuid?: true
    cafeins_uuid?: true
    name?: true
    site_group_code?: true
    latitude?: true
    longitude?: true
    created_at?: true
    updated_at?: true
    created_employee_no?: true
    modified_employee_no?: true
    status?: true
    last_read?: true
    is_migrated?: true
  }

  export type SitePointCountAggregateInputType = {
    uuid?: true
    cafeins_uuid?: true
    name?: true
    site_group_code?: true
    latitude?: true
    longitude?: true
    created_at?: true
    updated_at?: true
    created_employee_no?: true
    modified_employee_no?: true
    status?: true
    last_read?: true
    is_migrated?: true
    _all?: true
  }

  export type SitePointAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SitePoint to aggregate.
     */
    where?: SitePointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SitePoints to fetch.
     */
    orderBy?: SitePointOrderByWithRelationInput | SitePointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SitePointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SitePoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SitePoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SitePoints
    **/
    _count?: true | SitePointCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SitePointAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SitePointSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SitePointMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SitePointMaxAggregateInputType
  }

  export type GetSitePointAggregateType<T extends SitePointAggregateArgs> = {
        [P in keyof T & keyof AggregateSitePoint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSitePoint[P]>
      : GetScalarType<T[P], AggregateSitePoint[P]>
  }




  export type SitePointGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SitePointWhereInput
    orderBy?: SitePointOrderByWithAggregationInput | SitePointOrderByWithAggregationInput[]
    by: SitePointScalarFieldEnum[] | SitePointScalarFieldEnum
    having?: SitePointScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SitePointCountAggregateInputType | true
    _avg?: SitePointAvgAggregateInputType
    _sum?: SitePointSumAggregateInputType
    _min?: SitePointMinAggregateInputType
    _max?: SitePointMaxAggregateInputType
  }

  export type SitePointGroupByOutputType = {
    uuid: string
    cafeins_uuid: string | null
    name: string
    site_group_code: string
    latitude: number
    longitude: number
    created_at: Date
    updated_at: Date
    created_employee_no: string | null
    modified_employee_no: string | null
    status: $Enums.MIGRATION_STATUS | null
    last_read: Date | null
    is_migrated: boolean
    _count: SitePointCountAggregateOutputType | null
    _avg: SitePointAvgAggregateOutputType | null
    _sum: SitePointSumAggregateOutputType | null
    _min: SitePointMinAggregateOutputType | null
    _max: SitePointMaxAggregateOutputType | null
  }

  type GetSitePointGroupByPayload<T extends SitePointGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SitePointGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SitePointGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SitePointGroupByOutputType[P]>
            : GetScalarType<T[P], SitePointGroupByOutputType[P]>
        }
      >
    >


  export type SitePointSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    cafeins_uuid?: boolean
    name?: boolean
    site_group_code?: boolean
    latitude?: boolean
    longitude?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_employee_no?: boolean
    modified_employee_no?: boolean
    status?: boolean
    last_read?: boolean
    is_migrated?: boolean
  }, ExtArgs["result"]["sitePoint"]>

  export type SitePointSelectScalar = {
    uuid?: boolean
    cafeins_uuid?: boolean
    name?: boolean
    site_group_code?: boolean
    latitude?: boolean
    longitude?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_employee_no?: boolean
    modified_employee_no?: boolean
    status?: boolean
    last_read?: boolean
    is_migrated?: boolean
  }


  export type $SitePointPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SitePoint"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      cafeins_uuid: string | null
      name: string
      site_group_code: string
      latitude: number
      longitude: number
      created_at: Date
      updated_at: Date
      created_employee_no: string | null
      modified_employee_no: string | null
      status: $Enums.MIGRATION_STATUS | null
      last_read: Date | null
      is_migrated: boolean
    }, ExtArgs["result"]["sitePoint"]>
    composites: {}
  }


  type SitePointGetPayload<S extends boolean | null | undefined | SitePointDefaultArgs> = $Result.GetResult<Prisma.$SitePointPayload, S>

  type SitePointCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SitePointFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: SitePointCountAggregateInputType | true
    }

  export interface SitePointDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SitePoint'], meta: { name: 'SitePoint' } }
    /**
     * Find zero or one SitePoint that matches the filter.
     * @param {SitePointFindUniqueArgs} args - Arguments to find a SitePoint
     * @example
     * // Get one SitePoint
     * const sitePoint = await prisma.sitePoint.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SitePointFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SitePointFindUniqueArgs<ExtArgs>>
    ): Prisma__SitePointClient<$Result.GetResult<Prisma.$SitePointPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one SitePoint that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SitePointFindUniqueOrThrowArgs} args - Arguments to find a SitePoint
     * @example
     * // Get one SitePoint
     * const sitePoint = await prisma.sitePoint.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SitePointFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SitePointFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SitePointClient<$Result.GetResult<Prisma.$SitePointPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first SitePoint that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SitePointFindFirstArgs} args - Arguments to find a SitePoint
     * @example
     * // Get one SitePoint
     * const sitePoint = await prisma.sitePoint.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SitePointFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SitePointFindFirstArgs<ExtArgs>>
    ): Prisma__SitePointClient<$Result.GetResult<Prisma.$SitePointPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SitePoint that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SitePointFindFirstOrThrowArgs} args - Arguments to find a SitePoint
     * @example
     * // Get one SitePoint
     * const sitePoint = await prisma.sitePoint.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SitePointFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SitePointFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SitePointClient<$Result.GetResult<Prisma.$SitePointPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more SitePoints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SitePointFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SitePoints
     * const sitePoints = await prisma.sitePoint.findMany()
     * 
     * // Get first 10 SitePoints
     * const sitePoints = await prisma.sitePoint.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const sitePointWithUuidOnly = await prisma.sitePoint.findMany({ select: { uuid: true } })
     * 
    **/
    findMany<T extends SitePointFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SitePointFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SitePointPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a SitePoint.
     * @param {SitePointCreateArgs} args - Arguments to create a SitePoint.
     * @example
     * // Create one SitePoint
     * const SitePoint = await prisma.sitePoint.create({
     *   data: {
     *     // ... data to create a SitePoint
     *   }
     * })
     * 
    **/
    create<T extends SitePointCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SitePointCreateArgs<ExtArgs>>
    ): Prisma__SitePointClient<$Result.GetResult<Prisma.$SitePointPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many SitePoints.
     *     @param {SitePointCreateManyArgs} args - Arguments to create many SitePoints.
     *     @example
     *     // Create many SitePoints
     *     const sitePoint = await prisma.sitePoint.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SitePointCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SitePointCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SitePoint.
     * @param {SitePointDeleteArgs} args - Arguments to delete one SitePoint.
     * @example
     * // Delete one SitePoint
     * const SitePoint = await prisma.sitePoint.delete({
     *   where: {
     *     // ... filter to delete one SitePoint
     *   }
     * })
     * 
    **/
    delete<T extends SitePointDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SitePointDeleteArgs<ExtArgs>>
    ): Prisma__SitePointClient<$Result.GetResult<Prisma.$SitePointPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one SitePoint.
     * @param {SitePointUpdateArgs} args - Arguments to update one SitePoint.
     * @example
     * // Update one SitePoint
     * const sitePoint = await prisma.sitePoint.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SitePointUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SitePointUpdateArgs<ExtArgs>>
    ): Prisma__SitePointClient<$Result.GetResult<Prisma.$SitePointPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more SitePoints.
     * @param {SitePointDeleteManyArgs} args - Arguments to filter SitePoints to delete.
     * @example
     * // Delete a few SitePoints
     * const { count } = await prisma.sitePoint.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SitePointDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SitePointDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SitePoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SitePointUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SitePoints
     * const sitePoint = await prisma.sitePoint.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SitePointUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SitePointUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SitePoint.
     * @param {SitePointUpsertArgs} args - Arguments to update or create a SitePoint.
     * @example
     * // Update or create a SitePoint
     * const sitePoint = await prisma.sitePoint.upsert({
     *   create: {
     *     // ... data to create a SitePoint
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SitePoint we want to update
     *   }
     * })
    **/
    upsert<T extends SitePointUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SitePointUpsertArgs<ExtArgs>>
    ): Prisma__SitePointClient<$Result.GetResult<Prisma.$SitePointPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of SitePoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SitePointCountArgs} args - Arguments to filter SitePoints to count.
     * @example
     * // Count the number of SitePoints
     * const count = await prisma.sitePoint.count({
     *   where: {
     *     // ... the filter for the SitePoints we want to count
     *   }
     * })
    **/
    count<T extends SitePointCountArgs>(
      args?: Subset<T, SitePointCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SitePointCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SitePoint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SitePointAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SitePointAggregateArgs>(args: Subset<T, SitePointAggregateArgs>): Prisma.PrismaPromise<GetSitePointAggregateType<T>>

    /**
     * Group by SitePoint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SitePointGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SitePointGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SitePointGroupByArgs['orderBy'] }
        : { orderBy?: SitePointGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SitePointGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSitePointGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SitePoint model
   */
  readonly fields: SitePointFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SitePoint.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SitePointClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the SitePoint model
   */ 
  interface SitePointFieldRefs {
    readonly uuid: FieldRef<"SitePoint", 'String'>
    readonly cafeins_uuid: FieldRef<"SitePoint", 'String'>
    readonly name: FieldRef<"SitePoint", 'String'>
    readonly site_group_code: FieldRef<"SitePoint", 'String'>
    readonly latitude: FieldRef<"SitePoint", 'Float'>
    readonly longitude: FieldRef<"SitePoint", 'Float'>
    readonly created_at: FieldRef<"SitePoint", 'DateTime'>
    readonly updated_at: FieldRef<"SitePoint", 'DateTime'>
    readonly created_employee_no: FieldRef<"SitePoint", 'String'>
    readonly modified_employee_no: FieldRef<"SitePoint", 'String'>
    readonly status: FieldRef<"SitePoint", 'MIGRATION_STATUS'>
    readonly last_read: FieldRef<"SitePoint", 'DateTime'>
    readonly is_migrated: FieldRef<"SitePoint", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * SitePoint findUnique
   */
  export type SitePointFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SitePoint
     */
    select?: SitePointSelect<ExtArgs> | null
    /**
     * Filter, which SitePoint to fetch.
     */
    where: SitePointWhereUniqueInput
  }


  /**
   * SitePoint findUniqueOrThrow
   */
  export type SitePointFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SitePoint
     */
    select?: SitePointSelect<ExtArgs> | null
    /**
     * Filter, which SitePoint to fetch.
     */
    where: SitePointWhereUniqueInput
  }


  /**
   * SitePoint findFirst
   */
  export type SitePointFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SitePoint
     */
    select?: SitePointSelect<ExtArgs> | null
    /**
     * Filter, which SitePoint to fetch.
     */
    where?: SitePointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SitePoints to fetch.
     */
    orderBy?: SitePointOrderByWithRelationInput | SitePointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SitePoints.
     */
    cursor?: SitePointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SitePoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SitePoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SitePoints.
     */
    distinct?: SitePointScalarFieldEnum | SitePointScalarFieldEnum[]
  }


  /**
   * SitePoint findFirstOrThrow
   */
  export type SitePointFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SitePoint
     */
    select?: SitePointSelect<ExtArgs> | null
    /**
     * Filter, which SitePoint to fetch.
     */
    where?: SitePointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SitePoints to fetch.
     */
    orderBy?: SitePointOrderByWithRelationInput | SitePointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SitePoints.
     */
    cursor?: SitePointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SitePoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SitePoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SitePoints.
     */
    distinct?: SitePointScalarFieldEnum | SitePointScalarFieldEnum[]
  }


  /**
   * SitePoint findMany
   */
  export type SitePointFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SitePoint
     */
    select?: SitePointSelect<ExtArgs> | null
    /**
     * Filter, which SitePoints to fetch.
     */
    where?: SitePointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SitePoints to fetch.
     */
    orderBy?: SitePointOrderByWithRelationInput | SitePointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SitePoints.
     */
    cursor?: SitePointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SitePoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SitePoints.
     */
    skip?: number
    distinct?: SitePointScalarFieldEnum | SitePointScalarFieldEnum[]
  }


  /**
   * SitePoint create
   */
  export type SitePointCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SitePoint
     */
    select?: SitePointSelect<ExtArgs> | null
    /**
     * The data needed to create a SitePoint.
     */
    data: XOR<SitePointCreateInput, SitePointUncheckedCreateInput>
  }


  /**
   * SitePoint createMany
   */
  export type SitePointCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SitePoints.
     */
    data: SitePointCreateManyInput | SitePointCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * SitePoint update
   */
  export type SitePointUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SitePoint
     */
    select?: SitePointSelect<ExtArgs> | null
    /**
     * The data needed to update a SitePoint.
     */
    data: XOR<SitePointUpdateInput, SitePointUncheckedUpdateInput>
    /**
     * Choose, which SitePoint to update.
     */
    where: SitePointWhereUniqueInput
  }


  /**
   * SitePoint updateMany
   */
  export type SitePointUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SitePoints.
     */
    data: XOR<SitePointUpdateManyMutationInput, SitePointUncheckedUpdateManyInput>
    /**
     * Filter which SitePoints to update
     */
    where?: SitePointWhereInput
  }


  /**
   * SitePoint upsert
   */
  export type SitePointUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SitePoint
     */
    select?: SitePointSelect<ExtArgs> | null
    /**
     * The filter to search for the SitePoint to update in case it exists.
     */
    where: SitePointWhereUniqueInput
    /**
     * In case the SitePoint found by the `where` argument doesn't exist, create a new SitePoint with this data.
     */
    create: XOR<SitePointCreateInput, SitePointUncheckedCreateInput>
    /**
     * In case the SitePoint was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SitePointUpdateInput, SitePointUncheckedUpdateInput>
  }


  /**
   * SitePoint delete
   */
  export type SitePointDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SitePoint
     */
    select?: SitePointSelect<ExtArgs> | null
    /**
     * Filter which SitePoint to delete.
     */
    where: SitePointWhereUniqueInput
  }


  /**
   * SitePoint deleteMany
   */
  export type SitePointDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SitePoints to delete
     */
    where?: SitePointWhereInput
  }


  /**
   * SitePoint without action
   */
  export type SitePointDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SitePoint
     */
    select?: SitePointSelect<ExtArgs> | null
  }



  /**
   * Model Log
   */

  export type AggregateLog = {
    _count: LogCountAggregateOutputType | null
    _min: LogMinAggregateOutputType | null
    _max: LogMaxAggregateOutputType | null
  }

  export type LogMinAggregateOutputType = {
    uuid: string | null
    level: string | null
    message: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type LogMaxAggregateOutputType = {
    uuid: string | null
    level: string | null
    message: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type LogCountAggregateOutputType = {
    uuid: number
    level: number
    message: number
    meta: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type LogMinAggregateInputType = {
    uuid?: true
    level?: true
    message?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type LogMaxAggregateInputType = {
    uuid?: true
    level?: true
    message?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type LogCountAggregateInputType = {
    uuid?: true
    level?: true
    message?: true
    meta?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type LogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Log to aggregate.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Logs
    **/
    _count?: true | LogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogMaxAggregateInputType
  }

  export type GetLogAggregateType<T extends LogAggregateArgs> = {
        [P in keyof T & keyof AggregateLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLog[P]>
      : GetScalarType<T[P], AggregateLog[P]>
  }




  export type LogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogWhereInput
    orderBy?: LogOrderByWithAggregationInput | LogOrderByWithAggregationInput[]
    by: LogScalarFieldEnum[] | LogScalarFieldEnum
    having?: LogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogCountAggregateInputType | true
    _min?: LogMinAggregateInputType
    _max?: LogMaxAggregateInputType
  }

  export type LogGroupByOutputType = {
    uuid: string
    level: string
    message: string
    meta: JsonValue | null
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    _count: LogCountAggregateOutputType | null
    _min: LogMinAggregateOutputType | null
    _max: LogMaxAggregateOutputType | null
  }

  type GetLogGroupByPayload<T extends LogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogGroupByOutputType[P]>
            : GetScalarType<T[P], LogGroupByOutputType[P]>
        }
      >
    >


  export type LogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    level?: boolean
    message?: boolean
    meta?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["log"]>

  export type LogSelectScalar = {
    uuid?: boolean
    level?: boolean
    message?: boolean
    meta?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }


  export type $LogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Log"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      level: string
      message: string
      meta: Prisma.JsonValue | null
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["log"]>
    composites: {}
  }


  type LogGetPayload<S extends boolean | null | undefined | LogDefaultArgs> = $Result.GetResult<Prisma.$LogPayload, S>

  type LogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LogFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: LogCountAggregateInputType | true
    }

  export interface LogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Log'], meta: { name: 'Log' } }
    /**
     * Find zero or one Log that matches the filter.
     * @param {LogFindUniqueArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LogFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, LogFindUniqueArgs<ExtArgs>>
    ): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Log that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LogFindUniqueOrThrowArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LogFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LogFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Log that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindFirstArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LogFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, LogFindFirstArgs<ExtArgs>>
    ): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Log that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindFirstOrThrowArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LogFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LogFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Logs
     * const logs = await prisma.log.findMany()
     * 
     * // Get first 10 Logs
     * const logs = await prisma.log.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const logWithUuidOnly = await prisma.log.findMany({ select: { uuid: true } })
     * 
    **/
    findMany<T extends LogFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LogFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Log.
     * @param {LogCreateArgs} args - Arguments to create a Log.
     * @example
     * // Create one Log
     * const Log = await prisma.log.create({
     *   data: {
     *     // ... data to create a Log
     *   }
     * })
     * 
    **/
    create<T extends LogCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LogCreateArgs<ExtArgs>>
    ): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Logs.
     *     @param {LogCreateManyArgs} args - Arguments to create many Logs.
     *     @example
     *     // Create many Logs
     *     const log = await prisma.log.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LogCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LogCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Log.
     * @param {LogDeleteArgs} args - Arguments to delete one Log.
     * @example
     * // Delete one Log
     * const Log = await prisma.log.delete({
     *   where: {
     *     // ... filter to delete one Log
     *   }
     * })
     * 
    **/
    delete<T extends LogDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LogDeleteArgs<ExtArgs>>
    ): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Log.
     * @param {LogUpdateArgs} args - Arguments to update one Log.
     * @example
     * // Update one Log
     * const log = await prisma.log.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LogUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LogUpdateArgs<ExtArgs>>
    ): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Logs.
     * @param {LogDeleteManyArgs} args - Arguments to filter Logs to delete.
     * @example
     * // Delete a few Logs
     * const { count } = await prisma.log.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LogDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LogDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Logs
     * const log = await prisma.log.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LogUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LogUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Log.
     * @param {LogUpsertArgs} args - Arguments to update or create a Log.
     * @example
     * // Update or create a Log
     * const log = await prisma.log.upsert({
     *   create: {
     *     // ... data to create a Log
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Log we want to update
     *   }
     * })
    **/
    upsert<T extends LogUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LogUpsertArgs<ExtArgs>>
    ): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogCountArgs} args - Arguments to filter Logs to count.
     * @example
     * // Count the number of Logs
     * const count = await prisma.log.count({
     *   where: {
     *     // ... the filter for the Logs we want to count
     *   }
     * })
    **/
    count<T extends LogCountArgs>(
      args?: Subset<T, LogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LogAggregateArgs>(args: Subset<T, LogAggregateArgs>): Prisma.PrismaPromise<GetLogAggregateType<T>>

    /**
     * Group by Log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LogGroupByArgs['orderBy'] }
        : { orderBy?: LogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Log model
   */
  readonly fields: LogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Log.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Log model
   */ 
  interface LogFieldRefs {
    readonly uuid: FieldRef<"Log", 'String'>
    readonly level: FieldRef<"Log", 'String'>
    readonly message: FieldRef<"Log", 'String'>
    readonly meta: FieldRef<"Log", 'Json'>
    readonly created_at: FieldRef<"Log", 'DateTime'>
    readonly updated_at: FieldRef<"Log", 'DateTime'>
    readonly deleted_at: FieldRef<"Log", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Log findUnique
   */
  export type LogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where: LogWhereUniqueInput
  }


  /**
   * Log findUniqueOrThrow
   */
  export type LogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where: LogWhereUniqueInput
  }


  /**
   * Log findFirst
   */
  export type LogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logs.
     */
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }


  /**
   * Log findFirstOrThrow
   */
  export type LogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logs.
     */
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }


  /**
   * Log findMany
   */
  export type LogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Filter, which Logs to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }


  /**
   * Log create
   */
  export type LogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * The data needed to create a Log.
     */
    data: XOR<LogCreateInput, LogUncheckedCreateInput>
  }


  /**
   * Log createMany
   */
  export type LogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Logs.
     */
    data: LogCreateManyInput | LogCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Log update
   */
  export type LogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * The data needed to update a Log.
     */
    data: XOR<LogUpdateInput, LogUncheckedUpdateInput>
    /**
     * Choose, which Log to update.
     */
    where: LogWhereUniqueInput
  }


  /**
   * Log updateMany
   */
  export type LogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Logs.
     */
    data: XOR<LogUpdateManyMutationInput, LogUncheckedUpdateManyInput>
    /**
     * Filter which Logs to update
     */
    where?: LogWhereInput
  }


  /**
   * Log upsert
   */
  export type LogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * The filter to search for the Log to update in case it exists.
     */
    where: LogWhereUniqueInput
    /**
     * In case the Log found by the `where` argument doesn't exist, create a new Log with this data.
     */
    create: XOR<LogCreateInput, LogUncheckedCreateInput>
    /**
     * In case the Log was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LogUpdateInput, LogUncheckedUpdateInput>
  }


  /**
   * Log delete
   */
  export type LogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Filter which Log to delete.
     */
    where: LogWhereUniqueInput
  }


  /**
   * Log deleteMany
   */
  export type LogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Logs to delete
     */
    where?: LogWhereInput
  }


  /**
   * Log without action
   */
  export type LogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
  }



  /**
   * Model Asset
   */

  export type AggregateAsset = {
    _count: AssetCountAggregateOutputType | null
    _min: AssetMinAggregateOutputType | null
    _max: AssetMaxAggregateOutputType | null
  }

  export type AssetMinAggregateOutputType = {
    uuid: string | null
    cafeins_uuid: string | null
    unique_id: string | null
    name: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
    created_employee_no: string | null
    modified_employee_no: string | null
    code: string | null
    asset_group_code: string | null
    project_group_code: string | null
    site_group_code: string | null
    asset_category: string | null
    asset_ownership: string | null
    area_ownership: string | null
    status: $Enums.MIGRATION_STATUS | null
    last_read: Date | null
    is_migrated: boolean | null
  }

  export type AssetMaxAggregateOutputType = {
    uuid: string | null
    cafeins_uuid: string | null
    unique_id: string | null
    name: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
    created_employee_no: string | null
    modified_employee_no: string | null
    code: string | null
    asset_group_code: string | null
    project_group_code: string | null
    site_group_code: string | null
    asset_category: string | null
    asset_ownership: string | null
    area_ownership: string | null
    status: $Enums.MIGRATION_STATUS | null
    last_read: Date | null
    is_migrated: boolean | null
  }

  export type AssetCountAggregateOutputType = {
    uuid: number
    cafeins_uuid: number
    unique_id: number
    name: number
    description: number
    created_at: number
    updated_at: number
    created_employee_no: number
    modified_employee_no: number
    code: number
    asset_group_code: number
    project_group_code: number
    site_group_code: number
    asset_category: number
    asset_ownership: number
    area_ownership: number
    status: number
    last_read: number
    is_migrated: number
    _all: number
  }


  export type AssetMinAggregateInputType = {
    uuid?: true
    cafeins_uuid?: true
    unique_id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
    created_employee_no?: true
    modified_employee_no?: true
    code?: true
    asset_group_code?: true
    project_group_code?: true
    site_group_code?: true
    asset_category?: true
    asset_ownership?: true
    area_ownership?: true
    status?: true
    last_read?: true
    is_migrated?: true
  }

  export type AssetMaxAggregateInputType = {
    uuid?: true
    cafeins_uuid?: true
    unique_id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
    created_employee_no?: true
    modified_employee_no?: true
    code?: true
    asset_group_code?: true
    project_group_code?: true
    site_group_code?: true
    asset_category?: true
    asset_ownership?: true
    area_ownership?: true
    status?: true
    last_read?: true
    is_migrated?: true
  }

  export type AssetCountAggregateInputType = {
    uuid?: true
    cafeins_uuid?: true
    unique_id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
    created_employee_no?: true
    modified_employee_no?: true
    code?: true
    asset_group_code?: true
    project_group_code?: true
    site_group_code?: true
    asset_category?: true
    asset_ownership?: true
    area_ownership?: true
    status?: true
    last_read?: true
    is_migrated?: true
    _all?: true
  }

  export type AssetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Asset to aggregate.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Assets
    **/
    _count?: true | AssetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssetMaxAggregateInputType
  }

  export type GetAssetAggregateType<T extends AssetAggregateArgs> = {
        [P in keyof T & keyof AggregateAsset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAsset[P]>
      : GetScalarType<T[P], AggregateAsset[P]>
  }




  export type AssetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssetWhereInput
    orderBy?: AssetOrderByWithAggregationInput | AssetOrderByWithAggregationInput[]
    by: AssetScalarFieldEnum[] | AssetScalarFieldEnum
    having?: AssetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssetCountAggregateInputType | true
    _min?: AssetMinAggregateInputType
    _max?: AssetMaxAggregateInputType
  }

  export type AssetGroupByOutputType = {
    uuid: string
    cafeins_uuid: string | null
    unique_id: string
    name: string
    description: string | null
    created_at: Date
    updated_at: Date
    created_employee_no: string | null
    modified_employee_no: string | null
    code: string | null
    asset_group_code: string | null
    project_group_code: string | null
    site_group_code: string | null
    asset_category: string | null
    asset_ownership: string | null
    area_ownership: string | null
    status: $Enums.MIGRATION_STATUS | null
    last_read: Date | null
    is_migrated: boolean
    _count: AssetCountAggregateOutputType | null
    _min: AssetMinAggregateOutputType | null
    _max: AssetMaxAggregateOutputType | null
  }

  type GetAssetGroupByPayload<T extends AssetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssetGroupByOutputType[P]>
            : GetScalarType<T[P], AssetGroupByOutputType[P]>
        }
      >
    >


  export type AssetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    cafeins_uuid?: boolean
    unique_id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_employee_no?: boolean
    modified_employee_no?: boolean
    code?: boolean
    asset_group_code?: boolean
    project_group_code?: boolean
    site_group_code?: boolean
    asset_category?: boolean
    asset_ownership?: boolean
    area_ownership?: boolean
    status?: boolean
    last_read?: boolean
    is_migrated?: boolean
  }, ExtArgs["result"]["asset"]>

  export type AssetSelectScalar = {
    uuid?: boolean
    cafeins_uuid?: boolean
    unique_id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_employee_no?: boolean
    modified_employee_no?: boolean
    code?: boolean
    asset_group_code?: boolean
    project_group_code?: boolean
    site_group_code?: boolean
    asset_category?: boolean
    asset_ownership?: boolean
    area_ownership?: boolean
    status?: boolean
    last_read?: boolean
    is_migrated?: boolean
  }


  export type $AssetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Asset"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      cafeins_uuid: string | null
      unique_id: string
      name: string
      description: string | null
      created_at: Date
      updated_at: Date
      created_employee_no: string | null
      modified_employee_no: string | null
      code: string | null
      asset_group_code: string | null
      project_group_code: string | null
      site_group_code: string | null
      asset_category: string | null
      asset_ownership: string | null
      area_ownership: string | null
      status: $Enums.MIGRATION_STATUS | null
      last_read: Date | null
      is_migrated: boolean
    }, ExtArgs["result"]["asset"]>
    composites: {}
  }


  type AssetGetPayload<S extends boolean | null | undefined | AssetDefaultArgs> = $Result.GetResult<Prisma.$AssetPayload, S>

  type AssetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AssetFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: AssetCountAggregateInputType | true
    }

  export interface AssetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Asset'], meta: { name: 'Asset' } }
    /**
     * Find zero or one Asset that matches the filter.
     * @param {AssetFindUniqueArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AssetFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AssetFindUniqueArgs<ExtArgs>>
    ): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Asset that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AssetFindUniqueOrThrowArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AssetFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AssetFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Asset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetFindFirstArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AssetFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AssetFindFirstArgs<ExtArgs>>
    ): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Asset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetFindFirstOrThrowArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AssetFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AssetFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Assets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assets
     * const assets = await prisma.asset.findMany()
     * 
     * // Get first 10 Assets
     * const assets = await prisma.asset.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const assetWithUuidOnly = await prisma.asset.findMany({ select: { uuid: true } })
     * 
    **/
    findMany<T extends AssetFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AssetFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Asset.
     * @param {AssetCreateArgs} args - Arguments to create a Asset.
     * @example
     * // Create one Asset
     * const Asset = await prisma.asset.create({
     *   data: {
     *     // ... data to create a Asset
     *   }
     * })
     * 
    **/
    create<T extends AssetCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AssetCreateArgs<ExtArgs>>
    ): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Assets.
     *     @param {AssetCreateManyArgs} args - Arguments to create many Assets.
     *     @example
     *     // Create many Assets
     *     const asset = await prisma.asset.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AssetCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AssetCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Asset.
     * @param {AssetDeleteArgs} args - Arguments to delete one Asset.
     * @example
     * // Delete one Asset
     * const Asset = await prisma.asset.delete({
     *   where: {
     *     // ... filter to delete one Asset
     *   }
     * })
     * 
    **/
    delete<T extends AssetDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AssetDeleteArgs<ExtArgs>>
    ): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Asset.
     * @param {AssetUpdateArgs} args - Arguments to update one Asset.
     * @example
     * // Update one Asset
     * const asset = await prisma.asset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AssetUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AssetUpdateArgs<ExtArgs>>
    ): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Assets.
     * @param {AssetDeleteManyArgs} args - Arguments to filter Assets to delete.
     * @example
     * // Delete a few Assets
     * const { count } = await prisma.asset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AssetDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AssetDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assets
     * const asset = await prisma.asset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AssetUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AssetUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Asset.
     * @param {AssetUpsertArgs} args - Arguments to update or create a Asset.
     * @example
     * // Update or create a Asset
     * const asset = await prisma.asset.upsert({
     *   create: {
     *     // ... data to create a Asset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Asset we want to update
     *   }
     * })
    **/
    upsert<T extends AssetUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AssetUpsertArgs<ExtArgs>>
    ): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Assets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetCountArgs} args - Arguments to filter Assets to count.
     * @example
     * // Count the number of Assets
     * const count = await prisma.asset.count({
     *   where: {
     *     // ... the filter for the Assets we want to count
     *   }
     * })
    **/
    count<T extends AssetCountArgs>(
      args?: Subset<T, AssetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Asset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssetAggregateArgs>(args: Subset<T, AssetAggregateArgs>): Prisma.PrismaPromise<GetAssetAggregateType<T>>

    /**
     * Group by Asset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AssetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssetGroupByArgs['orderBy'] }
        : { orderBy?: AssetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AssetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Asset model
   */
  readonly fields: AssetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Asset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Asset model
   */ 
  interface AssetFieldRefs {
    readonly uuid: FieldRef<"Asset", 'String'>
    readonly cafeins_uuid: FieldRef<"Asset", 'String'>
    readonly unique_id: FieldRef<"Asset", 'String'>
    readonly name: FieldRef<"Asset", 'String'>
    readonly description: FieldRef<"Asset", 'String'>
    readonly created_at: FieldRef<"Asset", 'DateTime'>
    readonly updated_at: FieldRef<"Asset", 'DateTime'>
    readonly created_employee_no: FieldRef<"Asset", 'String'>
    readonly modified_employee_no: FieldRef<"Asset", 'String'>
    readonly code: FieldRef<"Asset", 'String'>
    readonly asset_group_code: FieldRef<"Asset", 'String'>
    readonly project_group_code: FieldRef<"Asset", 'String'>
    readonly site_group_code: FieldRef<"Asset", 'String'>
    readonly asset_category: FieldRef<"Asset", 'String'>
    readonly asset_ownership: FieldRef<"Asset", 'String'>
    readonly area_ownership: FieldRef<"Asset", 'String'>
    readonly status: FieldRef<"Asset", 'MIGRATION_STATUS'>
    readonly last_read: FieldRef<"Asset", 'DateTime'>
    readonly is_migrated: FieldRef<"Asset", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * Asset findUnique
   */
  export type AssetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where: AssetWhereUniqueInput
  }


  /**
   * Asset findUniqueOrThrow
   */
  export type AssetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where: AssetWhereUniqueInput
  }


  /**
   * Asset findFirst
   */
  export type AssetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assets.
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assets.
     */
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }


  /**
   * Asset findFirstOrThrow
   */
  export type AssetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assets.
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assets.
     */
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }


  /**
   * Asset findMany
   */
  export type AssetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Filter, which Assets to fetch.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Assets.
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }


  /**
   * Asset create
   */
  export type AssetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * The data needed to create a Asset.
     */
    data: XOR<AssetCreateInput, AssetUncheckedCreateInput>
  }


  /**
   * Asset createMany
   */
  export type AssetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Assets.
     */
    data: AssetCreateManyInput | AssetCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Asset update
   */
  export type AssetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * The data needed to update a Asset.
     */
    data: XOR<AssetUpdateInput, AssetUncheckedUpdateInput>
    /**
     * Choose, which Asset to update.
     */
    where: AssetWhereUniqueInput
  }


  /**
   * Asset updateMany
   */
  export type AssetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Assets.
     */
    data: XOR<AssetUpdateManyMutationInput, AssetUncheckedUpdateManyInput>
    /**
     * Filter which Assets to update
     */
    where?: AssetWhereInput
  }


  /**
   * Asset upsert
   */
  export type AssetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * The filter to search for the Asset to update in case it exists.
     */
    where: AssetWhereUniqueInput
    /**
     * In case the Asset found by the `where` argument doesn't exist, create a new Asset with this data.
     */
    create: XOR<AssetCreateInput, AssetUncheckedCreateInput>
    /**
     * In case the Asset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssetUpdateInput, AssetUncheckedUpdateInput>
  }


  /**
   * Asset delete
   */
  export type AssetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Filter which Asset to delete.
     */
    where: AssetWhereUniqueInput
  }


  /**
   * Asset deleteMany
   */
  export type AssetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assets to delete
     */
    where?: AssetWhereInput
  }


  /**
   * Asset without action
   */
  export type AssetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
  }



  /**
   * Model Route
   */

  export type AggregateRoute = {
    _count: RouteCountAggregateOutputType | null
    _avg: RouteAvgAggregateOutputType | null
    _sum: RouteSumAggregateOutputType | null
    _min: RouteMinAggregateOutputType | null
    _max: RouteMaxAggregateOutputType | null
  }

  export type RouteAvgAggregateOutputType = {
    length: Decimal | null
  }

  export type RouteSumAggregateOutputType = {
    length: Decimal | null
  }

  export type RouteMinAggregateOutputType = {
    uuid: string | null
    cafeins_uuid: string | null
    unique_id: string | null
    name: string | null
    length: Decimal | null
    created_at: Date | null
    updated_at: Date | null
    created_employee_no: string | null
    modified_employee_no: string | null
    site_group_code_from: string | null
    site_group_code_to: string | null
    route_method: string | null
    route_ownership: string | null
    status: $Enums.MIGRATION_STATUS | null
    last_read: Date | null
    is_migrated: boolean | null
  }

  export type RouteMaxAggregateOutputType = {
    uuid: string | null
    cafeins_uuid: string | null
    unique_id: string | null
    name: string | null
    length: Decimal | null
    created_at: Date | null
    updated_at: Date | null
    created_employee_no: string | null
    modified_employee_no: string | null
    site_group_code_from: string | null
    site_group_code_to: string | null
    route_method: string | null
    route_ownership: string | null
    status: $Enums.MIGRATION_STATUS | null
    last_read: Date | null
    is_migrated: boolean | null
  }

  export type RouteCountAggregateOutputType = {
    uuid: number
    cafeins_uuid: number
    unique_id: number
    name: number
    length: number
    created_at: number
    updated_at: number
    created_employee_no: number
    modified_employee_no: number
    site_group_code_from: number
    site_group_code_to: number
    route_method: number
    route_ownership: number
    status: number
    last_read: number
    is_migrated: number
    _all: number
  }


  export type RouteAvgAggregateInputType = {
    length?: true
  }

  export type RouteSumAggregateInputType = {
    length?: true
  }

  export type RouteMinAggregateInputType = {
    uuid?: true
    cafeins_uuid?: true
    unique_id?: true
    name?: true
    length?: true
    created_at?: true
    updated_at?: true
    created_employee_no?: true
    modified_employee_no?: true
    site_group_code_from?: true
    site_group_code_to?: true
    route_method?: true
    route_ownership?: true
    status?: true
    last_read?: true
    is_migrated?: true
  }

  export type RouteMaxAggregateInputType = {
    uuid?: true
    cafeins_uuid?: true
    unique_id?: true
    name?: true
    length?: true
    created_at?: true
    updated_at?: true
    created_employee_no?: true
    modified_employee_no?: true
    site_group_code_from?: true
    site_group_code_to?: true
    route_method?: true
    route_ownership?: true
    status?: true
    last_read?: true
    is_migrated?: true
  }

  export type RouteCountAggregateInputType = {
    uuid?: true
    cafeins_uuid?: true
    unique_id?: true
    name?: true
    length?: true
    created_at?: true
    updated_at?: true
    created_employee_no?: true
    modified_employee_no?: true
    site_group_code_from?: true
    site_group_code_to?: true
    route_method?: true
    route_ownership?: true
    status?: true
    last_read?: true
    is_migrated?: true
    _all?: true
  }

  export type RouteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Route to aggregate.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Routes
    **/
    _count?: true | RouteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RouteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RouteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RouteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RouteMaxAggregateInputType
  }

  export type GetRouteAggregateType<T extends RouteAggregateArgs> = {
        [P in keyof T & keyof AggregateRoute]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoute[P]>
      : GetScalarType<T[P], AggregateRoute[P]>
  }




  export type RouteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RouteWhereInput
    orderBy?: RouteOrderByWithAggregationInput | RouteOrderByWithAggregationInput[]
    by: RouteScalarFieldEnum[] | RouteScalarFieldEnum
    having?: RouteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RouteCountAggregateInputType | true
    _avg?: RouteAvgAggregateInputType
    _sum?: RouteSumAggregateInputType
    _min?: RouteMinAggregateInputType
    _max?: RouteMaxAggregateInputType
  }

  export type RouteGroupByOutputType = {
    uuid: string
    cafeins_uuid: string | null
    unique_id: string
    name: string
    length: Decimal | null
    created_at: Date
    updated_at: Date
    created_employee_no: string | null
    modified_employee_no: string | null
    site_group_code_from: string | null
    site_group_code_to: string | null
    route_method: string | null
    route_ownership: string | null
    status: $Enums.MIGRATION_STATUS | null
    last_read: Date | null
    is_migrated: boolean
    _count: RouteCountAggregateOutputType | null
    _avg: RouteAvgAggregateOutputType | null
    _sum: RouteSumAggregateOutputType | null
    _min: RouteMinAggregateOutputType | null
    _max: RouteMaxAggregateOutputType | null
  }

  type GetRouteGroupByPayload<T extends RouteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RouteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RouteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RouteGroupByOutputType[P]>
            : GetScalarType<T[P], RouteGroupByOutputType[P]>
        }
      >
    >


  export type RouteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    cafeins_uuid?: boolean
    unique_id?: boolean
    name?: boolean
    length?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_employee_no?: boolean
    modified_employee_no?: boolean
    site_group_code_from?: boolean
    site_group_code_to?: boolean
    route_method?: boolean
    route_ownership?: boolean
    status?: boolean
    last_read?: boolean
    is_migrated?: boolean
  }, ExtArgs["result"]["route"]>

  export type RouteSelectScalar = {
    uuid?: boolean
    cafeins_uuid?: boolean
    unique_id?: boolean
    name?: boolean
    length?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_employee_no?: boolean
    modified_employee_no?: boolean
    site_group_code_from?: boolean
    site_group_code_to?: boolean
    route_method?: boolean
    route_ownership?: boolean
    status?: boolean
    last_read?: boolean
    is_migrated?: boolean
  }


  export type $RoutePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Route"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      cafeins_uuid: string | null
      unique_id: string
      name: string
      length: Prisma.Decimal | null
      created_at: Date
      updated_at: Date
      created_employee_no: string | null
      modified_employee_no: string | null
      site_group_code_from: string | null
      site_group_code_to: string | null
      route_method: string | null
      route_ownership: string | null
      status: $Enums.MIGRATION_STATUS | null
      last_read: Date | null
      is_migrated: boolean
    }, ExtArgs["result"]["route"]>
    composites: {}
  }


  type RouteGetPayload<S extends boolean | null | undefined | RouteDefaultArgs> = $Result.GetResult<Prisma.$RoutePayload, S>

  type RouteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RouteFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: RouteCountAggregateInputType | true
    }

  export interface RouteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Route'], meta: { name: 'Route' } }
    /**
     * Find zero or one Route that matches the filter.
     * @param {RouteFindUniqueArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RouteFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RouteFindUniqueArgs<ExtArgs>>
    ): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Route that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RouteFindUniqueOrThrowArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RouteFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RouteFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Route that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteFindFirstArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RouteFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RouteFindFirstArgs<ExtArgs>>
    ): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Route that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteFindFirstOrThrowArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RouteFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RouteFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Routes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Routes
     * const routes = await prisma.route.findMany()
     * 
     * // Get first 10 Routes
     * const routes = await prisma.route.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const routeWithUuidOnly = await prisma.route.findMany({ select: { uuid: true } })
     * 
    **/
    findMany<T extends RouteFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RouteFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Route.
     * @param {RouteCreateArgs} args - Arguments to create a Route.
     * @example
     * // Create one Route
     * const Route = await prisma.route.create({
     *   data: {
     *     // ... data to create a Route
     *   }
     * })
     * 
    **/
    create<T extends RouteCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RouteCreateArgs<ExtArgs>>
    ): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Routes.
     *     @param {RouteCreateManyArgs} args - Arguments to create many Routes.
     *     @example
     *     // Create many Routes
     *     const route = await prisma.route.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RouteCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RouteCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Route.
     * @param {RouteDeleteArgs} args - Arguments to delete one Route.
     * @example
     * // Delete one Route
     * const Route = await prisma.route.delete({
     *   where: {
     *     // ... filter to delete one Route
     *   }
     * })
     * 
    **/
    delete<T extends RouteDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RouteDeleteArgs<ExtArgs>>
    ): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Route.
     * @param {RouteUpdateArgs} args - Arguments to update one Route.
     * @example
     * // Update one Route
     * const route = await prisma.route.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RouteUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RouteUpdateArgs<ExtArgs>>
    ): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Routes.
     * @param {RouteDeleteManyArgs} args - Arguments to filter Routes to delete.
     * @example
     * // Delete a few Routes
     * const { count } = await prisma.route.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RouteDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RouteDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Routes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Routes
     * const route = await prisma.route.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RouteUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RouteUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Route.
     * @param {RouteUpsertArgs} args - Arguments to update or create a Route.
     * @example
     * // Update or create a Route
     * const route = await prisma.route.upsert({
     *   create: {
     *     // ... data to create a Route
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Route we want to update
     *   }
     * })
    **/
    upsert<T extends RouteUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RouteUpsertArgs<ExtArgs>>
    ): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Routes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteCountArgs} args - Arguments to filter Routes to count.
     * @example
     * // Count the number of Routes
     * const count = await prisma.route.count({
     *   where: {
     *     // ... the filter for the Routes we want to count
     *   }
     * })
    **/
    count<T extends RouteCountArgs>(
      args?: Subset<T, RouteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RouteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Route.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RouteAggregateArgs>(args: Subset<T, RouteAggregateArgs>): Prisma.PrismaPromise<GetRouteAggregateType<T>>

    /**
     * Group by Route.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RouteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RouteGroupByArgs['orderBy'] }
        : { orderBy?: RouteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RouteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRouteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Route model
   */
  readonly fields: RouteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Route.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RouteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Route model
   */ 
  interface RouteFieldRefs {
    readonly uuid: FieldRef<"Route", 'String'>
    readonly cafeins_uuid: FieldRef<"Route", 'String'>
    readonly unique_id: FieldRef<"Route", 'String'>
    readonly name: FieldRef<"Route", 'String'>
    readonly length: FieldRef<"Route", 'Decimal'>
    readonly created_at: FieldRef<"Route", 'DateTime'>
    readonly updated_at: FieldRef<"Route", 'DateTime'>
    readonly created_employee_no: FieldRef<"Route", 'String'>
    readonly modified_employee_no: FieldRef<"Route", 'String'>
    readonly site_group_code_from: FieldRef<"Route", 'String'>
    readonly site_group_code_to: FieldRef<"Route", 'String'>
    readonly route_method: FieldRef<"Route", 'String'>
    readonly route_ownership: FieldRef<"Route", 'String'>
    readonly status: FieldRef<"Route", 'MIGRATION_STATUS'>
    readonly last_read: FieldRef<"Route", 'DateTime'>
    readonly is_migrated: FieldRef<"Route", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * Route findUnique
   */
  export type RouteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where: RouteWhereUniqueInput
  }


  /**
   * Route findUniqueOrThrow
   */
  export type RouteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where: RouteWhereUniqueInput
  }


  /**
   * Route findFirst
   */
  export type RouteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Routes.
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Routes.
     */
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }


  /**
   * Route findFirstOrThrow
   */
  export type RouteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Routes.
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Routes.
     */
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }


  /**
   * Route findMany
   */
  export type RouteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Filter, which Routes to fetch.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Routes.
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }


  /**
   * Route create
   */
  export type RouteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * The data needed to create a Route.
     */
    data: XOR<RouteCreateInput, RouteUncheckedCreateInput>
  }


  /**
   * Route createMany
   */
  export type RouteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Routes.
     */
    data: RouteCreateManyInput | RouteCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Route update
   */
  export type RouteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * The data needed to update a Route.
     */
    data: XOR<RouteUpdateInput, RouteUncheckedUpdateInput>
    /**
     * Choose, which Route to update.
     */
    where: RouteWhereUniqueInput
  }


  /**
   * Route updateMany
   */
  export type RouteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Routes.
     */
    data: XOR<RouteUpdateManyMutationInput, RouteUncheckedUpdateManyInput>
    /**
     * Filter which Routes to update
     */
    where?: RouteWhereInput
  }


  /**
   * Route upsert
   */
  export type RouteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * The filter to search for the Route to update in case it exists.
     */
    where: RouteWhereUniqueInput
    /**
     * In case the Route found by the `where` argument doesn't exist, create a new Route with this data.
     */
    create: XOR<RouteCreateInput, RouteUncheckedCreateInput>
    /**
     * In case the Route was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RouteUpdateInput, RouteUncheckedUpdateInput>
  }


  /**
   * Route delete
   */
  export type RouteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Filter which Route to delete.
     */
    where: RouteWhereUniqueInput
  }


  /**
   * Route deleteMany
   */
  export type RouteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Routes to delete
     */
    where?: RouteWhereInput
  }


  /**
   * Route without action
   */
  export type RouteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProjectScalarFieldEnum: {
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

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const SitePointScalarFieldEnum: {
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
    is_migrated: 'is_migrated'
  };

  export type SitePointScalarFieldEnum = (typeof SitePointScalarFieldEnum)[keyof typeof SitePointScalarFieldEnum]


  export const LogScalarFieldEnum: {
    uuid: 'uuid',
    level: 'level',
    message: 'message',
    meta: 'meta',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type LogScalarFieldEnum = (typeof LogScalarFieldEnum)[keyof typeof LogScalarFieldEnum]


  export const AssetScalarFieldEnum: {
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
    is_migrated: 'is_migrated'
  };

  export type AssetScalarFieldEnum = (typeof AssetScalarFieldEnum)[keyof typeof AssetScalarFieldEnum]


  export const RouteScalarFieldEnum: {
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
    is_migrated: 'is_migrated'
  };

  export type RouteScalarFieldEnum = (typeof RouteScalarFieldEnum)[keyof typeof RouteScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'MIGRATION_STATUS'
   */
  export type EnumMIGRATION_STATUSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MIGRATION_STATUS'>
    


  /**
   * Reference to a field of type 'MIGRATION_STATUS[]'
   */
  export type ListEnumMIGRATION_STATUSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MIGRATION_STATUS[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    uuid?: UuidFilter<"Project"> | string
    cafeins_uuid?: StringNullableFilter<"Project"> | string | null
    company_code?: StringFilter<"Project"> | string
    vendor_no?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    project_group_code?: StringFilter<"Project"> | string
    created_at?: DateTimeFilter<"Project"> | Date | string
    updated_at?: DateTimeFilter<"Project"> | Date | string
    created_employee_no?: StringNullableFilter<"Project"> | string | null
    modified_employee_no?: StringNullableFilter<"Project"> | string | null
    description?: StringNullableFilter<"Project"> | string | null
    po_number?: StringNullableFilter<"Project"> | string | null
    owner_name?: StringNullableFilter<"Project"> | string | null
    owner_nik?: StringNullableFilter<"Project"> | string | null
    status?: EnumMIGRATION_STATUSNullableFilter<"Project"> | $Enums.MIGRATION_STATUS | null
    last_read?: DateTimeNullableFilter<"Project"> | Date | string | null
    is_migrated?: BoolFilter<"Project"> | boolean
  }

  export type ProjectOrderByWithRelationInput = {
    uuid?: SortOrder
    cafeins_uuid?: SortOrderInput | SortOrder
    company_code?: SortOrder
    vendor_no?: SortOrder
    name?: SortOrder
    project_group_code?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_employee_no?: SortOrderInput | SortOrder
    modified_employee_no?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    po_number?: SortOrderInput | SortOrder
    owner_name?: SortOrderInput | SortOrder
    owner_nik?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    last_read?: SortOrderInput | SortOrder
    is_migrated?: SortOrder
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    project_group_code?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    cafeins_uuid?: StringNullableFilter<"Project"> | string | null
    company_code?: StringFilter<"Project"> | string
    vendor_no?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    created_at?: DateTimeFilter<"Project"> | Date | string
    updated_at?: DateTimeFilter<"Project"> | Date | string
    created_employee_no?: StringNullableFilter<"Project"> | string | null
    modified_employee_no?: StringNullableFilter<"Project"> | string | null
    description?: StringNullableFilter<"Project"> | string | null
    po_number?: StringNullableFilter<"Project"> | string | null
    owner_name?: StringNullableFilter<"Project"> | string | null
    owner_nik?: StringNullableFilter<"Project"> | string | null
    status?: EnumMIGRATION_STATUSNullableFilter<"Project"> | $Enums.MIGRATION_STATUS | null
    last_read?: DateTimeNullableFilter<"Project"> | Date | string | null
    is_migrated?: BoolFilter<"Project"> | boolean
  }, "uuid" | "project_group_code">

  export type ProjectOrderByWithAggregationInput = {
    uuid?: SortOrder
    cafeins_uuid?: SortOrderInput | SortOrder
    company_code?: SortOrder
    vendor_no?: SortOrder
    name?: SortOrder
    project_group_code?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_employee_no?: SortOrderInput | SortOrder
    modified_employee_no?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    po_number?: SortOrderInput | SortOrder
    owner_name?: SortOrderInput | SortOrder
    owner_nik?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    last_read?: SortOrderInput | SortOrder
    is_migrated?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    uuid?: UuidWithAggregatesFilter<"Project"> | string
    cafeins_uuid?: StringNullableWithAggregatesFilter<"Project"> | string | null
    company_code?: StringWithAggregatesFilter<"Project"> | string
    vendor_no?: StringWithAggregatesFilter<"Project"> | string
    name?: StringWithAggregatesFilter<"Project"> | string
    project_group_code?: StringWithAggregatesFilter<"Project"> | string
    created_at?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    created_employee_no?: StringNullableWithAggregatesFilter<"Project"> | string | null
    modified_employee_no?: StringNullableWithAggregatesFilter<"Project"> | string | null
    description?: StringNullableWithAggregatesFilter<"Project"> | string | null
    po_number?: StringNullableWithAggregatesFilter<"Project"> | string | null
    owner_name?: StringNullableWithAggregatesFilter<"Project"> | string | null
    owner_nik?: StringNullableWithAggregatesFilter<"Project"> | string | null
    status?: EnumMIGRATION_STATUSNullableWithAggregatesFilter<"Project"> | $Enums.MIGRATION_STATUS | null
    last_read?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    is_migrated?: BoolWithAggregatesFilter<"Project"> | boolean
  }

  export type SitePointWhereInput = {
    AND?: SitePointWhereInput | SitePointWhereInput[]
    OR?: SitePointWhereInput[]
    NOT?: SitePointWhereInput | SitePointWhereInput[]
    uuid?: UuidFilter<"SitePoint"> | string
    cafeins_uuid?: StringNullableFilter<"SitePoint"> | string | null
    name?: StringFilter<"SitePoint"> | string
    site_group_code?: StringFilter<"SitePoint"> | string
    latitude?: FloatFilter<"SitePoint"> | number
    longitude?: FloatFilter<"SitePoint"> | number
    created_at?: DateTimeFilter<"SitePoint"> | Date | string
    updated_at?: DateTimeFilter<"SitePoint"> | Date | string
    created_employee_no?: StringNullableFilter<"SitePoint"> | string | null
    modified_employee_no?: StringNullableFilter<"SitePoint"> | string | null
    status?: EnumMIGRATION_STATUSNullableFilter<"SitePoint"> | $Enums.MIGRATION_STATUS | null
    last_read?: DateTimeNullableFilter<"SitePoint"> | Date | string | null
    is_migrated?: BoolFilter<"SitePoint"> | boolean
  }

  export type SitePointOrderByWithRelationInput = {
    uuid?: SortOrder
    cafeins_uuid?: SortOrderInput | SortOrder
    name?: SortOrder
    site_group_code?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_employee_no?: SortOrderInput | SortOrder
    modified_employee_no?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    last_read?: SortOrderInput | SortOrder
    is_migrated?: SortOrder
  }

  export type SitePointWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    site_group_code?: string
    AND?: SitePointWhereInput | SitePointWhereInput[]
    OR?: SitePointWhereInput[]
    NOT?: SitePointWhereInput | SitePointWhereInput[]
    cafeins_uuid?: StringNullableFilter<"SitePoint"> | string | null
    name?: StringFilter<"SitePoint"> | string
    latitude?: FloatFilter<"SitePoint"> | number
    longitude?: FloatFilter<"SitePoint"> | number
    created_at?: DateTimeFilter<"SitePoint"> | Date | string
    updated_at?: DateTimeFilter<"SitePoint"> | Date | string
    created_employee_no?: StringNullableFilter<"SitePoint"> | string | null
    modified_employee_no?: StringNullableFilter<"SitePoint"> | string | null
    status?: EnumMIGRATION_STATUSNullableFilter<"SitePoint"> | $Enums.MIGRATION_STATUS | null
    last_read?: DateTimeNullableFilter<"SitePoint"> | Date | string | null
    is_migrated?: BoolFilter<"SitePoint"> | boolean
  }, "uuid" | "site_group_code">

  export type SitePointOrderByWithAggregationInput = {
    uuid?: SortOrder
    cafeins_uuid?: SortOrderInput | SortOrder
    name?: SortOrder
    site_group_code?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_employee_no?: SortOrderInput | SortOrder
    modified_employee_no?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    last_read?: SortOrderInput | SortOrder
    is_migrated?: SortOrder
    _count?: SitePointCountOrderByAggregateInput
    _avg?: SitePointAvgOrderByAggregateInput
    _max?: SitePointMaxOrderByAggregateInput
    _min?: SitePointMinOrderByAggregateInput
    _sum?: SitePointSumOrderByAggregateInput
  }

  export type SitePointScalarWhereWithAggregatesInput = {
    AND?: SitePointScalarWhereWithAggregatesInput | SitePointScalarWhereWithAggregatesInput[]
    OR?: SitePointScalarWhereWithAggregatesInput[]
    NOT?: SitePointScalarWhereWithAggregatesInput | SitePointScalarWhereWithAggregatesInput[]
    uuid?: UuidWithAggregatesFilter<"SitePoint"> | string
    cafeins_uuid?: StringNullableWithAggregatesFilter<"SitePoint"> | string | null
    name?: StringWithAggregatesFilter<"SitePoint"> | string
    site_group_code?: StringWithAggregatesFilter<"SitePoint"> | string
    latitude?: FloatWithAggregatesFilter<"SitePoint"> | number
    longitude?: FloatWithAggregatesFilter<"SitePoint"> | number
    created_at?: DateTimeWithAggregatesFilter<"SitePoint"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"SitePoint"> | Date | string
    created_employee_no?: StringNullableWithAggregatesFilter<"SitePoint"> | string | null
    modified_employee_no?: StringNullableWithAggregatesFilter<"SitePoint"> | string | null
    status?: EnumMIGRATION_STATUSNullableWithAggregatesFilter<"SitePoint"> | $Enums.MIGRATION_STATUS | null
    last_read?: DateTimeNullableWithAggregatesFilter<"SitePoint"> | Date | string | null
    is_migrated?: BoolWithAggregatesFilter<"SitePoint"> | boolean
  }

  export type LogWhereInput = {
    AND?: LogWhereInput | LogWhereInput[]
    OR?: LogWhereInput[]
    NOT?: LogWhereInput | LogWhereInput[]
    uuid?: UuidFilter<"Log"> | string
    level?: StringFilter<"Log"> | string
    message?: StringFilter<"Log"> | string
    meta?: JsonNullableFilter<"Log">
    created_at?: DateTimeFilter<"Log"> | Date | string
    updated_at?: DateTimeFilter<"Log"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Log"> | Date | string | null
  }

  export type LogOrderByWithRelationInput = {
    uuid?: SortOrder
    level?: SortOrder
    message?: SortOrder
    meta?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
  }

  export type LogWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    AND?: LogWhereInput | LogWhereInput[]
    OR?: LogWhereInput[]
    NOT?: LogWhereInput | LogWhereInput[]
    level?: StringFilter<"Log"> | string
    message?: StringFilter<"Log"> | string
    meta?: JsonNullableFilter<"Log">
    created_at?: DateTimeFilter<"Log"> | Date | string
    updated_at?: DateTimeFilter<"Log"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Log"> | Date | string | null
  }, "uuid">

  export type LogOrderByWithAggregationInput = {
    uuid?: SortOrder
    level?: SortOrder
    message?: SortOrder
    meta?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: LogCountOrderByAggregateInput
    _max?: LogMaxOrderByAggregateInput
    _min?: LogMinOrderByAggregateInput
  }

  export type LogScalarWhereWithAggregatesInput = {
    AND?: LogScalarWhereWithAggregatesInput | LogScalarWhereWithAggregatesInput[]
    OR?: LogScalarWhereWithAggregatesInput[]
    NOT?: LogScalarWhereWithAggregatesInput | LogScalarWhereWithAggregatesInput[]
    uuid?: UuidWithAggregatesFilter<"Log"> | string
    level?: StringWithAggregatesFilter<"Log"> | string
    message?: StringWithAggregatesFilter<"Log"> | string
    meta?: JsonNullableWithAggregatesFilter<"Log">
    created_at?: DateTimeWithAggregatesFilter<"Log"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Log"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"Log"> | Date | string | null
  }

  export type AssetWhereInput = {
    AND?: AssetWhereInput | AssetWhereInput[]
    OR?: AssetWhereInput[]
    NOT?: AssetWhereInput | AssetWhereInput[]
    uuid?: UuidFilter<"Asset"> | string
    cafeins_uuid?: StringNullableFilter<"Asset"> | string | null
    unique_id?: StringFilter<"Asset"> | string
    name?: StringFilter<"Asset"> | string
    description?: StringNullableFilter<"Asset"> | string | null
    created_at?: DateTimeFilter<"Asset"> | Date | string
    updated_at?: DateTimeFilter<"Asset"> | Date | string
    created_employee_no?: StringNullableFilter<"Asset"> | string | null
    modified_employee_no?: StringNullableFilter<"Asset"> | string | null
    code?: StringNullableFilter<"Asset"> | string | null
    asset_group_code?: StringNullableFilter<"Asset"> | string | null
    project_group_code?: StringNullableFilter<"Asset"> | string | null
    site_group_code?: StringNullableFilter<"Asset"> | string | null
    asset_category?: StringNullableFilter<"Asset"> | string | null
    asset_ownership?: StringNullableFilter<"Asset"> | string | null
    area_ownership?: StringNullableFilter<"Asset"> | string | null
    status?: EnumMIGRATION_STATUSNullableFilter<"Asset"> | $Enums.MIGRATION_STATUS | null
    last_read?: DateTimeNullableFilter<"Asset"> | Date | string | null
    is_migrated?: BoolFilter<"Asset"> | boolean
  }

  export type AssetOrderByWithRelationInput = {
    uuid?: SortOrder
    cafeins_uuid?: SortOrderInput | SortOrder
    unique_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_employee_no?: SortOrderInput | SortOrder
    modified_employee_no?: SortOrderInput | SortOrder
    code?: SortOrderInput | SortOrder
    asset_group_code?: SortOrderInput | SortOrder
    project_group_code?: SortOrderInput | SortOrder
    site_group_code?: SortOrderInput | SortOrder
    asset_category?: SortOrderInput | SortOrder
    asset_ownership?: SortOrderInput | SortOrder
    area_ownership?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    last_read?: SortOrderInput | SortOrder
    is_migrated?: SortOrder
  }

  export type AssetWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    unique_id?: string
    AND?: AssetWhereInput | AssetWhereInput[]
    OR?: AssetWhereInput[]
    NOT?: AssetWhereInput | AssetWhereInput[]
    cafeins_uuid?: StringNullableFilter<"Asset"> | string | null
    name?: StringFilter<"Asset"> | string
    description?: StringNullableFilter<"Asset"> | string | null
    created_at?: DateTimeFilter<"Asset"> | Date | string
    updated_at?: DateTimeFilter<"Asset"> | Date | string
    created_employee_no?: StringNullableFilter<"Asset"> | string | null
    modified_employee_no?: StringNullableFilter<"Asset"> | string | null
    code?: StringNullableFilter<"Asset"> | string | null
    asset_group_code?: StringNullableFilter<"Asset"> | string | null
    project_group_code?: StringNullableFilter<"Asset"> | string | null
    site_group_code?: StringNullableFilter<"Asset"> | string | null
    asset_category?: StringNullableFilter<"Asset"> | string | null
    asset_ownership?: StringNullableFilter<"Asset"> | string | null
    area_ownership?: StringNullableFilter<"Asset"> | string | null
    status?: EnumMIGRATION_STATUSNullableFilter<"Asset"> | $Enums.MIGRATION_STATUS | null
    last_read?: DateTimeNullableFilter<"Asset"> | Date | string | null
    is_migrated?: BoolFilter<"Asset"> | boolean
  }, "uuid" | "unique_id">

  export type AssetOrderByWithAggregationInput = {
    uuid?: SortOrder
    cafeins_uuid?: SortOrderInput | SortOrder
    unique_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_employee_no?: SortOrderInput | SortOrder
    modified_employee_no?: SortOrderInput | SortOrder
    code?: SortOrderInput | SortOrder
    asset_group_code?: SortOrderInput | SortOrder
    project_group_code?: SortOrderInput | SortOrder
    site_group_code?: SortOrderInput | SortOrder
    asset_category?: SortOrderInput | SortOrder
    asset_ownership?: SortOrderInput | SortOrder
    area_ownership?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    last_read?: SortOrderInput | SortOrder
    is_migrated?: SortOrder
    _count?: AssetCountOrderByAggregateInput
    _max?: AssetMaxOrderByAggregateInput
    _min?: AssetMinOrderByAggregateInput
  }

  export type AssetScalarWhereWithAggregatesInput = {
    AND?: AssetScalarWhereWithAggregatesInput | AssetScalarWhereWithAggregatesInput[]
    OR?: AssetScalarWhereWithAggregatesInput[]
    NOT?: AssetScalarWhereWithAggregatesInput | AssetScalarWhereWithAggregatesInput[]
    uuid?: UuidWithAggregatesFilter<"Asset"> | string
    cafeins_uuid?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    unique_id?: StringWithAggregatesFilter<"Asset"> | string
    name?: StringWithAggregatesFilter<"Asset"> | string
    description?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Asset"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Asset"> | Date | string
    created_employee_no?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    modified_employee_no?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    code?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    asset_group_code?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    project_group_code?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    site_group_code?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    asset_category?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    asset_ownership?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    area_ownership?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    status?: EnumMIGRATION_STATUSNullableWithAggregatesFilter<"Asset"> | $Enums.MIGRATION_STATUS | null
    last_read?: DateTimeNullableWithAggregatesFilter<"Asset"> | Date | string | null
    is_migrated?: BoolWithAggregatesFilter<"Asset"> | boolean
  }

  export type RouteWhereInput = {
    AND?: RouteWhereInput | RouteWhereInput[]
    OR?: RouteWhereInput[]
    NOT?: RouteWhereInput | RouteWhereInput[]
    uuid?: UuidFilter<"Route"> | string
    cafeins_uuid?: StringNullableFilter<"Route"> | string | null
    unique_id?: StringFilter<"Route"> | string
    name?: StringFilter<"Route"> | string
    length?: DecimalNullableFilter<"Route"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFilter<"Route"> | Date | string
    updated_at?: DateTimeFilter<"Route"> | Date | string
    created_employee_no?: StringNullableFilter<"Route"> | string | null
    modified_employee_no?: StringNullableFilter<"Route"> | string | null
    site_group_code_from?: StringNullableFilter<"Route"> | string | null
    site_group_code_to?: StringNullableFilter<"Route"> | string | null
    route_method?: StringNullableFilter<"Route"> | string | null
    route_ownership?: StringNullableFilter<"Route"> | string | null
    status?: EnumMIGRATION_STATUSNullableFilter<"Route"> | $Enums.MIGRATION_STATUS | null
    last_read?: DateTimeNullableFilter<"Route"> | Date | string | null
    is_migrated?: BoolFilter<"Route"> | boolean
  }

  export type RouteOrderByWithRelationInput = {
    uuid?: SortOrder
    cafeins_uuid?: SortOrderInput | SortOrder
    unique_id?: SortOrder
    name?: SortOrder
    length?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_employee_no?: SortOrderInput | SortOrder
    modified_employee_no?: SortOrderInput | SortOrder
    site_group_code_from?: SortOrderInput | SortOrder
    site_group_code_to?: SortOrderInput | SortOrder
    route_method?: SortOrderInput | SortOrder
    route_ownership?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    last_read?: SortOrderInput | SortOrder
    is_migrated?: SortOrder
  }

  export type RouteWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    unique_id?: string
    AND?: RouteWhereInput | RouteWhereInput[]
    OR?: RouteWhereInput[]
    NOT?: RouteWhereInput | RouteWhereInput[]
    cafeins_uuid?: StringNullableFilter<"Route"> | string | null
    name?: StringFilter<"Route"> | string
    length?: DecimalNullableFilter<"Route"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFilter<"Route"> | Date | string
    updated_at?: DateTimeFilter<"Route"> | Date | string
    created_employee_no?: StringNullableFilter<"Route"> | string | null
    modified_employee_no?: StringNullableFilter<"Route"> | string | null
    site_group_code_from?: StringNullableFilter<"Route"> | string | null
    site_group_code_to?: StringNullableFilter<"Route"> | string | null
    route_method?: StringNullableFilter<"Route"> | string | null
    route_ownership?: StringNullableFilter<"Route"> | string | null
    status?: EnumMIGRATION_STATUSNullableFilter<"Route"> | $Enums.MIGRATION_STATUS | null
    last_read?: DateTimeNullableFilter<"Route"> | Date | string | null
    is_migrated?: BoolFilter<"Route"> | boolean
  }, "uuid" | "unique_id">

  export type RouteOrderByWithAggregationInput = {
    uuid?: SortOrder
    cafeins_uuid?: SortOrderInput | SortOrder
    unique_id?: SortOrder
    name?: SortOrder
    length?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_employee_no?: SortOrderInput | SortOrder
    modified_employee_no?: SortOrderInput | SortOrder
    site_group_code_from?: SortOrderInput | SortOrder
    site_group_code_to?: SortOrderInput | SortOrder
    route_method?: SortOrderInput | SortOrder
    route_ownership?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    last_read?: SortOrderInput | SortOrder
    is_migrated?: SortOrder
    _count?: RouteCountOrderByAggregateInput
    _avg?: RouteAvgOrderByAggregateInput
    _max?: RouteMaxOrderByAggregateInput
    _min?: RouteMinOrderByAggregateInput
    _sum?: RouteSumOrderByAggregateInput
  }

  export type RouteScalarWhereWithAggregatesInput = {
    AND?: RouteScalarWhereWithAggregatesInput | RouteScalarWhereWithAggregatesInput[]
    OR?: RouteScalarWhereWithAggregatesInput[]
    NOT?: RouteScalarWhereWithAggregatesInput | RouteScalarWhereWithAggregatesInput[]
    uuid?: UuidWithAggregatesFilter<"Route"> | string
    cafeins_uuid?: StringNullableWithAggregatesFilter<"Route"> | string | null
    unique_id?: StringWithAggregatesFilter<"Route"> | string
    name?: StringWithAggregatesFilter<"Route"> | string
    length?: DecimalNullableWithAggregatesFilter<"Route"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeWithAggregatesFilter<"Route"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Route"> | Date | string
    created_employee_no?: StringNullableWithAggregatesFilter<"Route"> | string | null
    modified_employee_no?: StringNullableWithAggregatesFilter<"Route"> | string | null
    site_group_code_from?: StringNullableWithAggregatesFilter<"Route"> | string | null
    site_group_code_to?: StringNullableWithAggregatesFilter<"Route"> | string | null
    route_method?: StringNullableWithAggregatesFilter<"Route"> | string | null
    route_ownership?: StringNullableWithAggregatesFilter<"Route"> | string | null
    status?: EnumMIGRATION_STATUSNullableWithAggregatesFilter<"Route"> | $Enums.MIGRATION_STATUS | null
    last_read?: DateTimeNullableWithAggregatesFilter<"Route"> | Date | string | null
    is_migrated?: BoolWithAggregatesFilter<"Route"> | boolean
  }

  export type ProjectCreateInput = {
    uuid?: string
    cafeins_uuid?: string | null
    company_code: string
    vendor_no: string
    name: string
    project_group_code: string
    created_at?: Date | string
    updated_at?: Date | string
    created_employee_no?: string | null
    modified_employee_no?: string | null
    description?: string | null
    po_number?: string | null
    owner_name?: string | null
    owner_nik?: string | null
    status?: $Enums.MIGRATION_STATUS | null
    last_read?: Date | string | null
    is_migrated?: boolean
  }

  export type ProjectUncheckedCreateInput = {
    uuid?: string
    cafeins_uuid?: string | null
    company_code: string
    vendor_no: string
    name: string
    project_group_code: string
    created_at?: Date | string
    updated_at?: Date | string
    created_employee_no?: string | null
    modified_employee_no?: string | null
    description?: string | null
    po_number?: string | null
    owner_name?: string | null
    owner_nik?: string | null
    status?: $Enums.MIGRATION_STATUS | null
    last_read?: Date | string | null
    is_migrated?: boolean
  }

  export type ProjectUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    cafeins_uuid?: NullableStringFieldUpdateOperationsInput | string | null
    company_code?: StringFieldUpdateOperationsInput | string
    vendor_no?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    project_group_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_employee_no?: NullableStringFieldUpdateOperationsInput | string | null
    modified_employee_no?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    po_number?: NullableStringFieldUpdateOperationsInput | string | null
    owner_name?: NullableStringFieldUpdateOperationsInput | string | null
    owner_nik?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumMIGRATION_STATUSFieldUpdateOperationsInput | $Enums.MIGRATION_STATUS | null
    last_read?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_migrated?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProjectUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    cafeins_uuid?: NullableStringFieldUpdateOperationsInput | string | null
    company_code?: StringFieldUpdateOperationsInput | string
    vendor_no?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    project_group_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_employee_no?: NullableStringFieldUpdateOperationsInput | string | null
    modified_employee_no?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    po_number?: NullableStringFieldUpdateOperationsInput | string | null
    owner_name?: NullableStringFieldUpdateOperationsInput | string | null
    owner_nik?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumMIGRATION_STATUSFieldUpdateOperationsInput | $Enums.MIGRATION_STATUS | null
    last_read?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_migrated?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProjectCreateManyInput = {
    uuid?: string
    cafeins_uuid?: string | null
    company_code: string
    vendor_no: string
    name: string
    project_group_code: string
    created_at?: Date | string
    updated_at?: Date | string
    created_employee_no?: string | null
    modified_employee_no?: string | null
    description?: string | null
    po_number?: string | null
    owner_name?: string | null
    owner_nik?: string | null
    status?: $Enums.MIGRATION_STATUS | null
    last_read?: Date | string | null
    is_migrated?: boolean
  }

  export type ProjectUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    cafeins_uuid?: NullableStringFieldUpdateOperationsInput | string | null
    company_code?: StringFieldUpdateOperationsInput | string
    vendor_no?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    project_group_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_employee_no?: NullableStringFieldUpdateOperationsInput | string | null
    modified_employee_no?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    po_number?: NullableStringFieldUpdateOperationsInput | string | null
    owner_name?: NullableStringFieldUpdateOperationsInput | string | null
    owner_nik?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumMIGRATION_STATUSFieldUpdateOperationsInput | $Enums.MIGRATION_STATUS | null
    last_read?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_migrated?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProjectUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    cafeins_uuid?: NullableStringFieldUpdateOperationsInput | string | null
    company_code?: StringFieldUpdateOperationsInput | string
    vendor_no?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    project_group_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_employee_no?: NullableStringFieldUpdateOperationsInput | string | null
    modified_employee_no?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    po_number?: NullableStringFieldUpdateOperationsInput | string | null
    owner_name?: NullableStringFieldUpdateOperationsInput | string | null
    owner_nik?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumMIGRATION_STATUSFieldUpdateOperationsInput | $Enums.MIGRATION_STATUS | null
    last_read?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_migrated?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SitePointCreateInput = {
    uuid?: string
    cafeins_uuid?: string | null
    name: string
    site_group_code: string
    latitude: number
    longitude: number
    created_at?: Date | string
    updated_at?: Date | string
    created_employee_no?: string | null
    modified_employee_no?: string | null
    status?: $Enums.MIGRATION_STATUS | null
    last_read?: Date | string | null
    is_migrated?: boolean
  }

  export type SitePointUncheckedCreateInput = {
    uuid?: string
    cafeins_uuid?: string | null
    name: string
    site_group_code: string
    latitude: number
    longitude: number
    created_at?: Date | string
    updated_at?: Date | string
    created_employee_no?: string | null
    modified_employee_no?: string | null
    status?: $Enums.MIGRATION_STATUS | null
    last_read?: Date | string | null
    is_migrated?: boolean
  }

  export type SitePointUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    cafeins_uuid?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    site_group_code?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_employee_no?: NullableStringFieldUpdateOperationsInput | string | null
    modified_employee_no?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumMIGRATION_STATUSFieldUpdateOperationsInput | $Enums.MIGRATION_STATUS | null
    last_read?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_migrated?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SitePointUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    cafeins_uuid?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    site_group_code?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_employee_no?: NullableStringFieldUpdateOperationsInput | string | null
    modified_employee_no?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumMIGRATION_STATUSFieldUpdateOperationsInput | $Enums.MIGRATION_STATUS | null
    last_read?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_migrated?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SitePointCreateManyInput = {
    uuid?: string
    cafeins_uuid?: string | null
    name: string
    site_group_code: string
    latitude: number
    longitude: number
    created_at?: Date | string
    updated_at?: Date | string
    created_employee_no?: string | null
    modified_employee_no?: string | null
    status?: $Enums.MIGRATION_STATUS | null
    last_read?: Date | string | null
    is_migrated?: boolean
  }

  export type SitePointUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    cafeins_uuid?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    site_group_code?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_employee_no?: NullableStringFieldUpdateOperationsInput | string | null
    modified_employee_no?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumMIGRATION_STATUSFieldUpdateOperationsInput | $Enums.MIGRATION_STATUS | null
    last_read?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_migrated?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SitePointUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    cafeins_uuid?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    site_group_code?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_employee_no?: NullableStringFieldUpdateOperationsInput | string | null
    modified_employee_no?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumMIGRATION_STATUSFieldUpdateOperationsInput | $Enums.MIGRATION_STATUS | null
    last_read?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_migrated?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LogCreateInput = {
    uuid?: string
    level: string
    message: string
    meta?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type LogUncheckedCreateInput = {
    uuid?: string
    level: string
    message: string
    meta?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type LogUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    meta?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LogUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    meta?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LogCreateManyInput = {
    uuid?: string
    level: string
    message: string
    meta?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type LogUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    meta?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LogUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    meta?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AssetCreateInput = {
    uuid?: string
    cafeins_uuid?: string | null
    unique_id: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    created_employee_no?: string | null
    modified_employee_no?: string | null
    code?: string | null
    asset_group_code?: string | null
    project_group_code?: string | null
    site_group_code?: string | null
    asset_category?: string | null
    asset_ownership?: string | null
    area_ownership?: string | null
    status?: $Enums.MIGRATION_STATUS | null
    last_read?: Date | string | null
    is_migrated?: boolean
  }

  export type AssetUncheckedCreateInput = {
    uuid?: string
    cafeins_uuid?: string | null
    unique_id: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    created_employee_no?: string | null
    modified_employee_no?: string | null
    code?: string | null
    asset_group_code?: string | null
    project_group_code?: string | null
    site_group_code?: string | null
    asset_category?: string | null
    asset_ownership?: string | null
    area_ownership?: string | null
    status?: $Enums.MIGRATION_STATUS | null
    last_read?: Date | string | null
    is_migrated?: boolean
  }

  export type AssetUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    cafeins_uuid?: NullableStringFieldUpdateOperationsInput | string | null
    unique_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_employee_no?: NullableStringFieldUpdateOperationsInput | string | null
    modified_employee_no?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    asset_group_code?: NullableStringFieldUpdateOperationsInput | string | null
    project_group_code?: NullableStringFieldUpdateOperationsInput | string | null
    site_group_code?: NullableStringFieldUpdateOperationsInput | string | null
    asset_category?: NullableStringFieldUpdateOperationsInput | string | null
    asset_ownership?: NullableStringFieldUpdateOperationsInput | string | null
    area_ownership?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumMIGRATION_STATUSFieldUpdateOperationsInput | $Enums.MIGRATION_STATUS | null
    last_read?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_migrated?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AssetUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    cafeins_uuid?: NullableStringFieldUpdateOperationsInput | string | null
    unique_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_employee_no?: NullableStringFieldUpdateOperationsInput | string | null
    modified_employee_no?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    asset_group_code?: NullableStringFieldUpdateOperationsInput | string | null
    project_group_code?: NullableStringFieldUpdateOperationsInput | string | null
    site_group_code?: NullableStringFieldUpdateOperationsInput | string | null
    asset_category?: NullableStringFieldUpdateOperationsInput | string | null
    asset_ownership?: NullableStringFieldUpdateOperationsInput | string | null
    area_ownership?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumMIGRATION_STATUSFieldUpdateOperationsInput | $Enums.MIGRATION_STATUS | null
    last_read?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_migrated?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AssetCreateManyInput = {
    uuid?: string
    cafeins_uuid?: string | null
    unique_id: string
    name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    created_employee_no?: string | null
    modified_employee_no?: string | null
    code?: string | null
    asset_group_code?: string | null
    project_group_code?: string | null
    site_group_code?: string | null
    asset_category?: string | null
    asset_ownership?: string | null
    area_ownership?: string | null
    status?: $Enums.MIGRATION_STATUS | null
    last_read?: Date | string | null
    is_migrated?: boolean
  }

  export type AssetUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    cafeins_uuid?: NullableStringFieldUpdateOperationsInput | string | null
    unique_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_employee_no?: NullableStringFieldUpdateOperationsInput | string | null
    modified_employee_no?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    asset_group_code?: NullableStringFieldUpdateOperationsInput | string | null
    project_group_code?: NullableStringFieldUpdateOperationsInput | string | null
    site_group_code?: NullableStringFieldUpdateOperationsInput | string | null
    asset_category?: NullableStringFieldUpdateOperationsInput | string | null
    asset_ownership?: NullableStringFieldUpdateOperationsInput | string | null
    area_ownership?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumMIGRATION_STATUSFieldUpdateOperationsInput | $Enums.MIGRATION_STATUS | null
    last_read?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_migrated?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AssetUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    cafeins_uuid?: NullableStringFieldUpdateOperationsInput | string | null
    unique_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_employee_no?: NullableStringFieldUpdateOperationsInput | string | null
    modified_employee_no?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    asset_group_code?: NullableStringFieldUpdateOperationsInput | string | null
    project_group_code?: NullableStringFieldUpdateOperationsInput | string | null
    site_group_code?: NullableStringFieldUpdateOperationsInput | string | null
    asset_category?: NullableStringFieldUpdateOperationsInput | string | null
    asset_ownership?: NullableStringFieldUpdateOperationsInput | string | null
    area_ownership?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumMIGRATION_STATUSFieldUpdateOperationsInput | $Enums.MIGRATION_STATUS | null
    last_read?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_migrated?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RouteCreateInput = {
    uuid?: string
    cafeins_uuid?: string | null
    unique_id: string
    name: string
    length?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
    created_employee_no?: string | null
    modified_employee_no?: string | null
    site_group_code_from?: string | null
    site_group_code_to?: string | null
    route_method?: string | null
    route_ownership?: string | null
    status?: $Enums.MIGRATION_STATUS | null
    last_read?: Date | string | null
    is_migrated?: boolean
  }

  export type RouteUncheckedCreateInput = {
    uuid?: string
    cafeins_uuid?: string | null
    unique_id: string
    name: string
    length?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
    created_employee_no?: string | null
    modified_employee_no?: string | null
    site_group_code_from?: string | null
    site_group_code_to?: string | null
    route_method?: string | null
    route_ownership?: string | null
    status?: $Enums.MIGRATION_STATUS | null
    last_read?: Date | string | null
    is_migrated?: boolean
  }

  export type RouteUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    cafeins_uuid?: NullableStringFieldUpdateOperationsInput | string | null
    unique_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    length?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_employee_no?: NullableStringFieldUpdateOperationsInput | string | null
    modified_employee_no?: NullableStringFieldUpdateOperationsInput | string | null
    site_group_code_from?: NullableStringFieldUpdateOperationsInput | string | null
    site_group_code_to?: NullableStringFieldUpdateOperationsInput | string | null
    route_method?: NullableStringFieldUpdateOperationsInput | string | null
    route_ownership?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumMIGRATION_STATUSFieldUpdateOperationsInput | $Enums.MIGRATION_STATUS | null
    last_read?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_migrated?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RouteUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    cafeins_uuid?: NullableStringFieldUpdateOperationsInput | string | null
    unique_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    length?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_employee_no?: NullableStringFieldUpdateOperationsInput | string | null
    modified_employee_no?: NullableStringFieldUpdateOperationsInput | string | null
    site_group_code_from?: NullableStringFieldUpdateOperationsInput | string | null
    site_group_code_to?: NullableStringFieldUpdateOperationsInput | string | null
    route_method?: NullableStringFieldUpdateOperationsInput | string | null
    route_ownership?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumMIGRATION_STATUSFieldUpdateOperationsInput | $Enums.MIGRATION_STATUS | null
    last_read?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_migrated?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RouteCreateManyInput = {
    uuid?: string
    cafeins_uuid?: string | null
    unique_id: string
    name: string
    length?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
    created_employee_no?: string | null
    modified_employee_no?: string | null
    site_group_code_from?: string | null
    site_group_code_to?: string | null
    route_method?: string | null
    route_ownership?: string | null
    status?: $Enums.MIGRATION_STATUS | null
    last_read?: Date | string | null
    is_migrated?: boolean
  }

  export type RouteUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    cafeins_uuid?: NullableStringFieldUpdateOperationsInput | string | null
    unique_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    length?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_employee_no?: NullableStringFieldUpdateOperationsInput | string | null
    modified_employee_no?: NullableStringFieldUpdateOperationsInput | string | null
    site_group_code_from?: NullableStringFieldUpdateOperationsInput | string | null
    site_group_code_to?: NullableStringFieldUpdateOperationsInput | string | null
    route_method?: NullableStringFieldUpdateOperationsInput | string | null
    route_ownership?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumMIGRATION_STATUSFieldUpdateOperationsInput | $Enums.MIGRATION_STATUS | null
    last_read?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_migrated?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RouteUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    cafeins_uuid?: NullableStringFieldUpdateOperationsInput | string | null
    unique_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    length?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_employee_no?: NullableStringFieldUpdateOperationsInput | string | null
    modified_employee_no?: NullableStringFieldUpdateOperationsInput | string | null
    site_group_code_from?: NullableStringFieldUpdateOperationsInput | string | null
    site_group_code_to?: NullableStringFieldUpdateOperationsInput | string | null
    route_method?: NullableStringFieldUpdateOperationsInput | string | null
    route_ownership?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumMIGRATION_STATUSFieldUpdateOperationsInput | $Enums.MIGRATION_STATUS | null
    last_read?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_migrated?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumMIGRATION_STATUSNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.MIGRATION_STATUS | EnumMIGRATION_STATUSFieldRefInput<$PrismaModel> | null
    in?: $Enums.MIGRATION_STATUS[] | ListEnumMIGRATION_STATUSFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MIGRATION_STATUS[] | ListEnumMIGRATION_STATUSFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMIGRATION_STATUSNullableFilter<$PrismaModel> | $Enums.MIGRATION_STATUS | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    uuid?: SortOrder
    cafeins_uuid?: SortOrder
    company_code?: SortOrder
    vendor_no?: SortOrder
    name?: SortOrder
    project_group_code?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_employee_no?: SortOrder
    modified_employee_no?: SortOrder
    description?: SortOrder
    po_number?: SortOrder
    owner_name?: SortOrder
    owner_nik?: SortOrder
    status?: SortOrder
    last_read?: SortOrder
    is_migrated?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    uuid?: SortOrder
    cafeins_uuid?: SortOrder
    company_code?: SortOrder
    vendor_no?: SortOrder
    name?: SortOrder
    project_group_code?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_employee_no?: SortOrder
    modified_employee_no?: SortOrder
    description?: SortOrder
    po_number?: SortOrder
    owner_name?: SortOrder
    owner_nik?: SortOrder
    status?: SortOrder
    last_read?: SortOrder
    is_migrated?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    uuid?: SortOrder
    cafeins_uuid?: SortOrder
    company_code?: SortOrder
    vendor_no?: SortOrder
    name?: SortOrder
    project_group_code?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_employee_no?: SortOrder
    modified_employee_no?: SortOrder
    description?: SortOrder
    po_number?: SortOrder
    owner_name?: SortOrder
    owner_nik?: SortOrder
    status?: SortOrder
    last_read?: SortOrder
    is_migrated?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumMIGRATION_STATUSNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MIGRATION_STATUS | EnumMIGRATION_STATUSFieldRefInput<$PrismaModel> | null
    in?: $Enums.MIGRATION_STATUS[] | ListEnumMIGRATION_STATUSFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MIGRATION_STATUS[] | ListEnumMIGRATION_STATUSFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMIGRATION_STATUSNullableWithAggregatesFilter<$PrismaModel> | $Enums.MIGRATION_STATUS | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumMIGRATION_STATUSNullableFilter<$PrismaModel>
    _max?: NestedEnumMIGRATION_STATUSNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type SitePointCountOrderByAggregateInput = {
    uuid?: SortOrder
    cafeins_uuid?: SortOrder
    name?: SortOrder
    site_group_code?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_employee_no?: SortOrder
    modified_employee_no?: SortOrder
    status?: SortOrder
    last_read?: SortOrder
    is_migrated?: SortOrder
  }

  export type SitePointAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type SitePointMaxOrderByAggregateInput = {
    uuid?: SortOrder
    cafeins_uuid?: SortOrder
    name?: SortOrder
    site_group_code?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_employee_no?: SortOrder
    modified_employee_no?: SortOrder
    status?: SortOrder
    last_read?: SortOrder
    is_migrated?: SortOrder
  }

  export type SitePointMinOrderByAggregateInput = {
    uuid?: SortOrder
    cafeins_uuid?: SortOrder
    name?: SortOrder
    site_group_code?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_employee_no?: SortOrder
    modified_employee_no?: SortOrder
    status?: SortOrder
    last_read?: SortOrder
    is_migrated?: SortOrder
  }

  export type SitePointSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type LogCountOrderByAggregateInput = {
    uuid?: SortOrder
    level?: SortOrder
    message?: SortOrder
    meta?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type LogMaxOrderByAggregateInput = {
    uuid?: SortOrder
    level?: SortOrder
    message?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type LogMinOrderByAggregateInput = {
    uuid?: SortOrder
    level?: SortOrder
    message?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type AssetCountOrderByAggregateInput = {
    uuid?: SortOrder
    cafeins_uuid?: SortOrder
    unique_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_employee_no?: SortOrder
    modified_employee_no?: SortOrder
    code?: SortOrder
    asset_group_code?: SortOrder
    project_group_code?: SortOrder
    site_group_code?: SortOrder
    asset_category?: SortOrder
    asset_ownership?: SortOrder
    area_ownership?: SortOrder
    status?: SortOrder
    last_read?: SortOrder
    is_migrated?: SortOrder
  }

  export type AssetMaxOrderByAggregateInput = {
    uuid?: SortOrder
    cafeins_uuid?: SortOrder
    unique_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_employee_no?: SortOrder
    modified_employee_no?: SortOrder
    code?: SortOrder
    asset_group_code?: SortOrder
    project_group_code?: SortOrder
    site_group_code?: SortOrder
    asset_category?: SortOrder
    asset_ownership?: SortOrder
    area_ownership?: SortOrder
    status?: SortOrder
    last_read?: SortOrder
    is_migrated?: SortOrder
  }

  export type AssetMinOrderByAggregateInput = {
    uuid?: SortOrder
    cafeins_uuid?: SortOrder
    unique_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_employee_no?: SortOrder
    modified_employee_no?: SortOrder
    code?: SortOrder
    asset_group_code?: SortOrder
    project_group_code?: SortOrder
    site_group_code?: SortOrder
    asset_category?: SortOrder
    asset_ownership?: SortOrder
    area_ownership?: SortOrder
    status?: SortOrder
    last_read?: SortOrder
    is_migrated?: SortOrder
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type RouteCountOrderByAggregateInput = {
    uuid?: SortOrder
    cafeins_uuid?: SortOrder
    unique_id?: SortOrder
    name?: SortOrder
    length?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_employee_no?: SortOrder
    modified_employee_no?: SortOrder
    site_group_code_from?: SortOrder
    site_group_code_to?: SortOrder
    route_method?: SortOrder
    route_ownership?: SortOrder
    status?: SortOrder
    last_read?: SortOrder
    is_migrated?: SortOrder
  }

  export type RouteAvgOrderByAggregateInput = {
    length?: SortOrder
  }

  export type RouteMaxOrderByAggregateInput = {
    uuid?: SortOrder
    cafeins_uuid?: SortOrder
    unique_id?: SortOrder
    name?: SortOrder
    length?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_employee_no?: SortOrder
    modified_employee_no?: SortOrder
    site_group_code_from?: SortOrder
    site_group_code_to?: SortOrder
    route_method?: SortOrder
    route_ownership?: SortOrder
    status?: SortOrder
    last_read?: SortOrder
    is_migrated?: SortOrder
  }

  export type RouteMinOrderByAggregateInput = {
    uuid?: SortOrder
    cafeins_uuid?: SortOrder
    unique_id?: SortOrder
    name?: SortOrder
    length?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_employee_no?: SortOrder
    modified_employee_no?: SortOrder
    site_group_code_from?: SortOrder
    site_group_code_to?: SortOrder
    route_method?: SortOrder
    route_ownership?: SortOrder
    status?: SortOrder
    last_read?: SortOrder
    is_migrated?: SortOrder
  }

  export type RouteSumOrderByAggregateInput = {
    length?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableEnumMIGRATION_STATUSFieldUpdateOperationsInput = {
    set?: $Enums.MIGRATION_STATUS | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumMIGRATION_STATUSNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.MIGRATION_STATUS | EnumMIGRATION_STATUSFieldRefInput<$PrismaModel> | null
    in?: $Enums.MIGRATION_STATUS[] | ListEnumMIGRATION_STATUSFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MIGRATION_STATUS[] | ListEnumMIGRATION_STATUSFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMIGRATION_STATUSNullableFilter<$PrismaModel> | $Enums.MIGRATION_STATUS | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumMIGRATION_STATUSNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MIGRATION_STATUS | EnumMIGRATION_STATUSFieldRefInput<$PrismaModel> | null
    in?: $Enums.MIGRATION_STATUS[] | ListEnumMIGRATION_STATUSFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MIGRATION_STATUS[] | ListEnumMIGRATION_STATUSFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMIGRATION_STATUSNullableWithAggregatesFilter<$PrismaModel> | $Enums.MIGRATION_STATUS | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumMIGRATION_STATUSNullableFilter<$PrismaModel>
    _max?: NestedEnumMIGRATION_STATUSNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ProjectDefaultArgs instead
     */
    export type ProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SitePointDefaultArgs instead
     */
    export type SitePointArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SitePointDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LogDefaultArgs instead
     */
    export type LogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AssetDefaultArgs instead
     */
    export type AssetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AssetDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RouteDefaultArgs instead
     */
    export type RouteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RouteDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}