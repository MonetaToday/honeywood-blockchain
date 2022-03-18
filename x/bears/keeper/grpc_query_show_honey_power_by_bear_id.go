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

	lastAirHistoryIndex := k.GetAirHistoryLastIndex(ctx) - 1
	lastAirHistory, _ := k.GetAirHistory(ctx, lastAirHistoryIndex)

	lastLoadedBees := []types.Bees{}
	for _, beeId := range bear.Bees {
		bee, _ := k.GetBees(ctx, beeId)

		if bee.ApiaryHouse != nil {
			lastLoadedBees = append(lastLoadedBees, bee)
		}
	}

	return &types.QueryShowHoneyPowerByBearIdResponse{
		HoneyPower: k.CalculateBeesHoneyPower(
			ctx,
			lastLoadedBees,
			lastAirHistory.Purity,
			lastAirHistory.Count,
		),
	}, nil
}
