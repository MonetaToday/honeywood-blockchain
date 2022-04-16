package keeper

import (
	"context"
	"strconv"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) UnsetApiaryHouseForBee(goCtx context.Context, msg *types.MsgUnsetApiaryHouseForBee) (*types.MsgUnsetApiaryHouseForBeeResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	bee, err := k.Keeper.UnsetBeeInApiaryHouse(ctx, msg.Creator, msg.BeeId)
	if err != nil {
		return nil, err
	}

	ctx.EventManager().EmitEvents(sdk.Events{
		sdk.NewEvent(
			sdk.EventTypeMessage,
			sdk.NewAttribute(types.AttributeKeyCreator, msg.Creator),
			sdk.NewAttribute(types.AttributeKeyBeeId, strconv.FormatUint(bee.Id, 10)),
			sdk.NewAttribute(types.AttributeKeyBeeType, bee.Params.BeeType),
		),
	})
	if bee.BearOwner != nil {
		ctx.EventManager().EmitEvents(sdk.Events{
			sdk.NewEvent(
				sdk.EventTypeMessage,
				sdk.NewAttribute(types.AttributeKeyBearId, strconv.FormatUint(bee.BearOwner.Id, 10)),
			),
		})
	}

	return &types.MsgUnsetApiaryHouseForBeeResponse{}, nil
}
