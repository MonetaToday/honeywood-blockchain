package keeper

import (
	"context"
	"strconv"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) CreateTree(goCtx context.Context, msg *types.MsgCreateTree) (*types.MsgCreateTreeResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	tree, createTreeErr := k.Keeper.CreateTreeOnField(ctx, msg.Creator, msg.BearId, msg.FieldId, msg.RowId, msg.ColumnId, msg.TreeType)
	if createTreeErr != nil {
		return nil, createTreeErr
	}

	ctx.EventManager().EmitEvents(sdk.Events{
		sdk.NewEvent(
			sdk.EventTypeMessage,
			sdk.NewAttribute(types.AttributeKeyCreator, msg.Creator),
			sdk.NewAttribute(types.AttributeKeyBearId, strconv.FormatUint(msg.BearId, 10)),
			sdk.NewAttribute(types.AttributeKeyFieldId, strconv.FormatUint(msg.FieldId, 10)),
			sdk.NewAttribute(types.AttributeKeyRowId, strconv.FormatUint(msg.RowId, 10)),
			sdk.NewAttribute(types.AttributeKeyColumnId, strconv.FormatUint(msg.ColumnId, 10)),
			sdk.NewAttribute(types.AttributeKeyTreeId, strconv.FormatUint(tree.Id, 10)),
			sdk.NewAttribute(types.AttributeKeyTreeType, msg.TreeType),
		),
	})

	return &types.MsgCreateTreeResponse{
		Tree: tree,
	}, nil
}
