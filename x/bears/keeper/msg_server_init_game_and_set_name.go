package keeper

import (
	"context"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) InitGameAndSetName(goCtx context.Context, msg *types.MsgInitGameAndSetName) (*types.MsgInitGameAndSetNameResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	newBear, _, initGameErr := k.Keeper.InitGame(ctx, msg.Creator)
	if initGameErr != nil {
		return nil, initGameErr
	}

	buyErr := k.Keeper.BuyBearNameForBear(ctx, msg.Creator, newBear.Id, msg.Name)
	if buyErr != nil {
		return nil, buyErr
	}

	return &types.MsgInitGameAndSetNameResponse{}, nil
}
