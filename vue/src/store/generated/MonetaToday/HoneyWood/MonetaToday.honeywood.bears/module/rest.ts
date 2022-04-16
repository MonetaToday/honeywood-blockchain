/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export enum ItemsItemTypes {
  APIARY = "APIARY",
  TREE = "TREE",
  DECORATION = "DECORATION",
}

export interface QueryShowApiariesInfoByBearIdResponseApiaryInfo {
  /** @format uint64 */
  id?: string;
  countHoney?: string;
  bees?: string[];
  params?: BearsApiaryParams;
}

export interface QueryShowBeesInfoByBearIdResponseBeeInfo {
  /** @format uint64 */
  id?: string;
  apiaryHouse?: BearsApiaryHouse;
  params?: BearsBeeParams;
}

export interface QueryShowDecorationsInfoByBearIdResponseDecorationInfo {
  /** @format uint64 */
  id?: string;
  params?: BearsDecorationParams;
}

export interface QueryShowTreesInfoByBearIdResponseTreeInfo {
  /** @format uint64 */
  id?: string;
  params?: BearsTreeParams;
}

export interface TilesItems {
  /** @format uint64 */
  itemId?: string;
  itemType?: ItemsItemTypes;
}

export interface BearsAddressBears {
  address?: string;
  bears?: string[];
}

export interface BearsAirHistory {
  /** @format uint64 */
  id?: string;

  /** @format uint64 */
  height?: string;
  count?: string;
  purity?: string;
}

export interface BearsAirInfo {
  supply?: string;
  consume?: string;
}

export interface BearsApiaries {
  /** @format uint64 */
  id?: string;
  bearOwner?: BearsBearOwner;
  position?: BearsItemPosition;
  params?: BearsApiaryParams;
  cycleHistory?: BearsCycleHistory[];

  /** @format uint64 */
  spaceOccupied?: string;
  honeyFromPast?: string;
  fieldFertility?: string;
}

export interface BearsApiaryHouse {
  /** @format uint64 */
  id?: string;
}

export interface BearsApiaryParams {
  apiary_type?: string;
  price?: V1Beta1Coin[];

  /** @format uint64 */
  space_available?: string;
  max_honey?: string;
  delete_reward?: V1Beta1Coin[];
  fertility?: string;
}

export interface BearsBearNames {
  name?: string;

  /** @format uint64 */
  bearId?: string;
}

export interface BearsBearOwner {
  /** @format uint64 */
  id?: string;
}

export interface BearsBears {
  /** @format uint64 */
  id?: string;
  owner?: string;
  name?: string;
  fields?: string[];
  apiaries?: string[];
  bees?: string[];
  trees?: string[];
  decorations?: string[];
}

export interface BearsBeeParams {
  bee_type?: string;
  price?: V1Beta1Coin[];
  honey_per_block?: string;

  /** @format uint64 */
  body_size?: string;
  air_count_dependency?: string;
  air_consume?: string;
}

export interface BearsBees {
  /** @format uint64 */
  id?: string;
  name?: string;
  bearOwner?: BearsBearOwner;
  apiaryHouse?: BearsApiaryHouse;
  params?: BearsBeeParams;
  fieldFertility?: string;
  apiaryFertility?: string;
}

export interface BearsCycleHistory {
  /** @format uint64 */
  height?: string;
  bees?: string[];
}

export interface BearsDecorationParams {
  decoration_type?: string;
  price?: V1Beta1Coin[];
}

export interface BearsDecorations {
  /** @format uint64 */
  id?: string;
  bearOwner?: BearsBearOwner;
  params?: BearsDecorationParams;
  position?: BearsItemPosition;
}

export interface BearsFieldParams {
  field_type?: string;
  fertility?: string;
  price_tile?: V1Beta1Coin[];
}

export interface BearsFieldRows {
  columns?: BearsTiles[];
}

