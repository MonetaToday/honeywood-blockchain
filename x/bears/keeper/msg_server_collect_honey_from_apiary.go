package keeper

import (
	"context"
	"strconv"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) CollectHoneyFromApiary(goCtx context.Context, msg *types.MsgCollectHoneyFromApiary) (*types.MsgCollectHoneyFromApiaryResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	apiary, apiaryFound := k.Keeper.GetApiaries(ctx, msg.ApiaryId)
	if !apiaryFound {
		return nil, types.ErrApiaryIsNotExisted
	}

	if !k.Keeper.HasRightsToApiary(ctx, msg.Creator, apiary) {
		return nil, types.ErrAddressHasNoRight
	}

	countHoney, err := k.Keeper.CollectHoneyFromApiary(ctx, msg.Creator, apiary)
	if err != nil {
		return nil, err
	}

	ctx.EventManager().EmitEvents(sdk.Events{
		sdk.NewEvent(
			sdk.EventTypeMessage,
			sdk.NewAttribute(types.AttributeKeyCreator, msg.Creator),
			sdk.NewAttribute(types.AttributeKeyApiaryId, strconv.FormatUint(apiary.Id, 10)),
			sdk.NewAttribute(types.AttributeKeyApiaryType, apiary.Params.ApiaryType),
			sdk.NewAttribute(types.AttributeKeyCountHoney, countHoney.String()),
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

	return &types.MsgCollectHoneyFromApiaryResponse{
		CountHoney: countHoney,
	}, nil
}
