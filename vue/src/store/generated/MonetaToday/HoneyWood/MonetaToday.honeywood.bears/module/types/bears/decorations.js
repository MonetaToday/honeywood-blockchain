/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";
import { BearOwner } from "../bears/bears";
import { ItemPosition } from "../bears/fields";
export const protobufPackage = "MonetaToday.honeywood.bears";
const baseDecorationParams = { decorationType: "" };
export const DecorationParams = {
    encode(message, writer = Writer.create()) {
        if (message.decorationType !== "") {
            writer.uint32(10).string(message.decorationType);
        }
        for (const v of message.price) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDecorationParams };
        message.price = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.decorationType = reader.string();
                    break;
                case 2:
                    message.price.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDecorationParams };
        message.price = [];
        if (object.decorationType !== undefined && object.decorationType !== null) {
            message.decorationType = String(object.decorationType);
        }
        else {
            message.decorationType = "";
        }
        if (object.price !== undefined && object.price !== null) {
            for (const e of object.price) {
                message.price.push(Coin.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.decorationType !== undefined &&
            (obj.decorationType = message.decorationType);
        if (message.price) {
            obj.price = message.price.map((e) => (e ? Coin.toJSON(e) : undefined));
        }
        else {
            obj.price = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDecorationParams };
        message.price = [];
        if (object.decorationType !== undefined && object.decorationType !== null) {
            message.decorationType = object.decorationType;
        }
        else {
            message.decorationType = "";
        }
        if (object.price !== undefined && object.price !== null) {
            for (const e of object.price) {
                message.price.push(Coin.fromPartial(e));
            }
        }
        return message;
    },
};
const baseDecorations = { id: 0 };
export const Decorations = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.bearOwner !== undefined) {
            BearOwner.encode(message.bearOwner, writer.uint32(18).fork()).ldelim();
        }
        if (message.params !== undefined) {
            DecorationParams.encode(message.params, writer.uint32(26).fork()).ldelim();
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
                    message.bearOwner = BearOwner.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.params = DecorationParams.decode(reader, reader.uint32());
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
        if (object.bearOwner !== undefined && object.bearOwner !== null) {
            message.bearOwner = BearOwner.fromJSON(object.bearOwner);
        }
        else {
            message.bearOwner = undefined;
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = DecorationParams.fromJSON(object.params);
        }
        else {
            message.params = undefined;
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
        message.bearOwner !== undefined &&
            (obj.bearOwner = message.bearOwner
                ? BearOwner.toJSON(message.bearOwner)
                : undefined);
        message.params !== undefined &&
            (obj.params = message.params
                ? DecorationParams.toJSON(message.params)
                : undefined);
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
        if (object.bearOwner !== undefined && object.bearOwner !== null) {
            message.bearOwner = BearOwner.fromPartial(object.bearOwner);
        }
        else {
            message.bearOwner = undefined;
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = DecorationParams.fromPartial(object.params);
        }
        else {
            message.params = undefined;
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
