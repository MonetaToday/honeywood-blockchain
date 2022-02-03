/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { BearOwner } from "../bears/bears";
import { ItemPosition } from "../bears/fields";

export const protobufPackage = "MonetaToday.honeywood.bears";

export interface CycleBeesHistory {
  block: number;
  bees: number[];
}

export interface Apiaries {
  id: number;
  bearOwner: BearOwner | undefined;
  apiaryType: Apiaries_ApiaryTypes;
  position: ItemPosition | undefined;
  countBees: number;
  maxCountBees: number;
  maxCountHoney: number;
  cycleStartBlock: number;
  cycleBeesHistory: CycleBeesHistory[];
}

export enum Apiaries_ApiaryTypes {
  BEE_HOUSE = 0,
  APIARY = 1,
  ALVEARY = 2,
  UNRECOGNIZED = -1,
}

export function apiaries_ApiaryTypesFromJSON(
  object: any
): Apiaries_ApiaryTypes {
  switch (object) {
    case 0:
    case "BEE_HOUSE":
      return Apiaries_ApiaryTypes.BEE_HOUSE;
    case 1:
    case "APIARY":
      return Apiaries_ApiaryTypes.APIARY;
    case 2:
    case "ALVEARY":
      return Apiaries_ApiaryTypes.ALVEARY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Apiaries_ApiaryTypes.UNRECOGNIZED;
  }
}

export function apiaries_ApiaryTypesToJSON(
  object: Apiaries_ApiaryTypes
): string {
  switch (object) {
    case Apiaries_ApiaryTypes.BEE_HOUSE:
      return "BEE_HOUSE";
    case Apiaries_ApiaryTypes.APIARY:
      return "APIARY";
    case Apiaries_ApiaryTypes.ALVEARY:
      return "ALVEARY";
    default:
      return "UNKNOWN";
  }
}

const baseCycleBeesHistory: object = { block: 0, bees: 0 };

