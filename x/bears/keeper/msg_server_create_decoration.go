package keeper

import (
	"context"
	"strconv"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) CreateDecoration(goCtx context.Context, msg *types.MsgCreateDecoration) (*types.MsgCreateDecorationResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	decoration, createDecorationErr := k.Keeper.CreateDecoration(ctx, msg.Creator, msg.Receiver, msg.BearId, msg.DecorationType)
	if createDecorationErr != nil {
		return nil, createDecorationErr
	}

	ctx.EventManager().EmitEvents(sdk.Events{
		sdk.NewEvent(
			sdk.EventTypeMessage,
			sdk.NewAttribute(types.AttributeKeyCreator, msg.Creator),
			sdk.NewAttribute(types.AttributeKeyReceiver, msg.Receiver),
			sdk.NewAttribute(types.AttributeKeyBearId, strconv.FormatUint(msg.BearId, 10)),
			sdk.NewAttribute(types.AttributeKeyDecorationId, strconv.FormatUint(decoration.Id, 10)),
			sdk.NewAttribute(types.AttributeKeyDecorationType, msg.DecorationType),
		),
	})

	return &types.MsgCreateDecorationResponse{
		Decoration: decoration,
	}, nil
}
