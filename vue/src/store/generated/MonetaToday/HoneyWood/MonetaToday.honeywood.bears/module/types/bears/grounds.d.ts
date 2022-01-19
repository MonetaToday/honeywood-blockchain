import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "MonetaToday.honeywood.bears";
export interface Grounds {
    itemId: number;
    itemType: number;
}
export declare const Grounds: {
    encode(message: Grounds, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Grounds;
    fromJSON(object: any): Grounds;
    toJSON(message: Grounds): unknown;
    fromPartial(object: DeepPartial<Grounds>): Grounds;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
