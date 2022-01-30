/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "MonetaToday.honeywood.bears";

export interface Trees {
  id: number;
  treeType: Trees_TreeTypes;
  bearId: number;
  fieldId: number;
  rowId: number;
  columnId: number;
}

export enum Trees_TreeTypes {
  OAK = 0,
  SPRUCE = 1,
  APPLETREE = 2,
  WILLOW = 3,
  UNRECOGNIZED = -1,
}

export function trees_TreeTypesFromJSON(object: any): Trees_TreeTypes {
  switch (object) {
    case 0:
    case "OAK":
      return Trees_TreeTypes.OAK;
    case 1:
    case "SPRUCE":
      return Trees_TreeTypes.SPRUCE;
    case 2:
    case "APPLETREE":
      return Trees_TreeTypes.APPLETREE;
    case 3:
    case "WILLOW":
      return Trees_TreeTypes.WILLOW;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Trees_TreeTypes.UNRECOGNIZED;
  }
}

export function trees_TreeTypesToJSON(object: Trees_TreeTypes): string {
  switch (object) {
    case Trees_TreeTypes.OAK:
      return "OAK";
    case Trees_TreeTypes.SPRUCE:
      return "SPRUCE";
    case Trees_TreeTypes.APPLETREE:
      return "APPLETREE";
    case Trees_TreeTypes.WILLOW:
      return "WILLOW";
    default:
      return "UNKNOWN";
  }
}

const baseTrees: object = {
  id: 0,
  treeType: 0,
  bearId: 0,
  fieldId: 0,
  rowId: 0,
  columnId: 0,
};

export const Trees = {
  encode(message: Trees, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.treeType !== 0) {
      writer.uint32(16).int32(message.treeType);
    }
    if (message.bearId !== 0) {
      writer.uint32(24).uint64(message.bearId);
    }
    if (message.fieldId !== 0) {
      writer.uint32(32).uint64(message.fieldId);
    }
    if (message.rowId !== 0) {
      writer.uint32(40).uint64(message.rowId);
    }
    if (message.columnId !== 0) {
      writer.uint32(48).uint64(message.columnId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Trees {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTrees } as Trees;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.treeType = reader.int32() as any;
          break;
        case 3:
          message.bearId = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.fieldId = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.rowId = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.columnId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Trees {
    const message = { ...baseTrees } as Trees;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.treeType !== undefined && object.treeType !== null) {
      message.treeType = trees_TreeTypesFromJSON(object.treeType);
    } else {
      message.treeType = 0;
    }
    if (object.bearId !== undefined && object.bearId !== null) {
      message.bearId = Number(object.bearId);
    } else {
      message.bearId = 0;
    }
    if (object.fieldId !== undefined && object.fieldId !== null) {
      message.fieldId = Number(object.fieldId);
    } else {
      message.fieldId = 0;
    }
    if (object.rowId !== undefined && object.rowId !== null) {
      message.rowId = Number(object.rowId);
    } else {
      message.rowId = 0;
    }
    if (object.columnId !== undefined && object.columnId !== null) {
      message.columnId = Number(object.columnId);
    } else {
      message.columnId = 0;
    }
    return message;
  },

  toJSON(message: Trees): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.treeType !== undefined &&
      (obj.treeType = trees_TreeTypesToJSON(message.treeType));
    message.bearId !== undefined && (obj.bearId = message.bearId);
    message.fieldId !== undefined && (obj.fieldId = message.fieldId);
    message.rowId !== undefined && (obj.rowId = message.rowId);
    message.columnId !== undefined && (obj.columnId = message.columnId);
    return obj;
  },

  fromPartial(object: DeepPartial<Trees>): Trees {
    const message = { ...baseTrees } as Trees;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.treeType !== undefined && object.treeType !== null) {
      message.treeType = object.treeType;
    } else {
      message.treeType = 0;
    }
    if (object.bearId !== undefined && object.bearId !== null) {
      message.bearId = object.bearId;
    } else {
      message.bearId = 0;
    }
    if (object.fieldId !== undefined && object.fieldId !== null) {
      message.fieldId = object.fieldId;
    } else {
      message.fieldId = 0;
    }
    if (object.rowId !== undefined && object.rowId !== null) {
      message.rowId = object.rowId;
    } else {
      message.rowId = 0;
    }
    if (object.columnId !== undefined && object.columnId !== null) {
      message.columnId = object.columnId;
    } else {
      message.columnId = 0;
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
