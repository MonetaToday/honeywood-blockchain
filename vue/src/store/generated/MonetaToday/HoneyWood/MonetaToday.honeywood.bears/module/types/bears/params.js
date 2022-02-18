/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";
import { TreeParams } from "../bears/trees";
import { DecorationParams } from "../bears/decorations";
import { ApiaryParams } from "../bears/apiaries";
import { BeeParams } from "../bears/bees";
export const protobufPackage = "MonetaToday.honeywood.bears";
const baseParams = {
    blocksPerHour: 0,
    airHistoryLength: 0,
    burnRate: "",
    honeyDenom: "",
};
export const Params = {
    encode(message, writer = Writer.create()) {
        if (message.blocksPerHour !== 0) {
            writer.uint32(8).uint64(message.blocksPerHour);
        }
        if (message.airHistoryLength !== 0) {
            writer.uint32(16).uint64(message.airHistoryLength);
        }
        if (message.burnRate !== "") {
            writer.uint32(26).string(message.burnRate);
        }
        for (const v of message.priceSetName) {
            Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.priceTile) {
            Coin.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.treeTypes) {
            TreeParams.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.decorationTypes) {
            DecorationParams.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.apiaryTypes) {
            ApiaryParams.encode(v, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.beeTypes) {
            BeeParams.encode(v, writer.uint32(74).fork()).ldelim();
        }
        if (message.honeyDenom !== "") {
            writer.uint32(82).string(message.honeyDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseParams };
        message.priceSetName = [];
        message.priceTile = [];
        message.treeTypes = [];
        message.decorationTypes = [];
        message.apiaryTypes = [];
        message.beeTypes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blocksPerHour = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.airHistoryLength = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.burnRate = reader.string();
                    break;
                case 4:
                    message.priceSetName.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.priceTile.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.treeTypes.push(TreeParams.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.decorationTypes.push(DecorationParams.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.apiaryTypes.push(ApiaryParams.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.beeTypes.push(BeeParams.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.honeyDenom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseParams };
        message.priceSetName = [];
        message.priceTile = [];
        message.treeTypes = [];
        message.decorationTypes = [];
        message.apiaryTypes = [];
        message.beeTypes = [];
        if (object.blocksPerHour !== undefined && object.blocksPerHour !== null) {
            message.blocksPerHour = Number(object.blocksPerHour);
        }
        else {
            message.blocksPerHour = 0;
        }
        if (object.airHistoryLength !== undefined &&
            object.airHistoryLength !== null) {
            message.airHistoryLength = Number(object.airHistoryLength);
        }
        else {
            message.airHistoryLength = 0;
        }
        if (object.burnRate !== undefined && object.burnRate !== null) {
            message.burnRate = String(object.burnRate);
        }
        else {
            message.burnRate = "";
        }
        if (object.priceSetName !== undefined && object.priceSetName !== null) {
            for (const e of object.priceSetName) {
                message.priceSetName.push(Coin.fromJSON(e));
            }
        }
        if (object.priceTile !== undefined && object.priceTile !== null) {
            for (const e of object.priceTile) {
                message.priceTile.push(Coin.fromJSON(e));
            }
        }
        if (object.treeTypes !== undefined && object.treeTypes !== null) {
            for (const e of object.treeTypes) {
                message.treeTypes.push(TreeParams.fromJSON(e));
            }
        }
        if (object.decorationTypes !== undefined &&
            object.decorationTypes !== null) {
            for (const e of object.decorationTypes) {
                message.decorationTypes.push(DecorationParams.fromJSON(e));
            }
        }
        if (object.apiaryTypes !== undefined && object.apiaryTypes !== null) {
            for (const e of object.apiaryTypes) {
                message.apiaryTypes.push(ApiaryParams.fromJSON(e));
            }
        }
        if (object.beeTypes !== undefined && object.beeTypes !== null) {
            for (const e of object.beeTypes) {
                message.beeTypes.push(BeeParams.fromJSON(e));
            }
        }
        if (object.honeyDenom !== undefined && object.honeyDenom !== null) {
            message.honeyDenom = String(object.honeyDenom);
        }
        else {
            message.honeyDenom = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.blocksPerHour !== undefined &&
            (obj.blocksPerHour = message.blocksPerHour);
        message.airHistoryLength !== undefined &&
            (obj.airHistoryLength = message.airHistoryLength);
        message.burnRate !== undefined && (obj.burnRate = message.burnRate);
        if (message.priceSetName) {
            obj.priceSetName = message.priceSetName.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.priceSetName = [];
        }
        if (message.priceTile) {
            obj.priceTile = message.priceTile.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.priceTile = [];
        }
        if (message.treeTypes) {
            obj.treeTypes = message.treeTypes.map((e) => e ? TreeParams.toJSON(e) : undefined);
        }
        else {
            obj.treeTypes = [];
        }
        if (message.decorationTypes) {
            obj.decorationTypes = message.decorationTypes.map((e) => e ? DecorationParams.toJSON(e) : undefined);
        }
        else {
            obj.decorationTypes = [];
        }
        if (message.apiaryTypes) {
            obj.apiaryTypes = message.apiaryTypes.map((e) => e ? ApiaryParams.toJSON(e) : undefined);
        }
        else {
            obj.apiaryTypes = [];
        }
        if (message.beeTypes) {
            obj.beeTypes = message.beeTypes.map((e) => e ? BeeParams.toJSON(e) : undefined);
        }
        else {
            obj.beeTypes = [];
        }
        message.honeyDenom !== undefined && (obj.honeyDenom = message.honeyDenom);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseParams };
        message.priceSetName = [];
        message.priceTile = [];
        message.treeTypes = [];
        message.decorationTypes = [];
        message.apiaryTypes = [];
        message.beeTypes = [];
        if (object.blocksPerHour !== undefined && object.blocksPerHour !== null) {
            message.blocksPerHour = object.blocksPerHour;
        }
        else {
            message.blocksPerHour = 0;
        }
        if (object.airHistoryLength !== undefined &&
            object.airHistoryLength !== null) {
            message.airHistoryLength = object.airHistoryLength;
        }
        else {
            message.airHistoryLength = 0;
        }
        if (object.burnRate !== undefined && object.burnRate !== null) {
            message.burnRate = object.burnRate;
        }
        else {
            message.burnRate = "";
        }
        if (object.priceSetName !== undefined && object.priceSetName !== null) {
            for (const e of object.priceSetName) {
                message.priceSetName.push(Coin.fromPartial(e));
            }
        }
        if (object.priceTile !== undefined && object.priceTile !== null) {
            for (const e of object.priceTile) {
                message.priceTile.push(Coin.fromPartial(e));
            }
        }
        if (object.treeTypes !== undefined && object.treeTypes !== null) {
            for (const e of object.treeTypes) {
                message.treeTypes.push(TreeParams.fromPartial(e));
            }
        }
        if (object.decorationTypes !== undefined &&
            object.decorationTypes !== null) {
            for (const e of object.decorationTypes) {
                message.decorationTypes.push(DecorationParams.fromPartial(e));
            }
        }
        if (object.apiaryTypes !== undefined && object.apiaryTypes !== null) {
            for (const e of object.apiaryTypes) {
                message.apiaryTypes.push(ApiaryParams.fromPartial(e));
            }
        }
        if (object.beeTypes !== undefined && object.beeTypes !== null) {
            for (const e of object.beeTypes) {
                message.beeTypes.push(BeeParams.fromPartial(e));
            }
        }
        if (object.honeyDenom !== undefined && object.honeyDenom !== null) {
            message.honeyDenom = object.honeyDenom;
        }
        else {
            message.honeyDenom = "";
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
