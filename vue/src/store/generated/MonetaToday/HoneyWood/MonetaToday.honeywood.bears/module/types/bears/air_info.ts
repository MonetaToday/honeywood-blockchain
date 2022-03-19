/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "MonetaToday.honeywood.bears";

export interface AirHistory {
  id: number;
  height: number;
  count: string;
  purity: string;
}

export interface AirInfo {
  supply: string;
  consume: string;
}

const baseAirHistory: object = { id: 0, height: 0, count: "", purity: "" };

export const AirHistory = {
  encode(message: AirHistory, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.height !== 0) {
      writer.uint32(16).uint64(message.height);
    }
    if (message.count !== "") {
      writer.uint32(26).string(message.count);
    }
    if (message.purity !== "") {
      writer.uint32(34).string(message.purity);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): AirHistory {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAirHistory } as AirHistory;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.height = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.count = reader.string();
          break;
        case 4:
          message.purity = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AirHistory {
    const message = { ...baseAirHistory } as AirHistory;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    } else {
      message.height = 0;
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = String(object.count);
    } else {
      message.count = "";
    }
    if (object.purity !== undefined && object.purity !== null) {
      message.purity = String(object.purity);
    } else {
      message.purity = "";
    }
    return message;
  },

  toJSON(message: AirHistory): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.height !== undefined && (obj.height = message.height);
    message.count !== undefined && (obj.count = message.count);
    message.purity !== undefined && (obj.purity = message.purity);
    return obj;
  },

  fromPartial(object: DeepPartial<AirHistory>): AirHistory {
    const message = { ...baseAirHistory } as AirHistory;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = 0;
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = object.count;
    } else {
      message.count = "";
    }
    if (object.purity !== undefined && object.purity !== null) {
      message.purity = object.purity;
    } else {
      message.purity = "";
    }
    return message;
  },
};

const baseAirInfo: object = { supply: "", consume: "" };

export const AirInfo = {
  encode(message: AirInfo, writer: Writer = Writer.create()): Writer {
    if (message.supply !== "") {
      writer.uint32(10).string(message.supply);
    }
    if (message.consume !== "") {
      writer.uint32(18).string(message.consume);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): AirInfo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAirInfo } as AirInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.supply = reader.string();
          break;
        case 2:
          message.consume = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AirInfo {
    const message = { ...baseAirInfo } as AirInfo;
    if (object.supply !== undefined && object.supply !== null) {
      message.supply = String(object.supply);
    } else {
      message.supply = "";
    }
    if (object.consume !== undefined && object.consume !== null) {
      message.consume = String(object.consume);
    } else {
      message.consume = "";
    }
    return message;
  },

  toJSON(message: AirInfo): unknown {
    const obj: any = {};
    message.supply !== undefined && (obj.supply = message.supply);
    message.consume !== undefined && (obj.consume = message.consume);
    return obj;
  },

  fromPartial(object: DeepPartial<AirInfo>): AirInfo {
    const message = { ...baseAirInfo } as AirInfo;
    if (object.supply !== undefined && object.supply !== null) {
      message.supply = object.supply;
    } else {
      message.supply = "";
    }
    if (object.consume !== undefined && object.consume !== null) {
      message.consume = object.consume;
    } else {
      message.consume = "";
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
