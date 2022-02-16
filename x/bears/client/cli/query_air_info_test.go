package cli_test

import (
	"fmt"
	"testing"

	clitestutil "github.com/cosmos/cosmos-sdk/testutil/cli"
	"github.com/stretchr/testify/require"
	tmcli "github.com/tendermint/tendermint/libs/cli"
	"google.golang.org/grpc/status"

	"github.com/MonetaToday/HoneyWood/testutil/network"
	"github.com/MonetaToday/HoneyWood/testutil/nullify"
	"github.com/MonetaToday/HoneyWood/x/bears/client/cli"
	"github.com/MonetaToday/HoneyWood/x/bears/types"
)

func networkWithAirInfoObjects(t *testing.T) (*network.Network, types.AirInfo) {
	t.Helper()
	cfg := network.DefaultConfig()
	state := types.GenesisState{}
	require.NoError(t, cfg.Codec.UnmarshalJSON(cfg.GenesisState[types.ModuleName], &state))

	airInfo := &types.AirInfo{}
	nullify.Fill(&airInfo)
	state.AirInfo = airInfo
	buf, err := cfg.Codec.MarshalJSON(&state)
	require.NoError(t, err)
	cfg.GenesisState[types.ModuleName] = buf
	return network.New(t, cfg), *state.AirInfo
}

func TestShowAirInfo(t *testing.T) {
	net, obj := networkWithAirInfoObjects(t)

	ctx := net.Validators[0].ClientCtx
	common := []string{
		fmt.Sprintf("--%s=json", tmcli.OutputFlag),
	}
	for _, tc := range []struct {
		desc string
		args []string
		err  error
		obj  types.AirInfo
	}{
		{
			desc: "get",
			args: common,
			obj:  obj,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			var args []string
			args = append(args, tc.args...)
			out, err := clitestutil.ExecTestCLICmd(ctx, cli.CmdShowAirInfo(), args)
			if tc.err != nil {
				stat, ok := status.FromError(tc.err)
				require.True(t, ok)
				require.ErrorIs(t, stat.Err(), tc.err)
			} else {
				require.NoError(t, err)
				var resp types.QueryGetAirInfoResponse
				require.NoError(t, net.Config.Codec.UnmarshalJSON(out.Bytes(), &resp))
				require.NotNil(t, resp.AirInfo)
				require.Equal(t,
					nullify.Fill(&tc.obj),
					nullify.Fill(&resp.AirInfo),
				)
			}
		})
	}
}
