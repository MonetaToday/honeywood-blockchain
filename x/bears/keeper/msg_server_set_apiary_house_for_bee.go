package keeper

import (
	"context"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) SetApiaryHouseForBee(goCtx context.Context, msg *types.MsgSetApiaryHouseForBee) (*types.MsgSetApiaryHouseForBeeResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	err := k.Keeper.SetBeeInApiaryHouse(ctx, msg.Creator, msg.BeeId, msg.ApiaryId)
	if err != nil {
		return nil, err
	}

	return &types.MsgSetApiaryHouseForBeeResponse{}, nil
}
