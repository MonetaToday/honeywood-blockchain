package keeper

import (
	"context"
	"strconv"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) InitGameAndSetName(goCtx context.Context, msg *types.MsgInitGameAndSetName) (*types.MsgInitGameAndSetNameResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	newBear, newField, initGameErr := k.Keeper.InitGame(ctx, msg.Creator)
	if initGameErr != nil {
		return nil, initGameErr
	}

	buyErr := k.Keeper.BuyBearName(ctx, msg.Creator, newBear.Id, msg.Name)
	if buyErr != nil {
		return nil, buyErr
	}

	ctx.EventManager().EmitEvents(sdk.Events{
		sdk.NewEvent(
			sdk.EventTypeMessage,
			sdk.NewAttribute(types.AttributeKeyCreator, msg.Creator),
			sdk.NewAttribute(types.AttributeKeyBearName, msg.Name),
			sdk.NewAttribute(types.AttributeKeyBearId, strconv.FormatUint(newBear.Id, 10)),
			sdk.NewAttribute(types.AttributeKeyFieldId, strconv.FormatUint(newField.Id, 10)),
		),
	})

	return &types.MsgInitGameAndSetNameResponse{}, nil
}
