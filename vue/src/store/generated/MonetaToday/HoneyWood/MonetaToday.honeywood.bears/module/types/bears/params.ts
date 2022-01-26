/* eslint-disable */
import { Coin } from "../cosmos/base/v1beta1/coin";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "MonetaToday.honeywood.bears";

/** Params defines the parameters for the module. */
export interface Params {
  setNamePrice: Coin | undefined;
  oneGroundPrice: Coin | undefined;
  oneTreePrice: Coin | undefined;
  oneTreeReward: Coin | undefined;
}

const baseParams: object = {};

export const Params = {
  encode(message: Params, writer: Writer = Writer.create()): Writer {
    if (message.setNamePrice !== undefined) {
      Coin.encode(message.setNamePrice, writer.uint32(10).fork()).ldelim();
    }
    if (message.oneGroundPrice !== undefined) {
      Coin.encode(message.oneGroundPrice, writer.uint32(18).fork()).ldelim();
    }
    if (message.oneTreePrice !== undefined) {
      Coin.encode(message.oneTreePrice, writer.uint32(26).fork()).ldelim();
    }
    if (message.oneTreeReward !== undefined) {
      Coin.encode(message.oneTreeReward, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.setNamePrice = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.oneGroundPrice = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.oneTreePrice = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.oneTreeReward = Coin.decode(reader, reader.uint32());
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
    if (object.setNamePrice !== undefined && object.setNamePrice !== null) {
      message.setNamePrice = Coin.fromJSON(object.setNamePrice);
    } else {
      message.setNamePrice = undefined;
    }
    if (object.oneGroundPrice !== undefined && object.oneGroundPrice !== null) {
      message.oneGroundPrice = Coin.fromJSON(object.oneGroundPrice);
    } else {
      message.oneGroundPrice = undefined;
    }
    if (object.oneTreePrice !== undefined && object.oneTreePrice !== null) {
      message.oneTreePrice = Coin.fromJSON(object.oneTreePrice);
    } else {
      message.oneTreePrice = undefined;
    }
    if (object.oneTreeReward !== undefined && object.oneTreeReward !== null) {
      message.oneTreeReward = Coin.fromJSON(object.oneTreeReward);
    } else {
      message.oneTreeReward = undefined;
    }
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.setNamePrice !== undefined &&
      (obj.setNamePrice = message.setNamePrice
        ? Coin.toJSON(message.setNamePrice)
        : undefined);
    message.oneGroundPrice !== undefined &&
      (obj.oneGroundPrice = message.oneGroundPrice
        ? Coin.toJSON(message.oneGroundPrice)
        : undefined);
    message.oneTreePrice !== undefined &&
      (obj.oneTreePrice = message.oneTreePrice
        ? Coin.toJSON(message.oneTreePrice)
        : undefined);
    message.oneTreeReward !== undefined &&
      (obj.oneTreeReward = message.oneTreeReward
        ? Coin.toJSON(message.oneTreeReward)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    if (object.setNamePrice !== undefined && object.setNamePrice !== null) {
      message.setNamePrice = Coin.fromPartial(object.setNamePrice);
    } else {
      message.setNamePrice = undefined;
    }
    if (object.oneGroundPrice !== undefined && object.oneGroundPrice !== null) {
      message.oneGroundPrice = Coin.fromPartial(object.oneGroundPrice);
    } else {
      message.oneGroundPrice = undefined;
    }
    if (object.oneTreePrice !== undefined && object.oneTreePrice !== null) {
      message.oneTreePrice = Coin.fromPartial(object.oneTreePrice);
    } else {
      message.oneTreePrice = undefined;
    }
    if (object.oneTreeReward !== undefined && object.oneTreeReward !== null) {
      message.oneTreeReward = Coin.fromPartial(object.oneTreeReward);
    } else {
      message.oneTreeReward = undefined;
    }
    return message;
  },
};

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
