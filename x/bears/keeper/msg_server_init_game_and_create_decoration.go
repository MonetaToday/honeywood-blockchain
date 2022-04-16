package keeper

import (
	"context"
	"strconv"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) InitGameAndCreateDecoration(goCtx context.Context, msg *types.MsgInitGameAndCreateDecoration) (*types.MsgInitGameAndCreateDecorationResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	newBear, _, initGameErr := k.Keeper.InitGame(ctx, msg.Receiver)
	if initGameErr != nil {
		return nil, initGameErr
	}

	decoration, createDecorationErr := k.Keeper.CreateDecoration(ctx, msg.Creator, msg.Receiver, newBear.Id, msg.DecorationType)
	if createDecorationErr != nil {
		return nil, createDecorationErr
	}

	ctx.EventManager().EmitEvents(sdk.Events{
		sdk.NewEvent(
			sdk.EventTypeMessage,
			sdk.NewAttribute(types.AttributeKeyCreator, msg.Creator),
			sdk.NewAttribute(types.AttributeKeyReceiver, msg.Receiver),
			sdk.NewAttribute(types.AttributeKeyBearId, strconv.FormatUint(newBear.Id, 10)),
			sdk.NewAttribute(types.AttributeKeyDecorationId, strconv.FormatUint(decoration.Id, 10)),
			sdk.NewAttribute(types.AttributeKeyDecorationType, msg.DecorationType),
		),
	})

	return &types.MsgInitGameAndCreateDecorationResponse{
		Decoration: decoration,
	}, nil
}
