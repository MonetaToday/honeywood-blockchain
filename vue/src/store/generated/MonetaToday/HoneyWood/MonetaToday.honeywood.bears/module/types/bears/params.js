/* eslint-disable */
import { Coin } from "../cosmos/base/v1beta1/coin";
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "MonetaToday.honeywood.bears";
const baseParams = { burnRate: "" };
export const Params = {
    encode(message, writer = Writer.create()) {
        if (message.burnRate !== "") {
            writer.uint32(10).string(message.burnRate);
        }
        if (message.priceSetName !== undefined) {
            Coin.encode(message.priceSetName, writer.uint32(18).fork()).ldelim();
        }
        if (message.priceTile !== undefined) {
            Coin.encode(message.priceTile, writer.uint32(26).fork()).ldelim();
        }
        if (message.priceTree !== undefined) {
            Coin.encode(message.priceTree, writer.uint32(34).fork()).ldelim();
        }
        if (message.rewardTree !== undefined) {
            Coin.encode(message.rewardTree, writer.uint32(42).fork()).ldelim();
        }
        if (message.priceDecorationFlowers !== undefined) {
            Coin.encode(message.priceDecorationFlowers, writer.uint32(50).fork()).ldelim();
        }
        if (message.priceDecorationFlag !== undefined) {
            Coin.encode(message.priceDecorationFlag, writer.uint32(58).fork()).ldelim();
        }
        if (message.priceDecorationLamp !== undefined) {
            Coin.encode(message.priceDecorationLamp, writer.uint32(66).fork()).ldelim();
        }
        if (message.priceDecorationGreenBee !== undefined) {
            Coin.encode(message.priceDecorationGreenBee, writer.uint32(74).fork()).ldelim();
        }
        if (message.priceDecorationFountain !== undefined) {
            Coin.encode(message.priceDecorationFountain, writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseParams };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.burnRate = reader.string();
                    break;
                case 2:
                    message.priceSetName = Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.priceTile = Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.priceTree = Coin.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.rewardTree = Coin.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.priceDecorationFlowers = Coin.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.priceDecorationFlag = Coin.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.priceDecorationLamp = Coin.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.priceDecorationGreenBee = Coin.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.priceDecorationFountain = Coin.decode(reader, reader.uint32());
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
        if (object.burnRate !== undefined && object.burnRate !== null) {
            message.burnRate = String(object.burnRate);
        }
        else {
            message.burnRate = "";
        }
        if (object.priceSetName !== undefined && object.priceSetName !== null) {
            message.priceSetName = Coin.fromJSON(object.priceSetName);
        }
        else {
            message.priceSetName = undefined;
        }
        if (object.priceTile !== undefined && object.priceTile !== null) {
            message.priceTile = Coin.fromJSON(object.priceTile);
        }
        else {
            message.priceTile = undefined;
        }
        if (object.priceTree !== undefined && object.priceTree !== null) {
            message.priceTree = Coin.fromJSON(object.priceTree);
        }
        else {
            message.priceTree = undefined;
        }
        if (object.rewardTree !== undefined && object.rewardTree !== null) {
            message.rewardTree = Coin.fromJSON(object.rewardTree);
        }
        else {
            message.rewardTree = undefined;
        }
        if (object.priceDecorationFlowers !== undefined &&
            object.priceDecorationFlowers !== null) {
            message.priceDecorationFlowers = Coin.fromJSON(object.priceDecorationFlowers);
        }
        else {
            message.priceDecorationFlowers = undefined;
        }
        if (object.priceDecorationFlag !== undefined &&
            object.priceDecorationFlag !== null) {
            message.priceDecorationFlag = Coin.fromJSON(object.priceDecorationFlag);
        }
        else {
            message.priceDecorationFlag = undefined;
        }
        if (object.priceDecorationLamp !== undefined &&
            object.priceDecorationLamp !== null) {
            message.priceDecorationLamp = Coin.fromJSON(object.priceDecorationLamp);
        }
        else {
            message.priceDecorationLamp = undefined;
        }
        if (object.priceDecorationGreenBee !== undefined &&
            object.priceDecorationGreenBee !== null) {
            message.priceDecorationGreenBee = Coin.fromJSON(object.priceDecorationGreenBee);
        }
        else {
            message.priceDecorationGreenBee = undefined;
        }
        if (object.priceDecorationFountain !== undefined &&
            object.priceDecorationFountain !== null) {
            message.priceDecorationFountain = Coin.fromJSON(object.priceDecorationFountain);
        }
        else {
            message.priceDecorationFountain = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.burnRate !== undefined && (obj.burnRate = message.burnRate);
        message.priceSetName !== undefined &&
            (obj.priceSetName = message.priceSetName
                ? Coin.toJSON(message.priceSetName)
                : undefined);
        message.priceTile !== undefined &&
            (obj.priceTile = message.priceTile
                ? Coin.toJSON(message.priceTile)
                : undefined);
        message.priceTree !== undefined &&
            (obj.priceTree = message.priceTree
                ? Coin.toJSON(message.priceTree)
                : undefined);
        message.rewardTree !== undefined &&
            (obj.rewardTree = message.rewardTree
                ? Coin.toJSON(message.rewardTree)
                : undefined);
        message.priceDecorationFlowers !== undefined &&
            (obj.priceDecorationFlowers = message.priceDecorationFlowers
                ? Coin.toJSON(message.priceDecorationFlowers)
                : undefined);
        message.priceDecorationFlag !== undefined &&
            (obj.priceDecorationFlag = message.priceDecorationFlag
                ? Coin.toJSON(message.priceDecorationFlag)
                : undefined);
        message.priceDecorationLamp !== undefined &&
            (obj.priceDecorationLamp = message.priceDecorationLamp
                ? Coin.toJSON(message.priceDecorationLamp)
                : undefined);
        message.priceDecorationGreenBee !== undefined &&
            (obj.priceDecorationGreenBee = message.priceDecorationGreenBee
                ? Coin.toJSON(message.priceDecorationGreenBee)
                : undefined);
        message.priceDecorationFountain !== undefined &&
            (obj.priceDecorationFountain = message.priceDecorationFountain
                ? Coin.toJSON(message.priceDecorationFountain)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseParams };
        if (object.burnRate !== undefined && object.burnRate !== null) {
            message.burnRate = object.burnRate;
        }
        else {
            message.burnRate = "";
        }
        if (object.priceSetName !== undefined && object.priceSetName !== null) {
            message.priceSetName = Coin.fromPartial(object.priceSetName);
        }
        else {
            message.priceSetName = undefined;
        }
        if (object.priceTile !== undefined && object.priceTile !== null) {
            message.priceTile = Coin.fromPartial(object.priceTile);
        }
        else {
            message.priceTile = undefined;
        }
        if (object.priceTree !== undefined && object.priceTree !== null) {
            message.priceTree = Coin.fromPartial(object.priceTree);
        }
        else {
            message.priceTree = undefined;
        }
        if (object.rewardTree !== undefined && object.rewardTree !== null) {
            message.rewardTree = Coin.fromPartial(object.rewardTree);
        }
        else {
            message.rewardTree = undefined;
        }
        if (object.priceDecorationFlowers !== undefined &&
            object.priceDecorationFlowers !== null) {
            message.priceDecorationFlowers = Coin.fromPartial(object.priceDecorationFlowers);
        }
        else {
            message.priceDecorationFlowers = undefined;
        }
        if (object.priceDecorationFlag !== undefined &&
            object.priceDecorationFlag !== null) {
            message.priceDecorationFlag = Coin.fromPartial(object.priceDecorationFlag);
        }
        else {
            message.priceDecorationFlag = undefined;
        }
        if (object.priceDecorationLamp !== undefined &&
            object.priceDecorationLamp !== null) {
            message.priceDecorationLamp = Coin.fromPartial(object.priceDecorationLamp);
        }
        else {
            message.priceDecorationLamp = undefined;
        }
        if (object.priceDecorationGreenBee !== undefined &&
            object.priceDecorationGreenBee !== null) {
            message.priceDecorationGreenBee = Coin.fromPartial(object.priceDecorationGreenBee);
        }
        else {
            message.priceDecorationGreenBee = undefined;
        }
        if (object.priceDecorationFountain !== undefined &&
            object.priceDecorationFountain !== null) {
            message.priceDecorationFountain = Coin.fromPartial(object.priceDecorationFountain);
        }
        else {
            message.priceDecorationFountain = undefined;
        }
        return message;
    },
};
