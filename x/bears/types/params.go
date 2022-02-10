package types

import (
	"fmt"
	sdk "github.com/cosmos/cosmos-sdk/types"
	paramtypes "github.com/cosmos/cosmos-sdk/x/params/types"
	"gopkg.in/yaml.v2"
)

var _ paramtypes.ParamSet = (*Params)(nil)

var (
	KeyBlocksPerHour        = []byte("BlocksPerHour")
	DefaultBlocksPerHour = uint64(1)

	KeyBurnRate        = []byte("BurnRate")
	DefaultBurnRate, _ = sdk.NewDecFromStr("0.5")

	KeyPriceSetName               = []byte("PriceSetName")
	DefaultPriceSetName sdk.Coins = sdk.NewCoins(sdk.NewCoin("honey", sdk.NewInt(100)))
	MaxNameLength                 = 100

	KeyPriceTile               = []byte("PriceTile")
	DefaultPriceTile sdk.Coins = sdk.NewCoins(sdk.NewCoin("honey", sdk.NewInt(100)))

	KeyTreeTypes     = []byte("TreeTypes")
	DefaultTreeTypes = []TreeParams{}

	KeyDecorationTypes     = []byte("DecorationTypes")
	DefaultDecorationTypes = []DecorationParams{}

	KeyApiaryTypes     = []byte("ApiaryTypes")
	DefaultApiaryTypes = []ApiaryParams{}

	KeyBeeTypes     = []byte("BeeTypes")
	DefaultBeeTypes = []BeeParams{}
)

// NewParams creates a new Params instance
func NewParams(
	blocksPerHour uint64,
	burnRate sdk.Dec,
	priceSetName sdk.Coins,
	priceTile sdk.Coins,
	treeTypes []TreeParams,
	decorationTypes []DecorationParams,
	apiaryTypes []ApiaryParams,
	beeTypes []BeeParams,
) Params {
	return Params{
		BlocksPerHour: 	 blocksPerHour,
		BurnRate:        burnRate,
		PriceSetName:    priceSetName,
		PriceTile:       priceTile,
		TreeTypes:       treeTypes,
		DecorationTypes: decorationTypes,
		ApiaryTypes:     apiaryTypes,
		BeeTypes:        beeTypes,
	}
}

// ParamSetPairs get the params.ParamSet
func (p *Params) ParamSetPairs() paramtypes.ParamSetPairs {
	return paramtypes.ParamSetPairs{
		paramtypes.NewParamSetPair(KeyBlocksPerHour, &p.BlocksPerHour, validateBlocksPerHour),
		paramtypes.NewParamSetPair(KeyBurnRate, &p.BurnRate, validateBurnRate),
		paramtypes.NewParamSetPair(KeyPriceSetName, &p.PriceSetName, validateCoins),
		paramtypes.NewParamSetPair(KeyPriceTile, &p.PriceTile, validateCoins),
		paramtypes.NewParamSetPair(KeyTreeTypes, &p.TreeTypes, validateTreeTypes),
		paramtypes.NewParamSetPair(KeyDecorationTypes, &p.DecorationTypes, validateDecorationTypes),
		paramtypes.NewParamSetPair(KeyApiaryTypes, &p.ApiaryTypes, validateApiaryTypes),
		paramtypes.NewParamSetPair(KeyBeeTypes, &p.BeeTypes, validateBeeTypes),
	}
}

// Validate validates the set of params
func (p Params) Validate() error {
	if err := validateBlocksPerHour(p.BlocksPerHour); err != nil {
		return err
	}

	if err := validateBurnRate(p.BurnRate); err != nil {
		return err
	}

	if err := validateCoins(p.PriceSetName); err != nil {
		return err
	}

	if err := validateCoins(p.PriceTile); err != nil {
		return err
	}

	if err := validateTreeTypes(p.TreeTypes); err != nil {
		return err
	}

	if err := validateDecorationTypes(p.DecorationTypes); err != nil {
		return err
	}

	if err := validateApiaryTypes(p.ApiaryTypes); err != nil {
		return err
	}

	if err := validateBeeTypes(p.BeeTypes); err != nil {
		return err
	}

	return nil
}

