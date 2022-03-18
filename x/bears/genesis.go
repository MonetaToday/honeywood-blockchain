package bears

import (
	"github.com/MonetaToday/HoneyWood/x/bears/keeper"
	"github.com/MonetaToday/HoneyWood/x/bears/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the bearNames
	for _, elem := range genState.BearNamesList {
		k.SetBearNames(ctx, elem)
	}
	// Set all the bears
	for _, elem := range genState.BearsList {
		k.SetBears(ctx, elem)
	}

	// Set bears count
	k.SetBearsCount(ctx, genState.BearsCount)
	// Set all the addressBears
	for _, elem := range genState.AddressBearsList {
		k.SetAddressBears(ctx, elem)
	}
	// Set all the Fields
	for _, elem := range genState.FieldsList {
		k.SetFields(ctx, elem)
	}

	// Set fields count
	k.SetFieldsCount(ctx, genState.FieldsCount)
	// Set all the trees
	for _, elem := range genState.TreesList {
		k.SetTrees(ctx, elem)
	}

	// Set trees count
	k.SetTreesCount(ctx, genState.TreesCount)
	// Set all the decorations
	for _, elem := range genState.DecorationsList {
		k.SetDecorations(ctx, elem)
	}

	// Set decorations count
	k.SetDecorationsCount(ctx, genState.DecorationsCount)
	// Set all the apiaries
	for _, elem := range genState.ApiariesList {
		k.SetApiaries(ctx, elem)
	}

	// Set apiaries count
	k.SetApiariesCount(ctx, genState.ApiariesCount)
	// Set all the bees
	for _, elem := range genState.BeesList {
		k.SetBees(ctx, elem)
	}

	// Set bees count
	k.SetBeesCount(ctx, genState.BeesCount)
	k.SetParams(ctx, genState.Params)
	// Set air info
	k.SetAirInfo(ctx, genState.AirInfo)
	// this line is used by starport scaffolding # genesis/module/init

}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.BearNamesList = k.GetAllBearNames(ctx)
	genesis.BearsList = k.GetAllBears(ctx)
	genesis.BearsCount = k.GetBearsCount(ctx)
	genesis.AddressBearsList = k.GetAllAddressBears(ctx)
	genesis.FieldsList = k.GetAllFields(ctx)
	genesis.FieldsCount = k.GetFieldsCount(ctx)
	genesis.TreesList = k.GetAllTrees(ctx)
	genesis.TreesCount = k.GetTreesCount(ctx)
	genesis.DecorationsList = k.GetAllDecorations(ctx)
	genesis.DecorationsCount = k.GetDecorationsCount(ctx)
	genesis.ApiariesList = k.GetAllApiaries(ctx)
	genesis.ApiariesCount = k.GetApiariesCount(ctx)
	genesis.BeesList = k.GetAllBees(ctx)
	genesis.BeesCount = k.GetBeesCount(ctx)
	// Get all airInfo
	airInfo, found := k.GetAirInfo(ctx)
	if found {
		genesis.AirInfo = airInfo
	}
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
