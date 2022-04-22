package keeper

import (
	"context"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) ListBearsStatistic(goCtx context.Context, req *types.QueryListBearsStatisticRequest) (*types.QueryListBearsStatisticResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	var bears []types.QueryListBearsStatisticResponse_BearsStatistic
	store := ctx.KVStore(k.storeKey)
	bearsStore := prefix.NewStore(store, types.KeyPrefix(types.BearsKey))

	lastAirHistoryIndex := k.GetAirHistoryLastIndex(ctx) - 1
	lastAirHistory, _ := k.GetAirHistory(ctx, lastAirHistoryIndex)

	pageRes, err := query.Paginate(bearsStore, req.Pagination, func(key []byte, value []byte) error {
		var bear types.Bears
		if err := k.cdc.Unmarshal(value, &bear); err != nil {
			return err
		}

		lastLoadedBees := []types.Bees{}
		for _, beeId := range bear.Bees {
			bee, _ := k.GetBees(ctx, beeId)

			if bee.ApiaryHouse != nil {
				lastLoadedBees = append(lastLoadedBees, bee)
			}
		}

		bearHoneyPower := k.CalculateBeesHoneyPower(
			ctx,
			lastLoadedBees,
			lastAirHistory.Purity,
			lastAirHistory.Count,
		)

		bears = append(bears, types.QueryListBearsStatisticResponse_BearsStatistic{
			Id:         bear.Id,
			Owner:      bear.Owner,
			Name:       bear.Name,
			HoneyPower: bearHoneyPower,
		})
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryListBearsStatisticResponse{
		Bears:      bears,
		Pagination: pageRes,
	}, nil
}
