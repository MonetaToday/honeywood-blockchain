export declare enum FieldsFieldTypes {
    DEFAULT = "DEFAULT"
}
export declare enum ItemsItemTypes {
    APIARY = "APIARY",
    TREE = "TREE",
    DECORATION = "DECORATION"
}
export interface TilesItems {
    /** @format uint64 */
    itemId?: string;
    itemType?: ItemsItemTypes;
}
export declare enum TreesTreeTypes {
    OAK = "OAK",
    SPRUCE = "SPRUCE",
    APPLETREE = "APPLETREE",
    WILLOW = "WILLOW"
}
export interface BearsAddressBears {
    address?: string;
    bears?: string[];
}
export interface BearsApiaries {
    /** @format uint64 */
    id?: string;
    bearOwner?: BearsBearOwner;
    position?: BearsItemPosition;
    /** @format uint64 */
    countBees?: string;
    params?: BearsApiaryParams;
    /** @format uint64 */
    cycleStartBlock?: string;
    cycleBeesHistory?: BearsCycleBeesHistory[];
}
export interface BearsApiaryHouse {
    /** @format uint64 */
    id?: string;
}
export interface BearsApiaryParams {
    apiaryType?: string;
    price?: V1Beta1Coin[];
    /** @format uint64 */
    maxCountBees?: string;
    /** @format uint64 */
    maxCountHoney?: string;
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
    beeType?: string;
    price?: V1Beta1Coin[];
    honeyPerBlock?: string;
    /** @format uint64 */
    bodySize?: string;
    oxygenSense?: string;
}
export interface BearsBees {
    /** @format uint64 */
    id?: string;
    bearOwner?: BearsBearOwner;
    apiaryHouse?: BearsApiaryHouse;
    params?: BearsBeeParams;
}
export interface BearsCycleBeesHistory {
    /** @format uint64 */
    block?: string;
    bees?: string[];
}
export interface BearsDecorationParams {
    decorationType?: string;
    price?: V1Beta1Coin[];
}
export interface BearsDecorations {
    /** @format uint64 */
    id?: string;
    bearOwner?: BearsBearOwner;
    params?: BearsDecorationParams;
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
export interface BearsMsgCreateApiaryResponse {
    apiary?: BearsApiaries;
}
export interface BearsMsgCreateDecorationResponse {
    decoration?: BearsDecorations;
}
export interface BearsMsgCreateTreeResponse {
    tree?: BearsTrees;
}
export interface BearsMsgExtendFieldResponse {
    /** @format uint64 */
    countTiles?: string;
}
export interface BearsMsgInitGameAndCreateApiaryResponse {
    apiary?: BearsApiaries;
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
export declare type BearsMsgInitGameAndSetNameResponse = object;
export declare type BearsMsgMoveItemOnFieldResponse = object;
export declare type BearsMsgSetDecorationPositionResponse = object;
export declare type BearsMsgSetNameResponse = object;
export declare type BearsMsgUnsetDecorationPositionResponse = object;
/**
 * Params defines the parameters for the module.
 */
export interface BearsParams {
    burnRate?: string;
    priceSetName?: V1Beta1Coin[];
    priceTile?: V1Beta1Coin[];
    priceTree?: V1Beta1Coin[];
    rewardTree?: V1Beta1Coin[];
    decorationTypes?: BearsDecorationParams[];
    apiaryTypes?: BearsApiaryParams[];
    beeTypes?: BearsBeeParams[];
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
export interface BearsQueryGetAddressBearsResponse {
    addressBears?: BearsAddressBears;
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
export interface BearsTiles {
    item?: TilesItems;
}
export interface BearsTrees {
    /** @format uint64 */
    id?: string;
    treeType?: TreesTreeTypes;
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
export declare type QueryParamsType = Record<string | number, any>;
export declare type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;
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
export declare type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;
export interface ApiConfig<SecurityDataType = unknown> {
    baseUrl?: string;
    baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
    securityWorker?: (securityData: SecurityDataType) => RequestParams | void;
}
export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
    data: D;
    error: E;
}
declare type CancelToken = Symbol | string | number;
export declare enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded"
}
export declare class HttpClient<SecurityDataType = unknown> {
    baseUrl: string;
    private securityData;
    private securityWorker;
    private abortControllers;
    private baseApiParams;
    constructor(apiConfig?: ApiConfig<SecurityDataType>);
    setSecurityData: (data: SecurityDataType) => void;
    private addQueryParam;
    protected toQueryString(rawQuery?: QueryParamsType): string;
    protected addQueryParams(rawQuery?: QueryParamsType): string;
    private contentFormatters;
    private mergeRequestParams;
    private createAbortSignal;
    abortRequest: (cancelToken: CancelToken) => void;
    request: <T = any, E = any>({ body, secure, path, type, query, format, baseUrl, cancelToken, ...params }: FullRequestParams) => Promise<HttpResponse<T, E>>;
}
/**
 * @title bears/address_bears.proto
 * @version version not set
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Query
     * @name QueryAddressBearsAll
     * @summary Queries a list of AddressBears items.
     * @request GET:/MonetaToday/honeywood/bears/address_bears
     */
    queryAddressBearsAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<BearsQueryAllAddressBearsResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryAddressBears
     * @summary Queries a AddressBears by index.
     * @request GET:/MonetaToday/honeywood/bears/address_bears/{address}
     */
    queryAddressBears: (address: string, params?: RequestParams) => Promise<HttpResponse<BearsQueryGetAddressBearsResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryApiariesAll
     * @summary Queries a list of Apiaries items.
     * @request GET:/MonetaToday/honeywood/bears/apiaries
     */
    queryApiariesAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<BearsQueryAllApiariesResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryApiaries
     * @summary Queries a Apiaries by id.
     * @request GET:/MonetaToday/honeywood/bears/apiaries/{id}
     */
    queryApiaries: (id: string, params?: RequestParams) => Promise<HttpResponse<BearsQueryGetApiariesResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryBearNamesAll
     * @summary Queries a list of BearNames items.
     * @request GET:/MonetaToday/honeywood/bears/bear_names
     */
    queryBearNamesAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<BearsQueryAllBearNamesResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryBearNames
     * @summary Queries a BearNames by index.
     * @request GET:/MonetaToday/honeywood/bears/bear_names/{name}
     */
    queryBearNames: (name: string, params?: RequestParams) => Promise<HttpResponse<BearsQueryGetBearNamesResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryBearsAll
     * @summary Queries a list of Bears items.
     * @request GET:/MonetaToday/honeywood/bears/bears
     */
    queryBearsAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<BearsQueryAllBearsResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryBears
     * @summary Queries a Bears by id.
     * @request GET:/MonetaToday/honeywood/bears/bears/{id}
     */
    queryBears: (id: string, params?: RequestParams) => Promise<HttpResponse<BearsQueryGetBearsResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryBeesAll
     * @summary Queries a list of Bees items.
     * @request GET:/MonetaToday/honeywood/bears/bees
     */
    queryBeesAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<BearsQueryAllBeesResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryBees
     * @summary Queries a Bees by id.
     * @request GET:/MonetaToday/honeywood/bears/bees/{id}
     */
    queryBees: (id: string, params?: RequestParams) => Promise<HttpResponse<BearsQueryGetBeesResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryDecorationsAll
     * @summary Queries a list of Decorations items.
     * @request GET:/MonetaToday/honeywood/bears/decorations
     */
    queryDecorationsAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<BearsQueryAllDecorationsResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryDecorations
     * @summary Queries a Decorations by id.
     * @request GET:/MonetaToday/honeywood/bears/decorations/{id}
     */
    queryDecorations: (id: string, params?: RequestParams) => Promise<HttpResponse<BearsQueryGetDecorationsResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryFieldsAll
     * @summary Queries a list of Fields items.
     * @request GET:/MonetaToday/honeywood/bears/fields
     */
    queryFieldsAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<BearsQueryAllFieldsResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryFields
     * @summary Queries a Fields by id.
     * @request GET:/MonetaToday/honeywood/bears/fields/{id}
     */
    queryFields: (id: string, params?: RequestParams) => Promise<HttpResponse<BearsQueryGetFieldsResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryParams
     * @summary Parameters queries the parameters of the module.
     * @request GET:/MonetaToday/honeywood/bears/params
     */
    queryParams: (params?: RequestParams) => Promise<HttpResponse<BearsQueryParamsResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryTreesAll
     * @summary Queries a list of Trees items.
     * @request GET:/MonetaToday/honeywood/bears/trees
     */
    queryTreesAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<BearsQueryAllTreesResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryTrees
     * @summary Queries a Trees by id.
     * @request GET:/MonetaToday/honeywood/bears/trees/{id}
     */
    queryTrees: (id: string, params?: RequestParams) => Promise<HttpResponse<BearsQueryGetTreesResponse, RpcStatus>>;
}
export {};
