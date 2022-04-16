package keeper

import (
	"context"
	"strconv"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) ClearApiaryFromBees(goCtx context.Context, msg *types.MsgClearApiaryFromBees) (*types.MsgClearApiaryFromBeesResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	apiary, apiaryFound := k.Keeper.GetApiaries(ctx, msg.ApiaryId)
	if !apiaryFound {
		return nil, types.ErrApiaryIsNotExisted
	}

	if !k.Keeper.HasRightsToApiary(ctx, msg.Creator, apiary) {
		return nil, types.ErrAddressHasNoRight
	}

	bees, errClearFromBees := k.Keeper.ClearApiaryFromBees(ctx, msg.Creator, apiary)
	if errClearFromBees != nil {
		return nil, errClearFromBees
	}

	for _, beeId := range bees {
		ctx.EventManager().EmitEvents(sdk.Events{
			sdk.NewEvent(
				sdk.EventTypeMessage,
				sdk.NewAttribute(types.AttributeKeyBeeId, strconv.FormatUint(beeId, 10)),
			),
		})
	}

	ctx.EventManager().EmitEvents(sdk.Events{
		sdk.NewEvent(
			sdk.EventTypeMessage,
			sdk.NewAttribute(types.AttributeKeyCreator, msg.Creator),
			sdk.NewAttribute(types.AttributeKeyApiaryId, strconv.FormatUint(apiary.Id, 10)),
			sdk.NewAttribute(types.AttributeKeyApiaryType, apiary.Params.ApiaryType),
		),
	})
	if apiary.BearOwner != nil {
		ctx.EventManager().EmitEvents(sdk.Events{
			sdk.NewEvent(
				sdk.EventTypeMessage,
				sdk.NewAttribute(types.AttributeKeyBearId, strconv.FormatUint(apiary.BearOwner.Id, 10)),
			),
		})
	}

	return &types.MsgClearApiaryFromBeesResponse{}, nil
}
