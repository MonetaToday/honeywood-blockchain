package keeper

import (
	"context"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) CreateBee(goCtx context.Context, msg *types.MsgCreateBee) (*types.MsgCreateBeeResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	bee, createBeeErr := k.Keeper.CreateBee(ctx, msg.Creator, msg.BearId, msg.BeeType, msg.BeeName)
	if createBeeErr != nil {
		return nil, createBeeErr
	}

	return &types.MsgCreateBeeResponse{
		Bee: bee,
	}, nil
}
