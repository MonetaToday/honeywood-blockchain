package keeper

import (
	"context"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) ShowHoneyPowerByBearId(goCtx context.Context, req *types.QueryShowHoneyPowerByBearIdRequest) (*types.QueryShowHoneyPowerByBearIdResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	bear, bearFound := k.GetBears(ctx, req.BearId)
	if !bearFound {
		return nil, types.ErrBearIsNotExisted
	}

	airInfo, _ := k.GetAirInfo(ctx)
	lastAirHistoryIndex := len(airInfo.History) - 1

	lastLoadedBees := []types.Bees{}
	for _, beeId := range bear.Bees {
		bee, _ := k.GetBees(ctx, beeId)
		lastLoadedBees = append(lastLoadedBees, bee)
	}

	return &types.QueryShowHoneyPowerByBearIdResponse{
		HoneyPower: k.CalculateBeesHoneyPower(
			ctx,
			lastLoadedBees,
			airInfo.History[lastAirHistoryIndex].Purity,
			airInfo.History[lastAirHistoryIndex].Count,
		),
	}, nil
}
