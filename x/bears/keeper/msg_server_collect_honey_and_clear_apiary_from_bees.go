package keeper

import (
	"context"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) CollectHoneyAndClearApiaryFromBees(goCtx context.Context, msg *types.MsgCollectHoneyAndClearApiaryFromBees) (*types.MsgCollectHoneyAndClearApiaryFromBeesResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	apiary, apiaryFound := k.Keeper.GetApiaries(ctx, msg.ApiaryId)
	if !apiaryFound {
		return nil, types.ErrApiaryIsNotExisted
	}

	hasRightsApiary := k.Keeper.HasRightsToApiary(ctx, msg.Creator, apiary)
	if !hasRightsApiary {
		return nil, types.ErrAddressHasNoRights
	}

	errClearFromBees := k.Keeper._ClearApiaryFromBees(ctx, msg.Creator, &apiary)
	if errClearFromBees != nil {
		return nil, errClearFromBees
	}

	_, errCollectHoney := k.Keeper._CollectHoneyFromApiary(ctx, msg.Creator, &apiary)
	if errCollectHoney != nil {
		return nil, errCollectHoney
	}

	return &types.MsgCollectHoneyAndClearApiaryFromBeesResponse{}, nil
}
