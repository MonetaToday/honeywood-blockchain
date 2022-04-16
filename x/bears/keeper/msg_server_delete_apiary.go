package keeper

import (
	"context"
	"strconv"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) DeleteApiary(goCtx context.Context, msg *types.MsgDeleteApiary) (*types.MsgDeleteApiaryResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	apiary, apiaryFound := k.Keeper.GetApiaries(ctx, msg.ApiaryId)
	if !apiaryFound {
		return nil, types.ErrApiaryIsNotExisted
	}

	if !k.Keeper.HasRightsToApiary(ctx, msg.Creator, apiary) {
		return nil, types.ErrAddressHasNoRight
	}

	if len(k.Keeper.GetAllCurrentBeesFromApiary(ctx, apiary)) > 0 {
		return nil, types.ErrApiaryHasBees
	}

	honeyInApiary := k.Keeper._CalculateHoneyInApiary(ctx, apiary)
	if honeyInApiary.GTE(sdk.OneDec()) {
		return nil, types.ErrApiaryHasUncollectedHoney
	}

	k.Keeper.DeleteApiary(ctx, msg.Creator, apiary)

	ctx.EventManager().EmitEvents(sdk.Events{
		sdk.NewEvent(
			sdk.EventTypeMessage,
			sdk.NewAttribute(types.AttributeKeyCreator, msg.Creator),
			sdk.NewAttribute(types.AttributeKeyApiaryId, strconv.FormatUint(apiary.Id, 10)),
			sdk.NewAttribute(types.AttributeKeyApiaryType, apiary.Params.ApiaryType),
			sdk.NewAttribute(types.AttributeKeyCountHoney, honeyInApiary.String()),
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

	return &types.MsgDeleteApiaryResponse{}, nil
}
