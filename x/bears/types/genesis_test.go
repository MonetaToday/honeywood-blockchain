package types_test

import (
	"testing"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	"github.com/stretchr/testify/require"
)

func TestGenesisState_Validate(t *testing.T) {
	for _, tc := range []struct {
		desc     string
		genState *types.GenesisState
		valid    bool
	}{
		{
			desc:     "default is valid",
			genState: types.DefaultGenesis(),
			valid:    false,
		},
		{
			desc: "valid genesis state",
			genState: &types.GenesisState{

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
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated bearNames",
			genState: &types.GenesisState{
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
			desc: "duplicated bears",
			genState: &types.GenesisState{
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
