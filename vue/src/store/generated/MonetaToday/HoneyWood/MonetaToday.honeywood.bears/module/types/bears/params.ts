/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";

export const protobufPackage = "MonetaToday.honeywood.bears";

export interface ApiaryParams {
  price: Coin[];
  maxCountBees: number;
  maxCountHoney: number;
}

/** Params defines the parameters for the module. */
export interface Params {
  burnRate: string;
  priceSetName: Coin[];
  priceTile: Coin[];
  priceTree: Coin[];
  rewardTree: Coin[];
  priceDecorationFlowers: Coin[];
  priceDecorationFlag: Coin[];
  priceDecorationLamp: Coin[];
  priceDecorationGreenBee: Coin[];
  priceDecorationFountain: Coin[];
  apiaryBeeHouseParams: ApiaryParams | undefined;
  apiaryApiaryParams: ApiaryParams | undefined;
  apiaryAlvearyParams: ApiaryParams | undefined;
}

const baseApiaryParams: object = { maxCountBees: 0, maxCountHoney: 0 };

export const ApiaryParams = {
  encode(message: ApiaryParams, writer: Writer = Writer.create()): Writer {
    for (const v of message.price) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.maxCountBees !== 0) {
      writer.uint32(16).uint64(message.maxCountBees);
    }
    if (message.maxCountHoney !== 0) {
      writer.uint32(24).uint64(message.maxCountHoney);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ApiaryParams {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseApiaryParams } as ApiaryParams;
    message.price = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.price.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.maxCountBees = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.maxCountHoney = longToNumber(reader.uint64() as Long);
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
    if (object.price !== undefined && object.price !== null) {
      for (const e of object.price) {
        message.price.push(Coin.fromJSON(e));
      }
    }
    if (object.maxCountBees !== undefined && object.maxCountBees !== null) {
      message.maxCountBees = Number(object.maxCountBees);
    } else {
      message.maxCountBees = 0;
    }
    if (object.maxCountHoney !== undefined && object.maxCountHoney !== null) {
      message.maxCountHoney = Number(object.maxCountHoney);
    } else {
      message.maxCountHoney = 0;
    }
    return message;
  },

  toJSON(message: ApiaryParams): unknown {
    const obj: any = {};
    if (message.price) {
      obj.price = message.price.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.price = [];
    }
    message.maxCountBees !== undefined &&
      (obj.maxCountBees = message.maxCountBees);
    message.maxCountHoney !== undefined &&
      (obj.maxCountHoney = message.maxCountHoney);
    return obj;
  },

  fromPartial(object: DeepPartial<ApiaryParams>): ApiaryParams {
    const message = { ...baseApiaryParams } as ApiaryParams;
    message.price = [];
    if (object.price !== undefined && object.price !== null) {
      for (const e of object.price) {
        message.price.push(Coin.fromPartial(e));
      }
    }
    if (object.maxCountBees !== undefined && object.maxCountBees !== null) {
      message.maxCountBees = object.maxCountBees;
    } else {
      message.maxCountBees = 0;
    }
    if (object.maxCountHoney !== undefined && object.maxCountHoney !== null) {
      message.maxCountHoney = object.maxCountHoney;
    } else {
      message.maxCountHoney = 0;
    }
    return message;
  },
};

const baseParams: object = { burnRate: "" };

