package keeper

import (
	"encoding/binary"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetBeesCount get the total number of bees
func (k Keeper) GetBeesCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.BeesCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetBeesCount set the total number of bees
func (k Keeper) SetBeesCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.BeesCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendBees appends a bees in the store with a new id and update the count
func (k Keeper) AppendBees(
	ctx sdk.Context,
	bees types.Bees,
) uint64 {
	// Create the bees
	count := k.GetBeesCount(ctx)

	// Set the ID of the appended value
	bees.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BeesKey))
	appendedValue := k.cdc.MustMarshal(&bees)
	store.Set(GetBeesIDBytes(bees.Id), appendedValue)

	// Update bees count
	k.SetBeesCount(ctx, count+1)

	return count
}

// SetBees set a specific bees in the store
func (k Keeper) SetBees(ctx sdk.Context, bees types.Bees) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BeesKey))
	b := k.cdc.MustMarshal(&bees)
	store.Set(GetBeesIDBytes(bees.Id), b)
}

// GetBees returns a bees from its id
func (k Keeper) GetBees(ctx sdk.Context, id uint64) (val types.Bees, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BeesKey))
	b := store.Get(GetBeesIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveBees removes a bees from the store
func (k Keeper) RemoveBees(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BeesKey))
	store.Delete(GetBeesIDBytes(id))
}

// GetAllBees returns all bees
func (k Keeper) GetAllBees(ctx sdk.Context) (list []types.Bees) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BeesKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Bees
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetBeesIDBytes returns the byte representation of the ID
func GetBeesIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetBeesIDFromBytes returns ID in uint64 format from a byte array
func GetBeesIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
