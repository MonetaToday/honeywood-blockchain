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

	KeyPriceSetName                = []byte("PriceSetName")
	DefaultPriceSetName sdk.Coins  = sdk.NewCoins(sdk.NewCoin("honey", sdk.NewInt(100)))
	MaxNameLength                  = 100

	KeyPriceTile              = []byte("PriceTile")
	DefaultPriceTile sdk.Coins = sdk.NewCoins(sdk.NewCoin("honey", sdk.NewInt(100)))

	KeyPriceTree              = []byte("PriceTree")
	DefaultPriceTree sdk.Coins = sdk.NewCoins(sdk.NewCoin("honey", sdk.NewInt(100)))

	KeyRewardTree              = []byte("RewardTree")
	DefaultRewardTree sdk.Coins = sdk.NewCoins(sdk.NewCoin("cone", sdk.NewInt(100)))

	KeyPriceDecorationFlowers              = []byte("PriceDecorationFlowers")
	DefaultPriceDecorationFlowers sdk.Coins = sdk.NewCoins(sdk.NewCoin("honey", sdk.NewInt(100)))

	KeyPriceDecorationFlag              = []byte("PriceDecorationFlag")
	DefaultPriceDecorationFlag sdk.Coins = sdk.NewCoins(sdk.NewCoin("honey", sdk.NewInt(150)))

	KeyPriceDecorationLamp              = []byte("PriceDecorationLamp")
	DefaultPriceDecorationLamp sdk.Coins = sdk.NewCoins(sdk.NewCoin("honey", sdk.NewInt(200)))

	KeyPriceDecorationGreenBee              = []byte("PriceDecorationGreenBee")
	DefaultPriceDecorationGreenBee sdk.Coins = sdk.NewCoins(sdk.NewCoin("honey", sdk.NewInt(500)))

	KeyPriceDecorationFountain              = []byte("PriceDecorationFountain")
	DefaultPriceDecorationFountain sdk.Coins = sdk.NewCoins(sdk.NewCoin("honey", sdk.NewInt(1000)))
)

// NewParams creates a new Params instance
func NewParams(
	burnRate sdk.Dec,
	priceSetName sdk.Coins,
	priceTile sdk.Coins,
	priceTree sdk.Coins,
	rewardTree sdk.Coins,
	priceDecorationFlowers sdk.Coins,
	priceDecorationFlag sdk.Coins,
	priceDecorationLamp sdk.Coins,
	priceDecorationGreenBee sdk.Coins,
	priceDecorationFountain sdk.Coins,
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
		paramtypes.NewParamSetPair(KeyPriceSetName, &p.PriceSetName, validateCoins),
		paramtypes.NewParamSetPair(KeyPriceTile, &p.PriceTile, validateCoins),
		paramtypes.NewParamSetPair(KeyPriceTree, &p.PriceTree, validateCoins),
		paramtypes.NewParamSetPair(KeyRewardTree, &p.RewardTree, validateCoins),
		paramtypes.NewParamSetPair(KeyPriceDecorationFlowers, &p.PriceDecorationFlowers, validateCoins),
		paramtypes.NewParamSetPair(KeyPriceDecorationFlag, &p.PriceDecorationFlag, validateCoins),
		paramtypes.NewParamSetPair(KeyPriceDecorationLamp, &p.PriceDecorationLamp, validateCoins),
		paramtypes.NewParamSetPair(KeyPriceDecorationGreenBee, &p.PriceDecorationGreenBee, validateCoins),
		paramtypes.NewParamSetPair(KeyPriceDecorationFountain, &p.PriceDecorationFountain, validateCoins),
	}
}

// Validate validates the set of params
func (p Params) Validate() error {
	if err := validateBurnRate(p.BurnRate); err != nil {
		return err
	}

	if err := validateCoins(p.PriceSetName); err != nil {
		return err
	}

	if err := validateCoins(p.PriceTile); err != nil {
		return err
	}

	if err := validateCoins(p.PriceTree); err != nil {
		return err
	}

	if err := validateCoins(p.RewardTree); err != nil {
		return err
	}

	if err := validateCoins(p.PriceDecorationFlowers); err != nil {
		return err
	}

	if err := validateCoins(p.PriceDecorationFlag); err != nil {
		return err
	}

	if err := validateCoins(p.PriceDecorationLamp); err != nil {
		return err
	}

	if err := validateCoins(p.PriceDecorationGreenBee); err != nil {
		return err
	}

	if err := validateCoins(p.PriceDecorationFountain); err != nil {
		return err
	}

	return nil
}

// ParamKeyTable the param key table for launch module
func ParamKeyTable() paramtypes.KeyTable {
	return paramtypes.NewKeyTable(
		paramtypes.NewParamSetPair(KeyBurnRate, sdk.Dec{}, validateBurnRate),
		paramtypes.NewParamSetPair(KeyPriceSetName, sdk.Coins{}, validateCoins),
		paramtypes.NewParamSetPair(KeyPriceTile, sdk.Coins{}, validateCoins),
		paramtypes.NewParamSetPair(KeyPriceTree, sdk.Coins{}, validateCoins),
		paramtypes.NewParamSetPair(KeyRewardTree, sdk.Coins{}, validateCoins),
		paramtypes.NewParamSetPair(KeyPriceDecorationFlowers, sdk.Coins{}, validateCoins),
		paramtypes.NewParamSetPair(KeyPriceDecorationFlag, sdk.Coins{}, validateCoins),
		paramtypes.NewParamSetPair(KeyPriceDecorationLamp, sdk.Coins{}, validateCoins),
		paramtypes.NewParamSetPair(KeyPriceDecorationGreenBee, sdk.Coins{}, validateCoins),
		paramtypes.NewParamSetPair(KeyPriceDecorationFountain, sdk.Coins{}, validateCoins),
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

func validateCoins(i interface{}) error {
	v, ok := i.(sdk.Coins)
	if !ok {
		return fmt.Errorf("invalid parameter type: %T", i)
	}

	if !v.IsValid() {
		return fmt.Errorf("invalid coins parameter: %s", v)
	}

	return nil
}
