/* eslint-disable */
import { Coin } from "../cosmos/base/v1beta1/coin";
import { DecorationParams } from "../bears/decorations";
import { ApiaryParams } from "../bears/apiaries";
import { BeeParams } from "../bears/bees";
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "MonetaToday.honeywood.bears";
const baseParams = { burnRate: "" };
export const Params = {
    encode(message, writer = Writer.create()) {
        if (message.burnRate !== "") {
            writer.uint32(10).string(message.burnRate);
        }
        for (const v of message.priceSetName) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.priceTile) {
            Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.priceTree) {
            Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.rewardTree) {
            Coin.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.decorationTypes) {
            DecorationParams.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.apiaryTypes) {
            ApiaryParams.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.beeTypes) {
            BeeParams.encode(v, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseParams };
        message.priceSetName = [];
        message.priceTile = [];
        message.priceTree = [];
        message.rewardTree = [];
        message.decorationTypes = [];
        message.apiaryTypes = [];
        message.beeTypes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.burnRate = reader.string();
                    break;
                case 2:
                    message.priceSetName.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.priceTile.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.priceTree.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.rewardTree.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.decorationTypes.push(DecorationParams.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.apiaryTypes.push(ApiaryParams.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.beeTypes.push(BeeParams.decode(reader, reader.uint32()));
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
        message.priceTree = [];
        message.rewardTree = [];
        message.decorationTypes = [];
        message.apiaryTypes = [];
        message.beeTypes = [];
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
        if (object.priceTree !== undefined && object.priceTree !== null) {
            for (const e of object.priceTree) {
                message.priceTree.push(Coin.fromJSON(e));
            }
        }
        if (object.rewardTree !== undefined && object.rewardTree !== null) {
            for (const e of object.rewardTree) {
                message.rewardTree.push(Coin.fromJSON(e));
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
        return message;
    },
    toJSON(message) {
        const obj = {};
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
        if (message.priceTree) {
            obj.priceTree = message.priceTree.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.priceTree = [];
        }
        if (message.rewardTree) {
            obj.rewardTree = message.rewardTree.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.rewardTree = [];
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
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseParams };
        message.priceSetName = [];
        message.priceTile = [];
        message.priceTree = [];
        message.rewardTree = [];
        message.decorationTypes = [];
        message.apiaryTypes = [];
        message.beeTypes = [];
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
        if (object.priceTree !== undefined && object.priceTree !== null) {
            for (const e of object.priceTree) {
                message.priceTree.push(Coin.fromPartial(e));
            }
        }
        if (object.rewardTree !== undefined && object.rewardTree !== null) {
            for (const e of object.rewardTree) {
                message.rewardTree.push(Coin.fromPartial(e));
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
        return message;
    },
};
