package keeper

import (
	"encoding/binary"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	mintTypes "github.com/cosmos/cosmos-sdk/x/mint/types"
)

// GetTreesCount get the total number of trees
func (k Keeper) GetTreesCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.TreesCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetTreesCount set the total number of trees
func (k Keeper) SetTreesCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.TreesCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendTrees appends a trees in the store with a new id and update the count
func (k Keeper) AppendTrees(
	ctx sdk.Context,
	trees types.Trees,
) uint64 {
	// Create the trees
	count := k.GetTreesCount(ctx)

	// Set the ID of the appended value
	trees.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TreesKey))
	appendedValue := k.cdc.MustMarshal(&trees)
	store.Set(GetTreesIDBytes(trees.Id), appendedValue)

	// Update trees count
	k.SetTreesCount(ctx, count+1)

	return count
}

// SetTrees set a specific trees in the store
func (k Keeper) SetTrees(ctx sdk.Context, trees types.Trees) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TreesKey))
	b := k.cdc.MustMarshal(&trees)
	store.Set(GetTreesIDBytes(trees.Id), b)
}

// GetTrees returns a trees from its id
func (k Keeper) GetTrees(ctx sdk.Context, id uint64) (val types.Trees, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TreesKey))
	b := store.Get(GetTreesIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveTrees removes a trees from the store
func (k Keeper) RemoveTrees(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TreesKey))
	store.Delete(GetTreesIDBytes(id))
}

// GetAllTrees returns all trees
func (k Keeper) GetAllTrees(ctx sdk.Context) (list []types.Trees) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TreesKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Trees
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetTreesIDBytes returns the byte representation of the ID
func GetTreesIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetTreesIDFromBytes returns ID in uint64 format from a byte array
func GetTreesIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}

// BuyBearName for specific bear
func (k Keeper) createTreeOnField(ctx sdk.Context, creator string, bearId uint64, fieldId uint64, groundId uint64) (*types.Trees, error) {
	field, fieldFound := k.GetFields(ctx, fieldId)
	if !fieldFound {
		return nil, types.ErrFieldIsNotExisted
	}

	if field.BearOwner != nil && field.BearOwner.Id != bearId {
		return nil, types.ErrBearHasNoRights
	}

	hasRights := k.HasRightsToField(ctx, creator, field)
	if !hasRights {
		return nil, types.ErrAddressHasNoRights
	}

	isEmpty, errEmptyGround := k.isEmptyGround(ctx, field, groundId)
	if !isEmpty {
		return nil, errEmptyGround
	}

	creatorAcc, _ := sdk.AccAddressFromBech32(creator)
	oneTreePrice := k.OneTreePrice(ctx)
	err := k.bankKeeper.SendCoinsFromAccountToModule(ctx, creatorAcc, k.feeCollectorName, sdk.NewCoins(oneTreePrice))
	if err != nil {
		return nil, sdkerrors.Wrapf(sdkerrors.ErrInsufficientFunds, err.Error())
	}

	newTree := types.Trees{
		BearId:   bearId,
		FieldId:  field.Id,
		GroundId: groundId,
	}
	newTreeId := k.AppendTrees(ctx, newTree)

	field.Grounds[groundId].Item = &types.Grounds_Items{
		ItemId:   newTreeId,
		ItemType: types.Grounds_Items_TREE,
	}
	k.SetFields(ctx, field)

	bear, bearFound := k.GetBears(ctx, bearId)
	if !bearFound {
		return nil, types.ErrBearIsNotExisted
	}
	bear.Trees = append(bear.Trees, newTreeId)
	k.SetBears(ctx, bear)

	oneTreeReward := k.OneTreeReward(ctx)
	k.bankKeeper.MintCoins(ctx, mintTypes.ModuleName, sdk.NewCoins(oneTreeReward))
	errSendFromModuleToAccount := k.bankKeeper.SendCoinsFromModuleToAccount(ctx, mintTypes.ModuleName, creatorAcc, sdk.NewCoins(oneTreeReward))
	if errSendFromModuleToAccount != nil {
		return nil, sdkerrors.Wrapf(sdkerrors.ErrInsufficientFunds, errSendFromModuleToAccount.Error())
	}
	// TODO: update oxygen

	return &newTree, nil
}
