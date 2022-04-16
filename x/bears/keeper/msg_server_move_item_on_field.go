package keeper

import (
	"context"
	"strconv"

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
	if !k.Keeper.HasRightsToField(ctx, msg.Creator, field) {
		return nil, types.ErrAddressHasNoRight
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

		ctx.EventManager().EmitEvents(sdk.Events{
			sdk.NewEvent(
				sdk.EventTypeMessage,
				sdk.NewAttribute(types.AttributeKeyApiaryId, strconv.FormatUint(apiary.Id, 10)),
			),
		})

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

		ctx.EventManager().EmitEvents(sdk.Events{
			sdk.NewEvent(
				sdk.EventTypeMessage,
				sdk.NewAttribute(types.AttributeKeyTreeId, strconv.FormatUint(tree.Id, 10)),
			),
		})

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

		ctx.EventManager().EmitEvents(sdk.Events{
			sdk.NewEvent(
				sdk.EventTypeMessage,
				sdk.NewAttribute(types.AttributeKeyDecorationId, strconv.FormatUint(decoration.Id, 10)),
			),
		})

		k.Keeper.SetDecorations(ctx, decoration)

	default:
		return nil, types.ErrItemTypeIsNotDefined
	}

	ctx.EventManager().EmitEvents(sdk.Events{
		sdk.NewEvent(
			sdk.EventTypeMessage,
			sdk.NewAttribute(types.AttributeKeyCreator, msg.Creator),
			sdk.NewAttribute(types.AttributeKeyFieldId, strconv.FormatUint(fieldId, 10)),
			sdk.NewAttribute(types.AttributeKeyOldRowId, strconv.FormatUint(oldRowId, 10)),
			sdk.NewAttribute(types.AttributeKeyOldColumnId, strconv.FormatUint(oldColumnId, 10)),
			sdk.NewAttribute(types.AttributeKeyRowId, strconv.FormatUint(newRowId, 10)),
			sdk.NewAttribute(types.AttributeKeyColumnId, strconv.FormatUint(newColumnId, 10)),
		),
	})
	if field.BearOwner != nil {
		ctx.EventManager().EmitEvents(sdk.Events{
			sdk.NewEvent(
				sdk.EventTypeMessage,
				sdk.NewAttribute(types.AttributeKeyBearId, strconv.FormatUint(field.BearOwner.Id, 10)),
			),
		})
	}

	// // emit item moved on field event
	// ctx.EventManager().EmitEvent(
	// 	types.NewItemMovedOnFieldEvent(
	// 		fieldId,
	// 		oldRowId,
	// 		oldColumnId,
	// 		newRowId,
	// 		newColumnId,
	// 		itemId,
	// 		itemType.String(),
	// 	),
	// )

	return &types.MsgMoveItemOnFieldResponse{}, nil
}