// ParamKeyTable the param key table for launch module
func ParamKeyTable() paramtypes.KeyTable {
	return paramtypes.NewKeyTable(
		paramtypes.NewParamSetPair(KeyBlocksPerHour, DefaultBlocksPerHour, validateBlocksPerHour),
		paramtypes.NewParamSetPair(KeyBurnRate, sdk.Dec{}, validateBurnRate),
		paramtypes.NewParamSetPair(KeyPriceSetName, sdk.Coins{}, validateCoins),
		paramtypes.NewParamSetPair(KeyPriceTile, sdk.Coins{}, validateCoins),
		paramtypes.NewParamSetPair(KeyTreeTypes, []TreeParams{}, validateTreeTypes),
		paramtypes.NewParamSetPair(KeyDecorationTypes, []DecorationParams{}, validateDecorationTypes),
		paramtypes.NewParamSetPair(KeyApiaryTypes, []ApiaryParams{}, validateApiaryTypes),
		paramtypes.NewParamSetPair(KeyBeeTypes, []BeeParams{}, validateBeeTypes),
	)
}

// DefaultParams returns a default set of parameters
func DefaultParams() Params {
	return NewParams(
		DefaultBlocksPerHour,
		DefaultBurnRate,
		DefaultPriceSetName,
		DefaultPriceTile,
		DefaultTreeTypes,
		DefaultDecorationTypes,
		DefaultApiaryTypes,
		DefaultBeeTypes,
	)
}

// String implements the Stringer interface.
func (p Params) String() string {
	out, _ := yaml.Marshal(p)
	return string(out)
}

func validateBlocksPerHour(i interface{}) error {
	v, ok := i.(uint64)
	if !ok {
		return fmt.Errorf("invalid parameter type: %T", i)
	}

	if v <= 0 {
		return fmt.Errorf("invalid BlocksPerHour: %s", v)
	}

	return nil
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

func validateTreeTypes(i interface{}) error {
	v, ok := i.([]TreeParams)
	if !ok {
		return fmt.Errorf("invalid parameter type: %T", i)
	}

	for _, params := range v {
		if !params.Price.IsValid() {
			return fmt.Errorf("invalid coins parameter in TreeParams: %v", v)
		}

		if !params.Reward.IsValid() {
			return fmt.Errorf("invalid coins parameter in TreeParams: %v", v)
		}
	}

	return nil
}

func validateDecorationTypes(i interface{}) error {
	v, ok := i.([]DecorationParams)
	if !ok {
		return fmt.Errorf("invalid parameter type: %T", i)
	}

	for _, params := range v {
		if !params.Price.IsValid() {
			return fmt.Errorf("invalid coins parameter in DecorationParams: %v", v)
		}
	}

	return nil
}

func validateApiaryTypes(i interface{}) error {
	v, ok := i.([]ApiaryParams)
	if !ok {
		return fmt.Errorf("invalid parameter type: %T", i)
	}

	for _, params := range v {
		if !params.Price.IsValid() {
			return fmt.Errorf("invalid coins parameter in ApiaryParams: %v", v)
		}

		if params.SpaceAvailable <= 0 {
			return fmt.Errorf("invalid MaxCountBees parameter in ApiaryParams: %v", v)
		}

		if params.MaxHoney <= 0 {
			return fmt.Errorf("invalid MaxCountHoney parameter in ApiaryParams: %v", v)
		}
	}

	return nil
}

func validateBeeTypes(i interface{}) error {
	v, ok := i.([]BeeParams)
	if !ok {
		return fmt.Errorf("invalid parameter type: %T", i)
	}

	for _, params := range v {
		if !params.Price.IsValid() {
			return fmt.Errorf("invalid coins parameter in BeeParams: %v", v)
		}

		if params.BodySize <= 0 {
			return fmt.Errorf("invalid Size parameter in BeeParams: %v", v)
		}
	}

	return nil
}
