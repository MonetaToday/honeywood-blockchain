import { Writer, Reader } from "protobufjs/minimal";
import { BearOwner } from "../bears/bears";
import { Grounds } from "../bears/grounds";
export declare const protobufPackage = "MonetaToday.honeywood.bears";
export interface Fields {
    id: number;
    bearOwner: BearOwner | undefined;
    fieldType: Fields_FieldTypes;
    grounds: Grounds[];
    countGrounds: number;
}
export declare enum Fields_FieldTypes {
    DEFAULT = 0,
    UNRECOGNIZED = -1
}
export declare function fields_FieldTypesFromJSON(object: any): Fields_FieldTypes;
export declare function fields_FieldTypesToJSON(object: Fields_FieldTypes): string;
export declare const Fields: {
    encode(message: Fields, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Fields;
    fromJSON(object: any): Fields;
    toJSON(message: Fields): unknown;
    fromPartial(object: DeepPartial<Fields>): Fields;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
