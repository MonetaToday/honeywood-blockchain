import { Writer, Reader } from "protobufjs/minimal";
import { BearOwner } from "../bears/bears";
import { Grounds } from "../bears/grounds";
export declare const protobufPackage = "MonetaToday.honeywood.bears";
export interface Places {
    id: number;
    bearOwner: BearOwner | undefined;
    placeType: Places_PlaceTypes;
    grounds: Grounds[];
    countGrounds: number;
}
export declare enum Places_PlaceTypes {
    DEFAULT = 0,
    UNRECOGNIZED = -1
}
export declare function places_PlaceTypesFromJSON(object: any): Places_PlaceTypes;
export declare function places_PlaceTypesToJSON(object: Places_PlaceTypes): string;
export declare const Places: {
    encode(message: Places, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Places;
    fromJSON(object: any): Places;
    toJSON(message: Places): unknown;
    fromPartial(object: DeepPartial<Places>): Places;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
