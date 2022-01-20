/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "MonetaToday.honeywood.bears";
export var Grounds_Items_ItemTypes;
(function (Grounds_Items_ItemTypes) {
    Grounds_Items_ItemTypes[Grounds_Items_ItemTypes["APIARY"] = 0] = "APIARY";
    Grounds_Items_ItemTypes[Grounds_Items_ItemTypes["TREE"] = 1] = "TREE";
    Grounds_Items_ItemTypes[Grounds_Items_ItemTypes["DECORATION"] = 2] = "DECORATION";
    Grounds_Items_ItemTypes[Grounds_Items_ItemTypes["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Grounds_Items_ItemTypes || (Grounds_Items_ItemTypes = {}));
export function grounds_Items_ItemTypesFromJSON(object) {
    switch (object) {
        case 0:
        case "APIARY":
            return Grounds_Items_ItemTypes.APIARY;
        case 1:
        case "TREE":
            return Grounds_Items_ItemTypes.TREE;
        case 2:
        case "DECORATION":
            return Grounds_Items_ItemTypes.DECORATION;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Grounds_Items_ItemTypes.UNRECOGNIZED;
    }
}
export function grounds_Items_ItemTypesToJSON(object) {
    switch (object) {
        case Grounds_Items_ItemTypes.APIARY:
            return "APIARY";
        case Grounds_Items_ItemTypes.TREE:
            return "TREE";
        case Grounds_Items_ItemTypes.DECORATION:
            return "DECORATION";
        default:
            return "UNKNOWN";
    }
}
const baseGrounds = {};
export const Grounds = {
    encode(message, writer = Writer.create()) {
        if (message.item !== undefined) {
            Grounds_Items.encode(message.item, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGrounds };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.item = Grounds_Items.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGrounds };
        if (object.item !== undefined && object.item !== null) {
            message.item = Grounds_Items.fromJSON(object.item);
        }
        else {
            message.item = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.item !== undefined &&
            (obj.item = message.item
                ? Grounds_Items.toJSON(message.item)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGrounds };
        if (object.item !== undefined && object.item !== null) {
            message.item = Grounds_Items.fromPartial(object.item);
        }
        else {
            message.item = undefined;
        }
        return message;
    },
};
const baseGrounds_Items = { itemId: 0, itemType: 0 };
export const Grounds_Items = {
    encode(message, writer = Writer.create()) {
        if (message.itemId !== 0) {
            writer.uint32(8).uint64(message.itemId);
        }
        if (message.itemType !== 0) {
            writer.uint32(16).int32(message.itemType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGrounds_Items };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.itemId = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.itemType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGrounds_Items };
        if (object.itemId !== undefined && object.itemId !== null) {
            message.itemId = Number(object.itemId);
        }
        else {
            message.itemId = 0;
        }
        if (object.itemType !== undefined && object.itemType !== null) {
            message.itemType = grounds_Items_ItemTypesFromJSON(object.itemType);
        }
        else {
            message.itemType = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.itemId !== undefined && (obj.itemId = message.itemId);
        message.itemType !== undefined &&
            (obj.itemType = grounds_Items_ItemTypesToJSON(message.itemType));
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGrounds_Items };
        if (object.itemId !== undefined && object.itemId !== null) {
            message.itemId = object.itemId;
        }
        else {
            message.itemId = 0;
        }
        if (object.itemType !== undefined && object.itemType !== null) {
            message.itemType = object.itemType;
        }
        else {
            message.itemType = 0;
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