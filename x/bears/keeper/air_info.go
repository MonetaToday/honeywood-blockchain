package keeper

import (
	"github.com/MonetaToday/HoneyWood/x/bears/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetAirInfo set airInfo in the store
func (k Keeper) SetAirInfo(ctx sdk.Context, airInfo types.AirInfo) {
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

// AddAirHistory
func (k Keeper) AddAirHistory(ctx sdk.Context, count sdk.Dec, quality sdk.Dec) {
	airInfo, _ := k.GetAirInfo(ctx)

	lastIndex := len(airInfo.History) - 1
	if lastIndex < 0 || !airInfo.History[lastIndex].Count.Equal(count) || !airInfo.History[lastIndex].Quality.Equal(quality) {
		height := uint64(ctx.BlockHeight())

		airInfo.History = append(airInfo.History, types.AirHistory{
			Height: height,
			Count: count,
			Quality: quality,
		})

		maxLength := k.AirHistoryLength(ctx)
		currentLength := uint64(len(airInfo.History))
		if currentLength > maxLength {
			airInfo.History = airInfo.History[currentLength - maxLength:]
		}

		k.SetAirInfo(ctx, airInfo)
	}
}
