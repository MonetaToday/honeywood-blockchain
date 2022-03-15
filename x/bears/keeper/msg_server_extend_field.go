package keeper

import (
	"context"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) ExtendField(goCtx context.Context, msg *types.MsgExtendField) (*types.MsgExtendFieldResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	countTiles, extendFieldErr := k.Keeper.ExtendField(ctx, msg.Creator, msg.Receiver, msg.Id)
	if extendFieldErr != nil {
		return nil, extendFieldErr
	}

	return &types.MsgExtendFieldResponse{
		CountTiles: *countTiles,
	}, nil
}
