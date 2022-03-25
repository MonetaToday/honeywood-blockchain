// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateDecoration } from "./types/bears/tx";
import { MsgMoveItemOnField } from "./types/bears/tx";
import { MsgClearApiaryFromBees } from "./types/bears/tx";
import { MsgUnsetApiaryHouseForBee } from "./types/bears/tx";
import { MsgSetApiaryHouseForBee } from "./types/bears/tx";
import { MsgExtendField } from "./types/bears/tx";
import { MsgSetDecorationPosition } from "./types/bears/tx";
import { MsgInitGameAndCreateTree } from "./types/bears/tx";
import { MsgInitGameAndCreateApiary } from "./types/bears/tx";
import { MsgCreateApiary } from "./types/bears/tx";
import { MsgDeleteApiary } from "./types/bears/tx";
import { MsgUnsetDecorationPosition } from "./types/bears/tx";
import { MsgSetName } from "./types/bears/tx";
import { MsgCollectHoneyFromApiary } from "./types/bears/tx";
import { MsgCreateBee } from "./types/bears/tx";
import { MsgCreateTree } from "./types/bears/tx";
import { MsgInitGameAndSetName } from "./types/bears/tx";
import { MsgInitGameAndCreateDecoration } from "./types/bears/tx";
import { MsgInitGameAndCreateBee } from "./types/bears/tx";
import { MsgInitGameAndExtendField } from "./types/bears/tx";


const types = [
  ["/MonetaToday.honeywood.bears.MsgCreateDecoration", MsgCreateDecoration],
  ["/MonetaToday.honeywood.bears.MsgMoveItemOnField", MsgMoveItemOnField],
  ["/MonetaToday.honeywood.bears.MsgClearApiaryFromBees", MsgClearApiaryFromBees],
  ["/MonetaToday.honeywood.bears.MsgUnsetApiaryHouseForBee", MsgUnsetApiaryHouseForBee],
  ["/MonetaToday.honeywood.bears.MsgSetApiaryHouseForBee", MsgSetApiaryHouseForBee],
  ["/MonetaToday.honeywood.bears.MsgExtendField", MsgExtendField],
  ["/MonetaToday.honeywood.bears.MsgSetDecorationPosition", MsgSetDecorationPosition],
  ["/MonetaToday.honeywood.bears.MsgInitGameAndCreateTree", MsgInitGameAndCreateTree],
  ["/MonetaToday.honeywood.bears.MsgInitGameAndCreateApiary", MsgInitGameAndCreateApiary],
  ["/MonetaToday.honeywood.bears.MsgCreateApiary", MsgCreateApiary],
  ["/MonetaToday.honeywood.bears.MsgDeleteApiary", MsgDeleteApiary],
  ["/MonetaToday.honeywood.bears.MsgUnsetDecorationPosition", MsgUnsetDecorationPosition],
  ["/MonetaToday.honeywood.bears.MsgSetName", MsgSetName],
  ["/MonetaToday.honeywood.bears.MsgCollectHoneyFromApiary", MsgCollectHoneyFromApiary],
  ["/MonetaToday.honeywood.bears.MsgCreateBee", MsgCreateBee],
  ["/MonetaToday.honeywood.bears.MsgCreateTree", MsgCreateTree],
  ["/MonetaToday.honeywood.bears.MsgInitGameAndSetName", MsgInitGameAndSetName],
  ["/MonetaToday.honeywood.bears.MsgInitGameAndCreateDecoration", MsgInitGameAndCreateDecoration],
  ["/MonetaToday.honeywood.bears.MsgInitGameAndCreateBee", MsgInitGameAndCreateBee],
  ["/MonetaToday.honeywood.bears.MsgInitGameAndExtendField", MsgInitGameAndExtendField],
  
];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;
  let client;
  if (addr) {
    client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  }else{
    client = await SigningStargateClient.offline( wallet, { registry });
  }
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgCreateDecoration: (data: MsgCreateDecoration): EncodeObject => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgCreateDecoration", value: MsgCreateDecoration.fromPartial( data ) }),
    msgMoveItemOnField: (data: MsgMoveItemOnField): EncodeObject => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgMoveItemOnField", value: MsgMoveItemOnField.fromPartial( data ) }),
    msgClearApiaryFromBees: (data: MsgClearApiaryFromBees): EncodeObject => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgClearApiaryFromBees", value: MsgClearApiaryFromBees.fromPartial( data ) }),
    msgUnsetApiaryHouseForBee: (data: MsgUnsetApiaryHouseForBee): EncodeObject => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgUnsetApiaryHouseForBee", value: MsgUnsetApiaryHouseForBee.fromPartial( data ) }),
    msgSetApiaryHouseForBee: (data: MsgSetApiaryHouseForBee): EncodeObject => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgSetApiaryHouseForBee", value: MsgSetApiaryHouseForBee.fromPartial( data ) }),
    msgExtendField: (data: MsgExtendField): EncodeObject => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgExtendField", value: MsgExtendField.fromPartial( data ) }),
    msgSetDecorationPosition: (data: MsgSetDecorationPosition): EncodeObject => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgSetDecorationPosition", value: MsgSetDecorationPosition.fromPartial( data ) }),
    msgInitGameAndCreateTree: (data: MsgInitGameAndCreateTree): EncodeObject => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgInitGameAndCreateTree", value: MsgInitGameAndCreateTree.fromPartial( data ) }),
    msgInitGameAndCreateApiary: (data: MsgInitGameAndCreateApiary): EncodeObject => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgInitGameAndCreateApiary", value: MsgInitGameAndCreateApiary.fromPartial( data ) }),
    msgCreateApiary: (data: MsgCreateApiary): EncodeObject => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgCreateApiary", value: MsgCreateApiary.fromPartial( data ) }),
    msgDeleteApiary: (data: MsgDeleteApiary): EncodeObject => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgDeleteApiary", value: MsgDeleteApiary.fromPartial( data ) }),
    msgUnsetDecorationPosition: (data: MsgUnsetDecorationPosition): EncodeObject => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgUnsetDecorationPosition", value: MsgUnsetDecorationPosition.fromPartial( data ) }),
    msgSetName: (data: MsgSetName): EncodeObject => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgSetName", value: MsgSetName.fromPartial( data ) }),
    msgCollectHoneyFromApiary: (data: MsgCollectHoneyFromApiary): EncodeObject => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgCollectHoneyFromApiary", value: MsgCollectHoneyFromApiary.fromPartial( data ) }),
    msgCreateBee: (data: MsgCreateBee): EncodeObject => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgCreateBee", value: MsgCreateBee.fromPartial( data ) }),
    msgCreateTree: (data: MsgCreateTree): EncodeObject => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgCreateTree", value: MsgCreateTree.fromPartial( data ) }),
    msgInitGameAndSetName: (data: MsgInitGameAndSetName): EncodeObject => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgInitGameAndSetName", value: MsgInitGameAndSetName.fromPartial( data ) }),
    msgInitGameAndCreateDecoration: (data: MsgInitGameAndCreateDecoration): EncodeObject => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgInitGameAndCreateDecoration", value: MsgInitGameAndCreateDecoration.fromPartial( data ) }),
    msgInitGameAndCreateBee: (data: MsgInitGameAndCreateBee): EncodeObject => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgInitGameAndCreateBee", value: MsgInitGameAndCreateBee.fromPartial( data ) }),
    msgInitGameAndExtendField: (data: MsgInitGameAndExtendField): EncodeObject => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgInitGameAndExtendField", value: MsgInitGameAndExtendField.fromPartial( data ) }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
