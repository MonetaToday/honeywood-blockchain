package keeper

import (
	"context"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) InitGameAndExtend(goCtx context.Context, msg *types.MsgInitGameAndExtend) (*types.MsgInitGameAndExtendResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	_, newPlace, initGameErr := k.Keeper.InitGame(ctx, msg.Creator)
	if initGameErr != nil {
		return nil, initGameErr
	}

	k.Keeper.ExtendPlace(ctx, msg.Creator, newPlace.Id)

	return &types.MsgInitGameAndExtendResponse{
		CountGrounds: newPlace.CountGrounds,
	}, nil
}
