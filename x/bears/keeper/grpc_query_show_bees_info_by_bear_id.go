package keeper

import (
	"context"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) ShowBeesInfoByBearId(goCtx context.Context, req *types.QueryShowBeesInfoByBearIdRequest) (*types.QueryShowBeesInfoByBearIdResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	bear, bearFound := k.GetBears(ctx, req.BearId)
	if !bearFound {
		return nil, types.ErrBearIsNotExisted
	}

	beesInfo := []types.QueryShowBeesInfoByBearIdResponse_BeeInfo{}

	for _, beeId := range bear.Bees {
		bee, beeFound := k.GetBees(ctx, beeId)
		if !beeFound {
			return nil, types.ErrBeeIsNotExisted
		}

		beesInfo = append(beesInfo, types.QueryShowBeesInfoByBearIdResponse_BeeInfo{
			Id:     beeId,
			ApiaryHouse: bee.ApiaryHouse,
			Params: bee.Params,
		})
	}

	return &types.QueryShowBeesInfoByBearIdResponse{
		BeesInfo: beesInfo,
	}, nil
}
