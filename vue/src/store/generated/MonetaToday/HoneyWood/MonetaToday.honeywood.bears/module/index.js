// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgMoveItemOnField } from "./types/bears/tx";
import { MsgCreateTree } from "./types/bears/tx";
import { MsgInitGameAndExtendField } from "./types/bears/tx";
import { MsgInitGameAndSetName } from "./types/bears/tx";
import { MsgSetName } from "./types/bears/tx";
import { MsgExtendField } from "./types/bears/tx";
import { MsgInitGameAndCreateTree } from "./types/bears/tx";
const types = [
    ["/MonetaToday.honeywood.bears.MsgMoveItemOnField", MsgMoveItemOnField],
    ["/MonetaToday.honeywood.bears.MsgCreateTree", MsgCreateTree],
    ["/MonetaToday.honeywood.bears.MsgInitGameAndExtendField", MsgInitGameAndExtendField],
    ["/MonetaToday.honeywood.bears.MsgInitGameAndSetName", MsgInitGameAndSetName],
    ["/MonetaToday.honeywood.bears.MsgSetName", MsgSetName],
    ["/MonetaToday.honeywood.bears.MsgExtendField", MsgExtendField],
    ["/MonetaToday.honeywood.bears.MsgInitGameAndCreateTree", MsgInitGameAndCreateTree],
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
        msgMoveItemOnField: (data) => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgMoveItemOnField", value: MsgMoveItemOnField.fromPartial(data) }),
        msgCreateTree: (data) => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgCreateTree", value: MsgCreateTree.fromPartial(data) }),
        msgInitGameAndExtendField: (data) => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgInitGameAndExtendField", value: MsgInitGameAndExtendField.fromPartial(data) }),
        msgInitGameAndSetName: (data) => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgInitGameAndSetName", value: MsgInitGameAndSetName.fromPartial(data) }),
        msgSetName: (data) => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgSetName", value: MsgSetName.fromPartial(data) }),
        msgExtendField: (data) => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgExtendField", value: MsgExtendField.fromPartial(data) }),
        msgInitGameAndCreateTree: (data) => ({ typeUrl: "/MonetaToday.honeywood.bears.MsgInitGameAndCreateTree", value: MsgInitGameAndCreateTree.fromPartial(data) }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
