/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { BaseVestingAccount } from "../cosmos/vesting/v1beta1/vesting";
export const protobufPackage = "MonetaToday.honeywood.bears";
const baseVestingParams = {
    id: "",
    honeyStartFromListingInMonth: 0,
    honeyEndFromListingInMonth: 0,
    coneStartFromListingInMonth: 0,
    coneEndFromListingInMonth: 0,
};
export const VestingParams = {
    encode(message, writer = Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.honeyStartFromListingInMonth !== 0) {
            writer.uint32(16).uint64(message.honeyStartFromListingInMonth);
        }
        if (message.honeyEndFromListingInMonth !== 0) {
            writer.uint32(24).uint64(message.honeyEndFromListingInMonth);
        }
        if (message.coneStartFromListingInMonth !== 0) {
            writer.uint32(32).uint64(message.coneStartFromListingInMonth);
        }
        if (message.coneEndFromListingInMonth !== 0) {
            writer.uint32(40).uint64(message.coneEndFromListingInMonth);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseVestingParams };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.honeyStartFromListingInMonth = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.honeyEndFromListingInMonth = longToNumber(reader.uint64());
                    break;
                case 4:
                    message.coneStartFromListingInMonth = longToNumber(reader.uint64());
                    break;
                case 5:
                    message.coneEndFromListingInMonth = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseVestingParams };
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = "";
        }
        if (object.honeyStartFromListingInMonth !== undefined &&
            object.honeyStartFromListingInMonth !== null) {
            message.honeyStartFromListingInMonth = Number(object.honeyStartFromListingInMonth);
        }
        else {
            message.honeyStartFromListingInMonth = 0;
        }
        if (object.honeyEndFromListingInMonth !== undefined &&
            object.honeyEndFromListingInMonth !== null) {
            message.honeyEndFromListingInMonth = Number(object.honeyEndFromListingInMonth);
        }
        else {
            message.honeyEndFromListingInMonth = 0;
        }
        if (object.coneStartFromListingInMonth !== undefined &&
            object.coneStartFromListingInMonth !== null) {
            message.coneStartFromListingInMonth = Number(object.coneStartFromListingInMonth);
        }
        else {
            message.coneStartFromListingInMonth = 0;
        }
        if (object.coneEndFromListingInMonth !== undefined &&
            object.coneEndFromListingInMonth !== null) {
            message.coneEndFromListingInMonth = Number(object.coneEndFromListingInMonth);
        }
        else {
            message.coneEndFromListingInMonth = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.honeyStartFromListingInMonth !== undefined &&
            (obj.honeyStartFromListingInMonth = message.honeyStartFromListingInMonth);
        message.honeyEndFromListingInMonth !== undefined &&
            (obj.honeyEndFromListingInMonth = message.honeyEndFromListingInMonth);
        message.coneStartFromListingInMonth !== undefined &&
            (obj.coneStartFromListingInMonth = message.coneStartFromListingInMonth);
        message.coneEndFromListingInMonth !== undefined &&
            (obj.coneEndFromListingInMonth = message.coneEndFromListingInMonth);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseVestingParams };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = "";
        }
        if (object.honeyStartFromListingInMonth !== undefined &&
            object.honeyStartFromListingInMonth !== null) {
            message.honeyStartFromListingInMonth =
                object.honeyStartFromListingInMonth;
        }
        else {
            message.honeyStartFromListingInMonth = 0;
        }
        if (object.honeyEndFromListingInMonth !== undefined &&
            object.honeyEndFromListingInMonth !== null) {
            message.honeyEndFromListingInMonth = object.honeyEndFromListingInMonth;
        }
        else {
            message.honeyEndFromListingInMonth = 0;
        }
        if (object.coneStartFromListingInMonth !== undefined &&
            object.coneStartFromListingInMonth !== null) {
            message.coneStartFromListingInMonth = object.coneStartFromListingInMonth;
        }
        else {
            message.coneStartFromListingInMonth = 0;
        }
        if (object.coneEndFromListingInMonth !== undefined &&
            object.coneEndFromListingInMonth !== null) {
            message.coneEndFromListingInMonth = object.coneEndFromListingInMonth;
        }
        else {
            message.coneEndFromListingInMonth = 0;
        }
        return message;
    },
};
const basePlayerAccount = { bears: 0, vestingType: "" };
export const PlayerAccount = {
    encode(message, writer = Writer.create()) {
        if (message.baseVestingAccount !== undefined) {
            BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
        }
        writer.uint32(18).fork();
        for (const v of message.bears) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.vestingType !== "") {
            writer.uint32(26).string(message.vestingType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePlayerAccount };
        message.bears = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseVestingAccount = BaseVestingAccount.decode(reader, reader.uint32());
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.bears.push(longToNumber(reader.uint64()));
                        }
                    }
                    else {
                        message.bears.push(longToNumber(reader.uint64()));
                    }
                    break;
                case 3:
                    message.vestingType = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...basePlayerAccount };
        message.bears = [];
        if (object.baseVestingAccount !== undefined &&
            object.baseVestingAccount !== null) {
            message.baseVestingAccount = BaseVestingAccount.fromJSON(object.baseVestingAccount);
        }
        else {
            message.baseVestingAccount = undefined;
        }
        if (object.bears !== undefined && object.bears !== null) {
            for (const e of object.bears) {
                message.bears.push(Number(e));
            }
        }
        if (object.vestingType !== undefined && object.vestingType !== null) {
            message.vestingType = String(object.vestingType);
        }
        else {
            message.vestingType = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.baseVestingAccount !== undefined &&
            (obj.baseVestingAccount = message.baseVestingAccount
                ? BaseVestingAccount.toJSON(message.baseVestingAccount)
                : undefined);
        if (message.bears) {
            obj.bears = message.bears.map((e) => e);
        }
        else {
            obj.bears = [];
        }
        message.vestingType !== undefined &&
            (obj.vestingType = message.vestingType);
        return obj;
    },
    fromPartial(object) {
        const message = { ...basePlayerAccount };
        message.bears = [];
        if (object.baseVestingAccount !== undefined &&
            object.baseVestingAccount !== null) {
            message.baseVestingAccount = BaseVestingAccount.fromPartial(object.baseVestingAccount);
        }
        else {
            message.baseVestingAccount = undefined;
        }
        if (object.bears !== undefined && object.bears !== null) {
            for (const e of object.bears) {
                message.bears.push(e);
            }
        }
        if (object.vestingType !== undefined && object.vestingType !== null) {
            message.vestingType = object.vestingType;
        }
        else {
            message.vestingType = "";
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
