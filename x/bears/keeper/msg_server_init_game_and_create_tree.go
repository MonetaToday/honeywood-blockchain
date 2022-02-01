package keeper

import (
	"context"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) InitGameAndCreateTree(goCtx context.Context, msg *types.MsgInitGameAndCreateTree) (*types.MsgInitGameAndCreateTreeResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	newBear, newField, initGameErr := k.Keeper.InitGame(ctx, msg.Creator)
	if initGameErr != nil {
		return nil, initGameErr
	}

	tree, createTreeErr := k.Keeper.CreateTreeOnField(ctx, msg.Creator, newBear.Id, newField.Id, 0, 0, msg.TreeType)
	if createTreeErr != nil {
		return nil, createTreeErr
	}

	return &types.MsgInitGameAndCreateTreeResponse{
		Tree: tree,
	}, nil
}
