/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { ItemPosition } from "../bears/fields";
export const protobufPackage = "MonetaToday.honeywood.bears";
export var Apiaries_ApiaryTypes;
(function (Apiaries_ApiaryTypes) {
    Apiaries_ApiaryTypes[Apiaries_ApiaryTypes["BEE_HOUSE"] = 0] = "BEE_HOUSE";
    Apiaries_ApiaryTypes[Apiaries_ApiaryTypes["APIARY"] = 1] = "APIARY";
    Apiaries_ApiaryTypes[Apiaries_ApiaryTypes["ALVEARY"] = 2] = "ALVEARY";
    Apiaries_ApiaryTypes[Apiaries_ApiaryTypes["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Apiaries_ApiaryTypes || (Apiaries_ApiaryTypes = {}));
export function apiaries_ApiaryTypesFromJSON(object) {
    switch (object) {
        case 0:
        case "BEE_HOUSE":
            return Apiaries_ApiaryTypes.BEE_HOUSE;
        case 1:
        case "APIARY":
            return Apiaries_ApiaryTypes.APIARY;
        case 2:
        case "ALVEARY":
            return Apiaries_ApiaryTypes.ALVEARY;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Apiaries_ApiaryTypes.UNRECOGNIZED;
    }
}
export function apiaries_ApiaryTypesToJSON(object) {
    switch (object) {
        case Apiaries_ApiaryTypes.BEE_HOUSE:
            return "BEE_HOUSE";
        case Apiaries_ApiaryTypes.APIARY:
            return "APIARY";
        case Apiaries_ApiaryTypes.ALVEARY:
            return "ALVEARY";
        default:
            return "UNKNOWN";
    }
}
const baseApiaries = { id: 0, bearId: 0, apiaryType: 0 };
export const Apiaries = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.bearId !== 0) {
            writer.uint32(16).uint64(message.bearId);
        }
        if (message.apiaryType !== 0) {
            writer.uint32(24).int32(message.apiaryType);
        }
        if (message.position !== undefined) {
            ItemPosition.encode(message.position, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseApiaries };
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
                    message.apiaryType = reader.int32();
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
        const message = { ...baseApiaries };
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
        if (object.apiaryType !== undefined && object.apiaryType !== null) {
            message.apiaryType = apiaries_ApiaryTypesFromJSON(object.apiaryType);
        }
        else {
            message.apiaryType = 0;
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
        message.apiaryType !== undefined &&
            (obj.apiaryType = apiaries_ApiaryTypesToJSON(message.apiaryType));
        message.position !== undefined &&
            (obj.position = message.position
                ? ItemPosition.toJSON(message.position)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseApiaries };
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
        if (object.apiaryType !== undefined && object.apiaryType !== null) {
            message.apiaryType = object.apiaryType;
        }
        else {
            message.apiaryType = 0;
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
