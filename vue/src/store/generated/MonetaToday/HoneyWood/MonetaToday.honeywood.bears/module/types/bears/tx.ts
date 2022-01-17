/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "MonetaToday.honeywood.bears";

export interface MsgInitGameAndSetName {
  creator: string;
  name: string;
}

export interface MsgInitGameAndSetNameResponse {}

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

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  InitGameAndSetName(
    request: MsgInitGameAndSetName
  ): Promise<MsgInitGameAndSetNameResponse>;
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
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
