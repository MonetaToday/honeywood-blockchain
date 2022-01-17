/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "MonetaToday.honeywood.bears";

export interface AddressBears {
  address: string;
  bears: number[];
}

const baseAddressBears: object = { address: "", bears: 0 };

export const AddressBears = {
  encode(message: AddressBears, writer: Writer = Writer.create()): Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    writer.uint32(18).fork();
    for (const v of message.bears) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): AddressBears {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAddressBears } as AddressBears;
    message.bears = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.bears.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.bears.push(longToNumber(reader.uint64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddressBears {
    const message = { ...baseAddressBears } as AddressBears;
    message.bears = [];
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.bears !== undefined && object.bears !== null) {
      for (const e of object.bears) {
        message.bears.push(Number(e));
      }
    }
    return message;
  },

  toJSON(message: AddressBears): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    if (message.bears) {
      obj.bears = message.bears.map((e) => e);
    } else {
      obj.bears = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<AddressBears>): AddressBears {
    const message = { ...baseAddressBears } as AddressBears;
    message.bears = [];
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.bears !== undefined && object.bears !== null) {
      for (const e of object.bears) {
        message.bears.push(e);
      }
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
