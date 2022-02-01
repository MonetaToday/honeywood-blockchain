package types

import (
	"fmt"
	sdk "github.com/cosmos/cosmos-sdk/types"
	paramtypes "github.com/cosmos/cosmos-sdk/x/params/types"
	"gopkg.in/yaml.v2"
)

var _ paramtypes.ParamSet = (*Params)(nil)

var (
	KeyPriceSetName              = []byte("PriceSetName")
	DefaultPriceSetName sdk.Coin = sdk.NewCoin("honey", sdk.NewInt(100))
	MaxNameLength                = 100

	KeyPriceTile              = []byte("PriceTile")
	DefaultPriceTile sdk.Coin = sdk.NewCoin("honey", sdk.NewInt(100))

	KeyPriceTree              = []byte("PriceTree")
	DefaultPriceTree sdk.Coin = sdk.NewCoin("honey", sdk.NewInt(100))

	KeyRewardTree              = []byte("RewardTree")
	DefaultRewardTree sdk.Coin = sdk.NewCoin("cone", sdk.NewInt(100))
)

// NewParams creates a new Params instance
func NewParams(
	priceSetName sdk.Coin,
	priceTile sdk.Coin,
	priceTree sdk.Coin,
	rewardTree sdk.Coin,
) Params {
	return Params{
		PriceSetName:  priceSetName,
		PriceTile:  priceTile,
		PriceTree:  priceTree,
		RewardTree: rewardTree,
	}
}

// ParamSetPairs get the params.ParamSet
func (p *Params) ParamSetPairs() paramtypes.ParamSetPairs {
	return paramtypes.ParamSetPairs{
		paramtypes.NewParamSetPair(KeyPriceSetName, &p.PriceSetName, validatePrice),
		paramtypes.NewParamSetPair(KeyPriceTile, &p.PriceTile, validatePrice),
		paramtypes.NewParamSetPair(KeyPriceTree, &p.PriceTree, validatePrice),
		paramtypes.NewParamSetPair(KeyRewardTree, &p.RewardTree, validateRewardTree),
	}
}

// Validate validates the set of params
func (p Params) Validate() error {
	if err := validatePrice(p.PriceSetName); err != nil {
		return err
	}

	if err := validatePrice(p.PriceTile); err != nil {
		return err
	}

	if err := validatePrice(p.PriceTree); err != nil {
		return err
	}

	if err := validateRewardTree(p.RewardTree); err != nil {
		return err
	}
	
	return nil
}

// ParamKeyTable the param key table for launch module
func ParamKeyTable() paramtypes.KeyTable {
	return paramtypes.NewKeyTable(
		paramtypes.NewParamSetPair(KeyPriceSetName, sdk.Coin{}, validatePrice),
		paramtypes.NewParamSetPair(KeyPriceTile, sdk.Coin{}, validatePrice),
		paramtypes.NewParamSetPair(KeyPriceTree, sdk.Coin{}, validatePrice),
		paramtypes.NewParamSetPair(KeyRewardTree, sdk.Coin{}, validateRewardTree),
	)
}

// DefaultParams returns a default set of parameters
func DefaultParams() Params {
	return NewParams(DefaultPriceSetName, DefaultPriceTile, DefaultPriceTree, DefaultRewardTree)
}

// String implements the Stringer interface.
func (p Params) String() string {
	out, _ := yaml.Marshal(p)
	return string(out)
}

func validatePrice(i interface{}) error {
	v, ok := i.(sdk.Coin)
	if !ok {
		return fmt.Errorf("invalid parameter type: %T", i)
	}

	if !v.IsValid() {
		return fmt.Errorf("invalid price parameter: %s", v)
	}

	return nil
}

func validateRewardTree(i interface{}) error {
	v, ok := i.(sdk.Coin)
	if !ok {
		return fmt.Errorf("invalid parameter type: %T", i)
	}

	if !v.IsValid() {
		return fmt.Errorf("invalid reward_tree: %s", v)
	}

	return nil
}
