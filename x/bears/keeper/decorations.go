package keeper

import (
	"encoding/binary"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetDecorationsCount get the total number of decorations
func (k Keeper) GetDecorationsCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.DecorationsCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetDecorationsCount set the total number of decorations
func (k Keeper) SetDecorationsCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.DecorationsCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendDecorations appends a decorations in the store with a new id and update the count
func (k Keeper) AppendDecorations(
	ctx sdk.Context,
	decorations types.Decorations,
) uint64 {
	// Create the decorations
	count := k.GetDecorationsCount(ctx)

	// Set the ID of the appended value
	decorations.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DecorationsKey))
	appendedValue := k.cdc.MustMarshal(&decorations)
	store.Set(GetDecorationsIDBytes(decorations.Id), appendedValue)

	// Update decorations count
	k.SetDecorationsCount(ctx, count+1)

	return count
}

// SetDecorations set a specific decorations in the store
func (k Keeper) SetDecorations(ctx sdk.Context, decorations types.Decorations) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DecorationsKey))
	b := k.cdc.MustMarshal(&decorations)
	store.Set(GetDecorationsIDBytes(decorations.Id), b)
}

// GetDecorations returns a decorations from its id
func (k Keeper) GetDecorations(ctx sdk.Context, id uint64) (val types.Decorations, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DecorationsKey))
	b := store.Get(GetDecorationsIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveDecorations removes a decorations from the store
func (k Keeper) RemoveDecorations(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DecorationsKey))
	store.Delete(GetDecorationsIDBytes(id))
}

// GetAllDecorations returns all decorations
func (k Keeper) GetAllDecorations(ctx sdk.Context) (list []types.Decorations) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DecorationsKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Decorations
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetDecorationsIDBytes returns the byte representation of the ID
func GetDecorationsIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetDecorationsIDFromBytes returns ID in uint64 format from a byte array
func GetDecorationsIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
