import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "MonetaToday.honeywood.bears";
export interface MsgInitGameAndSetName {
    creator: string;
    name: string;
}
export interface MsgInitGameAndSetNameResponse {
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
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    InitGameAndSetName(request: MsgInitGameAndSetName): Promise<MsgInitGameAndSetNameResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    InitGameAndSetName(request: MsgInitGameAndSetName): Promise<MsgInitGameAndSetNameResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
