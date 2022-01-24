/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Params } from "../bears/params";
import { BearNames } from "../bears/bear_names";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { Bears } from "../bears/bears";
import { AddressBears } from "../bears/address_bears";
import { Places } from "../bears/places";
import { Trees } from "../bears/trees";

export const protobufPackage = "MonetaToday.honeywood.bears";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetBearNamesRequest {
  name: string;
}

export interface QueryGetBearNamesResponse {
  bearNames: BearNames | undefined;
}

export interface QueryAllBearNamesRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllBearNamesResponse {
  bearNames: BearNames[];
  pagination: PageResponse | undefined;
}

export interface QueryGetBearsRequest {
  id: number;
}

export interface QueryGetBearsResponse {
  Bears: Bears | undefined;
}

export interface QueryAllBearsRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllBearsResponse {
  Bears: Bears[];
  pagination: PageResponse | undefined;
}

export interface QueryGetAddressBearsRequest {
  address: string;
}

export interface QueryGetAddressBearsResponse {
  addressBears: AddressBears | undefined;
}

export interface QueryAllAddressBearsRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllAddressBearsResponse {
  addressBears: AddressBears[];
  pagination: PageResponse | undefined;
}

export interface QueryGetPlacesRequest {
  id: number;
}

export interface QueryGetPlacesResponse {
  Places: Places | undefined;
}

export interface QueryAllPlacesRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllPlacesResponse {
  Places: Places[];
  pagination: PageResponse | undefined;
}

export interface QueryGetTreesRequest {
  id: number;
}

export interface QueryGetTreesResponse {
  Trees: Trees | undefined;
}

