package keeper

import (
	"context"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) InitGameAndCreateBee(goCtx context.Context, msg *types.MsgInitGameAndCreateBee) (*types.MsgInitGameAndCreateBeeResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	newBear, _, initGameErr := k.Keeper.InitGame(ctx, msg.Creator)
	if initGameErr != nil {
		return nil, initGameErr
	}

	bee, createBeeErr := k.Keeper.CreateBee(ctx, msg.Creator, newBear.Id, msg.BeeType)
	if createBeeErr != nil {
		return nil, createBeeErr
	}

	return &types.MsgInitGameAndCreateBeeResponse{
		Bee: bee,
	}, nil
}
