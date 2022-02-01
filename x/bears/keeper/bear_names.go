package keeper

import (
	"github.com/MonetaToday/HoneyWood/x/bears/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// SetBearNames set a specific bearNames in the store from its index
func (k Keeper) SetBearNames(ctx sdk.Context, bearNames types.BearNames) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BearNamesKeyPrefix))
	b := k.cdc.MustMarshal(&bearNames)
	store.Set(types.BearNamesKey(
		bearNames.Name,
	), b)
}

// GetBearNames returns a bearNames from its index
func (k Keeper) GetBearNames(
	ctx sdk.Context,
	name string,

) (val types.BearNames, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BearNamesKeyPrefix))

	b := store.Get(types.BearNamesKey(
		name,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveBearNames removes a bearNames from the store
func (k Keeper) RemoveBearNames(
	ctx sdk.Context,
	name string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BearNamesKeyPrefix))
	store.Delete(types.BearNamesKey(
		name,
	))
}

// GetAllBearNames returns all bearNames
func (k Keeper) GetAllBearNames(ctx sdk.Context) (list []types.BearNames) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BearNamesKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.BearNames
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// BuyBearName for specific bear
func (k Keeper) BuyBearNameForBear(ctx sdk.Context, buyer string, bearId uint64, name string) error {
	bear, bearFound := k.GetBears(ctx, bearId)
	if !bearFound {
		return types.ErrBearIsNotExisted
	}

	hasRights := k.HasRightsToBear(ctx, buyer, bearId)
	if !hasRights {
		return types.ErrAddressHasNoRights
	}

	_, nameFound := k.GetBearNames(ctx, name)
	if nameFound {
		return types.ErrNameIsAlreadyExisted
	}

	buyerAcc, _ := sdk.AccAddressFromBech32(buyer)
	priceSetName := k.PriceSetName(ctx)

	err := k.bankKeeper.SendCoinsFromAccountToModule(ctx, buyerAcc, k.feeCollectorName, sdk.NewCoins(priceSetName))
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInsufficientFunds, err.Error())
	}

	k.RemoveBearNames(ctx, bear.Name)
	bearName := types.BearNames{
		Name:   name,
		BearId: bearId,
	}
	k.SetBearNames(ctx, bearName)

	bear.Name = name
	k.SetBears(ctx, bear)

	return nil
}
