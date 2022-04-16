package keeper

import (
	"context"
	"strconv"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) InitGameAndCreateTree(goCtx context.Context, msg *types.MsgInitGameAndCreateTree) (*types.MsgInitGameAndCreateTreeResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	newBear, newField, initGameErr := k.Keeper.InitGame(ctx, msg.Creator)
	if initGameErr != nil {
		return nil, initGameErr
	}

	rowId := uint64(0)
	columnId := uint64(0)

	tree, createTreeErr := k.Keeper.CreateTreeOnField(ctx, msg.Creator, newBear.Id, newField.Id, rowId, columnId, msg.TreeType)
	if createTreeErr != nil {
		return nil, createTreeErr
	}

	ctx.EventManager().EmitEvents(sdk.Events{
		sdk.NewEvent(
			sdk.EventTypeMessage,
			sdk.NewAttribute(types.AttributeKeyCreator, msg.Creator),
			sdk.NewAttribute(types.AttributeKeyBearId, strconv.FormatUint(newBear.Id, 10)),
			sdk.NewAttribute(types.AttributeKeyFieldId, strconv.FormatUint(newField.Id, 10)),
			sdk.NewAttribute(types.AttributeKeyRowId, strconv.FormatUint(rowId, 10)),
			sdk.NewAttribute(types.AttributeKeyColumnId, strconv.FormatUint(columnId, 10)),
			sdk.NewAttribute(types.AttributeKeyTreeId, strconv.FormatUint(tree.Id, 10)),
			sdk.NewAttribute(types.AttributeKeyTreeType, msg.TreeType),
		),
	})

	return &types.MsgInitGameAndCreateTreeResponse{
		Tree: tree,
	}, nil
}
