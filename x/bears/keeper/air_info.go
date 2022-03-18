package keeper

import (
	"encoding/binary"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetAirHistoryLastIndex get the last number of history items
func (k Keeper) GetAirHistoryLastIndex(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.AirHistoryLastIndexKey)
	bz := store.Get(byteKey)

	// LastIndex doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetAirHistoryLastIndex set the last number of history items
func (k Keeper) SetAirHistoryLastIndex(ctx sdk.Context, lastIndex uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.AirHistoryLastIndexKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, lastIndex)
	store.Set(byteKey, bz)
}

// GetAirHistoryIDBytes returns the byte representation of the ID
func GetAirHistoryIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// AppendAirHistory appends an air history in the store with a new id and update the last index
func (k Keeper) AppendAirHistory(
	ctx sdk.Context,
	airHistory types.AirHistory,
) uint64 {
	lastIndex := k.GetAirHistoryLastIndex(ctx)

	// Set the ID of the appended value
	airHistory.Id = lastIndex

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AirHistoryKey))
	appendedValue := k.cdc.MustMarshal(&airHistory)
	store.Set(GetAirHistoryIDBytes(airHistory.Id), appendedValue)

	// Update airHistory last index
	k.SetAirHistoryLastIndex(ctx, lastIndex+1)

	return lastIndex
}

// GetAirHistory returns an air history from its id
func (k Keeper) GetAirHistory(ctx sdk.Context, id uint64) (val types.AirHistory, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AirHistoryKey))
	b := store.Get(GetAirHistoryIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveAirHistory removes an air history from the store
func (k Keeper) RemoveAirHistory(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AirHistoryKey))
	store.Delete(GetAirHistoryIDBytes(id))
}

// SetAirInfo set airInfo in the store
func (k Keeper) SetAirInfo(ctx sdk.Context, airInfo types.AirInfo) {
	airCount := airInfo.Supply.Quo(airInfo.Consume)
	airPurity := sdk.OneDec()
	height := uint64(ctx.BlockHeight())

	lastIndex := k.GetAirHistoryLastIndex(ctx) - 1
	lastAirHistory, found := k.GetAirHistory(ctx, lastIndex)

	if !found || !lastAirHistory.Count.Equal(airCount) || !lastAirHistory.Purity.Equal(airPurity) {
		lastIndex = k.AppendAirHistory(ctx, types.AirHistory{
			Height: height,
			Count:  airCount,
			Purity: airPurity,
		})

		maxLength := k.AirHistoryLength(ctx)
		if lastIndex >= maxLength {
			// Won't remove the items older than this index, remove unnecessary items while updating.
			k.RemoveAirHistory(ctx, lastIndex-maxLength)
		}
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AirInfoKey))
	b := k.cdc.MustMarshal(&airInfo)
	store.Set([]byte{0}, b)
}

// GetAirInfo returns airInfo
func (k Keeper) GetAirInfo(ctx sdk.Context) (val types.AirInfo, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AirInfoKey))

	b := store.Get([]byte{0})
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveAirInfo removes airInfo from the store
func (k Keeper) RemoveAirInfo(ctx sdk.Context) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AirInfoKey))
	store.Delete([]byte{0})
}

// SetTotalAirConsume
func (k Keeper) SetTotalAirConsume(ctx sdk.Context, consume sdk.Dec) {
	airInfo, _ := k.GetAirInfo(ctx)
	airInfo.Consume = consume
	k.SetAirInfo(ctx, airInfo)
}

// GetTotalAirConsume
func (k Keeper) GetTotalAirConsume(ctx sdk.Context) sdk.Dec {
	airInfo, _ := k.GetAirInfo(ctx)
	return airInfo.Consume
}

// SetTotalAirSupply
func (k Keeper) SetTotalAirSupply(ctx sdk.Context, supply sdk.Dec) {
	airInfo, _ := k.GetAirInfo(ctx)
	airInfo.Supply = supply
	k.SetAirInfo(ctx, airInfo)
}

// GetTotalAirSupply
func (k Keeper) GetTotalAirSupply(ctx sdk.Context) sdk.Dec {
	airInfo, _ := k.GetAirInfo(ctx)
	return airInfo.Supply
}
