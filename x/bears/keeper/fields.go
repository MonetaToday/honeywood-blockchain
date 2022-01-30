package keeper

import (
	"encoding/binary"
	"fmt"
	"github.com/MonetaToday/HoneyWood/x/bears/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// GetFieldsCount get the total number of fields
func (k Keeper) GetFieldsCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.FieldsCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetFieldsCount set the total number of fields
func (k Keeper) SetFieldsCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.FieldsCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendFields appends a fields in the store with a new id and update the count
func (k Keeper) AppendFields(
	ctx sdk.Context,
	fields types.Fields,
) uint64 {
	// Create the fields
	count := k.GetFieldsCount(ctx)

	// Set the ID of the appended value
	fields.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FieldsKey))
	appendedValue := k.cdc.MustMarshal(&fields)
	store.Set(GetFieldsIDBytes(fields.Id), appendedValue)

	// Update fields count
	k.SetFieldsCount(ctx, count+1)

	return count
}

// SetFields set a specific fields in the store
func (k Keeper) SetFields(ctx sdk.Context, fields types.Fields) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FieldsKey))
	b := k.cdc.MustMarshal(&fields)
	store.Set(GetFieldsIDBytes(fields.Id), b)
}

// GetFields returns a fields from its id
func (k Keeper) GetFields(ctx sdk.Context, id uint64) (val types.Fields, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FieldsKey))
	b := store.Get(GetFieldsIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveFields removes a fields from the store
func (k Keeper) RemoveFields(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FieldsKey))
	store.Delete(GetFieldsIDBytes(id))
}

// GetAllFields returns all fields
func (k Keeper) GetAllFields(ctx sdk.Context) (list []types.Fields) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FieldsKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Fields
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetFieldsIDBytes returns the byte representation of the ID
func GetFieldsIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetFieldsIDFromBytes returns ID in uint64 format from a byte array
func GetFieldsIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}

func (k Keeper) GetFieldsTilesCount(field types.Fields) uint64 {
	count := 0
	for _, row := range field.Rows {
		count = count + len(row.Columns)
	}
	return uint64(count)
}

// BuyBearName for specific bear
func (k Keeper) ExtendField(ctx sdk.Context, buyer string, fieldId uint64) (*uint64, error) {
	field, fieldFound := k.GetFields(ctx, fieldId)
	if !fieldFound {
		return nil, types.ErrFieldIsNotExisted
	}

	hasRights := k.HasRightsToField(ctx, buyer, field)
	if !hasRights {
		return nil, types.ErrAddressHasNoRights
	}

	for rowIndex, _ := range field.Rows {
		field.Rows[rowIndex].Columns = append(field.Rows[rowIndex].Columns, types.Tiles{})
	}
	field.Rows = append(field.Rows, types.FieldRows{
		Columns: make([]types.Tiles, len(field.Rows[0].Columns)),
	})

	newCountTiles := int64(k.GetFieldsTilesCount(field))
	differenceTiles := newCountTiles - int64(field.CountTiles)
	k.Logger(ctx).Debug(fmt.Sprintf("newCountTiles is %d", newCountTiles))

	buyerAcc, _ := sdk.AccAddressFromBech32(buyer)
	oneTilePrice := k.OneTilePrice(ctx)
	priceForExtending := sdk.NewCoins(
		sdk.NewCoin(
			oneTilePrice.Denom,
			oneTilePrice.Amount.MulRaw(differenceTiles),
		),
	)

	err := k.bankKeeper.SendCoinsFromAccountToModule(ctx, buyerAcc, k.feeCollectorName, priceForExtending)
	if err != nil {
		return nil, sdkerrors.Wrapf(sdkerrors.ErrInsufficientFunds, err.Error())
	}

	field.CountTiles = uint64(newCountTiles)
	k.SetFields(ctx, field)

	return &field.CountTiles, nil
}

// GetBears returns a bears from its id
func (k Keeper) HasRightsToField(ctx sdk.Context, address string, field types.Fields) bool {
	if field.BearOwner == nil {
		return true
	}

	hasRights := k.HasRightsToBear(ctx, address, field.BearOwner.Id)
	if !hasRights {
		return false
	}

	return true
}

// GetBears returns a bears from its id
func (k Keeper) isEmptyTile(ctx sdk.Context, field types.Fields, rowId uint64, columnId uint64) (bool, error) {
	if len(field.Rows) <= int(rowId) {
		return false, types.ErrFieldHasNoRowId
	}

	if len(field.Rows[rowId].Columns) <= int(columnId) {
		return false, types.ErrFieldHasNoColumnId
	}

	if field.Rows[rowId].Columns[columnId].Item != nil {
		return false, types.ErrTileIsNotEmpty
	}

	return true, nil
}
