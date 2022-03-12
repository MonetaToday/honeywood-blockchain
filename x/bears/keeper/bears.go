package keeper

import (
	"encoding/binary"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetBearsCount get the total number of bears
func (k Keeper) GetBearsCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.BearsCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetBearsCount set the total number of bears
func (k Keeper) SetBearsCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.BearsCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendBears appends a bears in the store with a new id and update the count
func (k Keeper) AppendBears(
	ctx sdk.Context,
	bears types.Bears,
) uint64 {
	// Create the bears
	count := k.GetBearsCount(ctx)

	// Set the ID of the appended value
	bears.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BearsKey))
	appendedValue := k.cdc.MustMarshal(&bears)
	store.Set(GetBearsIDBytes(bears.Id), appendedValue)

	// Update bears count
	k.SetBearsCount(ctx, count+1)

	return count
}

// SetBears set a specific bears in the store
func (k Keeper) SetBears(ctx sdk.Context, bears types.Bears) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BearsKey))
	b := k.cdc.MustMarshal(&bears)
	store.Set(GetBearsIDBytes(bears.Id), b)
}

// GetBears returns a bears from its id
func (k Keeper) GetBears(ctx sdk.Context, id uint64) (val types.Bears, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BearsKey))
	b := store.Get(GetBearsIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveBears removes a bears from the store
func (k Keeper) RemoveBears(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BearsKey))
	store.Delete(GetBearsIDBytes(id))
}

// GetAllBears returns all bears
func (k Keeper) GetAllBears(ctx sdk.Context) (list []types.Bears) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BearsKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Bears
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetBearsIDBytes returns the byte representation of the ID
func GetBearsIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetBearsIDFromBytes returns ID in uint64 format from a byte array
func GetBearsIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}

// GetBears returns a bears from its id
func (k Keeper) InitGame(ctx sdk.Context, address string) (*types.Bears, *types.Fields, error) {
	_, found := k.GetAddressBears(ctx, address)
	if found {
		return nil, nil, types.ErrInitGameIsAlreadyExisted
	}

	// Get bear ID before appending
	bearId := k.GetBearsCount(ctx)
	name := address

	// TODO
	fieldType := "DEFAULT"
	fieldParams, _ := k.GetFieldParams(ctx, fieldType)
	if fieldParams == nil {
		return nil, nil, types.ErrFieldTypeIsNotDefined
	}

	// One empty tile.
	rows := []types.FieldRows{
		{
			Columns: []types.Tiles{
				{},
			},
		},
	}
	newField := types.Fields{
		BearOwner: &types.BearOwner{
			Id: bearId,
		},
		Params: fieldParams,
		Rows:   rows,
	}
	newField.CountTiles = k.GetFieldsTilesCount(newField)
	newField.Id = k.AppendFields(ctx, newField)

	bearName := types.BearNames{
		Name:   name,
		BearId: bearId,
	}
	k.SetBearNames(ctx, bearName)

	newBear := types.Bears{
		Id:          bearId,
		Owner:       address,
		Name:        name,
		Fields:      []uint64{newField.Id},
		Apiaries:    []uint64{},
		Bees:        []uint64{},
		Trees:       []uint64{},
		Decorations: []uint64{},
	}
	if bearId != k.AppendBears(ctx, newBear) {
		return nil, nil, types.ErrInitGameMismatchBearIds
	}

	addressBears := types.AddressBears{
		Address: address,
		Bears:   []uint64{bearId},
	}
	k.SetAddressBears(ctx, addressBears)

	airConsume := k.GetTotalAirConsume(ctx).Add(sdk.OneDec())
	k.SetTotalAirConsume(ctx, airConsume)

	return &newBear, &newField, nil
}

func (k Keeper) BurnCoinsByBurnRate(ctx sdk.Context, moduleName string, coins sdk.Coins) error {
	burnRate := k.BurnRate(ctx)
	burnedCoins := sdk.NormalizeCoins(sdk.NewDecCoinsFromCoins(coins...).MulDec(burnRate))
	return k.bankKeeper.BurnCoins(ctx, moduleName, burnedCoins)
}
