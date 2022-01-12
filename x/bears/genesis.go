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
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.BearNamesList = k.GetAllBearNames(ctx)
	genesis.BearsList = k.GetAllBears(ctx)
	genesis.BearsCount = k.GetBearsCount(ctx)
	genesis.AddressBearsList = k.GetAllAddressBears(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
