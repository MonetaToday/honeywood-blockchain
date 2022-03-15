/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Trees } from "../bears/trees";
import { Decorations } from "../bears/decorations";
import { Apiaries } from "../bears/apiaries";
import { Bees } from "../bears/bees";
import { Coin } from "../cosmos/base/v1beta1/coin";
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
const baseMsgInitGameAndExtendField = { creator: "", receiver: "" };
export const MsgInitGameAndExtendField = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.receiver !== "") {
            writer.uint32(18).string(message.receiver);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgInitGameAndExtendField,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.receiver = reader.string();
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
            ...baseMsgInitGameAndExtendField,
        };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.receiver !== undefined && object.receiver !== null) {
            message.receiver = String(object.receiver);
        }
        else {
            message.receiver = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.receiver !== undefined && (obj.receiver = message.receiver);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgInitGameAndExtendField,
        };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.receiver !== undefined && object.receiver !== null) {
            message.receiver = object.receiver;
        }
        else {
            message.receiver = "";
        }
        return message;
    },
};
const baseMsgInitGameAndExtendFieldResponse = { countTiles: 0 };
export const MsgInitGameAndExtendFieldResponse = {
    encode(message, writer = Writer.create()) {
        if (message.countTiles !== 0) {
            writer.uint32(8).uint64(message.countTiles);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgInitGameAndExtendFieldResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.countTiles = longToNumber(reader.uint64());
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
            ...baseMsgInitGameAndExtendFieldResponse,
        };
        if (object.countTiles !== undefined && object.countTiles !== null) {
            message.countTiles = Number(object.countTiles);
        }
        else {
            message.countTiles = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.countTiles !== undefined && (obj.countTiles = message.countTiles);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgInitGameAndExtendFieldResponse,
        };
        if (object.countTiles !== undefined && object.countTiles !== null) {
            message.countTiles = object.countTiles;
        }
        else {
            message.countTiles = 0;
        }
        return message;
    },
};
const baseMsgExtendField = { creator: "", receiver: "", id: 0 };
export const MsgExtendField = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.receiver !== "") {
            writer.uint32(18).string(message.receiver);
        }
        if (message.id !== 0) {
            writer.uint32(24).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgExtendField };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.receiver = reader.string();
                    break;
                case 3:
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
        const message = { ...baseMsgExtendField };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.receiver !== undefined && object.receiver !== null) {
            message.receiver = String(object.receiver);
        }
        else {
            message.receiver = "";
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
        message.receiver !== undefined && (obj.receiver = message.receiver);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgExtendField };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.receiver !== undefined && object.receiver !== null) {
            message.receiver = object.receiver;
        }
        else {
            message.receiver = "";
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
const baseMsgExtendFieldResponse = { countTiles: 0 };
export const MsgExtendFieldResponse = {
    encode(message, writer = Writer.create()) {
        if (message.countTiles !== 0) {
            writer.uint32(8).uint64(message.countTiles);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgExtendFieldResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.countTiles = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgExtendFieldResponse };
        if (object.countTiles !== undefined && object.countTiles !== null) {
            message.countTiles = Number(object.countTiles);
        }
        else {
            message.countTiles = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.countTiles !== undefined && (obj.countTiles = message.countTiles);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgExtendFieldResponse };
        if (object.countTiles !== undefined && object.countTiles !== null) {
            message.countTiles = object.countTiles;
        }
        else {
            message.countTiles = 0;
        }
        return message;
    },
};
const baseMsgInitGameAndCreateTree = { creator: "", treeType: "" };
export const MsgInitGameAndCreateTree = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.treeType !== "") {
            writer.uint32(18).string(message.treeType);
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
        if (object.treeType !== undefined && object.treeType !== null) {
            message.treeType = String(object.treeType);
        }
        else {
            message.treeType = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.treeType !== undefined && (obj.treeType = message.treeType);
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
        if (object.treeType !== undefined && object.treeType !== null) {
            message.treeType = object.treeType;
        }
        else {
            message.treeType = "";
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
const baseMsgCreateTree = {
    creator: "",
    bearId: 0,
    fieldId: 0,
    rowId: 0,
    columnId: 0,
    treeType: "",
};
export const MsgCreateTree = {
    encode(message, writer = Writer.create()) {
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
                    message.bearId = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.fieldId = longToNumber(reader.uint64());
                    break;
                case 4:
                    message.rowId = longToNumber(reader.uint64());
                    break;
                case 5:
                    message.columnId = longToNumber(reader.uint64());
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
    fromJSON(object) {
        const message = { ...baseMsgCreateTree };
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
        if (object.fieldId !== undefined && object.fieldId !== null) {
            message.fieldId = Number(object.fieldId);
        }
        else {
            message.fieldId = 0;
        }
        if (object.rowId !== undefined && object.rowId !== null) {
            message.rowId = Number(object.rowId);
        }
        else {
            message.rowId = 0;
        }
        if (object.columnId !== undefined && object.columnId !== null) {
            message.columnId = Number(object.columnId);
        }
        else {
            message.columnId = 0;
        }
        if (object.treeType !== undefined && object.treeType !== null) {
            message.treeType = String(object.treeType);
        }
        else {
            message.treeType = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.bearId !== undefined && (obj.bearId = message.bearId);
        message.fieldId !== undefined && (obj.fieldId = message.fieldId);
        message.rowId !== undefined && (obj.rowId = message.rowId);
        message.columnId !== undefined && (obj.columnId = message.columnId);
        message.treeType !== undefined && (obj.treeType = message.treeType);
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
        if (object.bearId !== undefined && object.bearId !== null) {
            message.bearId = object.bearId;
        }
        else {
            message.bearId = 0;
        }
        if (object.fieldId !== undefined && object.fieldId !== null) {
            message.fieldId = object.fieldId;
        }
        else {
            message.fieldId = 0;
        }
        if (object.rowId !== undefined && object.rowId !== null) {
            message.rowId = object.rowId;
        }
        else {
            message.rowId = 0;
        }
        if (object.columnId !== undefined && object.columnId !== null) {
            message.columnId = object.columnId;
        }
        else {
            message.columnId = 0;
        }
        if (object.treeType !== undefined && object.treeType !== null) {
            message.treeType = object.treeType;
        }
        else {
            message.treeType = "";
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
const baseMsgMoveItemOnField = {
    creator: "",
    fieldId: 0,
    rowId: 0,
    columnId: 0,
    newRowId: 0,
    newColumnId: 0,
};
export const MsgMoveItemOnField = {
    encode(message, writer = Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgMoveItemOnField };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.fieldId = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.rowId = longToNumber(reader.uint64());
                    break;
                case 4:
                    message.columnId = longToNumber(reader.uint64());
                    break;
                case 5:
                    message.newRowId = longToNumber(reader.uint64());
                    break;
                case 6:
                    message.newColumnId = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgMoveItemOnField };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.fieldId !== undefined && object.fieldId !== null) {
            message.fieldId = Number(object.fieldId);
        }
        else {
            message.fieldId = 0;
        }
        if (object.rowId !== undefined && object.rowId !== null) {
            message.rowId = Number(object.rowId);
        }
        else {
            message.rowId = 0;
        }
        if (object.columnId !== undefined && object.columnId !== null) {
            message.columnId = Number(object.columnId);
        }
        else {
            message.columnId = 0;
        }
        if (object.newRowId !== undefined && object.newRowId !== null) {
            message.newRowId = Number(object.newRowId);
        }
        else {
            message.newRowId = 0;
        }
        if (object.newColumnId !== undefined && object.newColumnId !== null) {
            message.newColumnId = Number(object.newColumnId);
        }
        else {
            message.newColumnId = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.fieldId !== undefined && (obj.fieldId = message.fieldId);
        message.rowId !== undefined && (obj.rowId = message.rowId);
        message.columnId !== undefined && (obj.columnId = message.columnId);
        message.newRowId !== undefined && (obj.newRowId = message.newRowId);
        message.newColumnId !== undefined &&
            (obj.newColumnId = message.newColumnId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgMoveItemOnField };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.fieldId !== undefined && object.fieldId !== null) {
            message.fieldId = object.fieldId;
        }
        else {
            message.fieldId = 0;
        }
        if (object.rowId !== undefined && object.rowId !== null) {
            message.rowId = object.rowId;
        }
        else {
            message.rowId = 0;
        }
        if (object.columnId !== undefined && object.columnId !== null) {
            message.columnId = object.columnId;
        }
        else {
            message.columnId = 0;
        }
        if (object.newRowId !== undefined && object.newRowId !== null) {
            message.newRowId = object.newRowId;
        }
        else {
            message.newRowId = 0;
        }
        if (object.newColumnId !== undefined && object.newColumnId !== null) {
            message.newColumnId = object.newColumnId;
        }
        else {
            message.newColumnId = 0;
        }
        return message;
    },
};
const baseMsgMoveItemOnFieldResponse = {};
export const MsgMoveItemOnFieldResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgMoveItemOnFieldResponse,
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
            ...baseMsgMoveItemOnFieldResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgMoveItemOnFieldResponse,
        };
        return message;
    },
};
const baseMsgInitGameAndCreateDecoration = {
    creator: "",
    receiver: "",
    decorationType: "",
};
export const MsgInitGameAndCreateDecoration = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.receiver !== "") {
            writer.uint32(18).string(message.receiver);
        }
        if (message.decorationType !== "") {
            writer.uint32(26).string(message.decorationType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgInitGameAndCreateDecoration,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.receiver = reader.string();
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
    fromJSON(object) {
        const message = {
            ...baseMsgInitGameAndCreateDecoration,
        };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.receiver !== undefined && object.receiver !== null) {
            message.receiver = String(object.receiver);
        }
        else {
            message.receiver = "";
        }
        if (object.decorationType !== undefined && object.decorationType !== null) {
            message.decorationType = String(object.decorationType);
        }
        else {
            message.decorationType = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.receiver !== undefined && (obj.receiver = message.receiver);
        message.decorationType !== undefined &&
            (obj.decorationType = message.decorationType);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgInitGameAndCreateDecoration,
        };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.receiver !== undefined && object.receiver !== null) {
            message.receiver = object.receiver;
        }
        else {
            message.receiver = "";
        }
        if (object.decorationType !== undefined && object.decorationType !== null) {
            message.decorationType = object.decorationType;
        }
        else {
            message.decorationType = "";
        }
        return message;
    },
};
const baseMsgInitGameAndCreateDecorationResponse = {};
export const MsgInitGameAndCreateDecorationResponse = {
    encode(message, writer = Writer.create()) {
        if (message.decoration !== undefined) {
            Decorations.encode(message.decoration, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgInitGameAndCreateDecorationResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseMsgInitGameAndCreateDecorationResponse,
        };
        if (object.decoration !== undefined && object.decoration !== null) {
            message.decoration = Decorations.fromJSON(object.decoration);
        }
        else {
            message.decoration = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.decoration !== undefined &&
            (obj.decoration = message.decoration
                ? Decorations.toJSON(message.decoration)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgInitGameAndCreateDecorationResponse,
        };
        if (object.decoration !== undefined && object.decoration !== null) {
            message.decoration = Decorations.fromPartial(object.decoration);
        }
        else {
            message.decoration = undefined;
        }
        return message;
    },
};
const baseMsgCreateDecoration = {
    creator: "",
    receiver: "",
    bearId: 0,
    decorationType: "",
};
export const MsgCreateDecoration = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.receiver !== "") {
            writer.uint32(18).string(message.receiver);
        }
        if (message.bearId !== 0) {
            writer.uint32(24).uint64(message.bearId);
        }
        if (message.decorationType !== "") {
            writer.uint32(34).string(message.decorationType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateDecoration };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.receiver = reader.string();
                    break;
                case 3:
                    message.bearId = longToNumber(reader.uint64());
                    break;
                case 4:
                    message.decorationType = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateDecoration };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.receiver !== undefined && object.receiver !== null) {
            message.receiver = String(object.receiver);
        }
        else {
            message.receiver = "";
        }
        if (object.bearId !== undefined && object.bearId !== null) {
            message.bearId = Number(object.bearId);
        }
        else {
            message.bearId = 0;
        }
        if (object.decorationType !== undefined && object.decorationType !== null) {
            message.decorationType = String(object.decorationType);
        }
        else {
            message.decorationType = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.receiver !== undefined && (obj.receiver = message.receiver);
        message.bearId !== undefined && (obj.bearId = message.bearId);
        message.decorationType !== undefined &&
            (obj.decorationType = message.decorationType);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateDecoration };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.receiver !== undefined && object.receiver !== null) {
            message.receiver = object.receiver;
        }
        else {
            message.receiver = "";
        }
        if (object.bearId !== undefined && object.bearId !== null) {
            message.bearId = object.bearId;
        }
        else {
            message.bearId = 0;
        }
        if (object.decorationType !== undefined && object.decorationType !== null) {
            message.decorationType = object.decorationType;
        }
        else {
            message.decorationType = "";
        }
        return message;
    },
};
const baseMsgCreateDecorationResponse = {};
export const MsgCreateDecorationResponse = {
    encode(message, writer = Writer.create()) {
        if (message.decoration !== undefined) {
            Decorations.encode(message.decoration, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgCreateDecorationResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseMsgCreateDecorationResponse,
        };
        if (object.decoration !== undefined && object.decoration !== null) {
            message.decoration = Decorations.fromJSON(object.decoration);
        }
        else {
            message.decoration = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.decoration !== undefined &&
            (obj.decoration = message.decoration
                ? Decorations.toJSON(message.decoration)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgCreateDecorationResponse,
        };
        if (object.decoration !== undefined && object.decoration !== null) {
            message.decoration = Decorations.fromPartial(object.decoration);
        }
        else {
            message.decoration = undefined;
        }
        return message;
    },
};
const baseMsgSetDecorationPosition = {
    creator: "",
    decorationId: 0,
    fieldId: 0,
    rowId: 0,
    columnId: 0,
};
export const MsgSetDecorationPosition = {
    encode(message, writer = Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgSetDecorationPosition,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.decorationId = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.fieldId = longToNumber(reader.uint64());
                    break;
                case 4:
                    message.rowId = longToNumber(reader.uint64());
                    break;
                case 5:
                    message.columnId = longToNumber(reader.uint64());
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
            ...baseMsgSetDecorationPosition,
        };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.decorationId !== undefined && object.decorationId !== null) {
            message.decorationId = Number(object.decorationId);
        }
        else {
            message.decorationId = 0;
        }
        if (object.fieldId !== undefined && object.fieldId !== null) {
            message.fieldId = Number(object.fieldId);
        }
        else {
            message.fieldId = 0;
        }
        if (object.rowId !== undefined && object.rowId !== null) {
            message.rowId = Number(object.rowId);
        }
        else {
            message.rowId = 0;
        }
        if (object.columnId !== undefined && object.columnId !== null) {
            message.columnId = Number(object.columnId);
        }
        else {
            message.columnId = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.decorationId !== undefined &&
            (obj.decorationId = message.decorationId);
        message.fieldId !== undefined && (obj.fieldId = message.fieldId);
        message.rowId !== undefined && (obj.rowId = message.rowId);
        message.columnId !== undefined && (obj.columnId = message.columnId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgSetDecorationPosition,
        };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.decorationId !== undefined && object.decorationId !== null) {
            message.decorationId = object.decorationId;
        }
        else {
            message.decorationId = 0;
        }
        if (object.fieldId !== undefined && object.fieldId !== null) {
            message.fieldId = object.fieldId;
        }
        else {
            message.fieldId = 0;
        }
        if (object.rowId !== undefined && object.rowId !== null) {
            message.rowId = object.rowId;
        }
        else {
            message.rowId = 0;
        }
        if (object.columnId !== undefined && object.columnId !== null) {
            message.columnId = object.columnId;
        }
        else {
            message.columnId = 0;
        }
        return message;
    },
};
const baseMsgSetDecorationPositionResponse = {};
export const MsgSetDecorationPositionResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgSetDecorationPositionResponse,
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
            ...baseMsgSetDecorationPositionResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgSetDecorationPositionResponse,
        };
        return message;
    },
};
const baseMsgUnsetDecorationPosition = { creator: "", decorationId: 0 };
export const MsgUnsetDecorationPosition = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.decorationId !== 0) {
            writer.uint32(16).uint64(message.decorationId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgUnsetDecorationPosition,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.decorationId = longToNumber(reader.uint64());
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
            ...baseMsgUnsetDecorationPosition,
        };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.decorationId !== undefined && object.decorationId !== null) {
            message.decorationId = Number(object.decorationId);
        }
        else {
            message.decorationId = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.decorationId !== undefined &&
            (obj.decorationId = message.decorationId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgUnsetDecorationPosition,
        };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.decorationId !== undefined && object.decorationId !== null) {
            message.decorationId = object.decorationId;
        }
        else {
            message.decorationId = 0;
        }
        return message;
    },
};
const baseMsgUnsetDecorationPositionResponse = {};
export const MsgUnsetDecorationPositionResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgUnsetDecorationPositionResponse,
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
            ...baseMsgUnsetDecorationPositionResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgUnsetDecorationPositionResponse,
        };
        return message;
    },
};
const baseMsgInitGameAndCreateApiary = {
    creator: "",
    receiver: "",
    apiaryType: "",
};
export const MsgInitGameAndCreateApiary = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.receiver !== "") {
            writer.uint32(18).string(message.receiver);
        }
        if (message.apiaryType !== "") {
            writer.uint32(26).string(message.apiaryType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgInitGameAndCreateApiary,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.receiver = reader.string();
                    break;
                case 3:
                    message.apiaryType = reader.string();
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
            ...baseMsgInitGameAndCreateApiary,
        };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.receiver !== undefined && object.receiver !== null) {
            message.receiver = String(object.receiver);
        }
        else {
            message.receiver = "";
        }
        if (object.apiaryType !== undefined && object.apiaryType !== null) {
            message.apiaryType = String(object.apiaryType);
        }
        else {
            message.apiaryType = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.receiver !== undefined && (obj.receiver = message.receiver);
        message.apiaryType !== undefined && (obj.apiaryType = message.apiaryType);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgInitGameAndCreateApiary,
        };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.receiver !== undefined && object.receiver !== null) {
            message.receiver = object.receiver;
        }
        else {
            message.receiver = "";
        }
        if (object.apiaryType !== undefined && object.apiaryType !== null) {
            message.apiaryType = object.apiaryType;
        }
        else {
            message.apiaryType = "";
        }
        return message;
    },
};
const baseMsgInitGameAndCreateApiaryResponse = {};
export const MsgInitGameAndCreateApiaryResponse = {
    encode(message, writer = Writer.create()) {
        if (message.apiary !== undefined) {
            Apiaries.encode(message.apiary, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgInitGameAndCreateApiaryResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseMsgInitGameAndCreateApiaryResponse,
        };
        if (object.apiary !== undefined && object.apiary !== null) {
            message.apiary = Apiaries.fromJSON(object.apiary);
        }
        else {
            message.apiary = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.apiary !== undefined &&
            (obj.apiary = message.apiary
                ? Apiaries.toJSON(message.apiary)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgInitGameAndCreateApiaryResponse,
        };
        if (object.apiary !== undefined && object.apiary !== null) {
            message.apiary = Apiaries.fromPartial(object.apiary);
        }
        else {
            message.apiary = undefined;
        }
        return message;
    },
};
const baseMsgCreateApiary = {
    creator: "",
    receiver: "",
    bearId: 0,
    fieldId: 0,
    rowId: 0,
    columnId: 0,
    apiaryType: "",
};
export const MsgCreateApiary = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.receiver !== "") {
            writer.uint32(18).string(message.receiver);
        }
        if (message.bearId !== 0) {
            writer.uint32(24).uint64(message.bearId);
        }
        if (message.fieldId !== 0) {
            writer.uint32(32).uint64(message.fieldId);
        }
        if (message.rowId !== 0) {
            writer.uint32(40).uint64(message.rowId);
        }
        if (message.columnId !== 0) {
            writer.uint32(48).uint64(message.columnId);
        }
        if (message.apiaryType !== "") {
            writer.uint32(58).string(message.apiaryType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateApiary };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.receiver = reader.string();
                    break;
                case 3:
                    message.bearId = longToNumber(reader.uint64());
                    break;
                case 4:
                    message.fieldId = longToNumber(reader.uint64());
                    break;
                case 5:
                    message.rowId = longToNumber(reader.uint64());
                    break;
                case 6:
                    message.columnId = longToNumber(reader.uint64());
                    break;
                case 7:
                    message.apiaryType = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateApiary };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.receiver !== undefined && object.receiver !== null) {
            message.receiver = String(object.receiver);
        }
        else {
            message.receiver = "";
        }
        if (object.bearId !== undefined && object.bearId !== null) {
            message.bearId = Number(object.bearId);
        }
        else {
            message.bearId = 0;
        }
        if (object.fieldId !== undefined && object.fieldId !== null) {
            message.fieldId = Number(object.fieldId);
        }
        else {
            message.fieldId = 0;
        }
        if (object.rowId !== undefined && object.rowId !== null) {
            message.rowId = Number(object.rowId);
        }
        else {
            message.rowId = 0;
        }
        if (object.columnId !== undefined && object.columnId !== null) {
            message.columnId = Number(object.columnId);
        }
        else {
            message.columnId = 0;
        }
        if (object.apiaryType !== undefined && object.apiaryType !== null) {
            message.apiaryType = String(object.apiaryType);
        }
        else {
            message.apiaryType = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.receiver !== undefined && (obj.receiver = message.receiver);
        message.bearId !== undefined && (obj.bearId = message.bearId);
        message.fieldId !== undefined && (obj.fieldId = message.fieldId);
        message.rowId !== undefined && (obj.rowId = message.rowId);
        message.columnId !== undefined && (obj.columnId = message.columnId);
        message.apiaryType !== undefined && (obj.apiaryType = message.apiaryType);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateApiary };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.receiver !== undefined && object.receiver !== null) {
            message.receiver = object.receiver;
        }
        else {
            message.receiver = "";
        }
        if (object.bearId !== undefined && object.bearId !== null) {
            message.bearId = object.bearId;
        }
        else {
            message.bearId = 0;
        }
        if (object.fieldId !== undefined && object.fieldId !== null) {
            message.fieldId = object.fieldId;
        }
        else {
            message.fieldId = 0;
        }
        if (object.rowId !== undefined && object.rowId !== null) {
            message.rowId = object.rowId;
        }
        else {
            message.rowId = 0;
        }
        if (object.columnId !== undefined && object.columnId !== null) {
            message.columnId = object.columnId;
        }
        else {
            message.columnId = 0;
        }
        if (object.apiaryType !== undefined && object.apiaryType !== null) {
            message.apiaryType = object.apiaryType;
        }
        else {
            message.apiaryType = "";
        }
        return message;
    },
};
const baseMsgCreateApiaryResponse = {};
export const MsgCreateApiaryResponse = {
    encode(message, writer = Writer.create()) {
        if (message.apiary !== undefined) {
            Apiaries.encode(message.apiary, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgCreateApiaryResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseMsgCreateApiaryResponse,
        };
        if (object.apiary !== undefined && object.apiary !== null) {
            message.apiary = Apiaries.fromJSON(object.apiary);
        }
        else {
            message.apiary = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.apiary !== undefined &&
            (obj.apiary = message.apiary
                ? Apiaries.toJSON(message.apiary)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgCreateApiaryResponse,
        };
        if (object.apiary !== undefined && object.apiary !== null) {
            message.apiary = Apiaries.fromPartial(object.apiary);
        }
        else {
            message.apiary = undefined;
        }
        return message;
    },
};
const baseMsgInitGameAndCreateBee = {
    creator: "",
    receiver: "",
    beeType: "",
    beeName: "",
};
export const MsgInitGameAndCreateBee = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.receiver !== "") {
            writer.uint32(18).string(message.receiver);
        }
        if (message.beeType !== "") {
            writer.uint32(26).string(message.beeType);
        }
        if (message.beeName !== "") {
            writer.uint32(34).string(message.beeName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgInitGameAndCreateBee,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.receiver = reader.string();
                    break;
                case 3:
                    message.beeType = reader.string();
                    break;
                case 4:
                    message.beeName = reader.string();
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
            ...baseMsgInitGameAndCreateBee,
        };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.receiver !== undefined && object.receiver !== null) {
            message.receiver = String(object.receiver);
        }
        else {
            message.receiver = "";
        }
        if (object.beeType !== undefined && object.beeType !== null) {
            message.beeType = String(object.beeType);
        }
        else {
            message.beeType = "";
        }
        if (object.beeName !== undefined && object.beeName !== null) {
            message.beeName = String(object.beeName);
        }
        else {
            message.beeName = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.receiver !== undefined && (obj.receiver = message.receiver);
        message.beeType !== undefined && (obj.beeType = message.beeType);
        message.beeName !== undefined && (obj.beeName = message.beeName);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgInitGameAndCreateBee,
        };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.receiver !== undefined && object.receiver !== null) {
            message.receiver = object.receiver;
        }
        else {
            message.receiver = "";
        }
        if (object.beeType !== undefined && object.beeType !== null) {
            message.beeType = object.beeType;
        }
        else {
            message.beeType = "";
        }
        if (object.beeName !== undefined && object.beeName !== null) {
            message.beeName = object.beeName;
        }
        else {
            message.beeName = "";
        }
        return message;
    },
};
const baseMsgInitGameAndCreateBeeResponse = {};
export const MsgInitGameAndCreateBeeResponse = {
    encode(message, writer = Writer.create()) {
        if (message.bee !== undefined) {
            Bees.encode(message.bee, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgInitGameAndCreateBeeResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bee = Bees.decode(reader, reader.uint32());
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
            ...baseMsgInitGameAndCreateBeeResponse,
        };
        if (object.bee !== undefined && object.bee !== null) {
            message.bee = Bees.fromJSON(object.bee);
        }
        else {
            message.bee = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.bee !== undefined &&
            (obj.bee = message.bee ? Bees.toJSON(message.bee) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgInitGameAndCreateBeeResponse,
        };
        if (object.bee !== undefined && object.bee !== null) {
            message.bee = Bees.fromPartial(object.bee);
        }
        else {
            message.bee = undefined;
        }
        return message;
    },
};
const baseMsgCreateBee = {
    creator: "",
    receiver: "",
    bearId: 0,
    beeType: "",
    beeName: "",
};
export const MsgCreateBee = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.receiver !== "") {
            writer.uint32(18).string(message.receiver);
        }
        if (message.bearId !== 0) {
            writer.uint32(24).uint64(message.bearId);
        }
        if (message.beeType !== "") {
            writer.uint32(34).string(message.beeType);
        }
        if (message.beeName !== "") {
            writer.uint32(42).string(message.beeName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateBee };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.receiver = reader.string();
                    break;
                case 3:
                    message.bearId = longToNumber(reader.uint64());
                    break;
                case 4:
                    message.beeType = reader.string();
                    break;
                case 5:
                    message.beeName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateBee };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.receiver !== undefined && object.receiver !== null) {
            message.receiver = String(object.receiver);
        }
        else {
            message.receiver = "";
        }
        if (object.bearId !== undefined && object.bearId !== null) {
            message.bearId = Number(object.bearId);
        }
        else {
            message.bearId = 0;
        }
        if (object.beeType !== undefined && object.beeType !== null) {
            message.beeType = String(object.beeType);
        }
        else {
            message.beeType = "";
        }
        if (object.beeName !== undefined && object.beeName !== null) {
            message.beeName = String(object.beeName);
        }
        else {
            message.beeName = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.receiver !== undefined && (obj.receiver = message.receiver);
        message.bearId !== undefined && (obj.bearId = message.bearId);
        message.beeType !== undefined && (obj.beeType = message.beeType);
        message.beeName !== undefined && (obj.beeName = message.beeName);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateBee };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.receiver !== undefined && object.receiver !== null) {
            message.receiver = object.receiver;
        }
        else {
            message.receiver = "";
        }
        if (object.bearId !== undefined && object.bearId !== null) {
            message.bearId = object.bearId;
        }
        else {
            message.bearId = 0;
        }
        if (object.beeType !== undefined && object.beeType !== null) {
            message.beeType = object.beeType;
        }
        else {
            message.beeType = "";
        }
        if (object.beeName !== undefined && object.beeName !== null) {
            message.beeName = object.beeName;
        }
        else {
            message.beeName = "";
        }
        return message;
    },
};
const baseMsgCreateBeeResponse = {};
export const MsgCreateBeeResponse = {
    encode(message, writer = Writer.create()) {
        if (message.bee !== undefined) {
            Bees.encode(message.bee, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateBeeResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bee = Bees.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateBeeResponse };
        if (object.bee !== undefined && object.bee !== null) {
            message.bee = Bees.fromJSON(object.bee);
        }
        else {
            message.bee = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.bee !== undefined &&
            (obj.bee = message.bee ? Bees.toJSON(message.bee) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateBeeResponse };
        if (object.bee !== undefined && object.bee !== null) {
            message.bee = Bees.fromPartial(object.bee);
        }
        else {
            message.bee = undefined;
        }
        return message;
    },
};
const baseMsgSetApiaryHouseForBee = {
    creator: "",
    beeId: 0,
    apiaryId: 0,
};
export const MsgSetApiaryHouseForBee = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.beeId !== 0) {
            writer.uint32(16).uint64(message.beeId);
        }
        if (message.apiaryId !== 0) {
            writer.uint32(24).uint64(message.apiaryId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgSetApiaryHouseForBee,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.beeId = longToNumber(reader.uint64());
                    break;
                case 3:
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
            ...baseMsgSetApiaryHouseForBee,
        };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.beeId !== undefined && object.beeId !== null) {
            message.beeId = Number(object.beeId);
        }
        else {
            message.beeId = 0;
        }
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
        message.creator !== undefined && (obj.creator = message.creator);
        message.beeId !== undefined && (obj.beeId = message.beeId);
        message.apiaryId !== undefined && (obj.apiaryId = message.apiaryId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgSetApiaryHouseForBee,
        };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.beeId !== undefined && object.beeId !== null) {
            message.beeId = object.beeId;
        }
        else {
            message.beeId = 0;
        }
        if (object.apiaryId !== undefined && object.apiaryId !== null) {
            message.apiaryId = object.apiaryId;
        }
        else {
            message.apiaryId = 0;
        }
        return message;
    },
};
const baseMsgSetApiaryHouseForBeeResponse = {};
export const MsgSetApiaryHouseForBeeResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgSetApiaryHouseForBeeResponse,
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
            ...baseMsgSetApiaryHouseForBeeResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgSetApiaryHouseForBeeResponse,
        };
        return message;
    },
};
const baseMsgUnsetApiaryHouseForBee = { creator: "", beeId: 0 };
export const MsgUnsetApiaryHouseForBee = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.beeId !== 0) {
            writer.uint32(16).uint64(message.beeId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgUnsetApiaryHouseForBee,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.beeId = longToNumber(reader.uint64());
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
            ...baseMsgUnsetApiaryHouseForBee,
        };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.beeId !== undefined && object.beeId !== null) {
            message.beeId = Number(object.beeId);
        }
        else {
            message.beeId = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.beeId !== undefined && (obj.beeId = message.beeId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgUnsetApiaryHouseForBee,
        };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.beeId !== undefined && object.beeId !== null) {
            message.beeId = object.beeId;
        }
        else {
            message.beeId = 0;
        }
        return message;
    },
};
const baseMsgUnsetApiaryHouseForBeeResponse = {};
export const MsgUnsetApiaryHouseForBeeResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgUnsetApiaryHouseForBeeResponse,
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
            ...baseMsgUnsetApiaryHouseForBeeResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgUnsetApiaryHouseForBeeResponse,
        };
        return message;
    },
};
const baseMsgCollectHoneyFromApiary = { creator: "", apiaryId: 0 };
export const MsgCollectHoneyFromApiary = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.apiaryId !== 0) {
            writer.uint32(16).uint64(message.apiaryId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgCollectHoneyFromApiary,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
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
            ...baseMsgCollectHoneyFromApiary,
        };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
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
        message.creator !== undefined && (obj.creator = message.creator);
        message.apiaryId !== undefined && (obj.apiaryId = message.apiaryId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgCollectHoneyFromApiary,
        };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.apiaryId !== undefined && object.apiaryId !== null) {
            message.apiaryId = object.apiaryId;
        }
        else {
            message.apiaryId = 0;
        }
        return message;
    },
};
const baseMsgCollectHoneyFromApiaryResponse = {};
export const MsgCollectHoneyFromApiaryResponse = {
    encode(message, writer = Writer.create()) {
        if (message.countHoney !== undefined) {
            Coin.encode(message.countHoney, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgCollectHoneyFromApiaryResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.countHoney = Coin.decode(reader, reader.uint32());
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
            ...baseMsgCollectHoneyFromApiaryResponse,
        };
        if (object.countHoney !== undefined && object.countHoney !== null) {
            message.countHoney = Coin.fromJSON(object.countHoney);
        }
        else {
            message.countHoney = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.countHoney !== undefined &&
            (obj.countHoney = message.countHoney
                ? Coin.toJSON(message.countHoney)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgCollectHoneyFromApiaryResponse,
        };
        if (object.countHoney !== undefined && object.countHoney !== null) {
            message.countHoney = Coin.fromPartial(object.countHoney);
        }
        else {
            message.countHoney = undefined;
        }
        return message;
    },
};
const baseMsgClearApiaryFromBees = { creator: "", apiaryId: 0 };
export const MsgClearApiaryFromBees = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.apiaryId !== 0) {
            writer.uint32(16).uint64(message.apiaryId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgClearApiaryFromBees };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
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
        const message = { ...baseMsgClearApiaryFromBees };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
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
        message.creator !== undefined && (obj.creator = message.creator);
        message.apiaryId !== undefined && (obj.apiaryId = message.apiaryId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgClearApiaryFromBees };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.apiaryId !== undefined && object.apiaryId !== null) {
            message.apiaryId = object.apiaryId;
        }
        else {
            message.apiaryId = 0;
        }
        return message;
    },
};
const baseMsgClearApiaryFromBeesResponse = {};
export const MsgClearApiaryFromBeesResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgClearApiaryFromBeesResponse,
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
            ...baseMsgClearApiaryFromBeesResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgClearApiaryFromBeesResponse,
        };
        return message;
    },
};
const baseMsgDeleteApiary = { creator: "", apiaryId: 0 };
export const MsgDeleteApiary = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.apiaryId !== 0) {
            writer.uint32(16).uint64(message.apiaryId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteApiary };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
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
        const message = { ...baseMsgDeleteApiary };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
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
        message.creator !== undefined && (obj.creator = message.creator);
        message.apiaryId !== undefined && (obj.apiaryId = message.apiaryId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteApiary };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.apiaryId !== undefined && object.apiaryId !== null) {
            message.apiaryId = object.apiaryId;
        }
        else {
            message.apiaryId = 0;
        }
        return message;
    },
};
const baseMsgDeleteApiaryResponse = {};
export const MsgDeleteApiaryResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgDeleteApiaryResponse,
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
            ...baseMsgDeleteApiaryResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgDeleteApiaryResponse,
        };
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
    InitGameAndExtendField(request) {
        const data = MsgInitGameAndExtendField.encode(request).finish();
        const promise = this.rpc.request("MonetaToday.honeywood.bears.Msg", "InitGameAndExtendField", data);
        return promise.then((data) => MsgInitGameAndExtendFieldResponse.decode(new Reader(data)));
    }
    ExtendField(request) {
        const data = MsgExtendField.encode(request).finish();
        const promise = this.rpc.request("MonetaToday.honeywood.bears.Msg", "ExtendField", data);
        return promise.then((data) => MsgExtendFieldResponse.decode(new Reader(data)));
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
    MoveItemOnField(request) {
        const data = MsgMoveItemOnField.encode(request).finish();
        const promise = this.rpc.request("MonetaToday.honeywood.bears.Msg", "MoveItemOnField", data);
        return promise.then((data) => MsgMoveItemOnFieldResponse.decode(new Reader(data)));
    }
    InitGameAndCreateDecoration(request) {
        const data = MsgInitGameAndCreateDecoration.encode(request).finish();
        const promise = this.rpc.request("MonetaToday.honeywood.bears.Msg", "InitGameAndCreateDecoration", data);
        return promise.then((data) => MsgInitGameAndCreateDecorationResponse.decode(new Reader(data)));
    }
    CreateDecoration(request) {
        const data = MsgCreateDecoration.encode(request).finish();
        const promise = this.rpc.request("MonetaToday.honeywood.bears.Msg", "CreateDecoration", data);
        return promise.then((data) => MsgCreateDecorationResponse.decode(new Reader(data)));
    }
    SetDecorationPosition(request) {
        const data = MsgSetDecorationPosition.encode(request).finish();
        const promise = this.rpc.request("MonetaToday.honeywood.bears.Msg", "SetDecorationPosition", data);
        return promise.then((data) => MsgSetDecorationPositionResponse.decode(new Reader(data)));
    }
    UnsetDecorationPosition(request) {
        const data = MsgUnsetDecorationPosition.encode(request).finish();
        const promise = this.rpc.request("MonetaToday.honeywood.bears.Msg", "UnsetDecorationPosition", data);
        return promise.then((data) => MsgUnsetDecorationPositionResponse.decode(new Reader(data)));
    }
    InitGameAndCreateApiary(request) {
        const data = MsgInitGameAndCreateApiary.encode(request).finish();
        const promise = this.rpc.request("MonetaToday.honeywood.bears.Msg", "InitGameAndCreateApiary", data);
        return promise.then((data) => MsgInitGameAndCreateApiaryResponse.decode(new Reader(data)));
    }
    CreateApiary(request) {
        const data = MsgCreateApiary.encode(request).finish();
        const promise = this.rpc.request("MonetaToday.honeywood.bears.Msg", "CreateApiary", data);
        return promise.then((data) => MsgCreateApiaryResponse.decode(new Reader(data)));
    }
    InitGameAndCreateBee(request) {
        const data = MsgInitGameAndCreateBee.encode(request).finish();
        const promise = this.rpc.request("MonetaToday.honeywood.bears.Msg", "InitGameAndCreateBee", data);
        return promise.then((data) => MsgInitGameAndCreateBeeResponse.decode(new Reader(data)));
    }
    CreateBee(request) {
        const data = MsgCreateBee.encode(request).finish();
        const promise = this.rpc.request("MonetaToday.honeywood.bears.Msg", "CreateBee", data);
        return promise.then((data) => MsgCreateBeeResponse.decode(new Reader(data)));
    }
    SetApiaryHouseForBee(request) {
        const data = MsgSetApiaryHouseForBee.encode(request).finish();
        const promise = this.rpc.request("MonetaToday.honeywood.bears.Msg", "SetApiaryHouseForBee", data);
        return promise.then((data) => MsgSetApiaryHouseForBeeResponse.decode(new Reader(data)));
    }
    UnsetApiaryHouseForBee(request) {
        const data = MsgUnsetApiaryHouseForBee.encode(request).finish();
        const promise = this.rpc.request("MonetaToday.honeywood.bears.Msg", "UnsetApiaryHouseForBee", data);
        return promise.then((data) => MsgUnsetApiaryHouseForBeeResponse.decode(new Reader(data)));
    }
    CollectHoneyFromApiary(request) {
        const data = MsgCollectHoneyFromApiary.encode(request).finish();
        const promise = this.rpc.request("MonetaToday.honeywood.bears.Msg", "CollectHoneyFromApiary", data);
        return promise.then((data) => MsgCollectHoneyFromApiaryResponse.decode(new Reader(data)));
    }
    ClearApiaryFromBees(request) {
        const data = MsgClearApiaryFromBees.encode(request).finish();
        const promise = this.rpc.request("MonetaToday.honeywood.bears.Msg", "ClearApiaryFromBees", data);
        return promise.then((data) => MsgClearApiaryFromBeesResponse.decode(new Reader(data)));
    }
    DeleteApiary(request) {
        const data = MsgDeleteApiary.encode(request).finish();
        const promise = this.rpc.request("MonetaToday.honeywood.bears.Msg", "DeleteApiary", data);
        return promise.then((data) => MsgDeleteApiaryResponse.decode(new Reader(data)));
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
