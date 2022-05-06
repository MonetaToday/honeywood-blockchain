import { Writer, Reader } from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";
import { BearOwner } from "../bears/bears";
export declare const protobufPackage = "MonetaToday.honeywood.bears";
export interface BeeParams {
    beeType: string;
    price: Coin[];
    honeyPerBlock: string;
    bodySize: number;
    airCountDependency: string;
    airConsume: string;
}
export interface ApiaryHouse {
    id: number;
}
export interface Bees {
    id: number;
    name: string;
    bearOwner: BearOwner | undefined;
    apiaryHouse: ApiaryHouse | undefined;
    params: BeeParams | undefined;
}
export declare const BeeParams: {
    encode(message: BeeParams, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): BeeParams;
    fromJSON(object: any): BeeParams;
    toJSON(message: BeeParams): unknown;
    fromPartial(object: DeepPartial<BeeParams>): BeeParams;
};
export declare const ApiaryHouse: {
    encode(message: ApiaryHouse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): ApiaryHouse;
    fromJSON(object: any): ApiaryHouse;
    toJSON(message: ApiaryHouse): unknown;
    fromPartial(object: DeepPartial<ApiaryHouse>): ApiaryHouse;
};
export declare const Bees: {
    encode(message: Bees, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Bees;
    fromJSON(object: any): Bees;
    toJSON(message: Bees): unknown;
    fromPartial(object: DeepPartial<Bees>): Bees;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
