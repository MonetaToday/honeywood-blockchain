package keeper

import (
	"context"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) ShowHoneyPowerByApiaryId(goCtx context.Context, req *types.QueryShowHoneyPowerByApiaryIdRequest) (*types.QueryShowHoneyPowerByApiaryIdResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	apiary, apiaryFound := k.GetApiaries(ctx, req.ApiaryId)
	if !apiaryFound {
		return nil, types.ErrApiaryIsNotExisted
	}

	lastAirHistoryIndex := k.GetAirHistoryLastIndex(ctx) - 1
	lastAirHistory, _ := k.GetAirHistory(ctx, lastAirHistoryIndex)

	lastApiaryHistoryIndex := len(apiary.CycleHistory) - 1

	lastLoadedBees := []types.Bees{}
	if lastApiaryHistoryIndex >= 0 {
		for _, beeId := range apiary.CycleHistory[lastApiaryHistoryIndex].Bees {
			bee, _ := k.GetBees(ctx, beeId)

			lastLoadedBees = append(lastLoadedBees, bee)
		}
	}

	return &types.QueryShowHoneyPowerByApiaryIdResponse{
		HoneyPower: k.CalculateBeesHoneyPower(
			ctx,
			lastLoadedBees,
			lastAirHistory.Purity,
			lastAirHistory.Count,
		),
	}, nil
}
