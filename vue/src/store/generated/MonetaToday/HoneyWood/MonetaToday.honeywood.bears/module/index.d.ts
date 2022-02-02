import { StdFee } from "@cosmjs/launchpad";
import { Registry, OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateTree } from "./types/bears/tx";
import { MsgCreateDecoration } from "./types/bears/tx";
import { MsgInitGameAndCreateTree } from "./types/bears/tx";
import { MsgSetDecorationPosition } from "./types/bears/tx";
import { MsgInitGameAndCreateDecoration } from "./types/bears/tx";
import { MsgInitGameAndExtendField } from "./types/bears/tx";
import { MsgUnsetDecorationPosition } from "./types/bears/tx";
import { MsgInitGameAndSetName } from "./types/bears/tx";
import { MsgExtendField } from "./types/bears/tx";
import { MsgMoveItemOnField } from "./types/bears/tx";
import { MsgSetName } from "./types/bears/tx";
export declare const MissingWalletError: Error;
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }?: SignAndBroadcastOptions) => any;
    msgCreateTree: (data: MsgCreateTree) => EncodeObject;
    msgCreateDecoration: (data: MsgCreateDecoration) => EncodeObject;
    msgInitGameAndCreateTree: (data: MsgInitGameAndCreateTree) => EncodeObject;
    msgSetDecorationPosition: (data: MsgSetDecorationPosition) => EncodeObject;
    msgInitGameAndCreateDecoration: (data: MsgInitGameAndCreateDecoration) => EncodeObject;
    msgInitGameAndExtendField: (data: MsgInitGameAndExtendField) => EncodeObject;
    msgUnsetDecorationPosition: (data: MsgUnsetDecorationPosition) => EncodeObject;
    msgInitGameAndSetName: (data: MsgInitGameAndSetName) => EncodeObject;
    msgExtendField: (data: MsgExtendField) => EncodeObject;
    msgMoveItemOnField: (data: MsgMoveItemOnField) => EncodeObject;
    msgSetName: (data: MsgSetName) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
