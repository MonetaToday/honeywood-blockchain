/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Params } from "../bears/params";
import { BearNames } from "../bears/bear_names";
import { Bears } from "../bears/bears";
import { AddressBears } from "../bears/address_bears";
import { Fields } from "../bears/fields";
import { Trees } from "../bears/trees";

export const protobufPackage = "MonetaToday.honeywood.bears";

/** GenesisState defines the bears module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  bearNamesList: BearNames[];
  bearsList: Bears[];
  bearsCount: number;
  addressBearsList: AddressBears[];
  fieldsList: Fields[];
  fieldsCount: number;
  treesList: Trees[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  treesCount: number;
}

const baseGenesisState: object = {
  bearsCount: 0,
  fieldsCount: 0,
  treesCount: 0,
};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.bearNamesList) {
      BearNames.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.bearsList) {
      Bears.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.bearsCount !== 0) {
      writer.uint32(32).uint64(message.bearsCount);
    }
    for (const v of message.addressBearsList) {
      AddressBears.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.fieldsList) {
      Fields.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.fieldsCount !== 0) {
      writer.uint32(56).uint64(message.fieldsCount);
    }
    for (const v of message.treesList) {
      Trees.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.treesCount !== 0) {
      writer.uint32(72).uint64(message.treesCount);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.bearNamesList = [];
    message.bearsList = [];
    message.addressBearsList = [];
    message.fieldsList = [];
    message.treesList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.bearNamesList.push(BearNames.decode(reader, reader.uint32()));
          break;
        case 3:
          message.bearsList.push(Bears.decode(reader, reader.uint32()));
          break;
        case 4:
          message.bearsCount = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.addressBearsList.push(
            AddressBears.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.fieldsList.push(Fields.decode(reader, reader.uint32()));
          break;
        case 7:
          message.fieldsCount = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          message.treesList.push(Trees.decode(reader, reader.uint32()));
          break;
        case 9:
          message.treesCount = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.bearNamesList = [];
    message.bearsList = [];
    message.addressBearsList = [];
    message.fieldsList = [];
    message.treesList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.bearNamesList !== undefined && object.bearNamesList !== null) {
      for (const e of object.bearNamesList) {
        message.bearNamesList.push(BearNames.fromJSON(e));
      }
    }
    if (object.bearsList !== undefined && object.bearsList !== null) {
      for (const e of object.bearsList) {
        message.bearsList.push(Bears.fromJSON(e));
      }
    }
    if (object.bearsCount !== undefined && object.bearsCount !== null) {
      message.bearsCount = Number(object.bearsCount);
    } else {
      message.bearsCount = 0;
    }
    if (
      object.addressBearsList !== undefined &&
      object.addressBearsList !== null
    ) {
      for (const e of object.addressBearsList) {
        message.addressBearsList.push(AddressBears.fromJSON(e));
      }
    }
    if (object.fieldsList !== undefined && object.fieldsList !== null) {
      for (const e of object.fieldsList) {
        message.fieldsList.push(Fields.fromJSON(e));
      }
    }
    if (object.fieldsCount !== undefined && object.fieldsCount !== null) {
      message.fieldsCount = Number(object.fieldsCount);
    } else {
      message.fieldsCount = 0;
    }
    if (object.treesList !== undefined && object.treesList !== null) {
      for (const e of object.treesList) {
        message.treesList.push(Trees.fromJSON(e));
      }
    }
    if (object.treesCount !== undefined && object.treesCount !== null) {
      message.treesCount = Number(object.treesCount);
    } else {
      message.treesCount = 0;
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.bearNamesList) {
      obj.bearNamesList = message.bearNamesList.map((e) =>
        e ? BearNames.toJSON(e) : undefined
      );
    } else {
      obj.bearNamesList = [];
    }
    if (message.bearsList) {
      obj.bearsList = message.bearsList.map((e) =>
        e ? Bears.toJSON(e) : undefined
      );
    } else {
      obj.bearsList = [];
    }
    message.bearsCount !== undefined && (obj.bearsCount = message.bearsCount);
    if (message.addressBearsList) {
      obj.addressBearsList = message.addressBearsList.map((e) =>
        e ? AddressBears.toJSON(e) : undefined
      );
    } else {
      obj.addressBearsList = [];
    }
    if (message.fieldsList) {
      obj.fieldsList = message.fieldsList.map((e) =>
        e ? Fields.toJSON(e) : undefined
      );
    } else {
      obj.fieldsList = [];
    }
    message.fieldsCount !== undefined &&
      (obj.fieldsCount = message.fieldsCount);
    if (message.treesList) {
      obj.treesList = message.treesList.map((e) =>
        e ? Trees.toJSON(e) : undefined
      );
    } else {
      obj.treesList = [];
    }
    message.treesCount !== undefined && (obj.treesCount = message.treesCount);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.bearNamesList = [];
    message.bearsList = [];
    message.addressBearsList = [];
    message.fieldsList = [];
    message.treesList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.bearNamesList !== undefined && object.bearNamesList !== null) {
      for (const e of object.bearNamesList) {
        message.bearNamesList.push(BearNames.fromPartial(e));
      }
    }
    if (object.bearsList !== undefined && object.bearsList !== null) {
      for (const e of object.bearsList) {
        message.bearsList.push(Bears.fromPartial(e));
      }
    }
    if (object.bearsCount !== undefined && object.bearsCount !== null) {
      message.bearsCount = object.bearsCount;
    } else {
      message.bearsCount = 0;
    }
    if (
      object.addressBearsList !== undefined &&
      object.addressBearsList !== null
    ) {
      for (const e of object.addressBearsList) {
        message.addressBearsList.push(AddressBears.fromPartial(e));
      }
    }
    if (object.fieldsList !== undefined && object.fieldsList !== null) {
      for (const e of object.fieldsList) {
        message.fieldsList.push(Fields.fromPartial(e));
      }
    }
    if (object.fieldsCount !== undefined && object.fieldsCount !== null) {
      message.fieldsCount = object.fieldsCount;
    } else {
      message.fieldsCount = 0;
    }
    if (object.treesList !== undefined && object.treesList !== null) {
      for (const e of object.treesList) {
        message.treesList.push(Trees.fromPartial(e));
      }
    }
    if (object.treesCount !== undefined && object.treesCount !== null) {
      message.treesCount = object.treesCount;
    } else {
      message.treesCount = 0;
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
