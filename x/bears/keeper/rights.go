package keeper

import (
	"github.com/MonetaToday/HoneyWood/x/bears/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// Check rights to bear
func (k Keeper) HasRightsToBear(ctx sdk.Context, address string, bearId uint64) bool {
	addressBears, found := k.GetAddressBears(ctx, address)
	if !found {
		return false
	}

	for _, id := range addressBears.Bears {
		if bearId == id {
			return true
		}
	}

	return false
}

// Check rights to field
func (k Keeper) HasRightsToField(ctx sdk.Context, address string, field types.Fields) bool {
	if field.BearOwner == nil {
		return true
	}

	hasRights := k.HasRightsToBear(ctx, address, field.BearOwner.Id)
	if hasRights {
		return true
	}

	return false
}

// Check rights to field
func (k Keeper) HasRightsToApiary(ctx sdk.Context, address string, apiary types.Apiaries) bool {
	if apiary.BearOwner == nil {
		return true
	}

	hasRights := k.HasRightsToBear(ctx, address, apiary.BearOwner.Id)
	if hasRights {
		return true
	}

	return false
}
