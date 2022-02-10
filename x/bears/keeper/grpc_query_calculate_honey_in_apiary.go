package keeper

import (
	"context"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) CalculateHoneyInApiary(goCtx context.Context, req *types.QueryCalculateHoneyInApiaryRequest) (*types.QueryCalculateHoneyInApiaryResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	apiary, apiaryFound := k.GetApiaries(ctx, req.ApiaryId)
	if !apiaryFound {
		return nil, types.ErrApiaryIsNotExisted
	}

	return &types.QueryCalculateHoneyInApiaryResponse{
		CountHoney: k._CalculateHoneyInApiary(ctx, apiary),
	}, nil
}
