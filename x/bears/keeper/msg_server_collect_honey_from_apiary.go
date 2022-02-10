package keeper

import (
	"context"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) CollectHoneyFromApiary(goCtx context.Context, msg *types.MsgCollectHoneyFromApiary) (*types.MsgCollectHoneyFromApiaryResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	apiary, apiaryFound := k.Keeper.GetApiaries(ctx, msg.ApiaryId)
	if !apiaryFound {
		return nil, types.ErrApiaryIsNotExisted
	}

	countHoney, err := k.Keeper._CollectHoneyFromApiary(ctx, msg.Creator, apiary)
	if err != nil {
		return nil, err
	}

	return &types.MsgCollectHoneyFromApiaryResponse{
		CountHoney: countHoney,
	}, nil
}
