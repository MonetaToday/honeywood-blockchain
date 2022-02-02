package keeper

import (
	"context"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) InitGameAndCreateApiary(goCtx context.Context, msg *types.MsgInitGameAndCreateApiary) (*types.MsgInitGameAndCreateApiaryResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	newBear, newField, initGameErr := k.Keeper.InitGame(ctx, msg.Creator)
	if initGameErr != nil {
		return nil, initGameErr
	}

	apiary, createApiaryErr := k.Keeper.CreateApiaryOnField(ctx, msg.Creator, newBear.Id, newField.Id, 0, 0, msg.ApiaryType)
	if createApiaryErr != nil {
		return nil, createApiaryErr
	}

	return &types.MsgInitGameAndCreateApiaryResponse{
		Apiary: apiary,
	}, nil
}
