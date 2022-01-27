/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "MonetaToday.honeywood.bears";
const baseBearOwner = { id: 0 };
export const BearOwner = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBearOwner };
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
        const message = { ...baseBearOwner };
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
        const message = { ...baseBearOwner };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseBears = {
    id: 0,
    owner: "",
    name: "",
    places: 0,
    apiaries: 0,
    bees: 0,
    trees: 0,
    decorations: 0,
};
export const Bears = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        writer.uint32(34).fork();
        for (const v of message.places) {
            writer.uint64(v);
        }
        writer.ldelim();
        writer.uint32(42).fork();
        for (const v of message.apiaries) {
            writer.uint64(v);
        }
        writer.ldelim();
        writer.uint32(50).fork();
        for (const v of message.bees) {
            writer.uint64(v);
        }
        writer.ldelim();
        writer.uint32(58).fork();
        for (const v of message.trees) {
            writer.uint64(v);
        }
        writer.ldelim();
        writer.uint32(66).fork();
        for (const v of message.decorations) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBears };
        message.places = [];
        message.apiaries = [];
        message.bees = [];
        message.trees = [];
        message.decorations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.owner = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.places.push(longToNumber(reader.uint64()));
                        }
                    }
                    else {
                        message.places.push(longToNumber(reader.uint64()));
                    }
                    break;
                case 5:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.apiaries.push(longToNumber(reader.uint64()));
                        }
                    }
                    else {
                        message.apiaries.push(longToNumber(reader.uint64()));
                    }
                    break;
                case 6:
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
                case 7:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.trees.push(longToNumber(reader.uint64()));
                        }
                    }
                    else {
                        message.trees.push(longToNumber(reader.uint64()));
                    }
                    break;
                case 8:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.decorations.push(longToNumber(reader.uint64()));
                        }
                    }
                    else {
                        message.decorations.push(longToNumber(reader.uint64()));
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
        const message = { ...baseBears };
        message.places = [];
        message.apiaries = [];
        message.bees = [];
        message.trees = [];
        message.decorations = [];
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = "";
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = "";
        }
        if (object.places !== undefined && object.places !== null) {
            for (const e of object.places) {
                message.places.push(Number(e));
            }
        }
        if (object.apiaries !== undefined && object.apiaries !== null) {
            for (const e of object.apiaries) {
                message.apiaries.push(Number(e));
            }
        }
        if (object.bees !== undefined && object.bees !== null) {
            for (const e of object.bees) {
                message.bees.push(Number(e));
            }
        }
        if (object.trees !== undefined && object.trees !== null) {
            for (const e of object.trees) {
                message.trees.push(Number(e));
            }
        }
        if (object.decorations !== undefined && object.decorations !== null) {
            for (const e of object.decorations) {
                message.decorations.push(Number(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.owner !== undefined && (obj.owner = message.owner);
        message.name !== undefined && (obj.name = message.name);
        if (message.places) {
            obj.places = message.places.map((e) => e);
        }
        else {
            obj.places = [];
        }
        if (message.apiaries) {
            obj.apiaries = message.apiaries.map((e) => e);
        }
        else {
            obj.apiaries = [];
        }
        if (message.bees) {
            obj.bees = message.bees.map((e) => e);
        }
        else {
            obj.bees = [];
        }
        if (message.trees) {
            obj.trees = message.trees.map((e) => e);
        }
        else {
            obj.trees = [];
        }
        if (message.decorations) {
            obj.decorations = message.decorations.map((e) => e);
        }
        else {
            obj.decorations = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseBears };
        message.places = [];
        message.apiaries = [];
        message.bees = [];
        message.trees = [];
        message.decorations = [];
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = "";
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = "";
        }
        if (object.places !== undefined && object.places !== null) {
            for (const e of object.places) {
                message.places.push(e);
            }
        }
        if (object.apiaries !== undefined && object.apiaries !== null) {
            for (const e of object.apiaries) {
                message.apiaries.push(e);
            }
        }
        if (object.bees !== undefined && object.bees !== null) {
            for (const e of object.bees) {
                message.bees.push(e);
            }
        }
        if (object.trees !== undefined && object.trees !== null) {
            for (const e of object.trees) {
                message.trees.push(e);
            }
        }
        if (object.decorations !== undefined && object.decorations !== null) {
            for (const e of object.decorations) {
                message.decorations.push(e);
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