export interface BearsFields {
  /** @format uint64 */
  id?: string;
  bearOwner?: BearsBearOwner;
  params?: BearsFieldParams;
  rows?: BearsFieldRows[];

  /** @format uint64 */
  countTiles?: string;
}

export interface BearsItemPosition {
  /** @format uint64 */
  fieldId?: string;

  /** @format uint64 */
  rowId?: string;

  /** @format uint64 */
  columnId?: string;
}

export type BearsMsgClearApiaryFromBeesResponse = object;

export interface BearsMsgCollectHoneyFromApiaryResponse {
  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  countHoney?: V1Beta1Coin;
}

export interface BearsMsgCreateApiaryResponse {
  apiary?: BearsApiaries;
}

export interface BearsMsgCreateBeeResponse {
  bee?: BearsBees;
}

export interface BearsMsgCreateDecorationResponse {
  decoration?: BearsDecorations;
}

export interface BearsMsgCreateTreeResponse {
  tree?: BearsTrees;
}

export type BearsMsgDeleteApiaryResponse = object;

export interface BearsMsgExtendFieldResponse {
  /** @format uint64 */
  countTiles?: string;
}

export interface BearsMsgInitGameAndCreateApiaryResponse {
  apiary?: BearsApiaries;
}

export interface BearsMsgInitGameAndCreateBeeResponse {
  bee?: BearsBees;
}

export interface BearsMsgInitGameAndCreateDecorationResponse {
  decoration?: BearsDecorations;
}

export interface BearsMsgInitGameAndCreateTreeResponse {
  tree?: BearsTrees;
}

export interface BearsMsgInitGameAndExtendFieldResponse {
  /** @format uint64 */
  countTiles?: string;
}

export type BearsMsgInitGameAndSetNameResponse = object;

export type BearsMsgMoveItemOnFieldResponse = object;

export type BearsMsgSetApiaryHouseForBeeResponse = object;

export type BearsMsgSetDecorationPositionResponse = object;

export type BearsMsgSetNameResponse = object;

export type BearsMsgUnsetApiaryHouseForBeeResponse = object;

export type BearsMsgUnsetDecorationPositionResponse = object;

/**
 * Params defines the parameters for the module.
 */
export interface BearsParams {
  /** @format uint64 */
  blocks_per_hour?: string;

  /** @format uint64 */
  air_history_length?: string;
  burn_rate?: string;
  price_set_name?: V1Beta1Coin[];
  field_types?: BearsFieldParams[];
  tree_types?: BearsTreeParams[];
  decoration_types?: BearsDecorationParams[];
  apiary_types?: BearsApiaryParams[];
  bee_types?: BearsBeeParams[];
  honey_denom?: string;
}

