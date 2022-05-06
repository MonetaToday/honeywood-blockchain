/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";
import { BearOwner } from "../bears/bears";

export const protobufPackage = "MonetaToday.honeywood.bears";

export interface BeeParams {
  beeType: string;
  price: Coin[];
  honeyPerBlock: string;
  bodySize: number;
  airCountDependency: string;
  airConsume: string;
}

export interface ApiaryHouse {
  id: number;
}

export interface Bees {
  id: number;
  name: string;
  bearOwner: BearOwner | undefined;
  apiaryHouse: ApiaryHouse | undefined;
  params: BeeParams | undefined;
}

const baseBeeParams: object = {
  beeType: "",
  honeyPerBlock: "",
  bodySize: 0,
  airCountDependency: "",
  airConsume: "",
};

export const BeeParams = {
  encode(message: BeeParams, writer: Writer = Writer.create()): Writer {
    if (message.beeType !== "") {
      writer.uint32(10).string(message.beeType);
    }
    for (const v of message.price) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.honeyPerBlock !== "") {
      writer.uint32(26).string(message.honeyPerBlock);
    }
    if (message.bodySize !== 0) {
      writer.uint32(32).uint64(message.bodySize);
    }
    if (message.airCountDependency !== "") {
      writer.uint32(42).string(message.airCountDependency);
    }
    if (message.airConsume !== "") {
      writer.uint32(50).string(message.airConsume);
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
          message.beeType = reader.string();
          break;
        case 2:
          message.price.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.honeyPerBlock = reader.string();
          break;
        case 4:
          message.bodySize = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.airCountDependency = reader.string();
          break;
        case 6:
          message.airConsume = reader.string();
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
    if (object.beeType !== undefined && object.beeType !== null) {
      message.beeType = String(object.beeType);
    } else {
      message.beeType = "";
    }
    if (object.price !== undefined && object.price !== null) {
      for (const e of object.price) {
        message.price.push(Coin.fromJSON(e));
      }
    }
    if (object.honeyPerBlock !== undefined && object.honeyPerBlock !== null) {
      message.honeyPerBlock = String(object.honeyPerBlock);
    } else {
      message.honeyPerBlock = "";
    }
    if (object.bodySize !== undefined && object.bodySize !== null) {
      message.bodySize = Number(object.bodySize);
    } else {
      message.bodySize = 0;
    }
    if (
      object.airCountDependency !== undefined &&
      object.airCountDependency !== null
    ) {
      message.airCountDependency = String(object.airCountDependency);
    } else {
      message.airCountDependency = "";
    }
    if (object.airConsume !== undefined && object.airConsume !== null) {
      message.airConsume = String(object.airConsume);
    } else {
      message.airConsume = "";
    }
    return message;
  },

  toJSON(message: BeeParams): unknown {
    const obj: any = {};
    message.beeType !== undefined && (obj.beeType = message.beeType);
    if (message.price) {
      obj.price = message.price.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.price = [];
    }
    message.honeyPerBlock !== undefined &&
      (obj.honeyPerBlock = message.honeyPerBlock);
    message.bodySize !== undefined && (obj.bodySize = message.bodySize);
    message.airCountDependency !== undefined &&
      (obj.airCountDependency = message.airCountDependency);
    message.airConsume !== undefined && (obj.airConsume = message.airConsume);
    return obj;
  },

  fromPartial(object: DeepPartial<BeeParams>): BeeParams {
    const message = { ...baseBeeParams } as BeeParams;
    message.price = [];
    if (object.beeType !== undefined && object.beeType !== null) {
      message.beeType = object.beeType;
    } else {
      message.beeType = "";
    }
    if (object.price !== undefined && object.price !== null) {
      for (const e of object.price) {
        message.price.push(Coin.fromPartial(e));
      }
    }
    if (object.honeyPerBlock !== undefined && object.honeyPerBlock !== null) {
      message.honeyPerBlock = object.honeyPerBlock;
    } else {
      message.honeyPerBlock = "";
    }
    if (object.bodySize !== undefined && object.bodySize !== null) {
      message.bodySize = object.bodySize;
    } else {
      message.bodySize = 0;
    }
    if (
      object.airCountDependency !== undefined &&
      object.airCountDependency !== null
    ) {
      message.airCountDependency = object.airCountDependency;
    } else {
      message.airCountDependency = "";
    }
    if (object.airConsume !== undefined && object.airConsume !== null) {
      message.airConsume = object.airConsume;
    } else {
      message.airConsume = "";
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

const baseBees: object = { id: 0, name: "" };

export const Bees = {
  encode(message: Bees, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.bearOwner !== undefined) {
      BearOwner.encode(message.bearOwner, writer.uint32(26).fork()).ldelim();
    }
    if (message.apiaryHouse !== undefined) {
      ApiaryHouse.encode(
        message.apiaryHouse,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.params !== undefined) {
      BeeParams.encode(message.params, writer.uint32(42).fork()).ldelim();
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
          message.name = reader.string();
          break;
        case 3:
          message.bearOwner = BearOwner.decode(reader, reader.uint32());
          break;
        case 4:
          message.apiaryHouse = ApiaryHouse.decode(reader, reader.uint32());
          break;
        case 5:
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
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
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
    message.name !== undefined && (obj.name = message.name);
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
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
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
