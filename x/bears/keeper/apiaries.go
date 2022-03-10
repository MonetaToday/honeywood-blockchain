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

	if !k.HasRightsToBearById(ctx, creator, bearId) {
		return nil, types.ErrAddressHasNoRights
	}

	if !k.HasRightsToField(ctx, creator, field) {
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
		HoneyFromPast: sdk.ZeroDec(),
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
	bear.Apiaries = append(bear.Apiaries, newApiaryId)
	k.SetBears(ctx, bear)

	return &newApiary, nil
}


// Create apiary on field for specific bear
func (k Keeper) DeleteApiary(ctx sdk.Context, beneficiary string, apiary types.Apiaries) error {
	field, fieldFound := k.GetFields(ctx, apiary.Position.FieldId)
	if fieldFound {
		field.Rows[apiary.Position.RowId].Columns[apiary.Position.ColumnId].Item = nil
		k.SetFields(ctx, field)
	}

	if apiary.BearOwner != nil {
		bear, bearFound := k.GetBears(ctx, apiary.BearOwner.Id)
		if bearFound {
			for index, id := range bear.Apiaries {
				if id == apiary.Id {
					bear.Apiaries = append(bear.Apiaries[:index], bear.Apiaries[index+1:]...)
					break
				}
			}
			k.SetBears(ctx, bear)
		}
	}

	beneficiaryAcc, _ := sdk.AccAddressFromBech32(beneficiary)
	k.bankKeeper.MintCoins(ctx, types.ModuleName, apiary.Params.DeleteReward)
	errSendFromModuleToAccount := k.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, beneficiaryAcc, apiary.Params.DeleteReward)
	if errSendFromModuleToAccount != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInsufficientFunds, errSendFromModuleToAccount.Error())
	}

	k.RemoveApiaries(ctx, apiary.Id)

	return nil
}

// Check if space is enough
func (k Keeper) HasEnoughSpaceInApiary(ctx sdk.Context, apiary types.Apiaries, bee types.Bees) bool {
	spaceAvailable := int64(apiary.Params.SpaceAvailable)
	if spaceAvailable-int64(apiary.SpaceOccupied)-int64(bee.Params.BodySize) >= 0 {
		return true
	}

	return false
}

// Get all current bees from apiary
func (k Keeper) GetAllCurrentBeesFromApiary(ctx sdk.Context, apiary types.Apiaries) []uint64 {
	lastInfoIndex := len(apiary.CycleHistory) - 1

	if lastInfoIndex == -1 {
		return []uint64{}
	}

	return apiary.CycleHistory[lastInfoIndex].Bees
}

