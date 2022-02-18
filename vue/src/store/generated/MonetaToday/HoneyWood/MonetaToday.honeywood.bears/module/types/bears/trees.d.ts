import { Writer, Reader } from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";
import { BearOwner } from "../bears/bears";
import { ItemPosition } from "../bears/fields";
export declare const protobufPackage = "MonetaToday.honeywood.bears";
export interface TreeParams {
    treeType: string;
    price: Coin[];
    reward: Coin[];
    airSupply: string;
}
export interface Trees {
    id: number;
    params: TreeParams | undefined;
    bearOwner: BearOwner | undefined;
    position: ItemPosition | undefined;
}
export declare const TreeParams: {
    encode(message: TreeParams, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): TreeParams;
    fromJSON(object: any): TreeParams;
    toJSON(message: TreeParams): unknown;
    fromPartial(object: DeepPartial<TreeParams>): TreeParams;
};
export declare const Trees: {
    encode(message: Trees, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Trees;
    fromJSON(object: any): Trees;
    toJSON(message: Trees): unknown;
    fromPartial(object: DeepPartial<Trees>): Trees;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
