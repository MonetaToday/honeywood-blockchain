/* eslint-disable */
import { Coin } from "../cosmos/base/v1beta1/coin";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "MonetaToday.honeywood.bears";

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
  priceApiaryBeeHouse: Coin[];
  priceApiaryApiary: Coin[];
  priceApiaryAlveary: Coin[];
}

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
    for (const v of message.priceApiaryBeeHouse) {
      Coin.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.priceApiaryApiary) {
      Coin.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    for (const v of message.priceApiaryAlveary) {
      Coin.encode(v!, writer.uint32(106).fork()).ldelim();
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
    message.priceApiaryBeeHouse = [];
    message.priceApiaryApiary = [];
    message.priceApiaryAlveary = [];
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
          message.priceApiaryBeeHouse.push(
            Coin.decode(reader, reader.uint32())
          );
          break;
        case 12:
          message.priceApiaryApiary.push(Coin.decode(reader, reader.uint32()));
          break;
        case 13:
          message.priceApiaryAlveary.push(Coin.decode(reader, reader.uint32()));
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
    message.priceApiaryBeeHouse = [];
    message.priceApiaryApiary = [];
    message.priceApiaryAlveary = [];
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
      object.priceApiaryBeeHouse !== undefined &&
      object.priceApiaryBeeHouse !== null
    ) {
      for (const e of object.priceApiaryBeeHouse) {
        message.priceApiaryBeeHouse.push(Coin.fromJSON(e));
      }
    }
    if (
      object.priceApiaryApiary !== undefined &&
      object.priceApiaryApiary !== null
    ) {
      for (const e of object.priceApiaryApiary) {
        message.priceApiaryApiary.push(Coin.fromJSON(e));
      }
    }
    if (
      object.priceApiaryAlveary !== undefined &&
      object.priceApiaryAlveary !== null
    ) {
      for (const e of object.priceApiaryAlveary) {
        message.priceApiaryAlveary.push(Coin.fromJSON(e));
      }
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
    if (message.priceApiaryBeeHouse) {
      obj.priceApiaryBeeHouse = message.priceApiaryBeeHouse.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.priceApiaryBeeHouse = [];
    }
    if (message.priceApiaryApiary) {
      obj.priceApiaryApiary = message.priceApiaryApiary.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.priceApiaryApiary = [];
    }
    if (message.priceApiaryAlveary) {
      obj.priceApiaryAlveary = message.priceApiaryAlveary.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.priceApiaryAlveary = [];
    }
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
    message.priceApiaryBeeHouse = [];
    message.priceApiaryApiary = [];
    message.priceApiaryAlveary = [];
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
      object.priceApiaryBeeHouse !== undefined &&
      object.priceApiaryBeeHouse !== null
    ) {
      for (const e of object.priceApiaryBeeHouse) {
        message.priceApiaryBeeHouse.push(Coin.fromPartial(e));
      }
    }
    if (
      object.priceApiaryApiary !== undefined &&
      object.priceApiaryApiary !== null
    ) {
      for (const e of object.priceApiaryApiary) {
        message.priceApiaryApiary.push(Coin.fromPartial(e));
      }
    }
    if (
      object.priceApiaryAlveary !== undefined &&
      object.priceApiaryAlveary !== null
    ) {
      for (const e of object.priceApiaryAlveary) {
        message.priceApiaryAlveary.push(Coin.fromPartial(e));
      }
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
