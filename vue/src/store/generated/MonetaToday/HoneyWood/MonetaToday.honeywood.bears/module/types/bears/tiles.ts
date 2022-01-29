/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "MonetaToday.honeywood.bears";

export interface Tiles {
  item: Tiles_Items | undefined;
}

export interface Tiles_Items {
  itemId: number;
  itemType: Tiles_Items_ItemTypes;
}

export enum Tiles_Items_ItemTypes {
  APIARY = 0,
  TREE = 1,
  DECORATION = 2,
  UNRECOGNIZED = -1,
}

export function tiles_Items_ItemTypesFromJSON(
  object: any
): Tiles_Items_ItemTypes {
  switch (object) {
    case 0:
    case "APIARY":
      return Tiles_Items_ItemTypes.APIARY;
    case 1:
    case "TREE":
      return Tiles_Items_ItemTypes.TREE;
    case 2:
    case "DECORATION":
      return Tiles_Items_ItemTypes.DECORATION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Tiles_Items_ItemTypes.UNRECOGNIZED;
  }
}

export function tiles_Items_ItemTypesToJSON(
  object: Tiles_Items_ItemTypes
): string {
  switch (object) {
    case Tiles_Items_ItemTypes.APIARY:
      return "APIARY";
    case Tiles_Items_ItemTypes.TREE:
      return "TREE";
    case Tiles_Items_ItemTypes.DECORATION:
      return "DECORATION";
    default:
      return "UNKNOWN";
  }
}

const baseTiles: object = {};

export const Tiles = {
  encode(message: Tiles, writer: Writer = Writer.create()): Writer {
    if (message.item !== undefined) {
      Tiles_Items.encode(message.item, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Tiles {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTiles } as Tiles;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.item = Tiles_Items.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Tiles {
    const message = { ...baseTiles } as Tiles;
    if (object.item !== undefined && object.item !== null) {
      message.item = Tiles_Items.fromJSON(object.item);
    } else {
      message.item = undefined;
    }
    return message;
  },

  toJSON(message: Tiles): unknown {
    const obj: any = {};
    message.item !== undefined &&
      (obj.item = message.item ? Tiles_Items.toJSON(message.item) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Tiles>): Tiles {
    const message = { ...baseTiles } as Tiles;
    if (object.item !== undefined && object.item !== null) {
      message.item = Tiles_Items.fromPartial(object.item);
    } else {
      message.item = undefined;
    }
    return message;
  },
};

const baseTiles_Items: object = { itemId: 0, itemType: 0 };

export const Tiles_Items = {
  encode(message: Tiles_Items, writer: Writer = Writer.create()): Writer {
    if (message.itemId !== 0) {
      writer.uint32(8).uint64(message.itemId);
    }
    if (message.itemType !== 0) {
      writer.uint32(16).int32(message.itemType);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Tiles_Items {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTiles_Items } as Tiles_Items;
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

  fromJSON(object: any): Tiles_Items {
    const message = { ...baseTiles_Items } as Tiles_Items;
    if (object.itemId !== undefined && object.itemId !== null) {
      message.itemId = Number(object.itemId);
    } else {
      message.itemId = 0;
    }
    if (object.itemType !== undefined && object.itemType !== null) {
      message.itemType = tiles_Items_ItemTypesFromJSON(object.itemType);
    } else {
      message.itemType = 0;
    }
    return message;
  },

  toJSON(message: Tiles_Items): unknown {
    const obj: any = {};
    message.itemId !== undefined && (obj.itemId = message.itemId);
    message.itemType !== undefined &&
      (obj.itemType = tiles_Items_ItemTypesToJSON(message.itemType));
    return obj;
  },

  fromPartial(object: DeepPartial<Tiles_Items>): Tiles_Items {
    const message = { ...baseTiles_Items } as Tiles_Items;
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
