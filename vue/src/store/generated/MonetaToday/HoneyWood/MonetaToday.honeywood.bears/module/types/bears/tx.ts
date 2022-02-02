/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Trees } from "../bears/trees";
import { Decorations } from "../bears/decorations";
import { Apiaries } from "../bears/apiaries";

export const protobufPackage = "MonetaToday.honeywood.bears";

export interface MsgInitGameAndSetName {
  creator: string;
  name: string;
}

export interface MsgInitGameAndSetNameResponse {}

export interface MsgSetName {
  creator: string;
  bearId: number;
  name: string;
}

export interface MsgSetNameResponse {}

export interface MsgInitGameAndExtendField {
  creator: string;
}

export interface MsgInitGameAndExtendFieldResponse {
  countTiles: number;
}

export interface MsgExtendField {
  creator: string;
  id: number;
}

export interface MsgExtendFieldResponse {
  countTiles: number;
}

export interface MsgInitGameAndCreateTree {
  creator: string;
  treeType: string;
}

export interface MsgInitGameAndCreateTreeResponse {
  tree: Trees | undefined;
}

export interface MsgCreateTree {
  creator: string;
  bearId: number;
  fieldId: number;
  rowId: number;
  columnId: number;
  treeType: string;
}

export interface MsgCreateTreeResponse {
  tree: Trees | undefined;
}

export interface MsgMoveItemOnField {
  creator: string;
  fieldId: number;
  rowId: number;
  columnId: number;
  newRowId: number;
  newColumnId: number;
}

export interface MsgMoveItemOnFieldResponse {}

export interface MsgInitGameAndCreateDecoration {
  creator: string;
  decorationType: string;
}

export interface MsgInitGameAndCreateDecorationResponse {
  decoration: Decorations | undefined;
}

export interface MsgCreateDecoration {
  creator: string;
  bearId: number;
  decorationType: string;
}

export interface MsgCreateDecorationResponse {
  decoration: Decorations | undefined;
}

export interface MsgSetDecorationPosition {
  creator: string;
  decorationId: number;
  fieldId: number;
  rowId: number;
  columnId: number;
}

export interface MsgSetDecorationPositionResponse {}

export interface MsgUnsetDecorationPosition {
  creator: string;
  decorationId: number;
}

export interface MsgUnsetDecorationPositionResponse {}

export interface MsgInitGameAndCreateApiary {
  creator: string;
  apiaryType: string;
}

export interface MsgInitGameAndCreateApiaryResponse {
  apiary: Apiaries | undefined;
}

export interface MsgCreateApiary {
  creator: string;
  bearId: number;
  fieldId: number;
  rowId: number;
  columnId: number;
  apiaryType: string;
}

export interface MsgCreateApiaryResponse {
  apiary: Apiaries | undefined;
}

const baseMsgInitGameAndSetName: object = { creator: "", name: "" };

export const MsgInitGameAndSetName = {
  encode(
    message: MsgInitGameAndSetName,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgInitGameAndSetName {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgInitGameAndSetName } as MsgInitGameAndSetName;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgInitGameAndSetName {
    const message = { ...baseMsgInitGameAndSetName } as MsgInitGameAndSetName;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    return message;
  },

  toJSON(message: MsgInitGameAndSetName): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgInitGameAndSetName>
  ): MsgInitGameAndSetName {
    const message = { ...baseMsgInitGameAndSetName } as MsgInitGameAndSetName;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    return message;
  },
};

const baseMsgInitGameAndSetNameResponse: object = {};

export const MsgInitGameAndSetNameResponse = {
  encode(
    _: MsgInitGameAndSetNameResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgInitGameAndSetNameResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgInitGameAndSetNameResponse,
    } as MsgInitGameAndSetNameResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgInitGameAndSetNameResponse {
    const message = {
      ...baseMsgInitGameAndSetNameResponse,
    } as MsgInitGameAndSetNameResponse;
    return message;
  },

  toJSON(_: MsgInitGameAndSetNameResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgInitGameAndSetNameResponse>
  ): MsgInitGameAndSetNameResponse {
    const message = {
      ...baseMsgInitGameAndSetNameResponse,
    } as MsgInitGameAndSetNameResponse;
    return message;
  },
};

const baseMsgSetName: object = { creator: "", bearId: 0, name: "" };

