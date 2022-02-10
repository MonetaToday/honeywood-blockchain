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

func (k Keeper) GetApiaryParams(ctx sdk.Context, apiaryType string) (*types.ApiaryParams, bool) {
	apiaryTypes := k.ApiaryTypes(ctx)
	for _, params := range apiaryTypes {
		if params.ApiaryType == apiaryType {
			return &params, true
		}
	}

	return nil, false
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

	apiaryParams, _ := k.GetApiaryParams(ctx, apiaryType)
	if apiaryParams == nil {
		return nil, types.ErrApiaryTypeIsNotDefined
	}

	creatorAcc, _ := sdk.AccAddressFromBech32(creator)
	err := k.bankKeeper.SendCoinsFromAccountToModule(ctx, creatorAcc, k.feeCollectorName, apiaryParams.Price)
	if err != nil {
		return nil, sdkerrors.Wrapf(sdkerrors.ErrInsufficientFunds, err.Error())
	}

	errBurn := k.BurnCoinsByBurnRate(ctx, k.feeCollectorName, apiaryParams.Price)
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
		Params:        apiaryParams,
		CycleHistory:  []types.CycleHistory{},
		SpaceOccupied: 0,
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

// Check if space is enough
func (k Keeper) HasEnoughSpaceInApiary(ctx sdk.Context, apiary types.Apiaries, bee types.Bees) bool {
	spaceAvailable := int64(apiary.Params.SpaceAvailable)
	if spaceAvailable-int64(apiary.SpaceOccupied)-int64(bee.Params.BodySize) >= 0 {
		return true
	}

	return false
}

// Calculate honey in apiary
func (k Keeper) _CalculateHoneyInApiary(ctx sdk.Context, apiary types.Apiaries) sdk.Dec {
	bees := make(map[uint64]types.Bees)
	honeyInApiary := sdk.ZeroDec()
	maxHoney := sdk.NewDec(int64(apiary.Params.MaxHoney))
	blocksPerHour := int64(k.BlocksPerHour(ctx))

	previousStepHeight := uint64(0)
	previousStepHoneyPerBlock := sdk.ZeroDec()
	for stepIndex, step := range apiary.CycleHistory {
		stepHoneyPerBlock := sdk.ZeroDec()
		// TODO
		oxygenIndex, _ := sdk.NewDecFromStr("1")
		// Loading all bees and calculate step honeyPerBlock.
		for _, beeId := range step.Bees {
			if _, found := bees[beeId]; !found {
				bees[beeId], _ = k.GetBees(ctx, beeId)
			}

			beeHoneyPerBlock := bees[beeId].Params.HoneyPerHour.QuoInt64(blocksPerHour)

			// Hpb + Hpb*(O-1)*d
			beeHoneyPerBlock = beeHoneyPerBlock.Add(
				beeHoneyPerBlock.Mul(
					oxygenIndex.Sub(sdk.OneDec()),
				).Mul(bees[beeId].Params.OxygenDependency),
			)
			// It can not eat honey
			if beeHoneyPerBlock.LT(sdk.ZeroDec()) {
				beeHoneyPerBlock = sdk.ZeroDec()
			}

			stepHoneyPerBlock = stepHoneyPerBlock.Add(beeHoneyPerBlock)
		}

		if stepIndex > 0 {
			countBlocks := int64(step.Height - previousStepHeight)
			honeyInApiary = honeyInApiary.Add(previousStepHoneyPerBlock.MulInt64(countBlocks))
		}
		if stepIndex == len(apiary.CycleHistory) - 1 {
			countBlocks := int64(ctx.BlockHeight()) - int64(step.Height)
			honeyInApiary = honeyInApiary.Add(stepHoneyPerBlock.MulInt64(countBlocks))
		}

		if honeyInApiary.GTE(maxHoney) {
			return maxHoney
		}

		previousStepHoneyPerBlock = stepHoneyPerBlock
		previousStepHeight = step.Height
	}

	return honeyInApiary
}