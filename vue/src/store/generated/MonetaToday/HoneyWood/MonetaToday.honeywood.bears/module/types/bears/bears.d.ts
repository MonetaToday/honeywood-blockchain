import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "MonetaToday.honeywood.bears";
export interface BearOwner {
    id: number;
}
export interface Bears {
    id: number;
    owner: string;
    name: string;
    places: number[];
    apiaries: number[];
    bees: number[];
    trees: number[];
    decorations: number[];
}
export declare const BearOwner: {
    encode(message: BearOwner, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): BearOwner;
    fromJSON(object: any): BearOwner;
    toJSON(message: BearOwner): unknown;
    fromPartial(object: DeepPartial<BearOwner>): BearOwner;
};
export declare const Bears: {
    encode(message: Bears, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Bears;
    fromJSON(object: any): Bears;
    toJSON(message: Bears): unknown;
    fromPartial(object: DeepPartial<Bears>): Bears;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
