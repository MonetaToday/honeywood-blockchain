import { Reader, Writer } from "protobufjs/minimal";
import { Trees } from "../bears/trees";
export declare const protobufPackage = "MonetaToday.honeywood.bears";
export interface MsgInitGameAndSetName {
    creator: string;
    name: string;
}
export interface MsgInitGameAndSetNameResponse {
}
export interface MsgSetName {
    creator: string;
    bearId: number;
    name: string;
}
export interface MsgSetNameResponse {
}
export interface MsgInitGameAndExtendPlace {
    creator: string;
}
export interface MsgInitGameAndExtendPlaceResponse {
    countGrounds: number;
}
export interface MsgExtendPlace {
    creator: string;
    id: number;
}
export interface MsgExtendPlaceResponse {
    countGrounds: number;
}
export interface MsgInitGameAndCreateTree {
    creator: string;
}
export interface MsgInitGameAndCreateTreeResponse {
    tree: Trees | undefined;
}
export declare const MsgInitGameAndSetName: {
    encode(message: MsgInitGameAndSetName, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgInitGameAndSetName;
    fromJSON(object: any): MsgInitGameAndSetName;
    toJSON(message: MsgInitGameAndSetName): unknown;
    fromPartial(object: DeepPartial<MsgInitGameAndSetName>): MsgInitGameAndSetName;
};
export declare const MsgInitGameAndSetNameResponse: {
    encode(_: MsgInitGameAndSetNameResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgInitGameAndSetNameResponse;
    fromJSON(_: any): MsgInitGameAndSetNameResponse;
    toJSON(_: MsgInitGameAndSetNameResponse): unknown;
    fromPartial(_: DeepPartial<MsgInitGameAndSetNameResponse>): MsgInitGameAndSetNameResponse;
};
export declare const MsgSetName: {
    encode(message: MsgSetName, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSetName;
    fromJSON(object: any): MsgSetName;
    toJSON(message: MsgSetName): unknown;
    fromPartial(object: DeepPartial<MsgSetName>): MsgSetName;
};
export declare const MsgSetNameResponse: {
    encode(_: MsgSetNameResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSetNameResponse;
    fromJSON(_: any): MsgSetNameResponse;
    toJSON(_: MsgSetNameResponse): unknown;
    fromPartial(_: DeepPartial<MsgSetNameResponse>): MsgSetNameResponse;
};
export declare const MsgInitGameAndExtendPlace: {
    encode(message: MsgInitGameAndExtendPlace, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgInitGameAndExtendPlace;
    fromJSON(object: any): MsgInitGameAndExtendPlace;
    toJSON(message: MsgInitGameAndExtendPlace): unknown;
    fromPartial(object: DeepPartial<MsgInitGameAndExtendPlace>): MsgInitGameAndExtendPlace;
};
export declare const MsgInitGameAndExtendPlaceResponse: {
    encode(message: MsgInitGameAndExtendPlaceResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgInitGameAndExtendPlaceResponse;
    fromJSON(object: any): MsgInitGameAndExtendPlaceResponse;
    toJSON(message: MsgInitGameAndExtendPlaceResponse): unknown;
    fromPartial(object: DeepPartial<MsgInitGameAndExtendPlaceResponse>): MsgInitGameAndExtendPlaceResponse;
};
export declare const MsgExtendPlace: {
    encode(message: MsgExtendPlace, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgExtendPlace;
    fromJSON(object: any): MsgExtendPlace;
    toJSON(message: MsgExtendPlace): unknown;
    fromPartial(object: DeepPartial<MsgExtendPlace>): MsgExtendPlace;
};
export declare const MsgExtendPlaceResponse: {
    encode(message: MsgExtendPlaceResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgExtendPlaceResponse;
    fromJSON(object: any): MsgExtendPlaceResponse;
    toJSON(message: MsgExtendPlaceResponse): unknown;
    fromPartial(object: DeepPartial<MsgExtendPlaceResponse>): MsgExtendPlaceResponse;
};
export declare const MsgInitGameAndCreateTree: {
    encode(message: MsgInitGameAndCreateTree, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgInitGameAndCreateTree;
    fromJSON(object: any): MsgInitGameAndCreateTree;
    toJSON(message: MsgInitGameAndCreateTree): unknown;
    fromPartial(object: DeepPartial<MsgInitGameAndCreateTree>): MsgInitGameAndCreateTree;
};
export declare const MsgInitGameAndCreateTreeResponse: {
    encode(message: MsgInitGameAndCreateTreeResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgInitGameAndCreateTreeResponse;
    fromJSON(object: any): MsgInitGameAndCreateTreeResponse;
    toJSON(message: MsgInitGameAndCreateTreeResponse): unknown;
    fromPartial(object: DeepPartial<MsgInitGameAndCreateTreeResponse>): MsgInitGameAndCreateTreeResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    InitGameAndSetName(request: MsgInitGameAndSetName): Promise<MsgInitGameAndSetNameResponse>;
    SetName(request: MsgSetName): Promise<MsgSetNameResponse>;
    InitGameAndExtendPlace(request: MsgInitGameAndExtendPlace): Promise<MsgInitGameAndExtendPlaceResponse>;
    ExtendPlace(request: MsgExtendPlace): Promise<MsgExtendPlaceResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    InitGameAndCreateTree(request: MsgInitGameAndCreateTree): Promise<MsgInitGameAndCreateTreeResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    InitGameAndSetName(request: MsgInitGameAndSetName): Promise<MsgInitGameAndSetNameResponse>;
    SetName(request: MsgSetName): Promise<MsgSetNameResponse>;
    InitGameAndExtendPlace(request: MsgInitGameAndExtendPlace): Promise<MsgInitGameAndExtendPlaceResponse>;
    ExtendPlace(request: MsgExtendPlace): Promise<MsgExtendPlaceResponse>;
    InitGameAndCreateTree(request: MsgInitGameAndCreateTree): Promise<MsgInitGameAndCreateTreeResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
