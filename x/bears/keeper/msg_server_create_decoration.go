package keeper

import (
	"context"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) CreateDecoration(goCtx context.Context, msg *types.MsgCreateDecoration) (*types.MsgCreateDecorationResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	decoration, createDecorationErr := k.Keeper.CreateDecoration(ctx, msg.Creator, msg.BearId, msg.DecorationType)
	if createDecorationErr != nil {
		return nil, createDecorationErr
	}

	return &types.MsgCreateDecorationResponse{
		Decoration: decoration,
	}, nil
}
