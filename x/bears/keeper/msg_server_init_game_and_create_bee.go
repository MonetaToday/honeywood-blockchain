package keeper

import (
	"context"
	"strconv"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) InitGameAndCreateBee(goCtx context.Context, msg *types.MsgInitGameAndCreateBee) (*types.MsgInitGameAndCreateBeeResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	newBear, newField, initGameErr := k.Keeper.InitGame(ctx, msg.Receiver)
	if initGameErr != nil {
		return nil, initGameErr
	}

	bee, createBeeErr := k.Keeper.CreateBee(ctx, msg.Creator, msg.Receiver, newBear.Id, msg.BeeType, msg.BeeName)
	if createBeeErr != nil {
		return nil, createBeeErr
	}

	ctx.EventManager().EmitEvents(sdk.Events{
		sdk.NewEvent(
			sdk.EventTypeMessage,
			sdk.NewAttribute(types.AttributeKeyCreator, msg.Creator),
			sdk.NewAttribute(types.AttributeKeyReceiver, msg.Receiver),
			sdk.NewAttribute(types.AttributeKeyBearId, strconv.FormatUint(newBear.Id, 10)),
			sdk.NewAttribute(types.AttributeKeyFieldId, strconv.FormatUint(newField.Id, 10)),
			sdk.NewAttribute(types.AttributeKeyBeeId, strconv.FormatUint(bee.Id, 10)),
			sdk.NewAttribute(types.AttributeKeyBeeType, msg.BeeType),
			sdk.NewAttribute(types.AttributeKeyBeeName, msg.BeeName),
		),
	})

	return &types.MsgInitGameAndCreateBeeResponse{
		Bee: bee,
	}, nil
}
