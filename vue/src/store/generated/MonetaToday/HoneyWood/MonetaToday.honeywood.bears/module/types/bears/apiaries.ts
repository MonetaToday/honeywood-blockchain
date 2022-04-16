/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";
import { BearOwner } from "../bears/bears";
import { ItemPosition } from "../bears/fields";

export const protobufPackage = "MonetaToday.honeywood.bears";

export interface ApiaryParams {
  apiary_type: string;
  price: Coin[];
  space_available: number;
  max_honey: string;
  delete_reward: Coin[];
  fertility: string;
}

export interface CycleHistory {
  height: number;
  bees: number[];
}

export interface Apiaries {
  id: number;
  bearOwner: BearOwner | undefined;
  position: ItemPosition | undefined;
  params: ApiaryParams | undefined;
  cycleHistory: CycleHistory[];
  spaceOccupied: number;
  honeyFromPast: string;
  fieldFertility: string;
}

const baseApiaryParams: object = {
  apiary_type: "",
  space_available: 0,
  max_honey: "",
  fertility: "",
};

export const ApiaryParams = {
  encode(message: ApiaryParams, writer: Writer = Writer.create()): Writer {
    if (message.apiary_type !== "") {
      writer.uint32(10).string(message.apiary_type);
    }
    for (const v of message.price) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.space_available !== 0) {
      writer.uint32(24).uint64(message.space_available);
    }
    if (message.max_honey !== "") {
      writer.uint32(34).string(message.max_honey);
    }
    for (const v of message.delete_reward) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.fertility !== "") {
      writer.uint32(50).string(message.fertility);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ApiaryParams {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseApiaryParams } as ApiaryParams;
    message.price = [];
    message.delete_reward = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.apiary_type = reader.string();
          break;
        case 2:
          message.price.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.space_available = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.max_honey = reader.string();
          break;
        case 5:
          message.delete_reward.push(Coin.decode(reader, reader.uint32()));
          break;
        case 6:
          message.fertility = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ApiaryParams {
    const message = { ...baseApiaryParams } as ApiaryParams;
    message.price = [];
    message.delete_reward = [];
    if (object.apiary_type !== undefined && object.apiary_type !== null) {
      message.apiary_type = String(object.apiary_type);
    } else {
      message.apiary_type = "";
    }
    if (object.price !== undefined && object.price !== null) {
      for (const e of object.price) {
        message.price.push(Coin.fromJSON(e));
      }
    }
    if (
      object.space_available !== undefined &&
      object.space_available !== null
    ) {
      message.space_available = Number(object.space_available);
    } else {
      message.space_available = 0;
    }
    if (object.max_honey !== undefined && object.max_honey !== null) {
      message.max_honey = String(object.max_honey);
    } else {
      message.max_honey = "";
    }
    if (object.delete_reward !== undefined && object.delete_reward !== null) {
      for (const e of object.delete_reward) {
        message.delete_reward.push(Coin.fromJSON(e));
      }
    }
    if (object.fertility !== undefined && object.fertility !== null) {
      message.fertility = String(object.fertility);
    } else {
      message.fertility = "";
    }
    return message;
  },

  toJSON(message: ApiaryParams): unknown {
    const obj: any = {};
    message.apiary_type !== undefined &&
      (obj.apiary_type = message.apiary_type);
    if (message.price) {
      obj.price = message.price.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.price = [];
    }
    message.space_available !== undefined &&
      (obj.space_available = message.space_available);
    message.max_honey !== undefined && (obj.max_honey = message.max_honey);
    if (message.delete_reward) {
      obj.delete_reward = message.delete_reward.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.delete_reward = [];
    }
    message.fertility !== undefined && (obj.fertility = message.fertility);
    return obj;
  },

  fromPartial(object: DeepPartial<ApiaryParams>): ApiaryParams {
    const message = { ...baseApiaryParams } as ApiaryParams;
    message.price = [];
    message.delete_reward = [];
    if (object.apiary_type !== undefined && object.apiary_type !== null) {
      message.apiary_type = object.apiary_type;
    } else {
      message.apiary_type = "";
    }
    if (object.price !== undefined && object.price !== null) {
      for (const e of object.price) {
        message.price.push(Coin.fromPartial(e));
      }
    }
    if (
      object.space_available !== undefined &&
      object.space_available !== null
    ) {
      message.space_available = object.space_available;
    } else {
      message.space_available = 0;
    }
    if (object.max_honey !== undefined && object.max_honey !== null) {
      message.max_honey = object.max_honey;
    } else {
      message.max_honey = "";
    }
    if (object.delete_reward !== undefined && object.delete_reward !== null) {
      for (const e of object.delete_reward) {
        message.delete_reward.push(Coin.fromPartial(e));
      }
    }
    if (object.fertility !== undefined && object.fertility !== null) {
      message.fertility = object.fertility;
    } else {
      message.fertility = "";
    }
    return message;
  },
};

const baseCycleHistory: object = { height: 0, bees: 0 };

