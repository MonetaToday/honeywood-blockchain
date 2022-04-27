import { Writer, Reader } from "protobufjs/minimal";
import { BaseVestingAccount } from "../cosmos/vesting/v1beta1/vesting";
export declare const protobufPackage = "MonetaToday.honeywood.bears";
export interface VestingParams {
    id: string;
    honeyStartFromListingInMonth: number;
    honeyEndFromListingInMonth: number;
    coneStartFromListingInMonth: number;
    coneEndFromListingInMonth: number;
}
export interface PlayerAccount {
    baseVestingAccount: BaseVestingAccount | undefined;
    bears: number[];
    vestingType: string;
}
export declare const VestingParams: {
    encode(message: VestingParams, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): VestingParams;
    fromJSON(object: any): VestingParams;
    toJSON(message: VestingParams): unknown;
    fromPartial(object: DeepPartial<VestingParams>): VestingParams;
};
export declare const PlayerAccount: {
    encode(message: PlayerAccount, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): PlayerAccount;
    fromJSON(object: any): PlayerAccount;
    toJSON(message: PlayerAccount): unknown;
    fromPartial(object: DeepPartial<PlayerAccount>): PlayerAccount;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
