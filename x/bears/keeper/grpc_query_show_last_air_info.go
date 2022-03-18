package keeper

import (
	"context"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) ShowLastAirInfo(goCtx context.Context, req *types.QueryShowLastAirInfoRequest) (*types.QueryShowLastAirInfoResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	airInfo, found := k.GetAirInfo(ctx)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}
	lastAirHistoryIndex := k.GetAirHistoryLastIndex(ctx) - 1
	lastAirHistory, found := k.GetAirHistory(ctx, lastAirHistoryIndex)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryShowLastAirInfoResponse{
		Height:  lastAirHistory.Height,
		Purity:  lastAirHistory.Purity,
		Count:   lastAirHistory.Count,
		Supply:  airInfo.Supply,
		Consume: airInfo.Consume,
	}, nil
}
