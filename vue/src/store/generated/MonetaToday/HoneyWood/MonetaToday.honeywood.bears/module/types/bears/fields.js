/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { BearOwner } from "../bears/bears";
import { Grounds } from "../bears/grounds";
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
const baseFields = { id: 0, fieldType: 0, countGrounds: 0 };
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
        const message = { ...baseFields };
        message.grounds = [];
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
        const message = { ...baseFields };
        message.grounds = [];
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
        message.bearOwner !== undefined &&
            (obj.bearOwner = message.bearOwner
                ? BearOwner.toJSON(message.bearOwner)
                : undefined);
        message.fieldType !== undefined &&
            (obj.fieldType = fields_FieldTypesToJSON(message.fieldType));
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
        const message = { ...baseFields };
        message.grounds = [];
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
