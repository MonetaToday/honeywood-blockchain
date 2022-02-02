package keeper

import (
	"encoding/binary"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
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

// Create apiary on field for specific bear
func (k Keeper) CreateApiaryOnField(ctx sdk.Context, creator string, bearId uint64, fieldId uint64, rowId uint64, columnId uint64, apiaryType string) (*types.Apiaries, error) {
	field, fieldFound := k.GetFields(ctx, fieldId)
	if !fieldFound {
		return nil, types.ErrFieldIsNotExisted
	}

	if field.BearOwner != nil && field.BearOwner.Id != bearId {
		return nil, types.ErrBearHasNoRights
	}

	hasRights := k.HasRightsToBear(ctx, creator, bearId)
	if !hasRights {
		return nil, types.ErrAddressHasNoRights
	}

	hasRights = k.HasRightsToField(ctx, creator, field)
	if !hasRights {
		return nil, types.ErrAddressHasNoRights
	}

	isEmpty, errEmptyTile := k.isEmptyTile(ctx, field, rowId, columnId)
	if !isEmpty {
		return nil, errEmptyTile
	}

	creatorAcc, _ := sdk.AccAddressFromBech32(creator)
	priceApiary := k.PriceApiaryBeeHouse(ctx)
	switch apiaryType {
	case types.Apiaries_APIARY.String():
		priceApiary = k.PriceApiaryApiary(ctx)
	case types.Apiaries_ALVEARY.String():
		priceApiary = k.PriceApiaryAlveary(ctx)
	}
	err := k.bankKeeper.SendCoinsFromAccountToModule(ctx, creatorAcc, k.feeCollectorName, priceApiary)
	if err != nil {
		return nil, sdkerrors.Wrapf(sdkerrors.ErrInsufficientFunds, err.Error())
	}

	errBurn := k.BurnCoinsByBurnRate(ctx, k.feeCollectorName, priceApiary)
	if errBurn != nil {
		return nil, errBurn
	}

	newApiary := types.Apiaries{
		BearOwner: &types.BearOwner{Id: bearId},
		Position: types.ItemPosition{
			FieldId:  field.Id,
			RowId:    rowId,
			ColumnId: columnId,
		},
		ApiaryType: types.Apiaries_ApiaryTypes(types.Apiaries_ApiaryTypes_value[apiaryType]),
	}
	newApiaryId := k.AppendApiaries(ctx, newApiary)

	field.Rows[rowId].Columns[columnId].Item = &types.Tiles_Items{
		ItemId:   newApiaryId,
		ItemType: types.Tiles_Items_APIARY,
	}
	k.SetFields(ctx, field)

	bear, bearFound := k.GetBears(ctx, bearId)
	if !bearFound {
		return nil, types.ErrBearIsNotExisted
	}
	bear.Apiaries = append(bear.Trees, newApiaryId)
	k.SetBears(ctx, bear)

	return &newApiary, nil
}