import { Coin } from "../cosmos/base/v1beta1/coin";
import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "MonetaToday.honeywood.bears";
/** Params defines the parameters for the module. */
export interface Params {
    priceSetName: Coin | undefined;
    priceTile: Coin | undefined;
    priceTree: Coin | undefined;
    rewardTree: Coin | undefined;
    priceDecorationFlowers: Coin | undefined;
    priceDecorationFlag: Coin | undefined;
    priceDecorationLamp: Coin | undefined;
    priceDecorationGreenBee: Coin | undefined;
    priceDecorationFountain: Coin | undefined;
}
export declare const Params: {
    encode(message: Params, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: DeepPartial<Params>): Params;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