export const MsgSetName = {
  encode(message: MsgSetName, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.bearId !== 0) {
      writer.uint32(16).uint64(message.bearId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSetName {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetName } as MsgSetName;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.bearId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetName {
    const message = { ...baseMsgSetName } as MsgSetName;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.bearId !== undefined && object.bearId !== null) {
      message.bearId = Number(object.bearId);
    } else {
      message.bearId = 0;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    return message;
  },

  toJSON(message: MsgSetName): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.bearId !== undefined && (obj.bearId = message.bearId);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSetName>): MsgSetName {
    const message = { ...baseMsgSetName } as MsgSetName;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.bearId !== undefined && object.bearId !== null) {
      message.bearId = object.bearId;
    } else {
      message.bearId = 0;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    return message;
  },
};

const baseMsgSetNameResponse: object = {};

export const MsgSetNameResponse = {
  encode(_: MsgSetNameResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSetNameResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetNameResponse } as MsgSetNameResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSetNameResponse {
    const message = { ...baseMsgSetNameResponse } as MsgSetNameResponse;
    return message;
  },

  toJSON(_: MsgSetNameResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgSetNameResponse>): MsgSetNameResponse {
    const message = { ...baseMsgSetNameResponse } as MsgSetNameResponse;
    return message;
  },
};

const baseMsgInitGameAndExtendField: object = { creator: "" };

export const MsgInitGameAndExtendField = {
  encode(
    message: MsgInitGameAndExtendField,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgInitGameAndExtendField {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgInitGameAndExtendField,
    } as MsgInitGameAndExtendField;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgInitGameAndExtendField {
    const message = {
      ...baseMsgInitGameAndExtendField,
    } as MsgInitGameAndExtendField;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: MsgInitGameAndExtendField): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgInitGameAndExtendField>
  ): MsgInitGameAndExtendField {
    const message = {
      ...baseMsgInitGameAndExtendField,
    } as MsgInitGameAndExtendField;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

const baseMsgInitGameAndExtendFieldResponse: object = { countTiles: 0 };

export const MsgInitGameAndExtendFieldResponse = {
  encode(
    message: MsgInitGameAndExtendFieldResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.countTiles !== 0) {
      writer.uint32(8).uint64(message.countTiles);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgInitGameAndExtendFieldResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgInitGameAndExtendFieldResponse,
    } as MsgInitGameAndExtendFieldResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.countTiles = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgInitGameAndExtendFieldResponse {
    const message = {
      ...baseMsgInitGameAndExtendFieldResponse,
    } as MsgInitGameAndExtendFieldResponse;
    if (object.countTiles !== undefined && object.countTiles !== null) {
      message.countTiles = Number(object.countTiles);
    } else {
      message.countTiles = 0;
    }
    return message;
  },

  toJSON(message: MsgInitGameAndExtendFieldResponse): unknown {
    const obj: any = {};
    message.countTiles !== undefined && (obj.countTiles = message.countTiles);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgInitGameAndExtendFieldResponse>
  ): MsgInitGameAndExtendFieldResponse {
    const message = {
      ...baseMsgInitGameAndExtendFieldResponse,
    } as MsgInitGameAndExtendFieldResponse;
    if (object.countTiles !== undefined && object.countTiles !== null) {
      message.countTiles = object.countTiles;
    } else {
      message.countTiles = 0;
    }
    return message;
  },
};

const baseMsgExtendField: object = { creator: "", id: 0 };

export const MsgExtendField = {
  encode(message: MsgExtendField, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgExtendField {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgExtendField } as MsgExtendField;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgExtendField {
    const message = { ...baseMsgExtendField } as MsgExtendField;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgExtendField): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgExtendField>): MsgExtendField {
    const message = { ...baseMsgExtendField } as MsgExtendField;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgExtendFieldResponse: object = { countTiles: 0 };

export const MsgExtendFieldResponse = {
  encode(
    message: MsgExtendFieldResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.countTiles !== 0) {
      writer.uint32(8).uint64(message.countTiles);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgExtendFieldResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgExtendFieldResponse } as MsgExtendFieldResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.countTiles = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgExtendFieldResponse {
    const message = { ...baseMsgExtendFieldResponse } as MsgExtendFieldResponse;
    if (object.countTiles !== undefined && object.countTiles !== null) {
      message.countTiles = Number(object.countTiles);
    } else {
      message.countTiles = 0;
    }
    return message;
  },

  toJSON(message: MsgExtendFieldResponse): unknown {
    const obj: any = {};
    message.countTiles !== undefined && (obj.countTiles = message.countTiles);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgExtendFieldResponse>
  ): MsgExtendFieldResponse {
    const message = { ...baseMsgExtendFieldResponse } as MsgExtendFieldResponse;
    if (object.countTiles !== undefined && object.countTiles !== null) {
      message.countTiles = object.countTiles;
    } else {
      message.countTiles = 0;
    }
    return message;
  },
};

const baseMsgInitGameAndCreateTree: object = { creator: "", treeType: "" };

export const MsgInitGameAndCreateTree = {
  encode(
    message: MsgInitGameAndCreateTree,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.treeType !== "") {
      writer.uint32(18).string(message.treeType);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgInitGameAndCreateTree {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgInitGameAndCreateTree,
    } as MsgInitGameAndCreateTree;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.treeType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgInitGameAndCreateTree {
    const message = {
      ...baseMsgInitGameAndCreateTree,
    } as MsgInitGameAndCreateTree;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.treeType !== undefined && object.treeType !== null) {
      message.treeType = String(object.treeType);
    } else {
      message.treeType = "";
    }
    return message;
  },

  toJSON(message: MsgInitGameAndCreateTree): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.treeType !== undefined && (obj.treeType = message.treeType);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgInitGameAndCreateTree>
  ): MsgInitGameAndCreateTree {
    const message = {
      ...baseMsgInitGameAndCreateTree,
    } as MsgInitGameAndCreateTree;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.treeType !== undefined && object.treeType !== null) {
      message.treeType = object.treeType;
    } else {
      message.treeType = "";
    }
    return message;
  },
};

const baseMsgInitGameAndCreateTreeResponse: object = {};

export const MsgInitGameAndCreateTreeResponse = {
  encode(
    message: MsgInitGameAndCreateTreeResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.tree !== undefined) {
      Trees.encode(message.tree, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgInitGameAndCreateTreeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgInitGameAndCreateTreeResponse,
    } as MsgInitGameAndCreateTreeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tree = Trees.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgInitGameAndCreateTreeResponse {
    const message = {
      ...baseMsgInitGameAndCreateTreeResponse,
    } as MsgInitGameAndCreateTreeResponse;
    if (object.tree !== undefined && object.tree !== null) {
      message.tree = Trees.fromJSON(object.tree);
    } else {
      message.tree = undefined;
    }
    return message;
  },

  toJSON(message: MsgInitGameAndCreateTreeResponse): unknown {
    const obj: any = {};
    message.tree !== undefined &&
      (obj.tree = message.tree ? Trees.toJSON(message.tree) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgInitGameAndCreateTreeResponse>
  ): MsgInitGameAndCreateTreeResponse {
    const message = {
      ...baseMsgInitGameAndCreateTreeResponse,
    } as MsgInitGameAndCreateTreeResponse;
    if (object.tree !== undefined && object.tree !== null) {
      message.tree = Trees.fromPartial(object.tree);
    } else {
      message.tree = undefined;
    }
    return message;
  },
};

const baseMsgCreateTree: object = {
  creator: "",
  bearId: 0,
  fieldId: 0,
  rowId: 0,
  columnId: 0,
  treeType: "",
};

export const MsgCreateTree = {
  encode(message: MsgCreateTree, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.bearId !== 0) {
      writer.uint32(16).uint64(message.bearId);
    }
    if (message.fieldId !== 0) {
      writer.uint32(24).uint64(message.fieldId);
    }
    if (message.rowId !== 0) {
      writer.uint32(32).uint64(message.rowId);
    }
    if (message.columnId !== 0) {
      writer.uint32(40).uint64(message.columnId);
    }
    if (message.treeType !== "") {
      writer.uint32(50).string(message.treeType);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateTree {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateTree } as MsgCreateTree;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.bearId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.fieldId = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.rowId = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.columnId = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.treeType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateTree {
    const message = { ...baseMsgCreateTree } as MsgCreateTree;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.bearId !== undefined && object.bearId !== null) {
      message.bearId = Number(object.bearId);
    } else {
      message.bearId = 0;
    }
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
    if (object.treeType !== undefined && object.treeType !== null) {
      message.treeType = String(object.treeType);
    } else {
      message.treeType = "";
    }
    return message;
  },

  toJSON(message: MsgCreateTree): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.bearId !== undefined && (obj.bearId = message.bearId);
    message.fieldId !== undefined && (obj.fieldId = message.fieldId);
    message.rowId !== undefined && (obj.rowId = message.rowId);
    message.columnId !== undefined && (obj.columnId = message.columnId);
    message.treeType !== undefined && (obj.treeType = message.treeType);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateTree>): MsgCreateTree {
    const message = { ...baseMsgCreateTree } as MsgCreateTree;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.bearId !== undefined && object.bearId !== null) {
      message.bearId = object.bearId;
    } else {
      message.bearId = 0;
    }
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
    if (object.treeType !== undefined && object.treeType !== null) {
      message.treeType = object.treeType;
    } else {
      message.treeType = "";
    }
    return message;
  },
};

const baseMsgCreateTreeResponse: object = {};

export const MsgCreateTreeResponse = {
  encode(
    message: MsgCreateTreeResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.tree !== undefined) {
      Trees.encode(message.tree, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateTreeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateTreeResponse } as MsgCreateTreeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tree = Trees.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateTreeResponse {
    const message = { ...baseMsgCreateTreeResponse } as MsgCreateTreeResponse;
    if (object.tree !== undefined && object.tree !== null) {
      message.tree = Trees.fromJSON(object.tree);
    } else {
      message.tree = undefined;
    }
    return message;
  },

  toJSON(message: MsgCreateTreeResponse): unknown {
    const obj: any = {};
    message.tree !== undefined &&
      (obj.tree = message.tree ? Trees.toJSON(message.tree) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateTreeResponse>
  ): MsgCreateTreeResponse {
    const message = { ...baseMsgCreateTreeResponse } as MsgCreateTreeResponse;
    if (object.tree !== undefined && object.tree !== null) {
      message.tree = Trees.fromPartial(object.tree);
    } else {
      message.tree = undefined;
    }
    return message;
  },
};

const baseMsgMoveItemOnField: object = {
  creator: "",
  fieldId: 0,
  rowId: 0,
  columnId: 0,
  newRowId: 0,
  newColumnId: 0,
};

export const MsgMoveItemOnField = {
  encode(
    message: MsgMoveItemOnField,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.fieldId !== 0) {
      writer.uint32(16).uint64(message.fieldId);
    }
    if (message.rowId !== 0) {
      writer.uint32(24).uint64(message.rowId);
    }
    if (message.columnId !== 0) {
      writer.uint32(32).uint64(message.columnId);
    }
    if (message.newRowId !== 0) {
      writer.uint32(40).uint64(message.newRowId);
    }
    if (message.newColumnId !== 0) {
      writer.uint32(48).uint64(message.newColumnId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMoveItemOnField {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMoveItemOnField } as MsgMoveItemOnField;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.fieldId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.rowId = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.columnId = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.newRowId = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.newColumnId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMoveItemOnField {
    const message = { ...baseMsgMoveItemOnField } as MsgMoveItemOnField;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
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
    if (object.newRowId !== undefined && object.newRowId !== null) {
      message.newRowId = Number(object.newRowId);
    } else {
      message.newRowId = 0;
    }
    if (object.newColumnId !== undefined && object.newColumnId !== null) {
      message.newColumnId = Number(object.newColumnId);
    } else {
      message.newColumnId = 0;
    }
    return message;
  },

  toJSON(message: MsgMoveItemOnField): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.fieldId !== undefined && (obj.fieldId = message.fieldId);
    message.rowId !== undefined && (obj.rowId = message.rowId);
    message.columnId !== undefined && (obj.columnId = message.columnId);
    message.newRowId !== undefined && (obj.newRowId = message.newRowId);
    message.newColumnId !== undefined &&
      (obj.newColumnId = message.newColumnId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgMoveItemOnField>): MsgMoveItemOnField {
    const message = { ...baseMsgMoveItemOnField } as MsgMoveItemOnField;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
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
    if (object.newRowId !== undefined && object.newRowId !== null) {
      message.newRowId = object.newRowId;
    } else {
      message.newRowId = 0;
    }
    if (object.newColumnId !== undefined && object.newColumnId !== null) {
      message.newColumnId = object.newColumnId;
    } else {
      message.newColumnId = 0;
    }
    return message;
  },
};

const baseMsgMoveItemOnFieldResponse: object = {};

export const MsgMoveItemOnFieldResponse = {
  encode(
    _: MsgMoveItemOnFieldResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgMoveItemOnFieldResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgMoveItemOnFieldResponse,
    } as MsgMoveItemOnFieldResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgMoveItemOnFieldResponse {
    const message = {
      ...baseMsgMoveItemOnFieldResponse,
    } as MsgMoveItemOnFieldResponse;
    return message;
  },

  toJSON(_: MsgMoveItemOnFieldResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgMoveItemOnFieldResponse>
  ): MsgMoveItemOnFieldResponse {
    const message = {
      ...baseMsgMoveItemOnFieldResponse,
    } as MsgMoveItemOnFieldResponse;
    return message;
  },
};

const baseMsgInitGameAndCreateDecoration: object = {
  creator: "",
  decorationType: "",
};

export const MsgInitGameAndCreateDecoration = {
  encode(
    message: MsgInitGameAndCreateDecoration,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.decorationType !== "") {
      writer.uint32(18).string(message.decorationType);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgInitGameAndCreateDecoration {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgInitGameAndCreateDecoration,
    } as MsgInitGameAndCreateDecoration;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.decorationType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgInitGameAndCreateDecoration {
    const message = {
      ...baseMsgInitGameAndCreateDecoration,
    } as MsgInitGameAndCreateDecoration;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.decorationType !== undefined && object.decorationType !== null) {
      message.decorationType = String(object.decorationType);
    } else {
      message.decorationType = "";
    }
    return message;
  },

  toJSON(message: MsgInitGameAndCreateDecoration): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.decorationType !== undefined &&
      (obj.decorationType = message.decorationType);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgInitGameAndCreateDecoration>
  ): MsgInitGameAndCreateDecoration {
    const message = {
      ...baseMsgInitGameAndCreateDecoration,
    } as MsgInitGameAndCreateDecoration;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.decorationType !== undefined && object.decorationType !== null) {
      message.decorationType = object.decorationType;
    } else {
      message.decorationType = "";
    }
    return message;
  },
};

const baseMsgInitGameAndCreateDecorationResponse: object = {};

export const MsgInitGameAndCreateDecorationResponse = {
  encode(
    message: MsgInitGameAndCreateDecorationResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.decoration !== undefined) {
      Decorations.encode(message.decoration, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgInitGameAndCreateDecorationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgInitGameAndCreateDecorationResponse,
    } as MsgInitGameAndCreateDecorationResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.decoration = Decorations.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgInitGameAndCreateDecorationResponse {
    const message = {
      ...baseMsgInitGameAndCreateDecorationResponse,
    } as MsgInitGameAndCreateDecorationResponse;
    if (object.decoration !== undefined && object.decoration !== null) {
      message.decoration = Decorations.fromJSON(object.decoration);
    } else {
      message.decoration = undefined;
    }
    return message;
  },

  toJSON(message: MsgInitGameAndCreateDecorationResponse): unknown {
    const obj: any = {};
    message.decoration !== undefined &&
      (obj.decoration = message.decoration
        ? Decorations.toJSON(message.decoration)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgInitGameAndCreateDecorationResponse>
  ): MsgInitGameAndCreateDecorationResponse {
    const message = {
      ...baseMsgInitGameAndCreateDecorationResponse,
    } as MsgInitGameAndCreateDecorationResponse;
    if (object.decoration !== undefined && object.decoration !== null) {
      message.decoration = Decorations.fromPartial(object.decoration);
    } else {
      message.decoration = undefined;
    }
    return message;
  },
};

const baseMsgCreateDecoration: object = {
  creator: "",
  bearId: 0,
  decorationType: "",
};

export const MsgCreateDecoration = {
  encode(
    message: MsgCreateDecoration,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.bearId !== 0) {
      writer.uint32(16).uint64(message.bearId);
    }
    if (message.decorationType !== "") {
      writer.uint32(26).string(message.decorationType);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateDecoration {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateDecoration } as MsgCreateDecoration;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.bearId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.decorationType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateDecoration {
    const message = { ...baseMsgCreateDecoration } as MsgCreateDecoration;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.bearId !== undefined && object.bearId !== null) {
      message.bearId = Number(object.bearId);
    } else {
      message.bearId = 0;
    }
    if (object.decorationType !== undefined && object.decorationType !== null) {
      message.decorationType = String(object.decorationType);
    } else {
      message.decorationType = "";
    }
    return message;
  },

  toJSON(message: MsgCreateDecoration): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.bearId !== undefined && (obj.bearId = message.bearId);
    message.decorationType !== undefined &&
      (obj.decorationType = message.decorationType);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateDecoration>): MsgCreateDecoration {
    const message = { ...baseMsgCreateDecoration } as MsgCreateDecoration;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.bearId !== undefined && object.bearId !== null) {
      message.bearId = object.bearId;
    } else {
      message.bearId = 0;
    }
    if (object.decorationType !== undefined && object.decorationType !== null) {
      message.decorationType = object.decorationType;
    } else {
      message.decorationType = "";
    }
    return message;
  },
};

const baseMsgCreateDecorationResponse: object = {};

export const MsgCreateDecorationResponse = {
  encode(
    message: MsgCreateDecorationResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.decoration !== undefined) {
      Decorations.encode(message.decoration, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateDecorationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateDecorationResponse,
    } as MsgCreateDecorationResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.decoration = Decorations.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateDecorationResponse {
    const message = {
      ...baseMsgCreateDecorationResponse,
    } as MsgCreateDecorationResponse;
    if (object.decoration !== undefined && object.decoration !== null) {
      message.decoration = Decorations.fromJSON(object.decoration);
    } else {
      message.decoration = undefined;
    }
    return message;
  },

  toJSON(message: MsgCreateDecorationResponse): unknown {
    const obj: any = {};
    message.decoration !== undefined &&
      (obj.decoration = message.decoration
        ? Decorations.toJSON(message.decoration)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateDecorationResponse>
  ): MsgCreateDecorationResponse {
    const message = {
      ...baseMsgCreateDecorationResponse,
    } as MsgCreateDecorationResponse;
    if (object.decoration !== undefined && object.decoration !== null) {
      message.decoration = Decorations.fromPartial(object.decoration);
    } else {
      message.decoration = undefined;
    }
    return message;
  },
};

const baseMsgSetDecorationPosition: object = {
  creator: "",
  decorationId: 0,
  fieldId: 0,
  rowId: 0,
  columnId: 0,
};

export const MsgSetDecorationPosition = {
  encode(
    message: MsgSetDecorationPosition,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.decorationId !== 0) {
      writer.uint32(16).uint64(message.decorationId);
    }
    if (message.fieldId !== 0) {
      writer.uint32(24).uint64(message.fieldId);
    }
    if (message.rowId !== 0) {
      writer.uint32(32).uint64(message.rowId);
    }
    if (message.columnId !== 0) {
      writer.uint32(40).uint64(message.columnId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSetDecorationPosition {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetDecorationPosition,
    } as MsgSetDecorationPosition;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.decorationId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.fieldId = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.rowId = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.columnId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetDecorationPosition {
    const message = {
      ...baseMsgSetDecorationPosition,
    } as MsgSetDecorationPosition;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.decorationId !== undefined && object.decorationId !== null) {
      message.decorationId = Number(object.decorationId);
    } else {
      message.decorationId = 0;
    }
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

  toJSON(message: MsgSetDecorationPosition): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.decorationId !== undefined &&
      (obj.decorationId = message.decorationId);
    message.fieldId !== undefined && (obj.fieldId = message.fieldId);
    message.rowId !== undefined && (obj.rowId = message.rowId);
    message.columnId !== undefined && (obj.columnId = message.columnId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSetDecorationPosition>
  ): MsgSetDecorationPosition {
    const message = {
      ...baseMsgSetDecorationPosition,
    } as MsgSetDecorationPosition;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.decorationId !== undefined && object.decorationId !== null) {
      message.decorationId = object.decorationId;
    } else {
      message.decorationId = 0;
    }
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

const baseMsgSetDecorationPositionResponse: object = {};

export const MsgSetDecorationPositionResponse = {
  encode(
    _: MsgSetDecorationPositionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSetDecorationPositionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetDecorationPositionResponse,
    } as MsgSetDecorationPositionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSetDecorationPositionResponse {
    const message = {
      ...baseMsgSetDecorationPositionResponse,
    } as MsgSetDecorationPositionResponse;
    return message;
  },

  toJSON(_: MsgSetDecorationPositionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSetDecorationPositionResponse>
  ): MsgSetDecorationPositionResponse {
    const message = {
      ...baseMsgSetDecorationPositionResponse,
    } as MsgSetDecorationPositionResponse;
    return message;
  },
};

const baseMsgUnsetDecorationPosition: object = { creator: "", decorationId: 0 };

export const MsgUnsetDecorationPosition = {
  encode(
    message: MsgUnsetDecorationPosition,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.decorationId !== 0) {
      writer.uint32(16).uint64(message.decorationId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUnsetDecorationPosition {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUnsetDecorationPosition,
    } as MsgUnsetDecorationPosition;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.decorationId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUnsetDecorationPosition {
    const message = {
      ...baseMsgUnsetDecorationPosition,
    } as MsgUnsetDecorationPosition;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.decorationId !== undefined && object.decorationId !== null) {
      message.decorationId = Number(object.decorationId);
    } else {
      message.decorationId = 0;
    }
    return message;
  },

  toJSON(message: MsgUnsetDecorationPosition): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.decorationId !== undefined &&
      (obj.decorationId = message.decorationId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUnsetDecorationPosition>
  ): MsgUnsetDecorationPosition {
    const message = {
      ...baseMsgUnsetDecorationPosition,
    } as MsgUnsetDecorationPosition;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.decorationId !== undefined && object.decorationId !== null) {
      message.decorationId = object.decorationId;
    } else {
      message.decorationId = 0;
    }
    return message;
  },
};

const baseMsgUnsetDecorationPositionResponse: object = {};

export const MsgUnsetDecorationPositionResponse = {
  encode(
    _: MsgUnsetDecorationPositionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUnsetDecorationPositionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUnsetDecorationPositionResponse,
    } as MsgUnsetDecorationPositionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUnsetDecorationPositionResponse {
    const message = {
      ...baseMsgUnsetDecorationPositionResponse,
    } as MsgUnsetDecorationPositionResponse;
    return message;
  },

  toJSON(_: MsgUnsetDecorationPositionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUnsetDecorationPositionResponse>
  ): MsgUnsetDecorationPositionResponse {
    const message = {
      ...baseMsgUnsetDecorationPositionResponse,
    } as MsgUnsetDecorationPositionResponse;
    return message;
  },
};

const baseMsgInitGameAndCreateApiary: object = { creator: "", apiaryType: "" };

export const MsgInitGameAndCreateApiary = {
  encode(
    message: MsgInitGameAndCreateApiary,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.apiaryType !== "") {
      writer.uint32(18).string(message.apiaryType);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgInitGameAndCreateApiary {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgInitGameAndCreateApiary,
    } as MsgInitGameAndCreateApiary;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.apiaryType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgInitGameAndCreateApiary {
    const message = {
      ...baseMsgInitGameAndCreateApiary,
    } as MsgInitGameAndCreateApiary;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.apiaryType !== undefined && object.apiaryType !== null) {
      message.apiaryType = String(object.apiaryType);
    } else {
      message.apiaryType = "";
    }
    return message;
  },

  toJSON(message: MsgInitGameAndCreateApiary): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.apiaryType !== undefined && (obj.apiaryType = message.apiaryType);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgInitGameAndCreateApiary>
  ): MsgInitGameAndCreateApiary {
    const message = {
      ...baseMsgInitGameAndCreateApiary,
    } as MsgInitGameAndCreateApiary;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.apiaryType !== undefined && object.apiaryType !== null) {
      message.apiaryType = object.apiaryType;
    } else {
      message.apiaryType = "";
    }
    return message;
  },
};

const baseMsgInitGameAndCreateApiaryResponse: object = {};

export const MsgInitGameAndCreateApiaryResponse = {
  encode(
    message: MsgInitGameAndCreateApiaryResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.apiary !== undefined) {
      Apiaries.encode(message.apiary, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgInitGameAndCreateApiaryResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgInitGameAndCreateApiaryResponse,
    } as MsgInitGameAndCreateApiaryResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.apiary = Apiaries.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgInitGameAndCreateApiaryResponse {
    const message = {
      ...baseMsgInitGameAndCreateApiaryResponse,
    } as MsgInitGameAndCreateApiaryResponse;
    if (object.apiary !== undefined && object.apiary !== null) {
      message.apiary = Apiaries.fromJSON(object.apiary);
    } else {
      message.apiary = undefined;
    }
    return message;
  },

  toJSON(message: MsgInitGameAndCreateApiaryResponse): unknown {
    const obj: any = {};
    message.apiary !== undefined &&
      (obj.apiary = message.apiary
        ? Apiaries.toJSON(message.apiary)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgInitGameAndCreateApiaryResponse>
  ): MsgInitGameAndCreateApiaryResponse {
    const message = {
      ...baseMsgInitGameAndCreateApiaryResponse,
    } as MsgInitGameAndCreateApiaryResponse;
    if (object.apiary !== undefined && object.apiary !== null) {
      message.apiary = Apiaries.fromPartial(object.apiary);
    } else {
      message.apiary = undefined;
    }
    return message;
  },
};

const baseMsgCreateApiary: object = {
  creator: "",
  bearId: 0,
  fieldId: 0,
  rowId: 0,
  columnId: 0,
  apiaryType: "",
};

export const MsgCreateApiary = {
  encode(message: MsgCreateApiary, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.bearId !== 0) {
      writer.uint32(16).uint64(message.bearId);
    }
    if (message.fieldId !== 0) {
      writer.uint32(24).uint64(message.fieldId);
    }
    if (message.rowId !== 0) {
      writer.uint32(32).uint64(message.rowId);
    }
    if (message.columnId !== 0) {
      writer.uint32(40).uint64(message.columnId);
    }
    if (message.apiaryType !== "") {
      writer.uint32(50).string(message.apiaryType);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateApiary {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateApiary } as MsgCreateApiary;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.bearId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.fieldId = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.rowId = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.columnId = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.apiaryType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateApiary {
    const message = { ...baseMsgCreateApiary } as MsgCreateApiary;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.bearId !== undefined && object.bearId !== null) {
      message.bearId = Number(object.bearId);
    } else {
      message.bearId = 0;
    }
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
    if (object.apiaryType !== undefined && object.apiaryType !== null) {
      message.apiaryType = String(object.apiaryType);
    } else {
      message.apiaryType = "";
    }
    return message;
  },

  toJSON(message: MsgCreateApiary): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.bearId !== undefined && (obj.bearId = message.bearId);
    message.fieldId !== undefined && (obj.fieldId = message.fieldId);
    message.rowId !== undefined && (obj.rowId = message.rowId);
    message.columnId !== undefined && (obj.columnId = message.columnId);
    message.apiaryType !== undefined && (obj.apiaryType = message.apiaryType);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateApiary>): MsgCreateApiary {
    const message = { ...baseMsgCreateApiary } as MsgCreateApiary;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.bearId !== undefined && object.bearId !== null) {
      message.bearId = object.bearId;
    } else {
      message.bearId = 0;
    }
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
    if (object.apiaryType !== undefined && object.apiaryType !== null) {
      message.apiaryType = object.apiaryType;
    } else {
      message.apiaryType = "";
    }
    return message;
  },
};

const baseMsgCreateApiaryResponse: object = {};

export const MsgCreateApiaryResponse = {
  encode(
    message: MsgCreateApiaryResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.apiary !== undefined) {
      Apiaries.encode(message.apiary, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateApiaryResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateApiaryResponse,
    } as MsgCreateApiaryResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.apiary = Apiaries.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateApiaryResponse {
    const message = {
      ...baseMsgCreateApiaryResponse,
    } as MsgCreateApiaryResponse;
    if (object.apiary !== undefined && object.apiary !== null) {
      message.apiary = Apiaries.fromJSON(object.apiary);
    } else {
      message.apiary = undefined;
    }
    return message;
  },

  toJSON(message: MsgCreateApiaryResponse): unknown {
    const obj: any = {};
    message.apiary !== undefined &&
      (obj.apiary = message.apiary
        ? Apiaries.toJSON(message.apiary)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateApiaryResponse>
  ): MsgCreateApiaryResponse {
    const message = {
      ...baseMsgCreateApiaryResponse,
    } as MsgCreateApiaryResponse;
    if (object.apiary !== undefined && object.apiary !== null) {
      message.apiary = Apiaries.fromPartial(object.apiary);
    } else {
      message.apiary = undefined;
    }
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  InitGameAndSetName(
    request: MsgInitGameAndSetName
  ): Promise<MsgInitGameAndSetNameResponse>;
  SetName(request: MsgSetName): Promise<MsgSetNameResponse>;
  InitGameAndExtendField(
    request: MsgInitGameAndExtendField
  ): Promise<MsgInitGameAndExtendFieldResponse>;
  ExtendField(request: MsgExtendField): Promise<MsgExtendFieldResponse>;
  InitGameAndCreateTree(
    request: MsgInitGameAndCreateTree
  ): Promise<MsgInitGameAndCreateTreeResponse>;
  CreateTree(request: MsgCreateTree): Promise<MsgCreateTreeResponse>;
  MoveItemOnField(
    request: MsgMoveItemOnField
  ): Promise<MsgMoveItemOnFieldResponse>;
  InitGameAndCreateDecoration(
    request: MsgInitGameAndCreateDecoration
  ): Promise<MsgInitGameAndCreateDecorationResponse>;
  CreateDecoration(
    request: MsgCreateDecoration
  ): Promise<MsgCreateDecorationResponse>;
  SetDecorationPosition(
    request: MsgSetDecorationPosition
  ): Promise<MsgSetDecorationPositionResponse>;
  UnsetDecorationPosition(
    request: MsgUnsetDecorationPosition
  ): Promise<MsgUnsetDecorationPositionResponse>;
  InitGameAndCreateApiary(
    request: MsgInitGameAndCreateApiary
  ): Promise<MsgInitGameAndCreateApiaryResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateApiary(request: MsgCreateApiary): Promise<MsgCreateApiaryResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  InitGameAndSetName(
    request: MsgInitGameAndSetName
  ): Promise<MsgInitGameAndSetNameResponse> {
    const data = MsgInitGameAndSetName.encode(request).finish();
    const promise = this.rpc.request(
      "MonetaToday.honeywood.bears.Msg",
      "InitGameAndSetName",
      data
    );
    return promise.then((data) =>
      MsgInitGameAndSetNameResponse.decode(new Reader(data))
    );
  }

  SetName(request: MsgSetName): Promise<MsgSetNameResponse> {
    const data = MsgSetName.encode(request).finish();
    const promise = this.rpc.request(
      "MonetaToday.honeywood.bears.Msg",
      "SetName",
      data
    );
    return promise.then((data) => MsgSetNameResponse.decode(new Reader(data)));
  }

  InitGameAndExtendField(
    request: MsgInitGameAndExtendField
  ): Promise<MsgInitGameAndExtendFieldResponse> {
    const data = MsgInitGameAndExtendField.encode(request).finish();
    const promise = this.rpc.request(
      "MonetaToday.honeywood.bears.Msg",
      "InitGameAndExtendField",
      data
    );
    return promise.then((data) =>
      MsgInitGameAndExtendFieldResponse.decode(new Reader(data))
    );
  }

  ExtendField(request: MsgExtendField): Promise<MsgExtendFieldResponse> {
    const data = MsgExtendField.encode(request).finish();
    const promise = this.rpc.request(
      "MonetaToday.honeywood.bears.Msg",
      "ExtendField",
      data
    );
    return promise.then((data) =>
      MsgExtendFieldResponse.decode(new Reader(data))
    );
  }

  InitGameAndCreateTree(
    request: MsgInitGameAndCreateTree
  ): Promise<MsgInitGameAndCreateTreeResponse> {
    const data = MsgInitGameAndCreateTree.encode(request).finish();
    const promise = this.rpc.request(
      "MonetaToday.honeywood.bears.Msg",
      "InitGameAndCreateTree",
      data
    );
    return promise.then((data) =>
      MsgInitGameAndCreateTreeResponse.decode(new Reader(data))
    );
  }

  CreateTree(request: MsgCreateTree): Promise<MsgCreateTreeResponse> {
    const data = MsgCreateTree.encode(request).finish();
    const promise = this.rpc.request(
      "MonetaToday.honeywood.bears.Msg",
      "CreateTree",
      data
    );
    return promise.then((data) =>
      MsgCreateTreeResponse.decode(new Reader(data))
    );
  }

  MoveItemOnField(
    request: MsgMoveItemOnField
  ): Promise<MsgMoveItemOnFieldResponse> {
    const data = MsgMoveItemOnField.encode(request).finish();
    const promise = this.rpc.request(
      "MonetaToday.honeywood.bears.Msg",
      "MoveItemOnField",
      data
    );
    return promise.then((data) =>
      MsgMoveItemOnFieldResponse.decode(new Reader(data))
    );
  }

  InitGameAndCreateDecoration(
    request: MsgInitGameAndCreateDecoration
  ): Promise<MsgInitGameAndCreateDecorationResponse> {
    const data = MsgInitGameAndCreateDecoration.encode(request).finish();
    const promise = this.rpc.request(
      "MonetaToday.honeywood.bears.Msg",
      "InitGameAndCreateDecoration",
      data
    );
    return promise.then((data) =>
      MsgInitGameAndCreateDecorationResponse.decode(new Reader(data))
    );
  }

  CreateDecoration(
    request: MsgCreateDecoration
  ): Promise<MsgCreateDecorationResponse> {
    const data = MsgCreateDecoration.encode(request).finish();
    const promise = this.rpc.request(
      "MonetaToday.honeywood.bears.Msg",
      "CreateDecoration",
      data
    );
    return promise.then((data) =>
      MsgCreateDecorationResponse.decode(new Reader(data))
    );
  }

  SetDecorationPosition(
    request: MsgSetDecorationPosition
  ): Promise<MsgSetDecorationPositionResponse> {
    const data = MsgSetDecorationPosition.encode(request).finish();
    const promise = this.rpc.request(
      "MonetaToday.honeywood.bears.Msg",
      "SetDecorationPosition",
      data
    );
    return promise.then((data) =>
      MsgSetDecorationPositionResponse.decode(new Reader(data))
    );
  }

  UnsetDecorationPosition(
    request: MsgUnsetDecorationPosition
  ): Promise<MsgUnsetDecorationPositionResponse> {
    const data = MsgUnsetDecorationPosition.encode(request).finish();
    const promise = this.rpc.request(
      "MonetaToday.honeywood.bears.Msg",
      "UnsetDecorationPosition",
      data
    );
    return promise.then((data) =>
      MsgUnsetDecorationPositionResponse.decode(new Reader(data))
    );
  }

  InitGameAndCreateApiary(
    request: MsgInitGameAndCreateApiary
  ): Promise<MsgInitGameAndCreateApiaryResponse> {
    const data = MsgInitGameAndCreateApiary.encode(request).finish();
    const promise = this.rpc.request(
      "MonetaToday.honeywood.bears.Msg",
      "InitGameAndCreateApiary",
      data
    );
    return promise.then((data) =>
      MsgInitGameAndCreateApiaryResponse.decode(new Reader(data))
    );
  }

  CreateApiary(request: MsgCreateApiary): Promise<MsgCreateApiaryResponse> {
    const data = MsgCreateApiary.encode(request).finish();
    const promise = this.rpc.request(
      "MonetaToday.honeywood.bears.Msg",
      "CreateApiary",
      data
    );
    return promise.then((data) =>
      MsgCreateApiaryResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
