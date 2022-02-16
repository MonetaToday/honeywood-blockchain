package keeper

import (
	"context"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) AirInfo(c context.Context, req *types.QueryGetAirInfoRequest) (*types.QueryGetAirInfoResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetAirInfo(ctx)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetAirInfoResponse{AirInfo: val}, nil
}
