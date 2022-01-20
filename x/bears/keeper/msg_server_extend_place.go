package keeper

import (
	"context"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) ExtendPlace(goCtx context.Context, msg *types.MsgExtendPlace) (*types.MsgExtendPlaceResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	countGrounds, extendPlaceErr := k.Keeper.ExtendPlace(ctx, msg.Creator, msg.Id)
	if extendPlaceErr != nil {
		return nil, extendPlaceErr
	}

	return &types.MsgExtendPlaceResponse{
		CountGrounds: *countGrounds,
	}, nil
}
