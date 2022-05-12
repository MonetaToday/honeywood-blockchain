package keeper

import (
	"github.com/MonetaToday/HoneyWood/x/bears/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetParams get all parameters as types.Params
func (k Keeper) GetParams(ctx sdk.Context) types.Params {
	return types.NewParams(
		k.AirHistoryLength(ctx),
		k.BlocksPerHour(ctx),
		k.BurnRate(ctx),
		k.PriceSetName(ctx),
		k.FieldTypes(ctx),
		k.TreeTypes(ctx),
		k.DecorationTypes(ctx),
		k.ApiaryTypes(ctx),
		k.BeeTypes(ctx),
		k.MinNameLength(ctx),
		k.BearAirConsume(ctx),
	)
}

// SetParams set the params
func (k Keeper) SetParams(ctx sdk.Context, params types.Params) {
	k.paramstore.SetParamSet(ctx, &params)
}

// BurnRate returns the BurnRate param
func (k Keeper) BurnRate(ctx sdk.Context) (res sdk.Dec) {
	k.paramstore.Get(ctx, types.KeyBurnRate, &res)
	return
}

// AirHistoryLength returns the AirHistoryLength param
func (k Keeper) AirHistoryLength(ctx sdk.Context) (res uint64) {
	k.paramstore.Get(ctx, types.KeyAirHistoryLength, &res)
	return
}

// BlocksPerHour returns the BlocksPerHour param
func (k Keeper) BlocksPerHour(ctx sdk.Context) (res uint64) {
	k.paramstore.Get(ctx, types.KeyBlocksPerHour, &res)
	return
}

// PriceSetName returns the PriceSetName param
func (k Keeper) PriceSetName(ctx sdk.Context) (res sdk.Coins) {
	k.paramstore.Get(ctx, types.KeyPriceSetName, &res)
	return
}

// FieldTypes returns the FieldTypes param
func (k Keeper) FieldTypes(ctx sdk.Context) (res []types.FieldParams) {
	k.paramstore.Get(ctx, types.KeyFieldTypes, &res)
	return
}

// TreeTypes returns the TreeTypes param
func (k Keeper) TreeTypes(ctx sdk.Context) (res []types.TreeParams) {
	k.paramstore.Get(ctx, types.KeyTreeTypes, &res)
	return
}

// DecorationTypes returns the DecorationTypes param
func (k Keeper) DecorationTypes(ctx sdk.Context) (res []types.DecorationParams) {
	k.paramstore.Get(ctx, types.KeyDecorationTypes, &res)
	return
}

// ApiaryTypes returns the ApiaryTypes param
func (k Keeper) ApiaryTypes(ctx sdk.Context) (res []types.ApiaryParams) {
	k.paramstore.Get(ctx, types.KeyApiaryTypes, &res)
	return
}

// BeeTypes returns the BeeTypes param
func (k Keeper) BeeTypes(ctx sdk.Context) (res []types.BeeParams) {
	k.paramstore.Get(ctx, types.KeyBeeTypes, &res)
	return
}

// MinNameLength returns the MinNameLength param
func (k Keeper) MinNameLength(ctx sdk.Context) (res uint64) {
	k.paramstore.Get(ctx, types.KeyMinNameLength, &res)
	return
}

// BearAirConsume returns the BearAirConsume param
func (k Keeper) BearAirConsume(ctx sdk.Context) (res sdk.Dec) {
	k.paramstore.Get(ctx, types.KeyBearAirConsume, &res)
	return
}