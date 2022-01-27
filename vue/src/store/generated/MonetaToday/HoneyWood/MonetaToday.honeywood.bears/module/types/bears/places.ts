/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { BearOwner } from "../bears/bears";
import { Grounds } from "../bears/grounds";

export const protobufPackage = "MonetaToday.honeywood.bears";

export interface Places {
  id: number;
  bearOwner: BearOwner | undefined;
  placeType: Places_PlaceTypes;
  grounds: Grounds[];
  countGrounds: number;
}

export enum Places_PlaceTypes {
  DEFAULT = 0,
  UNRECOGNIZED = -1,
}

export function places_PlaceTypesFromJSON(object: any): Places_PlaceTypes {
  switch (object) {
    case 0:
    case "DEFAULT":
      return Places_PlaceTypes.DEFAULT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Places_PlaceTypes.UNRECOGNIZED;
  }
}

export function places_PlaceTypesToJSON(object: Places_PlaceTypes): string {
  switch (object) {
    case Places_PlaceTypes.DEFAULT:
      return "DEFAULT";
    default:
      return "UNKNOWN";
  }
}

const basePlaces: object = { id: 0, placeType: 0, countGrounds: 0 };

export const Places = {
  encode(message: Places, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.bearOwner !== undefined) {
      BearOwner.encode(message.bearOwner, writer.uint32(18).fork()).ldelim();
    }
    if (message.placeType !== 0) {
      writer.uint32(24).int32(message.placeType);
    }
    for (const v of message.grounds) {
      Grounds.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.countGrounds !== 0) {
      writer.uint32(40).uint64(message.countGrounds);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Places {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePlaces } as Places;
    message.grounds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.bearOwner = BearOwner.decode(reader, reader.uint32());
          break;
        case 3:
          message.placeType = reader.int32() as any;
          break;
        case 4:
          message.grounds.push(Grounds.decode(reader, reader.uint32()));
          break;
        case 5:
          message.countGrounds = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Places {
    const message = { ...basePlaces } as Places;
    message.grounds = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.bearOwner !== undefined && object.bearOwner !== null) {
      message.bearOwner = BearOwner.fromJSON(object.bearOwner);
    } else {
      message.bearOwner = undefined;
    }
    if (object.placeType !== undefined && object.placeType !== null) {
      message.placeType = places_PlaceTypesFromJSON(object.placeType);
    } else {
      message.placeType = 0;
    }
    if (object.grounds !== undefined && object.grounds !== null) {
      for (const e of object.grounds) {
        message.grounds.push(Grounds.fromJSON(e));
      }
    }
    if (object.countGrounds !== undefined && object.countGrounds !== null) {
      message.countGrounds = Number(object.countGrounds);
    } else {
      message.countGrounds = 0;
    }
    return message;
  },

  toJSON(message: Places): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.bearOwner !== undefined &&
      (obj.bearOwner = message.bearOwner
        ? BearOwner.toJSON(message.bearOwner)
        : undefined);
    message.placeType !== undefined &&
      (obj.placeType = places_PlaceTypesToJSON(message.placeType));
    if (message.grounds) {
      obj.grounds = message.grounds.map((e) =>
        e ? Grounds.toJSON(e) : undefined
      );
    } else {
      obj.grounds = [];
    }
    message.countGrounds !== undefined &&
      (obj.countGrounds = message.countGrounds);
    return obj;
  },

  fromPartial(object: DeepPartial<Places>): Places {
    const message = { ...basePlaces } as Places;
    message.grounds = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.bearOwner !== undefined && object.bearOwner !== null) {
      message.bearOwner = BearOwner.fromPartial(object.bearOwner);
    } else {
      message.bearOwner = undefined;
    }
    if (object.placeType !== undefined && object.placeType !== null) {
      message.placeType = object.placeType;
    } else {
      message.placeType = 0;
    }
    if (object.grounds !== undefined && object.grounds !== null) {
      for (const e of object.grounds) {
        message.grounds.push(Grounds.fromPartial(e));
      }
    }
    if (object.countGrounds !== undefined && object.countGrounds !== null) {
      message.countGrounds = object.countGrounds;
    } else {
      message.countGrounds = 0;
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
