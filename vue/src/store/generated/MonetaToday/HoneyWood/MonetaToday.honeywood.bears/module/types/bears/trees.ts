/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "MonetaToday.honeywood.bears";

export interface Trees {
  id: number;
  bearId: number;
  placeId: number;
  groundId: number;
}

const baseTrees: object = { id: 0, bearId: 0, placeId: 0, groundId: 0 };

export const Trees = {
  encode(message: Trees, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.bearId !== 0) {
      writer.uint32(16).uint64(message.bearId);
    }
    if (message.placeId !== 0) {
      writer.uint32(24).uint64(message.placeId);
    }
    if (message.groundId !== 0) {
      writer.uint32(32).uint64(message.groundId);
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
          message.bearId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.placeId = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.groundId = longToNumber(reader.uint64() as Long);
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
    if (object.bearId !== undefined && object.bearId !== null) {
      message.bearId = Number(object.bearId);
    } else {
      message.bearId = 0;
    }
    if (object.placeId !== undefined && object.placeId !== null) {
      message.placeId = Number(object.placeId);
    } else {
      message.placeId = 0;
    }
    if (object.groundId !== undefined && object.groundId !== null) {
      message.groundId = Number(object.groundId);
    } else {
      message.groundId = 0;
    }
    return message;
  },

  toJSON(message: Trees): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.bearId !== undefined && (obj.bearId = message.bearId);
    message.placeId !== undefined && (obj.placeId = message.placeId);
    message.groundId !== undefined && (obj.groundId = message.groundId);
    return obj;
  },

  fromPartial(object: DeepPartial<Trees>): Trees {
    const message = { ...baseTrees } as Trees;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.bearId !== undefined && object.bearId !== null) {
      message.bearId = object.bearId;
    } else {
      message.bearId = 0;
    }
    if (object.placeId !== undefined && object.placeId !== null) {
      message.placeId = object.placeId;
    } else {
      message.placeId = 0;
    }
    if (object.groundId !== undefined && object.groundId !== null) {
      message.groundId = object.groundId;
    } else {
      message.groundId = 0;
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