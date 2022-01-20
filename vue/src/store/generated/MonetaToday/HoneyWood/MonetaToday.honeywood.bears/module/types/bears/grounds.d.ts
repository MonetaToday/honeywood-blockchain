import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "MonetaToday.honeywood.bears";
export interface Grounds {
    item: Grounds_Items | undefined;
}
export interface Grounds_Items {
    itemId: number;
    itemType: Grounds_Items_ItemTypes;
}
export declare enum Grounds_Items_ItemTypes {
    APIARY = 0,
    TREE = 1,
    DECORATION = 2,
    UNRECOGNIZED = -1
}
export declare function grounds_Items_ItemTypesFromJSON(object: any): Grounds_Items_ItemTypes;
export declare function grounds_Items_ItemTypesToJSON(object: Grounds_Items_ItemTypes): string;
export declare const Grounds: {
    encode(message: Grounds, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Grounds;
    fromJSON(object: any): Grounds;
    toJSON(message: Grounds): unknown;
    fromPartial(object: DeepPartial<Grounds>): Grounds;
};
export declare const Grounds_Items: {
    encode(message: Grounds_Items, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Grounds_Items;
    fromJSON(object: any): Grounds_Items;
    toJSON(message: Grounds_Items): unknown;
    fromPartial(object: DeepPartial<Grounds_Items>): Grounds_Items;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
