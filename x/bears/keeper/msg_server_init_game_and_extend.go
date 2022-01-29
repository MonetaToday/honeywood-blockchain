package keeper

import (
	"context"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) InitGameAndExtendField(goCtx context.Context, msg *types.MsgInitGameAndExtendField) (*types.MsgInitGameAndExtendFieldResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	_, newField, initGameErr := k.Keeper.InitGame(ctx, msg.Creator)
	if initGameErr != nil {
		return nil, initGameErr
	}

	countTiles, extendFieldErr := k.Keeper.ExtendField(ctx, msg.Creator, newField.Id)
	if extendFieldErr != nil {
		return nil, extendFieldErr
	}

	return &types.MsgInitGameAndExtendFieldResponse{
		CountTiles: *countTiles,
	}, nil
}
