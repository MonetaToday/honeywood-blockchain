import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../bears/params";
import { BearNames } from "../bears/bear_names";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { Bears } from "../bears/bears";
import { AddressBears } from "../bears/address_bears";
import { Fields } from "../bears/fields";
import { Trees } from "../bears/trees";
import { Decorations } from "../bears/decorations";
import { Apiaries, ApiaryParams } from "../bears/apiaries";
import { Bees } from "../bears/bees";
import { AirInfo } from "../bears/air_info";
export declare const protobufPackage = "MonetaToday.honeywood.bears";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params | undefined;
}
export interface QueryGetBearNamesRequest {
    name: string;
}
export interface QueryGetBearNamesResponse {
    bearNames: BearNames | undefined;
}
export interface QueryAllBearNamesRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllBearNamesResponse {
    bearNames: BearNames[];
    pagination: PageResponse | undefined;
}
export interface QueryGetBearsRequest {
    id: number;
}
export interface QueryGetBearsResponse {
    Bears: Bears | undefined;
}
export interface QueryAllBearsRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllBearsResponse {
    Bears: Bears[];
    pagination: PageResponse | undefined;
}
export interface QueryGetAddressBearsRequest {
    address: string;
}
export interface QueryGetAddressBearsResponse {
    addressBears: AddressBears | undefined;
}
export interface QueryAllAddressBearsRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllAddressBearsResponse {
    addressBears: AddressBears[];
    pagination: PageResponse | undefined;
}
export interface QueryGetFieldsRequest {
    id: number;
}
export interface QueryGetFieldsResponse {
    Fields: Fields | undefined;
}
export interface QueryAllFieldsRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllFieldsResponse {
    Fields: Fields[];
    pagination: PageResponse | undefined;
}
export interface QueryGetTreesRequest {
    id: number;
}
export interface QueryGetTreesResponse {
    Trees: Trees | undefined;
}
export interface QueryAllTreesRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllTreesResponse {
    Trees: Trees[];
    pagination: PageResponse | undefined;
}
export interface QueryGetDecorationsRequest {
    id: number;
}
export interface QueryGetDecorationsResponse {
    Decorations: Decorations | undefined;
}
export interface QueryAllDecorationsRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllDecorationsResponse {
    Decorations: Decorations[];
    pagination: PageResponse | undefined;
}
export interface QueryGetApiariesRequest {
    id: number;
}
export interface QueryGetApiariesResponse {
    Apiaries: Apiaries | undefined;
}
export interface QueryAllApiariesRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllApiariesResponse {
    Apiaries: Apiaries[];
    pagination: PageResponse | undefined;
}
export interface QueryGetBeesRequest {
    id: number;
}
export interface QueryGetBeesResponse {
    Bees: Bees | undefined;
}
export interface QueryAllBeesRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllBeesResponse {
    Bees: Bees[];
    pagination: PageResponse | undefined;
}
export interface QueryCalculateHoneyInApiaryRequest {
    apiaryId: number;
}
export interface QueryCalculateHoneyInApiaryResponse {
    countHoney: string;
}
export interface QueryGetAirInfoRequest {
}
export interface QueryGetAirInfoResponse {
    AirInfo: AirInfo | undefined;
}
export interface QueryShowLastAirInfoRequest {
}
export interface QueryShowLastAirInfoResponse {
    height: number;
    count: string;
    purity: string;
    supply: string;
    consume: string;
}
export interface QueryShowApiariesInfoByBearIdRequest {
    bearId: number;
}
export interface QueryShowApiariesInfoByBearIdResponse {
    apiariesInfo: QueryShowApiariesInfoByBearIdResponse_ApiaryInfo[];
}
export interface QueryShowApiariesInfoByBearIdResponse_ApiaryInfo {
    id: number;
    countHoney: string;
    params: ApiaryParams | undefined;
}
export interface QueryShowHoneyPowerByApiaryIdRequest {
    apiaryId: number;
}
export interface QueryShowHoneyPowerByApiaryIdResponse {
    honeyPower: string;
}
export interface QueryShowHoneyPowerByBeeTypeRequest {
    beeType: string;
}
export interface QueryShowHoneyPowerByBeeTypeResponse {
    honeyPower: string;
}
export interface QueryShowHoneyPowerByBearIdRequest {
    bearId: number;
}
export interface QueryShowHoneyPowerByBearIdResponse {
    honeyPower: string;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryGetBearNamesRequest: {
    encode(message: QueryGetBearNamesRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetBearNamesRequest;
    fromJSON(object: any): QueryGetBearNamesRequest;
    toJSON(message: QueryGetBearNamesRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetBearNamesRequest>): QueryGetBearNamesRequest;
};
export declare const QueryGetBearNamesResponse: {
    encode(message: QueryGetBearNamesResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetBearNamesResponse;
    fromJSON(object: any): QueryGetBearNamesResponse;
    toJSON(message: QueryGetBearNamesResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetBearNamesResponse>): QueryGetBearNamesResponse;
};
export declare const QueryAllBearNamesRequest: {
    encode(message: QueryAllBearNamesRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllBearNamesRequest;
    fromJSON(object: any): QueryAllBearNamesRequest;
    toJSON(message: QueryAllBearNamesRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllBearNamesRequest>): QueryAllBearNamesRequest;
};
export declare const QueryAllBearNamesResponse: {
    encode(message: QueryAllBearNamesResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllBearNamesResponse;
    fromJSON(object: any): QueryAllBearNamesResponse;
    toJSON(message: QueryAllBearNamesResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllBearNamesResponse>): QueryAllBearNamesResponse;
};
export declare const QueryGetBearsRequest: {
    encode(message: QueryGetBearsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetBearsRequest;
    fromJSON(object: any): QueryGetBearsRequest;
    toJSON(message: QueryGetBearsRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetBearsRequest>): QueryGetBearsRequest;
};
export declare const QueryGetBearsResponse: {
    encode(message: QueryGetBearsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetBearsResponse;
    fromJSON(object: any): QueryGetBearsResponse;
    toJSON(message: QueryGetBearsResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetBearsResponse>): QueryGetBearsResponse;
};
export declare const QueryAllBearsRequest: {
    encode(message: QueryAllBearsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllBearsRequest;
    fromJSON(object: any): QueryAllBearsRequest;
    toJSON(message: QueryAllBearsRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllBearsRequest>): QueryAllBearsRequest;
};
export declare const QueryAllBearsResponse: {
    encode(message: QueryAllBearsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllBearsResponse;
    fromJSON(object: any): QueryAllBearsResponse;
    toJSON(message: QueryAllBearsResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllBearsResponse>): QueryAllBearsResponse;
};
export declare const QueryGetAddressBearsRequest: {
    encode(message: QueryGetAddressBearsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetAddressBearsRequest;
    fromJSON(object: any): QueryGetAddressBearsRequest;
    toJSON(message: QueryGetAddressBearsRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetAddressBearsRequest>): QueryGetAddressBearsRequest;
};
export declare const QueryGetAddressBearsResponse: {
    encode(message: QueryGetAddressBearsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetAddressBearsResponse;
    fromJSON(object: any): QueryGetAddressBearsResponse;
    toJSON(message: QueryGetAddressBearsResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetAddressBearsResponse>): QueryGetAddressBearsResponse;
};
export declare const QueryAllAddressBearsRequest: {
    encode(message: QueryAllAddressBearsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllAddressBearsRequest;
    fromJSON(object: any): QueryAllAddressBearsRequest;
    toJSON(message: QueryAllAddressBearsRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllAddressBearsRequest>): QueryAllAddressBearsRequest;
};
export declare const QueryAllAddressBearsResponse: {
    encode(message: QueryAllAddressBearsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllAddressBearsResponse;
    fromJSON(object: any): QueryAllAddressBearsResponse;
    toJSON(message: QueryAllAddressBearsResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllAddressBearsResponse>): QueryAllAddressBearsResponse;
};
export declare const QueryGetFieldsRequest: {
    encode(message: QueryGetFieldsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetFieldsRequest;
    fromJSON(object: any): QueryGetFieldsRequest;
    toJSON(message: QueryGetFieldsRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetFieldsRequest>): QueryGetFieldsRequest;
};
export declare const QueryGetFieldsResponse: {
    encode(message: QueryGetFieldsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetFieldsResponse;
    fromJSON(object: any): QueryGetFieldsResponse;
    toJSON(message: QueryGetFieldsResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetFieldsResponse>): QueryGetFieldsResponse;
};
export declare const QueryAllFieldsRequest: {
    encode(message: QueryAllFieldsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllFieldsRequest;
    fromJSON(object: any): QueryAllFieldsRequest;
    toJSON(message: QueryAllFieldsRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllFieldsRequest>): QueryAllFieldsRequest;
};
export declare const QueryAllFieldsResponse: {
    encode(message: QueryAllFieldsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllFieldsResponse;
    fromJSON(object: any): QueryAllFieldsResponse;
    toJSON(message: QueryAllFieldsResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllFieldsResponse>): QueryAllFieldsResponse;
};
export declare const QueryGetTreesRequest: {
    encode(message: QueryGetTreesRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetTreesRequest;
    fromJSON(object: any): QueryGetTreesRequest;
    toJSON(message: QueryGetTreesRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetTreesRequest>): QueryGetTreesRequest;
};
export declare const QueryGetTreesResponse: {
    encode(message: QueryGetTreesResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetTreesResponse;
    fromJSON(object: any): QueryGetTreesResponse;
    toJSON(message: QueryGetTreesResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetTreesResponse>): QueryGetTreesResponse;
};
export declare const QueryAllTreesRequest: {
    encode(message: QueryAllTreesRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllTreesRequest;
    fromJSON(object: any): QueryAllTreesRequest;
    toJSON(message: QueryAllTreesRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllTreesRequest>): QueryAllTreesRequest;
};
export declare const QueryAllTreesResponse: {
    encode(message: QueryAllTreesResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllTreesResponse;
    fromJSON(object: any): QueryAllTreesResponse;
    toJSON(message: QueryAllTreesResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllTreesResponse>): QueryAllTreesResponse;
};
export declare const QueryGetDecorationsRequest: {
    encode(message: QueryGetDecorationsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetDecorationsRequest;
    fromJSON(object: any): QueryGetDecorationsRequest;
    toJSON(message: QueryGetDecorationsRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetDecorationsRequest>): QueryGetDecorationsRequest;
};
export declare const QueryGetDecorationsResponse: {
    encode(message: QueryGetDecorationsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetDecorationsResponse;
    fromJSON(object: any): QueryGetDecorationsResponse;
    toJSON(message: QueryGetDecorationsResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetDecorationsResponse>): QueryGetDecorationsResponse;
};
export declare const QueryAllDecorationsRequest: {
    encode(message: QueryAllDecorationsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllDecorationsRequest;
    fromJSON(object: any): QueryAllDecorationsRequest;
    toJSON(message: QueryAllDecorationsRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllDecorationsRequest>): QueryAllDecorationsRequest;
};
export declare const QueryAllDecorationsResponse: {
    encode(message: QueryAllDecorationsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllDecorationsResponse;
    fromJSON(object: any): QueryAllDecorationsResponse;
    toJSON(message: QueryAllDecorationsResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllDecorationsResponse>): QueryAllDecorationsResponse;
};
export declare const QueryGetApiariesRequest: {
    encode(message: QueryGetApiariesRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetApiariesRequest;
    fromJSON(object: any): QueryGetApiariesRequest;
    toJSON(message: QueryGetApiariesRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetApiariesRequest>): QueryGetApiariesRequest;
};
export declare const QueryGetApiariesResponse: {
    encode(message: QueryGetApiariesResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetApiariesResponse;
    fromJSON(object: any): QueryGetApiariesResponse;
    toJSON(message: QueryGetApiariesResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetApiariesResponse>): QueryGetApiariesResponse;
};
export declare const QueryAllApiariesRequest: {
    encode(message: QueryAllApiariesRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllApiariesRequest;
    fromJSON(object: any): QueryAllApiariesRequest;
    toJSON(message: QueryAllApiariesRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllApiariesRequest>): QueryAllApiariesRequest;
};
export declare const QueryAllApiariesResponse: {
    encode(message: QueryAllApiariesResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllApiariesResponse;
    fromJSON(object: any): QueryAllApiariesResponse;
    toJSON(message: QueryAllApiariesResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllApiariesResponse>): QueryAllApiariesResponse;
};
export declare const QueryGetBeesRequest: {
    encode(message: QueryGetBeesRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetBeesRequest;
    fromJSON(object: any): QueryGetBeesRequest;
    toJSON(message: QueryGetBeesRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetBeesRequest>): QueryGetBeesRequest;
};
export declare const QueryGetBeesResponse: {
    encode(message: QueryGetBeesResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetBeesResponse;
    fromJSON(object: any): QueryGetBeesResponse;
    toJSON(message: QueryGetBeesResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetBeesResponse>): QueryGetBeesResponse;
};
export declare const QueryAllBeesRequest: {
    encode(message: QueryAllBeesRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllBeesRequest;
    fromJSON(object: any): QueryAllBeesRequest;
    toJSON(message: QueryAllBeesRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllBeesRequest>): QueryAllBeesRequest;
};
export declare const QueryAllBeesResponse: {
    encode(message: QueryAllBeesResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllBeesResponse;
    fromJSON(object: any): QueryAllBeesResponse;
    toJSON(message: QueryAllBeesResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllBeesResponse>): QueryAllBeesResponse;
};
export declare const QueryCalculateHoneyInApiaryRequest: {
    encode(message: QueryCalculateHoneyInApiaryRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryCalculateHoneyInApiaryRequest;
    fromJSON(object: any): QueryCalculateHoneyInApiaryRequest;
    toJSON(message: QueryCalculateHoneyInApiaryRequest): unknown;
    fromPartial(object: DeepPartial<QueryCalculateHoneyInApiaryRequest>): QueryCalculateHoneyInApiaryRequest;
};
export declare const QueryCalculateHoneyInApiaryResponse: {
    encode(message: QueryCalculateHoneyInApiaryResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryCalculateHoneyInApiaryResponse;
    fromJSON(object: any): QueryCalculateHoneyInApiaryResponse;
    toJSON(message: QueryCalculateHoneyInApiaryResponse): unknown;
    fromPartial(object: DeepPartial<QueryCalculateHoneyInApiaryResponse>): QueryCalculateHoneyInApiaryResponse;
};
export declare const QueryGetAirInfoRequest: {
    encode(_: QueryGetAirInfoRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetAirInfoRequest;
    fromJSON(_: any): QueryGetAirInfoRequest;
    toJSON(_: QueryGetAirInfoRequest): unknown;
    fromPartial(_: DeepPartial<QueryGetAirInfoRequest>): QueryGetAirInfoRequest;
};
export declare const QueryGetAirInfoResponse: {
    encode(message: QueryGetAirInfoResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetAirInfoResponse;
    fromJSON(object: any): QueryGetAirInfoResponse;
    toJSON(message: QueryGetAirInfoResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetAirInfoResponse>): QueryGetAirInfoResponse;
};
export declare const QueryShowLastAirInfoRequest: {
    encode(_: QueryShowLastAirInfoRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryShowLastAirInfoRequest;
    fromJSON(_: any): QueryShowLastAirInfoRequest;
    toJSON(_: QueryShowLastAirInfoRequest): unknown;
    fromPartial(_: DeepPartial<QueryShowLastAirInfoRequest>): QueryShowLastAirInfoRequest;
};
export declare const QueryShowLastAirInfoResponse: {
    encode(message: QueryShowLastAirInfoResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryShowLastAirInfoResponse;
    fromJSON(object: any): QueryShowLastAirInfoResponse;
    toJSON(message: QueryShowLastAirInfoResponse): unknown;
    fromPartial(object: DeepPartial<QueryShowLastAirInfoResponse>): QueryShowLastAirInfoResponse;
};
export declare const QueryShowApiariesInfoByBearIdRequest: {
    encode(message: QueryShowApiariesInfoByBearIdRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryShowApiariesInfoByBearIdRequest;
    fromJSON(object: any): QueryShowApiariesInfoByBearIdRequest;
    toJSON(message: QueryShowApiariesInfoByBearIdRequest): unknown;
    fromPartial(object: DeepPartial<QueryShowApiariesInfoByBearIdRequest>): QueryShowApiariesInfoByBearIdRequest;
};
export declare const QueryShowApiariesInfoByBearIdResponse: {
    encode(message: QueryShowApiariesInfoByBearIdResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryShowApiariesInfoByBearIdResponse;
    fromJSON(object: any): QueryShowApiariesInfoByBearIdResponse;
    toJSON(message: QueryShowApiariesInfoByBearIdResponse): unknown;
    fromPartial(object: DeepPartial<QueryShowApiariesInfoByBearIdResponse>): QueryShowApiariesInfoByBearIdResponse;
};
export declare const QueryShowApiariesInfoByBearIdResponse_ApiaryInfo: {
    encode(message: QueryShowApiariesInfoByBearIdResponse_ApiaryInfo, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryShowApiariesInfoByBearIdResponse_ApiaryInfo;
    fromJSON(object: any): QueryShowApiariesInfoByBearIdResponse_ApiaryInfo;
    toJSON(message: QueryShowApiariesInfoByBearIdResponse_ApiaryInfo): unknown;
    fromPartial(object: DeepPartial<QueryShowApiariesInfoByBearIdResponse_ApiaryInfo>): QueryShowApiariesInfoByBearIdResponse_ApiaryInfo;
};
export declare const QueryShowHoneyPowerByApiaryIdRequest: {
    encode(message: QueryShowHoneyPowerByApiaryIdRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryShowHoneyPowerByApiaryIdRequest;
    fromJSON(object: any): QueryShowHoneyPowerByApiaryIdRequest;
    toJSON(message: QueryShowHoneyPowerByApiaryIdRequest): unknown;
    fromPartial(object: DeepPartial<QueryShowHoneyPowerByApiaryIdRequest>): QueryShowHoneyPowerByApiaryIdRequest;
};
export declare const QueryShowHoneyPowerByApiaryIdResponse: {
    encode(message: QueryShowHoneyPowerByApiaryIdResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryShowHoneyPowerByApiaryIdResponse;
    fromJSON(object: any): QueryShowHoneyPowerByApiaryIdResponse;
    toJSON(message: QueryShowHoneyPowerByApiaryIdResponse): unknown;
    fromPartial(object: DeepPartial<QueryShowHoneyPowerByApiaryIdResponse>): QueryShowHoneyPowerByApiaryIdResponse;
};
export declare const QueryShowHoneyPowerByBeeTypeRequest: {
    encode(message: QueryShowHoneyPowerByBeeTypeRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryShowHoneyPowerByBeeTypeRequest;
    fromJSON(object: any): QueryShowHoneyPowerByBeeTypeRequest;
    toJSON(message: QueryShowHoneyPowerByBeeTypeRequest): unknown;
    fromPartial(object: DeepPartial<QueryShowHoneyPowerByBeeTypeRequest>): QueryShowHoneyPowerByBeeTypeRequest;
};
export declare const QueryShowHoneyPowerByBeeTypeResponse: {
    encode(message: QueryShowHoneyPowerByBeeTypeResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryShowHoneyPowerByBeeTypeResponse;
    fromJSON(object: any): QueryShowHoneyPowerByBeeTypeResponse;
    toJSON(message: QueryShowHoneyPowerByBeeTypeResponse): unknown;
    fromPartial(object: DeepPartial<QueryShowHoneyPowerByBeeTypeResponse>): QueryShowHoneyPowerByBeeTypeResponse;
};
export declare const QueryShowHoneyPowerByBearIdRequest: {
    encode(message: QueryShowHoneyPowerByBearIdRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryShowHoneyPowerByBearIdRequest;
    fromJSON(object: any): QueryShowHoneyPowerByBearIdRequest;
    toJSON(message: QueryShowHoneyPowerByBearIdRequest): unknown;
    fromPartial(object: DeepPartial<QueryShowHoneyPowerByBearIdRequest>): QueryShowHoneyPowerByBearIdRequest;
};
export declare const QueryShowHoneyPowerByBearIdResponse: {
    encode(message: QueryShowHoneyPowerByBearIdResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryShowHoneyPowerByBearIdResponse;
    fromJSON(object: any): QueryShowHoneyPowerByBearIdResponse;
    toJSON(message: QueryShowHoneyPowerByBearIdResponse): unknown;
    fromPartial(object: DeepPartial<QueryShowHoneyPowerByBearIdResponse>): QueryShowHoneyPowerByBearIdResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a BearNames by index. */
    BearNames(request: QueryGetBearNamesRequest): Promise<QueryGetBearNamesResponse>;
    /** Queries a list of BearNames items. */
    BearNamesAll(request: QueryAllBearNamesRequest): Promise<QueryAllBearNamesResponse>;
    /** Queries a Bears by id. */
    Bears(request: QueryGetBearsRequest): Promise<QueryGetBearsResponse>;
    /** Queries a list of Bears items. */
    BearsAll(request: QueryAllBearsRequest): Promise<QueryAllBearsResponse>;
    /** Queries a AddressBears by index. */
    AddressBears(request: QueryGetAddressBearsRequest): Promise<QueryGetAddressBearsResponse>;
    /** Queries a list of AddressBears items. */
    AddressBearsAll(request: QueryAllAddressBearsRequest): Promise<QueryAllAddressBearsResponse>;
    /** Queries a Fields by id. */
    Fields(request: QueryGetFieldsRequest): Promise<QueryGetFieldsResponse>;
    /** Queries a list of Fields items. */
    FieldsAll(request: QueryAllFieldsRequest): Promise<QueryAllFieldsResponse>;
    /** Queries a Trees by id. */
    Trees(request: QueryGetTreesRequest): Promise<QueryGetTreesResponse>;
    /** Queries a list of Trees items. */
    TreesAll(request: QueryAllTreesRequest): Promise<QueryAllTreesResponse>;
    /** Queries a Decorations by id. */
    Decorations(request: QueryGetDecorationsRequest): Promise<QueryGetDecorationsResponse>;
    /** Queries a list of Decorations items. */
    DecorationsAll(request: QueryAllDecorationsRequest): Promise<QueryAllDecorationsResponse>;
    /** Queries a Apiaries by id. */
    Apiaries(request: QueryGetApiariesRequest): Promise<QueryGetApiariesResponse>;
    /** Queries a list of Apiaries items. */
    ApiariesAll(request: QueryAllApiariesRequest): Promise<QueryAllApiariesResponse>;
    /** Queries a Bees by id. */
    Bees(request: QueryGetBeesRequest): Promise<QueryGetBeesResponse>;
    /** Queries a list of Bees items. */
    BeesAll(request: QueryAllBeesRequest): Promise<QueryAllBeesResponse>;
    /** Queries a list of CalculateHoneyInApiary items. */
    CalculateHoneyInApiary(request: QueryCalculateHoneyInApiaryRequest): Promise<QueryCalculateHoneyInApiaryResponse>;
    /** Queries a AirInfo by index. */
    AirInfo(request: QueryGetAirInfoRequest): Promise<QueryGetAirInfoResponse>;
    /** Queries a list of ShowLastAirInfo items. */
    ShowLastAirInfo(request: QueryShowLastAirInfoRequest): Promise<QueryShowLastAirInfoResponse>;
    /** Queries a list of ShowApiariesInfoByBearId items. */
    ShowApiariesInfoByBearId(request: QueryShowApiariesInfoByBearIdRequest): Promise<QueryShowApiariesInfoByBearIdResponse>;
    /** Queries a list of ShowHoneyPowerByApiaryId items. */
    ShowHoneyPowerByApiaryId(request: QueryShowHoneyPowerByApiaryIdRequest): Promise<QueryShowHoneyPowerByApiaryIdResponse>;
    /** Queries a list of ShowHoneyPowerByBeeType items. */
    ShowHoneyPowerByBeeType(request: QueryShowHoneyPowerByBeeTypeRequest): Promise<QueryShowHoneyPowerByBeeTypeResponse>;
    /** Queries a list of ShowHoneyPowerByBearId items. */
    ShowHoneyPowerByBearId(request: QueryShowHoneyPowerByBearIdRequest): Promise<QueryShowHoneyPowerByBearIdResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    BearNames(request: QueryGetBearNamesRequest): Promise<QueryGetBearNamesResponse>;
    BearNamesAll(request: QueryAllBearNamesRequest): Promise<QueryAllBearNamesResponse>;
    Bears(request: QueryGetBearsRequest): Promise<QueryGetBearsResponse>;
    BearsAll(request: QueryAllBearsRequest): Promise<QueryAllBearsResponse>;
    AddressBears(request: QueryGetAddressBearsRequest): Promise<QueryGetAddressBearsResponse>;
    AddressBearsAll(request: QueryAllAddressBearsRequest): Promise<QueryAllAddressBearsResponse>;
    Fields(request: QueryGetFieldsRequest): Promise<QueryGetFieldsResponse>;
    FieldsAll(request: QueryAllFieldsRequest): Promise<QueryAllFieldsResponse>;
    Trees(request: QueryGetTreesRequest): Promise<QueryGetTreesResponse>;
    TreesAll(request: QueryAllTreesRequest): Promise<QueryAllTreesResponse>;
    Decorations(request: QueryGetDecorationsRequest): Promise<QueryGetDecorationsResponse>;
    DecorationsAll(request: QueryAllDecorationsRequest): Promise<QueryAllDecorationsResponse>;
    Apiaries(request: QueryGetApiariesRequest): Promise<QueryGetApiariesResponse>;
    ApiariesAll(request: QueryAllApiariesRequest): Promise<QueryAllApiariesResponse>;
    Bees(request: QueryGetBeesRequest): Promise<QueryGetBeesResponse>;
    BeesAll(request: QueryAllBeesRequest): Promise<QueryAllBeesResponse>;
    CalculateHoneyInApiary(request: QueryCalculateHoneyInApiaryRequest): Promise<QueryCalculateHoneyInApiaryResponse>;
    AirInfo(request: QueryGetAirInfoRequest): Promise<QueryGetAirInfoResponse>;
    ShowLastAirInfo(request: QueryShowLastAirInfoRequest): Promise<QueryShowLastAirInfoResponse>;
    ShowApiariesInfoByBearId(request: QueryShowApiariesInfoByBearIdRequest): Promise<QueryShowApiariesInfoByBearIdResponse>;
    ShowHoneyPowerByApiaryId(request: QueryShowHoneyPowerByApiaryIdRequest): Promise<QueryShowHoneyPowerByApiaryIdResponse>;
    ShowHoneyPowerByBeeType(request: QueryShowHoneyPowerByBeeTypeRequest): Promise<QueryShowHoneyPowerByBeeTypeResponse>;
    ShowHoneyPowerByBearId(request: QueryShowHoneyPowerByBearIdRequest): Promise<QueryShowHoneyPowerByBearIdResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
