import { Writer, Reader } from "protobufjs/minimal";
import { Params } from "../bears/params";
import { BearNames } from "../bears/bear_names";
import { Bears } from "../bears/bears";
import { AddressBears } from "../bears/address_bears";
export declare const protobufPackage = "MonetaToday.honeywood.bears";
/** GenesisState defines the bears module's genesis state. */
export interface GenesisState {
    params: Params | undefined;
    bearNamesList: BearNames[];
    bearsList: Bears[];
    bearsCount: number;
    /** this line is used by starport scaffolding # genesis/proto/state */
    addressBearsList: AddressBears[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
