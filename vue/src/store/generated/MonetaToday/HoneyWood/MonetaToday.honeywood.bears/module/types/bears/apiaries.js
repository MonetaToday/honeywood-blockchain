/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";
import { BearOwner } from "../bears/bears";
import { ItemPosition } from "../bears/fields";
export const protobufPackage = "MonetaToday.honeywood.bears";
const baseApiaryParams = {
    apiaryType: "",
    spaceAvailable: 0,
    maxHoney: "",
    fertility: "",
};
export const ApiaryParams = {
    encode(message, writer = Writer.create()) {
        if (message.apiaryType !== "") {
            writer.uint32(10).string(message.apiaryType);
        }
        for (const v of message.price) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.spaceAvailable !== 0) {
            writer.uint32(24).uint64(message.spaceAvailable);
        }
        if (message.maxHoney !== "") {
            writer.uint32(34).string(message.maxHoney);
        }
        for (const v of message.deleteReward) {
            Coin.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.fertility !== "") {
            writer.uint32(50).string(message.fertility);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseApiaryParams };
        message.price = [];
        message.deleteReward = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.apiaryType = reader.string();
                    break;
                case 2:
                    message.price.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.spaceAvailable = longToNumber(reader.uint64());
                    break;
                case 4:
                    message.maxHoney = reader.string();
                    break;
                case 5:
                    message.deleteReward.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.fertility = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseApiaryParams };
        message.price = [];
        message.deleteReward = [];
        if (object.apiaryType !== undefined && object.apiaryType !== null) {
            message.apiaryType = String(object.apiaryType);
        }
        else {
            message.apiaryType = "";
        }
        if (object.price !== undefined && object.price !== null) {
            for (const e of object.price) {
                message.price.push(Coin.fromJSON(e));
            }
        }
        if (object.spaceAvailable !== undefined && object.spaceAvailable !== null) {
            message.spaceAvailable = Number(object.spaceAvailable);
        }
        else {
            message.spaceAvailable = 0;
        }
        if (object.maxHoney !== undefined && object.maxHoney !== null) {
            message.maxHoney = String(object.maxHoney);
        }
        else {
            message.maxHoney = "";
        }
        if (object.deleteReward !== undefined && object.deleteReward !== null) {
            for (const e of object.deleteReward) {
                message.deleteReward.push(Coin.fromJSON(e));
            }
        }
        if (object.fertility !== undefined && object.fertility !== null) {
            message.fertility = String(object.fertility);
        }
        else {
            message.fertility = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.apiaryType !== undefined && (obj.apiaryType = message.apiaryType);
        if (message.price) {
            obj.price = message.price.map((e) => (e ? Coin.toJSON(e) : undefined));
        }
        else {
            obj.price = [];
        }
        message.spaceAvailable !== undefined &&
            (obj.spaceAvailable = message.spaceAvailable);
        message.maxHoney !== undefined && (obj.maxHoney = message.maxHoney);
        if (message.deleteReward) {
            obj.deleteReward = message.deleteReward.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.deleteReward = [];
        }
        message.fertility !== undefined && (obj.fertility = message.fertility);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseApiaryParams };
        message.price = [];
        message.deleteReward = [];
        if (object.apiaryType !== undefined && object.apiaryType !== null) {
            message.apiaryType = object.apiaryType;
        }
        else {
            message.apiaryType = "";
        }
        if (object.price !== undefined && object.price !== null) {
            for (const e of object.price) {
                message.price.push(Coin.fromPartial(e));
            }
        }
        if (object.spaceAvailable !== undefined && object.spaceAvailable !== null) {
            message.spaceAvailable = object.spaceAvailable;
        }
        else {
            message.spaceAvailable = 0;
        }
        if (object.maxHoney !== undefined && object.maxHoney !== null) {
            message.maxHoney = object.maxHoney;
        }
        else {
            message.maxHoney = "";
        }
        if (object.deleteReward !== undefined && object.deleteReward !== null) {
            for (const e of object.deleteReward) {
                message.deleteReward.push(Coin.fromPartial(e));
            }
        }
        if (object.fertility !== undefined && object.fertility !== null) {
            message.fertility = object.fertility;
        }
        else {
            message.fertility = "";
        }
        return message;
    },
};
const baseCycleHistory = { height: 0, bees: 0 };
export const CycleHistory = {
    encode(message, writer = Writer.create()) {
        if (message.height !== 0) {
            writer.uint32(8).uint64(message.height);
        }
        writer.uint32(18).fork();
        for (const v of message.bees) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCycleHistory };
        message.bees = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = longToNumber(reader.uint64());
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.bees.push(longToNumber(reader.uint64()));
                        }
                    }
                    else {
                        message.bees.push(longToNumber(reader.uint64()));
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCycleHistory };
        message.bees = [];
        if (object.height !== undefined && object.height !== null) {
            message.height = Number(object.height);
        }
        else {
            message.height = 0;
        }
        if (object.bees !== undefined && object.bees !== null) {
            for (const e of object.bees) {
                message.bees.push(Number(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = message.height);
        if (message.bees) {
            obj.bees = message.bees.map((e) => e);
        }
        else {
            obj.bees = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCycleHistory };
        message.bees = [];
        if (object.height !== undefined && object.height !== null) {
            message.height = object.height;
        }
        else {
            message.height = 0;
        }
        if (object.bees !== undefined && object.bees !== null) {
            for (const e of object.bees) {
                message.bees.push(e);
            }
        }
        return message;
    },
};
const baseApiaries = {
    id: 0,
    spaceOccupied: 0,
    honeyFromPast: "",
    fieldFertility: "",
};
export const Apiaries = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.bearOwner !== undefined) {
            BearOwner.encode(message.bearOwner, writer.uint32(18).fork()).ldelim();
        }
        if (message.position !== undefined) {
            ItemPosition.encode(message.position, writer.uint32(26).fork()).ldelim();
        }
        if (message.params !== undefined) {
            ApiaryParams.encode(message.params, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.cycleHistory) {
            CycleHistory.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.spaceOccupied !== 0) {
            writer.uint32(48).uint64(message.spaceOccupied);
        }
        if (message.honeyFromPast !== "") {
            writer.uint32(58).string(message.honeyFromPast);
        }
        if (message.fieldFertility !== "") {
            writer.uint32(66).string(message.fieldFertility);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseApiaries };
        message.cycleHistory = [];
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
                    message.position = ItemPosition.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.params = ApiaryParams.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.cycleHistory.push(CycleHistory.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.spaceOccupied = longToNumber(reader.uint64());
                    break;
                case 7:
                    message.honeyFromPast = reader.string();
                    break;
                case 8:
                    message.fieldFertility = reader.string();
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
        message.cycleHistory = [];
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
        if (object.position !== undefined && object.position !== null) {
            message.position = ItemPosition.fromJSON(object.position);
        }
        else {
            message.position = undefined;
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = ApiaryParams.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.cycleHistory !== undefined && object.cycleHistory !== null) {
            for (const e of object.cycleHistory) {
                message.cycleHistory.push(CycleHistory.fromJSON(e));
            }
        }
        if (object.spaceOccupied !== undefined && object.spaceOccupied !== null) {
            message.spaceOccupied = Number(object.spaceOccupied);
        }
        else {
            message.spaceOccupied = 0;
        }
        if (object.honeyFromPast !== undefined && object.honeyFromPast !== null) {
            message.honeyFromPast = String(object.honeyFromPast);
        }
        else {
            message.honeyFromPast = "";
        }
        if (object.fieldFertility !== undefined && object.fieldFertility !== null) {
            message.fieldFertility = String(object.fieldFertility);
        }
        else {
            message.fieldFertility = "";
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
        message.position !== undefined &&
            (obj.position = message.position
                ? ItemPosition.toJSON(message.position)
                : undefined);
        message.params !== undefined &&
            (obj.params = message.params
                ? ApiaryParams.toJSON(message.params)
                : undefined);
        if (message.cycleHistory) {
            obj.cycleHistory = message.cycleHistory.map((e) => e ? CycleHistory.toJSON(e) : undefined);
        }
        else {
            obj.cycleHistory = [];
        }
        message.spaceOccupied !== undefined &&
            (obj.spaceOccupied = message.spaceOccupied);
        message.honeyFromPast !== undefined &&
            (obj.honeyFromPast = message.honeyFromPast);
        message.fieldFertility !== undefined &&
            (obj.fieldFertility = message.fieldFertility);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseApiaries };
        message.cycleHistory = [];
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
        if (object.position !== undefined && object.position !== null) {
            message.position = ItemPosition.fromPartial(object.position);
        }
        else {
            message.position = undefined;
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = ApiaryParams.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.cycleHistory !== undefined && object.cycleHistory !== null) {
            for (const e of object.cycleHistory) {
                message.cycleHistory.push(CycleHistory.fromPartial(e));
            }
        }
        if (object.spaceOccupied !== undefined && object.spaceOccupied !== null) {
            message.spaceOccupied = object.spaceOccupied;
        }
        else {
            message.spaceOccupied = 0;
        }
        if (object.honeyFromPast !== undefined && object.honeyFromPast !== null) {
            message.honeyFromPast = object.honeyFromPast;
        }
        else {
            message.honeyFromPast = "";
        }
        if (object.fieldFertility !== undefined && object.fieldFertility !== null) {
            message.fieldFertility = object.fieldFertility;
        }
        else {
            message.fieldFertility = "";
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
