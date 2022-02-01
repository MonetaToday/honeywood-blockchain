/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Trees } from "../bears/trees";
import { Decorations } from "../bears/decorations";
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
const baseMsgInitGameAndExtendField = { creator: "" };
export const MsgInitGameAndExtendField = {
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
            ...baseMsgInitGameAndExtendField,
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
            ...baseMsgInitGameAndExtendField,
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
            ...baseMsgInitGameAndExtendField,
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
const baseMsgExtendField = { creator: "", id: 0 };
export const MsgExtendField = {
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
        const message = { ...baseMsgExtendField };
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
        const message = { ...baseMsgExtendField };
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
        const message = { ...baseMsgExtendField };
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
    decorationType: "",
};
export const MsgInitGameAndCreateDecoration = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.decorationType !== "") {
            writer.uint32(18).string(message.decorationType);
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
