import { Reader, Writer } from "protobufjs/minimal";
import { Trees } from "../bears/trees";
import { Decorations } from "../bears/decorations";
import { Apiaries } from "../bears/apiaries";
import { Bees } from "../bears/bees";
import { Coin } from "../cosmos/base/v1beta1/coin";
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
    receiver: string;
}
export interface MsgInitGameAndExtendFieldResponse {
    countTiles: number;
}
export interface MsgExtendField {
    creator: string;
    receiver: string;
    id: number;
}
export interface MsgExtendFieldResponse {
    countTiles: number;
}
export interface MsgInitGameAndCreateTree {
    creator: string;
    treeType: string;
}
export interface MsgInitGameAndCreateTreeResponse {
    tree: Trees | undefined;
}
export interface MsgCreateTree {
    creator: string;
    bearId: number;
    fieldId: number;
    rowId: number;
    columnId: number;
    treeType: string;
}
export interface MsgCreateTreeResponse {
    tree: Trees | undefined;
}
export interface MsgMoveItemOnField {
    creator: string;
    fieldId: number;
    rowId: number;
    columnId: number;
    newRowId: number;
    newColumnId: number;
}
export interface MsgMoveItemOnFieldResponse {
}
export interface MsgInitGameAndCreateDecoration {
    creator: string;
    receiver: string;
    decorationType: string;
}
export interface MsgInitGameAndCreateDecorationResponse {
    decoration: Decorations | undefined;
}
export interface MsgCreateDecoration {
    creator: string;
    receiver: string;
    bearId: number;
    decorationType: string;
}
export interface MsgCreateDecorationResponse {
    decoration: Decorations | undefined;
}
export interface MsgSetDecorationPosition {
    creator: string;
    decorationId: number;
    fieldId: number;
    rowId: number;
    columnId: number;
}
export interface MsgSetDecorationPositionResponse {
}
export interface MsgUnsetDecorationPosition {
    creator: string;
    decorationId: number;
}
export interface MsgUnsetDecorationPositionResponse {
}
export interface MsgInitGameAndCreateApiary {
    creator: string;
    receiver: string;
    apiaryType: string;
}
export interface MsgInitGameAndCreateApiaryResponse {
    apiary: Apiaries | undefined;
}
export interface MsgCreateApiary {
    creator: string;
    receiver: string;
    bearId: number;
    fieldId: number;
    rowId: number;
    columnId: number;
    apiaryType: string;
}
export interface MsgCreateApiaryResponse {
    apiary: Apiaries | undefined;
}
export interface MsgInitGameAndCreateBee {
    creator: string;
    receiver: string;
    beeType: string;
    beeName: string;
}
export interface MsgInitGameAndCreateBeeResponse {
    bee: Bees | undefined;
}
export interface MsgCreateBee {
    creator: string;
    receiver: string;
    bearId: number;
    beeType: string;
    beeName: string;
}
export interface MsgCreateBeeResponse {
    bee: Bees | undefined;
}
export interface MsgSetApiaryHouseForBee {
    creator: string;
    beeId: number;
    apiaryId: number;
}
export interface MsgSetApiaryHouseForBeeResponse {
}
export interface MsgUnsetApiaryHouseForBee {
    creator: string;
    beeId: number;
}
export interface MsgUnsetApiaryHouseForBeeResponse {
}
export interface MsgCollectHoneyFromApiary {
    creator: string;
    apiaryId: number;
}
export interface MsgCollectHoneyFromApiaryResponse {
    countHoney: Coin | undefined;
}
export interface MsgClearApiaryFromBees {
    creator: string;
    apiaryId: number;
}
export interface MsgClearApiaryFromBeesResponse {
}
export interface MsgDeleteApiary {
    creator: string;
    apiaryId: number;
}
export interface MsgDeleteApiaryResponse {
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
export declare const MsgInitGameAndCreateDecoration: {
    encode(message: MsgInitGameAndCreateDecoration, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgInitGameAndCreateDecoration;
    fromJSON(object: any): MsgInitGameAndCreateDecoration;
    toJSON(message: MsgInitGameAndCreateDecoration): unknown;
    fromPartial(object: DeepPartial<MsgInitGameAndCreateDecoration>): MsgInitGameAndCreateDecoration;
};
export declare const MsgInitGameAndCreateDecorationResponse: {
    encode(message: MsgInitGameAndCreateDecorationResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgInitGameAndCreateDecorationResponse;
    fromJSON(object: any): MsgInitGameAndCreateDecorationResponse;
    toJSON(message: MsgInitGameAndCreateDecorationResponse): unknown;
    fromPartial(object: DeepPartial<MsgInitGameAndCreateDecorationResponse>): MsgInitGameAndCreateDecorationResponse;
};
export declare const MsgCreateDecoration: {
    encode(message: MsgCreateDecoration, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateDecoration;
    fromJSON(object: any): MsgCreateDecoration;
    toJSON(message: MsgCreateDecoration): unknown;
    fromPartial(object: DeepPartial<MsgCreateDecoration>): MsgCreateDecoration;
};
export declare const MsgCreateDecorationResponse: {
    encode(message: MsgCreateDecorationResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateDecorationResponse;
    fromJSON(object: any): MsgCreateDecorationResponse;
    toJSON(message: MsgCreateDecorationResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateDecorationResponse>): MsgCreateDecorationResponse;
};
export declare const MsgSetDecorationPosition: {
    encode(message: MsgSetDecorationPosition, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSetDecorationPosition;
    fromJSON(object: any): MsgSetDecorationPosition;
    toJSON(message: MsgSetDecorationPosition): unknown;
    fromPartial(object: DeepPartial<MsgSetDecorationPosition>): MsgSetDecorationPosition;
};
export declare const MsgSetDecorationPositionResponse: {
    encode(_: MsgSetDecorationPositionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSetDecorationPositionResponse;
    fromJSON(_: any): MsgSetDecorationPositionResponse;
    toJSON(_: MsgSetDecorationPositionResponse): unknown;
    fromPartial(_: DeepPartial<MsgSetDecorationPositionResponse>): MsgSetDecorationPositionResponse;
};
export declare const MsgUnsetDecorationPosition: {
    encode(message: MsgUnsetDecorationPosition, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUnsetDecorationPosition;
    fromJSON(object: any): MsgUnsetDecorationPosition;
    toJSON(message: MsgUnsetDecorationPosition): unknown;
    fromPartial(object: DeepPartial<MsgUnsetDecorationPosition>): MsgUnsetDecorationPosition;
};
export declare const MsgUnsetDecorationPositionResponse: {
    encode(_: MsgUnsetDecorationPositionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUnsetDecorationPositionResponse;
    fromJSON(_: any): MsgUnsetDecorationPositionResponse;
    toJSON(_: MsgUnsetDecorationPositionResponse): unknown;
    fromPartial(_: DeepPartial<MsgUnsetDecorationPositionResponse>): MsgUnsetDecorationPositionResponse;
};
export declare const MsgInitGameAndCreateApiary: {
    encode(message: MsgInitGameAndCreateApiary, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgInitGameAndCreateApiary;
    fromJSON(object: any): MsgInitGameAndCreateApiary;
    toJSON(message: MsgInitGameAndCreateApiary): unknown;
    fromPartial(object: DeepPartial<MsgInitGameAndCreateApiary>): MsgInitGameAndCreateApiary;
};
export declare const MsgInitGameAndCreateApiaryResponse: {
    encode(message: MsgInitGameAndCreateApiaryResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgInitGameAndCreateApiaryResponse;
    fromJSON(object: any): MsgInitGameAndCreateApiaryResponse;
    toJSON(message: MsgInitGameAndCreateApiaryResponse): unknown;
    fromPartial(object: DeepPartial<MsgInitGameAndCreateApiaryResponse>): MsgInitGameAndCreateApiaryResponse;
};
export declare const MsgCreateApiary: {
    encode(message: MsgCreateApiary, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateApiary;
    fromJSON(object: any): MsgCreateApiary;
    toJSON(message: MsgCreateApiary): unknown;
    fromPartial(object: DeepPartial<MsgCreateApiary>): MsgCreateApiary;
};
export declare const MsgCreateApiaryResponse: {
    encode(message: MsgCreateApiaryResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateApiaryResponse;
    fromJSON(object: any): MsgCreateApiaryResponse;
    toJSON(message: MsgCreateApiaryResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateApiaryResponse>): MsgCreateApiaryResponse;
};
export declare const MsgInitGameAndCreateBee: {
    encode(message: MsgInitGameAndCreateBee, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgInitGameAndCreateBee;
    fromJSON(object: any): MsgInitGameAndCreateBee;
    toJSON(message: MsgInitGameAndCreateBee): unknown;
    fromPartial(object: DeepPartial<MsgInitGameAndCreateBee>): MsgInitGameAndCreateBee;
};
export declare const MsgInitGameAndCreateBeeResponse: {
    encode(message: MsgInitGameAndCreateBeeResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgInitGameAndCreateBeeResponse;
    fromJSON(object: any): MsgInitGameAndCreateBeeResponse;
    toJSON(message: MsgInitGameAndCreateBeeResponse): unknown;
    fromPartial(object: DeepPartial<MsgInitGameAndCreateBeeResponse>): MsgInitGameAndCreateBeeResponse;
};
export declare const MsgCreateBee: {
    encode(message: MsgCreateBee, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateBee;
    fromJSON(object: any): MsgCreateBee;
    toJSON(message: MsgCreateBee): unknown;
    fromPartial(object: DeepPartial<MsgCreateBee>): MsgCreateBee;
};
export declare const MsgCreateBeeResponse: {
    encode(message: MsgCreateBeeResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateBeeResponse;
    fromJSON(object: any): MsgCreateBeeResponse;
    toJSON(message: MsgCreateBeeResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateBeeResponse>): MsgCreateBeeResponse;
};
export declare const MsgSetApiaryHouseForBee: {
    encode(message: MsgSetApiaryHouseForBee, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSetApiaryHouseForBee;
    fromJSON(object: any): MsgSetApiaryHouseForBee;
    toJSON(message: MsgSetApiaryHouseForBee): unknown;
    fromPartial(object: DeepPartial<MsgSetApiaryHouseForBee>): MsgSetApiaryHouseForBee;
};
export declare const MsgSetApiaryHouseForBeeResponse: {
    encode(_: MsgSetApiaryHouseForBeeResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSetApiaryHouseForBeeResponse;
    fromJSON(_: any): MsgSetApiaryHouseForBeeResponse;
    toJSON(_: MsgSetApiaryHouseForBeeResponse): unknown;
    fromPartial(_: DeepPartial<MsgSetApiaryHouseForBeeResponse>): MsgSetApiaryHouseForBeeResponse;
};
export declare const MsgUnsetApiaryHouseForBee: {
    encode(message: MsgUnsetApiaryHouseForBee, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUnsetApiaryHouseForBee;
    fromJSON(object: any): MsgUnsetApiaryHouseForBee;
    toJSON(message: MsgUnsetApiaryHouseForBee): unknown;
    fromPartial(object: DeepPartial<MsgUnsetApiaryHouseForBee>): MsgUnsetApiaryHouseForBee;
};
export declare const MsgUnsetApiaryHouseForBeeResponse: {
    encode(_: MsgUnsetApiaryHouseForBeeResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUnsetApiaryHouseForBeeResponse;
    fromJSON(_: any): MsgUnsetApiaryHouseForBeeResponse;
    toJSON(_: MsgUnsetApiaryHouseForBeeResponse): unknown;
    fromPartial(_: DeepPartial<MsgUnsetApiaryHouseForBeeResponse>): MsgUnsetApiaryHouseForBeeResponse;
};
export declare const MsgCollectHoneyFromApiary: {
    encode(message: MsgCollectHoneyFromApiary, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCollectHoneyFromApiary;
    fromJSON(object: any): MsgCollectHoneyFromApiary;
    toJSON(message: MsgCollectHoneyFromApiary): unknown;
    fromPartial(object: DeepPartial<MsgCollectHoneyFromApiary>): MsgCollectHoneyFromApiary;
};
export declare const MsgCollectHoneyFromApiaryResponse: {
    encode(message: MsgCollectHoneyFromApiaryResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCollectHoneyFromApiaryResponse;
    fromJSON(object: any): MsgCollectHoneyFromApiaryResponse;
    toJSON(message: MsgCollectHoneyFromApiaryResponse): unknown;
    fromPartial(object: DeepPartial<MsgCollectHoneyFromApiaryResponse>): MsgCollectHoneyFromApiaryResponse;
};
export declare const MsgClearApiaryFromBees: {
    encode(message: MsgClearApiaryFromBees, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgClearApiaryFromBees;
    fromJSON(object: any): MsgClearApiaryFromBees;
    toJSON(message: MsgClearApiaryFromBees): unknown;
    fromPartial(object: DeepPartial<MsgClearApiaryFromBees>): MsgClearApiaryFromBees;
};
export declare const MsgClearApiaryFromBeesResponse: {
    encode(_: MsgClearApiaryFromBeesResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgClearApiaryFromBeesResponse;
    fromJSON(_: any): MsgClearApiaryFromBeesResponse;
    toJSON(_: MsgClearApiaryFromBeesResponse): unknown;
    fromPartial(_: DeepPartial<MsgClearApiaryFromBeesResponse>): MsgClearApiaryFromBeesResponse;
};
export declare const MsgDeleteApiary: {
    encode(message: MsgDeleteApiary, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteApiary;
    fromJSON(object: any): MsgDeleteApiary;
    toJSON(message: MsgDeleteApiary): unknown;
    fromPartial(object: DeepPartial<MsgDeleteApiary>): MsgDeleteApiary;
};
export declare const MsgDeleteApiaryResponse: {
    encode(_: MsgDeleteApiaryResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteApiaryResponse;
    fromJSON(_: any): MsgDeleteApiaryResponse;
    toJSON(_: MsgDeleteApiaryResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteApiaryResponse>): MsgDeleteApiaryResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    InitGameAndSetName(request: MsgInitGameAndSetName): Promise<MsgInitGameAndSetNameResponse>;
    SetName(request: MsgSetName): Promise<MsgSetNameResponse>;
    InitGameAndExtendField(request: MsgInitGameAndExtendField): Promise<MsgInitGameAndExtendFieldResponse>;
    ExtendField(request: MsgExtendField): Promise<MsgExtendFieldResponse>;
    InitGameAndCreateTree(request: MsgInitGameAndCreateTree): Promise<MsgInitGameAndCreateTreeResponse>;
    CreateTree(request: MsgCreateTree): Promise<MsgCreateTreeResponse>;
    MoveItemOnField(request: MsgMoveItemOnField): Promise<MsgMoveItemOnFieldResponse>;
    InitGameAndCreateDecoration(request: MsgInitGameAndCreateDecoration): Promise<MsgInitGameAndCreateDecorationResponse>;
    CreateDecoration(request: MsgCreateDecoration): Promise<MsgCreateDecorationResponse>;
    SetDecorationPosition(request: MsgSetDecorationPosition): Promise<MsgSetDecorationPositionResponse>;
    UnsetDecorationPosition(request: MsgUnsetDecorationPosition): Promise<MsgUnsetDecorationPositionResponse>;
    InitGameAndCreateApiary(request: MsgInitGameAndCreateApiary): Promise<MsgInitGameAndCreateApiaryResponse>;
    CreateApiary(request: MsgCreateApiary): Promise<MsgCreateApiaryResponse>;
    InitGameAndCreateBee(request: MsgInitGameAndCreateBee): Promise<MsgInitGameAndCreateBeeResponse>;
    CreateBee(request: MsgCreateBee): Promise<MsgCreateBeeResponse>;
    SetApiaryHouseForBee(request: MsgSetApiaryHouseForBee): Promise<MsgSetApiaryHouseForBeeResponse>;
    UnsetApiaryHouseForBee(request: MsgUnsetApiaryHouseForBee): Promise<MsgUnsetApiaryHouseForBeeResponse>;
    CollectHoneyFromApiary(request: MsgCollectHoneyFromApiary): Promise<MsgCollectHoneyFromApiaryResponse>;
    ClearApiaryFromBees(request: MsgClearApiaryFromBees): Promise<MsgClearApiaryFromBeesResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    DeleteApiary(request: MsgDeleteApiary): Promise<MsgDeleteApiaryResponse>;
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
    InitGameAndCreateDecoration(request: MsgInitGameAndCreateDecoration): Promise<MsgInitGameAndCreateDecorationResponse>;
    CreateDecoration(request: MsgCreateDecoration): Promise<MsgCreateDecorationResponse>;
    SetDecorationPosition(request: MsgSetDecorationPosition): Promise<MsgSetDecorationPositionResponse>;
    UnsetDecorationPosition(request: MsgUnsetDecorationPosition): Promise<MsgUnsetDecorationPositionResponse>;
    InitGameAndCreateApiary(request: MsgInitGameAndCreateApiary): Promise<MsgInitGameAndCreateApiaryResponse>;
    CreateApiary(request: MsgCreateApiary): Promise<MsgCreateApiaryResponse>;
    InitGameAndCreateBee(request: MsgInitGameAndCreateBee): Promise<MsgInitGameAndCreateBeeResponse>;
    CreateBee(request: MsgCreateBee): Promise<MsgCreateBeeResponse>;
    SetApiaryHouseForBee(request: MsgSetApiaryHouseForBee): Promise<MsgSetApiaryHouseForBeeResponse>;
    UnsetApiaryHouseForBee(request: MsgUnsetApiaryHouseForBee): Promise<MsgUnsetApiaryHouseForBeeResponse>;
    CollectHoneyFromApiary(request: MsgCollectHoneyFromApiary): Promise<MsgCollectHoneyFromApiaryResponse>;
    ClearApiaryFromBees(request: MsgClearApiaryFromBees): Promise<MsgClearApiaryFromBeesResponse>;
    DeleteApiary(request: MsgDeleteApiary): Promise<MsgDeleteApiaryResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
