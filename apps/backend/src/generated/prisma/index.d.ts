
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Competitions
 * 
 */
export type Competitions = $Result.DefaultSelection<Prisma.$CompetitionsPayload>
/**
 * Model Registrations
 * 
 */
export type Registrations = $Result.DefaultSelection<Prisma.$RegistrationsPayload>
/**
 * Model MailBox
 * 
 */
export type MailBox = $Result.DefaultSelection<Prisma.$MailBoxPayload>
/**
 * Model FailedJobs
 * 
 */
export type FailedJobs = $Result.DefaultSelection<Prisma.$FailedJobsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  participant: 'participant',
  organizer: 'organizer'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const RegistrationStatus: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  CANCELLED: 'CANCELLED'
};

export type RegistrationStatus = (typeof RegistrationStatus)[keyof typeof RegistrationStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type RegistrationStatus = $Enums.RegistrationStatus

export const RegistrationStatus: typeof $Enums.RegistrationStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.competitions`: Exposes CRUD operations for the **Competitions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Competitions
    * const competitions = await prisma.competitions.findMany()
    * ```
    */
  get competitions(): Prisma.CompetitionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.registrations`: Exposes CRUD operations for the **Registrations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Registrations
    * const registrations = await prisma.registrations.findMany()
    * ```
    */
  get registrations(): Prisma.RegistrationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mailBox`: Exposes CRUD operations for the **MailBox** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MailBoxes
    * const mailBoxes = await prisma.mailBox.findMany()
    * ```
    */
  get mailBox(): Prisma.MailBoxDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.failedJobs`: Exposes CRUD operations for the **FailedJobs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FailedJobs
    * const failedJobs = await prisma.failedJobs.findMany()
    * ```
    */
  get failedJobs(): Prisma.FailedJobsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    Competitions: 'Competitions',
    Registrations: 'Registrations',
    MailBox: 'MailBox',
    FailedJobs: 'FailedJobs'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "competitions" | "registrations" | "mailBox" | "failedJobs"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Competitions: {
        payload: Prisma.$CompetitionsPayload<ExtArgs>
        fields: Prisma.CompetitionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompetitionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompetitionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionsPayload>
          }
          findFirst: {
            args: Prisma.CompetitionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompetitionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionsPayload>
          }
          findMany: {
            args: Prisma.CompetitionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionsPayload>[]
          }
          create: {
            args: Prisma.CompetitionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionsPayload>
          }
          createMany: {
            args: Prisma.CompetitionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompetitionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionsPayload>[]
          }
          delete: {
            args: Prisma.CompetitionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionsPayload>
          }
          update: {
            args: Prisma.CompetitionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionsPayload>
          }
          deleteMany: {
            args: Prisma.CompetitionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompetitionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompetitionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionsPayload>[]
          }
          upsert: {
            args: Prisma.CompetitionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionsPayload>
          }
          aggregate: {
            args: Prisma.CompetitionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompetitions>
          }
          groupBy: {
            args: Prisma.CompetitionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompetitionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompetitionsCountArgs<ExtArgs>
            result: $Utils.Optional<CompetitionsCountAggregateOutputType> | number
          }
        }
      }
      Registrations: {
        payload: Prisma.$RegistrationsPayload<ExtArgs>
        fields: Prisma.RegistrationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegistrationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegistrationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationsPayload>
          }
          findFirst: {
            args: Prisma.RegistrationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegistrationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationsPayload>
          }
          findMany: {
            args: Prisma.RegistrationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationsPayload>[]
          }
          create: {
            args: Prisma.RegistrationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationsPayload>
          }
          createMany: {
            args: Prisma.RegistrationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RegistrationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationsPayload>[]
          }
          delete: {
            args: Prisma.RegistrationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationsPayload>
          }
          update: {
            args: Prisma.RegistrationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationsPayload>
          }
          deleteMany: {
            args: Prisma.RegistrationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegistrationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RegistrationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationsPayload>[]
          }
          upsert: {
            args: Prisma.RegistrationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationsPayload>
          }
          aggregate: {
            args: Prisma.RegistrationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegistrations>
          }
          groupBy: {
            args: Prisma.RegistrationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegistrationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegistrationsCountArgs<ExtArgs>
            result: $Utils.Optional<RegistrationsCountAggregateOutputType> | number
          }
        }
      }
      MailBox: {
        payload: Prisma.$MailBoxPayload<ExtArgs>
        fields: Prisma.MailBoxFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MailBoxFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MailBoxPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MailBoxFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MailBoxPayload>
          }
          findFirst: {
            args: Prisma.MailBoxFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MailBoxPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MailBoxFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MailBoxPayload>
          }
          findMany: {
            args: Prisma.MailBoxFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MailBoxPayload>[]
          }
          create: {
            args: Prisma.MailBoxCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MailBoxPayload>
          }
          createMany: {
            args: Prisma.MailBoxCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MailBoxCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MailBoxPayload>[]
          }
          delete: {
            args: Prisma.MailBoxDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MailBoxPayload>
          }
          update: {
            args: Prisma.MailBoxUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MailBoxPayload>
          }
          deleteMany: {
            args: Prisma.MailBoxDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MailBoxUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MailBoxUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MailBoxPayload>[]
          }
          upsert: {
            args: Prisma.MailBoxUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MailBoxPayload>
          }
          aggregate: {
            args: Prisma.MailBoxAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMailBox>
          }
          groupBy: {
            args: Prisma.MailBoxGroupByArgs<ExtArgs>
            result: $Utils.Optional<MailBoxGroupByOutputType>[]
          }
          count: {
            args: Prisma.MailBoxCountArgs<ExtArgs>
            result: $Utils.Optional<MailBoxCountAggregateOutputType> | number
          }
        }
      }
      FailedJobs: {
        payload: Prisma.$FailedJobsPayload<ExtArgs>
        fields: Prisma.FailedJobsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FailedJobsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FailedJobsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FailedJobsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FailedJobsPayload>
          }
          findFirst: {
            args: Prisma.FailedJobsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FailedJobsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FailedJobsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FailedJobsPayload>
          }
          findMany: {
            args: Prisma.FailedJobsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FailedJobsPayload>[]
          }
          create: {
            args: Prisma.FailedJobsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FailedJobsPayload>
          }
          createMany: {
            args: Prisma.FailedJobsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FailedJobsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FailedJobsPayload>[]
          }
          delete: {
            args: Prisma.FailedJobsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FailedJobsPayload>
          }
          update: {
            args: Prisma.FailedJobsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FailedJobsPayload>
          }
          deleteMany: {
            args: Prisma.FailedJobsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FailedJobsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FailedJobsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FailedJobsPayload>[]
          }
          upsert: {
            args: Prisma.FailedJobsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FailedJobsPayload>
          }
          aggregate: {
            args: Prisma.FailedJobsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFailedJobs>
          }
          groupBy: {
            args: Prisma.FailedJobsGroupByArgs<ExtArgs>
            result: $Utils.Optional<FailedJobsGroupByOutputType>[]
          }
          count: {
            args: Prisma.FailedJobsCountArgs<ExtArgs>
            result: $Utils.Optional<FailedJobsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    competitions?: CompetitionsOmit
    registrations?: RegistrationsOmit
    mailBox?: MailBoxOmit
    failedJobs?: FailedJobsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    registrations: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registrations?: boolean | UserCountOutputTypeCountRegistrationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRegistrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistrationsWhereInput
  }


  /**
   * Count Type CompetitionsCountOutputType
   */

  export type CompetitionsCountOutputType = {
    registrations: number
  }

  export type CompetitionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registrations?: boolean | CompetitionsCountOutputTypeCountRegistrationsArgs
  }

  // Custom InputTypes
  /**
   * CompetitionsCountOutputType without action
   */
  export type CompetitionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionsCountOutputType
     */
    select?: CompetitionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompetitionsCountOutputType without action
   */
  export type CompetitionsCountOutputTypeCountRegistrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistrationsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    userId: string | null
    email: string | null
    name: string | null
    password: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    userId: string | null
    email: string | null
    name: string | null
    password: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    userId: number
    email: number
    name: number
    password: number
    role: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    userId?: true
    email?: true
    name?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    userId?: true
    email?: true
    name?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    userId?: true
    email?: true
    name?: true
    password?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    userId: string
    email: string
    name: string
    password: string
    role: $Enums.UserRole
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    registrations?: boolean | User$registrationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    userId?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "email" | "name" | "password" | "role" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registrations?: boolean | User$registrationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      registrations: Prisma.$RegistrationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      email: string
      name: string
      password: string
      role: $Enums.UserRole
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userWithUserIdOnly = await prisma.user.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `userId`
     * const userWithUserIdOnly = await prisma.user.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `userId`
     * const userWithUserIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    registrations<T extends User$registrationsArgs<ExtArgs> = {}>(args?: Subset<T, User$registrationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistrationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly userId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.registrations
   */
  export type User$registrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registrations
     */
    select?: RegistrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registrations
     */
    omit?: RegistrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationsInclude<ExtArgs> | null
    where?: RegistrationsWhereInput
    orderBy?: RegistrationsOrderByWithRelationInput | RegistrationsOrderByWithRelationInput[]
    cursor?: RegistrationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegistrationsScalarFieldEnum | RegistrationsScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Competitions
   */

  export type AggregateCompetitions = {
    _count: CompetitionsCountAggregateOutputType | null
    _avg: CompetitionsAvgAggregateOutputType | null
    _sum: CompetitionsSumAggregateOutputType | null
    _min: CompetitionsMinAggregateOutputType | null
    _max: CompetitionsMaxAggregateOutputType | null
  }

  export type CompetitionsAvgAggregateOutputType = {
    capacity: number | null
    registeredCount: number | null
  }

  export type CompetitionsSumAggregateOutputType = {
    capacity: number | null
    registeredCount: number | null
  }

  export type CompetitionsMinAggregateOutputType = {
    competitionId: string | null
    title: string | null
    description: string | null
    capacity: number | null
    registeredCount: number | null
    regDeadLine: Date | null
    startDate: Date | null
    createdAt: Date | null
  }

  export type CompetitionsMaxAggregateOutputType = {
    competitionId: string | null
    title: string | null
    description: string | null
    capacity: number | null
    registeredCount: number | null
    regDeadLine: Date | null
    startDate: Date | null
    createdAt: Date | null
  }

  export type CompetitionsCountAggregateOutputType = {
    competitionId: number
    title: number
    description: number
    tags: number
    capacity: number
    registeredCount: number
    regDeadLine: number
    startDate: number
    createdAt: number
    _all: number
  }


  export type CompetitionsAvgAggregateInputType = {
    capacity?: true
    registeredCount?: true
  }

  export type CompetitionsSumAggregateInputType = {
    capacity?: true
    registeredCount?: true
  }

  export type CompetitionsMinAggregateInputType = {
    competitionId?: true
    title?: true
    description?: true
    capacity?: true
    registeredCount?: true
    regDeadLine?: true
    startDate?: true
    createdAt?: true
  }

  export type CompetitionsMaxAggregateInputType = {
    competitionId?: true
    title?: true
    description?: true
    capacity?: true
    registeredCount?: true
    regDeadLine?: true
    startDate?: true
    createdAt?: true
  }

  export type CompetitionsCountAggregateInputType = {
    competitionId?: true
    title?: true
    description?: true
    tags?: true
    capacity?: true
    registeredCount?: true
    regDeadLine?: true
    startDate?: true
    createdAt?: true
    _all?: true
  }

  export type CompetitionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Competitions to aggregate.
     */
    where?: CompetitionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Competitions to fetch.
     */
    orderBy?: CompetitionsOrderByWithRelationInput | CompetitionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompetitionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Competitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Competitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Competitions
    **/
    _count?: true | CompetitionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompetitionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompetitionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompetitionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompetitionsMaxAggregateInputType
  }

  export type GetCompetitionsAggregateType<T extends CompetitionsAggregateArgs> = {
        [P in keyof T & keyof AggregateCompetitions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompetitions[P]>
      : GetScalarType<T[P], AggregateCompetitions[P]>
  }




  export type CompetitionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompetitionsWhereInput
    orderBy?: CompetitionsOrderByWithAggregationInput | CompetitionsOrderByWithAggregationInput[]
    by: CompetitionsScalarFieldEnum[] | CompetitionsScalarFieldEnum
    having?: CompetitionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompetitionsCountAggregateInputType | true
    _avg?: CompetitionsAvgAggregateInputType
    _sum?: CompetitionsSumAggregateInputType
    _min?: CompetitionsMinAggregateInputType
    _max?: CompetitionsMaxAggregateInputType
  }

  export type CompetitionsGroupByOutputType = {
    competitionId: string
    title: string
    description: string
    tags: string[]
    capacity: number
    registeredCount: number
    regDeadLine: Date
    startDate: Date
    createdAt: Date
    _count: CompetitionsCountAggregateOutputType | null
    _avg: CompetitionsAvgAggregateOutputType | null
    _sum: CompetitionsSumAggregateOutputType | null
    _min: CompetitionsMinAggregateOutputType | null
    _max: CompetitionsMaxAggregateOutputType | null
  }

  type GetCompetitionsGroupByPayload<T extends CompetitionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompetitionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompetitionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompetitionsGroupByOutputType[P]>
            : GetScalarType<T[P], CompetitionsGroupByOutputType[P]>
        }
      >
    >


  export type CompetitionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    competitionId?: boolean
    title?: boolean
    description?: boolean
    tags?: boolean
    capacity?: boolean
    registeredCount?: boolean
    regDeadLine?: boolean
    startDate?: boolean
    createdAt?: boolean
    registrations?: boolean | Competitions$registrationsArgs<ExtArgs>
    _count?: boolean | CompetitionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["competitions"]>

  export type CompetitionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    competitionId?: boolean
    title?: boolean
    description?: boolean
    tags?: boolean
    capacity?: boolean
    registeredCount?: boolean
    regDeadLine?: boolean
    startDate?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["competitions"]>

  export type CompetitionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    competitionId?: boolean
    title?: boolean
    description?: boolean
    tags?: boolean
    capacity?: boolean
    registeredCount?: boolean
    regDeadLine?: boolean
    startDate?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["competitions"]>

  export type CompetitionsSelectScalar = {
    competitionId?: boolean
    title?: boolean
    description?: boolean
    tags?: boolean
    capacity?: boolean
    registeredCount?: boolean
    regDeadLine?: boolean
    startDate?: boolean
    createdAt?: boolean
  }

  export type CompetitionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"competitionId" | "title" | "description" | "tags" | "capacity" | "registeredCount" | "regDeadLine" | "startDate" | "createdAt", ExtArgs["result"]["competitions"]>
  export type CompetitionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registrations?: boolean | Competitions$registrationsArgs<ExtArgs>
    _count?: boolean | CompetitionsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompetitionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CompetitionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CompetitionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Competitions"
    objects: {
      registrations: Prisma.$RegistrationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      competitionId: string
      title: string
      description: string
      tags: string[]
      capacity: number
      registeredCount: number
      regDeadLine: Date
      startDate: Date
      createdAt: Date
    }, ExtArgs["result"]["competitions"]>
    composites: {}
  }

  type CompetitionsGetPayload<S extends boolean | null | undefined | CompetitionsDefaultArgs> = $Result.GetResult<Prisma.$CompetitionsPayload, S>

  type CompetitionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompetitionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompetitionsCountAggregateInputType | true
    }

  export interface CompetitionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Competitions'], meta: { name: 'Competitions' } }
    /**
     * Find zero or one Competitions that matches the filter.
     * @param {CompetitionsFindUniqueArgs} args - Arguments to find a Competitions
     * @example
     * // Get one Competitions
     * const competitions = await prisma.competitions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompetitionsFindUniqueArgs>(args: SelectSubset<T, CompetitionsFindUniqueArgs<ExtArgs>>): Prisma__CompetitionsClient<$Result.GetResult<Prisma.$CompetitionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Competitions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompetitionsFindUniqueOrThrowArgs} args - Arguments to find a Competitions
     * @example
     * // Get one Competitions
     * const competitions = await prisma.competitions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompetitionsFindUniqueOrThrowArgs>(args: SelectSubset<T, CompetitionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompetitionsClient<$Result.GetResult<Prisma.$CompetitionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Competitions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionsFindFirstArgs} args - Arguments to find a Competitions
     * @example
     * // Get one Competitions
     * const competitions = await prisma.competitions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompetitionsFindFirstArgs>(args?: SelectSubset<T, CompetitionsFindFirstArgs<ExtArgs>>): Prisma__CompetitionsClient<$Result.GetResult<Prisma.$CompetitionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Competitions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionsFindFirstOrThrowArgs} args - Arguments to find a Competitions
     * @example
     * // Get one Competitions
     * const competitions = await prisma.competitions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompetitionsFindFirstOrThrowArgs>(args?: SelectSubset<T, CompetitionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompetitionsClient<$Result.GetResult<Prisma.$CompetitionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Competitions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Competitions
     * const competitions = await prisma.competitions.findMany()
     * 
     * // Get first 10 Competitions
     * const competitions = await prisma.competitions.findMany({ take: 10 })
     * 
     * // Only select the `competitionId`
     * const competitionsWithCompetitionIdOnly = await prisma.competitions.findMany({ select: { competitionId: true } })
     * 
     */
    findMany<T extends CompetitionsFindManyArgs>(args?: SelectSubset<T, CompetitionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Competitions.
     * @param {CompetitionsCreateArgs} args - Arguments to create a Competitions.
     * @example
     * // Create one Competitions
     * const Competitions = await prisma.competitions.create({
     *   data: {
     *     // ... data to create a Competitions
     *   }
     * })
     * 
     */
    create<T extends CompetitionsCreateArgs>(args: SelectSubset<T, CompetitionsCreateArgs<ExtArgs>>): Prisma__CompetitionsClient<$Result.GetResult<Prisma.$CompetitionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Competitions.
     * @param {CompetitionsCreateManyArgs} args - Arguments to create many Competitions.
     * @example
     * // Create many Competitions
     * const competitions = await prisma.competitions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompetitionsCreateManyArgs>(args?: SelectSubset<T, CompetitionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Competitions and returns the data saved in the database.
     * @param {CompetitionsCreateManyAndReturnArgs} args - Arguments to create many Competitions.
     * @example
     * // Create many Competitions
     * const competitions = await prisma.competitions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Competitions and only return the `competitionId`
     * const competitionsWithCompetitionIdOnly = await prisma.competitions.createManyAndReturn({
     *   select: { competitionId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompetitionsCreateManyAndReturnArgs>(args?: SelectSubset<T, CompetitionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Competitions.
     * @param {CompetitionsDeleteArgs} args - Arguments to delete one Competitions.
     * @example
     * // Delete one Competitions
     * const Competitions = await prisma.competitions.delete({
     *   where: {
     *     // ... filter to delete one Competitions
     *   }
     * })
     * 
     */
    delete<T extends CompetitionsDeleteArgs>(args: SelectSubset<T, CompetitionsDeleteArgs<ExtArgs>>): Prisma__CompetitionsClient<$Result.GetResult<Prisma.$CompetitionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Competitions.
     * @param {CompetitionsUpdateArgs} args - Arguments to update one Competitions.
     * @example
     * // Update one Competitions
     * const competitions = await prisma.competitions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompetitionsUpdateArgs>(args: SelectSubset<T, CompetitionsUpdateArgs<ExtArgs>>): Prisma__CompetitionsClient<$Result.GetResult<Prisma.$CompetitionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Competitions.
     * @param {CompetitionsDeleteManyArgs} args - Arguments to filter Competitions to delete.
     * @example
     * // Delete a few Competitions
     * const { count } = await prisma.competitions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompetitionsDeleteManyArgs>(args?: SelectSubset<T, CompetitionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Competitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Competitions
     * const competitions = await prisma.competitions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompetitionsUpdateManyArgs>(args: SelectSubset<T, CompetitionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Competitions and returns the data updated in the database.
     * @param {CompetitionsUpdateManyAndReturnArgs} args - Arguments to update many Competitions.
     * @example
     * // Update many Competitions
     * const competitions = await prisma.competitions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Competitions and only return the `competitionId`
     * const competitionsWithCompetitionIdOnly = await prisma.competitions.updateManyAndReturn({
     *   select: { competitionId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompetitionsUpdateManyAndReturnArgs>(args: SelectSubset<T, CompetitionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Competitions.
     * @param {CompetitionsUpsertArgs} args - Arguments to update or create a Competitions.
     * @example
     * // Update or create a Competitions
     * const competitions = await prisma.competitions.upsert({
     *   create: {
     *     // ... data to create a Competitions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Competitions we want to update
     *   }
     * })
     */
    upsert<T extends CompetitionsUpsertArgs>(args: SelectSubset<T, CompetitionsUpsertArgs<ExtArgs>>): Prisma__CompetitionsClient<$Result.GetResult<Prisma.$CompetitionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Competitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionsCountArgs} args - Arguments to filter Competitions to count.
     * @example
     * // Count the number of Competitions
     * const count = await prisma.competitions.count({
     *   where: {
     *     // ... the filter for the Competitions we want to count
     *   }
     * })
    **/
    count<T extends CompetitionsCountArgs>(
      args?: Subset<T, CompetitionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompetitionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Competitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompetitionsAggregateArgs>(args: Subset<T, CompetitionsAggregateArgs>): Prisma.PrismaPromise<GetCompetitionsAggregateType<T>>

    /**
     * Group by Competitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionsGroupByArgs} args - Group by arguments.
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
      T extends CompetitionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompetitionsGroupByArgs['orderBy'] }
        : { orderBy?: CompetitionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompetitionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompetitionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Competitions model
   */
  readonly fields: CompetitionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Competitions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompetitionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    registrations<T extends Competitions$registrationsArgs<ExtArgs> = {}>(args?: Subset<T, Competitions$registrationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistrationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Competitions model
   */
  interface CompetitionsFieldRefs {
    readonly competitionId: FieldRef<"Competitions", 'String'>
    readonly title: FieldRef<"Competitions", 'String'>
    readonly description: FieldRef<"Competitions", 'String'>
    readonly tags: FieldRef<"Competitions", 'String[]'>
    readonly capacity: FieldRef<"Competitions", 'Int'>
    readonly registeredCount: FieldRef<"Competitions", 'Int'>
    readonly regDeadLine: FieldRef<"Competitions", 'DateTime'>
    readonly startDate: FieldRef<"Competitions", 'DateTime'>
    readonly createdAt: FieldRef<"Competitions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Competitions findUnique
   */
  export type CompetitionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competitions
     */
    select?: CompetitionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competitions
     */
    omit?: CompetitionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionsInclude<ExtArgs> | null
    /**
     * Filter, which Competitions to fetch.
     */
    where: CompetitionsWhereUniqueInput
  }

  /**
   * Competitions findUniqueOrThrow
   */
  export type CompetitionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competitions
     */
    select?: CompetitionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competitions
     */
    omit?: CompetitionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionsInclude<ExtArgs> | null
    /**
     * Filter, which Competitions to fetch.
     */
    where: CompetitionsWhereUniqueInput
  }

  /**
   * Competitions findFirst
   */
  export type CompetitionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competitions
     */
    select?: CompetitionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competitions
     */
    omit?: CompetitionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionsInclude<ExtArgs> | null
    /**
     * Filter, which Competitions to fetch.
     */
    where?: CompetitionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Competitions to fetch.
     */
    orderBy?: CompetitionsOrderByWithRelationInput | CompetitionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Competitions.
     */
    cursor?: CompetitionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Competitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Competitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Competitions.
     */
    distinct?: CompetitionsScalarFieldEnum | CompetitionsScalarFieldEnum[]
  }

  /**
   * Competitions findFirstOrThrow
   */
  export type CompetitionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competitions
     */
    select?: CompetitionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competitions
     */
    omit?: CompetitionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionsInclude<ExtArgs> | null
    /**
     * Filter, which Competitions to fetch.
     */
    where?: CompetitionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Competitions to fetch.
     */
    orderBy?: CompetitionsOrderByWithRelationInput | CompetitionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Competitions.
     */
    cursor?: CompetitionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Competitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Competitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Competitions.
     */
    distinct?: CompetitionsScalarFieldEnum | CompetitionsScalarFieldEnum[]
  }

  /**
   * Competitions findMany
   */
  export type CompetitionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competitions
     */
    select?: CompetitionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competitions
     */
    omit?: CompetitionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionsInclude<ExtArgs> | null
    /**
     * Filter, which Competitions to fetch.
     */
    where?: CompetitionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Competitions to fetch.
     */
    orderBy?: CompetitionsOrderByWithRelationInput | CompetitionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Competitions.
     */
    cursor?: CompetitionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Competitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Competitions.
     */
    skip?: number
    distinct?: CompetitionsScalarFieldEnum | CompetitionsScalarFieldEnum[]
  }

  /**
   * Competitions create
   */
  export type CompetitionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competitions
     */
    select?: CompetitionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competitions
     */
    omit?: CompetitionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionsInclude<ExtArgs> | null
    /**
     * The data needed to create a Competitions.
     */
    data: XOR<CompetitionsCreateInput, CompetitionsUncheckedCreateInput>
  }

  /**
   * Competitions createMany
   */
  export type CompetitionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Competitions.
     */
    data: CompetitionsCreateManyInput | CompetitionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Competitions createManyAndReturn
   */
  export type CompetitionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competitions
     */
    select?: CompetitionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Competitions
     */
    omit?: CompetitionsOmit<ExtArgs> | null
    /**
     * The data used to create many Competitions.
     */
    data: CompetitionsCreateManyInput | CompetitionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Competitions update
   */
  export type CompetitionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competitions
     */
    select?: CompetitionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competitions
     */
    omit?: CompetitionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionsInclude<ExtArgs> | null
    /**
     * The data needed to update a Competitions.
     */
    data: XOR<CompetitionsUpdateInput, CompetitionsUncheckedUpdateInput>
    /**
     * Choose, which Competitions to update.
     */
    where: CompetitionsWhereUniqueInput
  }

  /**
   * Competitions updateMany
   */
  export type CompetitionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Competitions.
     */
    data: XOR<CompetitionsUpdateManyMutationInput, CompetitionsUncheckedUpdateManyInput>
    /**
     * Filter which Competitions to update
     */
    where?: CompetitionsWhereInput
    /**
     * Limit how many Competitions to update.
     */
    limit?: number
  }

  /**
   * Competitions updateManyAndReturn
   */
  export type CompetitionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competitions
     */
    select?: CompetitionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Competitions
     */
    omit?: CompetitionsOmit<ExtArgs> | null
    /**
     * The data used to update Competitions.
     */
    data: XOR<CompetitionsUpdateManyMutationInput, CompetitionsUncheckedUpdateManyInput>
    /**
     * Filter which Competitions to update
     */
    where?: CompetitionsWhereInput
    /**
     * Limit how many Competitions to update.
     */
    limit?: number
  }

  /**
   * Competitions upsert
   */
  export type CompetitionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competitions
     */
    select?: CompetitionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competitions
     */
    omit?: CompetitionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionsInclude<ExtArgs> | null
    /**
     * The filter to search for the Competitions to update in case it exists.
     */
    where: CompetitionsWhereUniqueInput
    /**
     * In case the Competitions found by the `where` argument doesn't exist, create a new Competitions with this data.
     */
    create: XOR<CompetitionsCreateInput, CompetitionsUncheckedCreateInput>
    /**
     * In case the Competitions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompetitionsUpdateInput, CompetitionsUncheckedUpdateInput>
  }

  /**
   * Competitions delete
   */
  export type CompetitionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competitions
     */
    select?: CompetitionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competitions
     */
    omit?: CompetitionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionsInclude<ExtArgs> | null
    /**
     * Filter which Competitions to delete.
     */
    where: CompetitionsWhereUniqueInput
  }

  /**
   * Competitions deleteMany
   */
  export type CompetitionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Competitions to delete
     */
    where?: CompetitionsWhereInput
    /**
     * Limit how many Competitions to delete.
     */
    limit?: number
  }

  /**
   * Competitions.registrations
   */
  export type Competitions$registrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registrations
     */
    select?: RegistrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registrations
     */
    omit?: RegistrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationsInclude<ExtArgs> | null
    where?: RegistrationsWhereInput
    orderBy?: RegistrationsOrderByWithRelationInput | RegistrationsOrderByWithRelationInput[]
    cursor?: RegistrationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegistrationsScalarFieldEnum | RegistrationsScalarFieldEnum[]
  }

  /**
   * Competitions without action
   */
  export type CompetitionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competitions
     */
    select?: CompetitionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competitions
     */
    omit?: CompetitionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionsInclude<ExtArgs> | null
  }


  /**
   * Model Registrations
   */

  export type AggregateRegistrations = {
    _count: RegistrationsCountAggregateOutputType | null
    _min: RegistrationsMinAggregateOutputType | null
    _max: RegistrationsMaxAggregateOutputType | null
  }

  export type RegistrationsMinAggregateOutputType = {
    registrationID: string | null
    userId: string | null
    competitionId: string | null
    registrationStatus: $Enums.RegistrationStatus | null
    registeredAt: Date | null
  }

  export type RegistrationsMaxAggregateOutputType = {
    registrationID: string | null
    userId: string | null
    competitionId: string | null
    registrationStatus: $Enums.RegistrationStatus | null
    registeredAt: Date | null
  }

  export type RegistrationsCountAggregateOutputType = {
    registrationID: number
    userId: number
    competitionId: number
    registrationStatus: number
    registeredAt: number
    _all: number
  }


  export type RegistrationsMinAggregateInputType = {
    registrationID?: true
    userId?: true
    competitionId?: true
    registrationStatus?: true
    registeredAt?: true
  }

  export type RegistrationsMaxAggregateInputType = {
    registrationID?: true
    userId?: true
    competitionId?: true
    registrationStatus?: true
    registeredAt?: true
  }

  export type RegistrationsCountAggregateInputType = {
    registrationID?: true
    userId?: true
    competitionId?: true
    registrationStatus?: true
    registeredAt?: true
    _all?: true
  }

  export type RegistrationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Registrations to aggregate.
     */
    where?: RegistrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registrations to fetch.
     */
    orderBy?: RegistrationsOrderByWithRelationInput | RegistrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegistrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Registrations
    **/
    _count?: true | RegistrationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegistrationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegistrationsMaxAggregateInputType
  }

  export type GetRegistrationsAggregateType<T extends RegistrationsAggregateArgs> = {
        [P in keyof T & keyof AggregateRegistrations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegistrations[P]>
      : GetScalarType<T[P], AggregateRegistrations[P]>
  }




  export type RegistrationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistrationsWhereInput
    orderBy?: RegistrationsOrderByWithAggregationInput | RegistrationsOrderByWithAggregationInput[]
    by: RegistrationsScalarFieldEnum[] | RegistrationsScalarFieldEnum
    having?: RegistrationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegistrationsCountAggregateInputType | true
    _min?: RegistrationsMinAggregateInputType
    _max?: RegistrationsMaxAggregateInputType
  }

  export type RegistrationsGroupByOutputType = {
    registrationID: string
    userId: string
    competitionId: string
    registrationStatus: $Enums.RegistrationStatus
    registeredAt: Date
    _count: RegistrationsCountAggregateOutputType | null
    _min: RegistrationsMinAggregateOutputType | null
    _max: RegistrationsMaxAggregateOutputType | null
  }

  type GetRegistrationsGroupByPayload<T extends RegistrationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegistrationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegistrationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegistrationsGroupByOutputType[P]>
            : GetScalarType<T[P], RegistrationsGroupByOutputType[P]>
        }
      >
    >


  export type RegistrationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    registrationID?: boolean
    userId?: boolean
    competitionId?: boolean
    registrationStatus?: boolean
    registeredAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    competition?: boolean | CompetitionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registrations"]>

  export type RegistrationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    registrationID?: boolean
    userId?: boolean
    competitionId?: boolean
    registrationStatus?: boolean
    registeredAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    competition?: boolean | CompetitionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registrations"]>

  export type RegistrationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    registrationID?: boolean
    userId?: boolean
    competitionId?: boolean
    registrationStatus?: boolean
    registeredAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    competition?: boolean | CompetitionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registrations"]>

  export type RegistrationsSelectScalar = {
    registrationID?: boolean
    userId?: boolean
    competitionId?: boolean
    registrationStatus?: boolean
    registeredAt?: boolean
  }

  export type RegistrationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"registrationID" | "userId" | "competitionId" | "registrationStatus" | "registeredAt", ExtArgs["result"]["registrations"]>
  export type RegistrationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    competition?: boolean | CompetitionsDefaultArgs<ExtArgs>
  }
  export type RegistrationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    competition?: boolean | CompetitionsDefaultArgs<ExtArgs>
  }
  export type RegistrationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    competition?: boolean | CompetitionsDefaultArgs<ExtArgs>
  }

  export type $RegistrationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Registrations"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      competition: Prisma.$CompetitionsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      registrationID: string
      userId: string
      competitionId: string
      registrationStatus: $Enums.RegistrationStatus
      registeredAt: Date
    }, ExtArgs["result"]["registrations"]>
    composites: {}
  }

  type RegistrationsGetPayload<S extends boolean | null | undefined | RegistrationsDefaultArgs> = $Result.GetResult<Prisma.$RegistrationsPayload, S>

  type RegistrationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RegistrationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegistrationsCountAggregateInputType | true
    }

  export interface RegistrationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Registrations'], meta: { name: 'Registrations' } }
    /**
     * Find zero or one Registrations that matches the filter.
     * @param {RegistrationsFindUniqueArgs} args - Arguments to find a Registrations
     * @example
     * // Get one Registrations
     * const registrations = await prisma.registrations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegistrationsFindUniqueArgs>(args: SelectSubset<T, RegistrationsFindUniqueArgs<ExtArgs>>): Prisma__RegistrationsClient<$Result.GetResult<Prisma.$RegistrationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Registrations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegistrationsFindUniqueOrThrowArgs} args - Arguments to find a Registrations
     * @example
     * // Get one Registrations
     * const registrations = await prisma.registrations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegistrationsFindUniqueOrThrowArgs>(args: SelectSubset<T, RegistrationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegistrationsClient<$Result.GetResult<Prisma.$RegistrationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Registrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationsFindFirstArgs} args - Arguments to find a Registrations
     * @example
     * // Get one Registrations
     * const registrations = await prisma.registrations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegistrationsFindFirstArgs>(args?: SelectSubset<T, RegistrationsFindFirstArgs<ExtArgs>>): Prisma__RegistrationsClient<$Result.GetResult<Prisma.$RegistrationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Registrations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationsFindFirstOrThrowArgs} args - Arguments to find a Registrations
     * @example
     * // Get one Registrations
     * const registrations = await prisma.registrations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegistrationsFindFirstOrThrowArgs>(args?: SelectSubset<T, RegistrationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegistrationsClient<$Result.GetResult<Prisma.$RegistrationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Registrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Registrations
     * const registrations = await prisma.registrations.findMany()
     * 
     * // Get first 10 Registrations
     * const registrations = await prisma.registrations.findMany({ take: 10 })
     * 
     * // Only select the `registrationID`
     * const registrationsWithRegistrationIDOnly = await prisma.registrations.findMany({ select: { registrationID: true } })
     * 
     */
    findMany<T extends RegistrationsFindManyArgs>(args?: SelectSubset<T, RegistrationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistrationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Registrations.
     * @param {RegistrationsCreateArgs} args - Arguments to create a Registrations.
     * @example
     * // Create one Registrations
     * const Registrations = await prisma.registrations.create({
     *   data: {
     *     // ... data to create a Registrations
     *   }
     * })
     * 
     */
    create<T extends RegistrationsCreateArgs>(args: SelectSubset<T, RegistrationsCreateArgs<ExtArgs>>): Prisma__RegistrationsClient<$Result.GetResult<Prisma.$RegistrationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Registrations.
     * @param {RegistrationsCreateManyArgs} args - Arguments to create many Registrations.
     * @example
     * // Create many Registrations
     * const registrations = await prisma.registrations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegistrationsCreateManyArgs>(args?: SelectSubset<T, RegistrationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Registrations and returns the data saved in the database.
     * @param {RegistrationsCreateManyAndReturnArgs} args - Arguments to create many Registrations.
     * @example
     * // Create many Registrations
     * const registrations = await prisma.registrations.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Registrations and only return the `registrationID`
     * const registrationsWithRegistrationIDOnly = await prisma.registrations.createManyAndReturn({
     *   select: { registrationID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RegistrationsCreateManyAndReturnArgs>(args?: SelectSubset<T, RegistrationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistrationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Registrations.
     * @param {RegistrationsDeleteArgs} args - Arguments to delete one Registrations.
     * @example
     * // Delete one Registrations
     * const Registrations = await prisma.registrations.delete({
     *   where: {
     *     // ... filter to delete one Registrations
     *   }
     * })
     * 
     */
    delete<T extends RegistrationsDeleteArgs>(args: SelectSubset<T, RegistrationsDeleteArgs<ExtArgs>>): Prisma__RegistrationsClient<$Result.GetResult<Prisma.$RegistrationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Registrations.
     * @param {RegistrationsUpdateArgs} args - Arguments to update one Registrations.
     * @example
     * // Update one Registrations
     * const registrations = await prisma.registrations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegistrationsUpdateArgs>(args: SelectSubset<T, RegistrationsUpdateArgs<ExtArgs>>): Prisma__RegistrationsClient<$Result.GetResult<Prisma.$RegistrationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Registrations.
     * @param {RegistrationsDeleteManyArgs} args - Arguments to filter Registrations to delete.
     * @example
     * // Delete a few Registrations
     * const { count } = await prisma.registrations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegistrationsDeleteManyArgs>(args?: SelectSubset<T, RegistrationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Registrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Registrations
     * const registrations = await prisma.registrations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegistrationsUpdateManyArgs>(args: SelectSubset<T, RegistrationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Registrations and returns the data updated in the database.
     * @param {RegistrationsUpdateManyAndReturnArgs} args - Arguments to update many Registrations.
     * @example
     * // Update many Registrations
     * const registrations = await prisma.registrations.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Registrations and only return the `registrationID`
     * const registrationsWithRegistrationIDOnly = await prisma.registrations.updateManyAndReturn({
     *   select: { registrationID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RegistrationsUpdateManyAndReturnArgs>(args: SelectSubset<T, RegistrationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistrationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Registrations.
     * @param {RegistrationsUpsertArgs} args - Arguments to update or create a Registrations.
     * @example
     * // Update or create a Registrations
     * const registrations = await prisma.registrations.upsert({
     *   create: {
     *     // ... data to create a Registrations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Registrations we want to update
     *   }
     * })
     */
    upsert<T extends RegistrationsUpsertArgs>(args: SelectSubset<T, RegistrationsUpsertArgs<ExtArgs>>): Prisma__RegistrationsClient<$Result.GetResult<Prisma.$RegistrationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Registrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationsCountArgs} args - Arguments to filter Registrations to count.
     * @example
     * // Count the number of Registrations
     * const count = await prisma.registrations.count({
     *   where: {
     *     // ... the filter for the Registrations we want to count
     *   }
     * })
    **/
    count<T extends RegistrationsCountArgs>(
      args?: Subset<T, RegistrationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegistrationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Registrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RegistrationsAggregateArgs>(args: Subset<T, RegistrationsAggregateArgs>): Prisma.PrismaPromise<GetRegistrationsAggregateType<T>>

    /**
     * Group by Registrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationsGroupByArgs} args - Group by arguments.
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
      T extends RegistrationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegistrationsGroupByArgs['orderBy'] }
        : { orderBy?: RegistrationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RegistrationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegistrationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Registrations model
   */
  readonly fields: RegistrationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Registrations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegistrationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    competition<T extends CompetitionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompetitionsDefaultArgs<ExtArgs>>): Prisma__CompetitionsClient<$Result.GetResult<Prisma.$CompetitionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Registrations model
   */
  interface RegistrationsFieldRefs {
    readonly registrationID: FieldRef<"Registrations", 'String'>
    readonly userId: FieldRef<"Registrations", 'String'>
    readonly competitionId: FieldRef<"Registrations", 'String'>
    readonly registrationStatus: FieldRef<"Registrations", 'RegistrationStatus'>
    readonly registeredAt: FieldRef<"Registrations", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Registrations findUnique
   */
  export type RegistrationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registrations
     */
    select?: RegistrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registrations
     */
    omit?: RegistrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationsInclude<ExtArgs> | null
    /**
     * Filter, which Registrations to fetch.
     */
    where: RegistrationsWhereUniqueInput
  }

  /**
   * Registrations findUniqueOrThrow
   */
  export type RegistrationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registrations
     */
    select?: RegistrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registrations
     */
    omit?: RegistrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationsInclude<ExtArgs> | null
    /**
     * Filter, which Registrations to fetch.
     */
    where: RegistrationsWhereUniqueInput
  }

  /**
   * Registrations findFirst
   */
  export type RegistrationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registrations
     */
    select?: RegistrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registrations
     */
    omit?: RegistrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationsInclude<ExtArgs> | null
    /**
     * Filter, which Registrations to fetch.
     */
    where?: RegistrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registrations to fetch.
     */
    orderBy?: RegistrationsOrderByWithRelationInput | RegistrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Registrations.
     */
    cursor?: RegistrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Registrations.
     */
    distinct?: RegistrationsScalarFieldEnum | RegistrationsScalarFieldEnum[]
  }

  /**
   * Registrations findFirstOrThrow
   */
  export type RegistrationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registrations
     */
    select?: RegistrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registrations
     */
    omit?: RegistrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationsInclude<ExtArgs> | null
    /**
     * Filter, which Registrations to fetch.
     */
    where?: RegistrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registrations to fetch.
     */
    orderBy?: RegistrationsOrderByWithRelationInput | RegistrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Registrations.
     */
    cursor?: RegistrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Registrations.
     */
    distinct?: RegistrationsScalarFieldEnum | RegistrationsScalarFieldEnum[]
  }

  /**
   * Registrations findMany
   */
  export type RegistrationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registrations
     */
    select?: RegistrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registrations
     */
    omit?: RegistrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationsInclude<ExtArgs> | null
    /**
     * Filter, which Registrations to fetch.
     */
    where?: RegistrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registrations to fetch.
     */
    orderBy?: RegistrationsOrderByWithRelationInput | RegistrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Registrations.
     */
    cursor?: RegistrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registrations.
     */
    skip?: number
    distinct?: RegistrationsScalarFieldEnum | RegistrationsScalarFieldEnum[]
  }

  /**
   * Registrations create
   */
  export type RegistrationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registrations
     */
    select?: RegistrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registrations
     */
    omit?: RegistrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationsInclude<ExtArgs> | null
    /**
     * The data needed to create a Registrations.
     */
    data: XOR<RegistrationsCreateInput, RegistrationsUncheckedCreateInput>
  }

  /**
   * Registrations createMany
   */
  export type RegistrationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Registrations.
     */
    data: RegistrationsCreateManyInput | RegistrationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Registrations createManyAndReturn
   */
  export type RegistrationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registrations
     */
    select?: RegistrationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Registrations
     */
    omit?: RegistrationsOmit<ExtArgs> | null
    /**
     * The data used to create many Registrations.
     */
    data: RegistrationsCreateManyInput | RegistrationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Registrations update
   */
  export type RegistrationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registrations
     */
    select?: RegistrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registrations
     */
    omit?: RegistrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationsInclude<ExtArgs> | null
    /**
     * The data needed to update a Registrations.
     */
    data: XOR<RegistrationsUpdateInput, RegistrationsUncheckedUpdateInput>
    /**
     * Choose, which Registrations to update.
     */
    where: RegistrationsWhereUniqueInput
  }

  /**
   * Registrations updateMany
   */
  export type RegistrationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Registrations.
     */
    data: XOR<RegistrationsUpdateManyMutationInput, RegistrationsUncheckedUpdateManyInput>
    /**
     * Filter which Registrations to update
     */
    where?: RegistrationsWhereInput
    /**
     * Limit how many Registrations to update.
     */
    limit?: number
  }

  /**
   * Registrations updateManyAndReturn
   */
  export type RegistrationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registrations
     */
    select?: RegistrationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Registrations
     */
    omit?: RegistrationsOmit<ExtArgs> | null
    /**
     * The data used to update Registrations.
     */
    data: XOR<RegistrationsUpdateManyMutationInput, RegistrationsUncheckedUpdateManyInput>
    /**
     * Filter which Registrations to update
     */
    where?: RegistrationsWhereInput
    /**
     * Limit how many Registrations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Registrations upsert
   */
  export type RegistrationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registrations
     */
    select?: RegistrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registrations
     */
    omit?: RegistrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationsInclude<ExtArgs> | null
    /**
     * The filter to search for the Registrations to update in case it exists.
     */
    where: RegistrationsWhereUniqueInput
    /**
     * In case the Registrations found by the `where` argument doesn't exist, create a new Registrations with this data.
     */
    create: XOR<RegistrationsCreateInput, RegistrationsUncheckedCreateInput>
    /**
     * In case the Registrations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegistrationsUpdateInput, RegistrationsUncheckedUpdateInput>
  }

  /**
   * Registrations delete
   */
  export type RegistrationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registrations
     */
    select?: RegistrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registrations
     */
    omit?: RegistrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationsInclude<ExtArgs> | null
    /**
     * Filter which Registrations to delete.
     */
    where: RegistrationsWhereUniqueInput
  }

  /**
   * Registrations deleteMany
   */
  export type RegistrationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Registrations to delete
     */
    where?: RegistrationsWhereInput
    /**
     * Limit how many Registrations to delete.
     */
    limit?: number
  }

  /**
   * Registrations without action
   */
  export type RegistrationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registrations
     */
    select?: RegistrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registrations
     */
    omit?: RegistrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationsInclude<ExtArgs> | null
  }


  /**
   * Model MailBox
   */

  export type AggregateMailBox = {
    _count: MailBoxCountAggregateOutputType | null
    _min: MailBoxMinAggregateOutputType | null
    _max: MailBoxMaxAggregateOutputType | null
  }

  export type MailBoxMinAggregateOutputType = {
    id: string | null
    userId: string | null
    to: string | null
    subject: string | null
    body: string | null
    sentAt: Date | null
  }

  export type MailBoxMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    to: string | null
    subject: string | null
    body: string | null
    sentAt: Date | null
  }

  export type MailBoxCountAggregateOutputType = {
    id: number
    userId: number
    to: number
    subject: number
    body: number
    sentAt: number
    _all: number
  }


  export type MailBoxMinAggregateInputType = {
    id?: true
    userId?: true
    to?: true
    subject?: true
    body?: true
    sentAt?: true
  }

  export type MailBoxMaxAggregateInputType = {
    id?: true
    userId?: true
    to?: true
    subject?: true
    body?: true
    sentAt?: true
  }

  export type MailBoxCountAggregateInputType = {
    id?: true
    userId?: true
    to?: true
    subject?: true
    body?: true
    sentAt?: true
    _all?: true
  }

  export type MailBoxAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MailBox to aggregate.
     */
    where?: MailBoxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MailBoxes to fetch.
     */
    orderBy?: MailBoxOrderByWithRelationInput | MailBoxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MailBoxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MailBoxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MailBoxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MailBoxes
    **/
    _count?: true | MailBoxCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MailBoxMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MailBoxMaxAggregateInputType
  }

  export type GetMailBoxAggregateType<T extends MailBoxAggregateArgs> = {
        [P in keyof T & keyof AggregateMailBox]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMailBox[P]>
      : GetScalarType<T[P], AggregateMailBox[P]>
  }




  export type MailBoxGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MailBoxWhereInput
    orderBy?: MailBoxOrderByWithAggregationInput | MailBoxOrderByWithAggregationInput[]
    by: MailBoxScalarFieldEnum[] | MailBoxScalarFieldEnum
    having?: MailBoxScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MailBoxCountAggregateInputType | true
    _min?: MailBoxMinAggregateInputType
    _max?: MailBoxMaxAggregateInputType
  }

  export type MailBoxGroupByOutputType = {
    id: string
    userId: string
    to: string
    subject: string
    body: string
    sentAt: Date
    _count: MailBoxCountAggregateOutputType | null
    _min: MailBoxMinAggregateOutputType | null
    _max: MailBoxMaxAggregateOutputType | null
  }

  type GetMailBoxGroupByPayload<T extends MailBoxGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MailBoxGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MailBoxGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MailBoxGroupByOutputType[P]>
            : GetScalarType<T[P], MailBoxGroupByOutputType[P]>
        }
      >
    >


  export type MailBoxSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    to?: boolean
    subject?: boolean
    body?: boolean
    sentAt?: boolean
  }, ExtArgs["result"]["mailBox"]>

  export type MailBoxSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    to?: boolean
    subject?: boolean
    body?: boolean
    sentAt?: boolean
  }, ExtArgs["result"]["mailBox"]>

  export type MailBoxSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    to?: boolean
    subject?: boolean
    body?: boolean
    sentAt?: boolean
  }, ExtArgs["result"]["mailBox"]>

  export type MailBoxSelectScalar = {
    id?: boolean
    userId?: boolean
    to?: boolean
    subject?: boolean
    body?: boolean
    sentAt?: boolean
  }

  export type MailBoxOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "to" | "subject" | "body" | "sentAt", ExtArgs["result"]["mailBox"]>

  export type $MailBoxPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MailBox"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      to: string
      subject: string
      body: string
      sentAt: Date
    }, ExtArgs["result"]["mailBox"]>
    composites: {}
  }

  type MailBoxGetPayload<S extends boolean | null | undefined | MailBoxDefaultArgs> = $Result.GetResult<Prisma.$MailBoxPayload, S>

  type MailBoxCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MailBoxFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MailBoxCountAggregateInputType | true
    }

  export interface MailBoxDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MailBox'], meta: { name: 'MailBox' } }
    /**
     * Find zero or one MailBox that matches the filter.
     * @param {MailBoxFindUniqueArgs} args - Arguments to find a MailBox
     * @example
     * // Get one MailBox
     * const mailBox = await prisma.mailBox.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MailBoxFindUniqueArgs>(args: SelectSubset<T, MailBoxFindUniqueArgs<ExtArgs>>): Prisma__MailBoxClient<$Result.GetResult<Prisma.$MailBoxPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MailBox that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MailBoxFindUniqueOrThrowArgs} args - Arguments to find a MailBox
     * @example
     * // Get one MailBox
     * const mailBox = await prisma.mailBox.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MailBoxFindUniqueOrThrowArgs>(args: SelectSubset<T, MailBoxFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MailBoxClient<$Result.GetResult<Prisma.$MailBoxPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MailBox that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailBoxFindFirstArgs} args - Arguments to find a MailBox
     * @example
     * // Get one MailBox
     * const mailBox = await prisma.mailBox.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MailBoxFindFirstArgs>(args?: SelectSubset<T, MailBoxFindFirstArgs<ExtArgs>>): Prisma__MailBoxClient<$Result.GetResult<Prisma.$MailBoxPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MailBox that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailBoxFindFirstOrThrowArgs} args - Arguments to find a MailBox
     * @example
     * // Get one MailBox
     * const mailBox = await prisma.mailBox.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MailBoxFindFirstOrThrowArgs>(args?: SelectSubset<T, MailBoxFindFirstOrThrowArgs<ExtArgs>>): Prisma__MailBoxClient<$Result.GetResult<Prisma.$MailBoxPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MailBoxes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailBoxFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MailBoxes
     * const mailBoxes = await prisma.mailBox.findMany()
     * 
     * // Get first 10 MailBoxes
     * const mailBoxes = await prisma.mailBox.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mailBoxWithIdOnly = await prisma.mailBox.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MailBoxFindManyArgs>(args?: SelectSubset<T, MailBoxFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MailBoxPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MailBox.
     * @param {MailBoxCreateArgs} args - Arguments to create a MailBox.
     * @example
     * // Create one MailBox
     * const MailBox = await prisma.mailBox.create({
     *   data: {
     *     // ... data to create a MailBox
     *   }
     * })
     * 
     */
    create<T extends MailBoxCreateArgs>(args: SelectSubset<T, MailBoxCreateArgs<ExtArgs>>): Prisma__MailBoxClient<$Result.GetResult<Prisma.$MailBoxPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MailBoxes.
     * @param {MailBoxCreateManyArgs} args - Arguments to create many MailBoxes.
     * @example
     * // Create many MailBoxes
     * const mailBox = await prisma.mailBox.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MailBoxCreateManyArgs>(args?: SelectSubset<T, MailBoxCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MailBoxes and returns the data saved in the database.
     * @param {MailBoxCreateManyAndReturnArgs} args - Arguments to create many MailBoxes.
     * @example
     * // Create many MailBoxes
     * const mailBox = await prisma.mailBox.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MailBoxes and only return the `id`
     * const mailBoxWithIdOnly = await prisma.mailBox.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MailBoxCreateManyAndReturnArgs>(args?: SelectSubset<T, MailBoxCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MailBoxPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MailBox.
     * @param {MailBoxDeleteArgs} args - Arguments to delete one MailBox.
     * @example
     * // Delete one MailBox
     * const MailBox = await prisma.mailBox.delete({
     *   where: {
     *     // ... filter to delete one MailBox
     *   }
     * })
     * 
     */
    delete<T extends MailBoxDeleteArgs>(args: SelectSubset<T, MailBoxDeleteArgs<ExtArgs>>): Prisma__MailBoxClient<$Result.GetResult<Prisma.$MailBoxPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MailBox.
     * @param {MailBoxUpdateArgs} args - Arguments to update one MailBox.
     * @example
     * // Update one MailBox
     * const mailBox = await prisma.mailBox.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MailBoxUpdateArgs>(args: SelectSubset<T, MailBoxUpdateArgs<ExtArgs>>): Prisma__MailBoxClient<$Result.GetResult<Prisma.$MailBoxPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MailBoxes.
     * @param {MailBoxDeleteManyArgs} args - Arguments to filter MailBoxes to delete.
     * @example
     * // Delete a few MailBoxes
     * const { count } = await prisma.mailBox.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MailBoxDeleteManyArgs>(args?: SelectSubset<T, MailBoxDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MailBoxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailBoxUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MailBoxes
     * const mailBox = await prisma.mailBox.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MailBoxUpdateManyArgs>(args: SelectSubset<T, MailBoxUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MailBoxes and returns the data updated in the database.
     * @param {MailBoxUpdateManyAndReturnArgs} args - Arguments to update many MailBoxes.
     * @example
     * // Update many MailBoxes
     * const mailBox = await prisma.mailBox.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MailBoxes and only return the `id`
     * const mailBoxWithIdOnly = await prisma.mailBox.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MailBoxUpdateManyAndReturnArgs>(args: SelectSubset<T, MailBoxUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MailBoxPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MailBox.
     * @param {MailBoxUpsertArgs} args - Arguments to update or create a MailBox.
     * @example
     * // Update or create a MailBox
     * const mailBox = await prisma.mailBox.upsert({
     *   create: {
     *     // ... data to create a MailBox
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MailBox we want to update
     *   }
     * })
     */
    upsert<T extends MailBoxUpsertArgs>(args: SelectSubset<T, MailBoxUpsertArgs<ExtArgs>>): Prisma__MailBoxClient<$Result.GetResult<Prisma.$MailBoxPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MailBoxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailBoxCountArgs} args - Arguments to filter MailBoxes to count.
     * @example
     * // Count the number of MailBoxes
     * const count = await prisma.mailBox.count({
     *   where: {
     *     // ... the filter for the MailBoxes we want to count
     *   }
     * })
    **/
    count<T extends MailBoxCountArgs>(
      args?: Subset<T, MailBoxCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MailBoxCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MailBox.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailBoxAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MailBoxAggregateArgs>(args: Subset<T, MailBoxAggregateArgs>): Prisma.PrismaPromise<GetMailBoxAggregateType<T>>

    /**
     * Group by MailBox.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailBoxGroupByArgs} args - Group by arguments.
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
      T extends MailBoxGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MailBoxGroupByArgs['orderBy'] }
        : { orderBy?: MailBoxGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MailBoxGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMailBoxGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MailBox model
   */
  readonly fields: MailBoxFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MailBox.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MailBoxClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MailBox model
   */
  interface MailBoxFieldRefs {
    readonly id: FieldRef<"MailBox", 'String'>
    readonly userId: FieldRef<"MailBox", 'String'>
    readonly to: FieldRef<"MailBox", 'String'>
    readonly subject: FieldRef<"MailBox", 'String'>
    readonly body: FieldRef<"MailBox", 'String'>
    readonly sentAt: FieldRef<"MailBox", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MailBox findUnique
   */
  export type MailBoxFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailBox
     */
    select?: MailBoxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MailBox
     */
    omit?: MailBoxOmit<ExtArgs> | null
    /**
     * Filter, which MailBox to fetch.
     */
    where: MailBoxWhereUniqueInput
  }

  /**
   * MailBox findUniqueOrThrow
   */
  export type MailBoxFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailBox
     */
    select?: MailBoxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MailBox
     */
    omit?: MailBoxOmit<ExtArgs> | null
    /**
     * Filter, which MailBox to fetch.
     */
    where: MailBoxWhereUniqueInput
  }

  /**
   * MailBox findFirst
   */
  export type MailBoxFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailBox
     */
    select?: MailBoxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MailBox
     */
    omit?: MailBoxOmit<ExtArgs> | null
    /**
     * Filter, which MailBox to fetch.
     */
    where?: MailBoxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MailBoxes to fetch.
     */
    orderBy?: MailBoxOrderByWithRelationInput | MailBoxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MailBoxes.
     */
    cursor?: MailBoxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MailBoxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MailBoxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MailBoxes.
     */
    distinct?: MailBoxScalarFieldEnum | MailBoxScalarFieldEnum[]
  }

  /**
   * MailBox findFirstOrThrow
   */
  export type MailBoxFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailBox
     */
    select?: MailBoxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MailBox
     */
    omit?: MailBoxOmit<ExtArgs> | null
    /**
     * Filter, which MailBox to fetch.
     */
    where?: MailBoxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MailBoxes to fetch.
     */
    orderBy?: MailBoxOrderByWithRelationInput | MailBoxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MailBoxes.
     */
    cursor?: MailBoxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MailBoxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MailBoxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MailBoxes.
     */
    distinct?: MailBoxScalarFieldEnum | MailBoxScalarFieldEnum[]
  }

  /**
   * MailBox findMany
   */
  export type MailBoxFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailBox
     */
    select?: MailBoxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MailBox
     */
    omit?: MailBoxOmit<ExtArgs> | null
    /**
     * Filter, which MailBoxes to fetch.
     */
    where?: MailBoxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MailBoxes to fetch.
     */
    orderBy?: MailBoxOrderByWithRelationInput | MailBoxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MailBoxes.
     */
    cursor?: MailBoxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MailBoxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MailBoxes.
     */
    skip?: number
    distinct?: MailBoxScalarFieldEnum | MailBoxScalarFieldEnum[]
  }

  /**
   * MailBox create
   */
  export type MailBoxCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailBox
     */
    select?: MailBoxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MailBox
     */
    omit?: MailBoxOmit<ExtArgs> | null
    /**
     * The data needed to create a MailBox.
     */
    data: XOR<MailBoxCreateInput, MailBoxUncheckedCreateInput>
  }

  /**
   * MailBox createMany
   */
  export type MailBoxCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MailBoxes.
     */
    data: MailBoxCreateManyInput | MailBoxCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MailBox createManyAndReturn
   */
  export type MailBoxCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailBox
     */
    select?: MailBoxSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MailBox
     */
    omit?: MailBoxOmit<ExtArgs> | null
    /**
     * The data used to create many MailBoxes.
     */
    data: MailBoxCreateManyInput | MailBoxCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MailBox update
   */
  export type MailBoxUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailBox
     */
    select?: MailBoxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MailBox
     */
    omit?: MailBoxOmit<ExtArgs> | null
    /**
     * The data needed to update a MailBox.
     */
    data: XOR<MailBoxUpdateInput, MailBoxUncheckedUpdateInput>
    /**
     * Choose, which MailBox to update.
     */
    where: MailBoxWhereUniqueInput
  }

  /**
   * MailBox updateMany
   */
  export type MailBoxUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MailBoxes.
     */
    data: XOR<MailBoxUpdateManyMutationInput, MailBoxUncheckedUpdateManyInput>
    /**
     * Filter which MailBoxes to update
     */
    where?: MailBoxWhereInput
    /**
     * Limit how many MailBoxes to update.
     */
    limit?: number
  }

  /**
   * MailBox updateManyAndReturn
   */
  export type MailBoxUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailBox
     */
    select?: MailBoxSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MailBox
     */
    omit?: MailBoxOmit<ExtArgs> | null
    /**
     * The data used to update MailBoxes.
     */
    data: XOR<MailBoxUpdateManyMutationInput, MailBoxUncheckedUpdateManyInput>
    /**
     * Filter which MailBoxes to update
     */
    where?: MailBoxWhereInput
    /**
     * Limit how many MailBoxes to update.
     */
    limit?: number
  }

  /**
   * MailBox upsert
   */
  export type MailBoxUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailBox
     */
    select?: MailBoxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MailBox
     */
    omit?: MailBoxOmit<ExtArgs> | null
    /**
     * The filter to search for the MailBox to update in case it exists.
     */
    where: MailBoxWhereUniqueInput
    /**
     * In case the MailBox found by the `where` argument doesn't exist, create a new MailBox with this data.
     */
    create: XOR<MailBoxCreateInput, MailBoxUncheckedCreateInput>
    /**
     * In case the MailBox was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MailBoxUpdateInput, MailBoxUncheckedUpdateInput>
  }

  /**
   * MailBox delete
   */
  export type MailBoxDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailBox
     */
    select?: MailBoxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MailBox
     */
    omit?: MailBoxOmit<ExtArgs> | null
    /**
     * Filter which MailBox to delete.
     */
    where: MailBoxWhereUniqueInput
  }

  /**
   * MailBox deleteMany
   */
  export type MailBoxDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MailBoxes to delete
     */
    where?: MailBoxWhereInput
    /**
     * Limit how many MailBoxes to delete.
     */
    limit?: number
  }

  /**
   * MailBox without action
   */
  export type MailBoxDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailBox
     */
    select?: MailBoxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MailBox
     */
    omit?: MailBoxOmit<ExtArgs> | null
  }


  /**
   * Model FailedJobs
   */

  export type AggregateFailedJobs = {
    _count: FailedJobsCountAggregateOutputType | null
    _min: FailedJobsMinAggregateOutputType | null
    _max: FailedJobsMaxAggregateOutputType | null
  }

  export type FailedJobsMinAggregateOutputType = {
    id: string | null
    jobId: string | null
    reason: string | null
    failedAt: Date | null
  }

  export type FailedJobsMaxAggregateOutputType = {
    id: string | null
    jobId: string | null
    reason: string | null
    failedAt: Date | null
  }

  export type FailedJobsCountAggregateOutputType = {
    id: number
    jobId: number
    payload: number
    reason: number
    failedAt: number
    _all: number
  }


  export type FailedJobsMinAggregateInputType = {
    id?: true
    jobId?: true
    reason?: true
    failedAt?: true
  }

  export type FailedJobsMaxAggregateInputType = {
    id?: true
    jobId?: true
    reason?: true
    failedAt?: true
  }

  export type FailedJobsCountAggregateInputType = {
    id?: true
    jobId?: true
    payload?: true
    reason?: true
    failedAt?: true
    _all?: true
  }

  export type FailedJobsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FailedJobs to aggregate.
     */
    where?: FailedJobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FailedJobs to fetch.
     */
    orderBy?: FailedJobsOrderByWithRelationInput | FailedJobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FailedJobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FailedJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FailedJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FailedJobs
    **/
    _count?: true | FailedJobsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FailedJobsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FailedJobsMaxAggregateInputType
  }

  export type GetFailedJobsAggregateType<T extends FailedJobsAggregateArgs> = {
        [P in keyof T & keyof AggregateFailedJobs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFailedJobs[P]>
      : GetScalarType<T[P], AggregateFailedJobs[P]>
  }




  export type FailedJobsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FailedJobsWhereInput
    orderBy?: FailedJobsOrderByWithAggregationInput | FailedJobsOrderByWithAggregationInput[]
    by: FailedJobsScalarFieldEnum[] | FailedJobsScalarFieldEnum
    having?: FailedJobsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FailedJobsCountAggregateInputType | true
    _min?: FailedJobsMinAggregateInputType
    _max?: FailedJobsMaxAggregateInputType
  }

  export type FailedJobsGroupByOutputType = {
    id: string
    jobId: string
    payload: JsonValue
    reason: string
    failedAt: Date
    _count: FailedJobsCountAggregateOutputType | null
    _min: FailedJobsMinAggregateOutputType | null
    _max: FailedJobsMaxAggregateOutputType | null
  }

  type GetFailedJobsGroupByPayload<T extends FailedJobsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FailedJobsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FailedJobsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FailedJobsGroupByOutputType[P]>
            : GetScalarType<T[P], FailedJobsGroupByOutputType[P]>
        }
      >
    >


  export type FailedJobsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    payload?: boolean
    reason?: boolean
    failedAt?: boolean
  }, ExtArgs["result"]["failedJobs"]>

  export type FailedJobsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    payload?: boolean
    reason?: boolean
    failedAt?: boolean
  }, ExtArgs["result"]["failedJobs"]>

  export type FailedJobsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    payload?: boolean
    reason?: boolean
    failedAt?: boolean
  }, ExtArgs["result"]["failedJobs"]>

  export type FailedJobsSelectScalar = {
    id?: boolean
    jobId?: boolean
    payload?: boolean
    reason?: boolean
    failedAt?: boolean
  }

  export type FailedJobsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jobId" | "payload" | "reason" | "failedAt", ExtArgs["result"]["failedJobs"]>

  export type $FailedJobsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FailedJobs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      jobId: string
      payload: Prisma.JsonValue
      reason: string
      failedAt: Date
    }, ExtArgs["result"]["failedJobs"]>
    composites: {}
  }

  type FailedJobsGetPayload<S extends boolean | null | undefined | FailedJobsDefaultArgs> = $Result.GetResult<Prisma.$FailedJobsPayload, S>

  type FailedJobsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FailedJobsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FailedJobsCountAggregateInputType | true
    }

  export interface FailedJobsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FailedJobs'], meta: { name: 'FailedJobs' } }
    /**
     * Find zero or one FailedJobs that matches the filter.
     * @param {FailedJobsFindUniqueArgs} args - Arguments to find a FailedJobs
     * @example
     * // Get one FailedJobs
     * const failedJobs = await prisma.failedJobs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FailedJobsFindUniqueArgs>(args: SelectSubset<T, FailedJobsFindUniqueArgs<ExtArgs>>): Prisma__FailedJobsClient<$Result.GetResult<Prisma.$FailedJobsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FailedJobs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FailedJobsFindUniqueOrThrowArgs} args - Arguments to find a FailedJobs
     * @example
     * // Get one FailedJobs
     * const failedJobs = await prisma.failedJobs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FailedJobsFindUniqueOrThrowArgs>(args: SelectSubset<T, FailedJobsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FailedJobsClient<$Result.GetResult<Prisma.$FailedJobsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FailedJobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FailedJobsFindFirstArgs} args - Arguments to find a FailedJobs
     * @example
     * // Get one FailedJobs
     * const failedJobs = await prisma.failedJobs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FailedJobsFindFirstArgs>(args?: SelectSubset<T, FailedJobsFindFirstArgs<ExtArgs>>): Prisma__FailedJobsClient<$Result.GetResult<Prisma.$FailedJobsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FailedJobs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FailedJobsFindFirstOrThrowArgs} args - Arguments to find a FailedJobs
     * @example
     * // Get one FailedJobs
     * const failedJobs = await prisma.failedJobs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FailedJobsFindFirstOrThrowArgs>(args?: SelectSubset<T, FailedJobsFindFirstOrThrowArgs<ExtArgs>>): Prisma__FailedJobsClient<$Result.GetResult<Prisma.$FailedJobsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FailedJobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FailedJobsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FailedJobs
     * const failedJobs = await prisma.failedJobs.findMany()
     * 
     * // Get first 10 FailedJobs
     * const failedJobs = await prisma.failedJobs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const failedJobsWithIdOnly = await prisma.failedJobs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FailedJobsFindManyArgs>(args?: SelectSubset<T, FailedJobsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FailedJobsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FailedJobs.
     * @param {FailedJobsCreateArgs} args - Arguments to create a FailedJobs.
     * @example
     * // Create one FailedJobs
     * const FailedJobs = await prisma.failedJobs.create({
     *   data: {
     *     // ... data to create a FailedJobs
     *   }
     * })
     * 
     */
    create<T extends FailedJobsCreateArgs>(args: SelectSubset<T, FailedJobsCreateArgs<ExtArgs>>): Prisma__FailedJobsClient<$Result.GetResult<Prisma.$FailedJobsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FailedJobs.
     * @param {FailedJobsCreateManyArgs} args - Arguments to create many FailedJobs.
     * @example
     * // Create many FailedJobs
     * const failedJobs = await prisma.failedJobs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FailedJobsCreateManyArgs>(args?: SelectSubset<T, FailedJobsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FailedJobs and returns the data saved in the database.
     * @param {FailedJobsCreateManyAndReturnArgs} args - Arguments to create many FailedJobs.
     * @example
     * // Create many FailedJobs
     * const failedJobs = await prisma.failedJobs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FailedJobs and only return the `id`
     * const failedJobsWithIdOnly = await prisma.failedJobs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FailedJobsCreateManyAndReturnArgs>(args?: SelectSubset<T, FailedJobsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FailedJobsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FailedJobs.
     * @param {FailedJobsDeleteArgs} args - Arguments to delete one FailedJobs.
     * @example
     * // Delete one FailedJobs
     * const FailedJobs = await prisma.failedJobs.delete({
     *   where: {
     *     // ... filter to delete one FailedJobs
     *   }
     * })
     * 
     */
    delete<T extends FailedJobsDeleteArgs>(args: SelectSubset<T, FailedJobsDeleteArgs<ExtArgs>>): Prisma__FailedJobsClient<$Result.GetResult<Prisma.$FailedJobsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FailedJobs.
     * @param {FailedJobsUpdateArgs} args - Arguments to update one FailedJobs.
     * @example
     * // Update one FailedJobs
     * const failedJobs = await prisma.failedJobs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FailedJobsUpdateArgs>(args: SelectSubset<T, FailedJobsUpdateArgs<ExtArgs>>): Prisma__FailedJobsClient<$Result.GetResult<Prisma.$FailedJobsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FailedJobs.
     * @param {FailedJobsDeleteManyArgs} args - Arguments to filter FailedJobs to delete.
     * @example
     * // Delete a few FailedJobs
     * const { count } = await prisma.failedJobs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FailedJobsDeleteManyArgs>(args?: SelectSubset<T, FailedJobsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FailedJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FailedJobsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FailedJobs
     * const failedJobs = await prisma.failedJobs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FailedJobsUpdateManyArgs>(args: SelectSubset<T, FailedJobsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FailedJobs and returns the data updated in the database.
     * @param {FailedJobsUpdateManyAndReturnArgs} args - Arguments to update many FailedJobs.
     * @example
     * // Update many FailedJobs
     * const failedJobs = await prisma.failedJobs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FailedJobs and only return the `id`
     * const failedJobsWithIdOnly = await prisma.failedJobs.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FailedJobsUpdateManyAndReturnArgs>(args: SelectSubset<T, FailedJobsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FailedJobsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FailedJobs.
     * @param {FailedJobsUpsertArgs} args - Arguments to update or create a FailedJobs.
     * @example
     * // Update or create a FailedJobs
     * const failedJobs = await prisma.failedJobs.upsert({
     *   create: {
     *     // ... data to create a FailedJobs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FailedJobs we want to update
     *   }
     * })
     */
    upsert<T extends FailedJobsUpsertArgs>(args: SelectSubset<T, FailedJobsUpsertArgs<ExtArgs>>): Prisma__FailedJobsClient<$Result.GetResult<Prisma.$FailedJobsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FailedJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FailedJobsCountArgs} args - Arguments to filter FailedJobs to count.
     * @example
     * // Count the number of FailedJobs
     * const count = await prisma.failedJobs.count({
     *   where: {
     *     // ... the filter for the FailedJobs we want to count
     *   }
     * })
    **/
    count<T extends FailedJobsCountArgs>(
      args?: Subset<T, FailedJobsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FailedJobsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FailedJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FailedJobsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FailedJobsAggregateArgs>(args: Subset<T, FailedJobsAggregateArgs>): Prisma.PrismaPromise<GetFailedJobsAggregateType<T>>

    /**
     * Group by FailedJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FailedJobsGroupByArgs} args - Group by arguments.
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
      T extends FailedJobsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FailedJobsGroupByArgs['orderBy'] }
        : { orderBy?: FailedJobsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FailedJobsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFailedJobsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FailedJobs model
   */
  readonly fields: FailedJobsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FailedJobs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FailedJobsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FailedJobs model
   */
  interface FailedJobsFieldRefs {
    readonly id: FieldRef<"FailedJobs", 'String'>
    readonly jobId: FieldRef<"FailedJobs", 'String'>
    readonly payload: FieldRef<"FailedJobs", 'Json'>
    readonly reason: FieldRef<"FailedJobs", 'String'>
    readonly failedAt: FieldRef<"FailedJobs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FailedJobs findUnique
   */
  export type FailedJobsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FailedJobs
     */
    select?: FailedJobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FailedJobs
     */
    omit?: FailedJobsOmit<ExtArgs> | null
    /**
     * Filter, which FailedJobs to fetch.
     */
    where: FailedJobsWhereUniqueInput
  }

  /**
   * FailedJobs findUniqueOrThrow
   */
  export type FailedJobsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FailedJobs
     */
    select?: FailedJobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FailedJobs
     */
    omit?: FailedJobsOmit<ExtArgs> | null
    /**
     * Filter, which FailedJobs to fetch.
     */
    where: FailedJobsWhereUniqueInput
  }

  /**
   * FailedJobs findFirst
   */
  export type FailedJobsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FailedJobs
     */
    select?: FailedJobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FailedJobs
     */
    omit?: FailedJobsOmit<ExtArgs> | null
    /**
     * Filter, which FailedJobs to fetch.
     */
    where?: FailedJobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FailedJobs to fetch.
     */
    orderBy?: FailedJobsOrderByWithRelationInput | FailedJobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FailedJobs.
     */
    cursor?: FailedJobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FailedJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FailedJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FailedJobs.
     */
    distinct?: FailedJobsScalarFieldEnum | FailedJobsScalarFieldEnum[]
  }

  /**
   * FailedJobs findFirstOrThrow
   */
  export type FailedJobsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FailedJobs
     */
    select?: FailedJobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FailedJobs
     */
    omit?: FailedJobsOmit<ExtArgs> | null
    /**
     * Filter, which FailedJobs to fetch.
     */
    where?: FailedJobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FailedJobs to fetch.
     */
    orderBy?: FailedJobsOrderByWithRelationInput | FailedJobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FailedJobs.
     */
    cursor?: FailedJobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FailedJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FailedJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FailedJobs.
     */
    distinct?: FailedJobsScalarFieldEnum | FailedJobsScalarFieldEnum[]
  }

  /**
   * FailedJobs findMany
   */
  export type FailedJobsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FailedJobs
     */
    select?: FailedJobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FailedJobs
     */
    omit?: FailedJobsOmit<ExtArgs> | null
    /**
     * Filter, which FailedJobs to fetch.
     */
    where?: FailedJobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FailedJobs to fetch.
     */
    orderBy?: FailedJobsOrderByWithRelationInput | FailedJobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FailedJobs.
     */
    cursor?: FailedJobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FailedJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FailedJobs.
     */
    skip?: number
    distinct?: FailedJobsScalarFieldEnum | FailedJobsScalarFieldEnum[]
  }

  /**
   * FailedJobs create
   */
  export type FailedJobsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FailedJobs
     */
    select?: FailedJobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FailedJobs
     */
    omit?: FailedJobsOmit<ExtArgs> | null
    /**
     * The data needed to create a FailedJobs.
     */
    data: XOR<FailedJobsCreateInput, FailedJobsUncheckedCreateInput>
  }

  /**
   * FailedJobs createMany
   */
  export type FailedJobsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FailedJobs.
     */
    data: FailedJobsCreateManyInput | FailedJobsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FailedJobs createManyAndReturn
   */
  export type FailedJobsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FailedJobs
     */
    select?: FailedJobsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FailedJobs
     */
    omit?: FailedJobsOmit<ExtArgs> | null
    /**
     * The data used to create many FailedJobs.
     */
    data: FailedJobsCreateManyInput | FailedJobsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FailedJobs update
   */
  export type FailedJobsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FailedJobs
     */
    select?: FailedJobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FailedJobs
     */
    omit?: FailedJobsOmit<ExtArgs> | null
    /**
     * The data needed to update a FailedJobs.
     */
    data: XOR<FailedJobsUpdateInput, FailedJobsUncheckedUpdateInput>
    /**
     * Choose, which FailedJobs to update.
     */
    where: FailedJobsWhereUniqueInput
  }

  /**
   * FailedJobs updateMany
   */
  export type FailedJobsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FailedJobs.
     */
    data: XOR<FailedJobsUpdateManyMutationInput, FailedJobsUncheckedUpdateManyInput>
    /**
     * Filter which FailedJobs to update
     */
    where?: FailedJobsWhereInput
    /**
     * Limit how many FailedJobs to update.
     */
    limit?: number
  }

  /**
   * FailedJobs updateManyAndReturn
   */
  export type FailedJobsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FailedJobs
     */
    select?: FailedJobsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FailedJobs
     */
    omit?: FailedJobsOmit<ExtArgs> | null
    /**
     * The data used to update FailedJobs.
     */
    data: XOR<FailedJobsUpdateManyMutationInput, FailedJobsUncheckedUpdateManyInput>
    /**
     * Filter which FailedJobs to update
     */
    where?: FailedJobsWhereInput
    /**
     * Limit how many FailedJobs to update.
     */
    limit?: number
  }

  /**
   * FailedJobs upsert
   */
  export type FailedJobsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FailedJobs
     */
    select?: FailedJobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FailedJobs
     */
    omit?: FailedJobsOmit<ExtArgs> | null
    /**
     * The filter to search for the FailedJobs to update in case it exists.
     */
    where: FailedJobsWhereUniqueInput
    /**
     * In case the FailedJobs found by the `where` argument doesn't exist, create a new FailedJobs with this data.
     */
    create: XOR<FailedJobsCreateInput, FailedJobsUncheckedCreateInput>
    /**
     * In case the FailedJobs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FailedJobsUpdateInput, FailedJobsUncheckedUpdateInput>
  }

  /**
   * FailedJobs delete
   */
  export type FailedJobsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FailedJobs
     */
    select?: FailedJobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FailedJobs
     */
    omit?: FailedJobsOmit<ExtArgs> | null
    /**
     * Filter which FailedJobs to delete.
     */
    where: FailedJobsWhereUniqueInput
  }

  /**
   * FailedJobs deleteMany
   */
  export type FailedJobsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FailedJobs to delete
     */
    where?: FailedJobsWhereInput
    /**
     * Limit how many FailedJobs to delete.
     */
    limit?: number
  }

  /**
   * FailedJobs without action
   */
  export type FailedJobsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FailedJobs
     */
    select?: FailedJobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FailedJobs
     */
    omit?: FailedJobsOmit<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    userId: 'userId',
    email: 'email',
    name: 'name',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CompetitionsScalarFieldEnum: {
    competitionId: 'competitionId',
    title: 'title',
    description: 'description',
    tags: 'tags',
    capacity: 'capacity',
    registeredCount: 'registeredCount',
    regDeadLine: 'regDeadLine',
    startDate: 'startDate',
    createdAt: 'createdAt'
  };

  export type CompetitionsScalarFieldEnum = (typeof CompetitionsScalarFieldEnum)[keyof typeof CompetitionsScalarFieldEnum]


  export const RegistrationsScalarFieldEnum: {
    registrationID: 'registrationID',
    userId: 'userId',
    competitionId: 'competitionId',
    registrationStatus: 'registrationStatus',
    registeredAt: 'registeredAt'
  };

  export type RegistrationsScalarFieldEnum = (typeof RegistrationsScalarFieldEnum)[keyof typeof RegistrationsScalarFieldEnum]


  export const MailBoxScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    to: 'to',
    subject: 'subject',
    body: 'body',
    sentAt: 'sentAt'
  };

  export type MailBoxScalarFieldEnum = (typeof MailBoxScalarFieldEnum)[keyof typeof MailBoxScalarFieldEnum]


  export const FailedJobsScalarFieldEnum: {
    id: 'id',
    jobId: 'jobId',
    payload: 'payload',
    reason: 'reason',
    failedAt: 'failedAt'
  };

  export type FailedJobsScalarFieldEnum = (typeof FailedJobsScalarFieldEnum)[keyof typeof FailedJobsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'RegistrationStatus'
   */
  export type EnumRegistrationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RegistrationStatus'>
    


  /**
   * Reference to a field of type 'RegistrationStatus[]'
   */
  export type ListEnumRegistrationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RegistrationStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    userId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    registrations?: RegistrationsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    userId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    registrations?: RegistrationsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    registrations?: RegistrationsListRelationFilter
  }, "userId" | "email">

  export type UserOrderByWithAggregationInput = {
    userId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CompetitionsWhereInput = {
    AND?: CompetitionsWhereInput | CompetitionsWhereInput[]
    OR?: CompetitionsWhereInput[]
    NOT?: CompetitionsWhereInput | CompetitionsWhereInput[]
    competitionId?: StringFilter<"Competitions"> | string
    title?: StringFilter<"Competitions"> | string
    description?: StringFilter<"Competitions"> | string
    tags?: StringNullableListFilter<"Competitions">
    capacity?: IntFilter<"Competitions"> | number
    registeredCount?: IntFilter<"Competitions"> | number
    regDeadLine?: DateTimeFilter<"Competitions"> | Date | string
    startDate?: DateTimeFilter<"Competitions"> | Date | string
    createdAt?: DateTimeFilter<"Competitions"> | Date | string
    registrations?: RegistrationsListRelationFilter
  }

  export type CompetitionsOrderByWithRelationInput = {
    competitionId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    tags?: SortOrder
    capacity?: SortOrder
    registeredCount?: SortOrder
    regDeadLine?: SortOrder
    startDate?: SortOrder
    createdAt?: SortOrder
    registrations?: RegistrationsOrderByRelationAggregateInput
  }

  export type CompetitionsWhereUniqueInput = Prisma.AtLeast<{
    competitionId?: string
    AND?: CompetitionsWhereInput | CompetitionsWhereInput[]
    OR?: CompetitionsWhereInput[]
    NOT?: CompetitionsWhereInput | CompetitionsWhereInput[]
    title?: StringFilter<"Competitions"> | string
    description?: StringFilter<"Competitions"> | string
    tags?: StringNullableListFilter<"Competitions">
    capacity?: IntFilter<"Competitions"> | number
    registeredCount?: IntFilter<"Competitions"> | number
    regDeadLine?: DateTimeFilter<"Competitions"> | Date | string
    startDate?: DateTimeFilter<"Competitions"> | Date | string
    createdAt?: DateTimeFilter<"Competitions"> | Date | string
    registrations?: RegistrationsListRelationFilter
  }, "competitionId">

  export type CompetitionsOrderByWithAggregationInput = {
    competitionId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    tags?: SortOrder
    capacity?: SortOrder
    registeredCount?: SortOrder
    regDeadLine?: SortOrder
    startDate?: SortOrder
    createdAt?: SortOrder
    _count?: CompetitionsCountOrderByAggregateInput
    _avg?: CompetitionsAvgOrderByAggregateInput
    _max?: CompetitionsMaxOrderByAggregateInput
    _min?: CompetitionsMinOrderByAggregateInput
    _sum?: CompetitionsSumOrderByAggregateInput
  }

  export type CompetitionsScalarWhereWithAggregatesInput = {
    AND?: CompetitionsScalarWhereWithAggregatesInput | CompetitionsScalarWhereWithAggregatesInput[]
    OR?: CompetitionsScalarWhereWithAggregatesInput[]
    NOT?: CompetitionsScalarWhereWithAggregatesInput | CompetitionsScalarWhereWithAggregatesInput[]
    competitionId?: StringWithAggregatesFilter<"Competitions"> | string
    title?: StringWithAggregatesFilter<"Competitions"> | string
    description?: StringWithAggregatesFilter<"Competitions"> | string
    tags?: StringNullableListFilter<"Competitions">
    capacity?: IntWithAggregatesFilter<"Competitions"> | number
    registeredCount?: IntWithAggregatesFilter<"Competitions"> | number
    regDeadLine?: DateTimeWithAggregatesFilter<"Competitions"> | Date | string
    startDate?: DateTimeWithAggregatesFilter<"Competitions"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Competitions"> | Date | string
  }

  export type RegistrationsWhereInput = {
    AND?: RegistrationsWhereInput | RegistrationsWhereInput[]
    OR?: RegistrationsWhereInput[]
    NOT?: RegistrationsWhereInput | RegistrationsWhereInput[]
    registrationID?: StringFilter<"Registrations"> | string
    userId?: StringFilter<"Registrations"> | string
    competitionId?: StringFilter<"Registrations"> | string
    registrationStatus?: EnumRegistrationStatusFilter<"Registrations"> | $Enums.RegistrationStatus
    registeredAt?: DateTimeFilter<"Registrations"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    competition?: XOR<CompetitionsScalarRelationFilter, CompetitionsWhereInput>
  }

  export type RegistrationsOrderByWithRelationInput = {
    registrationID?: SortOrder
    userId?: SortOrder
    competitionId?: SortOrder
    registrationStatus?: SortOrder
    registeredAt?: SortOrder
    user?: UserOrderByWithRelationInput
    competition?: CompetitionsOrderByWithRelationInput
  }

  export type RegistrationsWhereUniqueInput = Prisma.AtLeast<{
    registrationID?: string
    userId_competitionId?: RegistrationsUserIdCompetitionIdCompoundUniqueInput
    AND?: RegistrationsWhereInput | RegistrationsWhereInput[]
    OR?: RegistrationsWhereInput[]
    NOT?: RegistrationsWhereInput | RegistrationsWhereInput[]
    userId?: StringFilter<"Registrations"> | string
    competitionId?: StringFilter<"Registrations"> | string
    registrationStatus?: EnumRegistrationStatusFilter<"Registrations"> | $Enums.RegistrationStatus
    registeredAt?: DateTimeFilter<"Registrations"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    competition?: XOR<CompetitionsScalarRelationFilter, CompetitionsWhereInput>
  }, "registrationID" | "userId_competitionId">

  export type RegistrationsOrderByWithAggregationInput = {
    registrationID?: SortOrder
    userId?: SortOrder
    competitionId?: SortOrder
    registrationStatus?: SortOrder
    registeredAt?: SortOrder
    _count?: RegistrationsCountOrderByAggregateInput
    _max?: RegistrationsMaxOrderByAggregateInput
    _min?: RegistrationsMinOrderByAggregateInput
  }

  export type RegistrationsScalarWhereWithAggregatesInput = {
    AND?: RegistrationsScalarWhereWithAggregatesInput | RegistrationsScalarWhereWithAggregatesInput[]
    OR?: RegistrationsScalarWhereWithAggregatesInput[]
    NOT?: RegistrationsScalarWhereWithAggregatesInput | RegistrationsScalarWhereWithAggregatesInput[]
    registrationID?: StringWithAggregatesFilter<"Registrations"> | string
    userId?: StringWithAggregatesFilter<"Registrations"> | string
    competitionId?: StringWithAggregatesFilter<"Registrations"> | string
    registrationStatus?: EnumRegistrationStatusWithAggregatesFilter<"Registrations"> | $Enums.RegistrationStatus
    registeredAt?: DateTimeWithAggregatesFilter<"Registrations"> | Date | string
  }

  export type MailBoxWhereInput = {
    AND?: MailBoxWhereInput | MailBoxWhereInput[]
    OR?: MailBoxWhereInput[]
    NOT?: MailBoxWhereInput | MailBoxWhereInput[]
    id?: StringFilter<"MailBox"> | string
    userId?: StringFilter<"MailBox"> | string
    to?: StringFilter<"MailBox"> | string
    subject?: StringFilter<"MailBox"> | string
    body?: StringFilter<"MailBox"> | string
    sentAt?: DateTimeFilter<"MailBox"> | Date | string
  }

  export type MailBoxOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    to?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    sentAt?: SortOrder
  }

  export type MailBoxWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MailBoxWhereInput | MailBoxWhereInput[]
    OR?: MailBoxWhereInput[]
    NOT?: MailBoxWhereInput | MailBoxWhereInput[]
    userId?: StringFilter<"MailBox"> | string
    to?: StringFilter<"MailBox"> | string
    subject?: StringFilter<"MailBox"> | string
    body?: StringFilter<"MailBox"> | string
    sentAt?: DateTimeFilter<"MailBox"> | Date | string
  }, "id">

  export type MailBoxOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    to?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    sentAt?: SortOrder
    _count?: MailBoxCountOrderByAggregateInput
    _max?: MailBoxMaxOrderByAggregateInput
    _min?: MailBoxMinOrderByAggregateInput
  }

  export type MailBoxScalarWhereWithAggregatesInput = {
    AND?: MailBoxScalarWhereWithAggregatesInput | MailBoxScalarWhereWithAggregatesInput[]
    OR?: MailBoxScalarWhereWithAggregatesInput[]
    NOT?: MailBoxScalarWhereWithAggregatesInput | MailBoxScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MailBox"> | string
    userId?: StringWithAggregatesFilter<"MailBox"> | string
    to?: StringWithAggregatesFilter<"MailBox"> | string
    subject?: StringWithAggregatesFilter<"MailBox"> | string
    body?: StringWithAggregatesFilter<"MailBox"> | string
    sentAt?: DateTimeWithAggregatesFilter<"MailBox"> | Date | string
  }

  export type FailedJobsWhereInput = {
    AND?: FailedJobsWhereInput | FailedJobsWhereInput[]
    OR?: FailedJobsWhereInput[]
    NOT?: FailedJobsWhereInput | FailedJobsWhereInput[]
    id?: StringFilter<"FailedJobs"> | string
    jobId?: StringFilter<"FailedJobs"> | string
    payload?: JsonFilter<"FailedJobs">
    reason?: StringFilter<"FailedJobs"> | string
    failedAt?: DateTimeFilter<"FailedJobs"> | Date | string
  }

  export type FailedJobsOrderByWithRelationInput = {
    id?: SortOrder
    jobId?: SortOrder
    payload?: SortOrder
    reason?: SortOrder
    failedAt?: SortOrder
  }

  export type FailedJobsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FailedJobsWhereInput | FailedJobsWhereInput[]
    OR?: FailedJobsWhereInput[]
    NOT?: FailedJobsWhereInput | FailedJobsWhereInput[]
    jobId?: StringFilter<"FailedJobs"> | string
    payload?: JsonFilter<"FailedJobs">
    reason?: StringFilter<"FailedJobs"> | string
    failedAt?: DateTimeFilter<"FailedJobs"> | Date | string
  }, "id">

  export type FailedJobsOrderByWithAggregationInput = {
    id?: SortOrder
    jobId?: SortOrder
    payload?: SortOrder
    reason?: SortOrder
    failedAt?: SortOrder
    _count?: FailedJobsCountOrderByAggregateInput
    _max?: FailedJobsMaxOrderByAggregateInput
    _min?: FailedJobsMinOrderByAggregateInput
  }

  export type FailedJobsScalarWhereWithAggregatesInput = {
    AND?: FailedJobsScalarWhereWithAggregatesInput | FailedJobsScalarWhereWithAggregatesInput[]
    OR?: FailedJobsScalarWhereWithAggregatesInput[]
    NOT?: FailedJobsScalarWhereWithAggregatesInput | FailedJobsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FailedJobs"> | string
    jobId?: StringWithAggregatesFilter<"FailedJobs"> | string
    payload?: JsonWithAggregatesFilter<"FailedJobs">
    reason?: StringWithAggregatesFilter<"FailedJobs"> | string
    failedAt?: DateTimeWithAggregatesFilter<"FailedJobs"> | Date | string
  }

  export type UserCreateInput = {
    userId?: string
    email: string
    name: string
    password: string
    role: $Enums.UserRole
    createdAt?: Date | string
    registrations?: RegistrationsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    userId?: string
    email: string
    name: string
    password: string
    role: $Enums.UserRole
    createdAt?: Date | string
    registrations?: RegistrationsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registrations?: RegistrationsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registrations?: RegistrationsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    userId?: string
    email: string
    name: string
    password: string
    role: $Enums.UserRole
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetitionsCreateInput = {
    competitionId?: string
    title: string
    description: string
    tags?: CompetitionsCreatetagsInput | string[]
    capacity: number
    registeredCount?: number
    regDeadLine: Date | string
    startDate: Date | string
    createdAt?: Date | string
    registrations?: RegistrationsCreateNestedManyWithoutCompetitionInput
  }

  export type CompetitionsUncheckedCreateInput = {
    competitionId?: string
    title: string
    description: string
    tags?: CompetitionsCreatetagsInput | string[]
    capacity: number
    registeredCount?: number
    regDeadLine: Date | string
    startDate: Date | string
    createdAt?: Date | string
    registrations?: RegistrationsUncheckedCreateNestedManyWithoutCompetitionInput
  }

  export type CompetitionsUpdateInput = {
    competitionId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: CompetitionsUpdatetagsInput | string[]
    capacity?: IntFieldUpdateOperationsInput | number
    registeredCount?: IntFieldUpdateOperationsInput | number
    regDeadLine?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registrations?: RegistrationsUpdateManyWithoutCompetitionNestedInput
  }

  export type CompetitionsUncheckedUpdateInput = {
    competitionId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: CompetitionsUpdatetagsInput | string[]
    capacity?: IntFieldUpdateOperationsInput | number
    registeredCount?: IntFieldUpdateOperationsInput | number
    regDeadLine?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registrations?: RegistrationsUncheckedUpdateManyWithoutCompetitionNestedInput
  }

  export type CompetitionsCreateManyInput = {
    competitionId?: string
    title: string
    description: string
    tags?: CompetitionsCreatetagsInput | string[]
    capacity: number
    registeredCount?: number
    regDeadLine: Date | string
    startDate: Date | string
    createdAt?: Date | string
  }

  export type CompetitionsUpdateManyMutationInput = {
    competitionId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: CompetitionsUpdatetagsInput | string[]
    capacity?: IntFieldUpdateOperationsInput | number
    registeredCount?: IntFieldUpdateOperationsInput | number
    regDeadLine?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetitionsUncheckedUpdateManyInput = {
    competitionId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: CompetitionsUpdatetagsInput | string[]
    capacity?: IntFieldUpdateOperationsInput | number
    registeredCount?: IntFieldUpdateOperationsInput | number
    regDeadLine?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrationsCreateInput = {
    registrationID?: string
    registrationStatus?: $Enums.RegistrationStatus
    registeredAt?: Date | string
    user: UserCreateNestedOneWithoutRegistrationsInput
    competition: CompetitionsCreateNestedOneWithoutRegistrationsInput
  }

  export type RegistrationsUncheckedCreateInput = {
    registrationID?: string
    userId: string
    competitionId: string
    registrationStatus?: $Enums.RegistrationStatus
    registeredAt?: Date | string
  }

  export type RegistrationsUpdateInput = {
    registrationID?: StringFieldUpdateOperationsInput | string
    registrationStatus?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRegistrationsNestedInput
    competition?: CompetitionsUpdateOneRequiredWithoutRegistrationsNestedInput
  }

  export type RegistrationsUncheckedUpdateInput = {
    registrationID?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    competitionId?: StringFieldUpdateOperationsInput | string
    registrationStatus?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrationsCreateManyInput = {
    registrationID?: string
    userId: string
    competitionId: string
    registrationStatus?: $Enums.RegistrationStatus
    registeredAt?: Date | string
  }

  export type RegistrationsUpdateManyMutationInput = {
    registrationID?: StringFieldUpdateOperationsInput | string
    registrationStatus?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrationsUncheckedUpdateManyInput = {
    registrationID?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    competitionId?: StringFieldUpdateOperationsInput | string
    registrationStatus?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MailBoxCreateInput = {
    id?: string
    userId: string
    to: string
    subject: string
    body: string
    sentAt?: Date | string
  }

  export type MailBoxUncheckedCreateInput = {
    id?: string
    userId: string
    to: string
    subject: string
    body: string
    sentAt?: Date | string
  }

  export type MailBoxUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MailBoxUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MailBoxCreateManyInput = {
    id?: string
    userId: string
    to: string
    subject: string
    body: string
    sentAt?: Date | string
  }

  export type MailBoxUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MailBoxUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FailedJobsCreateInput = {
    id?: string
    jobId: string
    payload: JsonNullValueInput | InputJsonValue
    reason: string
    failedAt?: Date | string
  }

  export type FailedJobsUncheckedCreateInput = {
    id?: string
    jobId: string
    payload: JsonNullValueInput | InputJsonValue
    reason: string
    failedAt?: Date | string
  }

  export type FailedJobsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    reason?: StringFieldUpdateOperationsInput | string
    failedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FailedJobsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    reason?: StringFieldUpdateOperationsInput | string
    failedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FailedJobsCreateManyInput = {
    id?: string
    jobId: string
    payload: JsonNullValueInput | InputJsonValue
    reason: string
    failedAt?: Date | string
  }

  export type FailedJobsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    reason?: StringFieldUpdateOperationsInput | string
    failedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FailedJobsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    reason?: StringFieldUpdateOperationsInput | string
    failedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type RegistrationsListRelationFilter = {
    every?: RegistrationsWhereInput
    some?: RegistrationsWhereInput
    none?: RegistrationsWhereInput
  }

  export type RegistrationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    userId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    userId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    userId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
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

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type CompetitionsCountOrderByAggregateInput = {
    competitionId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    tags?: SortOrder
    capacity?: SortOrder
    registeredCount?: SortOrder
    regDeadLine?: SortOrder
    startDate?: SortOrder
    createdAt?: SortOrder
  }

  export type CompetitionsAvgOrderByAggregateInput = {
    capacity?: SortOrder
    registeredCount?: SortOrder
  }

  export type CompetitionsMaxOrderByAggregateInput = {
    competitionId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    capacity?: SortOrder
    registeredCount?: SortOrder
    regDeadLine?: SortOrder
    startDate?: SortOrder
    createdAt?: SortOrder
  }

  export type CompetitionsMinOrderByAggregateInput = {
    competitionId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    capacity?: SortOrder
    registeredCount?: SortOrder
    regDeadLine?: SortOrder
    startDate?: SortOrder
    createdAt?: SortOrder
  }

  export type CompetitionsSumOrderByAggregateInput = {
    capacity?: SortOrder
    registeredCount?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumRegistrationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RegistrationStatus | EnumRegistrationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RegistrationStatus[] | ListEnumRegistrationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RegistrationStatus[] | ListEnumRegistrationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRegistrationStatusFilter<$PrismaModel> | $Enums.RegistrationStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CompetitionsScalarRelationFilter = {
    is?: CompetitionsWhereInput
    isNot?: CompetitionsWhereInput
  }

  export type RegistrationsUserIdCompetitionIdCompoundUniqueInput = {
    userId: string
    competitionId: string
  }

  export type RegistrationsCountOrderByAggregateInput = {
    registrationID?: SortOrder
    userId?: SortOrder
    competitionId?: SortOrder
    registrationStatus?: SortOrder
    registeredAt?: SortOrder
  }

  export type RegistrationsMaxOrderByAggregateInput = {
    registrationID?: SortOrder
    userId?: SortOrder
    competitionId?: SortOrder
    registrationStatus?: SortOrder
    registeredAt?: SortOrder
  }

  export type RegistrationsMinOrderByAggregateInput = {
    registrationID?: SortOrder
    userId?: SortOrder
    competitionId?: SortOrder
    registrationStatus?: SortOrder
    registeredAt?: SortOrder
  }

  export type EnumRegistrationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RegistrationStatus | EnumRegistrationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RegistrationStatus[] | ListEnumRegistrationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RegistrationStatus[] | ListEnumRegistrationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRegistrationStatusWithAggregatesFilter<$PrismaModel> | $Enums.RegistrationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRegistrationStatusFilter<$PrismaModel>
    _max?: NestedEnumRegistrationStatusFilter<$PrismaModel>
  }

  export type MailBoxCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    to?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    sentAt?: SortOrder
  }

  export type MailBoxMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    to?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    sentAt?: SortOrder
  }

  export type MailBoxMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    to?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    sentAt?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type FailedJobsCountOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    payload?: SortOrder
    reason?: SortOrder
    failedAt?: SortOrder
  }

  export type FailedJobsMaxOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    reason?: SortOrder
    failedAt?: SortOrder
  }

  export type FailedJobsMinOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    reason?: SortOrder
    failedAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type RegistrationsCreateNestedManyWithoutUserInput = {
    create?: XOR<RegistrationsCreateWithoutUserInput, RegistrationsUncheckedCreateWithoutUserInput> | RegistrationsCreateWithoutUserInput[] | RegistrationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RegistrationsCreateOrConnectWithoutUserInput | RegistrationsCreateOrConnectWithoutUserInput[]
    createMany?: RegistrationsCreateManyUserInputEnvelope
    connect?: RegistrationsWhereUniqueInput | RegistrationsWhereUniqueInput[]
  }

  export type RegistrationsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RegistrationsCreateWithoutUserInput, RegistrationsUncheckedCreateWithoutUserInput> | RegistrationsCreateWithoutUserInput[] | RegistrationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RegistrationsCreateOrConnectWithoutUserInput | RegistrationsCreateOrConnectWithoutUserInput[]
    createMany?: RegistrationsCreateManyUserInputEnvelope
    connect?: RegistrationsWhereUniqueInput | RegistrationsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RegistrationsUpdateManyWithoutUserNestedInput = {
    create?: XOR<RegistrationsCreateWithoutUserInput, RegistrationsUncheckedCreateWithoutUserInput> | RegistrationsCreateWithoutUserInput[] | RegistrationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RegistrationsCreateOrConnectWithoutUserInput | RegistrationsCreateOrConnectWithoutUserInput[]
    upsert?: RegistrationsUpsertWithWhereUniqueWithoutUserInput | RegistrationsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RegistrationsCreateManyUserInputEnvelope
    set?: RegistrationsWhereUniqueInput | RegistrationsWhereUniqueInput[]
    disconnect?: RegistrationsWhereUniqueInput | RegistrationsWhereUniqueInput[]
    delete?: RegistrationsWhereUniqueInput | RegistrationsWhereUniqueInput[]
    connect?: RegistrationsWhereUniqueInput | RegistrationsWhereUniqueInput[]
    update?: RegistrationsUpdateWithWhereUniqueWithoutUserInput | RegistrationsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RegistrationsUpdateManyWithWhereWithoutUserInput | RegistrationsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RegistrationsScalarWhereInput | RegistrationsScalarWhereInput[]
  }

  export type RegistrationsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RegistrationsCreateWithoutUserInput, RegistrationsUncheckedCreateWithoutUserInput> | RegistrationsCreateWithoutUserInput[] | RegistrationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RegistrationsCreateOrConnectWithoutUserInput | RegistrationsCreateOrConnectWithoutUserInput[]
    upsert?: RegistrationsUpsertWithWhereUniqueWithoutUserInput | RegistrationsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RegistrationsCreateManyUserInputEnvelope
    set?: RegistrationsWhereUniqueInput | RegistrationsWhereUniqueInput[]
    disconnect?: RegistrationsWhereUniqueInput | RegistrationsWhereUniqueInput[]
    delete?: RegistrationsWhereUniqueInput | RegistrationsWhereUniqueInput[]
    connect?: RegistrationsWhereUniqueInput | RegistrationsWhereUniqueInput[]
    update?: RegistrationsUpdateWithWhereUniqueWithoutUserInput | RegistrationsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RegistrationsUpdateManyWithWhereWithoutUserInput | RegistrationsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RegistrationsScalarWhereInput | RegistrationsScalarWhereInput[]
  }

  export type CompetitionsCreatetagsInput = {
    set: string[]
  }

  export type RegistrationsCreateNestedManyWithoutCompetitionInput = {
    create?: XOR<RegistrationsCreateWithoutCompetitionInput, RegistrationsUncheckedCreateWithoutCompetitionInput> | RegistrationsCreateWithoutCompetitionInput[] | RegistrationsUncheckedCreateWithoutCompetitionInput[]
    connectOrCreate?: RegistrationsCreateOrConnectWithoutCompetitionInput | RegistrationsCreateOrConnectWithoutCompetitionInput[]
    createMany?: RegistrationsCreateManyCompetitionInputEnvelope
    connect?: RegistrationsWhereUniqueInput | RegistrationsWhereUniqueInput[]
  }

  export type RegistrationsUncheckedCreateNestedManyWithoutCompetitionInput = {
    create?: XOR<RegistrationsCreateWithoutCompetitionInput, RegistrationsUncheckedCreateWithoutCompetitionInput> | RegistrationsCreateWithoutCompetitionInput[] | RegistrationsUncheckedCreateWithoutCompetitionInput[]
    connectOrCreate?: RegistrationsCreateOrConnectWithoutCompetitionInput | RegistrationsCreateOrConnectWithoutCompetitionInput[]
    createMany?: RegistrationsCreateManyCompetitionInputEnvelope
    connect?: RegistrationsWhereUniqueInput | RegistrationsWhereUniqueInput[]
  }

  export type CompetitionsUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RegistrationsUpdateManyWithoutCompetitionNestedInput = {
    create?: XOR<RegistrationsCreateWithoutCompetitionInput, RegistrationsUncheckedCreateWithoutCompetitionInput> | RegistrationsCreateWithoutCompetitionInput[] | RegistrationsUncheckedCreateWithoutCompetitionInput[]
    connectOrCreate?: RegistrationsCreateOrConnectWithoutCompetitionInput | RegistrationsCreateOrConnectWithoutCompetitionInput[]
    upsert?: RegistrationsUpsertWithWhereUniqueWithoutCompetitionInput | RegistrationsUpsertWithWhereUniqueWithoutCompetitionInput[]
    createMany?: RegistrationsCreateManyCompetitionInputEnvelope
    set?: RegistrationsWhereUniqueInput | RegistrationsWhereUniqueInput[]
    disconnect?: RegistrationsWhereUniqueInput | RegistrationsWhereUniqueInput[]
    delete?: RegistrationsWhereUniqueInput | RegistrationsWhereUniqueInput[]
    connect?: RegistrationsWhereUniqueInput | RegistrationsWhereUniqueInput[]
    update?: RegistrationsUpdateWithWhereUniqueWithoutCompetitionInput | RegistrationsUpdateWithWhereUniqueWithoutCompetitionInput[]
    updateMany?: RegistrationsUpdateManyWithWhereWithoutCompetitionInput | RegistrationsUpdateManyWithWhereWithoutCompetitionInput[]
    deleteMany?: RegistrationsScalarWhereInput | RegistrationsScalarWhereInput[]
  }

  export type RegistrationsUncheckedUpdateManyWithoutCompetitionNestedInput = {
    create?: XOR<RegistrationsCreateWithoutCompetitionInput, RegistrationsUncheckedCreateWithoutCompetitionInput> | RegistrationsCreateWithoutCompetitionInput[] | RegistrationsUncheckedCreateWithoutCompetitionInput[]
    connectOrCreate?: RegistrationsCreateOrConnectWithoutCompetitionInput | RegistrationsCreateOrConnectWithoutCompetitionInput[]
    upsert?: RegistrationsUpsertWithWhereUniqueWithoutCompetitionInput | RegistrationsUpsertWithWhereUniqueWithoutCompetitionInput[]
    createMany?: RegistrationsCreateManyCompetitionInputEnvelope
    set?: RegistrationsWhereUniqueInput | RegistrationsWhereUniqueInput[]
    disconnect?: RegistrationsWhereUniqueInput | RegistrationsWhereUniqueInput[]
    delete?: RegistrationsWhereUniqueInput | RegistrationsWhereUniqueInput[]
    connect?: RegistrationsWhereUniqueInput | RegistrationsWhereUniqueInput[]
    update?: RegistrationsUpdateWithWhereUniqueWithoutCompetitionInput | RegistrationsUpdateWithWhereUniqueWithoutCompetitionInput[]
    updateMany?: RegistrationsUpdateManyWithWhereWithoutCompetitionInput | RegistrationsUpdateManyWithWhereWithoutCompetitionInput[]
    deleteMany?: RegistrationsScalarWhereInput | RegistrationsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRegistrationsInput = {
    create?: XOR<UserCreateWithoutRegistrationsInput, UserUncheckedCreateWithoutRegistrationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRegistrationsInput
    connect?: UserWhereUniqueInput
  }

  export type CompetitionsCreateNestedOneWithoutRegistrationsInput = {
    create?: XOR<CompetitionsCreateWithoutRegistrationsInput, CompetitionsUncheckedCreateWithoutRegistrationsInput>
    connectOrCreate?: CompetitionsCreateOrConnectWithoutRegistrationsInput
    connect?: CompetitionsWhereUniqueInput
  }

  export type EnumRegistrationStatusFieldUpdateOperationsInput = {
    set?: $Enums.RegistrationStatus
  }

  export type UserUpdateOneRequiredWithoutRegistrationsNestedInput = {
    create?: XOR<UserCreateWithoutRegistrationsInput, UserUncheckedCreateWithoutRegistrationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRegistrationsInput
    upsert?: UserUpsertWithoutRegistrationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRegistrationsInput, UserUpdateWithoutRegistrationsInput>, UserUncheckedUpdateWithoutRegistrationsInput>
  }

  export type CompetitionsUpdateOneRequiredWithoutRegistrationsNestedInput = {
    create?: XOR<CompetitionsCreateWithoutRegistrationsInput, CompetitionsUncheckedCreateWithoutRegistrationsInput>
    connectOrCreate?: CompetitionsCreateOrConnectWithoutRegistrationsInput
    upsert?: CompetitionsUpsertWithoutRegistrationsInput
    connect?: CompetitionsWhereUniqueInput
    update?: XOR<XOR<CompetitionsUpdateToOneWithWhereWithoutRegistrationsInput, CompetitionsUpdateWithoutRegistrationsInput>, CompetitionsUncheckedUpdateWithoutRegistrationsInput>
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

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type NestedEnumRegistrationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RegistrationStatus | EnumRegistrationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RegistrationStatus[] | ListEnumRegistrationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RegistrationStatus[] | ListEnumRegistrationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRegistrationStatusFilter<$PrismaModel> | $Enums.RegistrationStatus
  }

  export type NestedEnumRegistrationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RegistrationStatus | EnumRegistrationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RegistrationStatus[] | ListEnumRegistrationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RegistrationStatus[] | ListEnumRegistrationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRegistrationStatusWithAggregatesFilter<$PrismaModel> | $Enums.RegistrationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRegistrationStatusFilter<$PrismaModel>
    _max?: NestedEnumRegistrationStatusFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type RegistrationsCreateWithoutUserInput = {
    registrationID?: string
    registrationStatus?: $Enums.RegistrationStatus
    registeredAt?: Date | string
    competition: CompetitionsCreateNestedOneWithoutRegistrationsInput
  }

  export type RegistrationsUncheckedCreateWithoutUserInput = {
    registrationID?: string
    competitionId: string
    registrationStatus?: $Enums.RegistrationStatus
    registeredAt?: Date | string
  }

  export type RegistrationsCreateOrConnectWithoutUserInput = {
    where: RegistrationsWhereUniqueInput
    create: XOR<RegistrationsCreateWithoutUserInput, RegistrationsUncheckedCreateWithoutUserInput>
  }

  export type RegistrationsCreateManyUserInputEnvelope = {
    data: RegistrationsCreateManyUserInput | RegistrationsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RegistrationsUpsertWithWhereUniqueWithoutUserInput = {
    where: RegistrationsWhereUniqueInput
    update: XOR<RegistrationsUpdateWithoutUserInput, RegistrationsUncheckedUpdateWithoutUserInput>
    create: XOR<RegistrationsCreateWithoutUserInput, RegistrationsUncheckedCreateWithoutUserInput>
  }

  export type RegistrationsUpdateWithWhereUniqueWithoutUserInput = {
    where: RegistrationsWhereUniqueInput
    data: XOR<RegistrationsUpdateWithoutUserInput, RegistrationsUncheckedUpdateWithoutUserInput>
  }

  export type RegistrationsUpdateManyWithWhereWithoutUserInput = {
    where: RegistrationsScalarWhereInput
    data: XOR<RegistrationsUpdateManyMutationInput, RegistrationsUncheckedUpdateManyWithoutUserInput>
  }

  export type RegistrationsScalarWhereInput = {
    AND?: RegistrationsScalarWhereInput | RegistrationsScalarWhereInput[]
    OR?: RegistrationsScalarWhereInput[]
    NOT?: RegistrationsScalarWhereInput | RegistrationsScalarWhereInput[]
    registrationID?: StringFilter<"Registrations"> | string
    userId?: StringFilter<"Registrations"> | string
    competitionId?: StringFilter<"Registrations"> | string
    registrationStatus?: EnumRegistrationStatusFilter<"Registrations"> | $Enums.RegistrationStatus
    registeredAt?: DateTimeFilter<"Registrations"> | Date | string
  }

  export type RegistrationsCreateWithoutCompetitionInput = {
    registrationID?: string
    registrationStatus?: $Enums.RegistrationStatus
    registeredAt?: Date | string
    user: UserCreateNestedOneWithoutRegistrationsInput
  }

  export type RegistrationsUncheckedCreateWithoutCompetitionInput = {
    registrationID?: string
    userId: string
    registrationStatus?: $Enums.RegistrationStatus
    registeredAt?: Date | string
  }

  export type RegistrationsCreateOrConnectWithoutCompetitionInput = {
    where: RegistrationsWhereUniqueInput
    create: XOR<RegistrationsCreateWithoutCompetitionInput, RegistrationsUncheckedCreateWithoutCompetitionInput>
  }

  export type RegistrationsCreateManyCompetitionInputEnvelope = {
    data: RegistrationsCreateManyCompetitionInput | RegistrationsCreateManyCompetitionInput[]
    skipDuplicates?: boolean
  }

  export type RegistrationsUpsertWithWhereUniqueWithoutCompetitionInput = {
    where: RegistrationsWhereUniqueInput
    update: XOR<RegistrationsUpdateWithoutCompetitionInput, RegistrationsUncheckedUpdateWithoutCompetitionInput>
    create: XOR<RegistrationsCreateWithoutCompetitionInput, RegistrationsUncheckedCreateWithoutCompetitionInput>
  }

  export type RegistrationsUpdateWithWhereUniqueWithoutCompetitionInput = {
    where: RegistrationsWhereUniqueInput
    data: XOR<RegistrationsUpdateWithoutCompetitionInput, RegistrationsUncheckedUpdateWithoutCompetitionInput>
  }

  export type RegistrationsUpdateManyWithWhereWithoutCompetitionInput = {
    where: RegistrationsScalarWhereInput
    data: XOR<RegistrationsUpdateManyMutationInput, RegistrationsUncheckedUpdateManyWithoutCompetitionInput>
  }

  export type UserCreateWithoutRegistrationsInput = {
    userId?: string
    email: string
    name: string
    password: string
    role: $Enums.UserRole
    createdAt?: Date | string
  }

  export type UserUncheckedCreateWithoutRegistrationsInput = {
    userId?: string
    email: string
    name: string
    password: string
    role: $Enums.UserRole
    createdAt?: Date | string
  }

  export type UserCreateOrConnectWithoutRegistrationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRegistrationsInput, UserUncheckedCreateWithoutRegistrationsInput>
  }

  export type CompetitionsCreateWithoutRegistrationsInput = {
    competitionId?: string
    title: string
    description: string
    tags?: CompetitionsCreatetagsInput | string[]
    capacity: number
    registeredCount?: number
    regDeadLine: Date | string
    startDate: Date | string
    createdAt?: Date | string
  }

  export type CompetitionsUncheckedCreateWithoutRegistrationsInput = {
    competitionId?: string
    title: string
    description: string
    tags?: CompetitionsCreatetagsInput | string[]
    capacity: number
    registeredCount?: number
    regDeadLine: Date | string
    startDate: Date | string
    createdAt?: Date | string
  }

  export type CompetitionsCreateOrConnectWithoutRegistrationsInput = {
    where: CompetitionsWhereUniqueInput
    create: XOR<CompetitionsCreateWithoutRegistrationsInput, CompetitionsUncheckedCreateWithoutRegistrationsInput>
  }

  export type UserUpsertWithoutRegistrationsInput = {
    update: XOR<UserUpdateWithoutRegistrationsInput, UserUncheckedUpdateWithoutRegistrationsInput>
    create: XOR<UserCreateWithoutRegistrationsInput, UserUncheckedCreateWithoutRegistrationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRegistrationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRegistrationsInput, UserUncheckedUpdateWithoutRegistrationsInput>
  }

  export type UserUpdateWithoutRegistrationsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutRegistrationsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetitionsUpsertWithoutRegistrationsInput = {
    update: XOR<CompetitionsUpdateWithoutRegistrationsInput, CompetitionsUncheckedUpdateWithoutRegistrationsInput>
    create: XOR<CompetitionsCreateWithoutRegistrationsInput, CompetitionsUncheckedCreateWithoutRegistrationsInput>
    where?: CompetitionsWhereInput
  }

  export type CompetitionsUpdateToOneWithWhereWithoutRegistrationsInput = {
    where?: CompetitionsWhereInput
    data: XOR<CompetitionsUpdateWithoutRegistrationsInput, CompetitionsUncheckedUpdateWithoutRegistrationsInput>
  }

  export type CompetitionsUpdateWithoutRegistrationsInput = {
    competitionId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: CompetitionsUpdatetagsInput | string[]
    capacity?: IntFieldUpdateOperationsInput | number
    registeredCount?: IntFieldUpdateOperationsInput | number
    regDeadLine?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetitionsUncheckedUpdateWithoutRegistrationsInput = {
    competitionId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: CompetitionsUpdatetagsInput | string[]
    capacity?: IntFieldUpdateOperationsInput | number
    registeredCount?: IntFieldUpdateOperationsInput | number
    regDeadLine?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrationsCreateManyUserInput = {
    registrationID?: string
    competitionId: string
    registrationStatus?: $Enums.RegistrationStatus
    registeredAt?: Date | string
  }

  export type RegistrationsUpdateWithoutUserInput = {
    registrationID?: StringFieldUpdateOperationsInput | string
    registrationStatus?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    competition?: CompetitionsUpdateOneRequiredWithoutRegistrationsNestedInput
  }

  export type RegistrationsUncheckedUpdateWithoutUserInput = {
    registrationID?: StringFieldUpdateOperationsInput | string
    competitionId?: StringFieldUpdateOperationsInput | string
    registrationStatus?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrationsUncheckedUpdateManyWithoutUserInput = {
    registrationID?: StringFieldUpdateOperationsInput | string
    competitionId?: StringFieldUpdateOperationsInput | string
    registrationStatus?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrationsCreateManyCompetitionInput = {
    registrationID?: string
    userId: string
    registrationStatus?: $Enums.RegistrationStatus
    registeredAt?: Date | string
  }

  export type RegistrationsUpdateWithoutCompetitionInput = {
    registrationID?: StringFieldUpdateOperationsInput | string
    registrationStatus?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRegistrationsNestedInput
  }

  export type RegistrationsUncheckedUpdateWithoutCompetitionInput = {
    registrationID?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    registrationStatus?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrationsUncheckedUpdateManyWithoutCompetitionInput = {
    registrationID?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    registrationStatus?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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