export const Params = {
  encode(message: Params, writer: Writer = Writer.create()): Writer {
    if (message.burnRate !== "") {
      writer.uint32(10).string(message.burnRate);
    }
    for (const v of message.priceSetName) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.priceTile) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.priceTree) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.rewardTree) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.priceDecorationFlowers) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.priceDecorationFlag) {
      Coin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.priceDecorationLamp) {
      Coin.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.priceDecorationGreenBee) {
      Coin.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.priceDecorationFountain) {
      Coin.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.apiaryBeeHouseParams !== undefined) {
      ApiaryParams.encode(
        message.apiaryBeeHouseParams,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.apiaryApiaryParams !== undefined) {
      ApiaryParams.encode(
        message.apiaryApiaryParams,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.apiaryAlvearyParams !== undefined) {
      ApiaryParams.encode(
        message.apiaryAlvearyParams,
        writer.uint32(106).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    message.priceSetName = [];
    message.priceTile = [];
    message.priceTree = [];
    message.rewardTree = [];
    message.priceDecorationFlowers = [];
    message.priceDecorationFlag = [];
    message.priceDecorationLamp = [];
    message.priceDecorationGreenBee = [];
    message.priceDecorationFountain = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.burnRate = reader.string();
          break;
        case 2:
          message.priceSetName.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.priceTile.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.priceTree.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.rewardTree.push(Coin.decode(reader, reader.uint32()));
          break;
        case 6:
          message.priceDecorationFlowers.push(
            Coin.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.priceDecorationFlag.push(
            Coin.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.priceDecorationLamp.push(
            Coin.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.priceDecorationGreenBee.push(
            Coin.decode(reader, reader.uint32())
          );
          break;
        case 10:
          message.priceDecorationFountain.push(
            Coin.decode(reader, reader.uint32())
          );
          break;
        case 11:
          message.apiaryBeeHouseParams = ApiaryParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 12:
          message.apiaryApiaryParams = ApiaryParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 13:
          message.apiaryAlvearyParams = ApiaryParams.decode(
            reader,
            reader.uint32()
          );
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
    message.priceSetName = [];
    message.priceTile = [];
    message.priceTree = [];
    message.rewardTree = [];
    message.priceDecorationFlowers = [];
    message.priceDecorationFlag = [];
    message.priceDecorationLamp = [];
    message.priceDecorationGreenBee = [];
    message.priceDecorationFountain = [];
    if (object.burnRate !== undefined && object.burnRate !== null) {
      message.burnRate = String(object.burnRate);
    } else {
      message.burnRate = "";
    }
    if (object.priceSetName !== undefined && object.priceSetName !== null) {
      for (const e of object.priceSetName) {
        message.priceSetName.push(Coin.fromJSON(e));
      }
    }
    if (object.priceTile !== undefined && object.priceTile !== null) {
      for (const e of object.priceTile) {
        message.priceTile.push(Coin.fromJSON(e));
      }
    }
    if (object.priceTree !== undefined && object.priceTree !== null) {
      for (const e of object.priceTree) {
        message.priceTree.push(Coin.fromJSON(e));
      }
    }
    if (object.rewardTree !== undefined && object.rewardTree !== null) {
      for (const e of object.rewardTree) {
        message.rewardTree.push(Coin.fromJSON(e));
      }
    }
    if (
      object.priceDecorationFlowers !== undefined &&
      object.priceDecorationFlowers !== null
    ) {
      for (const e of object.priceDecorationFlowers) {
        message.priceDecorationFlowers.push(Coin.fromJSON(e));
      }
    }
    if (
      object.priceDecorationFlag !== undefined &&
      object.priceDecorationFlag !== null
    ) {
      for (const e of object.priceDecorationFlag) {
        message.priceDecorationFlag.push(Coin.fromJSON(e));
      }
    }
    if (
      object.priceDecorationLamp !== undefined &&
      object.priceDecorationLamp !== null
    ) {
      for (const e of object.priceDecorationLamp) {
        message.priceDecorationLamp.push(Coin.fromJSON(e));
      }
    }
    if (
      object.priceDecorationGreenBee !== undefined &&
      object.priceDecorationGreenBee !== null
    ) {
      for (const e of object.priceDecorationGreenBee) {
        message.priceDecorationGreenBee.push(Coin.fromJSON(e));
      }
    }
    if (
      object.priceDecorationFountain !== undefined &&
      object.priceDecorationFountain !== null
    ) {
      for (const e of object.priceDecorationFountain) {
        message.priceDecorationFountain.push(Coin.fromJSON(e));
      }
    }
    if (
      object.apiaryBeeHouseParams !== undefined &&
      object.apiaryBeeHouseParams !== null
    ) {
      message.apiaryBeeHouseParams = ApiaryParams.fromJSON(
        object.apiaryBeeHouseParams
      );
    } else {
      message.apiaryBeeHouseParams = undefined;
    }
    if (
      object.apiaryApiaryParams !== undefined &&
      object.apiaryApiaryParams !== null
    ) {
      message.apiaryApiaryParams = ApiaryParams.fromJSON(
        object.apiaryApiaryParams
      );
    } else {
      message.apiaryApiaryParams = undefined;
    }
    if (
      object.apiaryAlvearyParams !== undefined &&
      object.apiaryAlvearyParams !== null
    ) {
      message.apiaryAlvearyParams = ApiaryParams.fromJSON(
        object.apiaryAlvearyParams
      );
    } else {
      message.apiaryAlvearyParams = undefined;
    }
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.burnRate !== undefined && (obj.burnRate = message.burnRate);
    if (message.priceSetName) {
      obj.priceSetName = message.priceSetName.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.priceSetName = [];
    }
    if (message.priceTile) {
      obj.priceTile = message.priceTile.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.priceTile = [];
    }
    if (message.priceTree) {
      obj.priceTree = message.priceTree.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.priceTree = [];
    }
    if (message.rewardTree) {
      obj.rewardTree = message.rewardTree.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.rewardTree = [];
    }
    if (message.priceDecorationFlowers) {
      obj.priceDecorationFlowers = message.priceDecorationFlowers.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.priceDecorationFlowers = [];
    }
    if (message.priceDecorationFlag) {
      obj.priceDecorationFlag = message.priceDecorationFlag.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.priceDecorationFlag = [];
    }
    if (message.priceDecorationLamp) {
      obj.priceDecorationLamp = message.priceDecorationLamp.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.priceDecorationLamp = [];
    }
    if (message.priceDecorationGreenBee) {
      obj.priceDecorationGreenBee = message.priceDecorationGreenBee.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.priceDecorationGreenBee = [];
    }
    if (message.priceDecorationFountain) {
      obj.priceDecorationFountain = message.priceDecorationFountain.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.priceDecorationFountain = [];
    }
    message.apiaryBeeHouseParams !== undefined &&
      (obj.apiaryBeeHouseParams = message.apiaryBeeHouseParams
        ? ApiaryParams.toJSON(message.apiaryBeeHouseParams)
        : undefined);
    message.apiaryApiaryParams !== undefined &&
      (obj.apiaryApiaryParams = message.apiaryApiaryParams
        ? ApiaryParams.toJSON(message.apiaryApiaryParams)
        : undefined);
    message.apiaryAlvearyParams !== undefined &&
      (obj.apiaryAlvearyParams = message.apiaryAlvearyParams
        ? ApiaryParams.toJSON(message.apiaryAlvearyParams)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    message.priceSetName = [];
    message.priceTile = [];
    message.priceTree = [];
    message.rewardTree = [];
    message.priceDecorationFlowers = [];
    message.priceDecorationFlag = [];
    message.priceDecorationLamp = [];
    message.priceDecorationGreenBee = [];
    message.priceDecorationFountain = [];
    if (object.burnRate !== undefined && object.burnRate !== null) {
      message.burnRate = object.burnRate;
    } else {
      message.burnRate = "";
    }
    if (object.priceSetName !== undefined && object.priceSetName !== null) {
      for (const e of object.priceSetName) {
        message.priceSetName.push(Coin.fromPartial(e));
      }
    }
    if (object.priceTile !== undefined && object.priceTile !== null) {
      for (const e of object.priceTile) {
        message.priceTile.push(Coin.fromPartial(e));
      }
    }
    if (object.priceTree !== undefined && object.priceTree !== null) {
      for (const e of object.priceTree) {
        message.priceTree.push(Coin.fromPartial(e));
      }
    }
    if (object.rewardTree !== undefined && object.rewardTree !== null) {
      for (const e of object.rewardTree) {
        message.rewardTree.push(Coin.fromPartial(e));
      }
    }
    if (
      object.priceDecorationFlowers !== undefined &&
      object.priceDecorationFlowers !== null
    ) {
      for (const e of object.priceDecorationFlowers) {
        message.priceDecorationFlowers.push(Coin.fromPartial(e));
      }
    }
    if (
      object.priceDecorationFlag !== undefined &&
      object.priceDecorationFlag !== null
    ) {
      for (const e of object.priceDecorationFlag) {
        message.priceDecorationFlag.push(Coin.fromPartial(e));
      }
    }
    if (
      object.priceDecorationLamp !== undefined &&
      object.priceDecorationLamp !== null
    ) {
      for (const e of object.priceDecorationLamp) {
        message.priceDecorationLamp.push(Coin.fromPartial(e));
      }
    }
    if (
      object.priceDecorationGreenBee !== undefined &&
      object.priceDecorationGreenBee !== null
    ) {
      for (const e of object.priceDecorationGreenBee) {
        message.priceDecorationGreenBee.push(Coin.fromPartial(e));
      }
    }
    if (
      object.priceDecorationFountain !== undefined &&
      object.priceDecorationFountain !== null
    ) {
      for (const e of object.priceDecorationFountain) {
        message.priceDecorationFountain.push(Coin.fromPartial(e));
      }
    }
    if (
      object.apiaryBeeHouseParams !== undefined &&
      object.apiaryBeeHouseParams !== null
    ) {
      message.apiaryBeeHouseParams = ApiaryParams.fromPartial(
        object.apiaryBeeHouseParams
      );
    } else {
      message.apiaryBeeHouseParams = undefined;
    }
    if (
      object.apiaryApiaryParams !== undefined &&
      object.apiaryApiaryParams !== null
    ) {
      message.apiaryApiaryParams = ApiaryParams.fromPartial(
        object.apiaryApiaryParams
      );
    } else {
      message.apiaryApiaryParams = undefined;
    }
    if (
      object.apiaryAlvearyParams !== undefined &&
      object.apiaryAlvearyParams !== null
    ) {
      message.apiaryAlvearyParams = ApiaryParams.fromPartial(
        object.apiaryAlvearyParams
      );
    } else {
      message.apiaryAlvearyParams = undefined;
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
