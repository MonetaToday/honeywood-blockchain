/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { BearOwner } from "../bears/bears";
import { ItemPosition } from "../bears/fields";
export const protobufPackage = "MonetaToday.honeywood.bears";
export var Trees_TreeTypes;
(function (Trees_TreeTypes) {
    Trees_TreeTypes[Trees_TreeTypes["OAK"] = 0] = "OAK";
    Trees_TreeTypes[Trees_TreeTypes["SPRUCE"] = 1] = "SPRUCE";
    Trees_TreeTypes[Trees_TreeTypes["APPLETREE"] = 2] = "APPLETREE";
    Trees_TreeTypes[Trees_TreeTypes["WILLOW"] = 3] = "WILLOW";
    Trees_TreeTypes[Trees_TreeTypes["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Trees_TreeTypes || (Trees_TreeTypes = {}));
export function trees_TreeTypesFromJSON(object) {
    switch (object) {
        case 0:
        case "OAK":
            return Trees_TreeTypes.OAK;
        case 1:
        case "SPRUCE":
            return Trees_TreeTypes.SPRUCE;
        case 2:
        case "APPLETREE":
            return Trees_TreeTypes.APPLETREE;
        case 3:
        case "WILLOW":
            return Trees_TreeTypes.WILLOW;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Trees_TreeTypes.UNRECOGNIZED;
    }
}
export function trees_TreeTypesToJSON(object) {
    switch (object) {
        case Trees_TreeTypes.OAK:
            return "OAK";
        case Trees_TreeTypes.SPRUCE:
            return "SPRUCE";
        case Trees_TreeTypes.APPLETREE:
            return "APPLETREE";
        case Trees_TreeTypes.WILLOW:
            return "WILLOW";
        default:
            return "UNKNOWN";
    }
}
const baseTrees = { id: 0, treeType: 0 };
export const Trees = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.treeType !== 0) {
            writer.uint32(16).int32(message.treeType);
        }
        if (message.bearOwner !== undefined) {
            BearOwner.encode(message.bearOwner, writer.uint32(26).fork()).ldelim();
        }
        if (message.position !== undefined) {
            ItemPosition.encode(message.position, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTrees };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.treeType = reader.int32();
                    break;
                case 3:
                    message.bearOwner = BearOwner.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.position = ItemPosition.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseTrees };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        if (object.treeType !== undefined && object.treeType !== null) {
            message.treeType = trees_TreeTypesFromJSON(object.treeType);
        }
        else {
            message.treeType = 0;
        }
        if (object.bearOwner !== undefined && object.bearOwner !== null) {
            message.bearOwner = BearOwner.fromJSON(object.bearOwner);
        }
        else {
            message.bearOwner = undefined;
        }
        if (object.position !== undefined && object.position !== null) {
            message.position = ItemPosition.fromJSON(object.position);
        }
        else {
            message.position = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.treeType !== undefined &&
            (obj.treeType = trees_TreeTypesToJSON(message.treeType));
        message.bearOwner !== undefined &&
            (obj.bearOwner = message.bearOwner
                ? BearOwner.toJSON(message.bearOwner)
                : undefined);
        message.position !== undefined &&
            (obj.position = message.position
                ? ItemPosition.toJSON(message.position)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseTrees };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        if (object.treeType !== undefined && object.treeType !== null) {
            message.treeType = object.treeType;
        }
        else {
            message.treeType = 0;
        }
        if (object.bearOwner !== undefined && object.bearOwner !== null) {
            message.bearOwner = BearOwner.fromPartial(object.bearOwner);
        }
        else {
            message.bearOwner = undefined;
        }
        if (object.position !== undefined && object.position !== null) {
            message.position = ItemPosition.fromPartial(object.position);
        }
        else {
            message.position = undefined;
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
