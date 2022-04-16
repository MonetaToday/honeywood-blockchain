package keeper

import (
	"context"
	"strconv"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) ExtendField(goCtx context.Context, msg *types.MsgExtendField) (*types.MsgExtendFieldResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	countTiles, field, extendFieldErr := k.Keeper.ExtendField(ctx, msg.Creator, msg.Receiver, msg.Id)
	if extendFieldErr != nil {
		return nil, extendFieldErr
	}

	ctx.EventManager().EmitEvents(sdk.Events{
		sdk.NewEvent(
			sdk.EventTypeMessage,
			sdk.NewAttribute(types.AttributeKeyCreator, msg.Creator),
			sdk.NewAttribute(types.AttributeKeyReceiver, msg.Receiver),
			sdk.NewAttribute(types.AttributeKeyFieldId, strconv.FormatUint(msg.Id, 10)),
			sdk.NewAttribute(types.AttributeKeyCountTiles, strconv.FormatUint(*countTiles, 10)),
		),
	})

	if field.BearOwner != nil {
		ctx.EventManager().EmitEvents(sdk.Events{
			sdk.NewEvent(
				sdk.EventTypeMessage,
				sdk.NewAttribute(types.AttributeKeyBearId, strconv.FormatUint(field.BearOwner.Id, 10)),
			),
		})
	}

	return &types.MsgExtendFieldResponse{
		CountTiles: *countTiles,
	}, nil
}
