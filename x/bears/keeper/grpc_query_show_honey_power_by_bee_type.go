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

	blocksPerHour := k.BlocksPerHour(ctx)
	airInfo, _ := k.GetAirInfo(ctx)

	lastAirHistoryIndex := len(airInfo.History) - 1

	lastLoadedBees := []types.Bees{
		types.Bees{
			Params: beeParams,
		},
	}

	return &types.QueryShowHoneyPowerByBeeTypeResponse{
		HoneyPower: k.CalculateBeesHoneyPower(
			ctx,
			blocksPerHour,
			lastLoadedBees,
			airInfo.History[lastAirHistoryIndex].Purity,
			airInfo.History[lastAirHistoryIndex].Count,
		),
	}, nil
}
