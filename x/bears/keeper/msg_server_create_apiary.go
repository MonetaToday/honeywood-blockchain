package keeper

import (
	"context"
	"strconv"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) CreateApiary(goCtx context.Context, msg *types.MsgCreateApiary) (*types.MsgCreateApiaryResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	apiary, createApiaryErr := k.Keeper.CreateApiaryOnField(ctx, msg.Creator, msg.Receiver, msg.BearId, msg.FieldId, msg.RowId, msg.ColumnId, msg.ApiaryType)
	if createApiaryErr != nil {
		return nil, createApiaryErr
	}

	ctx.EventManager().EmitEvents(sdk.Events{
		sdk.NewEvent(
			sdk.EventTypeMessage,
			sdk.NewAttribute(types.AttributeKeyCreator, msg.Creator),
			sdk.NewAttribute(types.AttributeKeyReceiver, msg.Receiver),
			sdk.NewAttribute(types.AttributeKeyBearId, strconv.FormatUint(msg.BearId, 10)),
			sdk.NewAttribute(types.AttributeKeyFieldId, strconv.FormatUint(msg.FieldId, 10)),
			sdk.NewAttribute(types.AttributeKeyRowId, strconv.FormatUint(msg.RowId, 10)),
			sdk.NewAttribute(types.AttributeKeyColumnId, strconv.FormatUint(msg.ColumnId, 10)),
			sdk.NewAttribute(types.AttributeKeyApiaryId, strconv.FormatUint(apiary.Id, 10)),
			sdk.NewAttribute(types.AttributeKeyApiaryType, msg.ApiaryType),
		),
	})

	return &types.MsgCreateApiaryResponse{
		Apiary: apiary,
	}, nil
}
