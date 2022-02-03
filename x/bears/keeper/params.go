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
		k.PriceDecorationFlowers(ctx),
		k.PriceDecorationFlag(ctx),
		k.PriceDecorationLamp(ctx),
		k.PriceDecorationGreenBee(ctx),
		k.PriceDecorationFountain(ctx),
		k.ApiaryBeeHouseParams(ctx),
		k.ApiaryApiaryParams(ctx),
		k.ApiaryAlvearyParams(ctx),
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

// PriceDecorationFlowers returns the PriceDecorationFlowers param
func (k Keeper) PriceDecorationFlowers(ctx sdk.Context) (res sdk.Coins) {
	k.paramstore.Get(ctx, types.KeyPriceDecorationFlowers, &res)
	return
}

// PriceDecorationFlag returns the PriceDecorationFlag param
func (k Keeper) PriceDecorationFlag(ctx sdk.Context) (res sdk.Coins) {
	k.paramstore.Get(ctx, types.KeyPriceDecorationFlag, &res)
	return
}

// PriceDecorationLamp returns the PriceDecorationLamp param
func (k Keeper) PriceDecorationLamp(ctx sdk.Context) (res sdk.Coins) {
	k.paramstore.Get(ctx, types.KeyPriceDecorationLamp, &res)
	return
}

// PriceDecorationGreenBee returns the PriceDecorationGreenBee param
func (k Keeper) PriceDecorationGreenBee(ctx sdk.Context) (res sdk.Coins) {
	k.paramstore.Get(ctx, types.KeyPriceDecorationGreenBee, &res)
	return
}

// PriceDecorationFountain returns the PriceDecorationFountain param
func (k Keeper) PriceDecorationFountain(ctx sdk.Context) (res sdk.Coins) {
	k.paramstore.Get(ctx, types.KeyPriceDecorationFountain, &res)
	return
}

// ApiaryBeeHouseParams returns the ApiaryBeeHouseParams param
func (k Keeper) ApiaryBeeHouseParams(ctx sdk.Context) (res types.ApiaryParams) {
	k.paramstore.Get(ctx, types.KeyApiaryBeeHouseParams, &res)
	return
}

// ApiaryApiaryParams returns the ApiaryApiaryParams param
func (k Keeper) ApiaryApiaryParams(ctx sdk.Context) (res types.ApiaryParams) {
	k.paramstore.Get(ctx, types.KeyApiaryApiaryParams, &res)
	return
}

// ApiaryAlvearyParams returns the ApiaryAlvearyParams param
func (k Keeper) ApiaryAlvearyParams(ctx sdk.Context) (res types.ApiaryParams) {
	k.paramstore.Get(ctx, types.KeyApiaryAlvearyParams, &res)
	return
}
