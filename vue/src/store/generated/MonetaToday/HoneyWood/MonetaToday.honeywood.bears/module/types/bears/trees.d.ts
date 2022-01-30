import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "MonetaToday.honeywood.bears";
export interface Trees {
    id: number;
    treeType: Trees_TreeTypes;
    bearId: number;
    fieldId: number;
    rowId: number;
    columnId: number;
}
export declare enum Trees_TreeTypes {
    OAK = 0,
    SPRUCE = 1,
    APPLETREE = 2,
    WILLOW = 3,
    UNRECOGNIZED = -1
}
export declare function trees_TreeTypesFromJSON(object: any): Trees_TreeTypes;
export declare function trees_TreeTypesToJSON(object: Trees_TreeTypes): string;
export declare const Trees: {
    encode(message: Trees, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Trees;
    fromJSON(object: any): Trees;
    toJSON(message: Trees): unknown;
    fromPartial(object: DeepPartial<Trees>): Trees;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
