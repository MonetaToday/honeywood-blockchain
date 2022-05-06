import { StdFee } from "@cosmjs/launchpad";
import { Registry, OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgInitGameAndCreateBee } from "./types/bears/tx";
import { MsgCreateApiary } from "./types/bears/tx";
import { MsgCreateBee } from "./types/bears/tx";
import { MsgSetDecorationPosition } from "./types/bears/tx";
import { MsgSetName } from "./types/bears/tx";
import { MsgClearApiaryFromBees } from "./types/bears/tx";
import { MsgMoveItemOnField } from "./types/bears/tx";
import { MsgInitGameAndCreateApiary } from "./types/bears/tx";
import { MsgExtendField } from "./types/bears/tx";
import { MsgCollectHoneyFromApiary } from "./types/bears/tx";
import { MsgInitGameAndCreateTree } from "./types/bears/tx";
import { MsgInitGameAndCreateDecoration } from "./types/bears/tx";
import { MsgInitGameAndExtendField } from "./types/bears/tx";
import { MsgUnsetApiaryHouseForBee } from "./types/bears/tx";
import { MsgInitGameAndSetName } from "./types/bears/tx";
import { MsgDeleteApiary } from "./types/bears/tx";
import { MsgUnsetDecorationPosition } from "./types/bears/tx";
import { MsgCreateTree } from "./types/bears/tx";
import { MsgCreateDecoration } from "./types/bears/tx";
import { MsgSetApiaryHouseForBee } from "./types/bears/tx";
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
    msgInitGameAndCreateBee: (data: MsgInitGameAndCreateBee) => EncodeObject;
    msgCreateApiary: (data: MsgCreateApiary) => EncodeObject;
    msgCreateBee: (data: MsgCreateBee) => EncodeObject;
    msgSetDecorationPosition: (data: MsgSetDecorationPosition) => EncodeObject;
    msgSetName: (data: MsgSetName) => EncodeObject;
    msgClearApiaryFromBees: (data: MsgClearApiaryFromBees) => EncodeObject;
    msgMoveItemOnField: (data: MsgMoveItemOnField) => EncodeObject;
    msgInitGameAndCreateApiary: (data: MsgInitGameAndCreateApiary) => EncodeObject;
    msgExtendField: (data: MsgExtendField) => EncodeObject;
    msgCollectHoneyFromApiary: (data: MsgCollectHoneyFromApiary) => EncodeObject;
    msgInitGameAndCreateTree: (data: MsgInitGameAndCreateTree) => EncodeObject;
    msgInitGameAndCreateDecoration: (data: MsgInitGameAndCreateDecoration) => EncodeObject;
    msgInitGameAndExtendField: (data: MsgInitGameAndExtendField) => EncodeObject;
    msgUnsetApiaryHouseForBee: (data: MsgUnsetApiaryHouseForBee) => EncodeObject;
    msgInitGameAndSetName: (data: MsgInitGameAndSetName) => EncodeObject;
    msgDeleteApiary: (data: MsgDeleteApiary) => EncodeObject;
    msgUnsetDecorationPosition: (data: MsgUnsetDecorationPosition) => EncodeObject;
    msgCreateTree: (data: MsgCreateTree) => EncodeObject;
    msgCreateDecoration: (data: MsgCreateDecoration) => EncodeObject;
    msgSetApiaryHouseForBee: (data: MsgSetApiaryHouseForBee) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
