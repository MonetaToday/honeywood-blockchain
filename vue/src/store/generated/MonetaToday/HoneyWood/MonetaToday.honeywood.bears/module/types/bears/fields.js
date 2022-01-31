/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Tiles } from "../bears/tiles";
import { BearOwner } from "../bears/bears";
export const protobufPackage = "MonetaToday.honeywood.bears";
export var Fields_FieldTypes;
(function (Fields_FieldTypes) {
    Fields_FieldTypes[Fields_FieldTypes["DEFAULT"] = 0] = "DEFAULT";
    Fields_FieldTypes[Fields_FieldTypes["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Fields_FieldTypes || (Fields_FieldTypes = {}));
export function fields_FieldTypesFromJSON(object) {
    switch (object) {
        case 0:
        case "DEFAULT":
            return Fields_FieldTypes.DEFAULT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Fields_FieldTypes.UNRECOGNIZED;
    }
}
export function fields_FieldTypesToJSON(object) {
    switch (object) {
        case Fields_FieldTypes.DEFAULT:
            return "DEFAULT";
        default:
            return "UNKNOWN";
    }
}
const baseFieldRows = {};
export const FieldRows = {
    encode(message, writer = Writer.create()) {
        for (const v of message.columns) {
            Tiles.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseFieldRows };
        message.columns = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 4:
                    message.columns.push(Tiles.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseFieldRows };
        message.columns = [];
        if (object.columns !== undefined && object.columns !== null) {
            for (const e of object.columns) {
                message.columns.push(Tiles.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.columns) {
            obj.columns = message.columns.map((e) => e ? Tiles.toJSON(e) : undefined);
        }
        else {
            obj.columns = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseFieldRows };
        message.columns = [];
        if (object.columns !== undefined && object.columns !== null) {
            for (const e of object.columns) {
                message.columns.push(Tiles.fromPartial(e));
            }
        }
        return message;
    },
};
const baseItemPosition = { fieldId: 0, rowId: 0, columnId: 0 };
export const ItemPosition = {
    encode(message, writer = Writer.create()) {
        if (message.fieldId !== 0) {
            writer.uint32(8).uint64(message.fieldId);
        }
        if (message.rowId !== 0) {
            writer.uint32(16).uint64(message.rowId);
        }
        if (message.columnId !== 0) {
            writer.uint32(24).uint64(message.columnId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseItemPosition };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fieldId = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.rowId = longToNumber(reader.uint64());
                    break;
                case 3:
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
        const message = { ...baseItemPosition };
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
        message.fieldId !== undefined && (obj.fieldId = message.fieldId);
        message.rowId !== undefined && (obj.rowId = message.rowId);
        message.columnId !== undefined && (obj.columnId = message.columnId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseItemPosition };
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
const baseFields = { id: 0, fieldType: 0, countTiles: 0 };
export const Fields = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.bearOwner !== undefined) {
            BearOwner.encode(message.bearOwner, writer.uint32(18).fork()).ldelim();
        }
        if (message.fieldType !== 0) {
            writer.uint32(24).int32(message.fieldType);
        }
        for (const v of message.rows) {
            FieldRows.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.countTiles !== 0) {
            writer.uint32(40).uint64(message.countTiles);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseFields };
        message.rows = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.bearOwner = BearOwner.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.fieldType = reader.int32();
                    break;
                case 4:
                    message.rows.push(FieldRows.decode(reader, reader.uint32()));
                    break;
                case 5:
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
        const message = { ...baseFields };
        message.rows = [];
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        if (object.bearOwner !== undefined && object.bearOwner !== null) {
            message.bearOwner = BearOwner.fromJSON(object.bearOwner);
        }
        else {
            message.bearOwner = undefined;
        }
        if (object.fieldType !== undefined && object.fieldType !== null) {
            message.fieldType = fields_FieldTypesFromJSON(object.fieldType);
        }
        else {
            message.fieldType = 0;
        }
        if (object.rows !== undefined && object.rows !== null) {
            for (const e of object.rows) {
                message.rows.push(FieldRows.fromJSON(e));
            }
        }
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
        message.id !== undefined && (obj.id = message.id);
        message.bearOwner !== undefined &&
            (obj.bearOwner = message.bearOwner
                ? BearOwner.toJSON(message.bearOwner)
                : undefined);
        message.fieldType !== undefined &&
            (obj.fieldType = fields_FieldTypesToJSON(message.fieldType));
        if (message.rows) {
            obj.rows = message.rows.map((e) => (e ? FieldRows.toJSON(e) : undefined));
        }
        else {
            obj.rows = [];
        }
        message.countTiles !== undefined && (obj.countTiles = message.countTiles);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseFields };
        message.rows = [];
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        if (object.bearOwner !== undefined && object.bearOwner !== null) {
            message.bearOwner = BearOwner.fromPartial(object.bearOwner);
        }
        else {
            message.bearOwner = undefined;
        }
        if (object.fieldType !== undefined && object.fieldType !== null) {
            message.fieldType = object.fieldType;
        }
        else {
            message.fieldType = 0;
        }
        if (object.rows !== undefined && object.rows !== null) {
            for (const e of object.rows) {
                message.rows.push(FieldRows.fromPartial(e));
            }
        }
        if (object.countTiles !== undefined && object.countTiles !== null) {
            message.countTiles = object.countTiles;
        }
        else {
            message.countTiles = 0;
        }
        return message;
    },
};
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
