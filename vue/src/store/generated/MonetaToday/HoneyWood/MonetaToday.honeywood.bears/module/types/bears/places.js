/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Grounds } from "../bears/grounds";
export const protobufPackage = "MonetaToday.honeywood.bears";
export var Places_PlaceTypes;
(function (Places_PlaceTypes) {
    Places_PlaceTypes[Places_PlaceTypes["DEFAULT"] = 0] = "DEFAULT";
    Places_PlaceTypes[Places_PlaceTypes["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Places_PlaceTypes || (Places_PlaceTypes = {}));
export function places_PlaceTypesFromJSON(object) {
    switch (object) {
        case 0:
        case "DEFAULT":
            return Places_PlaceTypes.DEFAULT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Places_PlaceTypes.UNRECOGNIZED;
    }
}
export function places_PlaceTypesToJSON(object) {
    switch (object) {
        case Places_PlaceTypes.DEFAULT:
            return "DEFAULT";
        default:
            return "UNKNOWN";
    }
}
const basePlaces = { id: 0, bearId: 0, placeType: 0, countGrounds: 0 };
export const Places = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.bearId !== 0) {
            writer.uint32(16).uint64(message.bearId);
        }
        if (message.placeType !== 0) {
            writer.uint32(24).int32(message.placeType);
        }
        for (const v of message.grounds) {
            Grounds.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.countGrounds !== 0) {
            writer.uint32(40).uint64(message.countGrounds);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePlaces };
        message.grounds = [];
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
                    message.placeType = reader.int32();
                    break;
                case 4:
                    message.grounds.push(Grounds.decode(reader, reader.uint32()));
                    break;
                case 5:
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
        const message = { ...basePlaces };
        message.grounds = [];
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
        if (object.placeType !== undefined && object.placeType !== null) {
            message.placeType = places_PlaceTypesFromJSON(object.placeType);
        }
        else {
            message.placeType = 0;
        }
        if (object.grounds !== undefined && object.grounds !== null) {
            for (const e of object.grounds) {
                message.grounds.push(Grounds.fromJSON(e));
            }
        }
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
        message.id !== undefined && (obj.id = message.id);
        message.bearId !== undefined && (obj.bearId = message.bearId);
        message.placeType !== undefined &&
            (obj.placeType = places_PlaceTypesToJSON(message.placeType));
        if (message.grounds) {
            obj.grounds = message.grounds.map((e) => e ? Grounds.toJSON(e) : undefined);
        }
        else {
            obj.grounds = [];
        }
        message.countGrounds !== undefined &&
            (obj.countGrounds = message.countGrounds);
        return obj;
    },
    fromPartial(object) {
        const message = { ...basePlaces };
        message.grounds = [];
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
        if (object.placeType !== undefined && object.placeType !== null) {
            message.placeType = object.placeType;
        }
        else {
            message.placeType = 0;
        }
        if (object.grounds !== undefined && object.grounds !== null) {
            for (const e of object.grounds) {
                message.grounds.push(Grounds.fromPartial(e));
            }
        }
        if (object.countGrounds !== undefined && object.countGrounds !== null) {
            message.countGrounds = object.countGrounds;
        }
        else {
            message.countGrounds = 0;
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