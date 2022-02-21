import { Writer, Reader } from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";
import { FieldParams } from "../bears/fields";
import { TreeParams } from "../bears/trees";
import { DecorationParams } from "../bears/decorations";
import { ApiaryParams } from "../bears/apiaries";
import { BeeParams } from "../bears/bees";
export declare const protobufPackage = "MonetaToday.honeywood.bears";
/** Params defines the parameters for the module. */
export interface Params {
    blocksPerHour: number;
    airHistoryLength: number;
    burnRate: string;
    priceSetName: Coin[];
    fieldTypes: FieldParams[];
    treeTypes: TreeParams[];
    decorationTypes: DecorationParams[];
    apiaryTypes: ApiaryParams[];
    beeTypes: BeeParams[];
    honeyDenom: string;
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
