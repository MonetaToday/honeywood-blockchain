/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { ItemPosition } from "../bears/fields";
export const protobufPackage = "MonetaToday.honeywood.bears";
export var Decorations_DecorationTypes;
(function (Decorations_DecorationTypes) {
    Decorations_DecorationTypes[Decorations_DecorationTypes["FLOWERS"] = 0] = "FLOWERS";
    Decorations_DecorationTypes[Decorations_DecorationTypes["FLAG"] = 1] = "FLAG";
    Decorations_DecorationTypes[Decorations_DecorationTypes["LAMP"] = 2] = "LAMP";
    Decorations_DecorationTypes[Decorations_DecorationTypes["GREEN_BEE"] = 3] = "GREEN_BEE";
    Decorations_DecorationTypes[Decorations_DecorationTypes["FOUNTAIN"] = 4] = "FOUNTAIN";
    Decorations_DecorationTypes[Decorations_DecorationTypes["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Decorations_DecorationTypes || (Decorations_DecorationTypes = {}));
export function decorations_DecorationTypesFromJSON(object) {
    switch (object) {
        case 0:
        case "FLOWERS":
            return Decorations_DecorationTypes.FLOWERS;
        case 1:
        case "FLAG":
            return Decorations_DecorationTypes.FLAG;
        case 2:
        case "LAMP":
            return Decorations_DecorationTypes.LAMP;
        case 3:
        case "GREEN_BEE":
            return Decorations_DecorationTypes.GREEN_BEE;
        case 4:
        case "FOUNTAIN":
            return Decorations_DecorationTypes.FOUNTAIN;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Decorations_DecorationTypes.UNRECOGNIZED;
    }
}
export function decorations_DecorationTypesToJSON(object) {
    switch (object) {
        case Decorations_DecorationTypes.FLOWERS:
            return "FLOWERS";
        case Decorations_DecorationTypes.FLAG:
            return "FLAG";
        case Decorations_DecorationTypes.LAMP:
            return "LAMP";
        case Decorations_DecorationTypes.GREEN_BEE:
            return "GREEN_BEE";
        case Decorations_DecorationTypes.FOUNTAIN:
            return "FOUNTAIN";
        default:
            return "UNKNOWN";
    }
}
const baseDecorations = { id: 0, bearId: 0, decorationType: 0 };
export const Decorations = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.bearId !== 0) {
            writer.uint32(16).uint64(message.bearId);
        }
        if (message.decorationType !== 0) {
            writer.uint32(24).int32(message.decorationType);
        }
        if (message.position !== undefined) {
            ItemPosition.encode(message.position, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDecorations };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.bearId = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.decorationType = reader.int32();
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
        const message = { ...baseDecorations };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        if (object.bearId !== undefined && object.bearId !== null) {
            message.bearId = Number(object.bearId);
        }
        else {
            message.bearId = 0;
        }
        if (object.decorationType !== undefined && object.decorationType !== null) {
            message.decorationType = decorations_DecorationTypesFromJSON(object.decorationType);
        }
        else {
            message.decorationType = 0;
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
        message.bearId !== undefined && (obj.bearId = message.bearId);
        message.decorationType !== undefined &&
            (obj.decorationType = decorations_DecorationTypesToJSON(message.decorationType));
        message.position !== undefined &&
            (obj.position = message.position
                ? ItemPosition.toJSON(message.position)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDecorations };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
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
            message.decorationType = 0;
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
