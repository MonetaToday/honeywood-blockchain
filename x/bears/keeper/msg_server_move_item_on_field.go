package keeper

import (
	"context"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) MoveItemOnField(goCtx context.Context, msg *types.MsgMoveItemOnField) (*types.MsgMoveItemOnFieldResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	fieldId := msg.FieldId
	oldGroundId := msg.GroundId
	newGroundId := msg.NewGroundId

	field, fieldFound := k.Keeper.GetFields(ctx, fieldId)
	if !fieldFound {
		return nil, types.ErrFieldIsNotExisted
	}
	hasRightsField := k.Keeper.HasRightsToField(ctx, msg.Creator, field)
	if !hasRightsField {
		return nil, types.ErrAddressHasNoRights
	}
	isEmptyOldGround, _ := k.Keeper.isEmptyGround(ctx, field, oldGroundId)
	if isEmptyOldGround {
		return nil, types.ErrItemIsNotExistedOnGround
	}
	isEmptyNewGround, errEmptyNewGround := k.Keeper.isEmptyGround(ctx, field, newGroundId)
	if !isEmptyNewGround {
		return nil, errEmptyNewGround
	}

	field.Grounds[newGroundId].Item = field.Grounds[oldGroundId].Item
	field.Grounds[oldGroundId].Item = nil

	k.Keeper.SetFields(ctx, field)

	itemType := field.Grounds[newGroundId].Item.ItemType
	itemId := field.Grounds[newGroundId].Item.ItemId

	switch itemType {
	case types.Grounds_Items_APIARY:
		//TODO
	case types.Grounds_Items_TREE:
		tree, treeFound := k.Keeper.GetTrees(ctx, itemId)
		if !treeFound {
			return nil, types.ErrTreeIsNotExister
		}
		tree.GroundId = newGroundId
		k.Keeper.SetTrees(ctx, tree)
	case types.Grounds_Items_DECORATION:
		//TODO
		
	default:
		return nil, types.ErrItemTypeIsNotDefined
	}

	return &types.MsgMoveItemOnFieldResponse{}, nil
}
