package keeper

import (
	"context"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) CreateApiary(goCtx context.Context, msg *types.MsgCreateApiary) (*types.MsgCreateApiaryResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	apiary, createApiaryErr := k.Keeper.CreateApiaryOnField(ctx, msg.Creator, msg.Receiver, msg.BearId, msg.FieldId, msg.RowId, msg.ColumnId, msg.ApiaryType)
	if createApiaryErr != nil {
		return nil, createApiaryErr
	}

	return &types.MsgCreateApiaryResponse{
		Apiary: apiary,
	}, nil
}
