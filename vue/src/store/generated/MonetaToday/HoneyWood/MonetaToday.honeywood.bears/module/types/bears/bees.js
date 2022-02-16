/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";
import { BearOwner } from "../bears/bears";
export const protobufPackage = "MonetaToday.honeywood.bears";
const baseBeeParams = {
    beeType: "",
    honeyPerBlock: "",
    bodySize: 0,
    airSense: "",
};
export const BeeParams = {
    encode(message, writer = Writer.create()) {
        if (message.beeType !== "") {
            writer.uint32(10).string(message.beeType);
        }
        for (const v of message.price) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.honeyPerBlock !== "") {
            writer.uint32(26).string(message.honeyPerBlock);
        }
        if (message.bodySize !== 0) {
            writer.uint32(32).uint64(message.bodySize);
        }
        if (message.airSense !== "") {
            writer.uint32(42).string(message.airSense);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBeeParams };
        message.price = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.beeType = reader.string();
                    break;
                case 2:
                    message.price.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.honeyPerBlock = reader.string();
                    break;
                case 4:
                    message.bodySize = longToNumber(reader.uint64());
                    break;
                case 5:
                    message.airSense = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseBeeParams };
        message.price = [];
        if (object.beeType !== undefined && object.beeType !== null) {
            message.beeType = String(object.beeType);
        }
        else {
            message.beeType = "";
        }
        if (object.price !== undefined && object.price !== null) {
            for (const e of object.price) {
                message.price.push(Coin.fromJSON(e));
            }
        }
        if (object.honeyPerBlock !== undefined && object.honeyPerBlock !== null) {
            message.honeyPerBlock = String(object.honeyPerBlock);
        }
        else {
            message.honeyPerBlock = "";
        }
        if (object.bodySize !== undefined && object.bodySize !== null) {
            message.bodySize = Number(object.bodySize);
        }
        else {
            message.bodySize = 0;
        }
        if (object.airSense !== undefined && object.airSense !== null) {
            message.airSense = String(object.airSense);
        }
        else {
            message.airSense = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.beeType !== undefined && (obj.beeType = message.beeType);
        if (message.price) {
            obj.price = message.price.map((e) => (e ? Coin.toJSON(e) : undefined));
        }
        else {
            obj.price = [];
        }
        message.honeyPerBlock !== undefined &&
            (obj.honeyPerBlock = message.honeyPerBlock);
        message.bodySize !== undefined && (obj.bodySize = message.bodySize);
        message.airSense !== undefined &&
            (obj.airSense = message.airSense);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseBeeParams };
        message.price = [];
        if (object.beeType !== undefined && object.beeType !== null) {
            message.beeType = object.beeType;
        }
        else {
            message.beeType = "";
        }
        if (object.price !== undefined && object.price !== null) {
            for (const e of object.price) {
                message.price.push(Coin.fromPartial(e));
            }
        }
        if (object.honeyPerBlock !== undefined && object.honeyPerBlock !== null) {
            message.honeyPerBlock = object.honeyPerBlock;
        }
        else {
            message.honeyPerBlock = "";
        }
        if (object.bodySize !== undefined && object.bodySize !== null) {
            message.bodySize = object.bodySize;
        }
        else {
            message.bodySize = 0;
        }
        if (object.airSense !== undefined && object.airSense !== null) {
            message.airSense = object.airSense;
        }
        else {
            message.airSense = "";
        }
        return message;
    },
};
const baseApiaryHouse = { id: 0 };
export const ApiaryHouse = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseApiaryHouse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = { ...baseApiaryHouse };
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
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseApiaryHouse };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseBees = { id: 0 };
export const Bees = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.bearOwner !== undefined) {
            BearOwner.encode(message.bearOwner, writer.uint32(18).fork()).ldelim();
        }
        if (message.apiaryHouse !== undefined) {
            ApiaryHouse.encode(message.apiaryHouse, writer.uint32(26).fork()).ldelim();
        }
        if (message.params !== undefined) {
            BeeParams.encode(message.params, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBees };
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
                    message.apiaryHouse = ApiaryHouse.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.params = BeeParams.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseBees };
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
        if (object.apiaryHouse !== undefined && object.apiaryHouse !== null) {
            message.apiaryHouse = ApiaryHouse.fromJSON(object.apiaryHouse);
        }
        else {
            message.apiaryHouse = undefined;
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = BeeParams.fromJSON(object.params);
        }
        else {
            message.params = undefined;
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
        message.apiaryHouse !== undefined &&
            (obj.apiaryHouse = message.apiaryHouse
                ? ApiaryHouse.toJSON(message.apiaryHouse)
                : undefined);
        message.params !== undefined &&
            (obj.params = message.params
                ? BeeParams.toJSON(message.params)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseBees };
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
        if (object.apiaryHouse !== undefined && object.apiaryHouse !== null) {
            message.apiaryHouse = ApiaryHouse.fromPartial(object.apiaryHouse);
        }
        else {
            message.apiaryHouse = undefined;
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = BeeParams.fromPartial(object.params);
        }
        else {
            message.params = undefined;
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
