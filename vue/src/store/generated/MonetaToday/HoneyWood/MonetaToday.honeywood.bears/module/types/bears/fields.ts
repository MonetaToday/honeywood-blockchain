/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Tiles } from "../bears/tiles";
import { Coin } from "../cosmos/base/v1beta1/coin";
import { BearOwner } from "../bears/bears";

export const protobufPackage = "MonetaToday.honeywood.bears";

export interface FieldRows {
  columns: Tiles[];
}

export interface ItemPosition {
  fieldId: number;
  rowId: number;
  columnId: number;
}

export interface FieldParams {
  fieldType: string;
  fertility: string;
  priceTile: Coin[];
}

export interface Fields {
  id: number;
  bearOwner: BearOwner | undefined;
  params: FieldParams | undefined;
  rows: FieldRows[];
  countTiles: number;
}

const baseFieldRows: object = {};

export const FieldRows = {
  encode(message: FieldRows, writer: Writer = Writer.create()): Writer {
    for (const v of message.columns) {
      Tiles.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): FieldRows {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFieldRows } as FieldRows;
    message.columns = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.columns.push(Tiles.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FieldRows {
    const message = { ...baseFieldRows } as FieldRows;
    message.columns = [];
    if (object.columns !== undefined && object.columns !== null) {
      for (const e of object.columns) {
        message.columns.push(Tiles.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: FieldRows): unknown {
    const obj: any = {};
    if (message.columns) {
      obj.columns = message.columns.map((e) =>
        e ? Tiles.toJSON(e) : undefined
      );
    } else {
      obj.columns = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<FieldRows>): FieldRows {
    const message = { ...baseFieldRows } as FieldRows;
    message.columns = [];
    if (object.columns !== undefined && object.columns !== null) {
      for (const e of object.columns) {
        message.columns.push(Tiles.fromPartial(e));
      }
    }
    return message;
  },
};

const baseItemPosition: object = { fieldId: 0, rowId: 0, columnId: 0 };

export const ItemPosition = {
  encode(message: ItemPosition, writer: Writer = Writer.create()): Writer {
    if (message.fieldId !== 0) {
      writer.uint32(8).uint64(message.fieldId);
    }
    if (message.rowId !== 0) {
      writer.uint32(16).uint64(message.rowId);
    }
    if (message.columnId !== 0) {
      writer.uint32(24).uint64(message.columnId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ItemPosition {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseItemPosition } as ItemPosition;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fieldId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.rowId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.columnId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ItemPosition {
    const message = { ...baseItemPosition } as ItemPosition;
    if (object.fieldId !== undefined && object.fieldId !== null) {
      message.fieldId = Number(object.fieldId);
    } else {
      message.fieldId = 0;
    }
    if (object.rowId !== undefined && object.rowId !== null) {
      message.rowId = Number(object.rowId);
    } else {
      message.rowId = 0;
    }
    if (object.columnId !== undefined && object.columnId !== null) {
      message.columnId = Number(object.columnId);
    } else {
      message.columnId = 0;
    }
    return message;
  },

  toJSON(message: ItemPosition): unknown {
    const obj: any = {};
    message.fieldId !== undefined && (obj.fieldId = message.fieldId);
    message.rowId !== undefined && (obj.rowId = message.rowId);
    message.columnId !== undefined && (obj.columnId = message.columnId);
    return obj;
  },

  fromPartial(object: DeepPartial<ItemPosition>): ItemPosition {
    const message = { ...baseItemPosition } as ItemPosition;
    if (object.fieldId !== undefined && object.fieldId !== null) {
      message.fieldId = object.fieldId;
    } else {
      message.fieldId = 0;
    }
    if (object.rowId !== undefined && object.rowId !== null) {
      message.rowId = object.rowId;
    } else {
      message.rowId = 0;
    }
    if (object.columnId !== undefined && object.columnId !== null) {
      message.columnId = object.columnId;
    } else {
      message.columnId = 0;
    }
    return message;
  },
};

const baseFieldParams: object = { fieldType: "", fertility: "" };

export const FieldParams = {
  encode(message: FieldParams, writer: Writer = Writer.create()): Writer {
    if (message.fieldType !== "") {
      writer.uint32(10).string(message.fieldType);
    }
    if (message.fertility !== "") {
      writer.uint32(18).string(message.fertility);
    }
    for (const v of message.priceTile) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): FieldParams {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFieldParams } as FieldParams;
    message.priceTile = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fieldType = reader.string();
          break;
        case 2:
          message.fertility = reader.string();
          break;
        case 3:
          message.priceTile.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FieldParams {
    const message = { ...baseFieldParams } as FieldParams;
    message.priceTile = [];
    if (object.fieldType !== undefined && object.fieldType !== null) {
      message.fieldType = String(object.fieldType);
    } else {
      message.fieldType = "";
    }
    if (object.fertility !== undefined && object.fertility !== null) {
      message.fertility = String(object.fertility);
    } else {
      message.fertility = "";
    }
    if (object.priceTile !== undefined && object.priceTile !== null) {
      for (const e of object.priceTile) {
        message.priceTile.push(Coin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: FieldParams): unknown {
    const obj: any = {};
    message.fieldType !== undefined && (obj.fieldType = message.fieldType);
    message.fertility !== undefined && (obj.fertility = message.fertility);
    if (message.priceTile) {
      obj.priceTile = message.priceTile.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.priceTile = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<FieldParams>): FieldParams {
    const message = { ...baseFieldParams } as FieldParams;
    message.priceTile = [];
    if (object.fieldType !== undefined && object.fieldType !== null) {
      message.fieldType = object.fieldType;
    } else {
      message.fieldType = "";
    }
    if (object.fertility !== undefined && object.fertility !== null) {
      message.fertility = object.fertility;
    } else {
      message.fertility = "";
    }
    if (object.priceTile !== undefined && object.priceTile !== null) {
      for (const e of object.priceTile) {
        message.priceTile.push(Coin.fromPartial(e));
      }
    }
    return message;
  },
};

const baseFields: object = { id: 0, countTiles: 0 };

export const Fields = {
  encode(message: Fields, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.bearOwner !== undefined) {
      BearOwner.encode(message.bearOwner, writer.uint32(18).fork()).ldelim();
    }
    if (message.params !== undefined) {
      FieldParams.encode(message.params, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.rows) {
      FieldRows.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.countTiles !== 0) {
      writer.uint32(40).uint64(message.countTiles);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Fields {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFields } as Fields;
    message.rows = [];
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
          message.params = FieldParams.decode(reader, reader.uint32());
          break;
        case 4:
          message.rows.push(FieldRows.decode(reader, reader.uint32()));
          break;
        case 5:
          message.countTiles = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Fields {
    const message = { ...baseFields } as Fields;
    message.rows = [];
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
    if (object.params !== undefined && object.params !== null) {
      message.params = FieldParams.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.rows !== undefined && object.rows !== null) {
      for (const e of object.rows) {
        message.rows.push(FieldRows.fromJSON(e));
      }
    }
    if (object.countTiles !== undefined && object.countTiles !== null) {
      message.countTiles = Number(object.countTiles);
    } else {
      message.countTiles = 0;
    }
    return message;
  },

  toJSON(message: Fields): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.bearOwner !== undefined &&
      (obj.bearOwner = message.bearOwner
        ? BearOwner.toJSON(message.bearOwner)
        : undefined);
    message.params !== undefined &&
      (obj.params = message.params
        ? FieldParams.toJSON(message.params)
        : undefined);
    if (message.rows) {
      obj.rows = message.rows.map((e) => (e ? FieldRows.toJSON(e) : undefined));
    } else {
      obj.rows = [];
    }
    message.countTiles !== undefined && (obj.countTiles = message.countTiles);
    return obj;
  },

  fromPartial(object: DeepPartial<Fields>): Fields {
    const message = { ...baseFields } as Fields;
    message.rows = [];
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
    if (object.params !== undefined && object.params !== null) {
      message.params = FieldParams.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.rows !== undefined && object.rows !== null) {
      for (const e of object.rows) {
        message.rows.push(FieldRows.fromPartial(e));
      }
    }
    if (object.countTiles !== undefined && object.countTiles !== null) {
      message.countTiles = object.countTiles;
    } else {
      message.countTiles = 0;
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
