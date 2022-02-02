import { Writer, Reader } from "protobufjs/minimal";
import { BearOwner } from "../bears/bears";
import { ItemPosition } from "../bears/fields";
export declare const protobufPackage = "MonetaToday.honeywood.bears";
export interface Decorations {
    id: number;
    bearOwner: BearOwner | undefined;
    decorationType: Decorations_DecorationTypes;
    position: ItemPosition | undefined;
}
export declare enum Decorations_DecorationTypes {
    FLOWERS = 0,
    FLAG = 1,
    LAMP = 2,
    GREEN_BEE = 3,
    FOUNTAIN = 4,
    UNRECOGNIZED = -1
}
export declare function decorations_DecorationTypesFromJSON(object: any): Decorations_DecorationTypes;
export declare function decorations_DecorationTypesToJSON(object: Decorations_DecorationTypes): string;
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
