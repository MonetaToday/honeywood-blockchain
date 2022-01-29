package keeper

import (
	"context"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) MoveItemOnField(goCtx context.Context, msg *types.MsgMoveItemOnField) (*types.MsgMoveItemOnFieldResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	fieldId := msg.FieldId
	oldTileId := msg.TileId
	newTileId := msg.NewTileId

	field, fieldFound := k.Keeper.GetFields(ctx, fieldId)
	if !fieldFound {
		return nil, types.ErrFieldIsNotExisted
	}
	hasRightsField := k.Keeper.HasRightsToField(ctx, msg.Creator, field)
	if !hasRightsField {
		return nil, types.ErrAddressHasNoRights
	}
	isEmptyOldTile, _ := k.Keeper.isEmptyTile(ctx, field, oldTileId)
	if isEmptyOldTile {
		return nil, types.ErrItemIsNotExistedOnTile
	}
	isEmptyNewTile, errEmptyNewTile := k.Keeper.isEmptyTile(ctx, field, newTileId)
	if !isEmptyNewTile {
		return nil, errEmptyNewTile
	}

	field.Tiles[newTileId].Item = field.Tiles[oldTileId].Item
	field.Tiles[oldTileId].Item = nil

	k.Keeper.SetFields(ctx, field)

	itemType := field.Tiles[newTileId].Item.ItemType
	itemId := field.Tiles[newTileId].Item.ItemId

	switch itemType {
	case types.Tiles_Items_APIARY:
		//TODO
	case types.Tiles_Items_TREE:
		tree, treeFound := k.Keeper.GetTrees(ctx, itemId)
		if !treeFound {
			return nil, types.ErrTreeIsNotExister
		}
		tree.TileId = newTileId
		k.Keeper.SetTrees(ctx, tree)
	case types.Tiles_Items_DECORATION:
		//TODO
		
	default:
		return nil, types.ErrItemTypeIsNotDefined
	}

	return &types.MsgMoveItemOnFieldResponse{}, nil
}
