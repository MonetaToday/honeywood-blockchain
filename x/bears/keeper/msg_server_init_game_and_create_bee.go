package keeper

import (
	"context"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) InitGameAndCreateBee(goCtx context.Context, msg *types.MsgInitGameAndCreateBee) (*types.MsgInitGameAndCreateBeeResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	newBear, _, initGameErr := k.Keeper.InitGame(ctx, msg.Receiver)
	if initGameErr != nil {
		return nil, initGameErr
	}

	bee, createBeeErr := k.Keeper.CreateBee(ctx, msg.Creator, msg.Receiver, newBear.Id, msg.BeeType, msg.BeeName)
	if createBeeErr != nil {
		return nil, createBeeErr
	}

	return &types.MsgInitGameAndCreateBeeResponse{
		Bee: bee,
	}, nil
}
