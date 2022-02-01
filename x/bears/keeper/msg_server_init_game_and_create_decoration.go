package keeper

import (
	"context"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) InitGameAndCreateDecoration(goCtx context.Context, msg *types.MsgInitGameAndCreateDecoration) (*types.MsgInitGameAndCreateDecorationResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgInitGameAndCreateDecorationResponse{}, nil
}
