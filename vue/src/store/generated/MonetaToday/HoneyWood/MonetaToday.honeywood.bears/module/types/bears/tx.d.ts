import { Reader, Writer } from "protobufjs/minimal";
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
export interface MsgInitGameAndExtend {
    creator: string;
}
export interface MsgInitGameAndExtendResponse {
    countGrounds: number;
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
export declare const MsgInitGameAndExtend: {
    encode(message: MsgInitGameAndExtend, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgInitGameAndExtend;
    fromJSON(object: any): MsgInitGameAndExtend;
    toJSON(message: MsgInitGameAndExtend): unknown;
    fromPartial(object: DeepPartial<MsgInitGameAndExtend>): MsgInitGameAndExtend;
};
export declare const MsgInitGameAndExtendResponse: {
    encode(message: MsgInitGameAndExtendResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgInitGameAndExtendResponse;
    fromJSON(object: any): MsgInitGameAndExtendResponse;
    toJSON(message: MsgInitGameAndExtendResponse): unknown;
    fromPartial(object: DeepPartial<MsgInitGameAndExtendResponse>): MsgInitGameAndExtendResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    InitGameAndSetName(request: MsgInitGameAndSetName): Promise<MsgInitGameAndSetNameResponse>;
    SetName(request: MsgSetName): Promise<MsgSetNameResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    InitGameAndExtend(request: MsgInitGameAndExtend): Promise<MsgInitGameAndExtendResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    InitGameAndSetName(request: MsgInitGameAndSetName): Promise<MsgInitGameAndSetNameResponse>;
    SetName(request: MsgSetName): Promise<MsgSetNameResponse>;
    InitGameAndExtend(request: MsgInitGameAndExtend): Promise<MsgInitGameAndExtendResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};