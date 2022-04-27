import { StdFee } from "@cosmjs/launchpad";
import { Registry, OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgInitGameAndExtendField } from "./types/bears/tx";
import { MsgMoveItemOnField } from "./types/bears/tx";
import { MsgExtendField } from "./types/bears/tx";
import { MsgClearApiaryFromBees } from "./types/bears/tx";
import { MsgSetApiaryHouseForBee } from "./types/bears/tx";
import { MsgCreateDecoration } from "./types/bears/tx";
import { MsgInitGameAndSetName } from "./types/bears/tx";
import { MsgCreateBee } from "./types/bears/tx";
import { MsgInitGameAndCreateDecoration } from "./types/bears/tx";
import { MsgCreateApiary } from "./types/bears/tx";
import { MsgCreateTree } from "./types/bears/tx";
import { MsgSetName } from "./types/bears/tx";
import { MsgInitGameAndCreateBee } from "./types/bears/tx";
import { MsgInitGameAndCreateTree } from "./types/bears/tx";
import { MsgUnsetDecorationPosition } from "./types/bears/tx";
import { MsgCollectHoneyFromApiary } from "./types/bears/tx";
import { MsgUnsetApiaryHouseForBee } from "./types/bears/tx";
import { MsgInitGameAndCreateApiary } from "./types/bears/tx";
import { MsgSetDecorationPosition } from "./types/bears/tx";
import { MsgDeleteApiary } from "./types/bears/tx";
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
    msgInitGameAndExtendField: (data: MsgInitGameAndExtendField) => EncodeObject;
    msgMoveItemOnField: (data: MsgMoveItemOnField) => EncodeObject;
    msgExtendField: (data: MsgExtendField) => EncodeObject;
    msgClearApiaryFromBees: (data: MsgClearApiaryFromBees) => EncodeObject;
    msgSetApiaryHouseForBee: (data: MsgSetApiaryHouseForBee) => EncodeObject;
    msgCreateDecoration: (data: MsgCreateDecoration) => EncodeObject;
    msgInitGameAndSetName: (data: MsgInitGameAndSetName) => EncodeObject;
    msgCreateBee: (data: MsgCreateBee) => EncodeObject;
    msgInitGameAndCreateDecoration: (data: MsgInitGameAndCreateDecoration) => EncodeObject;
    msgCreateApiary: (data: MsgCreateApiary) => EncodeObject;
    msgCreateTree: (data: MsgCreateTree) => EncodeObject;
    msgSetName: (data: MsgSetName) => EncodeObject;
    msgInitGameAndCreateBee: (data: MsgInitGameAndCreateBee) => EncodeObject;
    msgInitGameAndCreateTree: (data: MsgInitGameAndCreateTree) => EncodeObject;
    msgUnsetDecorationPosition: (data: MsgUnsetDecorationPosition) => EncodeObject;
    msgCollectHoneyFromApiary: (data: MsgCollectHoneyFromApiary) => EncodeObject;
    msgUnsetApiaryHouseForBee: (data: MsgUnsetApiaryHouseForBee) => EncodeObject;
    msgInitGameAndCreateApiary: (data: MsgInitGameAndCreateApiary) => EncodeObject;
    msgSetDecorationPosition: (data: MsgSetDecorationPosition) => EncodeObject;
    msgDeleteApiary: (data: MsgDeleteApiary) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
