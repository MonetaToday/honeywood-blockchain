package keeper

import (
	"github.com/MonetaToday/HoneyWood/x/bears/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetParams get all parameters as types.Params
func (k Keeper) GetParams(ctx sdk.Context) types.Params {
	return types.NewParams(
		k.BurnRate(ctx),
		k.PriceSetName(ctx),
		k.PriceTile(ctx),
		k.PriceTree(ctx),
		k.RewardTree(ctx),
		k.DecorationTypes(ctx),
		k.ApiaryTypes(ctx),
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

// PriceSetName returns the PriceSetName param
func (k Keeper) PriceSetName(ctx sdk.Context) (res sdk.Coins) {
	k.paramstore.Get(ctx, types.KeyPriceSetName, &res)
	return
}

// PriceTile returns the PriceTile param
func (k Keeper) PriceTile(ctx sdk.Context) (res sdk.Coins) {
	k.paramstore.Get(ctx, types.KeyPriceTile, &res)
	return
}

// PriceTree returns the PriceTree param
func (k Keeper) PriceTree(ctx sdk.Context) (res sdk.Coins) {
	k.paramstore.Get(ctx, types.KeyPriceTree, &res)
	return
}

// RewardTree returns the RewardTree param
func (k Keeper) RewardTree(ctx sdk.Context) (res sdk.Coins) {
	k.paramstore.Get(ctx, types.KeyRewardTree, &res)
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

