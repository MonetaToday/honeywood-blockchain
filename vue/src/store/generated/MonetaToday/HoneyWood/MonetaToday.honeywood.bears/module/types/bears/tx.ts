/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Trees } from "../bears/trees";

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

export interface MsgInitGameAndExtendPlace {
  creator: string;
}

export interface MsgInitGameAndExtendPlaceResponse {
  countGrounds: number;
}

export interface MsgExtendPlace {
  creator: string;
  id: number;
}

export interface MsgExtendPlaceResponse {
  countGrounds: number;
}

export interface MsgInitGameAndCreateTree {
  creator: string;
}

export interface MsgInitGameAndCreateTreeResponse {
  tree: Trees | undefined;
}

export interface MsgCreateTree {
  creator: string;
  bearId: number;
  placeId: number;
  groundId: number;
}

export interface MsgCreateTreeResponse {
  tree: Trees | undefined;
}

export interface MsgMoveItemOnPlace {
  creator: string;
  placeId: number;
  groundId: number;
  newGroundId: number;
}

export interface MsgMoveItemOnPlaceResponse {}

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

const baseMsgInitGameAndExtendPlace: object = { creator: "" };

export const MsgInitGameAndExtendPlace = {
  encode(
    message: MsgInitGameAndExtendPlace,
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
  ): MsgInitGameAndExtendPlace {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgInitGameAndExtendPlace,
    } as MsgInitGameAndExtendPlace;
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

  fromJSON(object: any): MsgInitGameAndExtendPlace {
    const message = {
      ...baseMsgInitGameAndExtendPlace,
    } as MsgInitGameAndExtendPlace;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: MsgInitGameAndExtendPlace): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgInitGameAndExtendPlace>
  ): MsgInitGameAndExtendPlace {
    const message = {
      ...baseMsgInitGameAndExtendPlace,
    } as MsgInitGameAndExtendPlace;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

const baseMsgInitGameAndExtendPlaceResponse: object = { countGrounds: 0 };

export const MsgInitGameAndExtendPlaceResponse = {
  encode(
    message: MsgInitGameAndExtendPlaceResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.countGrounds !== 0) {
      writer.uint32(8).uint64(message.countGrounds);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgInitGameAndExtendPlaceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgInitGameAndExtendPlaceResponse,
    } as MsgInitGameAndExtendPlaceResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.countGrounds = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgInitGameAndExtendPlaceResponse {
    const message = {
      ...baseMsgInitGameAndExtendPlaceResponse,
    } as MsgInitGameAndExtendPlaceResponse;
    if (object.countGrounds !== undefined && object.countGrounds !== null) {
      message.countGrounds = Number(object.countGrounds);
    } else {
      message.countGrounds = 0;
    }
    return message;
  },

  toJSON(message: MsgInitGameAndExtendPlaceResponse): unknown {
    const obj: any = {};
    message.countGrounds !== undefined &&
      (obj.countGrounds = message.countGrounds);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgInitGameAndExtendPlaceResponse>
  ): MsgInitGameAndExtendPlaceResponse {
    const message = {
      ...baseMsgInitGameAndExtendPlaceResponse,
    } as MsgInitGameAndExtendPlaceResponse;
    if (object.countGrounds !== undefined && object.countGrounds !== null) {
      message.countGrounds = object.countGrounds;
    } else {
      message.countGrounds = 0;
    }
    return message;
  },
};

const baseMsgExtendPlace: object = { creator: "", id: 0 };

export const MsgExtendPlace = {
  encode(message: MsgExtendPlace, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgExtendPlace {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgExtendPlace } as MsgExtendPlace;
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

  fromJSON(object: any): MsgExtendPlace {
    const message = { ...baseMsgExtendPlace } as MsgExtendPlace;
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

  toJSON(message: MsgExtendPlace): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgExtendPlace>): MsgExtendPlace {
    const message = { ...baseMsgExtendPlace } as MsgExtendPlace;
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

const baseMsgExtendPlaceResponse: object = { countGrounds: 0 };

export const MsgExtendPlaceResponse = {
  encode(
    message: MsgExtendPlaceResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.countGrounds !== 0) {
      writer.uint32(8).uint64(message.countGrounds);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgExtendPlaceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgExtendPlaceResponse } as MsgExtendPlaceResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.countGrounds = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgExtendPlaceResponse {
    const message = { ...baseMsgExtendPlaceResponse } as MsgExtendPlaceResponse;
    if (object.countGrounds !== undefined && object.countGrounds !== null) {
      message.countGrounds = Number(object.countGrounds);
    } else {
      message.countGrounds = 0;
    }
    return message;
  },

  toJSON(message: MsgExtendPlaceResponse): unknown {
    const obj: any = {};
    message.countGrounds !== undefined &&
      (obj.countGrounds = message.countGrounds);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgExtendPlaceResponse>
  ): MsgExtendPlaceResponse {
    const message = { ...baseMsgExtendPlaceResponse } as MsgExtendPlaceResponse;
    if (object.countGrounds !== undefined && object.countGrounds !== null) {
      message.countGrounds = object.countGrounds;
    } else {
      message.countGrounds = 0;
    }
    return message;
  },
};

const baseMsgInitGameAndCreateTree: object = { creator: "" };

export const MsgInitGameAndCreateTree = {
  encode(
    message: MsgInitGameAndCreateTree,
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
    return message;
  },

  toJSON(message: MsgInitGameAndCreateTree): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
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
  placeId: 0,
  groundId: 0,
};

export const MsgCreateTree = {
  encode(message: MsgCreateTree, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.bearId !== 0) {
      writer.uint32(16).uint64(message.bearId);
    }
    if (message.placeId !== 0) {
      writer.uint32(24).uint64(message.placeId);
    }
    if (message.groundId !== 0) {
      writer.uint32(32).uint64(message.groundId);
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
          message.placeId = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.groundId = longToNumber(reader.uint64() as Long);
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
    if (object.placeId !== undefined && object.placeId !== null) {
      message.placeId = Number(object.placeId);
    } else {
      message.placeId = 0;
    }
    if (object.groundId !== undefined && object.groundId !== null) {
      message.groundId = Number(object.groundId);
    } else {
      message.groundId = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateTree): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.bearId !== undefined && (obj.bearId = message.bearId);
    message.placeId !== undefined && (obj.placeId = message.placeId);
    message.groundId !== undefined && (obj.groundId = message.groundId);
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
    if (object.placeId !== undefined && object.placeId !== null) {
      message.placeId = object.placeId;
    } else {
      message.placeId = 0;
    }
    if (object.groundId !== undefined && object.groundId !== null) {
      message.groundId = object.groundId;
    } else {
      message.groundId = 0;
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

const baseMsgMoveItemOnPlace: object = {
  creator: "",
  placeId: 0,
  groundId: 0,
  newGroundId: 0,
};

export const MsgMoveItemOnPlace = {
  encode(
    message: MsgMoveItemOnPlace,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.placeId !== 0) {
      writer.uint32(16).uint64(message.placeId);
    }
    if (message.groundId !== 0) {
      writer.uint32(24).uint64(message.groundId);
    }
    if (message.newGroundId !== 0) {
      writer.uint32(32).uint64(message.newGroundId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMoveItemOnPlace {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMoveItemOnPlace } as MsgMoveItemOnPlace;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.placeId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.groundId = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.newGroundId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMoveItemOnPlace {
    const message = { ...baseMsgMoveItemOnPlace } as MsgMoveItemOnPlace;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.placeId !== undefined && object.placeId !== null) {
      message.placeId = Number(object.placeId);
    } else {
      message.placeId = 0;
    }
    if (object.groundId !== undefined && object.groundId !== null) {
      message.groundId = Number(object.groundId);
    } else {
      message.groundId = 0;
    }
    if (object.newGroundId !== undefined && object.newGroundId !== null) {
      message.newGroundId = Number(object.newGroundId);
    } else {
      message.newGroundId = 0;
    }
    return message;
  },

  toJSON(message: MsgMoveItemOnPlace): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.placeId !== undefined && (obj.placeId = message.placeId);
    message.groundId !== undefined && (obj.groundId = message.groundId);
    message.newGroundId !== undefined &&
      (obj.newGroundId = message.newGroundId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgMoveItemOnPlace>): MsgMoveItemOnPlace {
    const message = { ...baseMsgMoveItemOnPlace } as MsgMoveItemOnPlace;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.placeId !== undefined && object.placeId !== null) {
      message.placeId = object.placeId;
    } else {
      message.placeId = 0;
    }
    if (object.groundId !== undefined && object.groundId !== null) {
      message.groundId = object.groundId;
    } else {
      message.groundId = 0;
    }
    if (object.newGroundId !== undefined && object.newGroundId !== null) {
      message.newGroundId = object.newGroundId;
    } else {
      message.newGroundId = 0;
    }
    return message;
  },
};

const baseMsgMoveItemOnPlaceResponse: object = {};

export const MsgMoveItemOnPlaceResponse = {
  encode(
    _: MsgMoveItemOnPlaceResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgMoveItemOnPlaceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgMoveItemOnPlaceResponse,
    } as MsgMoveItemOnPlaceResponse;
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

  fromJSON(_: any): MsgMoveItemOnPlaceResponse {
    const message = {
      ...baseMsgMoveItemOnPlaceResponse,
    } as MsgMoveItemOnPlaceResponse;
    return message;
  },

  toJSON(_: MsgMoveItemOnPlaceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgMoveItemOnPlaceResponse>
  ): MsgMoveItemOnPlaceResponse {
    const message = {
      ...baseMsgMoveItemOnPlaceResponse,
    } as MsgMoveItemOnPlaceResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  InitGameAndSetName(
    request: MsgInitGameAndSetName
  ): Promise<MsgInitGameAndSetNameResponse>;
  SetName(request: MsgSetName): Promise<MsgSetNameResponse>;
  InitGameAndExtendPlace(
    request: MsgInitGameAndExtendPlace
  ): Promise<MsgInitGameAndExtendPlaceResponse>;
  ExtendPlace(request: MsgExtendPlace): Promise<MsgExtendPlaceResponse>;
  InitGameAndCreateTree(
    request: MsgInitGameAndCreateTree
  ): Promise<MsgInitGameAndCreateTreeResponse>;
  CreateTree(request: MsgCreateTree): Promise<MsgCreateTreeResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  MoveItemOnPlace(
    request: MsgMoveItemOnPlace
  ): Promise<MsgMoveItemOnPlaceResponse>;
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

  InitGameAndExtendPlace(
    request: MsgInitGameAndExtendPlace
  ): Promise<MsgInitGameAndExtendPlaceResponse> {
    const data = MsgInitGameAndExtendPlace.encode(request).finish();
    const promise = this.rpc.request(
      "MonetaToday.honeywood.bears.Msg",
      "InitGameAndExtendPlace",
      data
    );
    return promise.then((data) =>
      MsgInitGameAndExtendPlaceResponse.decode(new Reader(data))
    );
  }

  ExtendPlace(request: MsgExtendPlace): Promise<MsgExtendPlaceResponse> {
    const data = MsgExtendPlace.encode(request).finish();
    const promise = this.rpc.request(
      "MonetaToday.honeywood.bears.Msg",
      "ExtendPlace",
      data
    );
    return promise.then((data) =>
      MsgExtendPlaceResponse.decode(new Reader(data))
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

  MoveItemOnPlace(
    request: MsgMoveItemOnPlace
  ): Promise<MsgMoveItemOnPlaceResponse> {
    const data = MsgMoveItemOnPlace.encode(request).finish();
    const promise = this.rpc.request(
      "MonetaToday.honeywood.bears.Msg",
      "MoveItemOnPlace",
      data
    );
    return promise.then((data) =>
      MsgMoveItemOnPlaceResponse.decode(new Reader(data))
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
