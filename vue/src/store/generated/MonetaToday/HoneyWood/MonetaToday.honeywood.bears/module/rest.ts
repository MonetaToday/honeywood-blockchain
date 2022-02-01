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

export enum DecorationsDecorationTypes {
  FLOWERS = "FLOWERS",
  FLAG = "FLAG",
  LAMP = "LAMP",
  GREEN_BEE = "GREEN_BEE",
  FOUNTAIN = "FOUNTAIN",
}

export enum FieldsFieldTypes {
  DEFAULT = "DEFAULT",
}

export enum ItemsItemTypes {
  APIARY = "APIARY",
  TREE = "TREE",
  DECORATION = "DECORATION",
}

export interface TilesItems {
  /** @format uint64 */
  itemId?: string;
  itemType?: ItemsItemTypes;
}

export enum TreesTreeTypes {
  OAK = "OAK",
  SPRUCE = "SPRUCE",
  APPLETREE = "APPLETREE",
  WILLOW = "WILLOW",
}

export interface BearsAddressBears {
  address?: string;
  bears?: string[];
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

export interface BearsDecorations {
  /** @format uint64 */
  id?: string;

  /** @format uint64 */
  bearId?: string;
  decorationType?: DecorationsDecorationTypes;
  position?: BearsItemPosition;
}

export interface BearsFieldRows {
  columns?: BearsTiles[];
}

export interface BearsFields {
  /** @format uint64 */
  id?: string;
  bearOwner?: BearsBearOwner;
  fieldType?: FieldsFieldTypes;
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

export interface BearsMsgCreateTreeResponse {
  tree?: BearsTrees;
}

export interface BearsMsgExtendFieldResponse {
  /** @format uint64 */
  countTiles?: string;
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

export type BearsMsgSetNameResponse = object;

/**
 * Params defines the parameters for the module.
 */
export interface BearsParams {
  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  priceSetName?: V1Beta1Coin;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  priceTile?: V1Beta1Coin;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  priceTree?: V1Beta1Coin;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  rewardTree?: V1Beta1Coin;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  priceDecorationFlowers?: V1Beta1Coin;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  priceDecorationFlag?: V1Beta1Coin;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  priceDecorationLamp?: V1Beta1Coin;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  priceDecorationGreenBee?: V1Beta1Coin;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  priceDecorationFountain?: V1Beta1Coin;
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

export interface BearsQueryGetAddressBearsResponse {
  addressBears?: BearsAddressBears;
}

export interface BearsQueryGetBearNamesResponse {
  bearNames?: BearsBearNames;
}

export interface BearsQueryGetBearsResponse {
  Bears?: BearsBears;
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

export interface BearsTiles {
  item?: TilesItems;
}

export interface BearsTrees {
  /** @format uint64 */
  id?: string;
  treeType?: TreesTreeTypes;

  /** @format uint64 */
  bearId?: string;
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
  countTotal?: boolean;

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
  nextKey?: string;

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
      "pagination.countTotal"?: boolean;
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
   * @name QueryBearNamesAll
   * @summary Queries a list of BearNames items.
   * @request GET:/MonetaToday/honeywood/bears/bear_names
   */
  queryBearNamesAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.countTotal"?: boolean;
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
      "pagination.countTotal"?: boolean;
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
   * @name QueryDecorationsAll
   * @summary Queries a list of Decorations items.
   * @request GET:/MonetaToday/honeywood/bears/decorations
   */
  queryDecorationsAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.countTotal"?: boolean;
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
      "pagination.countTotal"?: boolean;
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
   * @name QueryTreesAll
   * @summary Queries a list of Trees items.
   * @request GET:/MonetaToday/honeywood/bears/trees
   */
  queryTreesAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.countTotal"?: boolean;
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
