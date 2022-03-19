import { StdFee } from "@cosmjs/launchpad";
import { Registry, OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgExtendField } from "./types/bears/tx";
import { MsgCreateApiary } from "./types/bears/tx";
import { MsgCreateDecoration } from "./types/bears/tx";
import { MsgInitGameAndCreateApiary } from "./types/bears/tx";
import { MsgDeleteApiary } from "./types/bears/tx";
import { MsgUnsetDecorationPosition } from "./types/bears/tx";
import { MsgSetDecorationPosition } from "./types/bears/tx";
import { MsgCreateTree } from "./types/bears/tx";
import { MsgInitGameAndCreateBee } from "./types/bears/tx";
import { MsgInitGameAndExtendField } from "./types/bears/tx";
import { MsgClearApiaryFromBees } from "./types/bears/tx";
import { MsgCollectHoneyFromApiary } from "./types/bears/tx";
import { MsgMoveItemOnField } from "./types/bears/tx";
import { MsgUnsetApiaryHouseForBee } from "./types/bears/tx";
import { MsgInitGameAndSetName } from "./types/bears/tx";
import { MsgSetApiaryHouseForBee } from "./types/bears/tx";
import { MsgInitGameAndCreateTree } from "./types/bears/tx";
import { MsgCreateBee } from "./types/bears/tx";
import { MsgSetName } from "./types/bears/tx";
import { MsgInitGameAndCreateDecoration } from "./types/bears/tx";
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
    msgExtendField: (data: MsgExtendField) => EncodeObject;
    msgCreateApiary: (data: MsgCreateApiary) => EncodeObject;
    msgCreateDecoration: (data: MsgCreateDecoration) => EncodeObject;
    msgInitGameAndCreateApiary: (data: MsgInitGameAndCreateApiary) => EncodeObject;
    msgDeleteApiary: (data: MsgDeleteApiary) => EncodeObject;
    msgUnsetDecorationPosition: (data: MsgUnsetDecorationPosition) => EncodeObject;
    msgSetDecorationPosition: (data: MsgSetDecorationPosition) => EncodeObject;
    msgCreateTree: (data: MsgCreateTree) => EncodeObject;
    msgInitGameAndCreateBee: (data: MsgInitGameAndCreateBee) => EncodeObject;
    msgInitGameAndExtendField: (data: MsgInitGameAndExtendField) => EncodeObject;
    msgClearApiaryFromBees: (data: MsgClearApiaryFromBees) => EncodeObject;
    msgCollectHoneyFromApiary: (data: MsgCollectHoneyFromApiary) => EncodeObject;
    msgMoveItemOnField: (data: MsgMoveItemOnField) => EncodeObject;
    msgUnsetApiaryHouseForBee: (data: MsgUnsetApiaryHouseForBee) => EncodeObject;
    msgInitGameAndSetName: (data: MsgInitGameAndSetName) => EncodeObject;
    msgSetApiaryHouseForBee: (data: MsgSetApiaryHouseForBee) => EncodeObject;
    msgInitGameAndCreateTree: (data: MsgInitGameAndCreateTree) => EncodeObject;
    msgCreateBee: (data: MsgCreateBee) => EncodeObject;
    msgSetName: (data: MsgSetName) => EncodeObject;
    msgInitGameAndCreateDecoration: (data: MsgInitGameAndCreateDecoration) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
