/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";
import { BearOwner } from "../bears/bears";
import { ItemPosition } from "../bears/fields";

export const protobufPackage = "MonetaToday.honeywood.bears";

export interface TreeParams {
  treeType: string;
  price: Coin[];
  reward: Coin[];
  airSupply: string;
}

export interface Trees {
  id: number;
  params: TreeParams | undefined;
  bearOwner: BearOwner | undefined;
  position: ItemPosition | undefined;
}

const baseTreeParams: object = { treeType: "", airSupply: "" };

export const TreeParams = {
  encode(message: TreeParams, writer: Writer = Writer.create()): Writer {
    if (message.treeType !== "") {
      writer.uint32(10).string(message.treeType);
    }
    for (const v of message.price) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.reward) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.airSupply !== "") {
      writer.uint32(34).string(message.airSupply);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): TreeParams {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTreeParams } as TreeParams;
    message.price = [];
    message.reward = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.treeType = reader.string();
          break;
        case 2:
          message.price.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.reward.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.airSupply = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TreeParams {
    const message = { ...baseTreeParams } as TreeParams;
    message.price = [];
    message.reward = [];
    if (object.treeType !== undefined && object.treeType !== null) {
      message.treeType = String(object.treeType);
    } else {
      message.treeType = "";
    }
    if (object.price !== undefined && object.price !== null) {
      for (const e of object.price) {
        message.price.push(Coin.fromJSON(e));
      }
    }
    if (object.reward !== undefined && object.reward !== null) {
      for (const e of object.reward) {
        message.reward.push(Coin.fromJSON(e));
      }
    }
    if (object.airSupply !== undefined && object.airSupply !== null) {
      message.airSupply = String(object.airSupply);
    } else {
      message.airSupply = "";
    }
    return message;
  },

  toJSON(message: TreeParams): unknown {
    const obj: any = {};
    message.treeType !== undefined && (obj.treeType = message.treeType);
    if (message.price) {
      obj.price = message.price.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.price = [];
    }
    if (message.reward) {
      obj.reward = message.reward.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.reward = [];
    }
    message.airSupply !== undefined && (obj.airSupply = message.airSupply);
    return obj;
  },

  fromPartial(object: DeepPartial<TreeParams>): TreeParams {
    const message = { ...baseTreeParams } as TreeParams;
    message.price = [];
    message.reward = [];
    if (object.treeType !== undefined && object.treeType !== null) {
      message.treeType = object.treeType;
    } else {
      message.treeType = "";
    }
    if (object.price !== undefined && object.price !== null) {
      for (const e of object.price) {
        message.price.push(Coin.fromPartial(e));
      }
    }
    if (object.reward !== undefined && object.reward !== null) {
      for (const e of object.reward) {
        message.reward.push(Coin.fromPartial(e));
      }
    }
    if (object.airSupply !== undefined && object.airSupply !== null) {
      message.airSupply = object.airSupply;
    } else {
      message.airSupply = "";
    }
    return message;
  },
};

const baseTrees: object = { id: 0 };

export const Trees = {
  encode(message: Trees, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.params !== undefined) {
      TreeParams.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    if (message.bearOwner !== undefined) {
      BearOwner.encode(message.bearOwner, writer.uint32(26).fork()).ldelim();
    }
    if (message.position !== undefined) {
      ItemPosition.encode(message.position, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Trees {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTrees } as Trees;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.params = TreeParams.decode(reader, reader.uint32());
          break;
        case 3:
          message.bearOwner = BearOwner.decode(reader, reader.uint32());
          break;
        case 4:
          message.position = ItemPosition.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Trees {
    const message = { ...baseTrees } as Trees;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = TreeParams.fromJSON(object.params);
    } else {
      message.params = undefined;
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
    return message;
  },

  toJSON(message: Trees): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.params !== undefined &&
      (obj.params = message.params
        ? TreeParams.toJSON(message.params)
        : undefined);
    message.bearOwner !== undefined &&
      (obj.bearOwner = message.bearOwner
        ? BearOwner.toJSON(message.bearOwner)
        : undefined);
    message.position !== undefined &&
      (obj.position = message.position
        ? ItemPosition.toJSON(message.position)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Trees>): Trees {
    const message = { ...baseTrees } as Trees;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = TreeParams.fromPartial(object.params);
    } else {
      message.params = undefined;
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
