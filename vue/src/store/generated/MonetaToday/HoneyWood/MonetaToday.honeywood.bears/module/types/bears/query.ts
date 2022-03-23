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
import { Fields } from "../bears/fields";
import { Trees, TreeParams } from "../bears/trees";
import { Decorations } from "../bears/decorations";
import { Apiaries, ApiaryParams } from "../bears/apiaries";
import { Bees } from "../bears/bees";
import { AirInfo } from "../bears/air_info";

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

export interface QueryGetFieldsRequest {
  id: number;
}

export interface QueryGetFieldsResponse {
  Fields: Fields | undefined;
}

export interface QueryAllFieldsRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllFieldsResponse {
  Fields: Fields[];
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

export interface QueryGetDecorationsRequest {
  id: number;
}

export interface QueryGetDecorationsResponse {
  Decorations: Decorations | undefined;
}

export interface QueryAllDecorationsRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllDecorationsResponse {
  Decorations: Decorations[];
  pagination: PageResponse | undefined;
}

export interface QueryGetApiariesRequest {
  id: number;
}

export interface QueryGetApiariesResponse {
  Apiaries: Apiaries | undefined;
}

export interface QueryAllApiariesRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllApiariesResponse {
  Apiaries: Apiaries[];
  pagination: PageResponse | undefined;
}

export interface QueryGetBeesRequest {
  id: number;
}

export interface QueryGetBeesResponse {
  Bees: Bees | undefined;
}

export interface QueryAllBeesRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllBeesResponse {
  Bees: Bees[];
  pagination: PageResponse | undefined;
}

export interface QueryCalculateHoneyInApiaryRequest {
  apiaryId: number;
}

export interface QueryCalculateHoneyInApiaryResponse {
  countHoney: string;
}

export interface QueryGetAirInfoRequest {}

export interface QueryGetAirInfoResponse {
  AirInfo: AirInfo | undefined;
}

export interface QueryShowLastAirInfoRequest {}

export interface QueryShowLastAirInfoResponse {
  height: number;
  count: string;
  purity: string;
  supply: string;
  consume: string;
}

export interface QueryShowApiariesInfoByBearIdRequest {
  bearId: number;
}

export interface QueryShowApiariesInfoByBearIdResponse {
  apiariesInfo: QueryShowApiariesInfoByBearIdResponse_ApiaryInfo[];
}

export interface QueryShowApiariesInfoByBearIdResponse_ApiaryInfo {
  id: number;
  countHoney: string;
  bees: number[];
  params: ApiaryParams | undefined;
}

export interface QueryShowHoneyPowerByApiaryIdRequest {
  apiaryId: number;
}

export interface QueryShowHoneyPowerByApiaryIdResponse {
  honeyPower: string;
}

export interface QueryShowHoneyPowerByBeeTypeRequest {
  beeType: string;
}

export interface QueryShowHoneyPowerByBeeTypeResponse {
  honeyPower: string;
}

export interface QueryShowHoneyPowerByBearIdRequest {
  bearId: number;
}

export interface QueryShowHoneyPowerByBearIdResponse {
  honeyPower: string;
}

export interface QueryShowTreesInfoByBearIdRequest {
  bearId: number;
}

export interface QueryShowTreesInfoByBearIdResponse {
  treesInfo: QueryShowTreesInfoByBearIdResponse_TreeInfo[];
}

export interface QueryShowTreesInfoByBearIdResponse_TreeInfo {
  id: number;
  params: TreeParams | undefined;
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

const baseQueryGetFieldsRequest: object = { id: 0 };

export const QueryGetFieldsRequest = {
  encode(
    message: QueryGetFieldsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetFieldsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetFieldsRequest } as QueryGetFieldsRequest;
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

  fromJSON(object: any): QueryGetFieldsRequest {
    const message = { ...baseQueryGetFieldsRequest } as QueryGetFieldsRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetFieldsRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetFieldsRequest>
  ): QueryGetFieldsRequest {
    const message = { ...baseQueryGetFieldsRequest } as QueryGetFieldsRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetFieldsResponse: object = {};

export const QueryGetFieldsResponse = {
  encode(
    message: QueryGetFieldsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Fields !== undefined) {
      Fields.encode(message.Fields, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetFieldsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetFieldsResponse } as QueryGetFieldsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Fields = Fields.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetFieldsResponse {
    const message = { ...baseQueryGetFieldsResponse } as QueryGetFieldsResponse;
    if (object.Fields !== undefined && object.Fields !== null) {
      message.Fields = Fields.fromJSON(object.Fields);
    } else {
      message.Fields = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetFieldsResponse): unknown {
    const obj: any = {};
    message.Fields !== undefined &&
      (obj.Fields = message.Fields ? Fields.toJSON(message.Fields) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetFieldsResponse>
  ): QueryGetFieldsResponse {
    const message = { ...baseQueryGetFieldsResponse } as QueryGetFieldsResponse;
    if (object.Fields !== undefined && object.Fields !== null) {
      message.Fields = Fields.fromPartial(object.Fields);
    } else {
      message.Fields = undefined;
    }
    return message;
  },
};

const baseQueryAllFieldsRequest: object = {};

export const QueryAllFieldsRequest = {
  encode(
    message: QueryAllFieldsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllFieldsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllFieldsRequest } as QueryAllFieldsRequest;
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

  fromJSON(object: any): QueryAllFieldsRequest {
    const message = { ...baseQueryAllFieldsRequest } as QueryAllFieldsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllFieldsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllFieldsRequest>
  ): QueryAllFieldsRequest {
    const message = { ...baseQueryAllFieldsRequest } as QueryAllFieldsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllFieldsResponse: object = {};

export const QueryAllFieldsResponse = {
  encode(
    message: QueryAllFieldsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Fields) {
      Fields.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllFieldsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllFieldsResponse } as QueryAllFieldsResponse;
    message.Fields = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Fields.push(Fields.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllFieldsResponse {
    const message = { ...baseQueryAllFieldsResponse } as QueryAllFieldsResponse;
    message.Fields = [];
    if (object.Fields !== undefined && object.Fields !== null) {
      for (const e of object.Fields) {
        message.Fields.push(Fields.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllFieldsResponse): unknown {
    const obj: any = {};
    if (message.Fields) {
      obj.Fields = message.Fields.map((e) =>
        e ? Fields.toJSON(e) : undefined
      );
    } else {
      obj.Fields = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllFieldsResponse>
  ): QueryAllFieldsResponse {
    const message = { ...baseQueryAllFieldsResponse } as QueryAllFieldsResponse;
    message.Fields = [];
    if (object.Fields !== undefined && object.Fields !== null) {
      for (const e of object.Fields) {
        message.Fields.push(Fields.fromPartial(e));
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

const baseQueryGetDecorationsRequest: object = { id: 0 };

export const QueryGetDecorationsRequest = {
  encode(
    message: QueryGetDecorationsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetDecorationsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetDecorationsRequest,
    } as QueryGetDecorationsRequest;
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

  fromJSON(object: any): QueryGetDecorationsRequest {
    const message = {
      ...baseQueryGetDecorationsRequest,
    } as QueryGetDecorationsRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetDecorationsRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetDecorationsRequest>
  ): QueryGetDecorationsRequest {
    const message = {
      ...baseQueryGetDecorationsRequest,
    } as QueryGetDecorationsRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetDecorationsResponse: object = {};

export const QueryGetDecorationsResponse = {
  encode(
    message: QueryGetDecorationsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Decorations !== undefined) {
      Decorations.encode(
        message.Decorations,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetDecorationsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetDecorationsResponse,
    } as QueryGetDecorationsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Decorations = Decorations.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetDecorationsResponse {
    const message = {
      ...baseQueryGetDecorationsResponse,
    } as QueryGetDecorationsResponse;
    if (object.Decorations !== undefined && object.Decorations !== null) {
      message.Decorations = Decorations.fromJSON(object.Decorations);
    } else {
      message.Decorations = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetDecorationsResponse): unknown {
    const obj: any = {};
    message.Decorations !== undefined &&
      (obj.Decorations = message.Decorations
        ? Decorations.toJSON(message.Decorations)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetDecorationsResponse>
  ): QueryGetDecorationsResponse {
    const message = {
      ...baseQueryGetDecorationsResponse,
    } as QueryGetDecorationsResponse;
    if (object.Decorations !== undefined && object.Decorations !== null) {
      message.Decorations = Decorations.fromPartial(object.Decorations);
    } else {
      message.Decorations = undefined;
    }
    return message;
  },
};

const baseQueryAllDecorationsRequest: object = {};

export const QueryAllDecorationsRequest = {
  encode(
    message: QueryAllDecorationsRequest,
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
  ): QueryAllDecorationsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllDecorationsRequest,
    } as QueryAllDecorationsRequest;
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

  fromJSON(object: any): QueryAllDecorationsRequest {
    const message = {
      ...baseQueryAllDecorationsRequest,
    } as QueryAllDecorationsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllDecorationsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllDecorationsRequest>
  ): QueryAllDecorationsRequest {
    const message = {
      ...baseQueryAllDecorationsRequest,
    } as QueryAllDecorationsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllDecorationsResponse: object = {};

export const QueryAllDecorationsResponse = {
  encode(
    message: QueryAllDecorationsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Decorations) {
      Decorations.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllDecorationsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllDecorationsResponse,
    } as QueryAllDecorationsResponse;
    message.Decorations = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Decorations.push(Decorations.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllDecorationsResponse {
    const message = {
      ...baseQueryAllDecorationsResponse,
    } as QueryAllDecorationsResponse;
    message.Decorations = [];
    if (object.Decorations !== undefined && object.Decorations !== null) {
      for (const e of object.Decorations) {
        message.Decorations.push(Decorations.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllDecorationsResponse): unknown {
    const obj: any = {};
    if (message.Decorations) {
      obj.Decorations = message.Decorations.map((e) =>
        e ? Decorations.toJSON(e) : undefined
      );
    } else {
      obj.Decorations = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllDecorationsResponse>
  ): QueryAllDecorationsResponse {
    const message = {
      ...baseQueryAllDecorationsResponse,
    } as QueryAllDecorationsResponse;
    message.Decorations = [];
    if (object.Decorations !== undefined && object.Decorations !== null) {
      for (const e of object.Decorations) {
        message.Decorations.push(Decorations.fromPartial(e));
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

const baseQueryGetApiariesRequest: object = { id: 0 };

export const QueryGetApiariesRequest = {
  encode(
    message: QueryGetApiariesRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetApiariesRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetApiariesRequest,
    } as QueryGetApiariesRequest;
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

  fromJSON(object: any): QueryGetApiariesRequest {
    const message = {
      ...baseQueryGetApiariesRequest,
    } as QueryGetApiariesRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetApiariesRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetApiariesRequest>
  ): QueryGetApiariesRequest {
    const message = {
      ...baseQueryGetApiariesRequest,
    } as QueryGetApiariesRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetApiariesResponse: object = {};

export const QueryGetApiariesResponse = {
  encode(
    message: QueryGetApiariesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Apiaries !== undefined) {
      Apiaries.encode(message.Apiaries, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetApiariesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetApiariesResponse,
    } as QueryGetApiariesResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Apiaries = Apiaries.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetApiariesResponse {
    const message = {
      ...baseQueryGetApiariesResponse,
    } as QueryGetApiariesResponse;
    if (object.Apiaries !== undefined && object.Apiaries !== null) {
      message.Apiaries = Apiaries.fromJSON(object.Apiaries);
    } else {
      message.Apiaries = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetApiariesResponse): unknown {
    const obj: any = {};
    message.Apiaries !== undefined &&
      (obj.Apiaries = message.Apiaries
        ? Apiaries.toJSON(message.Apiaries)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetApiariesResponse>
  ): QueryGetApiariesResponse {
    const message = {
      ...baseQueryGetApiariesResponse,
    } as QueryGetApiariesResponse;
    if (object.Apiaries !== undefined && object.Apiaries !== null) {
      message.Apiaries = Apiaries.fromPartial(object.Apiaries);
    } else {
      message.Apiaries = undefined;
    }
    return message;
  },
};

const baseQueryAllApiariesRequest: object = {};

export const QueryAllApiariesRequest = {
  encode(
    message: QueryAllApiariesRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllApiariesRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllApiariesRequest,
    } as QueryAllApiariesRequest;
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

  fromJSON(object: any): QueryAllApiariesRequest {
    const message = {
      ...baseQueryAllApiariesRequest,
    } as QueryAllApiariesRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllApiariesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllApiariesRequest>
  ): QueryAllApiariesRequest {
    const message = {
      ...baseQueryAllApiariesRequest,
    } as QueryAllApiariesRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllApiariesResponse: object = {};

export const QueryAllApiariesResponse = {
  encode(
    message: QueryAllApiariesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Apiaries) {
      Apiaries.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllApiariesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllApiariesResponse,
    } as QueryAllApiariesResponse;
    message.Apiaries = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Apiaries.push(Apiaries.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllApiariesResponse {
    const message = {
      ...baseQueryAllApiariesResponse,
    } as QueryAllApiariesResponse;
    message.Apiaries = [];
    if (object.Apiaries !== undefined && object.Apiaries !== null) {
      for (const e of object.Apiaries) {
        message.Apiaries.push(Apiaries.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllApiariesResponse): unknown {
    const obj: any = {};
    if (message.Apiaries) {
      obj.Apiaries = message.Apiaries.map((e) =>
        e ? Apiaries.toJSON(e) : undefined
      );
    } else {
      obj.Apiaries = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllApiariesResponse>
  ): QueryAllApiariesResponse {
    const message = {
      ...baseQueryAllApiariesResponse,
    } as QueryAllApiariesResponse;
    message.Apiaries = [];
    if (object.Apiaries !== undefined && object.Apiaries !== null) {
      for (const e of object.Apiaries) {
        message.Apiaries.push(Apiaries.fromPartial(e));
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

const baseQueryGetBeesRequest: object = { id: 0 };

export const QueryGetBeesRequest = {
  encode(
    message: QueryGetBeesRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetBeesRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetBeesRequest } as QueryGetBeesRequest;
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

  fromJSON(object: any): QueryGetBeesRequest {
    const message = { ...baseQueryGetBeesRequest } as QueryGetBeesRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetBeesRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetBeesRequest>): QueryGetBeesRequest {
    const message = { ...baseQueryGetBeesRequest } as QueryGetBeesRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetBeesResponse: object = {};

export const QueryGetBeesResponse = {
  encode(
    message: QueryGetBeesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Bees !== undefined) {
      Bees.encode(message.Bees, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetBeesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetBeesResponse } as QueryGetBeesResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Bees = Bees.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetBeesResponse {
    const message = { ...baseQueryGetBeesResponse } as QueryGetBeesResponse;
    if (object.Bees !== undefined && object.Bees !== null) {
      message.Bees = Bees.fromJSON(object.Bees);
    } else {
      message.Bees = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetBeesResponse): unknown {
    const obj: any = {};
    message.Bees !== undefined &&
      (obj.Bees = message.Bees ? Bees.toJSON(message.Bees) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetBeesResponse>): QueryGetBeesResponse {
    const message = { ...baseQueryGetBeesResponse } as QueryGetBeesResponse;
    if (object.Bees !== undefined && object.Bees !== null) {
      message.Bees = Bees.fromPartial(object.Bees);
    } else {
      message.Bees = undefined;
    }
    return message;
  },
};

const baseQueryAllBeesRequest: object = {};

export const QueryAllBeesRequest = {
  encode(
    message: QueryAllBeesRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllBeesRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllBeesRequest } as QueryAllBeesRequest;
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

  fromJSON(object: any): QueryAllBeesRequest {
    const message = { ...baseQueryAllBeesRequest } as QueryAllBeesRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllBeesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllBeesRequest>): QueryAllBeesRequest {
    const message = { ...baseQueryAllBeesRequest } as QueryAllBeesRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllBeesResponse: object = {};

export const QueryAllBeesResponse = {
  encode(
    message: QueryAllBeesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Bees) {
      Bees.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllBeesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllBeesResponse } as QueryAllBeesResponse;
    message.Bees = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Bees.push(Bees.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllBeesResponse {
    const message = { ...baseQueryAllBeesResponse } as QueryAllBeesResponse;
    message.Bees = [];
    if (object.Bees !== undefined && object.Bees !== null) {
      for (const e of object.Bees) {
        message.Bees.push(Bees.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllBeesResponse): unknown {
    const obj: any = {};
    if (message.Bees) {
      obj.Bees = message.Bees.map((e) => (e ? Bees.toJSON(e) : undefined));
    } else {
      obj.Bees = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllBeesResponse>): QueryAllBeesResponse {
    const message = { ...baseQueryAllBeesResponse } as QueryAllBeesResponse;
    message.Bees = [];
    if (object.Bees !== undefined && object.Bees !== null) {
      for (const e of object.Bees) {
        message.Bees.push(Bees.fromPartial(e));
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

const baseQueryCalculateHoneyInApiaryRequest: object = { apiaryId: 0 };

export const QueryCalculateHoneyInApiaryRequest = {
  encode(
    message: QueryCalculateHoneyInApiaryRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.apiaryId !== 0) {
      writer.uint32(8).uint64(message.apiaryId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryCalculateHoneyInApiaryRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCalculateHoneyInApiaryRequest,
    } as QueryCalculateHoneyInApiaryRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.apiaryId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCalculateHoneyInApiaryRequest {
    const message = {
      ...baseQueryCalculateHoneyInApiaryRequest,
    } as QueryCalculateHoneyInApiaryRequest;
    if (object.apiaryId !== undefined && object.apiaryId !== null) {
      message.apiaryId = Number(object.apiaryId);
    } else {
      message.apiaryId = 0;
    }
    return message;
  },

  toJSON(message: QueryCalculateHoneyInApiaryRequest): unknown {
    const obj: any = {};
    message.apiaryId !== undefined && (obj.apiaryId = message.apiaryId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCalculateHoneyInApiaryRequest>
  ): QueryCalculateHoneyInApiaryRequest {
    const message = {
      ...baseQueryCalculateHoneyInApiaryRequest,
    } as QueryCalculateHoneyInApiaryRequest;
    if (object.apiaryId !== undefined && object.apiaryId !== null) {
      message.apiaryId = object.apiaryId;
    } else {
      message.apiaryId = 0;
    }
    return message;
  },
};

const baseQueryCalculateHoneyInApiaryResponse: object = { countHoney: "" };

export const QueryCalculateHoneyInApiaryResponse = {
  encode(
    message: QueryCalculateHoneyInApiaryResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.countHoney !== "") {
      writer.uint32(10).string(message.countHoney);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryCalculateHoneyInApiaryResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCalculateHoneyInApiaryResponse,
    } as QueryCalculateHoneyInApiaryResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.countHoney = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCalculateHoneyInApiaryResponse {
    const message = {
      ...baseQueryCalculateHoneyInApiaryResponse,
    } as QueryCalculateHoneyInApiaryResponse;
    if (object.countHoney !== undefined && object.countHoney !== null) {
      message.countHoney = String(object.countHoney);
    } else {
      message.countHoney = "";
    }
    return message;
  },

  toJSON(message: QueryCalculateHoneyInApiaryResponse): unknown {
    const obj: any = {};
    message.countHoney !== undefined && (obj.countHoney = message.countHoney);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCalculateHoneyInApiaryResponse>
  ): QueryCalculateHoneyInApiaryResponse {
    const message = {
      ...baseQueryCalculateHoneyInApiaryResponse,
    } as QueryCalculateHoneyInApiaryResponse;
    if (object.countHoney !== undefined && object.countHoney !== null) {
      message.countHoney = object.countHoney;
    } else {
      message.countHoney = "";
    }
    return message;
  },
};

const baseQueryGetAirInfoRequest: object = {};

export const QueryGetAirInfoRequest = {
  encode(_: QueryGetAirInfoRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetAirInfoRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetAirInfoRequest } as QueryGetAirInfoRequest;
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

  fromJSON(_: any): QueryGetAirInfoRequest {
    const message = { ...baseQueryGetAirInfoRequest } as QueryGetAirInfoRequest;
    return message;
  },

  toJSON(_: QueryGetAirInfoRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryGetAirInfoRequest>): QueryGetAirInfoRequest {
    const message = { ...baseQueryGetAirInfoRequest } as QueryGetAirInfoRequest;
    return message;
  },
};

const baseQueryGetAirInfoResponse: object = {};

export const QueryGetAirInfoResponse = {
  encode(
    message: QueryGetAirInfoResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.AirInfo !== undefined) {
      AirInfo.encode(message.AirInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetAirInfoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetAirInfoResponse,
    } as QueryGetAirInfoResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.AirInfo = AirInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetAirInfoResponse {
    const message = {
      ...baseQueryGetAirInfoResponse,
    } as QueryGetAirInfoResponse;
    if (object.AirInfo !== undefined && object.AirInfo !== null) {
      message.AirInfo = AirInfo.fromJSON(object.AirInfo);
    } else {
      message.AirInfo = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetAirInfoResponse): unknown {
    const obj: any = {};
    message.AirInfo !== undefined &&
      (obj.AirInfo = message.AirInfo
        ? AirInfo.toJSON(message.AirInfo)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetAirInfoResponse>
  ): QueryGetAirInfoResponse {
    const message = {
      ...baseQueryGetAirInfoResponse,
    } as QueryGetAirInfoResponse;
    if (object.AirInfo !== undefined && object.AirInfo !== null) {
      message.AirInfo = AirInfo.fromPartial(object.AirInfo);
    } else {
      message.AirInfo = undefined;
    }
    return message;
  },
};

const baseQueryShowLastAirInfoRequest: object = {};

export const QueryShowLastAirInfoRequest = {
  encode(
    _: QueryShowLastAirInfoRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryShowLastAirInfoRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryShowLastAirInfoRequest,
    } as QueryShowLastAirInfoRequest;
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

  fromJSON(_: any): QueryShowLastAirInfoRequest {
    const message = {
      ...baseQueryShowLastAirInfoRequest,
    } as QueryShowLastAirInfoRequest;
    return message;
  },

  toJSON(_: QueryShowLastAirInfoRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryShowLastAirInfoRequest>
  ): QueryShowLastAirInfoRequest {
    const message = {
      ...baseQueryShowLastAirInfoRequest,
    } as QueryShowLastAirInfoRequest;
    return message;
  },
};

const baseQueryShowLastAirInfoResponse: object = {
  height: 0,
  count: "",
  purity: "",
  supply: "",
  consume: "",
};

export const QueryShowLastAirInfoResponse = {
  encode(
    message: QueryShowLastAirInfoResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.height !== 0) {
      writer.uint32(8).uint64(message.height);
    }
    if (message.count !== "") {
      writer.uint32(18).string(message.count);
    }
    if (message.purity !== "") {
      writer.uint32(26).string(message.purity);
    }
    if (message.supply !== "") {
      writer.uint32(34).string(message.supply);
    }
    if (message.consume !== "") {
      writer.uint32(42).string(message.consume);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryShowLastAirInfoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryShowLastAirInfoResponse,
    } as QueryShowLastAirInfoResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.count = reader.string();
          break;
        case 3:
          message.purity = reader.string();
          break;
        case 4:
          message.supply = reader.string();
          break;
        case 5:
          message.consume = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryShowLastAirInfoResponse {
    const message = {
      ...baseQueryShowLastAirInfoResponse,
    } as QueryShowLastAirInfoResponse;
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    } else {
      message.height = 0;
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = String(object.count);
    } else {
      message.count = "";
    }
    if (object.purity !== undefined && object.purity !== null) {
      message.purity = String(object.purity);
    } else {
      message.purity = "";
    }
    if (object.supply !== undefined && object.supply !== null) {
      message.supply = String(object.supply);
    } else {
      message.supply = "";
    }
    if (object.consume !== undefined && object.consume !== null) {
      message.consume = String(object.consume);
    } else {
      message.consume = "";
    }
    return message;
  },

  toJSON(message: QueryShowLastAirInfoResponse): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = message.height);
    message.count !== undefined && (obj.count = message.count);
    message.purity !== undefined && (obj.purity = message.purity);
    message.supply !== undefined && (obj.supply = message.supply);
    message.consume !== undefined && (obj.consume = message.consume);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryShowLastAirInfoResponse>
  ): QueryShowLastAirInfoResponse {
    const message = {
      ...baseQueryShowLastAirInfoResponse,
    } as QueryShowLastAirInfoResponse;
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = 0;
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = object.count;
    } else {
      message.count = "";
    }
    if (object.purity !== undefined && object.purity !== null) {
      message.purity = object.purity;
    } else {
      message.purity = "";
    }
    if (object.supply !== undefined && object.supply !== null) {
      message.supply = object.supply;
    } else {
      message.supply = "";
    }
    if (object.consume !== undefined && object.consume !== null) {
      message.consume = object.consume;
    } else {
      message.consume = "";
    }
    return message;
  },
};

const baseQueryShowApiariesInfoByBearIdRequest: object = { bearId: 0 };

export const QueryShowApiariesInfoByBearIdRequest = {
  encode(
    message: QueryShowApiariesInfoByBearIdRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.bearId !== 0) {
      writer.uint32(8).uint64(message.bearId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryShowApiariesInfoByBearIdRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryShowApiariesInfoByBearIdRequest,
    } as QueryShowApiariesInfoByBearIdRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bearId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryShowApiariesInfoByBearIdRequest {
    const message = {
      ...baseQueryShowApiariesInfoByBearIdRequest,
    } as QueryShowApiariesInfoByBearIdRequest;
    if (object.bearId !== undefined && object.bearId !== null) {
      message.bearId = Number(object.bearId);
    } else {
      message.bearId = 0;
    }
    return message;
  },

  toJSON(message: QueryShowApiariesInfoByBearIdRequest): unknown {
    const obj: any = {};
    message.bearId !== undefined && (obj.bearId = message.bearId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryShowApiariesInfoByBearIdRequest>
  ): QueryShowApiariesInfoByBearIdRequest {
    const message = {
      ...baseQueryShowApiariesInfoByBearIdRequest,
    } as QueryShowApiariesInfoByBearIdRequest;
    if (object.bearId !== undefined && object.bearId !== null) {
      message.bearId = object.bearId;
    } else {
      message.bearId = 0;
    }
    return message;
  },
};

const baseQueryShowApiariesInfoByBearIdResponse: object = {};

export const QueryShowApiariesInfoByBearIdResponse = {
  encode(
    message: QueryShowApiariesInfoByBearIdResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.apiariesInfo) {
      QueryShowApiariesInfoByBearIdResponse_ApiaryInfo.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryShowApiariesInfoByBearIdResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryShowApiariesInfoByBearIdResponse,
    } as QueryShowApiariesInfoByBearIdResponse;
    message.apiariesInfo = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.apiariesInfo.push(
            QueryShowApiariesInfoByBearIdResponse_ApiaryInfo.decode(
              reader,
              reader.uint32()
            )
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryShowApiariesInfoByBearIdResponse {
    const message = {
      ...baseQueryShowApiariesInfoByBearIdResponse,
    } as QueryShowApiariesInfoByBearIdResponse;
    message.apiariesInfo = [];
    if (object.apiariesInfo !== undefined && object.apiariesInfo !== null) {
      for (const e of object.apiariesInfo) {
        message.apiariesInfo.push(
          QueryShowApiariesInfoByBearIdResponse_ApiaryInfo.fromJSON(e)
        );
      }
    }
    return message;
  },

  toJSON(message: QueryShowApiariesInfoByBearIdResponse): unknown {
    const obj: any = {};
    if (message.apiariesInfo) {
      obj.apiariesInfo = message.apiariesInfo.map((e) =>
        e
          ? QueryShowApiariesInfoByBearIdResponse_ApiaryInfo.toJSON(e)
          : undefined
      );
    } else {
      obj.apiariesInfo = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryShowApiariesInfoByBearIdResponse>
  ): QueryShowApiariesInfoByBearIdResponse {
    const message = {
      ...baseQueryShowApiariesInfoByBearIdResponse,
    } as QueryShowApiariesInfoByBearIdResponse;
    message.apiariesInfo = [];
    if (object.apiariesInfo !== undefined && object.apiariesInfo !== null) {
      for (const e of object.apiariesInfo) {
        message.apiariesInfo.push(
          QueryShowApiariesInfoByBearIdResponse_ApiaryInfo.fromPartial(e)
        );
      }
    }
    return message;
  },
};

const baseQueryShowApiariesInfoByBearIdResponse_ApiaryInfo: object = {
  id: 0,
  countHoney: "",
  bees: 0,
};

export const QueryShowApiariesInfoByBearIdResponse_ApiaryInfo = {
  encode(
    message: QueryShowApiariesInfoByBearIdResponse_ApiaryInfo,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.countHoney !== "") {
      writer.uint32(18).string(message.countHoney);
    }
    writer.uint32(26).fork();
    for (const v of message.bees) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.params !== undefined) {
      ApiaryParams.encode(message.params, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryShowApiariesInfoByBearIdResponse_ApiaryInfo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryShowApiariesInfoByBearIdResponse_ApiaryInfo,
    } as QueryShowApiariesInfoByBearIdResponse_ApiaryInfo;
    message.bees = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.countHoney = reader.string();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.bees.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.bees.push(longToNumber(reader.uint64() as Long));
          }
          break;
        case 4:
          message.params = ApiaryParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryShowApiariesInfoByBearIdResponse_ApiaryInfo {
    const message = {
      ...baseQueryShowApiariesInfoByBearIdResponse_ApiaryInfo,
    } as QueryShowApiariesInfoByBearIdResponse_ApiaryInfo;
    message.bees = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.countHoney !== undefined && object.countHoney !== null) {
      message.countHoney = String(object.countHoney);
    } else {
      message.countHoney = "";
    }
    if (object.bees !== undefined && object.bees !== null) {
      for (const e of object.bees) {
        message.bees.push(Number(e));
      }
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = ApiaryParams.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryShowApiariesInfoByBearIdResponse_ApiaryInfo): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.countHoney !== undefined && (obj.countHoney = message.countHoney);
    if (message.bees) {
      obj.bees = message.bees.map((e) => e);
    } else {
      obj.bees = [];
    }
    message.params !== undefined &&
      (obj.params = message.params
        ? ApiaryParams.toJSON(message.params)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryShowApiariesInfoByBearIdResponse_ApiaryInfo>
  ): QueryShowApiariesInfoByBearIdResponse_ApiaryInfo {
    const message = {
      ...baseQueryShowApiariesInfoByBearIdResponse_ApiaryInfo,
    } as QueryShowApiariesInfoByBearIdResponse_ApiaryInfo;
    message.bees = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.countHoney !== undefined && object.countHoney !== null) {
      message.countHoney = object.countHoney;
    } else {
      message.countHoney = "";
    }
    if (object.bees !== undefined && object.bees !== null) {
      for (const e of object.bees) {
        message.bees.push(e);
      }
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = ApiaryParams.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryShowHoneyPowerByApiaryIdRequest: object = { apiaryId: 0 };

export const QueryShowHoneyPowerByApiaryIdRequest = {
  encode(
    message: QueryShowHoneyPowerByApiaryIdRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.apiaryId !== 0) {
      writer.uint32(8).uint64(message.apiaryId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryShowHoneyPowerByApiaryIdRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryShowHoneyPowerByApiaryIdRequest,
    } as QueryShowHoneyPowerByApiaryIdRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.apiaryId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryShowHoneyPowerByApiaryIdRequest {
    const message = {
      ...baseQueryShowHoneyPowerByApiaryIdRequest,
    } as QueryShowHoneyPowerByApiaryIdRequest;
    if (object.apiaryId !== undefined && object.apiaryId !== null) {
      message.apiaryId = Number(object.apiaryId);
    } else {
      message.apiaryId = 0;
    }
    return message;
  },

  toJSON(message: QueryShowHoneyPowerByApiaryIdRequest): unknown {
    const obj: any = {};
    message.apiaryId !== undefined && (obj.apiaryId = message.apiaryId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryShowHoneyPowerByApiaryIdRequest>
  ): QueryShowHoneyPowerByApiaryIdRequest {
    const message = {
      ...baseQueryShowHoneyPowerByApiaryIdRequest,
    } as QueryShowHoneyPowerByApiaryIdRequest;
    if (object.apiaryId !== undefined && object.apiaryId !== null) {
      message.apiaryId = object.apiaryId;
    } else {
      message.apiaryId = 0;
    }
    return message;
  },
};

const baseQueryShowHoneyPowerByApiaryIdResponse: object = { honeyPower: "" };

export const QueryShowHoneyPowerByApiaryIdResponse = {
  encode(
    message: QueryShowHoneyPowerByApiaryIdResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.honeyPower !== "") {
      writer.uint32(10).string(message.honeyPower);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryShowHoneyPowerByApiaryIdResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryShowHoneyPowerByApiaryIdResponse,
    } as QueryShowHoneyPowerByApiaryIdResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.honeyPower = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryShowHoneyPowerByApiaryIdResponse {
    const message = {
      ...baseQueryShowHoneyPowerByApiaryIdResponse,
    } as QueryShowHoneyPowerByApiaryIdResponse;
    if (object.honeyPower !== undefined && object.honeyPower !== null) {
      message.honeyPower = String(object.honeyPower);
    } else {
      message.honeyPower = "";
    }
    return message;
  },

  toJSON(message: QueryShowHoneyPowerByApiaryIdResponse): unknown {
    const obj: any = {};
    message.honeyPower !== undefined && (obj.honeyPower = message.honeyPower);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryShowHoneyPowerByApiaryIdResponse>
  ): QueryShowHoneyPowerByApiaryIdResponse {
    const message = {
      ...baseQueryShowHoneyPowerByApiaryIdResponse,
    } as QueryShowHoneyPowerByApiaryIdResponse;
    if (object.honeyPower !== undefined && object.honeyPower !== null) {
      message.honeyPower = object.honeyPower;
    } else {
      message.honeyPower = "";
    }
    return message;
  },
};

const baseQueryShowHoneyPowerByBeeTypeRequest: object = { beeType: "" };

export const QueryShowHoneyPowerByBeeTypeRequest = {
  encode(
    message: QueryShowHoneyPowerByBeeTypeRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.beeType !== "") {
      writer.uint32(10).string(message.beeType);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryShowHoneyPowerByBeeTypeRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryShowHoneyPowerByBeeTypeRequest,
    } as QueryShowHoneyPowerByBeeTypeRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.beeType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryShowHoneyPowerByBeeTypeRequest {
    const message = {
      ...baseQueryShowHoneyPowerByBeeTypeRequest,
    } as QueryShowHoneyPowerByBeeTypeRequest;
    if (object.beeType !== undefined && object.beeType !== null) {
      message.beeType = String(object.beeType);
    } else {
      message.beeType = "";
    }
    return message;
  },

  toJSON(message: QueryShowHoneyPowerByBeeTypeRequest): unknown {
    const obj: any = {};
    message.beeType !== undefined && (obj.beeType = message.beeType);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryShowHoneyPowerByBeeTypeRequest>
  ): QueryShowHoneyPowerByBeeTypeRequest {
    const message = {
      ...baseQueryShowHoneyPowerByBeeTypeRequest,
    } as QueryShowHoneyPowerByBeeTypeRequest;
    if (object.beeType !== undefined && object.beeType !== null) {
      message.beeType = object.beeType;
    } else {
      message.beeType = "";
    }
    return message;
  },
};

const baseQueryShowHoneyPowerByBeeTypeResponse: object = { honeyPower: "" };

export const QueryShowHoneyPowerByBeeTypeResponse = {
  encode(
    message: QueryShowHoneyPowerByBeeTypeResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.honeyPower !== "") {
      writer.uint32(10).string(message.honeyPower);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryShowHoneyPowerByBeeTypeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryShowHoneyPowerByBeeTypeResponse,
    } as QueryShowHoneyPowerByBeeTypeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.honeyPower = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryShowHoneyPowerByBeeTypeResponse {
    const message = {
      ...baseQueryShowHoneyPowerByBeeTypeResponse,
    } as QueryShowHoneyPowerByBeeTypeResponse;
    if (object.honeyPower !== undefined && object.honeyPower !== null) {
      message.honeyPower = String(object.honeyPower);
    } else {
      message.honeyPower = "";
    }
    return message;
  },

  toJSON(message: QueryShowHoneyPowerByBeeTypeResponse): unknown {
    const obj: any = {};
    message.honeyPower !== undefined && (obj.honeyPower = message.honeyPower);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryShowHoneyPowerByBeeTypeResponse>
  ): QueryShowHoneyPowerByBeeTypeResponse {
    const message = {
      ...baseQueryShowHoneyPowerByBeeTypeResponse,
    } as QueryShowHoneyPowerByBeeTypeResponse;
    if (object.honeyPower !== undefined && object.honeyPower !== null) {
      message.honeyPower = object.honeyPower;
    } else {
      message.honeyPower = "";
    }
    return message;
  },
};

const baseQueryShowHoneyPowerByBearIdRequest: object = { bearId: 0 };

export const QueryShowHoneyPowerByBearIdRequest = {
  encode(
    message: QueryShowHoneyPowerByBearIdRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.bearId !== 0) {
      writer.uint32(8).uint64(message.bearId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryShowHoneyPowerByBearIdRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryShowHoneyPowerByBearIdRequest,
    } as QueryShowHoneyPowerByBearIdRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bearId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryShowHoneyPowerByBearIdRequest {
    const message = {
      ...baseQueryShowHoneyPowerByBearIdRequest,
    } as QueryShowHoneyPowerByBearIdRequest;
    if (object.bearId !== undefined && object.bearId !== null) {
      message.bearId = Number(object.bearId);
    } else {
      message.bearId = 0;
    }
    return message;
  },

  toJSON(message: QueryShowHoneyPowerByBearIdRequest): unknown {
    const obj: any = {};
    message.bearId !== undefined && (obj.bearId = message.bearId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryShowHoneyPowerByBearIdRequest>
  ): QueryShowHoneyPowerByBearIdRequest {
    const message = {
      ...baseQueryShowHoneyPowerByBearIdRequest,
    } as QueryShowHoneyPowerByBearIdRequest;
    if (object.bearId !== undefined && object.bearId !== null) {
      message.bearId = object.bearId;
    } else {
      message.bearId = 0;
    }
    return message;
  },
};

const baseQueryShowHoneyPowerByBearIdResponse: object = { honeyPower: "" };

export const QueryShowHoneyPowerByBearIdResponse = {
  encode(
    message: QueryShowHoneyPowerByBearIdResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.honeyPower !== "") {
      writer.uint32(10).string(message.honeyPower);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryShowHoneyPowerByBearIdResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryShowHoneyPowerByBearIdResponse,
    } as QueryShowHoneyPowerByBearIdResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.honeyPower = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryShowHoneyPowerByBearIdResponse {
    const message = {
      ...baseQueryShowHoneyPowerByBearIdResponse,
    } as QueryShowHoneyPowerByBearIdResponse;
    if (object.honeyPower !== undefined && object.honeyPower !== null) {
      message.honeyPower = String(object.honeyPower);
    } else {
      message.honeyPower = "";
    }
    return message;
  },

  toJSON(message: QueryShowHoneyPowerByBearIdResponse): unknown {
    const obj: any = {};
    message.honeyPower !== undefined && (obj.honeyPower = message.honeyPower);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryShowHoneyPowerByBearIdResponse>
  ): QueryShowHoneyPowerByBearIdResponse {
    const message = {
      ...baseQueryShowHoneyPowerByBearIdResponse,
    } as QueryShowHoneyPowerByBearIdResponse;
    if (object.honeyPower !== undefined && object.honeyPower !== null) {
      message.honeyPower = object.honeyPower;
    } else {
      message.honeyPower = "";
    }
    return message;
  },
};

const baseQueryShowTreesInfoByBearIdRequest: object = { bearId: 0 };

export const QueryShowTreesInfoByBearIdRequest = {
  encode(
    message: QueryShowTreesInfoByBearIdRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.bearId !== 0) {
      writer.uint32(8).uint64(message.bearId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryShowTreesInfoByBearIdRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryShowTreesInfoByBearIdRequest,
    } as QueryShowTreesInfoByBearIdRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bearId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryShowTreesInfoByBearIdRequest {
    const message = {
      ...baseQueryShowTreesInfoByBearIdRequest,
    } as QueryShowTreesInfoByBearIdRequest;
    if (object.bearId !== undefined && object.bearId !== null) {
      message.bearId = Number(object.bearId);
    } else {
      message.bearId = 0;
    }
    return message;
  },

  toJSON(message: QueryShowTreesInfoByBearIdRequest): unknown {
    const obj: any = {};
    message.bearId !== undefined && (obj.bearId = message.bearId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryShowTreesInfoByBearIdRequest>
  ): QueryShowTreesInfoByBearIdRequest {
    const message = {
      ...baseQueryShowTreesInfoByBearIdRequest,
    } as QueryShowTreesInfoByBearIdRequest;
    if (object.bearId !== undefined && object.bearId !== null) {
      message.bearId = object.bearId;
    } else {
      message.bearId = 0;
    }
    return message;
  },
};

const baseQueryShowTreesInfoByBearIdResponse: object = {};

export const QueryShowTreesInfoByBearIdResponse = {
  encode(
    message: QueryShowTreesInfoByBearIdResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.treesInfo) {
      QueryShowTreesInfoByBearIdResponse_TreeInfo.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryShowTreesInfoByBearIdResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryShowTreesInfoByBearIdResponse,
    } as QueryShowTreesInfoByBearIdResponse;
    message.treesInfo = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.treesInfo.push(
            QueryShowTreesInfoByBearIdResponse_TreeInfo.decode(
              reader,
              reader.uint32()
            )
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryShowTreesInfoByBearIdResponse {
    const message = {
      ...baseQueryShowTreesInfoByBearIdResponse,
    } as QueryShowTreesInfoByBearIdResponse;
    message.treesInfo = [];
    if (object.treesInfo !== undefined && object.treesInfo !== null) {
      for (const e of object.treesInfo) {
        message.treesInfo.push(
          QueryShowTreesInfoByBearIdResponse_TreeInfo.fromJSON(e)
        );
      }
    }
    return message;
  },

  toJSON(message: QueryShowTreesInfoByBearIdResponse): unknown {
    const obj: any = {};
    if (message.treesInfo) {
      obj.treesInfo = message.treesInfo.map((e) =>
        e ? QueryShowTreesInfoByBearIdResponse_TreeInfo.toJSON(e) : undefined
      );
    } else {
      obj.treesInfo = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryShowTreesInfoByBearIdResponse>
  ): QueryShowTreesInfoByBearIdResponse {
    const message = {
      ...baseQueryShowTreesInfoByBearIdResponse,
    } as QueryShowTreesInfoByBearIdResponse;
    message.treesInfo = [];
    if (object.treesInfo !== undefined && object.treesInfo !== null) {
      for (const e of object.treesInfo) {
        message.treesInfo.push(
          QueryShowTreesInfoByBearIdResponse_TreeInfo.fromPartial(e)
        );
      }
    }
    return message;
  },
};

const baseQueryShowTreesInfoByBearIdResponse_TreeInfo: object = { id: 0 };

export const QueryShowTreesInfoByBearIdResponse_TreeInfo = {
  encode(
    message: QueryShowTreesInfoByBearIdResponse_TreeInfo,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.params !== undefined) {
      TreeParams.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryShowTreesInfoByBearIdResponse_TreeInfo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryShowTreesInfoByBearIdResponse_TreeInfo,
    } as QueryShowTreesInfoByBearIdResponse_TreeInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.params = TreeParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryShowTreesInfoByBearIdResponse_TreeInfo {
    const message = {
      ...baseQueryShowTreesInfoByBearIdResponse_TreeInfo,
    } as QueryShowTreesInfoByBearIdResponse_TreeInfo;
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
    return message;
  },

  toJSON(message: QueryShowTreesInfoByBearIdResponse_TreeInfo): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.params !== undefined &&
      (obj.params = message.params
        ? TreeParams.toJSON(message.params)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryShowTreesInfoByBearIdResponse_TreeInfo>
  ): QueryShowTreesInfoByBearIdResponse_TreeInfo {
    const message = {
      ...baseQueryShowTreesInfoByBearIdResponse_TreeInfo,
    } as QueryShowTreesInfoByBearIdResponse_TreeInfo;
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
  /** Queries a Fields by id. */
  Fields(request: QueryGetFieldsRequest): Promise<QueryGetFieldsResponse>;
  /** Queries a list of Fields items. */
  FieldsAll(request: QueryAllFieldsRequest): Promise<QueryAllFieldsResponse>;
  /** Queries a Trees by id. */
  Trees(request: QueryGetTreesRequest): Promise<QueryGetTreesResponse>;
  /** Queries a list of Trees items. */
  TreesAll(request: QueryAllTreesRequest): Promise<QueryAllTreesResponse>;
  /** Queries a Decorations by id. */
  Decorations(
    request: QueryGetDecorationsRequest
  ): Promise<QueryGetDecorationsResponse>;
  /** Queries a list of Decorations items. */
  DecorationsAll(
    request: QueryAllDecorationsRequest
  ): Promise<QueryAllDecorationsResponse>;
  /** Queries a Apiaries by id. */
  Apiaries(request: QueryGetApiariesRequest): Promise<QueryGetApiariesResponse>;
  /** Queries a list of Apiaries items. */
  ApiariesAll(
    request: QueryAllApiariesRequest
  ): Promise<QueryAllApiariesResponse>;
  /** Queries a Bees by id. */
  Bees(request: QueryGetBeesRequest): Promise<QueryGetBeesResponse>;
  /** Queries a list of Bees items. */
  BeesAll(request: QueryAllBeesRequest): Promise<QueryAllBeesResponse>;
  /** Queries a list of CalculateHoneyInApiary items. */
  CalculateHoneyInApiary(
    request: QueryCalculateHoneyInApiaryRequest
  ): Promise<QueryCalculateHoneyInApiaryResponse>;
  /** Queries a AirInfo by index. */
  AirInfo(request: QueryGetAirInfoRequest): Promise<QueryGetAirInfoResponse>;
  /** Queries a list of ShowLastAirInfo items. */
  ShowLastAirInfo(
    request: QueryShowLastAirInfoRequest
  ): Promise<QueryShowLastAirInfoResponse>;
  /** Queries a list of ShowApiariesInfoByBearId items. */
  ShowApiariesInfoByBearId(
    request: QueryShowApiariesInfoByBearIdRequest
  ): Promise<QueryShowApiariesInfoByBearIdResponse>;
  /** Queries a list of ShowHoneyPowerByApiaryId items. */
  ShowHoneyPowerByApiaryId(
    request: QueryShowHoneyPowerByApiaryIdRequest
  ): Promise<QueryShowHoneyPowerByApiaryIdResponse>;
  /** Queries a list of ShowHoneyPowerByBeeType items. */
  ShowHoneyPowerByBeeType(
    request: QueryShowHoneyPowerByBeeTypeRequest
  ): Promise<QueryShowHoneyPowerByBeeTypeResponse>;
  /** Queries a list of ShowHoneyPowerByBearId items. */
  ShowHoneyPowerByBearId(
    request: QueryShowHoneyPowerByBearIdRequest
  ): Promise<QueryShowHoneyPowerByBearIdResponse>;
  /** Queries a list of ShowTreesInfoByBearId items. */
  ShowTreesInfoByBearId(
    request: QueryShowTreesInfoByBearIdRequest
  ): Promise<QueryShowTreesInfoByBearIdResponse>;
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

  Fields(request: QueryGetFieldsRequest): Promise<QueryGetFieldsResponse> {
    const data = QueryGetFieldsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "MonetaToday.honeywood.bears.Query",
      "Fields",
      data
    );
    return promise.then((data) =>
      QueryGetFieldsResponse.decode(new Reader(data))
    );
  }

  FieldsAll(request: QueryAllFieldsRequest): Promise<QueryAllFieldsResponse> {
    const data = QueryAllFieldsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "MonetaToday.honeywood.bears.Query",
      "FieldsAll",
      data
    );
    return promise.then((data) =>
      QueryAllFieldsResponse.decode(new Reader(data))
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

  Decorations(
    request: QueryGetDecorationsRequest
  ): Promise<QueryGetDecorationsResponse> {
    const data = QueryGetDecorationsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "MonetaToday.honeywood.bears.Query",
      "Decorations",
      data
    );
    return promise.then((data) =>
      QueryGetDecorationsResponse.decode(new Reader(data))
    );
  }

  DecorationsAll(
    request: QueryAllDecorationsRequest
  ): Promise<QueryAllDecorationsResponse> {
    const data = QueryAllDecorationsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "MonetaToday.honeywood.bears.Query",
      "DecorationsAll",
      data
    );
    return promise.then((data) =>
      QueryAllDecorationsResponse.decode(new Reader(data))
    );
  }

  Apiaries(
    request: QueryGetApiariesRequest
  ): Promise<QueryGetApiariesResponse> {
    const data = QueryGetApiariesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "MonetaToday.honeywood.bears.Query",
      "Apiaries",
      data
    );
    return promise.then((data) =>
      QueryGetApiariesResponse.decode(new Reader(data))
    );
  }

  ApiariesAll(
    request: QueryAllApiariesRequest
  ): Promise<QueryAllApiariesResponse> {
    const data = QueryAllApiariesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "MonetaToday.honeywood.bears.Query",
      "ApiariesAll",
      data
    );
    return promise.then((data) =>
      QueryAllApiariesResponse.decode(new Reader(data))
    );
  }

  Bees(request: QueryGetBeesRequest): Promise<QueryGetBeesResponse> {
    const data = QueryGetBeesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "MonetaToday.honeywood.bears.Query",
      "Bees",
      data
    );
    return promise.then((data) =>
      QueryGetBeesResponse.decode(new Reader(data))
    );
  }

  BeesAll(request: QueryAllBeesRequest): Promise<QueryAllBeesResponse> {
    const data = QueryAllBeesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "MonetaToday.honeywood.bears.Query",
      "BeesAll",
      data
    );
    return promise.then((data) =>
      QueryAllBeesResponse.decode(new Reader(data))
    );
  }

  CalculateHoneyInApiary(
    request: QueryCalculateHoneyInApiaryRequest
  ): Promise<QueryCalculateHoneyInApiaryResponse> {
    const data = QueryCalculateHoneyInApiaryRequest.encode(request).finish();
    const promise = this.rpc.request(
      "MonetaToday.honeywood.bears.Query",
      "CalculateHoneyInApiary",
      data
    );
    return promise.then((data) =>
      QueryCalculateHoneyInApiaryResponse.decode(new Reader(data))
    );
  }

  AirInfo(request: QueryGetAirInfoRequest): Promise<QueryGetAirInfoResponse> {
    const data = QueryGetAirInfoRequest.encode(request).finish();
    const promise = this.rpc.request(
      "MonetaToday.honeywood.bears.Query",
      "AirInfo",
      data
    );
    return promise.then((data) =>
      QueryGetAirInfoResponse.decode(new Reader(data))
    );
  }

  ShowLastAirInfo(
    request: QueryShowLastAirInfoRequest
  ): Promise<QueryShowLastAirInfoResponse> {
    const data = QueryShowLastAirInfoRequest.encode(request).finish();
    const promise = this.rpc.request(
      "MonetaToday.honeywood.bears.Query",
      "ShowLastAirInfo",
      data
    );
    return promise.then((data) =>
      QueryShowLastAirInfoResponse.decode(new Reader(data))
    );
  }

  ShowApiariesInfoByBearId(
    request: QueryShowApiariesInfoByBearIdRequest
  ): Promise<QueryShowApiariesInfoByBearIdResponse> {
    const data = QueryShowApiariesInfoByBearIdRequest.encode(request).finish();
    const promise = this.rpc.request(
      "MonetaToday.honeywood.bears.Query",
      "ShowApiariesInfoByBearId",
      data
    );
    return promise.then((data) =>
      QueryShowApiariesInfoByBearIdResponse.decode(new Reader(data))
    );
  }

  ShowHoneyPowerByApiaryId(
    request: QueryShowHoneyPowerByApiaryIdRequest
  ): Promise<QueryShowHoneyPowerByApiaryIdResponse> {
    const data = QueryShowHoneyPowerByApiaryIdRequest.encode(request).finish();
    const promise = this.rpc.request(
      "MonetaToday.honeywood.bears.Query",
      "ShowHoneyPowerByApiaryId",
      data
    );
    return promise.then((data) =>
      QueryShowHoneyPowerByApiaryIdResponse.decode(new Reader(data))
    );
  }

  ShowHoneyPowerByBeeType(
    request: QueryShowHoneyPowerByBeeTypeRequest
  ): Promise<QueryShowHoneyPowerByBeeTypeResponse> {
    const data = QueryShowHoneyPowerByBeeTypeRequest.encode(request).finish();
    const promise = this.rpc.request(
      "MonetaToday.honeywood.bears.Query",
      "ShowHoneyPowerByBeeType",
      data
    );
    return promise.then((data) =>
      QueryShowHoneyPowerByBeeTypeResponse.decode(new Reader(data))
    );
  }

  ShowHoneyPowerByBearId(
    request: QueryShowHoneyPowerByBearIdRequest
  ): Promise<QueryShowHoneyPowerByBearIdResponse> {
    const data = QueryShowHoneyPowerByBearIdRequest.encode(request).finish();
    const promise = this.rpc.request(
      "MonetaToday.honeywood.bears.Query",
      "ShowHoneyPowerByBearId",
      data
    );
    return promise.then((data) =>
      QueryShowHoneyPowerByBearIdResponse.decode(new Reader(data))
    );
  }

  ShowTreesInfoByBearId(
    request: QueryShowTreesInfoByBearIdRequest
  ): Promise<QueryShowTreesInfoByBearIdResponse> {
    const data = QueryShowTreesInfoByBearIdRequest.encode(request).finish();
    const promise = this.rpc.request(
      "MonetaToday.honeywood.bears.Query",
      "ShowTreesInfoByBearId",
      data
    );
    return promise.then((data) =>
      QueryShowTreesInfoByBearIdResponse.decode(new Reader(data))
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
