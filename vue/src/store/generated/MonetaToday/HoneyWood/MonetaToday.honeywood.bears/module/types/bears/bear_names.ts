/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "MonetaToday.honeywood.bears";

export interface BearNames {
  name: string;
  bearId: number;
}

const baseBearNames: object = { name: "", bearId: 0 };

export const BearNames = {
  encode(message: BearNames, writer: Writer = Writer.create()): Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.bearId !== 0) {
      writer.uint32(16).uint64(message.bearId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): BearNames {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBearNames } as BearNames;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.bearId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BearNames {
    const message = { ...baseBearNames } as BearNames;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.bearId !== undefined && object.bearId !== null) {
      message.bearId = Number(object.bearId);
    } else {
      message.bearId = 0;
    }
    return message;
  },

  toJSON(message: BearNames): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.bearId !== undefined && (obj.bearId = message.bearId);
    return obj;
  },

  fromPartial(object: DeepPartial<BearNames>): BearNames {
    const message = { ...baseBearNames } as BearNames;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.bearId !== undefined && object.bearId !== null) {
      message.bearId = object.bearId;
    } else {
      message.bearId = 0;
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
