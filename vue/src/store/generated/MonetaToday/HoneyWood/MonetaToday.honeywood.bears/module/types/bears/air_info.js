/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "MonetaToday.honeywood.bears";
const baseAirHistory = { height: 0, count: "", purity: "" };
export const AirHistory = {
    encode(message, writer = Writer.create()) {
        if (message.height !== 0) {
            writer.uint32(8).uint64(message.height);
        }
        if (message.count !== "") {
            writer.uint32(18).string(message.count);
        }
        if (message.purity !== "") {
            writer.uint32(26).string(message.purity);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAirHistory };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.count = reader.string();
                    break;
                case 3:
                    message.purity = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseAirHistory };
        if (object.height !== undefined && object.height !== null) {
            message.height = Number(object.height);
        }
        else {
            message.height = 0;
        }
        if (object.count !== undefined && object.count !== null) {
            message.count = String(object.count);
        }
        else {
            message.count = "";
        }
        if (object.purity !== undefined && object.purity !== null) {
            message.purity = String(object.purity);
        }
        else {
            message.purity = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = message.height);
        message.count !== undefined && (obj.count = message.count);
        message.purity !== undefined && (obj.purity = message.purity);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseAirHistory };
        if (object.height !== undefined && object.height !== null) {
            message.height = object.height;
        }
        else {
            message.height = 0;
        }
        if (object.count !== undefined && object.count !== null) {
            message.count = object.count;
        }
        else {
            message.count = "";
        }
        if (object.purity !== undefined && object.purity !== null) {
            message.purity = object.purity;
        }
        else {
            message.purity = "";
        }
        return message;
    },
};
const baseAirInfo = { supply: "", consume: "" };
export const AirInfo = {
    encode(message, writer = Writer.create()) {
        if (message.supply !== "") {
            writer.uint32(10).string(message.supply);
        }
        if (message.consume !== "") {
            writer.uint32(18).string(message.consume);
        }
        for (const v of message.history) {
            AirHistory.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAirInfo };
        message.history = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.supply = reader.string();
                    break;
                case 2:
                    message.consume = reader.string();
                    break;
                case 3:
                    message.history.push(AirHistory.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseAirInfo };
        message.history = [];
        if (object.supply !== undefined && object.supply !== null) {
            message.supply = String(object.supply);
        }
        else {
            message.supply = "";
        }
        if (object.consume !== undefined && object.consume !== null) {
            message.consume = String(object.consume);
        }
        else {
            message.consume = "";
        }
        if (object.history !== undefined && object.history !== null) {
            for (const e of object.history) {
                message.history.push(AirHistory.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.supply !== undefined && (obj.supply = message.supply);
        message.consume !== undefined && (obj.consume = message.consume);
        if (message.history) {
            obj.history = message.history.map((e) => e ? AirHistory.toJSON(e) : undefined);
        }
        else {
            obj.history = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseAirInfo };
        message.history = [];
        if (object.supply !== undefined && object.supply !== null) {
            message.supply = object.supply;
        }
        else {
            message.supply = "";
        }
        if (object.consume !== undefined && object.consume !== null) {
            message.consume = object.consume;
        }
        else {
            message.consume = "";
        }
        if (object.history !== undefined && object.history !== null) {
            for (const e of object.history) {
                message.history.push(AirHistory.fromPartial(e));
            }
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
