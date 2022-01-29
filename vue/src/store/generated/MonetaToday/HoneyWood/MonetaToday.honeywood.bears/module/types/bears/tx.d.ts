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
export interface MsgInitGameAndExtendField {
    creator: string;
}
export interface MsgInitGameAndExtendFieldResponse {
    countTiles: number;
}
export interface MsgExtendField {
    creator: string;
    id: number;
}
export interface MsgExtendFieldResponse {
    countTiles: number;
}
export interface MsgInitGameAndCreateTree {
    creator: string;
}
export interface MsgInitGameAndCreateTreeResponse {
    tree: Trees | undefined;
}
export interface MsgCreateTree {
    creator: string;
    bearId: number;
    fieldId: number;
    tileId: number;
}
export interface MsgCreateTreeResponse {
    tree: Trees | undefined;
}
export interface MsgMoveItemOnField {
    creator: string;
    fieldId: number;
    tileId: number;
    newTileId: number;
}
export interface MsgMoveItemOnFieldResponse {
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
export declare const MsgInitGameAndExtendField: {
    encode(message: MsgInitGameAndExtendField, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgInitGameAndExtendField;
    fromJSON(object: any): MsgInitGameAndExtendField;
    toJSON(message: MsgInitGameAndExtendField): unknown;
    fromPartial(object: DeepPartial<MsgInitGameAndExtendField>): MsgInitGameAndExtendField;
};
export declare const MsgInitGameAndExtendFieldResponse: {
    encode(message: MsgInitGameAndExtendFieldResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgInitGameAndExtendFieldResponse;
    fromJSON(object: any): MsgInitGameAndExtendFieldResponse;
    toJSON(message: MsgInitGameAndExtendFieldResponse): unknown;
    fromPartial(object: DeepPartial<MsgInitGameAndExtendFieldResponse>): MsgInitGameAndExtendFieldResponse;
};
export declare const MsgExtendField: {
    encode(message: MsgExtendField, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgExtendField;
    fromJSON(object: any): MsgExtendField;
    toJSON(message: MsgExtendField): unknown;
    fromPartial(object: DeepPartial<MsgExtendField>): MsgExtendField;
};
export declare const MsgExtendFieldResponse: {
    encode(message: MsgExtendFieldResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgExtendFieldResponse;
    fromJSON(object: any): MsgExtendFieldResponse;
    toJSON(message: MsgExtendFieldResponse): unknown;
    fromPartial(object: DeepPartial<MsgExtendFieldResponse>): MsgExtendFieldResponse;
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
export declare const MsgCreateTree: {
    encode(message: MsgCreateTree, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateTree;
    fromJSON(object: any): MsgCreateTree;
    toJSON(message: MsgCreateTree): unknown;
    fromPartial(object: DeepPartial<MsgCreateTree>): MsgCreateTree;
};
export declare const MsgCreateTreeResponse: {
    encode(message: MsgCreateTreeResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateTreeResponse;
    fromJSON(object: any): MsgCreateTreeResponse;
    toJSON(message: MsgCreateTreeResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateTreeResponse>): MsgCreateTreeResponse;
};
export declare const MsgMoveItemOnField: {
    encode(message: MsgMoveItemOnField, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgMoveItemOnField;
    fromJSON(object: any): MsgMoveItemOnField;
    toJSON(message: MsgMoveItemOnField): unknown;
    fromPartial(object: DeepPartial<MsgMoveItemOnField>): MsgMoveItemOnField;
};
export declare const MsgMoveItemOnFieldResponse: {
    encode(_: MsgMoveItemOnFieldResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgMoveItemOnFieldResponse;
    fromJSON(_: any): MsgMoveItemOnFieldResponse;
    toJSON(_: MsgMoveItemOnFieldResponse): unknown;
    fromPartial(_: DeepPartial<MsgMoveItemOnFieldResponse>): MsgMoveItemOnFieldResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    InitGameAndSetName(request: MsgInitGameAndSetName): Promise<MsgInitGameAndSetNameResponse>;
    SetName(request: MsgSetName): Promise<MsgSetNameResponse>;
    InitGameAndExtendField(request: MsgInitGameAndExtendField): Promise<MsgInitGameAndExtendFieldResponse>;
    ExtendField(request: MsgExtendField): Promise<MsgExtendFieldResponse>;
    InitGameAndCreateTree(request: MsgInitGameAndCreateTree): Promise<MsgInitGameAndCreateTreeResponse>;
    CreateTree(request: MsgCreateTree): Promise<MsgCreateTreeResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    MoveItemOnField(request: MsgMoveItemOnField): Promise<MsgMoveItemOnFieldResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    InitGameAndSetName(request: MsgInitGameAndSetName): Promise<MsgInitGameAndSetNameResponse>;
    SetName(request: MsgSetName): Promise<MsgSetNameResponse>;
    InitGameAndExtendField(request: MsgInitGameAndExtendField): Promise<MsgInitGameAndExtendFieldResponse>;
    ExtendField(request: MsgExtendField): Promise<MsgExtendFieldResponse>;
    InitGameAndCreateTree(request: MsgInitGameAndCreateTree): Promise<MsgInitGameAndCreateTreeResponse>;
    CreateTree(request: MsgCreateTree): Promise<MsgCreateTreeResponse>;
    MoveItemOnField(request: MsgMoveItemOnField): Promise<MsgMoveItemOnFieldResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
