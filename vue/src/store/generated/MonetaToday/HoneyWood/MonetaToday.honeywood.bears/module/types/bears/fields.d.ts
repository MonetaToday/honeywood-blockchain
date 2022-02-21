import { Writer, Reader } from "protobufjs/minimal";
import { Tiles } from "../bears/tiles";
import { Coin } from "../cosmos/base/v1beta1/coin";
import { BearOwner } from "../bears/bears";
export declare const protobufPackage = "MonetaToday.honeywood.bears";
export interface FieldRows {
    columns: Tiles[];
}
export interface ItemPosition {
    fieldId: number;
    rowId: number;
    columnId: number;
}
export interface FieldParams {
    fieldType: string;
    priceTile: Coin[];
}
export interface Fields {
    id: number;
    bearOwner: BearOwner | undefined;
    params: FieldParams | undefined;
    rows: FieldRows[];
    countTiles: number;
}
export declare const FieldRows: {
    encode(message: FieldRows, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): FieldRows;
    fromJSON(object: any): FieldRows;
    toJSON(message: FieldRows): unknown;
    fromPartial(object: DeepPartial<FieldRows>): FieldRows;
};
export declare const ItemPosition: {
    encode(message: ItemPosition, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): ItemPosition;
    fromJSON(object: any): ItemPosition;
    toJSON(message: ItemPosition): unknown;
    fromPartial(object: DeepPartial<ItemPosition>): ItemPosition;
};
export declare const FieldParams: {
    encode(message: FieldParams, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): FieldParams;
    fromJSON(object: any): FieldParams;
    toJSON(message: FieldParams): unknown;
    fromPartial(object: DeepPartial<FieldParams>): FieldParams;
};
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
