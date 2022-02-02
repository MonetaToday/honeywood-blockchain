package keeper

import (
	"encoding/binary"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetApiariesCount get the total number of apiaries
func (k Keeper) GetApiariesCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.ApiariesCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetApiariesCount set the total number of apiaries
func (k Keeper) SetApiariesCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.ApiariesCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendApiaries appends a apiaries in the store with a new id and update the count
func (k Keeper) AppendApiaries(
	ctx sdk.Context,
	apiaries types.Apiaries,
) uint64 {
	// Create the apiaries
	count := k.GetApiariesCount(ctx)

	// Set the ID of the appended value
	apiaries.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ApiariesKey))
	appendedValue := k.cdc.MustMarshal(&apiaries)
	store.Set(GetApiariesIDBytes(apiaries.Id), appendedValue)

	// Update apiaries count
	k.SetApiariesCount(ctx, count+1)

	return count
}

// SetApiaries set a specific apiaries in the store
func (k Keeper) SetApiaries(ctx sdk.Context, apiaries types.Apiaries) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ApiariesKey))
	b := k.cdc.MustMarshal(&apiaries)
	store.Set(GetApiariesIDBytes(apiaries.Id), b)
}

// GetApiaries returns a apiaries from its id
func (k Keeper) GetApiaries(ctx sdk.Context, id uint64) (val types.Apiaries, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ApiariesKey))
	b := store.Get(GetApiariesIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveApiaries removes a apiaries from the store
func (k Keeper) RemoveApiaries(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ApiariesKey))
	store.Delete(GetApiariesIDBytes(id))
}

// GetAllApiaries returns all apiaries
func (k Keeper) GetAllApiaries(ctx sdk.Context) (list []types.Apiaries) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ApiariesKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Apiaries
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetApiariesIDBytes returns the byte representation of the ID
func GetApiariesIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetApiariesIDFromBytes returns ID in uint64 format from a byte array
func GetApiariesIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
