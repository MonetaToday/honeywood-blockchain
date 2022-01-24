package keeper

import (
	"encoding/binary"
	"fmt"
	"github.com/MonetaToday/HoneyWood/x/bears/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"math"
)

// GetPlacesCount get the total number of places
func (k Keeper) GetPlacesCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.PlacesCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetPlacesCount set the total number of places
func (k Keeper) SetPlacesCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.PlacesCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendPlaces appends a places in the store with a new id and update the count
func (k Keeper) AppendPlaces(
	ctx sdk.Context,
	places types.Places,
) uint64 {
	// Create the places
	count := k.GetPlacesCount(ctx)

	// Set the ID of the appended value
	places.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PlacesKey))
	appendedValue := k.cdc.MustMarshal(&places)
	store.Set(GetPlacesIDBytes(places.Id), appendedValue)

	// Update places count
	k.SetPlacesCount(ctx, count+1)

	return count
}

// SetPlaces set a specific places in the store
func (k Keeper) SetPlaces(ctx sdk.Context, places types.Places) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PlacesKey))
	b := k.cdc.MustMarshal(&places)
	store.Set(GetPlacesIDBytes(places.Id), b)
}

// GetPlaces returns a places from its id
func (k Keeper) GetPlaces(ctx sdk.Context, id uint64) (val types.Places, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PlacesKey))
	b := store.Get(GetPlacesIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemovePlaces removes a places from the store
func (k Keeper) RemovePlaces(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PlacesKey))
	store.Delete(GetPlacesIDBytes(id))
}

// GetAllPlaces returns all places
func (k Keeper) GetAllPlaces(ctx sdk.Context) (list []types.Places) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PlacesKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Places
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetPlacesIDBytes returns the byte representation of the ID
func GetPlacesIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetPlacesIDFromBytes returns ID in uint64 format from a byte array
func GetPlacesIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}

// BuyBearName for specific bear
func (k Keeper) ExtendPlace(ctx sdk.Context, buyer string, placeId uint64) (*uint64, error) {
	place, placeFound := k.GetPlaces(ctx, placeId)
	if !placeFound {
		return nil, types.ErrPlaceIsNotExisted
	}

	hasRights := k.HasRightsToBear(ctx, buyer, place.BearId)
	if !hasRights {
		return nil, types.ErrAddressHasNoRights
	}

	newCountGrounds := int64(math.Pow(math.Sqrt(float64(place.CountGrounds))+1, 2))
	differenceGrounds := newCountGrounds - int64(place.CountGrounds)
	k.Logger(ctx).Debug(fmt.Sprintf("newCountGrounds is %d", newCountGrounds))

	buyerAcc, _ := sdk.AccAddressFromBech32(buyer)
	oneGroundPrice := k.OneGroundPrice(ctx)
	priceForExtending := sdk.NewCoins(
		sdk.NewCoin(
			oneGroundPrice.Denom,
			oneGroundPrice.Amount.MulRaw(differenceGrounds),
		),
	)

	err := k.bankKeeper.SendCoinsFromAccountToModule(ctx, buyerAcc, k.feeCollectorName, priceForExtending)
	if err != nil {
		return nil, sdkerrors.Wrapf(sdkerrors.ErrInsufficientFunds, err.Error())
	}

	for i := 0; i < int(differenceGrounds); i++ {
		place.Grounds = append(place.Grounds, types.Grounds{})
	}
	place.CountGrounds = uint64(len(place.Grounds))

	// place.Grounds[10] = types.Grounds{
	// 	Item: &types.Grounds_Items{
	// 		ItemId: 0,
	// 		ItemType: types.Grounds_Items_APIARY,
	// 	},
	// }

	k.SetPlaces(ctx, place)

	return &place.CountGrounds, nil
}
