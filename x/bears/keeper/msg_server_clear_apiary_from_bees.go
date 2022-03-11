package keeper

import (
	"context"

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

	errClearFromBees := k.Keeper.ClearApiaryFromBees(ctx, msg.Creator, apiary)
	if errClearFromBees != nil {
		return nil, errClearFromBees
	}

	return &types.MsgClearApiaryFromBeesResponse{}, nil
}
