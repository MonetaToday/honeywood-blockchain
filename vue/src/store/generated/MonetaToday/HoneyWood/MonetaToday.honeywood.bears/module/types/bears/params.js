/* eslint-disable */
import { Coin } from "../cosmos/base/v1beta1/coin";
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "MonetaToday.honeywood.bears";
const baseParams = {};
export const Params = {
    encode(message, writer = Writer.create()) {
        if (message.setNamePrice !== undefined) {
            Coin.encode(message.setNamePrice, writer.uint32(10).fork()).ldelim();
        }
        if (message.oneTilePrice !== undefined) {
            Coin.encode(message.oneTilePrice, writer.uint32(18).fork()).ldelim();
        }
        if (message.oneTreePrice !== undefined) {
            Coin.encode(message.oneTreePrice, writer.uint32(26).fork()).ldelim();
        }
        if (message.oneTreeReward !== undefined) {
            Coin.encode(message.oneTreeReward, writer.uint32(34).fork()).ldelim();
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
                    message.setNamePrice = Coin.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.oneTilePrice = Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.oneTreePrice = Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.oneTreeReward = Coin.decode(reader, reader.uint32());
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
        if (object.setNamePrice !== undefined && object.setNamePrice !== null) {
            message.setNamePrice = Coin.fromJSON(object.setNamePrice);
        }
        else {
            message.setNamePrice = undefined;
        }
        if (object.oneTilePrice !== undefined && object.oneTilePrice !== null) {
            message.oneTilePrice = Coin.fromJSON(object.oneTilePrice);
        }
        else {
            message.oneTilePrice = undefined;
        }
        if (object.oneTreePrice !== undefined && object.oneTreePrice !== null) {
            message.oneTreePrice = Coin.fromJSON(object.oneTreePrice);
        }
        else {
            message.oneTreePrice = undefined;
        }
        if (object.oneTreeReward !== undefined && object.oneTreeReward !== null) {
            message.oneTreeReward = Coin.fromJSON(object.oneTreeReward);
        }
        else {
            message.oneTreeReward = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.setNamePrice !== undefined &&
            (obj.setNamePrice = message.setNamePrice
                ? Coin.toJSON(message.setNamePrice)
                : undefined);
        message.oneTilePrice !== undefined &&
            (obj.oneTilePrice = message.oneTilePrice
                ? Coin.toJSON(message.oneTilePrice)
                : undefined);
        message.oneTreePrice !== undefined &&
            (obj.oneTreePrice = message.oneTreePrice
                ? Coin.toJSON(message.oneTreePrice)
                : undefined);
        message.oneTreeReward !== undefined &&
            (obj.oneTreeReward = message.oneTreeReward
                ? Coin.toJSON(message.oneTreeReward)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseParams };
        if (object.setNamePrice !== undefined && object.setNamePrice !== null) {
            message.setNamePrice = Coin.fromPartial(object.setNamePrice);
        }
        else {
            message.setNamePrice = undefined;
        }
        if (object.oneTilePrice !== undefined && object.oneTilePrice !== null) {
            message.oneTilePrice = Coin.fromPartial(object.oneTilePrice);
        }
        else {
            message.oneTilePrice = undefined;
        }
        if (object.oneTreePrice !== undefined && object.oneTreePrice !== null) {
            message.oneTreePrice = Coin.fromPartial(object.oneTreePrice);
        }
        else {
            message.oneTreePrice = undefined;
        }
        if (object.oneTreeReward !== undefined && object.oneTreeReward !== null) {
            message.oneTreeReward = Coin.fromPartial(object.oneTreeReward);
        }
        else {
            message.oneTreeReward = undefined;
        }
        return message;
    },
};
