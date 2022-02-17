package keeper

import (
	"github.com/MonetaToday/HoneyWood/x/bears/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetAirInfo set airInfo in the store
func (k Keeper) SetAirInfo(ctx sdk.Context, airInfo types.AirInfo) {
	airCount := airInfo.Supply.Quo(airInfo.Consume)
	airPurity := sdk.OneDec()
	lastIndex := len(airInfo.History) - 1
	if lastIndex < 0 || !airInfo.History[lastIndex].Count.Equal(airCount) || !airInfo.History[lastIndex].Purity.Equal(airPurity) {
		height := uint64(ctx.BlockHeight())

		airInfo.History = append(airInfo.History, types.AirHistory{
			Height: height,
			Count: airCount,
			Purity: airPurity,
		})

		maxLength := k.AirHistoryLength(ctx)
		currentLength := uint64(len(airInfo.History))
		if currentLength > maxLength {
			airInfo.History = airInfo.History[currentLength - maxLength:]
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

// SetTotalAirConsume
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

// SetTotalAirSupply
func (k Keeper) GetTotalAirSupply(ctx sdk.Context) sdk.Dec {
	airInfo, _ := k.GetAirInfo(ctx)
	return airInfo.Supply
}
