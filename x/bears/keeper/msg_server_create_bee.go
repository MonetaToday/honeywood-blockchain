package keeper

import (
	"context"
	"strconv"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) CreateBee(goCtx context.Context, msg *types.MsgCreateBee) (*types.MsgCreateBeeResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	bee, createBeeErr := k.Keeper.CreateBee(ctx, msg.Creator, msg.Receiver, msg.BearId, msg.BeeType, msg.BeeName)
	if createBeeErr != nil {
		return nil, createBeeErr
	}

	ctx.EventManager().EmitEvents(sdk.Events{
		sdk.NewEvent(
			sdk.EventTypeMessage,
			sdk.NewAttribute(types.AttributeKeyCreator, msg.Creator),
			sdk.NewAttribute(types.AttributeKeyReceiver, msg.Receiver),
			sdk.NewAttribute(types.AttributeKeyBearId, strconv.FormatUint(msg.BearId, 10)),
			sdk.NewAttribute(types.AttributeKeyBeeId, strconv.FormatUint(bee.Id, 10)),
			sdk.NewAttribute(types.AttributeKeyBeeType, msg.BeeType),
			sdk.NewAttribute(types.AttributeKeyBeeName, msg.BeeName),
		),
	})

	return &types.MsgCreateBeeResponse{
		Bee: bee,
	}, nil
}
