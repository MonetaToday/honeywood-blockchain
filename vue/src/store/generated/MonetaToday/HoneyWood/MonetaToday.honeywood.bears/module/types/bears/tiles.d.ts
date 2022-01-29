import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "MonetaToday.honeywood.bears";
export interface Tiles {
    item: Tiles_Items | undefined;
}
export interface Tiles_Items {
    itemId: number;
    itemType: Tiles_Items_ItemTypes;
}
export declare enum Tiles_Items_ItemTypes {
    APIARY = 0,
    TREE = 1,
    DECORATION = 2,
    UNRECOGNIZED = -1
}
export declare function tiles_Items_ItemTypesFromJSON(object: any): Tiles_Items_ItemTypes;
export declare function tiles_Items_ItemTypesToJSON(object: Tiles_Items_ItemTypes): string;
export declare const Tiles: {
    encode(message: Tiles, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Tiles;
    fromJSON(object: any): Tiles;
    toJSON(message: Tiles): unknown;
    fromPartial(object: DeepPartial<Tiles>): Tiles;
};
export declare const Tiles_Items: {
    encode(message: Tiles_Items, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Tiles_Items;
    fromJSON(object: any): Tiles_Items;
    toJSON(message: Tiles_Items): unknown;
    fromPartial(object: DeepPartial<Tiles_Items>): Tiles_Items;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
