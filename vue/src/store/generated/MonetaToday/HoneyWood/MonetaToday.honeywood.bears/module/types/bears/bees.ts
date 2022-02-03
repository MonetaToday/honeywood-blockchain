/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";
import { BearOwner } from "../bears/bears";

export const protobufPackage = "MonetaToday.honeywood.bears";

export interface BeeParams {
  price: Coin[];
  countHoneyPerBlock: number;
  apiarySize: number;
  oxygenSense: number;
}

export interface ApiaryHouse {
  id: number;
}

export interface Bees {
  id: number;
  bearOwner: BearOwner | undefined;
  apiaryHouse: ApiaryHouse | undefined;
  params: BeeParams | undefined;
}

const baseBeeParams: object = {
  countHoneyPerBlock: 0,
  apiarySize: 0,
  oxygenSense: 0,
};

export const BeeParams = {
  encode(message: BeeParams, writer: Writer = Writer.create()): Writer {
    for (const v of message.price) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.countHoneyPerBlock !== 0) {
      writer.uint32(16).uint64(message.countHoneyPerBlock);
    }
    if (message.apiarySize !== 0) {
      writer.uint32(24).uint64(message.apiarySize);
    }
    if (message.oxygenSense !== 0) {
      writer.uint32(32).uint64(message.oxygenSense);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): BeeParams {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBeeParams } as BeeParams;
    message.price = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.price.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.countHoneyPerBlock = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.apiarySize = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.oxygenSense = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BeeParams {
    const message = { ...baseBeeParams } as BeeParams;
    message.price = [];
    if (object.price !== undefined && object.price !== null) {
      for (const e of object.price) {
        message.price.push(Coin.fromJSON(e));
      }
    }
    if (
      object.countHoneyPerBlock !== undefined &&
      object.countHoneyPerBlock !== null
    ) {
      message.countHoneyPerBlock = Number(object.countHoneyPerBlock);
    } else {
      message.countHoneyPerBlock = 0;
    }
    if (object.apiarySize !== undefined && object.apiarySize !== null) {
      message.apiarySize = Number(object.apiarySize);
    } else {
      message.apiarySize = 0;
    }
    if (object.oxygenSense !== undefined && object.oxygenSense !== null) {
      message.oxygenSense = Number(object.oxygenSense);
    } else {
      message.oxygenSense = 0;
    }
    return message;
  },

  toJSON(message: BeeParams): unknown {
    const obj: any = {};
    if (message.price) {
      obj.price = message.price.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.price = [];
    }
    message.countHoneyPerBlock !== undefined &&
      (obj.countHoneyPerBlock = message.countHoneyPerBlock);
    message.apiarySize !== undefined && (obj.apiarySize = message.apiarySize);
    message.oxygenSense !== undefined &&
      (obj.oxygenSense = message.oxygenSense);
    return obj;
  },

  fromPartial(object: DeepPartial<BeeParams>): BeeParams {
    const message = { ...baseBeeParams } as BeeParams;
    message.price = [];
    if (object.price !== undefined && object.price !== null) {
      for (const e of object.price) {
        message.price.push(Coin.fromPartial(e));
      }
    }
    if (
      object.countHoneyPerBlock !== undefined &&
      object.countHoneyPerBlock !== null
    ) {
      message.countHoneyPerBlock = object.countHoneyPerBlock;
    } else {
      message.countHoneyPerBlock = 0;
    }
    if (object.apiarySize !== undefined && object.apiarySize !== null) {
      message.apiarySize = object.apiarySize;
    } else {
      message.apiarySize = 0;
    }
    if (object.oxygenSense !== undefined && object.oxygenSense !== null) {
      message.oxygenSense = object.oxygenSense;
    } else {
      message.oxygenSense = 0;
    }
    return message;
  },
};

const baseApiaryHouse: object = { id: 0 };

export const ApiaryHouse = {
  encode(message: ApiaryHouse, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ApiaryHouse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseApiaryHouse } as ApiaryHouse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ApiaryHouse {
    const message = { ...baseApiaryHouse } as ApiaryHouse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: ApiaryHouse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<ApiaryHouse>): ApiaryHouse {
    const message = { ...baseApiaryHouse } as ApiaryHouse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseBees: object = { id: 0 };

export const Bees = {
  encode(message: Bees, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.bearOwner !== undefined) {
      BearOwner.encode(message.bearOwner, writer.uint32(18).fork()).ldelim();
    }
    if (message.apiaryHouse !== undefined) {
      ApiaryHouse.encode(
        message.apiaryHouse,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.params !== undefined) {
      BeeParams.encode(message.params, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Bees {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBees } as Bees;
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
          message.apiaryHouse = ApiaryHouse.decode(reader, reader.uint32());
          break;
        case 4:
          message.params = BeeParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Bees {
    const message = { ...baseBees } as Bees;
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
    if (object.apiaryHouse !== undefined && object.apiaryHouse !== null) {
      message.apiaryHouse = ApiaryHouse.fromJSON(object.apiaryHouse);
    } else {
      message.apiaryHouse = undefined;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = BeeParams.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: Bees): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.bearOwner !== undefined &&
      (obj.bearOwner = message.bearOwner
        ? BearOwner.toJSON(message.bearOwner)
        : undefined);
    message.apiaryHouse !== undefined &&
      (obj.apiaryHouse = message.apiaryHouse
        ? ApiaryHouse.toJSON(message.apiaryHouse)
        : undefined);
    message.params !== undefined &&
      (obj.params = message.params
        ? BeeParams.toJSON(message.params)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Bees>): Bees {
    const message = { ...baseBees } as Bees;
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
    if (object.apiaryHouse !== undefined && object.apiaryHouse !== null) {
      message.apiaryHouse = ApiaryHouse.fromPartial(object.apiaryHouse);
    } else {
      message.apiaryHouse = undefined;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = BeeParams.fromPartial(object.params);
    } else {
      message.params = undefined;
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
