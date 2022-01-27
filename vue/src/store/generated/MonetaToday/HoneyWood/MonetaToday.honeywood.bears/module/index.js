// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateTree } from "./types/bears/tx";
import { MsgInitGameAndCreateTree } from "./types/bears/tx";
import { MsgExtendPlace } from "./types/bears/tx";
import { MsgInitGameAndExtendPlace } from "./types/bears/tx";
import { MsgSetName } from "./types/bears/tx";
import { MsgMoveItemOnPlace } from "./types/bears/tx";
import { MsgInitGameAndSetName } from "./types/bears/tx";
const types = [
    ["/MonetaToday.honeywood.bears.MsgCreateTree", MsgCreateTree],
    ["/MonetaToday.honeywood.bears.MsgInitGameAndCreateTree", MsgInitGameAndCreateTree],
    ["/MonetaToday.honeywood.bears.MsgExtendPlace", MsgExtendPlace],
    ["/MonetaToday.honeywood.bears.MsgInitGameAndExtendPlace", MsgInitGameAndExtendPlace],
    ["/MonetaToday.honeywood.bears.MsgSetName", MsgSetName],
    ["/MonetaToday.honeywood.bears.MsgMoveItemOnPlace", MsgMoveItemOnPlace],
    ["/MonetaToday.honeywood.bears.MsgInitGameAndSetName", MsgInitGameAndSetName],
];
export const MissingWalletError = new Error("wallet is required");
export const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    let client;
    if (addr) {
        client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    }
    else {
        client = await SigningStargateClient.offline(wallet, { registry });
    }
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgCreateTree: (data) => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgCreateTree", value: MsgCreateTree.fromPartial(data) }),
        msgInitGameAndCreateTree: (data) => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgInitGameAndCreateTree", value: MsgInitGameAndCreateTree.fromPartial(data) }),
        msgExtendPlace: (data) => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgExtendPlace", value: MsgExtendPlace.fromPartial(data) }),
        msgInitGameAndExtendPlace: (data) => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgInitGameAndExtendPlace", value: MsgInitGameAndExtendPlace.fromPartial(data) }),
        msgSetName: (data) => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgSetName", value: MsgSetName.fromPartial(data) }),
        msgMoveItemOnPlace: (data) => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgMoveItemOnPlace", value: MsgMoveItemOnPlace.fromPartial(data) }),
        msgInitGameAndSetName: (data) => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgInitGameAndSetName", value: MsgInitGameAndSetName.fromPartial(data) }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
