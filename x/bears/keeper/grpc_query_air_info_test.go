package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "github.com/MonetaToday/HoneyWood/testutil/keeper"
	"github.com/MonetaToday/HoneyWood/testutil/nullify"
	"github.com/MonetaToday/HoneyWood/x/bears/types"
)

func TestAirInfoQuery(t *testing.T) {
	keeper, ctx := keepertest.BearsKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	item := createTestAirInfo(keeper, ctx)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetAirInfoRequest
		response *types.QueryGetAirInfoResponse
		err      error
	}{
		{
			desc:     "First",
			request:  &types.QueryGetAirInfoRequest{},
			response: &types.QueryGetAirInfoResponse{AirInfo: item},
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.AirInfo(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				require.Equal(t,
					nullify.Fill(tc.response),
					nullify.Fill(response),
				)
			}
		})
	}
}
