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
export var ItemsItemTypes;
(function (ItemsItemTypes) {
    ItemsItemTypes["APIARY"] = "APIARY";
    ItemsItemTypes["TREE"] = "TREE";
    ItemsItemTypes["DECORATION"] = "DECORATION";
})(ItemsItemTypes || (ItemsItemTypes = {}));
export var ContentType;
(function (ContentType) {
    ContentType["Json"] = "application/json";
    ContentType["FormData"] = "multipart/form-data";
    ContentType["UrlEncoded"] = "application/x-www-form-urlencoded";
})(ContentType || (ContentType = {}));
export class HttpClient {
    constructor(apiConfig = {}) {
        this.baseUrl = "";
        this.securityData = null;
        this.securityWorker = null;
        this.abortControllers = new Map();
        this.baseApiParams = {
            credentials: "same-origin",
            headers: {},
            redirect: "follow",
            referrerPolicy: "no-referrer",
        };
        this.setSecurityData = (data) => {
            this.securityData = data;
        };
        this.contentFormatters = {
            [ContentType.Json]: (input) => input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
            [ContentType.FormData]: (input) => Object.keys(input || {}).reduce((data, key) => {
                data.append(key, input[key]);
                return data;
            }, new FormData()),
            [ContentType.UrlEncoded]: (input) => this.toQueryString(input),
        };
        this.createAbortSignal = (cancelToken) => {
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
        this.abortRequest = (cancelToken) => {
            const abortController = this.abortControllers.get(cancelToken);
            if (abortController) {
                abortController.abort();
                this.abortControllers.delete(cancelToken);
            }
        };
        this.request = ({ body, secure, path, type, query, format = "json", baseUrl, cancelToken, ...params }) => {
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
                const r = response;
                r.data = null;
                r.error = null;
                const data = await response[format]()
                    .then((data) => {
                    if (r.ok) {
                        r.data = data;
                    }
                    else {
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
                if (!response.ok)
                    throw data;
                return data;
            });
        };
        Object.assign(this, apiConfig);
    }
    addQueryParam(query, key) {
        const value = query[key];
        return (encodeURIComponent(key) +
            "=" +
            encodeURIComponent(Array.isArray(value) ? value.join(",") : typeof value === "number" ? value : `${value}`));
    }
    toQueryString(rawQuery) {
        const query = rawQuery || {};
        const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
        return keys
            .map((key) => typeof query[key] === "object" && !Array.isArray(query[key])
            ? this.toQueryString(query[key])
            : this.addQueryParam(query, key))
            .join("&");
    }
    addQueryParams(rawQuery) {
        const queryString = this.toQueryString(rawQuery);
        return queryString ? `?${queryString}` : "";
    }
    mergeRequestParams(params1, params2) {
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
}
/**
 * @title bears/address_bears.proto
 * @version version not set
 */
export class Api extends HttpClient {
    constructor() {
        super(...arguments);
        /**
         * No description
         *
         * @tags Query
         * @name QueryAddressBearsAll
         * @summary Queries a list of AddressBears items.
         * @request GET:/MonetaToday/honeywood/bears/address_bears
         */
        this.queryAddressBearsAll = (query, params = {}) => this.request({
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
        this.queryAddressBears = (address, params = {}) => this.request({
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
        this.queryAirHistoryAll = (query, params = {}) => this.request({
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
        this.queryAirInfo = (params = {}) => this.request({
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
        this.queryApiariesAll = (query, params = {}) => this.request({
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
        this.queryApiaries = (id, params = {}) => this.request({
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
        this.queryBearNamesAll = (query, params = {}) => this.request({
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
        this.queryBearNames = (name, params = {}) => this.request({
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
        this.queryBearsAll = (query, params = {}) => this.request({
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
        this.queryBears = (id, params = {}) => this.request({
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
        this.queryBeesAll = (query, params = {}) => this.request({
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
        this.queryBees = (id, params = {}) => this.request({
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
        this.queryCalculateHoneyInApiary = (apiaryId, params = {}) => this.request({
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
        this.queryDecorationsAll = (query, params = {}) => this.request({
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
        this.queryDecorations = (id, params = {}) => this.request({
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
        this.queryFieldsAll = (query, params = {}) => this.request({
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
        this.queryFields = (id, params = {}) => this.request({
            path: `/MonetaToday/honeywood/bears/fields/${id}`,
            method: "GET",
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryListAddressesStatistic
         * @summary Queries a list of ListAddressesStatistic items.
         * @request GET:/MonetaToday/honeywood/bears/list_addresses_statistic
         */
        this.queryListAddressesStatistic = (query, params = {}) => this.request({
            path: `/MonetaToday/honeywood/bears/list_addresses_statistic`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryListBearsStatistic
         * @summary Queries a list of ListBearsStatistic items.
         * @request GET:/MonetaToday/honeywood/bears/list_bears_statistic
         */
        this.queryListBearsStatistic = (query, params = {}) => this.request({
            path: `/MonetaToday/honeywood/bears/list_bears_statistic`,
            method: "GET",
            query: query,
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
        this.queryParams = (params = {}) => this.request({
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
        this.queryShowBeesInfoByBearId = (bearId, params = {}) => this.request({
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
        this.queryShowDecorationsInfoByBearId = (bearId, params = {}) => this.request({
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
        this.queryShowApiariesInfoByBearId = (bearId, params = {}) => this.request({
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
        this.queryShowHoneyPowerByBearId = (bearId, params = {}) => this.request({
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
        this.queryShowHoneyPowerByBeeType = (beeType, params = {}) => this.request({
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
        this.queryShowHoneyPowerByApiaryId = (apiaryId, params = {}) => this.request({
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
        this.queryShowLastAirInfo = (params = {}) => this.request({
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
        this.queryShowTreesInfoByBearId = (bearId, params = {}) => this.request({
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
        this.queryTreesAll = (query, params = {}) => this.request({
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
        this.queryTrees = (id, params = {}) => this.request({
            path: `/MonetaToday/honeywood/bears/trees/${id}`,
            method: "GET",
            format: "json",
            ...params,
        });
    }
}
