/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "MonetaToday.honeywood.bears";

export interface Grounds {
  itemId: number;
  itemType: Grounds_ItemTypes;
}

export enum Grounds_ItemTypes {
  APIARY = 0,
  TREE = 1,
  DECORATION = 2,
  UNRECOGNIZED = -1,
}

export function grounds_ItemTypesFromJSON(object: any): Grounds_ItemTypes {
  switch (object) {
    case 0:
    case "APIARY":
      return Grounds_ItemTypes.APIARY;
    case 1:
    case "TREE":
      return Grounds_ItemTypes.TREE;
    case 2:
    case "DECORATION":
      return Grounds_ItemTypes.DECORATION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Grounds_ItemTypes.UNRECOGNIZED;
  }
}

export function grounds_ItemTypesToJSON(object: Grounds_ItemTypes): string {
  switch (object) {
    case Grounds_ItemTypes.APIARY:
      return "APIARY";
    case Grounds_ItemTypes.TREE:
      return "TREE";
    case Grounds_ItemTypes.DECORATION:
      return "DECORATION";
    default:
      return "UNKNOWN";
  }
}

const baseGrounds: object = { itemId: 0, itemType: 0 };

export const Grounds = {
  encode(message: Grounds, writer: Writer = Writer.create()): Writer {
    if (message.itemId !== 0) {
      writer.uint32(8).uint64(message.itemId);
    }
    if (message.itemType !== 0) {
      writer.uint32(16).int32(message.itemType);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Grounds {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGrounds } as Grounds;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.itemId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.itemType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Grounds {
    const message = { ...baseGrounds } as Grounds;
    if (object.itemId !== undefined && object.itemId !== null) {
      message.itemId = Number(object.itemId);
    } else {
      message.itemId = 0;
    }
    if (object.itemType !== undefined && object.itemType !== null) {
      message.itemType = grounds_ItemTypesFromJSON(object.itemType);
    } else {
      message.itemType = 0;
    }
    return message;
  },

  toJSON(message: Grounds): unknown {
    const obj: any = {};
    message.itemId !== undefined && (obj.itemId = message.itemId);
    message.itemType !== undefined &&
      (obj.itemType = grounds_ItemTypesToJSON(message.itemType));
    return obj;
  },

  fromPartial(object: DeepPartial<Grounds>): Grounds {
    const message = { ...baseGrounds } as Grounds;
    if (object.itemId !== undefined && object.itemId !== null) {
      message.itemId = object.itemId;
    } else {
      message.itemId = 0;
    }
    if (object.itemType !== undefined && object.itemType !== null) {
      message.itemType = object.itemType;
    } else {
      message.itemType = 0;
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
