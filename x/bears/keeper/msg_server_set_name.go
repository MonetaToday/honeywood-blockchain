package keeper

import (
	"context"
	"strconv"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) SetName(goCtx context.Context, msg *types.MsgSetName) (*types.MsgSetNameResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	buyErr := k.Keeper.BuyBearName(ctx, msg.Creator, msg.BearId, msg.Name)
	if buyErr != nil {
		return nil, buyErr
	}

	ctx.EventManager().EmitEvents(sdk.Events{
		sdk.NewEvent(
			sdk.EventTypeMessage,
			sdk.NewAttribute(types.AttributeKeyCreator, msg.Creator),
			sdk.NewAttribute(types.AttributeKeyBearName, msg.Name),
			sdk.NewAttribute(types.AttributeKeyBearId, strconv.FormatUint(msg.BearId, 10)),
		),
	})

	return &types.MsgSetNameResponse{}, nil
}
