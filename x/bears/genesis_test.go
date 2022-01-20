package bears_test

import (
	"testing"

	keepertest "github.com/MonetaToday/HoneyWood/testutil/keeper"
	"github.com/MonetaToday/HoneyWood/testutil/nullify"
	"github.com/MonetaToday/HoneyWood/x/bears"
	"github.com/MonetaToday/HoneyWood/x/bears/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		BearNamesList: []types.BearNames{
			{
				Name: "0",
			},
			{
				Name: "1",
			},
		},
		BearsList: []types.Bears{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		BearsCount: 2,
		AddressBearsList: []types.AddressBears{
			{
				Address: "0",
			},
			{
				Address: "1",
			},
		},
		PlacesList: []types.Places{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		PlacesCount: 2,
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.BearsKeeper(t)
	bears.InitGenesis(ctx, *k, genesisState)
	got := bears.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.BearNamesList, got.BearNamesList)
	require.ElementsMatch(t, genesisState.BearsList, got.BearsList)
	require.Equal(t, genesisState.BearsCount, got.BearsCount)
	require.ElementsMatch(t, genesisState.AddressBearsList, got.AddressBearsList)
	require.ElementsMatch(t, genesisState.PlacesList, got.PlacesList)
	require.Equal(t, genesisState.PlacesCount, got.PlacesCount)
	// this line is used by starport scaffolding # genesis/test/assert
}
