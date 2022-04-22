package keeper

import (
	"context"
	"strconv"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) UnsetDecorationPosition(goCtx context.Context, msg *types.MsgUnsetDecorationPosition) (*types.MsgUnsetDecorationPositionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	decorationId := msg.DecorationId

	decoration, decorationFound := k.Keeper.GetDecorations(ctx, decorationId)
	if !decorationFound {
		return nil, types.ErrDecorationIsNotExisted
	}
	if decoration.Position == nil {
		return nil, types.ErrDecorationHasNotPosition
	}

	fieldId := decoration.Position.FieldId
	rowId := decoration.Position.RowId
	columnId := decoration.Position.ColumnId

	if !k.Keeper.HasRightsToDecoration(ctx, msg.Creator, decoration) {
		return nil, types.ErrAddressHasNoRight
	}

	field, fieldFound := k.Keeper.GetFields(ctx, fieldId)
	if !fieldFound {
		return nil, types.ErrFieldIsNotExisted
	}

	decoration.Position = nil
	k.Keeper.SetDecorations(ctx, decoration)
	field.Rows[rowId].Columns[columnId].Item = nil
	k.SetFields(ctx, field)

	ctx.EventManager().EmitEvents(sdk.Events{
		sdk.NewEvent(
			sdk.EventTypeMessage,
			sdk.NewAttribute(types.AttributeKeyCreator, msg.Creator),
			sdk.NewAttribute(types.AttributeKeyDecorationId, strconv.FormatUint(decorationId, 10)),
			sdk.NewAttribute(types.AttributeKeyDecorationType, decoration.Params.DecorationType),

			sdk.NewAttribute(types.AttributeKeyOldFieldId, strconv.FormatUint(fieldId, 10)),
			sdk.NewAttribute(types.AttributeKeyOldRowId, strconv.FormatUint(rowId, 10)),
			sdk.NewAttribute(types.AttributeKeyOldColumnId, strconv.FormatUint(columnId, 10)),
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

	// // emit decoration position unset event
	// ctx.EventManager().EmitEvent(
	// 	types.NewDecorationPositionUnsetEvent(
	// 		decorationId,
	// 	),
	// )

	return &types.MsgUnsetDecorationPositionResponse{}, nil
}
