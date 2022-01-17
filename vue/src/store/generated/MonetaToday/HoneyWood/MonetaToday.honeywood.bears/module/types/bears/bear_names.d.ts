import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "MonetaToday.honeywood.bears";
export interface BearNames {
    name: string;
    bearId: number;
}
export declare const BearNames: {
    encode(message: BearNames, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): BearNames;
    fromJSON(object: any): BearNames;
    toJSON(message: BearNames): unknown;
    fromPartial(object: DeepPartial<BearNames>): BearNames;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
