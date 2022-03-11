package keeper

import (
	"context"

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

	return &types.MsgUnsetDecorationPositionResponse{}, nil
}
