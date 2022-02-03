package types_test

import (
	"testing"

	"github.com/MonetaToday/HoneyWood/testutil/sample"
	"github.com/MonetaToday/HoneyWood/x/bears/types"
	"github.com/stretchr/testify/require"
)

func TestGenesisState_Validate(t *testing.T) {
	addr1 := sample.AccAddress()
	addr2 := sample.AccAddress()

	for _, tc := range []struct {
		desc     string
		genState *types.GenesisState
		valid    bool
	}{
		{
			desc:     "default is valid",
			genState: types.DefaultGenesis(),
			valid:    true,
		},
		{
			desc: "valid genesis state",
			genState: &types.GenesisState{
				Params: types.DefaultParams(),
				BearNamesList: []types.BearNames{
					{
						Name:   "Name 1",
						BearId: 0,
					},
					{
						Name:   "Name 2",
						BearId: 1,
					},
				},
				BearsList: []types.Bears{
					{
						Id:          0,
						Owner:       addr1,
						Name:        "Name 1",
						Fields:      []uint64{},
						Apiaries:    []uint64{},
						Bees:        []uint64{},
						Trees:       []uint64{},
						Decorations: []uint64{},
					},
					{
						Id:          1,
						Owner:       addr2,
						Name:        "Name 2",
						Fields:      []uint64{},
						Apiaries:    []uint64{},
						Bees:        []uint64{},
						Trees:       []uint64{},
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
									ItemId:   0,
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
									ItemId:   1,
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
						Id:      0,
						BearId:  0,
						FieldId: 0,
						TileId:  0,
					},
					{
						Id:      1,
						BearId:  1,
						FieldId: 1,
						TileId:  1,
					},
				},
				TreesCount: 2,
				DecorationsList: []types.Decorations{
					{
						Id: 0,
					},
					{
						Id: 1,
					},
				},
				DecorationsCount: 2,
				ApiariesList: []types.Apiaries{
					{
						Id: 0,
					},
					{
						Id: 1,
					},
				},
				ApiariesCount: 2,
				BeesList: []types.Bees{
					{
						Id: 0,
					},
					{
						Id: 1,
					},
				},
				BeesCount: 2,
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated bearNames",
			genState: &types.GenesisState{
				Params: types.DefaultParams(),
				BearNamesList: []types.BearNames{
					{
						Name: "0",
					},
					{
						Name: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "empty bearName for existing bear",
			genState: &types.GenesisState{
				Params: types.DefaultParams(),
				BearsList: []types.Bears{
					{
						Id:          0,
						Owner:       addr1,
						Name:        "Name 1",
						Fields:      []uint64{},
						Apiaries:    []uint64{},
						Bees:        []uint64{},
						Trees:       []uint64{},
						Decorations: []uint64{},
					},
				},
				BearsCount:    1,
				BearNamesList: []types.BearNames{},
			},
			valid: false,
		},
		{
			desc: "count names are not equal to count bears",
			genState: &types.GenesisState{
				Params: types.DefaultParams(),
				BearsList: []types.Bears{
					{
						Id:          0,
						Owner:       addr1,
						Name:        "Name 1",
						Fields:      []uint64{},
						Apiaries:    []uint64{},
						Bees:        []uint64{},
						Trees:       []uint64{},
						Decorations: []uint64{},
					},
				},
				BearsCount: 1,
				BearNamesList: []types.BearNames{
					{
						Name:   "Name 1",
						BearId: 0,
					},
					{
						Name: "1",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated bears",
			genState: &types.GenesisState{
				Params: types.DefaultParams(),
				BearsList: []types.Bears{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid bears count",
			genState: &types.GenesisState{
				Params: types.DefaultParams(),
				BearsList: []types.Bears{
					{
						Id: 1,
					},
				},
				BearsCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated addressBears",
			genState: &types.GenesisState{
				Params: types.DefaultParams(),
				AddressBearsList: []types.AddressBears{
					{
						Address: "0",
					},
					{
						Address: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated fields",
			genState: &types.GenesisState{
				Params: types.DefaultParams(),
				FieldsList: []types.Fields{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid fields count",
			genState: &types.GenesisState{
				Params: types.DefaultParams(),
				FieldsList: []types.Fields{
					{
						Id: 1,
					},
				},
				FieldsCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated trees",
			genState: &types.GenesisState{
				Params: types.DefaultParams(),
				TreesList: []types.Trees{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid trees count",
			genState: &types.GenesisState{
				Params: types.DefaultParams(),
				TreesList: []types.Trees{
					{
						Id: 1,
					},
				},
				TreesCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated decorations",
			genState: &types.GenesisState{
				DecorationsList: []types.Decorations{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid decorations count",
			genState: &types.GenesisState{
				DecorationsList: []types.Decorations{
					{
						Id: 1,
					},
				},
				DecorationsCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated apiaries",
			genState: &types.GenesisState{
				ApiariesList: []types.Apiaries{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid apiaries count",
			genState: &types.GenesisState{
				ApiariesList: []types.Apiaries{
					{
						Id: 1,
					},
				},
				ApiariesCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated bees",
			genState: &types.GenesisState{
				BeesList: []types.Bees{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid bees count",
			genState: &types.GenesisState{
				BeesList: []types.Bees{
					{
						Id: 1,
					},
				},
				BeesCount: 0,
			},
			valid: false,
		},
		// this line is used by starport scaffolding # types/genesis/testcase
	} {
		t.Run(tc.desc, func(t *testing.T) {
			err := tc.genState.Validate()
			if tc.valid {
				require.NoError(t, err)
			} else {
				require.Error(t, err)
			}
		})
	}
}