export const CycleBeesHistory = {
  encode(message: CycleBeesHistory, writer: Writer = Writer.create()): Writer {
    if (message.block !== 0) {
      writer.uint32(8).uint64(message.block);
    }
    writer.uint32(18).fork();
    for (const v of message.bees) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CycleBeesHistory {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCycleBeesHistory } as CycleBeesHistory;
    message.bees = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.bees.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.bees.push(longToNumber(reader.uint64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CycleBeesHistory {
    const message = { ...baseCycleBeesHistory } as CycleBeesHistory;
    message.bees = [];
    if (object.block !== undefined && object.block !== null) {
      message.block = Number(object.block);
    } else {
      message.block = 0;
    }
    if (object.bees !== undefined && object.bees !== null) {
      for (const e of object.bees) {
        message.bees.push(Number(e));
      }
    }
    return message;
  },

  toJSON(message: CycleBeesHistory): unknown {
    const obj: any = {};
    message.block !== undefined && (obj.block = message.block);
    if (message.bees) {
      obj.bees = message.bees.map((e) => e);
    } else {
      obj.bees = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<CycleBeesHistory>): CycleBeesHistory {
    const message = { ...baseCycleBeesHistory } as CycleBeesHistory;
    message.bees = [];
    if (object.block !== undefined && object.block !== null) {
      message.block = object.block;
    } else {
      message.block = 0;
    }
    if (object.bees !== undefined && object.bees !== null) {
      for (const e of object.bees) {
        message.bees.push(e);
      }
    }
    return message;
  },
};

const baseApiaries: object = {
  id: 0,
  apiaryType: 0,
  countBees: 0,
  maxCountBees: 0,
  maxCountHoney: 0,
  cycleStartBlock: 0,
};

export const Apiaries = {
  encode(message: Apiaries, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.bearOwner !== undefined) {
      BearOwner.encode(message.bearOwner, writer.uint32(18).fork()).ldelim();
    }
    if (message.apiaryType !== 0) {
      writer.uint32(24).int32(message.apiaryType);
    }
    if (message.position !== undefined) {
      ItemPosition.encode(message.position, writer.uint32(34).fork()).ldelim();
    }
    if (message.countBees !== 0) {
      writer.uint32(40).uint64(message.countBees);
    }
    if (message.maxCountBees !== 0) {
      writer.uint32(48).uint64(message.maxCountBees);
    }
    if (message.maxCountHoney !== 0) {
      writer.uint32(56).uint64(message.maxCountHoney);
    }
    if (message.cycleStartBlock !== 0) {
      writer.uint32(64).uint64(message.cycleStartBlock);
    }
    for (const v of message.cycleBeesHistory) {
      CycleBeesHistory.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Apiaries {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseApiaries } as Apiaries;
    message.cycleBeesHistory = [];
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
          message.apiaryType = reader.int32() as any;
          break;
        case 4:
          message.position = ItemPosition.decode(reader, reader.uint32());
          break;
        case 5:
          message.countBees = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.maxCountBees = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.maxCountHoney = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          message.cycleStartBlock = longToNumber(reader.uint64() as Long);
          break;
        case 10:
          message.cycleBeesHistory.push(
            CycleBeesHistory.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Apiaries {
    const message = { ...baseApiaries } as Apiaries;
    message.cycleBeesHistory = [];
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
    if (object.apiaryType !== undefined && object.apiaryType !== null) {
      message.apiaryType = apiaries_ApiaryTypesFromJSON(object.apiaryType);
    } else {
      message.apiaryType = 0;
    }
    if (object.position !== undefined && object.position !== null) {
      message.position = ItemPosition.fromJSON(object.position);
    } else {
      message.position = undefined;
    }
    if (object.countBees !== undefined && object.countBees !== null) {
      message.countBees = Number(object.countBees);
    } else {
      message.countBees = 0;
    }
    if (object.maxCountBees !== undefined && object.maxCountBees !== null) {
      message.maxCountBees = Number(object.maxCountBees);
    } else {
      message.maxCountBees = 0;
    }
    if (object.maxCountHoney !== undefined && object.maxCountHoney !== null) {
      message.maxCountHoney = Number(object.maxCountHoney);
    } else {
      message.maxCountHoney = 0;
    }
    if (
      object.cycleStartBlock !== undefined &&
      object.cycleStartBlock !== null
    ) {
      message.cycleStartBlock = Number(object.cycleStartBlock);
    } else {
      message.cycleStartBlock = 0;
    }
    if (
      object.cycleBeesHistory !== undefined &&
      object.cycleBeesHistory !== null
    ) {
      for (const e of object.cycleBeesHistory) {
        message.cycleBeesHistory.push(CycleBeesHistory.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: Apiaries): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.bearOwner !== undefined &&
      (obj.bearOwner = message.bearOwner
        ? BearOwner.toJSON(message.bearOwner)
        : undefined);
    message.apiaryType !== undefined &&
      (obj.apiaryType = apiaries_ApiaryTypesToJSON(message.apiaryType));
    message.position !== undefined &&
      (obj.position = message.position
        ? ItemPosition.toJSON(message.position)
        : undefined);
    message.countBees !== undefined && (obj.countBees = message.countBees);
    message.maxCountBees !== undefined &&
      (obj.maxCountBees = message.maxCountBees);
    message.maxCountHoney !== undefined &&
      (obj.maxCountHoney = message.maxCountHoney);
    message.cycleStartBlock !== undefined &&
      (obj.cycleStartBlock = message.cycleStartBlock);
    if (message.cycleBeesHistory) {
      obj.cycleBeesHistory = message.cycleBeesHistory.map((e) =>
        e ? CycleBeesHistory.toJSON(e) : undefined
      );
    } else {
      obj.cycleBeesHistory = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Apiaries>): Apiaries {
    const message = { ...baseApiaries } as Apiaries;
    message.cycleBeesHistory = [];
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
    if (object.apiaryType !== undefined && object.apiaryType !== null) {
      message.apiaryType = object.apiaryType;
    } else {
      message.apiaryType = 0;
    }
    if (object.position !== undefined && object.position !== null) {
      message.position = ItemPosition.fromPartial(object.position);
    } else {
      message.position = undefined;
    }
    if (object.countBees !== undefined && object.countBees !== null) {
      message.countBees = object.countBees;
    } else {
      message.countBees = 0;
    }
    if (object.maxCountBees !== undefined && object.maxCountBees !== null) {
      message.maxCountBees = object.maxCountBees;
    } else {
      message.maxCountBees = 0;
    }
    if (object.maxCountHoney !== undefined && object.maxCountHoney !== null) {
      message.maxCountHoney = object.maxCountHoney;
    } else {
      message.maxCountHoney = 0;
    }
    if (
      object.cycleStartBlock !== undefined &&
      object.cycleStartBlock !== null
    ) {
      message.cycleStartBlock = object.cycleStartBlock;
    } else {
      message.cycleStartBlock = 0;
    }
    if (
      object.cycleBeesHistory !== undefined &&
      object.cycleBeesHistory !== null
    ) {
      for (const e of object.cycleBeesHistory) {
        message.cycleBeesHistory.push(CycleBeesHistory.fromPartial(e));
      }
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
