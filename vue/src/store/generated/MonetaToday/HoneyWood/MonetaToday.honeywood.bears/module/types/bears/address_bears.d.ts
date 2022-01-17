import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "MonetaToday.honeywood.bears";
export interface AddressBears {
    address: string;
    bears: number[];
}
export declare const AddressBears: {
    encode(message: AddressBears, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): AddressBears;
    fromJSON(object: any): AddressBears;
    toJSON(message: AddressBears): unknown;
    fromPartial(object: DeepPartial<AddressBears>): AddressBears;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
