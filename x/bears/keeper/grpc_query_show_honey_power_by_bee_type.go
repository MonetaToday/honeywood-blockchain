package keeper

import (
	"context"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) ShowHoneyPowerByBeeType(goCtx context.Context, req *types.QueryShowHoneyPowerByBeeTypeRequest) (*types.QueryShowHoneyPowerByBeeTypeResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	beeParams, _ := k.GetBeeParams(ctx, req.BeeType)
	if beeParams == nil {
		return nil, types.ErrBeeTypeIsNotDefined
	}

	lastAirHistoryIndex := k.GetAirHistoryLastIndex(ctx) - 1
	lastAirHistory, _ := k.GetAirHistory(ctx, lastAirHistoryIndex)

	lastLoadedBees := []types.Bees{
		types.Bees{
			Params:          beeParams,
			FieldFertility:  sdk.OneDec(),
			ApiaryFertility: sdk.OneDec(),
		},
	}

	return &types.QueryShowHoneyPowerByBeeTypeResponse{
		HoneyPower: k.CalculateBeesHoneyPower(
			ctx,
			lastLoadedBees,
			lastAirHistory.Purity,
			lastAirHistory.Count,
		),
	}, nil
}
