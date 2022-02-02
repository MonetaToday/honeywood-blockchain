package types

import (
	"fmt"
	sdk "github.com/cosmos/cosmos-sdk/types"
	paramtypes "github.com/cosmos/cosmos-sdk/x/params/types"
	"gopkg.in/yaml.v2"
)

var _ paramtypes.ParamSet = (*Params)(nil)

var (
	KeyBurnRate        = []byte("BurnRate")
	DefaultBurnRate, _ = sdk.NewDecFromStr("0.5")

	KeyPriceSetName              = []byte("PriceSetName")
	DefaultPriceSetName sdk.Coin = sdk.NewCoin("honey", sdk.NewInt(100))
	MaxNameLength                = 100

	KeyPriceTile              = []byte("PriceTile")
	DefaultPriceTile sdk.Coin = sdk.NewCoin("honey", sdk.NewInt(100))

	KeyPriceTree              = []byte("PriceTree")
	DefaultPriceTree sdk.Coin = sdk.NewCoin("honey", sdk.NewInt(100))

	KeyRewardTree              = []byte("RewardTree")
	DefaultRewardTree sdk.Coin = sdk.NewCoin("cone", sdk.NewInt(100))

	KeyPriceDecorationFlowers              = []byte("PriceDecorationFlowers")
	DefaultPriceDecorationFlowers sdk.Coin = sdk.NewCoin("honey", sdk.NewInt(100))

	KeyPriceDecorationFlag              = []byte("PriceDecorationFlag")
	DefaultPriceDecorationFlag sdk.Coin = sdk.NewCoin("honey", sdk.NewInt(150))

	KeyPriceDecorationLamp              = []byte("PriceDecorationLamp")
	DefaultPriceDecorationLamp sdk.Coin = sdk.NewCoin("honey", sdk.NewInt(200))

	KeyPriceDecorationGreenBee              = []byte("PriceDecorationGreenBee")
	DefaultPriceDecorationGreenBee sdk.Coin = sdk.NewCoin("honey", sdk.NewInt(500))

	KeyPriceDecorationFountain              = []byte("PriceDecorationFountain")
	DefaultPriceDecorationFountain sdk.Coin = sdk.NewCoin("honey", sdk.NewInt(1000))
)

// NewParams creates a new Params instance
func NewParams(
	burnRate sdk.Dec,
	priceSetName sdk.Coin,
	priceTile sdk.Coin,
	priceTree sdk.Coin,
	rewardTree sdk.Coin,
	priceDecorationFlowers sdk.Coin,
	priceDecorationFlag sdk.Coin,
	priceDecorationLamp sdk.Coin,
	priceDecorationGreenBee sdk.Coin,
	priceDecorationFountain sdk.Coin,
) Params {
	return Params{
		BurnRate:            		 burnRate,
		PriceSetName:            priceSetName,
		PriceTile:               priceTile,
		PriceTree:               priceTree,
		RewardTree:              rewardTree,
		PriceDecorationFlowers:  priceDecorationFlowers,
		PriceDecorationFlag:     priceDecorationFlag,
		PriceDecorationLamp:     priceDecorationLamp,
		PriceDecorationGreenBee: priceDecorationGreenBee,
		PriceDecorationFountain: priceDecorationFountain,
	}
}

// ParamSetPairs get the params.ParamSet
func (p *Params) ParamSetPairs() paramtypes.ParamSetPairs {
	return paramtypes.ParamSetPairs{
		paramtypes.NewParamSetPair(KeyBurnRate, &p.BurnRate, validateBurnRate),
		paramtypes.NewParamSetPair(KeyPriceSetName, &p.PriceSetName, validatePrice),
		paramtypes.NewParamSetPair(KeyPriceTile, &p.PriceTile, validatePrice),
		paramtypes.NewParamSetPair(KeyPriceTree, &p.PriceTree, validatePrice),
		paramtypes.NewParamSetPair(KeyRewardTree, &p.RewardTree, validateRewardTree),
		paramtypes.NewParamSetPair(KeyPriceDecorationFlowers, &p.PriceDecorationFlowers, validatePrice),
		paramtypes.NewParamSetPair(KeyPriceDecorationFlag, &p.PriceDecorationFlag, validatePrice),
		paramtypes.NewParamSetPair(KeyPriceDecorationLamp, &p.PriceDecorationLamp, validatePrice),
		paramtypes.NewParamSetPair(KeyPriceDecorationGreenBee, &p.PriceDecorationGreenBee, validatePrice),
		paramtypes.NewParamSetPair(KeyPriceDecorationFountain, &p.PriceDecorationFountain, validatePrice),
	}
}

// Validate validates the set of params
func (p Params) Validate() error {
	if err := validateBurnRate(p.BurnRate); err != nil {
		return err
	}

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

	if err := validatePrice(p.PriceDecorationFlowers); err != nil {
		return err
	}

	if err := validatePrice(p.PriceDecorationFlag); err != nil {
		return err
	}

	if err := validatePrice(p.PriceDecorationLamp); err != nil {
		return err
	}

	if err := validatePrice(p.PriceDecorationGreenBee); err != nil {
		return err
	}

	if err := validatePrice(p.PriceDecorationFountain); err != nil {
		return err
	}

	return nil
}

// ParamKeyTable the param key table for launch module
func ParamKeyTable() paramtypes.KeyTable {
	return paramtypes.NewKeyTable(
		paramtypes.NewParamSetPair(KeyBurnRate, sdk.Dec{}, validateBurnRate),
		paramtypes.NewParamSetPair(KeyPriceSetName, sdk.Coin{}, validatePrice),
		paramtypes.NewParamSetPair(KeyPriceTile, sdk.Coin{}, validatePrice),
		paramtypes.NewParamSetPair(KeyPriceTree, sdk.Coin{}, validatePrice),
		paramtypes.NewParamSetPair(KeyRewardTree, sdk.Coin{}, validateRewardTree),
		paramtypes.NewParamSetPair(KeyPriceDecorationFlowers, sdk.Coin{}, validatePrice),
		paramtypes.NewParamSetPair(KeyPriceDecorationFlag, sdk.Coin{}, validatePrice),
		paramtypes.NewParamSetPair(KeyPriceDecorationLamp, sdk.Coin{}, validatePrice),
		paramtypes.NewParamSetPair(KeyPriceDecorationGreenBee, sdk.Coin{}, validatePrice),
		paramtypes.NewParamSetPair(KeyPriceDecorationFountain, sdk.Coin{}, validatePrice),
	)
}

// DefaultParams returns a default set of parameters
func DefaultParams() Params {
	return NewParams(
		DefaultBurnRate,
		DefaultPriceSetName,
		DefaultPriceTile,
		DefaultPriceTree,
		DefaultRewardTree,
		DefaultPriceDecorationFlowers,
		DefaultPriceDecorationFlag,
		DefaultPriceDecorationLamp,
		DefaultPriceDecorationGreenBee,
		DefaultPriceDecorationFountain,
	)
}

// String implements the Stringer interface.
func (p Params) String() string {
	out, _ := yaml.Marshal(p)
	return string(out)
}

func validateBurnRate(i interface{}) error {
	v, ok := i.(sdk.Dec)
	if !ok {
		return fmt.Errorf("invalid parameter type: %T", i)
	}

	if v.LT(sdk.ZeroDec()) {
		return fmt.Errorf("invalid BurnRate: %s", v)
	}

	return nil
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
