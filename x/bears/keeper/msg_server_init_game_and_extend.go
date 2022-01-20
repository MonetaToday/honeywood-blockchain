package keeper

import (
	"context"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) InitGameAndExtendPlace(goCtx context.Context, msg *types.MsgInitGameAndExtendPlace) (*types.MsgInitGameAndExtendPlaceResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	_, newPlace, initGameErr := k.Keeper.InitGame(ctx, msg.Creator)
	if initGameErr != nil {
		return nil, initGameErr
	}

	countGrounds, extendPlaceErr := k.Keeper.ExtendPlace(ctx, msg.Creator, newPlace.Id)
	if extendPlaceErr != nil {
		return nil, extendPlaceErr
	}

	return &types.MsgInitGameAndExtendPlaceResponse{
		CountGrounds: *countGrounds,
	}, nil
}
