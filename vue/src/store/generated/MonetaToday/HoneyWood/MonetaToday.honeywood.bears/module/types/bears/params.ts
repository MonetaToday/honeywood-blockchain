/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";
import { FieldParams } from "../bears/fields";
import { TreeParams } from "../bears/trees";
import { DecorationParams } from "../bears/decorations";
import { ApiaryParams } from "../bears/apiaries";
import { BeeParams } from "../bears/bees";

export const protobufPackage = "MonetaToday.honeywood.bears";

/** Params defines the parameters for the module. */
export interface Params {
  blocks_per_hour: number;
  air_history_length: number;
  burn_rate: string;
  price_set_name: Coin[];
  field_types: FieldParams[];
  tree_types: TreeParams[];
  decoration_types: DecorationParams[];
  apiary_types: ApiaryParams[];
  bee_types: BeeParams[];
  honey_denom: string;
}

const baseParams: object = {
  blocks_per_hour: 0,
  air_history_length: 0,
  burn_rate: "",
  honey_denom: "",
};

export const Params = {
  encode(message: Params, writer: Writer = Writer.create()): Writer {
    if (message.blocks_per_hour !== 0) {
      writer.uint32(8).uint64(message.blocks_per_hour);
    }
    if (message.air_history_length !== 0) {
      writer.uint32(16).uint64(message.air_history_length);
    }
    if (message.burn_rate !== "") {
      writer.uint32(26).string(message.burn_rate);
    }
    for (const v of message.price_set_name) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.field_types) {
      FieldParams.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.tree_types) {
      TreeParams.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.decoration_types) {
      DecorationParams.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.apiary_types) {
      ApiaryParams.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.bee_types) {
      BeeParams.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.honey_denom !== "") {
      writer.uint32(82).string(message.honey_denom);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    message.price_set_name = [];
    message.field_types = [];
    message.tree_types = [];
    message.decoration_types = [];
    message.apiary_types = [];
    message.bee_types = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blocks_per_hour = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.air_history_length = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.burn_rate = reader.string();
          break;
        case 4:
          message.price_set_name.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.field_types.push(FieldParams.decode(reader, reader.uint32()));
          break;
        case 6:
          message.tree_types.push(TreeParams.decode(reader, reader.uint32()));
          break;
        case 7:
          message.decoration_types.push(
            DecorationParams.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.apiary_types.push(
            ApiaryParams.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.bee_types.push(BeeParams.decode(reader, reader.uint32()));
          break;
        case 10:
          message.honey_denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    const message = { ...baseParams } as Params;
    message.price_set_name = [];
    message.field_types = [];
    message.tree_types = [];
    message.decoration_types = [];
    message.apiary_types = [];
    message.bee_types = [];
    if (
      object.blocks_per_hour !== undefined &&
      object.blocks_per_hour !== null
    ) {
      message.blocks_per_hour = Number(object.blocks_per_hour);
    } else {
      message.blocks_per_hour = 0;
    }
    if (
      object.air_history_length !== undefined &&
      object.air_history_length !== null
    ) {
      message.air_history_length = Number(object.air_history_length);
    } else {
      message.air_history_length = 0;
    }
    if (object.burn_rate !== undefined && object.burn_rate !== null) {
      message.burn_rate = String(object.burn_rate);
    } else {
      message.burn_rate = "";
    }
    if (object.price_set_name !== undefined && object.price_set_name !== null) {
      for (const e of object.price_set_name) {
        message.price_set_name.push(Coin.fromJSON(e));
      }
    }
    if (object.field_types !== undefined && object.field_types !== null) {
      for (const e of object.field_types) {
        message.field_types.push(FieldParams.fromJSON(e));
      }
    }
    if (object.tree_types !== undefined && object.tree_types !== null) {
      for (const e of object.tree_types) {
        message.tree_types.push(TreeParams.fromJSON(e));
      }
    }
    if (
      object.decoration_types !== undefined &&
      object.decoration_types !== null
    ) {
      for (const e of object.decoration_types) {
        message.decoration_types.push(DecorationParams.fromJSON(e));
      }
    }
    if (object.apiary_types !== undefined && object.apiary_types !== null) {
      for (const e of object.apiary_types) {
        message.apiary_types.push(ApiaryParams.fromJSON(e));
      }
    }
    if (object.bee_types !== undefined && object.bee_types !== null) {
      for (const e of object.bee_types) {
        message.bee_types.push(BeeParams.fromJSON(e));
      }
    }
    if (object.honey_denom !== undefined && object.honey_denom !== null) {
      message.honey_denom = String(object.honey_denom);
    } else {
      message.honey_denom = "";
    }
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.blocks_per_hour !== undefined &&
      (obj.blocks_per_hour = message.blocks_per_hour);
    message.air_history_length !== undefined &&
      (obj.air_history_length = message.air_history_length);
    message.burn_rate !== undefined && (obj.burn_rate = message.burn_rate);
    if (message.price_set_name) {
      obj.price_set_name = message.price_set_name.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.price_set_name = [];
    }
    if (message.field_types) {
      obj.field_types = message.field_types.map((e) =>
        e ? FieldParams.toJSON(e) : undefined
      );
    } else {
      obj.field_types = [];
    }
    if (message.tree_types) {
      obj.tree_types = message.tree_types.map((e) =>
        e ? TreeParams.toJSON(e) : undefined
      );
    } else {
      obj.tree_types = [];
    }
    if (message.decoration_types) {
      obj.decoration_types = message.decoration_types.map((e) =>
        e ? DecorationParams.toJSON(e) : undefined
      );
    } else {
      obj.decoration_types = [];
    }
    if (message.apiary_types) {
      obj.apiary_types = message.apiary_types.map((e) =>
        e ? ApiaryParams.toJSON(e) : undefined
      );
    } else {
      obj.apiary_types = [];
    }
    if (message.bee_types) {
      obj.bee_types = message.bee_types.map((e) =>
        e ? BeeParams.toJSON(e) : undefined
      );
    } else {
      obj.bee_types = [];
    }
    message.honey_denom !== undefined &&
      (obj.honey_denom = message.honey_denom);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    message.price_set_name = [];
    message.field_types = [];
    message.tree_types = [];
    message.decoration_types = [];
    message.apiary_types = [];
    message.bee_types = [];
    if (
      object.blocks_per_hour !== undefined &&
      object.blocks_per_hour !== null
    ) {
      message.blocks_per_hour = object.blocks_per_hour;
    } else {
      message.blocks_per_hour = 0;
    }
    if (
      object.air_history_length !== undefined &&
      object.air_history_length !== null
    ) {
      message.air_history_length = object.air_history_length;
    } else {
      message.air_history_length = 0;
    }
    if (object.burn_rate !== undefined && object.burn_rate !== null) {
      message.burn_rate = object.burn_rate;
    } else {
      message.burn_rate = "";
    }
    if (object.price_set_name !== undefined && object.price_set_name !== null) {
      for (const e of object.price_set_name) {
        message.price_set_name.push(Coin.fromPartial(e));
      }
    }
    if (object.field_types !== undefined && object.field_types !== null) {
      for (const e of object.field_types) {
        message.field_types.push(FieldParams.fromPartial(e));
      }
    }
    if (object.tree_types !== undefined && object.tree_types !== null) {
      for (const e of object.tree_types) {
        message.tree_types.push(TreeParams.fromPartial(e));
      }
    }
    if (
      object.decoration_types !== undefined &&
      object.decoration_types !== null
    ) {
      for (const e of object.decoration_types) {
        message.decoration_types.push(DecorationParams.fromPartial(e));
      }
    }
    if (object.apiary_types !== undefined && object.apiary_types !== null) {
      for (const e of object.apiary_types) {
        message.apiary_types.push(ApiaryParams.fromPartial(e));
      }
    }
    if (object.bee_types !== undefined && object.bee_types !== null) {
      for (const e of object.bee_types) {
        message.bee_types.push(BeeParams.fromPartial(e));
      }
    }
    if (object.honey_denom !== undefined && object.honey_denom !== null) {
      message.honey_denom = object.honey_denom;
    } else {
      message.honey_denom = "";
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
