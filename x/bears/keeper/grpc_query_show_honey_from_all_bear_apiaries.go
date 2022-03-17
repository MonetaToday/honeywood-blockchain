package keeper

import (
	"context"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) ShowHoneyFromAllBearApiaries(goCtx context.Context, req *types.QueryShowHoneyFromAllBearApiariesRequest) (*types.QueryShowHoneyFromAllBearApiariesResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	bear, bearFound := k.GetBears(ctx, req.BearId)
  if !bearFound {
    return nil, types.ErrBearIsNotExisted
  }

  honeyInApiaries := []types.QueryShowHoneyFromAllBearApiariesResponse_HoneyInApiary{}

  for _, apiaryId := range bear.Apiaries {
    apiary, apiaryFound := k.GetApiaries(ctx, apiaryId)
    if !apiaryFound {
      return nil, types.ErrApiaryIsNotExisted
    }

    honeyInApiaries = append(honeyInApiaries, types.QueryShowHoneyFromAllBearApiariesResponse_HoneyInApiary{
      ApiaryId: apiaryId,
      CountHoney: k._CalculateHoneyInApiary(ctx, apiary),
    })
  }

	return &types.QueryShowHoneyFromAllBearApiariesResponse{
		HoneyInApiaries: honeyInApiaries,
	}, nil
}
