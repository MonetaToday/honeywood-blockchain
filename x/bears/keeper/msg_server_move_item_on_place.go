package keeper

import (
	"context"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) MoveItemOnPlace(goCtx context.Context, msg *types.MsgMoveItemOnPlace) (*types.MsgMoveItemOnPlaceResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	placeId := msg.PlaceId
	oldGroundId := msg.GroundId
	newGroundId := msg.NewGroundId

	place, placeFound := k.Keeper.GetPlaces(ctx, placeId)
	if !placeFound {
		return nil, types.ErrPlaceIsNotExisted
	}
	hasRightsPlace := k.Keeper.HasRightsToPlace(ctx, msg.Creator, place)
	if !hasRightsPlace {
		return nil, types.ErrAddressHasNoRights
	}
	isEmptyOldGround, _ := k.Keeper.isEmptyGround(ctx, place, oldGroundId)
	if isEmptyOldGround {
		return nil, types.ErrItemIsNotExistedOnGround
	}
	isEmptyNewGround, errEmptyNewGround := k.Keeper.isEmptyGround(ctx, place, newGroundId)
	if !isEmptyNewGround {
		return nil, errEmptyNewGround
	}

	place.Grounds[newGroundId].Item = place.Grounds[oldGroundId].Item
	place.Grounds[oldGroundId].Item = nil

	k.Keeper.SetPlaces(ctx, place)

	itemType := place.Grounds[newGroundId].Item.ItemType
	itemId := place.Grounds[newGroundId].Item.ItemId

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

	return &types.MsgMoveItemOnPlaceResponse{}, nil
}
