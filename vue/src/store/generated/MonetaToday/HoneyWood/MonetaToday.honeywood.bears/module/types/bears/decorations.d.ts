import { Writer, Reader } from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";
import { BearOwner } from "../bears/bears";
import { ItemPosition } from "../bears/fields";
export declare const protobufPackage = "MonetaToday.honeywood.bears";
export interface DecorationParams {
    decorationType: string;
    price: Coin[];
}
export interface Decorations {
    id: number;
    bearOwner: BearOwner | undefined;
    params: DecorationParams | undefined;
    position: ItemPosition | undefined;
}
export declare const DecorationParams: {
    encode(message: DecorationParams, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): DecorationParams;
    fromJSON(object: any): DecorationParams;
    toJSON(message: DecorationParams): unknown;
    fromPartial(object: DeepPartial<DecorationParams>): DecorationParams;
};
export declare const Decorations: {
    encode(message: Decorations, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Decorations;
    fromJSON(object: any): Decorations;
    toJSON(message: Decorations): unknown;
    fromPartial(object: DeepPartial<Decorations>): Decorations;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
