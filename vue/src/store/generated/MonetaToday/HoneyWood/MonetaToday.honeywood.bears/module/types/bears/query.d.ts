import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../bears/params";
import { BearNames } from "../bears/bear_names";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { Bears } from "../bears/bears";
import { AddressBears } from "../bears/address_bears";
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
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
