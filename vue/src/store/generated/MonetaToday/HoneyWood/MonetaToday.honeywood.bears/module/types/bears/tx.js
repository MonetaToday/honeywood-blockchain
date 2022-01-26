/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Trees } from "../bears/trees";
export const protobufPackage = "MonetaToday.honeywood.bears";
const baseMsgInitGameAndSetName = { creator: "", name: "" };
export const MsgInitGameAndSetName = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgInitGameAndSetName };
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
    fromJSON(object) {
        const message = { ...baseMsgInitGameAndSetName };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
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
        message.creator !== undefined && (obj.creator = message.creator);
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgInitGameAndSetName };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = "";
        }
        return message;
    },
};
const baseMsgInitGameAndSetNameResponse = {};
export const MsgInitGameAndSetNameResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgInitGameAndSetNameResponse,
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
            ...baseMsgInitGameAndSetNameResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgInitGameAndSetNameResponse,
        };
        return message;
    },
};
const baseMsgSetName = { creator: "", bearId: 0, name: "" };
export const MsgSetName = {
    encode(message, writer = Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgSetName };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.bearId = longToNumber(reader.uint64());
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
    fromJSON(object) {
        const message = { ...baseMsgSetName };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.bearId !== undefined && object.bearId !== null) {
            message.bearId = Number(object.bearId);
        }
        else {
            message.bearId = 0;
        }
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
        message.creator !== undefined && (obj.creator = message.creator);
        message.bearId !== undefined && (obj.bearId = message.bearId);
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgSetName };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.bearId !== undefined && object.bearId !== null) {
            message.bearId = object.bearId;
        }
        else {
            message.bearId = 0;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = "";
        }
        return message;
    },
};
const baseMsgSetNameResponse = {};
export const MsgSetNameResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgSetNameResponse };
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
        const message = { ...baseMsgSetNameResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgSetNameResponse };
        return message;
    },
};
const baseMsgInitGameAndExtendPlace = { creator: "" };
export const MsgInitGameAndExtendPlace = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgInitGameAndExtendPlace,
        };
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
    fromJSON(object) {
        const message = {
            ...baseMsgInitGameAndExtendPlace,
        };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgInitGameAndExtendPlace,
        };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        return message;
    },
};
const baseMsgInitGameAndExtendPlaceResponse = { countGrounds: 0 };
export const MsgInitGameAndExtendPlaceResponse = {
    encode(message, writer = Writer.create()) {
        if (message.countGrounds !== 0) {
            writer.uint32(8).uint64(message.countGrounds);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgInitGameAndExtendPlaceResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.countGrounds = longToNumber(reader.uint64());
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
            ...baseMsgInitGameAndExtendPlaceResponse,
        };
        if (object.countGrounds !== undefined && object.countGrounds !== null) {
            message.countGrounds = Number(object.countGrounds);
        }
        else {
            message.countGrounds = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.countGrounds !== undefined &&
            (obj.countGrounds = message.countGrounds);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgInitGameAndExtendPlaceResponse,
        };
        if (object.countGrounds !== undefined && object.countGrounds !== null) {
            message.countGrounds = object.countGrounds;
        }
        else {
            message.countGrounds = 0;
        }
        return message;
    },
};
const baseMsgExtendPlace = { creator: "", id: 0 };
export const MsgExtendPlace = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgExtendPlace };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
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
        const message = { ...baseMsgExtendPlace };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
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
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgExtendPlace };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseMsgExtendPlaceResponse = { countGrounds: 0 };
export const MsgExtendPlaceResponse = {
    encode(message, writer = Writer.create()) {
        if (message.countGrounds !== 0) {
            writer.uint32(8).uint64(message.countGrounds);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgExtendPlaceResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.countGrounds = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgExtendPlaceResponse };
        if (object.countGrounds !== undefined && object.countGrounds !== null) {
            message.countGrounds = Number(object.countGrounds);
        }
        else {
            message.countGrounds = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.countGrounds !== undefined &&
            (obj.countGrounds = message.countGrounds);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgExtendPlaceResponse };
        if (object.countGrounds !== undefined && object.countGrounds !== null) {
            message.countGrounds = object.countGrounds;
        }
        else {
            message.countGrounds = 0;
        }
        return message;
    },
};
const baseMsgInitGameAndCreateTree = { creator: "" };
export const MsgInitGameAndCreateTree = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgInitGameAndCreateTree,
        };
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
    fromJSON(object) {
        const message = {
            ...baseMsgInitGameAndCreateTree,
        };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgInitGameAndCreateTree,
        };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        return message;
    },
};
const baseMsgInitGameAndCreateTreeResponse = {};
export const MsgInitGameAndCreateTreeResponse = {
    encode(message, writer = Writer.create()) {
        if (message.tree !== undefined) {
            Trees.encode(message.tree, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgInitGameAndCreateTreeResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseMsgInitGameAndCreateTreeResponse,
        };
        if (object.tree !== undefined && object.tree !== null) {
            message.tree = Trees.fromJSON(object.tree);
        }
        else {
            message.tree = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.tree !== undefined &&
            (obj.tree = message.tree ? Trees.toJSON(message.tree) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgInitGameAndCreateTreeResponse,
        };
        if (object.tree !== undefined && object.tree !== null) {
            message.tree = Trees.fromPartial(object.tree);
        }
        else {
            message.tree = undefined;
        }
        return message;
    },
};
const baseMsgCreateTree = { creator: "", placeId: 0, groundId: 0 };
export const MsgCreateTree = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.placeId !== 0) {
            writer.uint32(16).uint64(message.placeId);
        }
        if (message.groundId !== 0) {
            writer.uint32(24).uint64(message.groundId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateTree };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.placeId = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.groundId = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateTree };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.placeId !== undefined && object.placeId !== null) {
            message.placeId = Number(object.placeId);
        }
        else {
            message.placeId = 0;
        }
        if (object.groundId !== undefined && object.groundId !== null) {
            message.groundId = Number(object.groundId);
        }
        else {
            message.groundId = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.placeId !== undefined && (obj.placeId = message.placeId);
        message.groundId !== undefined && (obj.groundId = message.groundId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateTree };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.placeId !== undefined && object.placeId !== null) {
            message.placeId = object.placeId;
        }
        else {
            message.placeId = 0;
        }
        if (object.groundId !== undefined && object.groundId !== null) {
            message.groundId = object.groundId;
        }
        else {
            message.groundId = 0;
        }
        return message;
    },
};
const baseMsgCreateTreeResponse = {};
export const MsgCreateTreeResponse = {
    encode(message, writer = Writer.create()) {
        if (message.tree !== undefined) {
            Trees.encode(message.tree, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateTreeResponse };
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
    fromJSON(object) {
        const message = { ...baseMsgCreateTreeResponse };
        if (object.tree !== undefined && object.tree !== null) {
            message.tree = Trees.fromJSON(object.tree);
        }
        else {
            message.tree = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.tree !== undefined &&
            (obj.tree = message.tree ? Trees.toJSON(message.tree) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateTreeResponse };
        if (object.tree !== undefined && object.tree !== null) {
            message.tree = Trees.fromPartial(object.tree);
        }
        else {
            message.tree = undefined;
        }
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    InitGameAndSetName(request) {
        const data = MsgInitGameAndSetName.encode(request).finish();
        const promise = this.rpc.request("MonetaToday.honeywood.bears.Msg", "InitGameAndSetName", data);
        return promise.then((data) => MsgInitGameAndSetNameResponse.decode(new Reader(data)));
    }
    SetName(request) {
        const data = MsgSetName.encode(request).finish();
        const promise = this.rpc.request("MonetaToday.honeywood.bears.Msg", "SetName", data);
        return promise.then((data) => MsgSetNameResponse.decode(new Reader(data)));
    }
    InitGameAndExtendPlace(request) {
        const data = MsgInitGameAndExtendPlace.encode(request).finish();
        const promise = this.rpc.request("MonetaToday.honeywood.bears.Msg", "InitGameAndExtendPlace", data);
        return promise.then((data) => MsgInitGameAndExtendPlaceResponse.decode(new Reader(data)));
    }
    ExtendPlace(request) {
        const data = MsgExtendPlace.encode(request).finish();
        const promise = this.rpc.request("MonetaToday.honeywood.bears.Msg", "ExtendPlace", data);
        return promise.then((data) => MsgExtendPlaceResponse.decode(new Reader(data)));
    }
    InitGameAndCreateTree(request) {
        const data = MsgInitGameAndCreateTree.encode(request).finish();
        const promise = this.rpc.request("MonetaToday.honeywood.bears.Msg", "InitGameAndCreateTree", data);
        return promise.then((data) => MsgInitGameAndCreateTreeResponse.decode(new Reader(data)));
    }
    CreateTree(request) {
        const data = MsgCreateTree.encode(request).finish();
        const promise = this.rpc.request("MonetaToday.honeywood.bears.Msg", "CreateTree", data);
        return promise.then((data) => MsgCreateTreeResponse.decode(new Reader(data)));
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
