package keeper

import (
	"encoding/binary"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// GetBeesCount get the total number of bees
func (k Keeper) GetBeesCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.BeesCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetBeesCount set the total number of bees
func (k Keeper) SetBeesCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.BeesCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendBees appends a bees in the store with a new id and update the count
func (k Keeper) AppendBees(
	ctx sdk.Context,
	bees types.Bees,
) uint64 {
	// Create the bees
	count := k.GetBeesCount(ctx)

	// Set the ID of the appended value
	bees.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BeesKey))
	appendedValue := k.cdc.MustMarshal(&bees)
	store.Set(GetBeesIDBytes(bees.Id), appendedValue)

	// Update bees count
	k.SetBeesCount(ctx, count+1)

	airConsume := k.GetTotalAirConsume(ctx).Add(bees.Params.AirConsume)
	k.SetTotalAirConsume(ctx, airConsume)

	return count
}

// SetBees set a specific bees in the store
func (k Keeper) SetBees(ctx sdk.Context, bees types.Bees) {
	oldBee, found := k.GetBees(ctx, bees.Id)
	if found {
		airConsume := k.GetTotalAirConsume(ctx).Sub(oldBee.Params.AirConsume).Add(bees.Params.AirConsume)
		k.SetTotalAirConsume(ctx, airConsume)
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BeesKey))
	b := k.cdc.MustMarshal(&bees)
	store.Set(GetBeesIDBytes(bees.Id), b)
}

// GetBees returns a bees from its id
func (k Keeper) GetBees(ctx sdk.Context, id uint64) (val types.Bees, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BeesKey))
	b := store.Get(GetBeesIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveBees removes a bees from the store
func (k Keeper) RemoveBees(ctx sdk.Context, id uint64) {
	bee, found := k.GetBees(ctx, id)
	if found {
		airConsume := k.GetTotalAirConsume(ctx)
		k.SetTotalAirConsume(ctx, airConsume.Sub(bee.Params.AirConsume))
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BeesKey))
	store.Delete(GetBeesIDBytes(id))
}

// GetAllBees returns all bees
func (k Keeper) GetAllBees(ctx sdk.Context) (list []types.Bees) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BeesKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Bees
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetBeesIDBytes returns the byte representation of the ID
func GetBeesIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetBeesIDFromBytes returns ID in uint64 format from a byte array
func GetBeesIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}

func (k Keeper) GetBeeParams(ctx sdk.Context, beeType string) (*types.BeeParams, bool) {
	beeTypes := k.BeeTypes(ctx)
	for _, params := range beeTypes {
		if params.BeeType == beeType {
			return &params, true
		}
	}

	return nil, false
}

// Check if bee is in apiary
func (k Keeper) IsBeeInApiaryHouse(ctx sdk.Context, apiary types.Apiaries, bee types.Bees) bool {
	lastInfoIndex := len(apiary.CycleHistory) - 1

	if lastInfoIndex == -1 {
		return false
	}

	for _, id := range apiary.CycleHistory[lastInfoIndex].Bees {
		if id == bee.Id {
			return true
		}
	}

	return false
}

// GetApiaryWithAddedBee
func (k Keeper) GetApiaryWithAddedBee(ctx sdk.Context, apiary types.Apiaries, bee types.Bees) (types.Apiaries, uint64) {
	lastInfoIndex := len(apiary.CycleHistory) - 1
	newBees := []uint64{}
	if lastInfoIndex >= 0 {
		newBees = append(apiary.CycleHistory[lastInfoIndex].Bees, bee.Id)
	} else {
		newBees = []uint64{bee.Id}
	}
	apiary.CycleHistory = append(apiary.CycleHistory, types.CycleHistory{
		Height: uint64(ctx.BlockHeight()),
		Bees:   newBees,
	})
	apiary.SpaceOccupied = apiary.SpaceOccupied + bee.Params.BodySize

	return apiary, uint64(len(newBees))
}

// GetApiaryWithRemovedBee
func (k Keeper) GetApiaryWithRemovedBee(ctx sdk.Context, apiary types.Apiaries, bee types.Bees) (types.Apiaries, uint64) {
	lastInfoIndex := len(apiary.CycleHistory) - 1
	newBees := []uint64{}
	if lastInfoIndex >= 0 {
		for index, id := range apiary.CycleHistory[lastInfoIndex].Bees {
			if id == bee.Id {
				newBees = append(apiary.CycleHistory[lastInfoIndex].Bees[:index], apiary.CycleHistory[lastInfoIndex].Bees[index+1:]...)
			}
		}
	} else {
		newBees = []uint64{}
	}
	apiary.CycleHistory = append(apiary.CycleHistory, types.CycleHistory{
		Height: uint64(ctx.BlockHeight()),
		Bees:   newBees,
	})
	apiary.SpaceOccupied = apiary.SpaceOccupied - bee.Params.BodySize

	return apiary, uint64(len(newBees))
}

