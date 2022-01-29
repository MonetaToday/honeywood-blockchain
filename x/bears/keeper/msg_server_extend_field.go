package keeper

import (
	"context"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) ExtendField(goCtx context.Context, msg *types.MsgExtendField) (*types.MsgExtendFieldResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	countGrounds, extendFieldErr := k.Keeper.ExtendField(ctx, msg.Creator, msg.Id)
	if extendFieldErr != nil {
		return nil, extendFieldErr
	}

	return &types.MsgExtendFieldResponse{
		CountGrounds: *countGrounds,
	}, nil
}
