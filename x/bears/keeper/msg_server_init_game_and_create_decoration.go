package keeper

import (
	"context"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) InitGameAndCreateDecoration(goCtx context.Context, msg *types.MsgInitGameAndCreateDecoration) (*types.MsgInitGameAndCreateDecorationResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	newBear, _, initGameErr := k.Keeper.InitGame(ctx, msg.Creator)
	if initGameErr != nil {
		return nil, initGameErr
	}

	decoration, createDecorationErr := k.Keeper.CreateDecoration(ctx, msg.Creator, newBear.Id, msg.DecorationType)
	if createDecorationErr != nil {
		return nil, createDecorationErr
	}

	return &types.MsgInitGameAndCreateDecorationResponse{
		Decoration: decoration,
	}, nil
}