export interface QueryAllTreesRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllTreesResponse {
  Trees: Trees[];
  pagination: PageResponse | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
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

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetBearNamesRequest: object = { name: "" };

export const QueryGetBearNamesRequest = {
  encode(
    message: QueryGetBearNamesRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetBearNamesRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetBearNamesRequest,
    } as QueryGetBearNamesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetBearNamesRequest {
    const message = {
      ...baseQueryGetBearNamesRequest,
    } as QueryGetBearNamesRequest;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    return message;
  },

  toJSON(message: QueryGetBearNamesRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetBearNamesRequest>
  ): QueryGetBearNamesRequest {
    const message = {
      ...baseQueryGetBearNamesRequest,
    } as QueryGetBearNamesRequest;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    return message;
  },
};

const baseQueryGetBearNamesResponse: object = {};

export const QueryGetBearNamesResponse = {
  encode(
    message: QueryGetBearNamesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.bearNames !== undefined) {
      BearNames.encode(message.bearNames, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetBearNamesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetBearNamesResponse,
    } as QueryGetBearNamesResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bearNames = BearNames.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetBearNamesResponse {
    const message = {
      ...baseQueryGetBearNamesResponse,
    } as QueryGetBearNamesResponse;
    if (object.bearNames !== undefined && object.bearNames !== null) {
      message.bearNames = BearNames.fromJSON(object.bearNames);
    } else {
      message.bearNames = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetBearNamesResponse): unknown {
    const obj: any = {};
    message.bearNames !== undefined &&
      (obj.bearNames = message.bearNames
        ? BearNames.toJSON(message.bearNames)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetBearNamesResponse>
  ): QueryGetBearNamesResponse {
    const message = {
      ...baseQueryGetBearNamesResponse,
    } as QueryGetBearNamesResponse;
    if (object.bearNames !== undefined && object.bearNames !== null) {
      message.bearNames = BearNames.fromPartial(object.bearNames);
    } else {
      message.bearNames = undefined;
    }
    return message;
  },
};

const baseQueryAllBearNamesRequest: object = {};

export const QueryAllBearNamesRequest = {
  encode(
    message: QueryAllBearNamesRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllBearNamesRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllBearNamesRequest,
    } as QueryAllBearNamesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllBearNamesRequest {
    const message = {
      ...baseQueryAllBearNamesRequest,
    } as QueryAllBearNamesRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllBearNamesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllBearNamesRequest>
  ): QueryAllBearNamesRequest {
    const message = {
      ...baseQueryAllBearNamesRequest,
    } as QueryAllBearNamesRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllBearNamesResponse: object = {};

export const QueryAllBearNamesResponse = {
  encode(
    message: QueryAllBearNamesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.bearNames) {
      BearNames.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllBearNamesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllBearNamesResponse,
    } as QueryAllBearNamesResponse;
    message.bearNames = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bearNames.push(BearNames.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllBearNamesResponse {
    const message = {
      ...baseQueryAllBearNamesResponse,
    } as QueryAllBearNamesResponse;
    message.bearNames = [];
    if (object.bearNames !== undefined && object.bearNames !== null) {
      for (const e of object.bearNames) {
        message.bearNames.push(BearNames.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllBearNamesResponse): unknown {
    const obj: any = {};
    if (message.bearNames) {
      obj.bearNames = message.bearNames.map((e) =>
        e ? BearNames.toJSON(e) : undefined
      );
    } else {
      obj.bearNames = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllBearNamesResponse>
  ): QueryAllBearNamesResponse {
    const message = {
      ...baseQueryAllBearNamesResponse,
    } as QueryAllBearNamesResponse;
    message.bearNames = [];
    if (object.bearNames !== undefined && object.bearNames !== null) {
      for (const e of object.bearNames) {
        message.bearNames.push(BearNames.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetBearsRequest: object = { id: 0 };

export const QueryGetBearsRequest = {
  encode(
    message: QueryGetBearsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetBearsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetBearsRequest } as QueryGetBearsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetBearsRequest {
    const message = { ...baseQueryGetBearsRequest } as QueryGetBearsRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetBearsRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetBearsRequest>): QueryGetBearsRequest {
    const message = { ...baseQueryGetBearsRequest } as QueryGetBearsRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetBearsResponse: object = {};

export const QueryGetBearsResponse = {
  encode(
    message: QueryGetBearsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Bears !== undefined) {
      Bears.encode(message.Bears, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetBearsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetBearsResponse } as QueryGetBearsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Bears = Bears.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetBearsResponse {
    const message = { ...baseQueryGetBearsResponse } as QueryGetBearsResponse;
    if (object.Bears !== undefined && object.Bears !== null) {
      message.Bears = Bears.fromJSON(object.Bears);
    } else {
      message.Bears = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetBearsResponse): unknown {
    const obj: any = {};
    message.Bears !== undefined &&
      (obj.Bears = message.Bears ? Bears.toJSON(message.Bears) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetBearsResponse>
  ): QueryGetBearsResponse {
    const message = { ...baseQueryGetBearsResponse } as QueryGetBearsResponse;
    if (object.Bears !== undefined && object.Bears !== null) {
      message.Bears = Bears.fromPartial(object.Bears);
    } else {
      message.Bears = undefined;
    }
    return message;
  },
};

const baseQueryAllBearsRequest: object = {};

export const QueryAllBearsRequest = {
  encode(
    message: QueryAllBearsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllBearsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllBearsRequest } as QueryAllBearsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllBearsRequest {
    const message = { ...baseQueryAllBearsRequest } as QueryAllBearsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllBearsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllBearsRequest>): QueryAllBearsRequest {
    const message = { ...baseQueryAllBearsRequest } as QueryAllBearsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllBearsResponse: object = {};

export const QueryAllBearsResponse = {
  encode(
    message: QueryAllBearsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Bears) {
      Bears.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllBearsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllBearsResponse } as QueryAllBearsResponse;
    message.Bears = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Bears.push(Bears.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllBearsResponse {
    const message = { ...baseQueryAllBearsResponse } as QueryAllBearsResponse;
    message.Bears = [];
    if (object.Bears !== undefined && object.Bears !== null) {
      for (const e of object.Bears) {
        message.Bears.push(Bears.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllBearsResponse): unknown {
    const obj: any = {};
    if (message.Bears) {
      obj.Bears = message.Bears.map((e) => (e ? Bears.toJSON(e) : undefined));
    } else {
      obj.Bears = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllBearsResponse>
  ): QueryAllBearsResponse {
    const message = { ...baseQueryAllBearsResponse } as QueryAllBearsResponse;
    message.Bears = [];
    if (object.Bears !== undefined && object.Bears !== null) {
      for (const e of object.Bears) {
        message.Bears.push(Bears.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetAddressBearsRequest: object = { address: "" };

export const QueryGetAddressBearsRequest = {
  encode(
    message: QueryGetAddressBearsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetAddressBearsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetAddressBearsRequest,
    } as QueryGetAddressBearsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetAddressBearsRequest {
    const message = {
      ...baseQueryGetAddressBearsRequest,
    } as QueryGetAddressBearsRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: QueryGetAddressBearsRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetAddressBearsRequest>
  ): QueryGetAddressBearsRequest {
    const message = {
      ...baseQueryGetAddressBearsRequest,
    } as QueryGetAddressBearsRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseQueryGetAddressBearsResponse: object = {};

export const QueryGetAddressBearsResponse = {
  encode(
    message: QueryGetAddressBearsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.addressBears !== undefined) {
      AddressBears.encode(
        message.addressBears,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetAddressBearsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetAddressBearsResponse,
    } as QueryGetAddressBearsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addressBears = AddressBears.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetAddressBearsResponse {
    const message = {
      ...baseQueryGetAddressBearsResponse,
    } as QueryGetAddressBearsResponse;
    if (object.addressBears !== undefined && object.addressBears !== null) {
      message.addressBears = AddressBears.fromJSON(object.addressBears);
    } else {
      message.addressBears = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetAddressBearsResponse): unknown {
    const obj: any = {};
    message.addressBears !== undefined &&
      (obj.addressBears = message.addressBears
        ? AddressBears.toJSON(message.addressBears)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetAddressBearsResponse>
  ): QueryGetAddressBearsResponse {
    const message = {
      ...baseQueryGetAddressBearsResponse,
    } as QueryGetAddressBearsResponse;
    if (object.addressBears !== undefined && object.addressBears !== null) {
      message.addressBears = AddressBears.fromPartial(object.addressBears);
    } else {
      message.addressBears = undefined;
    }
    return message;
  },
};

const baseQueryAllAddressBearsRequest: object = {};

export const QueryAllAddressBearsRequest = {
  encode(
    message: QueryAllAddressBearsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllAddressBearsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllAddressBearsRequest,
    } as QueryAllAddressBearsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllAddressBearsRequest {
    const message = {
      ...baseQueryAllAddressBearsRequest,
    } as QueryAllAddressBearsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllAddressBearsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllAddressBearsRequest>
  ): QueryAllAddressBearsRequest {
    const message = {
      ...baseQueryAllAddressBearsRequest,
    } as QueryAllAddressBearsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllAddressBearsResponse: object = {};

export const QueryAllAddressBearsResponse = {
  encode(
    message: QueryAllAddressBearsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.addressBears) {
      AddressBears.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllAddressBearsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllAddressBearsResponse,
    } as QueryAllAddressBearsResponse;
    message.addressBears = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addressBears.push(
            AddressBears.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllAddressBearsResponse {
    const message = {
      ...baseQueryAllAddressBearsResponse,
    } as QueryAllAddressBearsResponse;
    message.addressBears = [];
    if (object.addressBears !== undefined && object.addressBears !== null) {
      for (const e of object.addressBears) {
        message.addressBears.push(AddressBears.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllAddressBearsResponse): unknown {
    const obj: any = {};
    if (message.addressBears) {
      obj.addressBears = message.addressBears.map((e) =>
        e ? AddressBears.toJSON(e) : undefined
      );
    } else {
      obj.addressBears = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllAddressBearsResponse>
  ): QueryAllAddressBearsResponse {
    const message = {
      ...baseQueryAllAddressBearsResponse,
    } as QueryAllAddressBearsResponse;
    message.addressBears = [];
    if (object.addressBears !== undefined && object.addressBears !== null) {
      for (const e of object.addressBears) {
        message.addressBears.push(AddressBears.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetPlacesRequest: object = { id: 0 };

export const QueryGetPlacesRequest = {
  encode(
    message: QueryGetPlacesRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetPlacesRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetPlacesRequest } as QueryGetPlacesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPlacesRequest {
    const message = { ...baseQueryGetPlacesRequest } as QueryGetPlacesRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetPlacesRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetPlacesRequest>
  ): QueryGetPlacesRequest {
    const message = { ...baseQueryGetPlacesRequest } as QueryGetPlacesRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetPlacesResponse: object = {};

export const QueryGetPlacesResponse = {
  encode(
    message: QueryGetPlacesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Places !== undefined) {
      Places.encode(message.Places, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetPlacesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetPlacesResponse } as QueryGetPlacesResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Places = Places.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPlacesResponse {
    const message = { ...baseQueryGetPlacesResponse } as QueryGetPlacesResponse;
    if (object.Places !== undefined && object.Places !== null) {
      message.Places = Places.fromJSON(object.Places);
    } else {
      message.Places = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetPlacesResponse): unknown {
    const obj: any = {};
    message.Places !== undefined &&
      (obj.Places = message.Places ? Places.toJSON(message.Places) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetPlacesResponse>
  ): QueryGetPlacesResponse {
    const message = { ...baseQueryGetPlacesResponse } as QueryGetPlacesResponse;
    if (object.Places !== undefined && object.Places !== null) {
      message.Places = Places.fromPartial(object.Places);
    } else {
      message.Places = undefined;
    }
    return message;
  },
};

const baseQueryAllPlacesRequest: object = {};

export const QueryAllPlacesRequest = {
  encode(
    message: QueryAllPlacesRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllPlacesRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllPlacesRequest } as QueryAllPlacesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllPlacesRequest {
    const message = { ...baseQueryAllPlacesRequest } as QueryAllPlacesRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllPlacesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllPlacesRequest>
  ): QueryAllPlacesRequest {
    const message = { ...baseQueryAllPlacesRequest } as QueryAllPlacesRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllPlacesResponse: object = {};

export const QueryAllPlacesResponse = {
  encode(
    message: QueryAllPlacesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Places) {
      Places.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllPlacesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllPlacesResponse } as QueryAllPlacesResponse;
    message.Places = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Places.push(Places.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllPlacesResponse {
    const message = { ...baseQueryAllPlacesResponse } as QueryAllPlacesResponse;
    message.Places = [];
    if (object.Places !== undefined && object.Places !== null) {
      for (const e of object.Places) {
        message.Places.push(Places.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllPlacesResponse): unknown {
    const obj: any = {};
    if (message.Places) {
      obj.Places = message.Places.map((e) =>
        e ? Places.toJSON(e) : undefined
      );
    } else {
      obj.Places = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllPlacesResponse>
  ): QueryAllPlacesResponse {
    const message = { ...baseQueryAllPlacesResponse } as QueryAllPlacesResponse;
    message.Places = [];
    if (object.Places !== undefined && object.Places !== null) {
      for (const e of object.Places) {
        message.Places.push(Places.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetTreesRequest: object = { id: 0 };

export const QueryGetTreesRequest = {
  encode(
    message: QueryGetTreesRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetTreesRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetTreesRequest } as QueryGetTreesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetTreesRequest {
    const message = { ...baseQueryGetTreesRequest } as QueryGetTreesRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetTreesRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetTreesRequest>): QueryGetTreesRequest {
    const message = { ...baseQueryGetTreesRequest } as QueryGetTreesRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetTreesResponse: object = {};

export const QueryGetTreesResponse = {
  encode(
    message: QueryGetTreesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Trees !== undefined) {
      Trees.encode(message.Trees, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetTreesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetTreesResponse } as QueryGetTreesResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Trees = Trees.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetTreesResponse {
    const message = { ...baseQueryGetTreesResponse } as QueryGetTreesResponse;
    if (object.Trees !== undefined && object.Trees !== null) {
      message.Trees = Trees.fromJSON(object.Trees);
    } else {
      message.Trees = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetTreesResponse): unknown {
    const obj: any = {};
    message.Trees !== undefined &&
      (obj.Trees = message.Trees ? Trees.toJSON(message.Trees) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetTreesResponse>
  ): QueryGetTreesResponse {
    const message = { ...baseQueryGetTreesResponse } as QueryGetTreesResponse;
    if (object.Trees !== undefined && object.Trees !== null) {
      message.Trees = Trees.fromPartial(object.Trees);
    } else {
      message.Trees = undefined;
    }
    return message;
  },
};

const baseQueryAllTreesRequest: object = {};

export const QueryAllTreesRequest = {
  encode(
    message: QueryAllTreesRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllTreesRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllTreesRequest } as QueryAllTreesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllTreesRequest {
    const message = { ...baseQueryAllTreesRequest } as QueryAllTreesRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllTreesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllTreesRequest>): QueryAllTreesRequest {
    const message = { ...baseQueryAllTreesRequest } as QueryAllTreesRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllTreesResponse: object = {};

export const QueryAllTreesResponse = {
  encode(
    message: QueryAllTreesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Trees) {
      Trees.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllTreesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllTreesResponse } as QueryAllTreesResponse;
    message.Trees = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Trees.push(Trees.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllTreesResponse {
    const message = { ...baseQueryAllTreesResponse } as QueryAllTreesResponse;
    message.Trees = [];
    if (object.Trees !== undefined && object.Trees !== null) {
      for (const e of object.Trees) {
        message.Trees.push(Trees.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllTreesResponse): unknown {
    const obj: any = {};
    if (message.Trees) {
      obj.Trees = message.Trees.map((e) => (e ? Trees.toJSON(e) : undefined));
    } else {
      obj.Trees = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllTreesResponse>
  ): QueryAllTreesResponse {
    const message = { ...baseQueryAllTreesResponse } as QueryAllTreesResponse;
    message.Trees = [];
    if (object.Trees !== undefined && object.Trees !== null) {
      for (const e of object.Trees) {
        message.Trees.push(Trees.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a BearNames by index. */
  BearNames(
    request: QueryGetBearNamesRequest
  ): Promise<QueryGetBearNamesResponse>;
  /** Queries a list of BearNames items. */
  BearNamesAll(
    request: QueryAllBearNamesRequest
  ): Promise<QueryAllBearNamesResponse>;
  /** Queries a Bears by id. */
  Bears(request: QueryGetBearsRequest): Promise<QueryGetBearsResponse>;
  /** Queries a list of Bears items. */
  BearsAll(request: QueryAllBearsRequest): Promise<QueryAllBearsResponse>;
  /** Queries a AddressBears by index. */
  AddressBears(
    request: QueryGetAddressBearsRequest
  ): Promise<QueryGetAddressBearsResponse>;
  /** Queries a list of AddressBears items. */
  AddressBearsAll(
    request: QueryAllAddressBearsRequest
  ): Promise<QueryAllAddressBearsResponse>;
  /** Queries a Places by id. */
  Places(request: QueryGetPlacesRequest): Promise<QueryGetPlacesResponse>;
  /** Queries a list of Places items. */
  PlacesAll(request: QueryAllPlacesRequest): Promise<QueryAllPlacesResponse>;
  /** Queries a Trees by id. */
  Trees(request: QueryGetTreesRequest): Promise<QueryGetTreesResponse>;
  /** Queries a list of Trees items. */
  TreesAll(request: QueryAllTreesRequest): Promise<QueryAllTreesResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "MonetaToday.honeywood.bears.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  BearNames(
    request: QueryGetBearNamesRequest
  ): Promise<QueryGetBearNamesResponse> {
    const data = QueryGetBearNamesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "MonetaToday.honeywood.bears.Query",
      "BearNames",
      data
    );
    return promise.then((data) =>
      QueryGetBearNamesResponse.decode(new Reader(data))
    );
  }

  BearNamesAll(
    request: QueryAllBearNamesRequest
  ): Promise<QueryAllBearNamesResponse> {
    const data = QueryAllBearNamesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "MonetaToday.honeywood.bears.Query",
      "BearNamesAll",
      data
    );
    return promise.then((data) =>
      QueryAllBearNamesResponse.decode(new Reader(data))
    );
  }

  Bears(request: QueryGetBearsRequest): Promise<QueryGetBearsResponse> {
    const data = QueryGetBearsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "MonetaToday.honeywood.bears.Query",
      "Bears",
      data
    );
    return promise.then((data) =>
      QueryGetBearsResponse.decode(new Reader(data))
    );
  }

  BearsAll(request: QueryAllBearsRequest): Promise<QueryAllBearsResponse> {
    const data = QueryAllBearsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "MonetaToday.honeywood.bears.Query",
      "BearsAll",
      data
    );
    return promise.then((data) =>
      QueryAllBearsResponse.decode(new Reader(data))
    );
  }

  AddressBears(
    request: QueryGetAddressBearsRequest
  ): Promise<QueryGetAddressBearsResponse> {
    const data = QueryGetAddressBearsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "MonetaToday.honeywood.bears.Query",
      "AddressBears",
      data
    );
    return promise.then((data) =>
      QueryGetAddressBearsResponse.decode(new Reader(data))
    );
  }

  AddressBearsAll(
    request: QueryAllAddressBearsRequest
  ): Promise<QueryAllAddressBearsResponse> {
    const data = QueryAllAddressBearsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "MonetaToday.honeywood.bears.Query",
      "AddressBearsAll",
      data
    );
    return promise.then((data) =>
      QueryAllAddressBearsResponse.decode(new Reader(data))
    );
  }

  Places(request: QueryGetPlacesRequest): Promise<QueryGetPlacesResponse> {
    const data = QueryGetPlacesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "MonetaToday.honeywood.bears.Query",
      "Places",
      data
    );
    return promise.then((data) =>
      QueryGetPlacesResponse.decode(new Reader(data))
    );
  }

  PlacesAll(request: QueryAllPlacesRequest): Promise<QueryAllPlacesResponse> {
    const data = QueryAllPlacesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "MonetaToday.honeywood.bears.Query",
      "PlacesAll",
      data
    );
    return promise.then((data) =>
      QueryAllPlacesResponse.decode(new Reader(data))
    );
  }

  Trees(request: QueryGetTreesRequest): Promise<QueryGetTreesResponse> {
    const data = QueryGetTreesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "MonetaToday.honeywood.bears.Query",
      "Trees",
      data
    );
    return promise.then((data) =>
      QueryGetTreesResponse.decode(new Reader(data))
    );
  }

  TreesAll(request: QueryAllTreesRequest): Promise<QueryAllTreesResponse> {
    const data = QueryAllTreesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "MonetaToday.honeywood.bears.Query",
      "TreesAll",
      data
    );
    return promise.then((data) =>
      QueryAllTreesResponse.decode(new Reader(data))
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
