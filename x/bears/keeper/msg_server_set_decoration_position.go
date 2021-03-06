package keeper

import (
	"context"
	"strconv"

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

	if decoration.BearOwner == nil {
		return nil, types.ErrAddressHasNoRight
	}

	if !k.Keeper.HasRightsToBearById(ctx, msg.Creator, decoration.BearOwner.Id) {
		return nil, types.ErrAddressHasNoRight
	}

	field, fieldFound := k.Keeper.GetFields(ctx, fieldId)
	if !fieldFound {
		return nil, types.ErrFieldIsNotExisted
	}
	if !k.Keeper.HasRightsToField(ctx, msg.Creator, field) {
		return nil, types.ErrAddressHasNoRight
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

	ctx.EventManager().EmitEvents(sdk.Events{
		sdk.NewEvent(
			sdk.EventTypeMessage,
			sdk.NewAttribute(types.AttributeKeyCreator, msg.Creator),
			sdk.NewAttribute(types.AttributeKeyDecorationId, strconv.FormatUint(decorationId, 10)),
			sdk.NewAttribute(types.AttributeKeyDecorationType, decoration.Params.DecorationType),

			sdk.NewAttribute(types.AttributeKeyFieldId, strconv.FormatUint(fieldId, 10)),
			sdk.NewAttribute(types.AttributeKeyRowId, strconv.FormatUint(rowId, 10)),
			sdk.NewAttribute(types.AttributeKeyColumnId, strconv.FormatUint(columnId, 10)),
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

	// // emit decoration position set event
	// ctx.EventManager().EmitEvent(
	// 	types.NewDecorationPositionSetEvent(
	// 		decorationId,
	// 		fieldId,
	// 		rowId,
	// 		columnId,
	// 	),
	// )

	return &types.MsgSetDecorationPositionResponse{}, nil
}
