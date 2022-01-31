// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgInitGameAndSetName } from "./types/bears/tx";
import { MsgInitGameAndCreateTree } from "./types/bears/tx";
import { MsgExtendField } from "./types/bears/tx";
import { MsgSetName } from "./types/bears/tx";
import { MsgMoveItemOnField } from "./types/bears/tx";
import { MsgCreateTree } from "./types/bears/tx";
import { MsgInitGameAndExtendField } from "./types/bears/tx";


const types = [
  ["/MonetaToday.honeywood.bears.MsgInitGameAndSetName", MsgInitGameAndSetName],
  ["/MonetaToday.honeywood.bears.MsgInitGameAndCreateTree", MsgInitGameAndCreateTree],
  ["/MonetaToday.honeywood.bears.MsgExtendField", MsgExtendField],
  ["/MonetaToday.honeywood.bears.MsgSetName", MsgSetName],
  ["/MonetaToday.honeywood.bears.MsgMoveItemOnField", MsgMoveItemOnField],
  ["/MonetaToday.honeywood.bears.MsgCreateTree", MsgCreateTree],
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
    msgInitGameAndSetName: (data: MsgInitGameAndSetName): EncodeObject => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgInitGameAndSetName", value: MsgInitGameAndSetName.fromPartial( data ) }),
    msgInitGameAndCreateTree: (data: MsgInitGameAndCreateTree): EncodeObject => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgInitGameAndCreateTree", value: MsgInitGameAndCreateTree.fromPartial( data ) }),
    msgExtendField: (data: MsgExtendField): EncodeObject => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgExtendField", value: MsgExtendField.fromPartial( data ) }),
    msgSetName: (data: MsgSetName): EncodeObject => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgSetName", value: MsgSetName.fromPartial( data ) }),
    msgMoveItemOnField: (data: MsgMoveItemOnField): EncodeObject => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgMoveItemOnField", value: MsgMoveItemOnField.fromPartial( data ) }),
    msgCreateTree: (data: MsgCreateTree): EncodeObject => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgCreateTree", value: MsgCreateTree.fromPartial( data ) }),
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
