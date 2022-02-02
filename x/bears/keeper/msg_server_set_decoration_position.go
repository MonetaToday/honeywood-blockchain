package keeper

import (
	"context"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) SetDecorationPosition(goCtx context.Context, msg *types.MsgSetDecorationPosition) (*types.MsgSetDecorationPositionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	decorationId := msg.DecorationId
	fieldId := msg.FieldId
	rowId := msg.RowId
	columnId := msg.ColumnId

	decoration, decorationFound := k.Keeper.GetDecorations(ctx, decorationId)
	if !decorationFound {
		return nil, types.ErrDecorationIsNotExisted
	}
	if decoration.Position != nil {
		return nil, types.ErrDecorationHasPosition
	}

	hasRights := k.Keeper.HasRightsToBear(ctx, msg.Creator, decoration.BearId)
	if !hasRights {
		return nil, types.ErrAddressHasNoRights
	}

	field, fieldFound := k.Keeper.GetFields(ctx, fieldId)
	if !fieldFound {
		return nil, types.ErrFieldIsNotExisted
	}
	hasRightsField := k.Keeper.HasRightsToField(ctx, msg.Creator, field)
	if !hasRightsField {
		return nil, types.ErrAddressHasNoRights
	}
	isEmptyTile, errEmptyTile := k.Keeper.isEmptyTile(ctx, field, rowId, columnId)
	if !isEmptyTile {
		return nil, errEmptyTile
	}

	decoration.Position = &types.ItemPosition{
		FieldId:  fieldId,
		RowId:    rowId,
		ColumnId: columnId,
	}
	k.Keeper.SetDecorations(ctx, decoration)

	field.Rows[rowId].Columns[columnId].Item = &types.Tiles_Items{
		ItemId:   decorationId,
		ItemType: types.Tiles_Items_DECORATION,
	}
	k.SetFields(ctx, field)

	return &types.MsgSetDecorationPositionResponse{}, nil
}
