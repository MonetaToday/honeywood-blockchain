// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgMoveItemOnField } from "./types/bears/tx";
import { MsgInitGameAndExtendField } from "./types/bears/tx";
import { MsgCreateTree } from "./types/bears/tx";
import { MsgSetDecorationPosition } from "./types/bears/tx";
import { MsgInitGameAndCreateDecoration } from "./types/bears/tx";
import { MsgSetName } from "./types/bears/tx";
import { MsgInitGameAndCreateTree } from "./types/bears/tx";
import { MsgUnsetDecorationPosition } from "./types/bears/tx";
import { MsgCreateDecoration } from "./types/bears/tx";
import { MsgInitGameAndCreateApiary } from "./types/bears/tx";
import { MsgExtendField } from "./types/bears/tx";
import { MsgCreateApiary } from "./types/bears/tx";
import { MsgInitGameAndSetName } from "./types/bears/tx";


const types = [
  ["/MonetaToday.honeywood.bears.MsgMoveItemOnField", MsgMoveItemOnField],
  ["/MonetaToday.honeywood.bears.MsgInitGameAndExtendField", MsgInitGameAndExtendField],
  ["/MonetaToday.honeywood.bears.MsgCreateTree", MsgCreateTree],
  ["/MonetaToday.honeywood.bears.MsgSetDecorationPosition", MsgSetDecorationPosition],
  ["/MonetaToday.honeywood.bears.MsgInitGameAndCreateDecoration", MsgInitGameAndCreateDecoration],
  ["/MonetaToday.honeywood.bears.MsgSetName", MsgSetName],
  ["/MonetaToday.honeywood.bears.MsgInitGameAndCreateTree", MsgInitGameAndCreateTree],
  ["/MonetaToday.honeywood.bears.MsgUnsetDecorationPosition", MsgUnsetDecorationPosition],
  ["/MonetaToday.honeywood.bears.MsgCreateDecoration", MsgCreateDecoration],
  ["/MonetaToday.honeywood.bears.MsgInitGameAndCreateApiary", MsgInitGameAndCreateApiary],
  ["/MonetaToday.honeywood.bears.MsgExtendField", MsgExtendField],
  ["/MonetaToday.honeywood.bears.MsgCreateApiary", MsgCreateApiary],
  ["/MonetaToday.honeywood.bears.MsgInitGameAndSetName", MsgInitGameAndSetName],
  
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
    msgMoveItemOnField: (data: MsgMoveItemOnField): EncodeObject => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgMoveItemOnField", value: MsgMoveItemOnField.fromPartial( data ) }),
    msgInitGameAndExtendField: (data: MsgInitGameAndExtendField): EncodeObject => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgInitGameAndExtendField", value: MsgInitGameAndExtendField.fromPartial( data ) }),
    msgCreateTree: (data: MsgCreateTree): EncodeObject => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgCreateTree", value: MsgCreateTree.fromPartial( data ) }),
    msgSetDecorationPosition: (data: MsgSetDecorationPosition): EncodeObject => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgSetDecorationPosition", value: MsgSetDecorationPosition.fromPartial( data ) }),
    msgInitGameAndCreateDecoration: (data: MsgInitGameAndCreateDecoration): EncodeObject => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgInitGameAndCreateDecoration", value: MsgInitGameAndCreateDecoration.fromPartial( data ) }),
    msgSetName: (data: MsgSetName): EncodeObject => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgSetName", value: MsgSetName.fromPartial( data ) }),
    msgInitGameAndCreateTree: (data: MsgInitGameAndCreateTree): EncodeObject => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgInitGameAndCreateTree", value: MsgInitGameAndCreateTree.fromPartial( data ) }),
    msgUnsetDecorationPosition: (data: MsgUnsetDecorationPosition): EncodeObject => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgUnsetDecorationPosition", value: MsgUnsetDecorationPosition.fromPartial( data ) }),
    msgCreateDecoration: (data: MsgCreateDecoration): EncodeObject => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgCreateDecoration", value: MsgCreateDecoration.fromPartial( data ) }),
    msgInitGameAndCreateApiary: (data: MsgInitGameAndCreateApiary): EncodeObject => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgInitGameAndCreateApiary", value: MsgInitGameAndCreateApiary.fromPartial( data ) }),
    msgExtendField: (data: MsgExtendField): EncodeObject => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgExtendField", value: MsgExtendField.fromPartial( data ) }),
    msgCreateApiary: (data: MsgCreateApiary): EncodeObject => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgCreateApiary", value: MsgCreateApiary.fromPartial( data ) }),
    msgInitGameAndSetName: (data: MsgInitGameAndSetName): EncodeObject => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgInitGameAndSetName", value: MsgInitGameAndSetName.fromPartial( data ) }),
    
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
