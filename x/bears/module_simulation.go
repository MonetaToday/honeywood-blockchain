package bears

import (
	"math/rand"

	"github.com/MonetaToday/HoneyWood/testutil/sample"
	bearssimulation "github.com/MonetaToday/HoneyWood/x/bears/simulation"
	"github.com/MonetaToday/HoneyWood/x/bears/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = bearssimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgInitGameAndSetName = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgInitGameAndSetName int = 100

	opWeightMsgSetName = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgSetName int = 100

	opWeightMsgInitGameAndExtend = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgInitGameAndExtend int = 100

	opWeightMsgExtendField = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgExtendField int = 100

	opWeightMsgInitGameAndCreateTree = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgInitGameAndCreateTree int = 100

	opWeightMsgCreateTree = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateTree int = 100

	opWeightMsgMoveItemOnField = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgMoveItemOnField int = 100

	opWeightMsgInitGameAndCreateDecoration = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgInitGameAndCreateDecoration int = 100

	opWeightMsgCreateDecoration = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateDecoration int = 100

	opWeightMsgSetDecorationPosition = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgSetDecorationPosition int = 100

	opWeightMsgUnsetDecorationPosition = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUnsetDecorationPosition int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	bearsGenesis := types.GenesisState{
		Params: types.Params{
			PriceSetName: types.DefaultPriceSetName,
		},
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&bearsGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {
	bearsParams := types.DefaultParams()
	return []simtypes.ParamChange{
		simulation.NewSimParamChange(types.ModuleName, string(types.KeyPriceSetName), func(r *rand.Rand) string {
			return string(types.Amino.MustMarshalJSON(bearsParams.PriceSetName))
		}),
		simulation.NewSimParamChange(types.ModuleName, string(types.KeyPriceTile), func(r *rand.Rand) string {
			return string(types.Amino.MustMarshalJSON(bearsParams.PriceTile))
		}),
		simulation.NewSimParamChange(types.ModuleName, string(types.KeyPriceTree), func(r *rand.Rand) string {
			return string(types.Amino.MustMarshalJSON(bearsParams.PriceTree))
		}),
		simulation.NewSimParamChange(types.ModuleName, string(types.KeyRewardTree), func(r *rand.Rand) string {
			return string(types.Amino.MustMarshalJSON(bearsParams.RewardTree))
		}),
	}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgInitGameAndSetName int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgInitGameAndSetName, &weightMsgInitGameAndSetName, nil,
		func(_ *rand.Rand) {
			weightMsgInitGameAndSetName = defaultWeightMsgInitGameAndSetName
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgInitGameAndSetName,
		bearssimulation.SimulateMsgInitGameAndSetName(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgSetName int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgSetName, &weightMsgSetName, nil,
		func(_ *rand.Rand) {
			weightMsgSetName = defaultWeightMsgSetName
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgSetName,
		bearssimulation.SimulateMsgSetName(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgInitGameAndExtend int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgInitGameAndExtend, &weightMsgInitGameAndExtend, nil,
		func(_ *rand.Rand) {
			weightMsgInitGameAndExtend = defaultWeightMsgInitGameAndExtend
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgInitGameAndExtend,
		bearssimulation.SimulateMsgInitGameAndExtend(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgExtendField int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgExtendField, &weightMsgExtendField, nil,
		func(_ *rand.Rand) {
			weightMsgExtendField = defaultWeightMsgExtendField
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgExtendField,
		bearssimulation.SimulateMsgExtendField(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgInitGameAndCreateTree int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgInitGameAndCreateTree, &weightMsgInitGameAndCreateTree, nil,
		func(_ *rand.Rand) {
			weightMsgInitGameAndCreateTree = defaultWeightMsgInitGameAndCreateTree
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgInitGameAndCreateTree,
		bearssimulation.SimulateMsgInitGameAndCreateTree(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateTree int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateTree, &weightMsgCreateTree, nil,
		func(_ *rand.Rand) {
			weightMsgCreateTree = defaultWeightMsgCreateTree
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateTree,
		bearssimulation.SimulateMsgCreateTree(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgMoveItemOnField int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgMoveItemOnField, &weightMsgMoveItemOnField, nil,
		func(_ *rand.Rand) {
			weightMsgMoveItemOnField = defaultWeightMsgMoveItemOnField
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgMoveItemOnField,
		bearssimulation.SimulateMsgMoveItemOnField(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgInitGameAndCreateDecoration int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgInitGameAndCreateDecoration, &weightMsgInitGameAndCreateDecoration, nil,
		func(_ *rand.Rand) {
			weightMsgInitGameAndCreateDecoration = defaultWeightMsgInitGameAndCreateDecoration
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgInitGameAndCreateDecoration,
		bearssimulation.SimulateMsgInitGameAndCreateDecoration(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateDecoration int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateDecoration, &weightMsgCreateDecoration, nil,
		func(_ *rand.Rand) {
			weightMsgCreateDecoration = defaultWeightMsgCreateDecoration
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateDecoration,
		bearssimulation.SimulateMsgCreateDecoration(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgSetDecorationPosition int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgSetDecorationPosition, &weightMsgSetDecorationPosition, nil,
		func(_ *rand.Rand) {
			weightMsgSetDecorationPosition = defaultWeightMsgSetDecorationPosition
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgSetDecorationPosition,
		bearssimulation.SimulateMsgSetDecorationPosition(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUnsetDecorationPosition int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUnsetDecorationPosition, &weightMsgUnsetDecorationPosition, nil,
		func(_ *rand.Rand) {
			weightMsgUnsetDecorationPosition = defaultWeightMsgUnsetDecorationPosition
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUnsetDecorationPosition,
		bearssimulation.SimulateMsgUnsetDecorationPosition(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
