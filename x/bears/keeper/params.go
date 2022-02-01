package keeper

import (
	"github.com/MonetaToday/HoneyWood/x/bears/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetParams get all parameters as types.Params
func (k Keeper) GetParams(ctx sdk.Context) types.Params {
	return types.NewParams(
		k.PriceSetName(ctx),
		k.PriceTile(ctx),
		k.PriceTree(ctx),
		k.RewardTree(ctx),
	)
}

// SetParams set the params
func (k Keeper) SetParams(ctx sdk.Context, params types.Params) {
	k.paramstore.SetParamSet(ctx, &params)
}

// PriceSetName returns the PriceSetName param
func (k Keeper) PriceSetName(ctx sdk.Context) (res sdk.Coin) {
	k.paramstore.Get(ctx, types.KeyPriceSetName, &res)
	return
}

// PriceTile returns the PriceTile param
func (k Keeper) PriceTile(ctx sdk.Context) (res sdk.Coin) {
	k.paramstore.Get(ctx, types.KeyPriceTile, &res)
	return
}

// PriceTree returns the PriceTree param
func (k Keeper) PriceTree(ctx sdk.Context) (res sdk.Coin) {
	k.paramstore.Get(ctx, types.KeyPriceTree, &res)
	return
}

// RewardTree returns the RewardTree param
func (k Keeper) RewardTree(ctx sdk.Context) (res sdk.Coin) {
	k.paramstore.Get(ctx, types.KeyRewardTree, &res)
	return
}
