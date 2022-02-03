import { Writer, Reader } from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";
import { BearOwner } from "../bears/bears";
import { ItemPosition } from "../bears/fields";
export declare const protobufPackage = "MonetaToday.honeywood.bears";
export interface ApiaryParams {
    apiaryType: string;
    price: Coin[];
    maxCountBees: number;
    maxCountHoney: number;
}
export interface CycleBeesHistory {
    block: number;
    bees: number[];
}
export interface Apiaries {
    id: number;
    bearOwner: BearOwner | undefined;
    position: ItemPosition | undefined;
    countBees: number;
    params: ApiaryParams | undefined;
    cycleStartBlock: number;
    cycleBeesHistory: CycleBeesHistory[];
}
export declare const ApiaryParams: {
    encode(message: ApiaryParams, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): ApiaryParams;
    fromJSON(object: any): ApiaryParams;
    toJSON(message: ApiaryParams): unknown;
    fromPartial(object: DeepPartial<ApiaryParams>): ApiaryParams;
};
export declare const CycleBeesHistory: {
    encode(message: CycleBeesHistory, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CycleBeesHistory;
    fromJSON(object: any): CycleBeesHistory;
    toJSON(message: CycleBeesHistory): unknown;
    fromPartial(object: DeepPartial<CycleBeesHistory>): CycleBeesHistory;
};
export declare const Apiaries: {
    encode(message: Apiaries, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Apiaries;
    fromJSON(object: any): Apiaries;
    toJSON(message: Apiaries): unknown;
    fromPartial(object: DeepPartial<Apiaries>): Apiaries;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
