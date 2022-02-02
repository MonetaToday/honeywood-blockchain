package keeper

import (
	"context"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) MoveItemOnField(goCtx context.Context, msg *types.MsgMoveItemOnField) (*types.MsgMoveItemOnFieldResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	fieldId := msg.FieldId
	oldRowId := msg.RowId
	oldColumnId := msg.ColumnId
	newRowId := msg.NewRowId
	newColumnId := msg.NewColumnId

	field, fieldFound := k.Keeper.GetFields(ctx, fieldId)
	if !fieldFound {
		return nil, types.ErrFieldIsNotExisted
	}
	hasRightsField := k.Keeper.HasRightsToField(ctx, msg.Creator, field)
	if !hasRightsField {
		return nil, types.ErrAddressHasNoRights
	}
	isEmptyOldTile, _ := k.Keeper.isEmptyTile(ctx, field, oldRowId, oldColumnId)
	if isEmptyOldTile {
		return nil, types.ErrItemIsNotExistedOnTile
	}
	isEmptyNewTile, errEmptyNewTile := k.Keeper.isEmptyTile(ctx, field, newRowId, newColumnId)
	if !isEmptyNewTile {
		return nil, errEmptyNewTile
	}

	field.Rows[newRowId].Columns[newColumnId].Item = field.Rows[oldRowId].Columns[oldColumnId].Item
	field.Rows[oldRowId].Columns[oldColumnId].Item = nil

	k.Keeper.SetFields(ctx, field)

	itemType := field.Rows[newRowId].Columns[newColumnId].Item.ItemType
	itemId := field.Rows[newRowId].Columns[newColumnId].Item.ItemId

	switch itemType {
	case types.Tiles_Items_APIARY:
		apiary, apiaryFound := k.Keeper.GetApiaries(ctx, itemId)
		if !apiaryFound {
			return nil, types.ErrApiaryIsNotExisted
		}
		apiary.Position = types.ItemPosition{
			FieldId:  fieldId,
			RowId:    newRowId,
			ColumnId: newColumnId,
		}
		k.Keeper.SetApiaries(ctx, apiary)
	case types.Tiles_Items_TREE:
		tree, treeFound := k.Keeper.GetTrees(ctx, itemId)
		if !treeFound {
			return nil, types.ErrTreeIsNotExisted
		}
		tree.Position = types.ItemPosition{
			FieldId:  fieldId,
			RowId:    newRowId,
			ColumnId: newColumnId,
		}
		k.Keeper.SetTrees(ctx, tree)
	case types.Tiles_Items_DECORATION:
		decoration, decorationFound := k.Keeper.GetDecorations(ctx, itemId)
		if !decorationFound {
			return nil, types.ErrDecorationIsNotExisted
		}
		decoration.Position = &types.ItemPosition{
			FieldId:  fieldId,
			RowId:    newRowId,
			ColumnId: newColumnId,
		}
		k.Keeper.SetDecorations(ctx, decoration)

	default:
		return nil, types.ErrItemTypeIsNotDefined
	}

	return &types.MsgMoveItemOnFieldResponse{}, nil
}
