// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgInitGameAndSetName } from "./types/bears/tx";
import { MsgInitGameAndExtend } from "./types/bears/tx";
import { MsgSetName } from "./types/bears/tx";


const types = [
  ["/MonetaToday.honeywood.bears.MsgInitGameAndSetName", MsgInitGameAndSetName],
  ["/MonetaToday.honeywood.bears.MsgInitGameAndExtend", MsgInitGameAndExtend],
  ["/MonetaToday.honeywood.bears.MsgSetName", MsgSetName],
  
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
    msgInitGameAndExtend: (data: MsgInitGameAndExtend): EncodeObject => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgInitGameAndExtend", value: MsgInitGameAndExtend.fromPartial( data ) }),
    msgSetName: (data: MsgSetName): EncodeObject => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgSetName", value: MsgSetName.fromPartial( data ) }),
    
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
