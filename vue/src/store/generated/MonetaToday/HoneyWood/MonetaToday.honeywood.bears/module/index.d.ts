import { StdFee } from "@cosmjs/launchpad";
import { Registry, OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgInitGameAndCreateApiary } from "./types/bears/tx";
import { MsgInitGameAndSetName } from "./types/bears/tx";
import { MsgMoveItemOnField } from "./types/bears/tx";
import { MsgSetDecorationPosition } from "./types/bears/tx";
import { MsgInitGameAndExtendField } from "./types/bears/tx";
import { MsgSetName } from "./types/bears/tx";
import { MsgCreateDecoration } from "./types/bears/tx";
import { MsgCreateTree } from "./types/bears/tx";
import { MsgInitGameAndCreateDecoration } from "./types/bears/tx";
import { MsgUnsetDecorationPosition } from "./types/bears/tx";
import { MsgExtendField } from "./types/bears/tx";
import { MsgInitGameAndCreateTree } from "./types/bears/tx";
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
    msgInitGameAndCreateApiary: (data: MsgInitGameAndCreateApiary) => EncodeObject;
    msgInitGameAndSetName: (data: MsgInitGameAndSetName) => EncodeObject;
    msgMoveItemOnField: (data: MsgMoveItemOnField) => EncodeObject;
    msgSetDecorationPosition: (data: MsgSetDecorationPosition) => EncodeObject;
    msgInitGameAndExtendField: (data: MsgInitGameAndExtendField) => EncodeObject;
    msgSetName: (data: MsgSetName) => EncodeObject;
    msgCreateDecoration: (data: MsgCreateDecoration) => EncodeObject;
    msgCreateTree: (data: MsgCreateTree) => EncodeObject;
    msgInitGameAndCreateDecoration: (data: MsgInitGameAndCreateDecoration) => EncodeObject;
    msgUnsetDecorationPosition: (data: MsgUnsetDecorationPosition) => EncodeObject;
    msgExtendField: (data: MsgExtendField) => EncodeObject;
    msgInitGameAndCreateTree: (data: MsgInitGameAndCreateTree) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
