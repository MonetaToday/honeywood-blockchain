/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";
import { BearOwner } from "../bears/bears";

export const protobufPackage = "MonetaToday.honeywood.bears";

export interface BeeParams {
  bee_type: string;
  price: Coin[];
  honey_per_block: string;
  body_size: number;
  air_count_dependency: string;
  air_consume: string;
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
  fieldFertility: string;
  apiaryFertility: string;
}

const baseBeeParams: object = {
  bee_type: "",
  honey_per_block: "",
  body_size: 0,
  air_count_dependency: "",
  air_consume: "",
};

export const BeeParams = {
  encode(message: BeeParams, writer: Writer = Writer.create()): Writer {
    if (message.bee_type !== "") {
      writer.uint32(10).string(message.bee_type);
    }
    for (const v of message.price) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.honey_per_block !== "") {
      writer.uint32(26).string(message.honey_per_block);
    }
    if (message.body_size !== 0) {
      writer.uint32(32).uint64(message.body_size);
    }
    if (message.air_count_dependency !== "") {
      writer.uint32(42).string(message.air_count_dependency);
    }
    if (message.air_consume !== "") {
      writer.uint32(50).string(message.air_consume);
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
          message.bee_type = reader.string();
          break;
        case 2:
          message.price.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.honey_per_block = reader.string();
          break;
        case 4:
          message.body_size = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.air_count_dependency = reader.string();
          break;
        case 6:
          message.air_consume = reader.string();
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
    if (object.bee_type !== undefined && object.bee_type !== null) {
      message.bee_type = String(object.bee_type);
    } else {
      message.bee_type = "";
    }
    if (object.price !== undefined && object.price !== null) {
      for (const e of object.price) {
        message.price.push(Coin.fromJSON(e));
      }
    }
    if (
      object.honey_per_block !== undefined &&
      object.honey_per_block !== null
    ) {
      message.honey_per_block = String(object.honey_per_block);
    } else {
      message.honey_per_block = "";
    }
    if (object.body_size !== undefined && object.body_size !== null) {
      message.body_size = Number(object.body_size);
    } else {
      message.body_size = 0;
    }
    if (
      object.air_count_dependency !== undefined &&
      object.air_count_dependency !== null
    ) {
      message.air_count_dependency = String(object.air_count_dependency);
    } else {
      message.air_count_dependency = "";
    }
    if (object.air_consume !== undefined && object.air_consume !== null) {
      message.air_consume = String(object.air_consume);
    } else {
      message.air_consume = "";
    }
    return message;
  },

  toJSON(message: BeeParams): unknown {
    const obj: any = {};
    message.bee_type !== undefined && (obj.bee_type = message.bee_type);
    if (message.price) {
      obj.price = message.price.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.price = [];
    }
    message.honey_per_block !== undefined &&
      (obj.honey_per_block = message.honey_per_block);
    message.body_size !== undefined && (obj.body_size = message.body_size);
    message.air_count_dependency !== undefined &&
      (obj.air_count_dependency = message.air_count_dependency);
    message.air_consume !== undefined &&
      (obj.air_consume = message.air_consume);
    return obj;
  },

  fromPartial(object: DeepPartial<BeeParams>): BeeParams {
    const message = { ...baseBeeParams } as BeeParams;
    message.price = [];
    if (object.bee_type !== undefined && object.bee_type !== null) {
      message.bee_type = object.bee_type;
    } else {
      message.bee_type = "";
    }
    if (object.price !== undefined && object.price !== null) {
      for (const e of object.price) {
        message.price.push(Coin.fromPartial(e));
      }
    }
    if (
      object.honey_per_block !== undefined &&
      object.honey_per_block !== null
    ) {
      message.honey_per_block = object.honey_per_block;
    } else {
      message.honey_per_block = "";
    }
    if (object.body_size !== undefined && object.body_size !== null) {
      message.body_size = object.body_size;
    } else {
      message.body_size = 0;
    }
    if (
      object.air_count_dependency !== undefined &&
      object.air_count_dependency !== null
    ) {
      message.air_count_dependency = object.air_count_dependency;
    } else {
      message.air_count_dependency = "";
    }
    if (object.air_consume !== undefined && object.air_consume !== null) {
      message.air_consume = object.air_consume;
    } else {
      message.air_consume = "";
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

const baseBees: object = {
  id: 0,
  name: "",
  fieldFertility: "",
  apiaryFertility: "",
};

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
    if (message.fieldFertility !== "") {
      writer.uint32(50).string(message.fieldFertility);
    }
    if (message.apiaryFertility !== "") {
      writer.uint32(58).string(message.apiaryFertility);
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
        case 6:
          message.fieldFertility = reader.string();
          break;
        case 7:
          message.apiaryFertility = reader.string();
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
    if (object.fieldFertility !== undefined && object.fieldFertility !== null) {
      message.fieldFertility = String(object.fieldFertility);
    } else {
      message.fieldFertility = "";
    }
    if (
      object.apiaryFertility !== undefined &&
      object.apiaryFertility !== null
    ) {
      message.apiaryFertility = String(object.apiaryFertility);
    } else {
      message.apiaryFertility = "";
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
    message.fieldFertility !== undefined &&
      (obj.fieldFertility = message.fieldFertility);
    message.apiaryFertility !== undefined &&
      (obj.apiaryFertility = message.apiaryFertility);
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
    if (object.fieldFertility !== undefined && object.fieldFertility !== null) {
      message.fieldFertility = object.fieldFertility;
    } else {
      message.fieldFertility = "";
    }
    if (
      object.apiaryFertility !== undefined &&
      object.apiaryFertility !== null
    ) {
      message.apiaryFertility = object.apiaryFertility;
    } else {
      message.apiaryFertility = "";
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
