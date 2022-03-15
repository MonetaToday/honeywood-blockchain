package keeper

import (
	"context"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) SetName(goCtx context.Context, msg *types.MsgSetName) (*types.MsgSetNameResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	buyErr := k.Keeper.BuyBearName(ctx, msg.Creator, msg.BearId, msg.Name)
	if buyErr != nil {
		return nil, buyErr
	}

	return &types.MsgSetNameResponse{}, nil
}