// create bee for specific bear
func (k Keeper) CreateBee(ctx sdk.Context, creator string, bearId uint64, beeType string, beeName string) (*types.Bees, error) {
	bear, bearFound := k.GetBears(ctx, bearId)
	if !bearFound {
		return nil, types.ErrBearIsNotExisted
	}

	if !k.HasRightsToBear(ctx, creator, bear) {
		return nil, types.ErrAddressHasNoRight
	}

	beeParams, _ := k.GetBeeParams(ctx, beeType)
	if beeParams == nil {
		return nil, types.ErrBeeTypeIsNotDefined
	}

	creatorAcc, _ := sdk.AccAddressFromBech32(creator)
	err := k.bankKeeper.SendCoinsFromAccountToModule(ctx, creatorAcc, k.feeCollectorName, beeParams.Price)
	if err != nil {
		return nil, sdkerrors.Wrapf(sdkerrors.ErrInsufficientFunds, err.Error())
	}

	errBurn := k.BurnCoinsByBurnRate(ctx, k.feeCollectorName, beeParams.Price)
	if errBurn != nil {
		return nil, errBurn
	}

	newBee := types.Bees{
		Name:      beeName,
		BearOwner: &types.BearOwner{Id: bearId},
		Params:    beeParams,
	}
	newBeeId := k.AppendBees(ctx, newBee)

	bear.Bees = append(bear.Bees, newBeeId)
	k.SetBears(ctx, bear)

	return &newBee, nil
}

// set apiary house for a bee
func (k Keeper) SetBeeInApiaryHouse(ctx sdk.Context, creator string, beeId uint64, apiaryId uint64) error {
	bee, beeFound := k.GetBees(ctx, beeId)
	if !beeFound {
		return types.ErrBeeIsNotExisted
	}
	if !k.HasRightsToBee(ctx, creator, bee) {
		return types.ErrAddressHasNoRight
	}
	apiary, apiaryFound := k.GetApiaries(ctx, apiaryId)
	if !apiaryFound {
		return types.ErrApiaryIsNotExisted
	}
	if !k.HasRightsToApiary(ctx, creator, apiary) {
		return types.ErrAddressHasNoRight
	}
	hasEnoughSpace := k.HasEnoughSpaceInApiary(ctx, apiary, bee)
	if !hasEnoughSpace {
		return types.ErrApiaryHasNoEnoughSpace
	}
	isBeeInApiaryHouse := k.IsBeeInApiaryHouse(ctx, apiary, bee)
	if isBeeInApiaryHouse {
		return types.ErrBeeIsInApiary
	}

	if bee.ApiaryHouse != nil && bee.ApiaryHouse.Id != apiary.Id {
		previousApiary, previousApiaryFound := k.GetApiaries(ctx, bee.ApiaryHouse.Id)
		if !previousApiaryFound {
			return types.ErrApiaryIsNotExisted
		}

		previousApiary, _ = k.GetApiaryWithRemovedBee(ctx, previousApiary, bee)
		k.SetApiaries(ctx, previousApiary)
	}

	bee.ApiaryHouse = &types.ApiaryHouse{
		Id: apiary.Id,
	}
	k.SetBees(ctx, bee)

	apiary, _ = k.GetApiaryWithAddedBee(ctx, apiary, bee)
	k.SetApiaries(ctx, apiary)

	return nil
}

// Unset apiary house for a bee
func (k Keeper) UnsetBeeInApiaryHouse(ctx sdk.Context, creator string, beeId uint64) error {
	bee, beeFound := k.GetBees(ctx, beeId)
	if !beeFound {
		return types.ErrBeeIsNotExisted
	}
	if bee.BearOwner == nil {
		return types.ErrAddressHasNoRight
	}
	if bee.ApiaryHouse == nil {
		return types.ErrBeeIsNotInApiary
	}
	if !k.HasRightsToBearById(ctx, creator, bee.BearOwner.Id) {
		return types.ErrAddressHasNoRight
	}

	apiary, apiaryFound := k.GetApiaries(ctx, bee.ApiaryHouse.Id)
	if !apiaryFound {
		return types.ErrApiaryIsNotExisted
	}
	apiary, _ = k.GetApiaryWithRemovedBee(ctx, apiary, bee)
	k.SetApiaries(ctx, apiary)

	bee.ApiaryHouse = nil
	k.SetBees(ctx, bee)

	return nil
}