// Calculate honey in apiary
func (k Keeper) _CalculateHoneyInApiary(ctx sdk.Context, apiary types.Apiaries) sdk.Dec {
	lastHeight := uint64(ctx.BlockHeight())
	airInfo, _ := k.GetAirInfo(ctx)

	loadedBees := make(map[uint64]types.Bees)
	honeyInApiary := apiary.HoneyFromPast
	blocksPerHour := int64(k.BlocksPerHour(ctx))

	calculateHoneyPower := func(apiaryCycleHistory types.CycleHistory, airCycleHistory types.AirHistory) sdk.Dec {
		honeyPower := sdk.ZeroDec()
		for _, beeId := range apiaryCycleHistory.Bees {
			if _, found := loadedBees[beeId]; !found {
				loadedBees[beeId], _ = k.GetBees(ctx, beeId)
			}

			beeHoneySpeed := loadedBees[beeId].Params.HoneyPerHour.QuoInt64(blocksPerHour)

			beeHoneyPower := airCycleHistory.Purity.Mul(
				beeHoneySpeed.Mul(
					sdk.OneDec().Add(
						airCycleHistory.Count.Sub(
							sdk.OneDec(),
						).Mul(
							loadedBees[beeId].Params.AirCountDependency,
						),
					),
				),
			)

			honeyPower = honeyPower.Add(beeHoneyPower)
		}
		return honeyPower
	}

	lastAirHistoryIndex := len(airInfo.History) - 1
	lastApiaryHistoryIndex := len(apiary.CycleHistory) - 1

	for honeyInApiary.LT(apiary.Params.MaxHoney) && lastAirHistoryIndex >= 0 && lastApiaryHistoryIndex >= 0 {
		lastAirHistoryHeight := airInfo.History[lastAirHistoryIndex].Height
		lastApiaryHistoryHeight := apiary.CycleHistory[lastApiaryHistoryIndex].Height

		lastHoneyPower := calculateHoneyPower(
			apiary.CycleHistory[lastApiaryHistoryIndex],
			airInfo.History[lastAirHistoryIndex],
		)

		countBlocks := uint64(0)
		if lastAirHistoryHeight >= lastApiaryHistoryHeight {
			countBlocks = lastHeight - lastAirHistoryHeight

			lastHeight = lastAirHistoryHeight
			lastAirHistoryIndex -= 1
		} else {
			countBlocks = lastHeight - lastApiaryHistoryHeight

			lastHeight = lastApiaryHistoryHeight
			lastApiaryHistoryIndex -= 1
		}

		honeyInApiary = honeyInApiary.Add(
			lastHoneyPower.MulInt64(
				int64(countBlocks),
			),
		)
	}

	if honeyInApiary.GTE(apiary.Params.MaxHoney) {
		return apiary.Params.MaxHoney
	}

	return honeyInApiary
}

// Collect honey from apiary
func (k Keeper) CollectHoneyFromApiary(ctx sdk.Context, creator string, apiary types.Apiaries) (*sdk.Coin, error) {
	honeyDenom := k.HoneyDenom(ctx)
	honeyInApiary, restHoneyInApiary := sdk.NewDecCoinFromDec(honeyDenom, k._CalculateHoneyInApiary(ctx, apiary)).TruncateDecimal()
	creatorAcc, _ := sdk.AccAddressFromBech32(creator)

	k.bankKeeper.MintCoins(ctx, types.ModuleName, sdk.NewCoins(honeyInApiary))
	errSendFromModuleToAccount := k.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, creatorAcc, sdk.NewCoins(honeyInApiary))
	if errSendFromModuleToAccount != nil {
		return nil, sdkerrors.Wrapf(sdkerrors.ErrInsufficientFunds, errSendFromModuleToAccount.Error())
	}

	// ResetCycleInApiary
	apiary.HoneyFromPast = restHoneyInApiary.Amount
	lastItemIndex := len(apiary.CycleHistory) - 1
	if lastItemIndex < 0 || len(apiary.CycleHistory[lastItemIndex].Bees) == 0 {
		apiary.CycleHistory = []types.CycleHistory{}
	} else {
		lastBeesSet := apiary.CycleHistory[lastItemIndex]
		lastBeesSet.Height = uint64(ctx.BlockHeight())
		apiary.CycleHistory = []types.CycleHistory{lastBeesSet}
	}

	k.SetApiaries(ctx, apiary)

	return &honeyInApiary, nil
}

// Collect honey and Clear apiary from bees
func (k Keeper) ClearApiaryFromBees(ctx sdk.Context, creator string, apiary types.Apiaries) error {
	bees := k.GetAllCurrentBeesFromApiary(ctx, apiary)
	if len(bees) == 0 {
		return types.ErrApiaryHasNoBees
	}

	for _, beeId := range bees {
		bee, _ := k.GetBees(ctx, beeId)
		bee.ApiaryHouse = nil
		k.SetBees(ctx, bee)
	}

	apiary.CycleHistory = append(apiary.CycleHistory, types.CycleHistory{
		Height: uint64(ctx.BlockHeight()),
		Bees:   []uint64{},
	})

	k.SetApiaries(ctx, apiary)

	return nil
}
