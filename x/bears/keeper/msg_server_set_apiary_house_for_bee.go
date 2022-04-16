package keeper

import (
	"context"
	"strconv"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) SetApiaryHouseForBee(goCtx context.Context, msg *types.MsgSetApiaryHouseForBee) (*types.MsgSetApiaryHouseForBeeResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	bee, apiary, err := k.Keeper.SetBeeInApiaryHouse(ctx, msg.Creator, msg.BeeId, msg.ApiaryId)
	if err != nil {
		return nil, err
	}

	ctx.EventManager().EmitEvents(sdk.Events{
		sdk.NewEvent(
			sdk.EventTypeMessage,
			sdk.NewAttribute(types.AttributeKeyCreator, msg.Creator),
			sdk.NewAttribute(types.AttributeKeyBeeId, strconv.FormatUint(bee.Id, 10)),
			sdk.NewAttribute(types.AttributeKeyBeeType, bee.Params.BeeType),
			sdk.NewAttribute(types.AttributeKeyApiaryId, strconv.FormatUint(apiary.Id, 10)),
			sdk.NewAttribute(types.AttributeKeyApiaryType, apiary.Params.ApiaryType),
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

	return &types.MsgSetApiaryHouseForBeeResponse{}, nil
}