export interface BearsQueryAllAddressBearsResponse {
  addressBears?: BearsAddressBears[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface BearsQueryAllAirHistoryResponse {
  airHistory?: BearsAirHistory[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface BearsQueryAllApiariesResponse {
  Apiaries?: BearsApiaries[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface BearsQueryAllBearNamesResponse {
  bearNames?: BearsBearNames[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface BearsQueryAllBearsResponse {
  Bears?: BearsBears[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface BearsQueryAllBeesResponse {
  Bees?: BearsBees[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface BearsQueryAllDecorationsResponse {
  Decorations?: BearsDecorations[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface BearsQueryAllFieldsResponse {
  Fields?: BearsFields[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface BearsQueryAllTreesResponse {
  Trees?: BearsTrees[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface BearsQueryCalculateHoneyInApiaryResponse {
  countHoney?: string;
}

export interface BearsQueryGetAddressBearsResponse {
  addressBears?: BearsAddressBears;
}

export interface BearsQueryGetAirInfoResponse {
  AirInfo?: BearsAirInfo;
}

export interface BearsQueryGetApiariesResponse {
  Apiaries?: BearsApiaries;
}

export interface BearsQueryGetBearNamesResponse {
  bearNames?: BearsBearNames;
}

export interface BearsQueryGetBearsResponse {
  Bears?: BearsBears;
}

export interface BearsQueryGetBeesResponse {
  Bees?: BearsBees;
}

export interface BearsQueryGetDecorationsResponse {
  Decorations?: BearsDecorations;
}

export interface BearsQueryGetFieldsResponse {
  Fields?: BearsFields;
}

export interface BearsQueryGetTreesResponse {
  Trees?: BearsTrees;
}

/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 */
export interface BearsQueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: BearsParams;
}

export interface BearsQueryShowApiariesInfoByBearIdResponse {
  apiariesInfo?: QueryShowApiariesInfoByBearIdResponseApiaryInfo[];
}

export interface BearsQueryShowBeesInfoByBearIdResponse {
  beesInfo?: QueryShowBeesInfoByBearIdResponseBeeInfo[];
}

export interface BearsQueryShowDecorationsInfoByBearIdResponse {
  decorationsInfo?: QueryShowDecorationsInfoByBearIdResponseDecorationInfo[];
}

export interface BearsQueryShowHoneyPowerByApiaryIdResponse {
  honeyPower?: string;
}

export interface BearsQueryShowHoneyPowerByBearIdResponse {
  honeyPower?: string;
}

export interface BearsQueryShowHoneyPowerByBeeTypeResponse {
  honeyPower?: string;
}

export interface BearsQueryShowLastAirInfoResponse {
  /** @format uint64 */
  height?: string;
  count?: string;
  purity?: string;
  supply?: string;
  consume?: string;
}

export interface BearsQueryShowTreesInfoByBearIdResponse {
  treesInfo?: QueryShowTreesInfoByBearIdResponseTreeInfo[];
}

export interface BearsTiles {
  item?: TilesItems;
}

export interface BearsTreeParams {
  tree_type?: string;
  price?: V1Beta1Coin[];
  reward?: V1Beta1Coin[];
  air_supply?: string;
}

export interface BearsTrees {
  /** @format uint64 */
  id?: string;
  params?: BearsTreeParams;
  bearOwner?: BearsBearOwner;
  position?: BearsItemPosition;
}

export interface ProtobufAny {
  "@type"?: string;
}

export interface RpcStatus {
  /** @format int32 */
  code?: number;
  message?: string;
  details?: ProtobufAny[];
}

/**
* Coin defines a token with a denomination and an amount.

NOTE: The amount field is an Int which implements the custom method
signatures required by gogoproto.
*/
export interface V1Beta1Coin {
  denom?: string;
  amount?: string;
}

/**
* message SomeRequest {
         Foo some_parameter = 1;
         PageRequest pagination = 2;
 }
*/
export interface V1Beta1PageRequest {
  /**
   * key is a value returned in PageResponse.next_key to begin
   * querying the next page most efficiently. Only one of offset or key
   * should be set.
   * @format byte
   */
  key?: string;

  /**
   * offset is a numeric offset that can be used when key is unavailable.
   * It is less efficient than using key. Only one of offset or key should
   * be set.
   * @format uint64
   */
  offset?: string;

  /**
   * limit is the total number of results to be returned in the result page.
   * If left empty it will default to a value to be set by each app.
   * @format uint64
   */
  limit?: string;

  /**
   * count_total is set to true  to indicate that the result set should include
   * a count of the total number of items available for pagination in UIs.
   * count_total is only respected when offset is used. It is ignored when key
   * is set.
   */
  count_total?: boolean;

  /**
   * reverse is set to true if results are to be returned in the descending order.
   *
   * Since: cosmos-sdk 0.43
   */
  reverse?: boolean;
}

/**
* PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
*/
export interface V1Beta1PageResponse {
  /** @format byte */
  next_key?: string;

  /** @format uint64 */
  total?: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: keyof Omit<Body, "body" | "bodyUsed">;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType) => RequestParams | void;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType = null as any;
  private securityWorker: null | ApiConfig<SecurityDataType>["securityWorker"] = null;
  private abortControllers = new Map<CancelToken, AbortController>();

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType) => {
    this.securityData = data;
  };

  private addQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];

    return (
      encodeURIComponent(key) +
      "=" +
      encodeURIComponent(Array.isArray(value) ? value.join(",") : typeof value === "number" ? value : `${value}`)
    );
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) =>
        typeof query[key] === "object" && !Array.isArray(query[key])
          ? this.toQueryString(query[key] as QueryParamsType)
          : this.addQueryParam(query, key),
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((data, key) => {
        data.append(key, input[key]);
        return data;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  private mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format = "json",
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams = (secure && this.securityWorker && this.securityWorker(this.securityData)) || {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];

    return fetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = (null as unknown) as T;
      r.error = (null as unknown) as E;

      const data = await response[format]()
        .then((data) => {
          if (r.ok) {
            r.data = data;
          } else {
            r.error = data;
          }
          return r;
        })
        .catch((e) => {
          r.error = e;
          return r;
        });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title bears/address_bears.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryAddressBearsAll
   * @summary Queries a list of AddressBears items.
   * @request GET:/MonetaToday/honeywood/bears/address_bears
   */
  queryAddressBearsAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<BearsQueryAllAddressBearsResponse, RpcStatus>({
      path: `/MonetaToday/honeywood/bears/address_bears`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryAddressBears
   * @summary Queries a AddressBears by index.
   * @request GET:/MonetaToday/honeywood/bears/address_bears/{address}
   */
  queryAddressBears = (address: string, params: RequestParams = {}) =>
    this.request<BearsQueryGetAddressBearsResponse, RpcStatus>({
      path: `/MonetaToday/honeywood/bears/address_bears/${address}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryAirHistoryAll
   * @summary Queries a list of AirHistory items.
   * @request GET:/MonetaToday/honeywood/bears/air_history
   */
  queryAirHistoryAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<BearsQueryAllAirHistoryResponse, RpcStatus>({
      path: `/MonetaToday/honeywood/bears/air_history`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryAirInfo
   * @summary Queries a AirInfo by index.
   * @request GET:/MonetaToday/honeywood/bears/air_info
   */
  queryAirInfo = (params: RequestParams = {}) =>
    this.request<BearsQueryGetAirInfoResponse, RpcStatus>({
      path: `/MonetaToday/honeywood/bears/air_info`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryApiariesAll
   * @summary Queries a list of Apiaries items.
   * @request GET:/MonetaToday/honeywood/bears/apiaries
   */
  queryApiariesAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<BearsQueryAllApiariesResponse, RpcStatus>({
      path: `/MonetaToday/honeywood/bears/apiaries`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryApiaries
   * @summary Queries a Apiaries by id.
   * @request GET:/MonetaToday/honeywood/bears/apiaries/{id}
   */
  queryApiaries = (id: string, params: RequestParams = {}) =>
    this.request<BearsQueryGetApiariesResponse, RpcStatus>({
      path: `/MonetaToday/honeywood/bears/apiaries/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryBearNamesAll
   * @summary Queries a list of BearNames items.
   * @request GET:/MonetaToday/honeywood/bears/bear_names
   */
  queryBearNamesAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<BearsQueryAllBearNamesResponse, RpcStatus>({
      path: `/MonetaToday/honeywood/bears/bear_names`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryBearNames
   * @summary Queries a BearNames by index.
   * @request GET:/MonetaToday/honeywood/bears/bear_names/{name}
   */
  queryBearNames = (name: string, params: RequestParams = {}) =>
    this.request<BearsQueryGetBearNamesResponse, RpcStatus>({
      path: `/MonetaToday/honeywood/bears/bear_names/${name}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryBearsAll
   * @summary Queries a list of Bears items.
   * @request GET:/MonetaToday/honeywood/bears/bears
   */
  queryBearsAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<BearsQueryAllBearsResponse, RpcStatus>({
      path: `/MonetaToday/honeywood/bears/bears`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryBears
   * @summary Queries a Bears by id.
   * @request GET:/MonetaToday/honeywood/bears/bears/{id}
   */
  queryBears = (id: string, params: RequestParams = {}) =>
    this.request<BearsQueryGetBearsResponse, RpcStatus>({
      path: `/MonetaToday/honeywood/bears/bears/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryBeesAll
   * @summary Queries a list of Bees items.
   * @request GET:/MonetaToday/honeywood/bears/bees
   */
  queryBeesAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<BearsQueryAllBeesResponse, RpcStatus>({
      path: `/MonetaToday/honeywood/bears/bees`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryBees
   * @summary Queries a Bees by id.
   * @request GET:/MonetaToday/honeywood/bears/bees/{id}
   */
  queryBees = (id: string, params: RequestParams = {}) =>
    this.request<BearsQueryGetBeesResponse, RpcStatus>({
      path: `/MonetaToday/honeywood/bears/bees/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryCalculateHoneyInApiary
   * @summary Queries a list of CalculateHoneyInApiary items.
   * @request GET:/MonetaToday/honeywood/bears/calculate_honey_in_apiary/{apiaryId}
   */
  queryCalculateHoneyInApiary = (apiaryId: string, params: RequestParams = {}) =>
    this.request<BearsQueryCalculateHoneyInApiaryResponse, RpcStatus>({
      path: `/MonetaToday/honeywood/bears/calculate_honey_in_apiary/${apiaryId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryDecorationsAll
   * @summary Queries a list of Decorations items.
   * @request GET:/MonetaToday/honeywood/bears/decorations
   */
  queryDecorationsAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<BearsQueryAllDecorationsResponse, RpcStatus>({
      path: `/MonetaToday/honeywood/bears/decorations`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryDecorations
   * @summary Queries a Decorations by id.
   * @request GET:/MonetaToday/honeywood/bears/decorations/{id}
   */
  queryDecorations = (id: string, params: RequestParams = {}) =>
    this.request<BearsQueryGetDecorationsResponse, RpcStatus>({
      path: `/MonetaToday/honeywood/bears/decorations/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryFieldsAll
   * @summary Queries a list of Fields items.
   * @request GET:/MonetaToday/honeywood/bears/fields
   */
  queryFieldsAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<BearsQueryAllFieldsResponse, RpcStatus>({
      path: `/MonetaToday/honeywood/bears/fields`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryFields
   * @summary Queries a Fields by id.
   * @request GET:/MonetaToday/honeywood/bears/fields/{id}
   */
  queryFields = (id: string, params: RequestParams = {}) =>
    this.request<BearsQueryGetFieldsResponse, RpcStatus>({
      path: `/MonetaToday/honeywood/bears/fields/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryParams
   * @summary Parameters queries the parameters of the module.
   * @request GET:/MonetaToday/honeywood/bears/params
   */
  queryParams = (params: RequestParams = {}) =>
    this.request<BearsQueryParamsResponse, RpcStatus>({
      path: `/MonetaToday/honeywood/bears/params`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryShowBeesInfoByBearId
   * @summary Queries a list of ShowBeesInfoByBearId items.
   * @request GET:/MonetaToday/honeywood/bears/show_bees_info_by_bear_id/{bearId}
   */
  queryShowBeesInfoByBearId = (bearId: string, params: RequestParams = {}) =>
    this.request<BearsQueryShowBeesInfoByBearIdResponse, RpcStatus>({
      path: `/MonetaToday/honeywood/bears/show_bees_info_by_bear_id/${bearId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryShowDecorationsInfoByBearId
   * @summary Queries a list of ShowDecorationsInfoByBearId items.
   * @request GET:/MonetaToday/honeywood/bears/show_decorations_info_by_bear_id/{bearId}
   */
  queryShowDecorationsInfoByBearId = (bearId: string, params: RequestParams = {}) =>
    this.request<BearsQueryShowDecorationsInfoByBearIdResponse, RpcStatus>({
      path: `/MonetaToday/honeywood/bears/show_decorations_info_by_bear_id/${bearId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryShowApiariesInfoByBearId
   * @summary Queries a list of ShowApiariesInfoByBearId items.
   * @request GET:/MonetaToday/honeywood/bears/show_honey_from_all_bear_apiaries/{bearId}
   */
  queryShowApiariesInfoByBearId = (bearId: string, params: RequestParams = {}) =>
    this.request<BearsQueryShowApiariesInfoByBearIdResponse, RpcStatus>({
      path: `/MonetaToday/honeywood/bears/show_honey_from_all_bear_apiaries/${bearId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryShowHoneyPowerByBearId
   * @summary Queries a list of ShowHoneyPowerByBearId items.
   * @request GET:/MonetaToday/honeywood/bears/show_honey_power_by_bear_id/{bearId}
   */
  queryShowHoneyPowerByBearId = (bearId: string, params: RequestParams = {}) =>
    this.request<BearsQueryShowHoneyPowerByBearIdResponse, RpcStatus>({
      path: `/MonetaToday/honeywood/bears/show_honey_power_by_bear_id/${bearId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryShowHoneyPowerByBeeType
   * @summary Queries a list of ShowHoneyPowerByBeeType items.
   * @request GET:/MonetaToday/honeywood/bears/show_honey_power_by_bee_type/{beeType}
   */
  queryShowHoneyPowerByBeeType = (beeType: string, params: RequestParams = {}) =>
    this.request<BearsQueryShowHoneyPowerByBeeTypeResponse, RpcStatus>({
      path: `/MonetaToday/honeywood/bears/show_honey_power_by_bee_type/${beeType}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryShowHoneyPowerByApiaryId
   * @summary Queries a list of ShowHoneyPowerByApiaryId items.
   * @request GET:/MonetaToday/honeywood/bears/show_honey_power_in_apiary/{apiaryId}
   */
  queryShowHoneyPowerByApiaryId = (apiaryId: string, params: RequestParams = {}) =>
    this.request<BearsQueryShowHoneyPowerByApiaryIdResponse, RpcStatus>({
      path: `/MonetaToday/honeywood/bears/show_honey_power_in_apiary/${apiaryId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryShowLastAirInfo
   * @summary Queries a list of ShowLastAirInfo items.
   * @request GET:/MonetaToday/honeywood/bears/show_last_air_info
   */
  queryShowLastAirInfo = (params: RequestParams = {}) =>
    this.request<BearsQueryShowLastAirInfoResponse, RpcStatus>({
      path: `/MonetaToday/honeywood/bears/show_last_air_info`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryShowTreesInfoByBearId
   * @summary Queries a list of ShowTreesInfoByBearId items.
   * @request GET:/MonetaToday/honeywood/bears/show_trees_info_by_bear_id/{bearId}
   */
  queryShowTreesInfoByBearId = (bearId: string, params: RequestParams = {}) =>
    this.request<BearsQueryShowTreesInfoByBearIdResponse, RpcStatus>({
      path: `/MonetaToday/honeywood/bears/show_trees_info_by_bear_id/${bearId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryTreesAll
   * @summary Queries a list of Trees items.
   * @request GET:/MonetaToday/honeywood/bears/trees
   */
  queryTreesAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<BearsQueryAllTreesResponse, RpcStatus>({
      path: `/MonetaToday/honeywood/bears/trees`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryTrees
   * @summary Queries a Trees by id.
   * @request GET:/MonetaToday/honeywood/bears/trees/{id}
   */
  queryTrees = (id: string, params: RequestParams = {}) =>
    this.request<BearsQueryGetTreesResponse, RpcStatus>({
      path: `/MonetaToday/honeywood/bears/trees/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
}
