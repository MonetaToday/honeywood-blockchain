package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "github.com/MonetaToday/HoneyWood/testutil/keeper"
	"github.com/MonetaToday/HoneyWood/testutil/nullify"
	"github.com/MonetaToday/HoneyWood/x/bears/types"
)

func TestApiariesQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.BearsKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNApiaries(keeper, ctx, 2)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetApiariesRequest
		response *types.QueryGetApiariesResponse
		err      error
	}{
		{
			desc:     "First",
			request:  &types.QueryGetApiariesRequest{Id: msgs[0].Id},
			response: &types.QueryGetApiariesResponse{Apiaries: msgs[0]},
		},
		{
			desc:     "Second",
			request:  &types.QueryGetApiariesRequest{Id: msgs[1].Id},
			response: &types.QueryGetApiariesResponse{Apiaries: msgs[1]},
		},
		{
			desc:    "KeyNotFound",
			request: &types.QueryGetApiariesRequest{Id: uint64(len(msgs))},
			err:     sdkerrors.ErrKeyNotFound,
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.Apiaries(wctx, tc.request)
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

func TestApiariesQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.BearsKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNApiaries(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllApiariesRequest {
		return &types.QueryAllApiariesRequest{
			Pagination: &query.PageRequest{
				Key:        next,
				Offset:     offset,
				Limit:      limit,
				CountTotal: total,
			},
		}
	}
	t.Run("ByOffset", func(t *testing.T) {
		step := 2
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.ApiariesAll(wctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Apiaries), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.Apiaries),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.ApiariesAll(wctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Apiaries), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.Apiaries),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.ApiariesAll(wctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(msgs),
			nullify.Fill(resp.Apiaries),
		)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.ApiariesAll(wctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
