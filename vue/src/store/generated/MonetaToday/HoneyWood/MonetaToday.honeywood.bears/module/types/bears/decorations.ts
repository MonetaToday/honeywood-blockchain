/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { BearOwner } from "../bears/bears";
import { ItemPosition } from "../bears/fields";

export const protobufPackage = "MonetaToday.honeywood.bears";

export interface Decorations {
  id: number;
  bearOwner: BearOwner | undefined;
  decorationType: Decorations_DecorationTypes;
  position: ItemPosition | undefined;
}

export enum Decorations_DecorationTypes {
  FLOWERS = 0,
  FLAG = 1,
  LAMP = 2,
  GREEN_BEE = 3,
  FOUNTAIN = 4,
  UNRECOGNIZED = -1,
}

export function decorations_DecorationTypesFromJSON(
  object: any
): Decorations_DecorationTypes {
  switch (object) {
    case 0:
    case "FLOWERS":
      return Decorations_DecorationTypes.FLOWERS;
    case 1:
    case "FLAG":
      return Decorations_DecorationTypes.FLAG;
    case 2:
    case "LAMP":
      return Decorations_DecorationTypes.LAMP;
    case 3:
    case "GREEN_BEE":
      return Decorations_DecorationTypes.GREEN_BEE;
    case 4:
    case "FOUNTAIN":
      return Decorations_DecorationTypes.FOUNTAIN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Decorations_DecorationTypes.UNRECOGNIZED;
  }
}

export function decorations_DecorationTypesToJSON(
  object: Decorations_DecorationTypes
): string {
  switch (object) {
    case Decorations_DecorationTypes.FLOWERS:
      return "FLOWERS";
    case Decorations_DecorationTypes.FLAG:
      return "FLAG";
    case Decorations_DecorationTypes.LAMP:
      return "LAMP";
    case Decorations_DecorationTypes.GREEN_BEE:
      return "GREEN_BEE";
    case Decorations_DecorationTypes.FOUNTAIN:
      return "FOUNTAIN";
    default:
      return "UNKNOWN";
  }
}

const baseDecorations: object = { id: 0, decorationType: 0 };

export const Decorations = {
  encode(message: Decorations, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.bearOwner !== undefined) {
      BearOwner.encode(message.bearOwner, writer.uint32(18).fork()).ldelim();
    }
    if (message.decorationType !== 0) {
      writer.uint32(24).int32(message.decorationType);
    }
    if (message.position !== undefined) {
      ItemPosition.encode(message.position, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Decorations {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDecorations } as Decorations;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.bearOwner = BearOwner.decode(reader, reader.uint32());
          break;
        case 3:
          message.decorationType = reader.int32() as any;
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

  fromJSON(object: any): Decorations {
    const message = { ...baseDecorations } as Decorations;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.bearOwner !== undefined && object.bearOwner !== null) {
      message.bearOwner = BearOwner.fromJSON(object.bearOwner);
    } else {
      message.bearOwner = undefined;
    }
    if (object.decorationType !== undefined && object.decorationType !== null) {
      message.decorationType = decorations_DecorationTypesFromJSON(
        object.decorationType
      );
    } else {
      message.decorationType = 0;
    }
    if (object.position !== undefined && object.position !== null) {
      message.position = ItemPosition.fromJSON(object.position);
    } else {
      message.position = undefined;
    }
    return message;
  },

  toJSON(message: Decorations): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.bearOwner !== undefined &&
      (obj.bearOwner = message.bearOwner
        ? BearOwner.toJSON(message.bearOwner)
        : undefined);
    message.decorationType !== undefined &&
      (obj.decorationType = decorations_DecorationTypesToJSON(
        message.decorationType
      ));
    message.position !== undefined &&
      (obj.position = message.position
        ? ItemPosition.toJSON(message.position)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Decorations>): Decorations {
    const message = { ...baseDecorations } as Decorations;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.bearOwner !== undefined && object.bearOwner !== null) {
      message.bearOwner = BearOwner.fromPartial(object.bearOwner);
    } else {
      message.bearOwner = undefined;
    }
    if (object.decorationType !== undefined && object.decorationType !== null) {
      message.decorationType = object.decorationType;
    } else {
      message.decorationType = 0;
    }
    if (object.position !== undefined && object.position !== null) {
      message.position = ItemPosition.fromPartial(object.position);
    } else {
      message.position = undefined;
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
