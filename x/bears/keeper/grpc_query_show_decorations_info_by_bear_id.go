package keeper

import (
	"context"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) ShowDecorationsInfoByBearId(goCtx context.Context, req *types.QueryShowDecorationsInfoByBearIdRequest) (*types.QueryShowDecorationsInfoByBearIdResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	bear, bearFound := k.GetBears(ctx, req.BearId)
	if !bearFound {
		return nil, types.ErrBearIsNotExisted
	}

	decorationsInfo := []types.QueryShowDecorationsInfoByBearIdResponse_DecorationInfo{}

	for _, decorationId := range bear.Decorations {
		decoration, decorationFound := k.GetDecorations(ctx, decorationId)
		if !decorationFound {
			return nil, types.ErrDecorationIsNotExisted
		}

		decorationsInfo = append(decorationsInfo, types.QueryShowDecorationsInfoByBearIdResponse_DecorationInfo{
			Id:     decorationId,
			Params: decoration.Params,
		})
	}

	return &types.QueryShowDecorationsInfoByBearIdResponse{
		DecorationsInfo: decorationsInfo,
	}, nil
}
