package keeper

import (
	"github.com/MonetaToday/HoneyWood/x/bears/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetParams get all parameters as types.Params
func (k Keeper) GetParams(ctx sdk.Context) types.Params {
	return types.NewParams(
		k.SetNamePrice(ctx),
		k.OneGroundPrice(ctx),
	)
}

// SetParams set the params
func (k Keeper) SetParams(ctx sdk.Context, params types.Params) {
	k.paramstore.SetParamSet(ctx, &params)
}

// SetNamePrice returns the SetNamePrice param
func (k Keeper) SetNamePrice(ctx sdk.Context) (res sdk.Coin) {
	k.paramstore.Get(ctx, types.KeySetNamePrice, &res)
	return
}

// OneGroundPrice returns the OneGroundPrice param
func (k Keeper) OneGroundPrice(ctx sdk.Context) (res sdk.Coin) {
	k.paramstore.Get(ctx, types.KeyOneGroundPrice, &res)
	return
}
