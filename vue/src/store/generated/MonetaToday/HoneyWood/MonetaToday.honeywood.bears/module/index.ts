// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgInitGameAndSetName } from "./types/bears/tx";
import { MsgExtendPlace } from "./types/bears/tx";
import { MsgInitGameAndExtendPlace } from "./types/bears/tx";
import { MsgInitGameAndCreateTree } from "./types/bears/tx";
import { MsgMoveItemOnPlace } from "./types/bears/tx";
import { MsgSetName } from "./types/bears/tx";
import { MsgCreateTree } from "./types/bears/tx";


const types = [
  ["/MonetaToday.honeywood.bears.MsgInitGameAndSetName", MsgInitGameAndSetName],
  ["/MonetaToday.honeywood.bears.MsgExtendPlace", MsgExtendPlace],
  ["/MonetaToday.honeywood.bears.MsgInitGameAndExtendPlace", MsgInitGameAndExtendPlace],
  ["/MonetaToday.honeywood.bears.MsgInitGameAndCreateTree", MsgInitGameAndCreateTree],
  ["/MonetaToday.honeywood.bears.MsgMoveItemOnPlace", MsgMoveItemOnPlace],
  ["/MonetaToday.honeywood.bears.MsgSetName", MsgSetName],
  ["/MonetaToday.honeywood.bears.MsgCreateTree", MsgCreateTree],
  
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
    msgExtendPlace: (data: MsgExtendPlace): EncodeObject => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgExtendPlace", value: MsgExtendPlace.fromPartial( data ) }),
    msgInitGameAndExtendPlace: (data: MsgInitGameAndExtendPlace): EncodeObject => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgInitGameAndExtendPlace", value: MsgInitGameAndExtendPlace.fromPartial( data ) }),
    msgInitGameAndCreateTree: (data: MsgInitGameAndCreateTree): EncodeObject => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgInitGameAndCreateTree", value: MsgInitGameAndCreateTree.fromPartial( data ) }),
    msgMoveItemOnPlace: (data: MsgMoveItemOnPlace): EncodeObject => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgMoveItemOnPlace", value: MsgMoveItemOnPlace.fromPartial( data ) }),
    msgSetName: (data: MsgSetName): EncodeObject => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgSetName", value: MsgSetName.fromPartial( data ) }),
    msgCreateTree: (data: MsgCreateTree): EncodeObject => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgCreateTree", value: MsgCreateTree.fromPartial( data ) }),
    
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
