package keeper

import (
	"context"
	"strconv"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) InitGameAndCreateApiary(goCtx context.Context, msg *types.MsgInitGameAndCreateApiary) (*types.MsgInitGameAndCreateApiaryResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	newBear, newField, initGameErr := k.Keeper.InitGame(ctx, msg.Receiver)
	if initGameErr != nil {
		return nil, initGameErr
	}

	rowId := uint64(0)
	columnId := uint64(0)

	apiary, createApiaryErr := k.Keeper.CreateApiaryOnField(ctx, msg.Creator, msg.Receiver, newBear.Id, newField.Id, rowId, columnId, msg.ApiaryType)
	if createApiaryErr != nil {
		return nil, createApiaryErr
	}

	ctx.EventManager().EmitEvents(sdk.Events{
		sdk.NewEvent(
			sdk.EventTypeMessage,
			sdk.NewAttribute(types.AttributeKeyCreator, msg.Creator),
			sdk.NewAttribute(types.AttributeKeyReceiver, msg.Receiver),
			sdk.NewAttribute(types.AttributeKeyBearId, strconv.FormatUint(newBear.Id, 10)),
			sdk.NewAttribute(types.AttributeKeyFieldId, strconv.FormatUint(newField.Id, 10)),
			sdk.NewAttribute(types.AttributeKeyRowId, strconv.FormatUint(rowId, 10)),
			sdk.NewAttribute(types.AttributeKeyColumnId, strconv.FormatUint(columnId, 10)),
			sdk.NewAttribute(types.AttributeKeyApiaryId, strconv.FormatUint(apiary.Id, 10)),
			sdk.NewAttribute(types.AttributeKeyApiaryType, msg.ApiaryType),
		),
	})

	return &types.MsgInitGameAndCreateApiaryResponse{
		Apiary: apiary,
	}, nil
}
