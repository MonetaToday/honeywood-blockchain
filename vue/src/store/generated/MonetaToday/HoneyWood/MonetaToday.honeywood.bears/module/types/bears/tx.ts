/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

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

export interface MsgInitGameAndExtend {
  creator: string;
}

export interface MsgInitGameAndExtendResponse {
  countGrounds: number;
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

const baseMsgInitGameAndExtend: object = { creator: "" };

export const MsgInitGameAndExtend = {
  encode(
    message: MsgInitGameAndExtend,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgInitGameAndExtend {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgInitGameAndExtend } as MsgInitGameAndExtend;
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

  fromJSON(object: any): MsgInitGameAndExtend {
    const message = { ...baseMsgInitGameAndExtend } as MsgInitGameAndExtend;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: MsgInitGameAndExtend): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgInitGameAndExtend>): MsgInitGameAndExtend {
    const message = { ...baseMsgInitGameAndExtend } as MsgInitGameAndExtend;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

const baseMsgInitGameAndExtendResponse: object = { countGrounds: 0 };

export const MsgInitGameAndExtendResponse = {
  encode(
    message: MsgInitGameAndExtendResponse,
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
  ): MsgInitGameAndExtendResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgInitGameAndExtendResponse,
    } as MsgInitGameAndExtendResponse;
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

  fromJSON(object: any): MsgInitGameAndExtendResponse {
    const message = {
      ...baseMsgInitGameAndExtendResponse,
    } as MsgInitGameAndExtendResponse;
    if (object.countGrounds !== undefined && object.countGrounds !== null) {
      message.countGrounds = Number(object.countGrounds);
    } else {
      message.countGrounds = 0;
    }
    return message;
  },

  toJSON(message: MsgInitGameAndExtendResponse): unknown {
    const obj: any = {};
    message.countGrounds !== undefined &&
      (obj.countGrounds = message.countGrounds);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgInitGameAndExtendResponse>
  ): MsgInitGameAndExtendResponse {
    const message = {
      ...baseMsgInitGameAndExtendResponse,
    } as MsgInitGameAndExtendResponse;
    if (object.countGrounds !== undefined && object.countGrounds !== null) {
      message.countGrounds = object.countGrounds;
    } else {
      message.countGrounds = 0;
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
  /** this line is used by starport scaffolding # proto/tx/rpc */
  InitGameAndExtend(
    request: MsgInitGameAndExtend
  ): Promise<MsgInitGameAndExtendResponse>;
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

  InitGameAndExtend(
    request: MsgInitGameAndExtend
  ): Promise<MsgInitGameAndExtendResponse> {
    const data = MsgInitGameAndExtend.encode(request).finish();
    const promise = this.rpc.request(
      "MonetaToday.honeywood.bears.Msg",
      "InitGameAndExtend",
      data
    );
    return promise.then((data) =>
      MsgInitGameAndExtendResponse.decode(new Reader(data))
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