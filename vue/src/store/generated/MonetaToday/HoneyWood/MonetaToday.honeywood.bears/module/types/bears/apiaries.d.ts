import { Writer, Reader } from "protobufjs/minimal";
import { BearOwner } from "../bears/bears";
import { ItemPosition } from "../bears/fields";
export declare const protobufPackage = "MonetaToday.honeywood.bears";
export interface Apiaries {
    id: number;
    bearOwner: BearOwner | undefined;
    apiaryType: Apiaries_ApiaryTypes;
    position: ItemPosition | undefined;
}
export declare enum Apiaries_ApiaryTypes {
    BEE_HOUSE = 0,
    APIARY = 1,
    ALVEARY = 2,
    UNRECOGNIZED = -1
}
export declare function apiaries_ApiaryTypesFromJSON(object: any): Apiaries_ApiaryTypes;
export declare function apiaries_ApiaryTypesToJSON(object: Apiaries_ApiaryTypes): string;
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
