import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "MonetaToday.honeywood.bears";
export interface AirHistory {
    height: number;
    count: string;
    purity: string;
}
export interface AirInfo {
    supply: string;
    consume: string;
    history: AirHistory[];
}
export declare const AirHistory: {
    encode(message: AirHistory, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): AirHistory;
    fromJSON(object: any): AirHistory;
    toJSON(message: AirHistory): unknown;
    fromPartial(object: DeepPartial<AirHistory>): AirHistory;
};
export declare const AirInfo: {
    encode(message: AirInfo, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): AirInfo;
    fromJSON(object: any): AirInfo;
    toJSON(message: AirInfo): unknown;
    fromPartial(object: DeepPartial<AirInfo>): AirInfo;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
