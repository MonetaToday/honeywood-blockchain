package keeper

import (
	"encoding/binary"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// GetDecorationsCount get the total number of decorations
func (k Keeper) GetDecorationsCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.DecorationsCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetDecorationsCount set the total number of decorations
func (k Keeper) SetDecorationsCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.DecorationsCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendDecorations appends a decorations in the store with a new id and update the count
func (k Keeper) AppendDecorations(
	ctx sdk.Context,
	decorations types.Decorations,
) uint64 {
	// Create the decorations
	count := k.GetDecorationsCount(ctx)

	// Set the ID of the appended value
	decorations.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DecorationsKey))
	appendedValue := k.cdc.MustMarshal(&decorations)
	store.Set(GetDecorationsIDBytes(decorations.Id), appendedValue)

	// Update decorations count
	k.SetDecorationsCount(ctx, count+1)

	return count
}

// SetDecorations set a specific decorations in the store
func (k Keeper) SetDecorations(ctx sdk.Context, decorations types.Decorations) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DecorationsKey))
	b := k.cdc.MustMarshal(&decorations)
	store.Set(GetDecorationsIDBytes(decorations.Id), b)
}

// GetDecorations returns a decorations from its id
func (k Keeper) GetDecorations(ctx sdk.Context, id uint64) (val types.Decorations, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DecorationsKey))
	b := store.Get(GetDecorationsIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveDecorations removes a decorations from the store
func (k Keeper) RemoveDecorations(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DecorationsKey))
	store.Delete(GetDecorationsIDBytes(id))
}

// GetAllDecorations returns all decorations
func (k Keeper) GetAllDecorations(ctx sdk.Context) (list []types.Decorations) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DecorationsKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Decorations
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetDecorationsIDBytes returns the byte representation of the ID
func GetDecorationsIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetDecorationsIDFromBytes returns ID in uint64 format from a byte array
func GetDecorationsIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}

// create decoration for specific bear
func (k Keeper) CreateDecoration(ctx sdk.Context, creator string, bearId uint64, decorationType string) (*types.Decorations, error) {
	hasRights := k.HasRightsToBear(ctx, creator, bearId)
	if !hasRights {
		return nil, types.ErrAddressHasNoRights
	}

	creatorAcc, _ := sdk.AccAddressFromBech32(creator)

	priceDecoration := k.PriceDecorationFlowers(ctx)
	switch decorationType {
	case types.Decorations_FLAG.String():
		priceDecoration = k.PriceDecorationFlag(ctx)
	case types.Decorations_LAMP.String():
		priceDecoration = k.PriceDecorationLamp(ctx)
	case types.Decorations_GREEN_BEE.String():
		priceDecoration = k.PriceDecorationGreenBee(ctx)
	case types.Decorations_FOUNTAIN.String():
		priceDecoration = k.PriceDecorationFountain(ctx)
	}

	err := k.bankKeeper.SendCoinsFromAccountToModule(ctx, creatorAcc, k.feeCollectorName, priceDecoration)
	if err != nil {
		return nil, sdkerrors.Wrapf(sdkerrors.ErrInsufficientFunds, err.Error())
	}

	errBurn := k.BurnCoinsByBurnRate(ctx, k.feeCollectorName, priceDecoration)
	if errBurn != nil {
		return nil, errBurn
	}

	newDecoration := types.Decorations{
		BearOwner:      &types.BearOwner{Id: bearId},
		DecorationType: types.Decorations_DecorationTypes(types.Decorations_DecorationTypes_value[decorationType]),
	}
	newDecorationId := k.AppendDecorations(ctx, newDecoration)

	bear, bearFound := k.GetBears(ctx, bearId)
	if !bearFound {
		return nil, types.ErrBearIsNotExisted
	}
	bear.Decorations = append(bear.Decorations, newDecorationId)
	k.SetBears(ctx, bear)

	return &newDecoration, nil
}
