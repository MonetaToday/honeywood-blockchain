package keeper

import (
	"github.com/MonetaToday/HoneyWood/x/bears/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// Check rights to bear
func (k Keeper) HasRightsToBear(ctx sdk.Context, address string, bear types.Bears) bool {
	if bear.Owner == address {
		return true
	}

	return false
}

// Check rights to bear by ID
func (k Keeper) HasRightsToBearById(ctx sdk.Context, address string, bearId uint64) bool {
	bear, bearFound := k.GetBears(ctx, bearId)
	if !bearFound {
		return false
	}

	return k.HasRightsToBear(ctx, address, bear)
}

// Check rights to field
func (k Keeper) HasRightsToField(ctx sdk.Context, address string, field types.Fields) bool {
	if field.BearOwner == nil {
		return true
	}

	return k.HasRightsToBearById(ctx, address, field.BearOwner.Id)
}

// Check rights to field by ID
func (k Keeper) HasRightsToFieldById(ctx sdk.Context, address string, fieldId uint64) bool {
	field, fieldFound := k.GetFields(ctx, fieldId)
	if !fieldFound {
		return false
	}

	return k.HasRightsToField(ctx, address, field)
}

// Check rights to apiary
func (k Keeper) HasRightsToApiary(ctx sdk.Context, address string, apiary types.Apiaries) bool {
	if apiary.BearOwner == nil {
		return true
	}

	return k.HasRightsToBearById(ctx, address, apiary.BearOwner.Id)
}

// Check rights to bee
func (k Keeper) HasRightsToBee(ctx sdk.Context, address string, bee types.Bees) bool {
	if bee.BearOwner == nil {
		return false
	}

	return k.HasRightsToBearById(ctx, address, bee.BearOwner.Id)
}

// Check rights to decoration
func (k Keeper) HasRightsToDecoration(ctx sdk.Context, address string, decoration types.Decorations) bool {
	if decoration.BearOwner == nil {
		return false
	}

	return k.HasRightsToBearById(ctx, address, decoration.BearOwner.Id)
}
