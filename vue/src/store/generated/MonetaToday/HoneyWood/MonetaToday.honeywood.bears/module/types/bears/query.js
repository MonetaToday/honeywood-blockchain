/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Params } from "../bears/params";
import { BearNames } from "../bears/bear_names";
import { PageRequest, PageResponse, } from "../cosmos/base/query/v1beta1/pagination";
import { Bears } from "../bears/bears";
import { AddressBears } from "../bears/address_bears";
import { Fields } from "../bears/fields";
import { Trees } from "../bears/trees";
import { Decorations } from "../bears/decorations";
import { Apiaries } from "../bears/apiaries";
import { Bees } from "../bears/bees";
import { AirInfo } from "../bears/air_info";
export const protobufPackage = "MonetaToday.honeywood.bears";
const baseQueryParamsRequest = {};
export const QueryParamsRequest = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryParamsRequest };
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
    fromJSON(_) {
        const message = { ...baseQueryParamsRequest };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseQueryParamsRequest };
        return message;
    },
};
const baseQueryParamsResponse = {};
export const QueryParamsResponse = {
    encode(message, writer = Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryParamsResponse };
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
    fromJSON(object) {
        const message = { ...baseQueryParamsResponse };
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryParamsResponse };
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        return message;
    },
};
const baseQueryGetBearNamesRequest = { name: "" };
export const QueryGetBearNamesRequest = {
    encode(message, writer = Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetBearNamesRequest,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryGetBearNamesRequest,
        };
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetBearNamesRequest,
        };
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = "";
        }
        return message;
    },
};
const baseQueryGetBearNamesResponse = {};
export const QueryGetBearNamesResponse = {
    encode(message, writer = Writer.create()) {
        if (message.bearNames !== undefined) {
            BearNames.encode(message.bearNames, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetBearNamesResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryGetBearNamesResponse,
        };
        if (object.bearNames !== undefined && object.bearNames !== null) {
            message.bearNames = BearNames.fromJSON(object.bearNames);
        }
        else {
            message.bearNames = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.bearNames !== undefined &&
            (obj.bearNames = message.bearNames
                ? BearNames.toJSON(message.bearNames)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetBearNamesResponse,
        };
        if (object.bearNames !== undefined && object.bearNames !== null) {
            message.bearNames = BearNames.fromPartial(object.bearNames);
        }
        else {
            message.bearNames = undefined;
        }
        return message;
    },
};
const baseQueryAllBearNamesRequest = {};
export const QueryAllBearNamesRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllBearNamesRequest,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllBearNamesRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllBearNamesRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllBearNamesResponse = {};
export const QueryAllBearNamesResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.bearNames) {
            BearNames.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllBearNamesResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllBearNamesResponse,
        };
        message.bearNames = [];
        if (object.bearNames !== undefined && object.bearNames !== null) {
            for (const e of object.bearNames) {
                message.bearNames.push(BearNames.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.bearNames) {
            obj.bearNames = message.bearNames.map((e) => e ? BearNames.toJSON(e) : undefined);
        }
        else {
            obj.bearNames = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllBearNamesResponse,
        };
        message.bearNames = [];
        if (object.bearNames !== undefined && object.bearNames !== null) {
            for (const e of object.bearNames) {
                message.bearNames.push(BearNames.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryGetBearsRequest = { id: 0 };
export const QueryGetBearsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetBearsRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetBearsRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetBearsRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseQueryGetBearsResponse = {};
export const QueryGetBearsResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Bears !== undefined) {
            Bears.encode(message.Bears, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetBearsResponse };
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
    fromJSON(object) {
        const message = { ...baseQueryGetBearsResponse };
        if (object.Bears !== undefined && object.Bears !== null) {
            message.Bears = Bears.fromJSON(object.Bears);
        }
        else {
            message.Bears = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Bears !== undefined &&
            (obj.Bears = message.Bears ? Bears.toJSON(message.Bears) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetBearsResponse };
        if (object.Bears !== undefined && object.Bears !== null) {
            message.Bears = Bears.fromPartial(object.Bears);
        }
        else {
            message.Bears = undefined;
        }
        return message;
    },
};
const baseQueryAllBearsRequest = {};
export const QueryAllBearsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllBearsRequest };
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
    fromJSON(object) {
        const message = { ...baseQueryAllBearsRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllBearsRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllBearsResponse = {};
export const QueryAllBearsResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.Bears) {
            Bears.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllBearsResponse };
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
    fromJSON(object) {
        const message = { ...baseQueryAllBearsResponse };
        message.Bears = [];
        if (object.Bears !== undefined && object.Bears !== null) {
            for (const e of object.Bears) {
                message.Bears.push(Bears.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.Bears) {
            obj.Bears = message.Bears.map((e) => (e ? Bears.toJSON(e) : undefined));
        }
        else {
            obj.Bears = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllBearsResponse };
        message.Bears = [];
        if (object.Bears !== undefined && object.Bears !== null) {
            for (const e of object.Bears) {
                message.Bears.push(Bears.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryGetAddressBearsRequest = { address: "" };
export const QueryGetAddressBearsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetAddressBearsRequest,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryGetAddressBearsRequest,
        };
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetAddressBearsRequest,
        };
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = "";
        }
        return message;
    },
};
const baseQueryGetAddressBearsResponse = {};
export const QueryGetAddressBearsResponse = {
    encode(message, writer = Writer.create()) {
        if (message.addressBears !== undefined) {
            AddressBears.encode(message.addressBears, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetAddressBearsResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryGetAddressBearsResponse,
        };
        if (object.addressBears !== undefined && object.addressBears !== null) {
            message.addressBears = AddressBears.fromJSON(object.addressBears);
        }
        else {
            message.addressBears = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.addressBears !== undefined &&
            (obj.addressBears = message.addressBears
                ? AddressBears.toJSON(message.addressBears)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetAddressBearsResponse,
        };
        if (object.addressBears !== undefined && object.addressBears !== null) {
            message.addressBears = AddressBears.fromPartial(object.addressBears);
        }
        else {
            message.addressBears = undefined;
        }
        return message;
    },
};
const baseQueryAllAddressBearsRequest = {};
export const QueryAllAddressBearsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllAddressBearsRequest,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllAddressBearsRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllAddressBearsRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllAddressBearsResponse = {};
export const QueryAllAddressBearsResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.addressBears) {
            AddressBears.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllAddressBearsResponse,
        };
        message.addressBears = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addressBears.push(AddressBears.decode(reader, reader.uint32()));
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllAddressBearsResponse,
        };
        message.addressBears = [];
        if (object.addressBears !== undefined && object.addressBears !== null) {
            for (const e of object.addressBears) {
                message.addressBears.push(AddressBears.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.addressBears) {
            obj.addressBears = message.addressBears.map((e) => e ? AddressBears.toJSON(e) : undefined);
        }
        else {
            obj.addressBears = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllAddressBearsResponse,
        };
        message.addressBears = [];
        if (object.addressBears !== undefined && object.addressBears !== null) {
            for (const e of object.addressBears) {
                message.addressBears.push(AddressBears.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryGetFieldsRequest = { id: 0 };
export const QueryGetFieldsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetFieldsRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetFieldsRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetFieldsRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseQueryGetFieldsResponse = {};
export const QueryGetFieldsResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Fields !== undefined) {
            Fields.encode(message.Fields, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetFieldsResponse };
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
    fromJSON(object) {
        const message = { ...baseQueryGetFieldsResponse };
        if (object.Fields !== undefined && object.Fields !== null) {
            message.Fields = Fields.fromJSON(object.Fields);
        }
        else {
            message.Fields = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Fields !== undefined &&
            (obj.Fields = message.Fields ? Fields.toJSON(message.Fields) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetFieldsResponse };
        if (object.Fields !== undefined && object.Fields !== null) {
            message.Fields = Fields.fromPartial(object.Fields);
        }
        else {
            message.Fields = undefined;
        }
        return message;
    },
};
const baseQueryAllFieldsRequest = {};
export const QueryAllFieldsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllFieldsRequest };
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
    fromJSON(object) {
        const message = { ...baseQueryAllFieldsRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllFieldsRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllFieldsResponse = {};
export const QueryAllFieldsResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.Fields) {
            Fields.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllFieldsResponse };
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
    fromJSON(object) {
        const message = { ...baseQueryAllFieldsResponse };
        message.Fields = [];
        if (object.Fields !== undefined && object.Fields !== null) {
            for (const e of object.Fields) {
                message.Fields.push(Fields.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.Fields) {
            obj.Fields = message.Fields.map((e) => e ? Fields.toJSON(e) : undefined);
        }
        else {
            obj.Fields = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllFieldsResponse };
        message.Fields = [];
        if (object.Fields !== undefined && object.Fields !== null) {
            for (const e of object.Fields) {
                message.Fields.push(Fields.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryGetTreesRequest = { id: 0 };
export const QueryGetTreesRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetTreesRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetTreesRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetTreesRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseQueryGetTreesResponse = {};
export const QueryGetTreesResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Trees !== undefined) {
            Trees.encode(message.Trees, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetTreesResponse };
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
    fromJSON(object) {
        const message = { ...baseQueryGetTreesResponse };
        if (object.Trees !== undefined && object.Trees !== null) {
            message.Trees = Trees.fromJSON(object.Trees);
        }
        else {
            message.Trees = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Trees !== undefined &&
            (obj.Trees = message.Trees ? Trees.toJSON(message.Trees) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetTreesResponse };
        if (object.Trees !== undefined && object.Trees !== null) {
            message.Trees = Trees.fromPartial(object.Trees);
        }
        else {
            message.Trees = undefined;
        }
        return message;
    },
};
const baseQueryAllTreesRequest = {};
export const QueryAllTreesRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllTreesRequest };
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
    fromJSON(object) {
        const message = { ...baseQueryAllTreesRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllTreesRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllTreesResponse = {};
export const QueryAllTreesResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.Trees) {
            Trees.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllTreesResponse };
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
    fromJSON(object) {
        const message = { ...baseQueryAllTreesResponse };
        message.Trees = [];
        if (object.Trees !== undefined && object.Trees !== null) {
            for (const e of object.Trees) {
                message.Trees.push(Trees.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.Trees) {
            obj.Trees = message.Trees.map((e) => (e ? Trees.toJSON(e) : undefined));
        }
        else {
            obj.Trees = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllTreesResponse };
        message.Trees = [];
        if (object.Trees !== undefined && object.Trees !== null) {
            for (const e of object.Trees) {
                message.Trees.push(Trees.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryGetDecorationsRequest = { id: 0 };
export const QueryGetDecorationsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetDecorationsRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryGetDecorationsRequest,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetDecorationsRequest,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseQueryGetDecorationsResponse = {};
export const QueryGetDecorationsResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Decorations !== undefined) {
            Decorations.encode(message.Decorations, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetDecorationsResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryGetDecorationsResponse,
        };
        if (object.Decorations !== undefined && object.Decorations !== null) {
            message.Decorations = Decorations.fromJSON(object.Decorations);
        }
        else {
            message.Decorations = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Decorations !== undefined &&
            (obj.Decorations = message.Decorations
                ? Decorations.toJSON(message.Decorations)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetDecorationsResponse,
        };
        if (object.Decorations !== undefined && object.Decorations !== null) {
            message.Decorations = Decorations.fromPartial(object.Decorations);
        }
        else {
            message.Decorations = undefined;
        }
        return message;
    },
};
const baseQueryAllDecorationsRequest = {};
export const QueryAllDecorationsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllDecorationsRequest,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllDecorationsRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllDecorationsRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllDecorationsResponse = {};
export const QueryAllDecorationsResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.Decorations) {
            Decorations.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllDecorationsResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllDecorationsResponse,
        };
        message.Decorations = [];
        if (object.Decorations !== undefined && object.Decorations !== null) {
            for (const e of object.Decorations) {
                message.Decorations.push(Decorations.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.Decorations) {
            obj.Decorations = message.Decorations.map((e) => e ? Decorations.toJSON(e) : undefined);
        }
        else {
            obj.Decorations = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllDecorationsResponse,
        };
        message.Decorations = [];
        if (object.Decorations !== undefined && object.Decorations !== null) {
            for (const e of object.Decorations) {
                message.Decorations.push(Decorations.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryGetApiariesRequest = { id: 0 };
export const QueryGetApiariesRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetApiariesRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryGetApiariesRequest,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetApiariesRequest,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseQueryGetApiariesResponse = {};
export const QueryGetApiariesResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Apiaries !== undefined) {
            Apiaries.encode(message.Apiaries, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetApiariesResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryGetApiariesResponse,
        };
        if (object.Apiaries !== undefined && object.Apiaries !== null) {
            message.Apiaries = Apiaries.fromJSON(object.Apiaries);
        }
        else {
            message.Apiaries = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Apiaries !== undefined &&
            (obj.Apiaries = message.Apiaries
                ? Apiaries.toJSON(message.Apiaries)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetApiariesResponse,
        };
        if (object.Apiaries !== undefined && object.Apiaries !== null) {
            message.Apiaries = Apiaries.fromPartial(object.Apiaries);
        }
        else {
            message.Apiaries = undefined;
        }
        return message;
    },
};
const baseQueryAllApiariesRequest = {};
export const QueryAllApiariesRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllApiariesRequest,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllApiariesRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllApiariesRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllApiariesResponse = {};
export const QueryAllApiariesResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.Apiaries) {
            Apiaries.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllApiariesResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllApiariesResponse,
        };
        message.Apiaries = [];
        if (object.Apiaries !== undefined && object.Apiaries !== null) {
            for (const e of object.Apiaries) {
                message.Apiaries.push(Apiaries.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.Apiaries) {
            obj.Apiaries = message.Apiaries.map((e) => e ? Apiaries.toJSON(e) : undefined);
        }
        else {
            obj.Apiaries = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllApiariesResponse,
        };
        message.Apiaries = [];
        if (object.Apiaries !== undefined && object.Apiaries !== null) {
            for (const e of object.Apiaries) {
                message.Apiaries.push(Apiaries.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryGetBeesRequest = { id: 0 };
export const QueryGetBeesRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetBeesRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetBeesRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetBeesRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseQueryGetBeesResponse = {};
export const QueryGetBeesResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Bees !== undefined) {
            Bees.encode(message.Bees, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetBeesResponse };
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
    fromJSON(object) {
        const message = { ...baseQueryGetBeesResponse };
        if (object.Bees !== undefined && object.Bees !== null) {
            message.Bees = Bees.fromJSON(object.Bees);
        }
        else {
            message.Bees = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Bees !== undefined &&
            (obj.Bees = message.Bees ? Bees.toJSON(message.Bees) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetBeesResponse };
        if (object.Bees !== undefined && object.Bees !== null) {
            message.Bees = Bees.fromPartial(object.Bees);
        }
        else {
            message.Bees = undefined;
        }
        return message;
    },
};
const baseQueryAllBeesRequest = {};
export const QueryAllBeesRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllBeesRequest };
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
    fromJSON(object) {
        const message = { ...baseQueryAllBeesRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllBeesRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllBeesResponse = {};
export const QueryAllBeesResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.Bees) {
            Bees.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllBeesResponse };
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
    fromJSON(object) {
        const message = { ...baseQueryAllBeesResponse };
        message.Bees = [];
        if (object.Bees !== undefined && object.Bees !== null) {
            for (const e of object.Bees) {
                message.Bees.push(Bees.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.Bees) {
            obj.Bees = message.Bees.map((e) => (e ? Bees.toJSON(e) : undefined));
        }
        else {
            obj.Bees = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllBeesResponse };
        message.Bees = [];
        if (object.Bees !== undefined && object.Bees !== null) {
            for (const e of object.Bees) {
                message.Bees.push(Bees.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryCalculateHoneyInApiaryRequest = { apiaryId: 0 };
export const QueryCalculateHoneyInApiaryRequest = {
    encode(message, writer = Writer.create()) {
        if (message.apiaryId !== 0) {
            writer.uint32(8).uint64(message.apiaryId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryCalculateHoneyInApiaryRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.apiaryId = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryCalculateHoneyInApiaryRequest,
        };
        if (object.apiaryId !== undefined && object.apiaryId !== null) {
            message.apiaryId = Number(object.apiaryId);
        }
        else {
            message.apiaryId = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.apiaryId !== undefined && (obj.apiaryId = message.apiaryId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryCalculateHoneyInApiaryRequest,
        };
        if (object.apiaryId !== undefined && object.apiaryId !== null) {
            message.apiaryId = object.apiaryId;
        }
        else {
            message.apiaryId = 0;
        }
        return message;
    },
};
const baseQueryCalculateHoneyInApiaryResponse = { countHoney: "" };
export const QueryCalculateHoneyInApiaryResponse = {
    encode(message, writer = Writer.create()) {
        if (message.countHoney !== "") {
            writer.uint32(42).string(message.countHoney);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryCalculateHoneyInApiaryResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 5:
                    message.countHoney = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryCalculateHoneyInApiaryResponse,
        };
        if (object.countHoney !== undefined && object.countHoney !== null) {
            message.countHoney = String(object.countHoney);
        }
        else {
            message.countHoney = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.countHoney !== undefined && (obj.countHoney = message.countHoney);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryCalculateHoneyInApiaryResponse,
        };
        if (object.countHoney !== undefined && object.countHoney !== null) {
            message.countHoney = object.countHoney;
        }
        else {
            message.countHoney = "";
        }
        return message;
    },
};
const baseQueryGetAirInfoRequest = {};
export const QueryGetAirInfoRequest = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetAirInfoRequest };
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
    fromJSON(_) {
        const message = { ...baseQueryGetAirInfoRequest };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseQueryGetAirInfoRequest };
        return message;
    },
};
const baseQueryGetAirInfoResponse = {};
export const QueryGetAirInfoResponse = {
    encode(message, writer = Writer.create()) {
        if (message.AirInfo !== undefined) {
            AirInfo.encode(message.AirInfo, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetAirInfoResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryGetAirInfoResponse,
        };
        if (object.AirInfo !== undefined && object.AirInfo !== null) {
            message.AirInfo = AirInfo.fromJSON(object.AirInfo);
        }
        else {
            message.AirInfo = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.AirInfo !== undefined &&
            (obj.AirInfo = message.AirInfo
                ? AirInfo.toJSON(message.AirInfo)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetAirInfoResponse,
        };
        if (object.AirInfo !== undefined && object.AirInfo !== null) {
            message.AirInfo = AirInfo.fromPartial(object.AirInfo);
        }
        else {
            message.AirInfo = undefined;
        }
        return message;
    },
};
const baseQueryShowLastAirInfoRequest = {};
export const QueryShowLastAirInfoRequest = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryShowLastAirInfoRequest,
        };
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
    fromJSON(_) {
        const message = {
            ...baseQueryShowLastAirInfoRequest,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseQueryShowLastAirInfoRequest,
        };
        return message;
    },
};
const baseQueryShowLastAirInfoResponse = {
    height: 0,
    count: "",
    purity: "",
    supply: "",
    consume: "",
};
export const QueryShowLastAirInfoResponse = {
    encode(message, writer = Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryShowLastAirInfoResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = longToNumber(reader.uint64());
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
    fromJSON(object) {
        const message = {
            ...baseQueryShowLastAirInfoResponse,
        };
        if (object.height !== undefined && object.height !== null) {
            message.height = Number(object.height);
        }
        else {
            message.height = 0;
        }
        if (object.count !== undefined && object.count !== null) {
            message.count = String(object.count);
        }
        else {
            message.count = "";
        }
        if (object.purity !== undefined && object.purity !== null) {
            message.purity = String(object.purity);
        }
        else {
            message.purity = "";
        }
        if (object.supply !== undefined && object.supply !== null) {
            message.supply = String(object.supply);
        }
        else {
            message.supply = "";
        }
        if (object.consume !== undefined && object.consume !== null) {
            message.consume = String(object.consume);
        }
        else {
            message.consume = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = message.height);
        message.count !== undefined && (obj.count = message.count);
        message.purity !== undefined && (obj.purity = message.purity);
        message.supply !== undefined && (obj.supply = message.supply);
        message.consume !== undefined && (obj.consume = message.consume);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryShowLastAirInfoResponse,
        };
        if (object.height !== undefined && object.height !== null) {
            message.height = object.height;
        }
        else {
            message.height = 0;
        }
        if (object.count !== undefined && object.count !== null) {
            message.count = object.count;
        }
        else {
            message.count = "";
        }
        if (object.purity !== undefined && object.purity !== null) {
            message.purity = object.purity;
        }
        else {
            message.purity = "";
        }
        if (object.supply !== undefined && object.supply !== null) {
            message.supply = object.supply;
        }
        else {
            message.supply = "";
        }
        if (object.consume !== undefined && object.consume !== null) {
            message.consume = object.consume;
        }
        else {
            message.consume = "";
        }
        return message;
    },
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Params(request) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("MonetaToday.honeywood.bears.Query", "Params", data);
        return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
    }
    BearNames(request) {
        const data = QueryGetBearNamesRequest.encode(request).finish();
        const promise = this.rpc.request("MonetaToday.honeywood.bears.Query", "BearNames", data);
        return promise.then((data) => QueryGetBearNamesResponse.decode(new Reader(data)));
    }
    BearNamesAll(request) {
        const data = QueryAllBearNamesRequest.encode(request).finish();
        const promise = this.rpc.request("MonetaToday.honeywood.bears.Query", "BearNamesAll", data);
        return promise.then((data) => QueryAllBearNamesResponse.decode(new Reader(data)));
    }
    Bears(request) {
        const data = QueryGetBearsRequest.encode(request).finish();
        const promise = this.rpc.request("MonetaToday.honeywood.bears.Query", "Bears", data);
        return promise.then((data) => QueryGetBearsResponse.decode(new Reader(data)));
    }
    BearsAll(request) {
        const data = QueryAllBearsRequest.encode(request).finish();
        const promise = this.rpc.request("MonetaToday.honeywood.bears.Query", "BearsAll", data);
        return promise.then((data) => QueryAllBearsResponse.decode(new Reader(data)));
    }
    AddressBears(request) {
        const data = QueryGetAddressBearsRequest.encode(request).finish();
        const promise = this.rpc.request("MonetaToday.honeywood.bears.Query", "AddressBears", data);
        return promise.then((data) => QueryGetAddressBearsResponse.decode(new Reader(data)));
    }
    AddressBearsAll(request) {
        const data = QueryAllAddressBearsRequest.encode(request).finish();
        const promise = this.rpc.request("MonetaToday.honeywood.bears.Query", "AddressBearsAll", data);
        return promise.then((data) => QueryAllAddressBearsResponse.decode(new Reader(data)));
    }
    Fields(request) {
        const data = QueryGetFieldsRequest.encode(request).finish();
        const promise = this.rpc.request("MonetaToday.honeywood.bears.Query", "Fields", data);
        return promise.then((data) => QueryGetFieldsResponse.decode(new Reader(data)));
    }
    FieldsAll(request) {
        const data = QueryAllFieldsRequest.encode(request).finish();
        const promise = this.rpc.request("MonetaToday.honeywood.bears.Query", "FieldsAll", data);
        return promise.then((data) => QueryAllFieldsResponse.decode(new Reader(data)));
    }
    Trees(request) {
        const data = QueryGetTreesRequest.encode(request).finish();
        const promise = this.rpc.request("MonetaToday.honeywood.bears.Query", "Trees", data);
        return promise.then((data) => QueryGetTreesResponse.decode(new Reader(data)));
    }
    TreesAll(request) {
        const data = QueryAllTreesRequest.encode(request).finish();
        const promise = this.rpc.request("MonetaToday.honeywood.bears.Query", "TreesAll", data);
        return promise.then((data) => QueryAllTreesResponse.decode(new Reader(data)));
    }
    Decorations(request) {
        const data = QueryGetDecorationsRequest.encode(request).finish();
        const promise = this.rpc.request("MonetaToday.honeywood.bears.Query", "Decorations", data);
        return promise.then((data) => QueryGetDecorationsResponse.decode(new Reader(data)));
    }
    DecorationsAll(request) {
        const data = QueryAllDecorationsRequest.encode(request).finish();
        const promise = this.rpc.request("MonetaToday.honeywood.bears.Query", "DecorationsAll", data);
        return promise.then((data) => QueryAllDecorationsResponse.decode(new Reader(data)));
    }
    Apiaries(request) {
        const data = QueryGetApiariesRequest.encode(request).finish();
        const promise = this.rpc.request("MonetaToday.honeywood.bears.Query", "Apiaries", data);
        return promise.then((data) => QueryGetApiariesResponse.decode(new Reader(data)));
    }
    ApiariesAll(request) {
        const data = QueryAllApiariesRequest.encode(request).finish();
        const promise = this.rpc.request("MonetaToday.honeywood.bears.Query", "ApiariesAll", data);
        return promise.then((data) => QueryAllApiariesResponse.decode(new Reader(data)));
    }
    Bees(request) {
        const data = QueryGetBeesRequest.encode(request).finish();
        const promise = this.rpc.request("MonetaToday.honeywood.bears.Query", "Bees", data);
        return promise.then((data) => QueryGetBeesResponse.decode(new Reader(data)));
    }
    BeesAll(request) {
        const data = QueryAllBeesRequest.encode(request).finish();
        const promise = this.rpc.request("MonetaToday.honeywood.bears.Query", "BeesAll", data);
        return promise.then((data) => QueryAllBeesResponse.decode(new Reader(data)));
    }
    CalculateHoneyInApiary(request) {
        const data = QueryCalculateHoneyInApiaryRequest.encode(request).finish();
        const promise = this.rpc.request("MonetaToday.honeywood.bears.Query", "CalculateHoneyInApiary", data);
        return promise.then((data) => QueryCalculateHoneyInApiaryResponse.decode(new Reader(data)));
    }
    AirInfo(request) {
        const data = QueryGetAirInfoRequest.encode(request).finish();
        const promise = this.rpc.request("MonetaToday.honeywood.bears.Query", "AirInfo", data);
        return promise.then((data) => QueryGetAirInfoResponse.decode(new Reader(data)));
    }
    ShowLastAirInfo(request) {
        const data = QueryShowLastAirInfoRequest.encode(request).finish();
        const promise = this.rpc.request("MonetaToday.honeywood.bears.Query", "ShowLastAirInfo", data);
        return promise.then((data) => QueryShowLastAirInfoResponse.decode(new Reader(data)));
    }
}
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
