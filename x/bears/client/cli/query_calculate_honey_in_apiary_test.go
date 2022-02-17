package cli_test

import (
	"fmt"
	"testing"

	clitestutil "github.com/cosmos/cosmos-sdk/testutil/cli"
	"github.com/stretchr/testify/require"
	tmcli "github.com/tendermint/tendermint/libs/cli"
	"google.golang.org/grpc/status"
	sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/MonetaToday/HoneyWood/testutil/network"
	"github.com/MonetaToday/HoneyWood/testutil/sample"
	"github.com/MonetaToday/HoneyWood/x/bears/client/cli"
	"github.com/MonetaToday/HoneyWood/x/bears/types"
)

func networkWithBeesInApiaryObjects(t *testing.T) (*network.Network) {
	t.Helper()
	cfg := network.DefaultConfig()
	state := types.GenesisState{}
	require.NoError(t, cfg.Codec.UnmarshalJSON(cfg.GenesisState[types.ModuleName], &state))

	bears := []types.Bears{
		{
			Id:          0,
			Owner:       sample.AccAddress(),
			Name:        "Name",
			Fields:      []uint64{0},
			Apiaries:    []uint64{0},
			Bees:        []uint64{0,1,2},
			Trees:       []uint64{},
			Decorations: []uint64{},
		},
	}

	airDependency, _ := sdk.NewDecFromStr("1.000000000000000000")
	honeyPerHour, _ := sdk.NewDecFromStr("100.000000000000000000")
	bees := []types.Bees{
		{
			ApiaryHouse: &types.ApiaryHouse{
				Id: 0,
			},
			BearOwner: &types.BearOwner{
				Id: 0,
			},
			Id: 0,
			Name: "BEE",
			Params: &types.BeeParams{
				AirDependency: airDependency,
				BeeType: "BEE",
				BodySize: 1,
				HoneyPerHour: honeyPerHour,
				Price: []sdk.Coin{sdk.NewInt64Coin("honey", 1200)},
			},
		},
		{
			ApiaryHouse: &types.ApiaryHouse{
				Id: 0,
			},
			BearOwner: &types.BearOwner{
				Id: 0,
			},
			Id: 1,
			Name: "BEE",
			Params: &types.BeeParams{
				AirDependency: airDependency,
				BeeType: "BEE",
				BodySize: 1,
				HoneyPerHour: honeyPerHour,
				Price: []sdk.Coin{sdk.NewInt64Coin("honey", 1200)},
			},
		},
		{
			ApiaryHouse: &types.ApiaryHouse{
				Id: 0,
			},
			BearOwner: &types.BearOwner{
				Id: 0,
			},
			Id: 2,
			Name: "BEE",
			Params: &types.BeeParams{
				AirDependency: airDependency,
				BeeType: "BEE",
				BodySize: 1,
				HoneyPerHour: honeyPerHour,
				Price: []sdk.Coin{sdk.NewInt64Coin("honey", 1200)},
			},
		},
	}

	honeyFromPast, _ := sdk.NewDecFromStr("0.000000000000000000")
	maxHoney, _ := sdk.NewDecFromStr("15.000000000000000000")
	apiaries := []types.Apiaries{
		{
			BearOwner: &types.BearOwner{
				Id: 0,
			},
			CycleHistory: []types.CycleHistory{
				{
					Bees: []uint64{0},
					Height: 0,
				},
				{
					Bees: []uint64{0,1},
					Height: 5,
				},
				{
					Bees: []uint64{0},
					Height: 9,
				},
			},
			HoneyFromPast: honeyFromPast,
			Id: 0,
			Params: &types.ApiaryParams{
				ApiaryType: "APIARY",
				MaxHoney: maxHoney,
				Price: []sdk.Coin{sdk.NewInt64Coin("honey", 900)},
				SpaceAvailable: 8,
			},
			Position: types.ItemPosition{
				ColumnId: 0,
				FieldId: 0,
				RowId: 0,
			},
			SpaceOccupied: 3,
		},
	}

	count1, _ := sdk.NewDecFromStr("1.000000000000000000")
	quality1, _ := sdk.NewDecFromStr("1.000000000000000000")
	count2, _ := sdk.NewDecFromStr("0.500000000000000000")
	quality2, _ := sdk.NewDecFromStr("1.000000000000000000")

	airInfo := types.AirInfo{
		History: []types.AirHistory{
			{
				Count: count1,
				Quality: quality1,
				Height: 0,
			},
			{
				Count: count2,
				Quality: quality2,
				Height: 5,
			},
		},
	}

	params := types.Params{
		BlocksPerHour: 3600,
		HoneyDenom: "honey",
		PriceSetName: sdk.Coins{sdk.NewInt64Coin("honey", 900)},
		PriceTile: sdk.Coins{sdk.NewInt64Coin("honey", 900)},
	}
	
	
	// nullify.Fill(&airInfo)
	state.BearsList = bears
	state.BeesList = bees
	state.ApiariesList = apiaries
	state.AirInfo = airInfo
	state.Params = params
	
	buf, err := cfg.Codec.MarshalJSON(&state)
	require.NoError(t, err)
	cfg.GenesisState[types.ModuleName] = buf
	return network.New(t, cfg)
}

func TestCalculateHoneyInApiary(t *testing.T) {
	net := networkWithBeesInApiaryObjects(t)
	net.WaitForHeight(10)

	latestHeight, _ := net.LatestHeight()
	fmt.Println(latestHeight)

	ctx := net.Validators[0].ClientCtx
	common := []string{
		"0",
		fmt.Sprintf("--%s=json", tmcli.OutputFlag),
	}
	for _, tc := range []struct {
		desc string
		args []string
		err  error
	}{
		{
			desc: "get",
			args: common,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			var args []string
			args = append(args, tc.args...)
			out, err := clitestutil.ExecTestCLICmd(ctx, cli.CmdCalculateHoneyInApiary(), args)
			if tc.err != nil {
				stat, ok := status.FromError(tc.err)
				require.True(t, ok)
				require.ErrorIs(t, stat.Err(), tc.err)
			} else {
				require.NoError(t, err)
				var resp types.QueryCalculateHoneyInApiaryResponse
				require.NoError(t, net.Config.Codec.UnmarshalJSON(out.Bytes(), &resp))
				
				require.NotNil(t, resp.CountHoney)

				fmt.Println(resp)
			}
		})
	}
}
