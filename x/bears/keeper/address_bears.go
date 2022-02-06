package keeper

import (
	"github.com/MonetaToday/HoneyWood/x/bears/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetAddressBears set a specific addressBears in the store from its index
func (k Keeper) SetAddressBears(ctx sdk.Context, addressBears types.AddressBears) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AddressBearsKeyPrefix))
	b := k.cdc.MustMarshal(&addressBears)
	store.Set(types.AddressBearsKey(
		addressBears.Address,
	), b)
}

// GetAddressBears returns a addressBears from its index
func (k Keeper) GetAddressBears(
	ctx sdk.Context,
	address string,

) (val types.AddressBears, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AddressBearsKeyPrefix))

	b := store.Get(types.AddressBearsKey(
		address,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveAddressBears removes a addressBears from the store
func (k Keeper) RemoveAddressBears(
	ctx sdk.Context,
	address string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AddressBearsKeyPrefix))
	store.Delete(types.AddressBearsKey(
		address,
	))
}

// GetAllAddressBears returns all addressBears
func (k Keeper) GetAllAddressBears(ctx sdk.Context) (list []types.AddressBears) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AddressBearsKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.AddressBears
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

