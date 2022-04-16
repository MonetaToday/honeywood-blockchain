package keeper

import (
	"context"
	"strconv"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) InitGameAndExtendField(goCtx context.Context, msg *types.MsgInitGameAndExtendField) (*types.MsgInitGameAndExtendFieldResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	newBear, newField, initGameErr := k.Keeper.InitGame(ctx, msg.Receiver)
	if initGameErr != nil {
		return nil, initGameErr
	}

	countTiles, _, extendFieldErr := k.Keeper.ExtendField(ctx, msg.Creator, msg.Receiver, newField.Id)
	if extendFieldErr != nil {
		return nil, extendFieldErr
	}

	ctx.EventManager().EmitEvents(sdk.Events{
		sdk.NewEvent(
			sdk.EventTypeMessage,
			sdk.NewAttribute(types.AttributeKeyCreator, msg.Creator),
			sdk.NewAttribute(types.AttributeKeyReceiver, msg.Receiver),
			sdk.NewAttribute(types.AttributeKeyBearId, strconv.FormatUint(newBear.Id, 10)),
			sdk.NewAttribute(types.AttributeKeyFieldId, strconv.FormatUint(newField.Id, 10)),
			sdk.NewAttribute(types.AttributeKeyCountTiles, strconv.FormatUint(*countTiles, 10)),
		),
	})

	return &types.MsgInitGameAndExtendFieldResponse{
		CountTiles: *countTiles,
	}, nil
}
