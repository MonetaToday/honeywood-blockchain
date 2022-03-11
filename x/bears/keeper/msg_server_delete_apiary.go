package keeper

import (
	"context"

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

	return &types.MsgDeleteApiaryResponse{}, nil
}
