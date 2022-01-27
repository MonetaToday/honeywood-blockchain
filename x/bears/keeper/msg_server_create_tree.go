package keeper

import (
	"context"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) CreateTree(goCtx context.Context, msg *types.MsgCreateTree) (*types.MsgCreateTreeResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	tree, createTreeErr := k.Keeper.createTreeOnPlace(ctx, msg.Creator, msg.BearId, msg.PlaceId, msg.GroundId)
	if createTreeErr != nil {
		return nil, createTreeErr
	}

	return &types.MsgCreateTreeResponse{
		Tree: tree,
	}, nil
}
