package keeper

import (
	"context"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) UnsetApiaryHouseForBee(goCtx context.Context, msg *types.MsgUnsetApiaryHouseForBee) (*types.MsgUnsetApiaryHouseForBeeResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	err := k.Keeper.UnsetBeeInApiaryHouse(ctx, msg.Creator, msg.BeeId)
	if err != nil {
		return nil, err
	}

	return &types.MsgUnsetApiaryHouseForBeeResponse{}, nil
}