export const CycleHistory = {
  encode(message: CycleHistory, writer: Writer = Writer.create()): Writer {
    if (message.height !== 0) {
      writer.uint32(8).uint64(message.height);
    }
    writer.uint32(18).fork();
    for (const v of message.bees) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CycleHistory {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCycleHistory } as CycleHistory;
    message.bees = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.bees.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.bees.push(longToNumber(reader.uint64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CycleHistory {
    const message = { ...baseCycleHistory } as CycleHistory;
    message.bees = [];
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    } else {
      message.height = 0;
    }
    if (object.bees !== undefined && object.bees !== null) {
      for (const e of object.bees) {
        message.bees.push(Number(e));
      }
    }
    return message;
  },

  toJSON(message: CycleHistory): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = message.height);
    if (message.bees) {
      obj.bees = message.bees.map((e) => e);
    } else {
      obj.bees = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<CycleHistory>): CycleHistory {
    const message = { ...baseCycleHistory } as CycleHistory;
    message.bees = [];
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = 0;
    }
    if (object.bees !== undefined && object.bees !== null) {
      for (const e of object.bees) {
        message.bees.push(e);
      }
    }
    return message;
  },
};

const baseApiaries: object = {
  id: 0,
  spaceOccupied: 0,
  honeyFromPast: "",
  fieldFertility: "",
};

export const Apiaries = {
  encode(message: Apiaries, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.bearOwner !== undefined) {
      BearOwner.encode(message.bearOwner, writer.uint32(18).fork()).ldelim();
    }
    if (message.position !== undefined) {
      ItemPosition.encode(message.position, writer.uint32(26).fork()).ldelim();
    }
    if (message.params !== undefined) {
      ApiaryParams.encode(message.params, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.cycleHistory) {
      CycleHistory.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.spaceOccupied !== 0) {
      writer.uint32(48).uint64(message.spaceOccupied);
    }
    if (message.honeyFromPast !== "") {
      writer.uint32(58).string(message.honeyFromPast);
    }
    if (message.fieldFertility !== "") {
      writer.uint32(66).string(message.fieldFertility);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Apiaries {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseApiaries } as Apiaries;
    message.cycleHistory = [];
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
          message.position = ItemPosition.decode(reader, reader.uint32());
          break;
        case 4:
          message.params = ApiaryParams.decode(reader, reader.uint32());
          break;
        case 5:
          message.cycleHistory.push(
            CycleHistory.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.spaceOccupied = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.honeyFromPast = reader.string();
          break;
        case 8:
          message.fieldFertility = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Apiaries {
    const message = { ...baseApiaries } as Apiaries;
    message.cycleHistory = [];
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
    if (object.position !== undefined && object.position !== null) {
      message.position = ItemPosition.fromJSON(object.position);
    } else {
      message.position = undefined;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = ApiaryParams.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.cycleHistory !== undefined && object.cycleHistory !== null) {
      for (const e of object.cycleHistory) {
        message.cycleHistory.push(CycleHistory.fromJSON(e));
      }
    }
    if (object.spaceOccupied !== undefined && object.spaceOccupied !== null) {
      message.spaceOccupied = Number(object.spaceOccupied);
    } else {
      message.spaceOccupied = 0;
    }
    if (object.honeyFromPast !== undefined && object.honeyFromPast !== null) {
      message.honeyFromPast = String(object.honeyFromPast);
    } else {
      message.honeyFromPast = "";
    }
    if (object.fieldFertility !== undefined && object.fieldFertility !== null) {
      message.fieldFertility = String(object.fieldFertility);
    } else {
      message.fieldFertility = "";
    }
    return message;
  },

  toJSON(message: Apiaries): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.bearOwner !== undefined &&
      (obj.bearOwner = message.bearOwner
        ? BearOwner.toJSON(message.bearOwner)
        : undefined);
    message.position !== undefined &&
      (obj.position = message.position
        ? ItemPosition.toJSON(message.position)
        : undefined);
    message.params !== undefined &&
      (obj.params = message.params
        ? ApiaryParams.toJSON(message.params)
        : undefined);
    if (message.cycleHistory) {
      obj.cycleHistory = message.cycleHistory.map((e) =>
        e ? CycleHistory.toJSON(e) : undefined
      );
    } else {
      obj.cycleHistory = [];
    }
    message.spaceOccupied !== undefined &&
      (obj.spaceOccupied = message.spaceOccupied);
    message.honeyFromPast !== undefined &&
      (obj.honeyFromPast = message.honeyFromPast);
    message.fieldFertility !== undefined &&
      (obj.fieldFertility = message.fieldFertility);
    return obj;
  },

  fromPartial(object: DeepPartial<Apiaries>): Apiaries {
    const message = { ...baseApiaries } as Apiaries;
    message.cycleHistory = [];
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
    if (object.position !== undefined && object.position !== null) {
      message.position = ItemPosition.fromPartial(object.position);
    } else {
      message.position = undefined;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = ApiaryParams.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.cycleHistory !== undefined && object.cycleHistory !== null) {
      for (const e of object.cycleHistory) {
        message.cycleHistory.push(CycleHistory.fromPartial(e));
      }
    }
    if (object.spaceOccupied !== undefined && object.spaceOccupied !== null) {
      message.spaceOccupied = object.spaceOccupied;
    } else {
      message.spaceOccupied = 0;
    }
    if (object.honeyFromPast !== undefined && object.honeyFromPast !== null) {
      message.honeyFromPast = object.honeyFromPast;
    } else {
      message.honeyFromPast = "";
    }
    if (object.fieldFertility !== undefined && object.fieldFertility !== null) {
      message.fieldFertility = object.fieldFertility;
    } else {
      message.fieldFertility = "";
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
