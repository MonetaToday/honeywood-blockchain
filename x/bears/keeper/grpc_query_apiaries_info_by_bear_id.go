package keeper

import (
	"context"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) ShowApiariesInfoByBearId(goCtx context.Context, req *types.QueryShowApiariesInfoByBearIdRequest) (*types.QueryShowApiariesInfoByBearIdResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	bear, bearFound := k.GetBears(ctx, req.BearId)
	if !bearFound {
		return nil, types.ErrBearIsNotExisted
	}

	apiariesInfo := []types.QueryShowApiariesInfoByBearIdResponse_ApiaryInfo{}

	for _, apiaryId := range bear.Apiaries {
		apiary, apiaryFound := k.GetApiaries(ctx, apiaryId)
		if !apiaryFound {
			return nil, types.ErrApiaryIsNotExisted
		}

		bees := k.GetAllCurrentBeesFromApiary(ctx, apiary)

		apiariesInfo = append(apiariesInfo, types.QueryShowApiariesInfoByBearIdResponse_ApiaryInfo{
			Id:         apiaryId,
			CountHoney: k._CalculateHoneyInApiary(ctx, apiary),
			Bees:       bees,
			Params:     apiary.Params,
		})
	}

	return &types.QueryShowApiariesInfoByBearIdResponse{
		ApiariesInfo: apiariesInfo,
	}, nil
}
