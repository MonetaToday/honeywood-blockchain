package bears_test

import (
	"testing"

	keepertest "github.com/MonetaToday/HoneyWood/testutil/keeper"
	"github.com/MonetaToday/HoneyWood/testutil/sample"
	"github.com/MonetaToday/HoneyWood/testutil/nullify"
	"github.com/MonetaToday/HoneyWood/x/bears"
	"github.com/MonetaToday/HoneyWood/x/bears/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	addr1 := sample.AccAddress()
	addr2 := sample.AccAddress()

	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		BearNamesList: []types.BearNames{
			{
				Name: "Name 1",
				BearId: 0,
			},
			{
				Name: "Name 2",
				BearId: 1,
			},
		},
		BearsList: []types.Bears{
			{
				Id: 0,
				Owner: addr1,
				Name: "Name 1",
				Fields: []uint64{},
				Apiaries: []uint64{},
				Bees: []uint64{},
				Trees: []uint64{},
				Decorations: []uint64{},
			},
			{
				Id: 1,
				Owner: addr2,
				Name: "Name 2",
				Fields: []uint64{},
				Apiaries: []uint64{},
				Bees: []uint64{},
				Trees: []uint64{},
				Decorations: []uint64{},
			},
		},
		BearsCount: 2,
		AddressBearsList: []types.AddressBears{
			{
				Address: addr1,
				Bears: []uint64{
					0,
				},
			},
			{
				Address: addr2,
				Bears: []uint64{
					1,
				},
			},
		},
		FieldsList: []types.Fields{
			{
				Id: 0,
				BearOwner: &types.BearOwner{
					Id: 0,
				},
				FieldType: types.Fields_DEFAULT,
				Tiles: []types.Tiles{
					{
						Item: &types.Tiles_Items{
							ItemId: 0,
							ItemType: types.Tiles_Items_TREE,
						},
					},
				},
				CountTiles: 1,
			},
			{
				Id: 1,
				BearOwner: &types.BearOwner{
					Id: 1,
				},
				FieldType: types.Fields_DEFAULT,
				Tiles: []types.Tiles{
					{},
					{},
					{},
					{
						Item: &types.Tiles_Items{
							ItemId: 1,
							ItemType: types.Tiles_Items_TREE,
						},
					},
				},
				CountTiles: 4,
			},
		},
		FieldsCount: 2,
		TreesList: []types.Trees{
			{
				Id: 0,
				BearId: 0,
				FieldId: 0,
				TileId: 0,
			},
			{
				Id: 1,
				BearId: 1,
				FieldId: 1,
				TileId: 1,
			},
		},
		TreesCount: 2,
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
	require.ElementsMatch(t, genesisState.FieldsList, got.FieldsList)
	require.Equal(t, genesisState.FieldsCount, got.FieldsCount)
	require.ElementsMatch(t, genesisState.TreesList, got.TreesList)
	require.Equal(t, genesisState.TreesCount, got.TreesCount)
	// this line is used by starport scaffolding # genesis/test/assert
}
