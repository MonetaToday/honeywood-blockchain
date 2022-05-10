package types

import (
	"fmt"
	sdk "github.com/cosmos/cosmos-sdk/types"
	paramtypes "github.com/cosmos/cosmos-sdk/x/params/types"
	"gopkg.in/yaml.v2"
)

var _ paramtypes.ParamSet = (*Params)(nil)

var (
	KeyBlocksPerHour     = []byte("BlocksPerHour")
	DefaultBlocksPerHour = uint64(1)

	KeyAirHistoryLength     = []byte("AirHistoryLength")
	DefaultAirHistoryLength = uint64(100)

	KeyBurnRate        = []byte("BurnRate")
	DefaultBurnRate, _ = sdk.NewDecFromStr("0.5")

	KeyPriceSetName               = []byte("PriceSetName")
	DefaultPriceSetName sdk.Coins = sdk.NewCoins(sdk.NewCoin("uhoney", sdk.NewInt(100000000)))
	MaxNameLength                 = 100

	KeyMinNameLength     = []byte("MinNameLength")
	DefaultMinNameLength = uint64(5)

	KeyFieldTypes     = []byte("FieldTypes")
	DefaultFieldTypes = []FieldParams{}

	KeyTreeTypes     = []byte("TreeTypes")
	DefaultTreeTypes = []TreeParams{}

	KeyDecorationTypes     = []byte("DecorationTypes")
	DefaultDecorationTypes = []DecorationParams{}

	KeyApiaryTypes     = []byte("ApiaryTypes")
	DefaultApiaryTypes = []ApiaryParams{}

	KeyBeeTypes     = []byte("BeeTypes")
	DefaultBeeTypes = []BeeParams{}

	KeyHoneyDenom     = []byte("HoneyDenom")
	DefaultHoneyDenom = "uhoney"
)

// NewParams creates a new Params instance
func NewParams(
	airHistoryLength uint64,
	blocksPerHour uint64,
	burnRate sdk.Dec,
	priceSetName sdk.Coins,
	fieldTypes []FieldParams,
	treeTypes []TreeParams,
	decorationTypes []DecorationParams,
	apiaryTypes []ApiaryParams,
	beeTypes []BeeParams,
	honeyDenom string,
	minNameLength uint64,
) Params {
	return Params{
		AirHistoryLength: airHistoryLength,
		BlocksPerHour:    blocksPerHour,
		BurnRate:         burnRate,
		PriceSetName:     priceSetName,
		FieldTypes:       fieldTypes,
		TreeTypes:        treeTypes,
		DecorationTypes:  decorationTypes,
		ApiaryTypes:      apiaryTypes,
		BeeTypes:         beeTypes,
		HoneyDenom:       honeyDenom,
		MinNameLength: 		minNameLength,
	}
}

// ParamSetPairs get the params.ParamSet
func (p *Params) ParamSetPairs() paramtypes.ParamSetPairs {
	return paramtypes.ParamSetPairs{
		paramtypes.NewParamSetPair(KeyAirHistoryLength, &p.AirHistoryLength, validateAirHistoryLength),
		paramtypes.NewParamSetPair(KeyBlocksPerHour, &p.BlocksPerHour, validateBlocksPerHour),
		paramtypes.NewParamSetPair(KeyBurnRate, &p.BurnRate, validateBurnRate),
		paramtypes.NewParamSetPair(KeyPriceSetName, &p.PriceSetName, validateCoins),
		paramtypes.NewParamSetPair(KeyFieldTypes, &p.FieldTypes, validateFieldTypes),
		paramtypes.NewParamSetPair(KeyTreeTypes, &p.TreeTypes, validateTreeTypes),
		paramtypes.NewParamSetPair(KeyDecorationTypes, &p.DecorationTypes, validateDecorationTypes),
		paramtypes.NewParamSetPair(KeyApiaryTypes, &p.ApiaryTypes, validateApiaryTypes),
		paramtypes.NewParamSetPair(KeyBeeTypes, &p.BeeTypes, validateBeeTypes),
		paramtypes.NewParamSetPair(KeyHoneyDenom, &p.HoneyDenom, validateHoneyDenom),
		paramtypes.NewParamSetPair(KeyMinNameLength, &p.MinNameLength, validateMinNameLength),
	}
}

// Validate validates the set of params
func (p Params) Validate() error {
	if err := validateAirHistoryLength(p.AirHistoryLength); err != nil {
		return err
	}

	if err := validateBlocksPerHour(p.BlocksPerHour); err != nil {
		return err
	}

	if err := validateBurnRate(p.BurnRate); err != nil {
		return err
	}

	if err := validateCoins(p.PriceSetName); err != nil {
		return err
	}

	if err := validateFieldTypes(p.FieldTypes); err != nil {
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

	if err := validateHoneyDenom(p.HoneyDenom); err != nil {
		return err
	}

	if err := validateMinNameLength(p.MinNameLength); err != nil {
		return err
	}

	return nil
}

// ParamKeyTable the param key table for launch module
func ParamKeyTable() paramtypes.KeyTable {
	return paramtypes.NewKeyTable(
		paramtypes.NewParamSetPair(KeyAirHistoryLength, DefaultAirHistoryLength, validateAirHistoryLength),
		paramtypes.NewParamSetPair(KeyBlocksPerHour, DefaultBlocksPerHour, validateBlocksPerHour),
		paramtypes.NewParamSetPair(KeyBurnRate, sdk.Dec{}, validateBurnRate),
		paramtypes.NewParamSetPair(KeyPriceSetName, sdk.Coins{}, validateCoins),
		paramtypes.NewParamSetPair(KeyFieldTypes, []FieldParams{}, validateFieldTypes),
		paramtypes.NewParamSetPair(KeyTreeTypes, []TreeParams{}, validateTreeTypes),
		paramtypes.NewParamSetPair(KeyDecorationTypes, []DecorationParams{}, validateDecorationTypes),
		paramtypes.NewParamSetPair(KeyApiaryTypes, []ApiaryParams{}, validateApiaryTypes),
		paramtypes.NewParamSetPair(KeyBeeTypes, []BeeParams{}, validateBeeTypes),
		paramtypes.NewParamSetPair(KeyHoneyDenom, DefaultHoneyDenom, validateHoneyDenom),
		paramtypes.NewParamSetPair(KeyMinNameLength, DefaultMinNameLength, validateMinNameLength),
	)
}

// DefaultParams returns a default set of parameters
func DefaultParams() Params {
	return NewParams(
		DefaultAirHistoryLength,
		DefaultBlocksPerHour,
		DefaultBurnRate,
		DefaultPriceSetName,
		DefaultFieldTypes,
		DefaultTreeTypes,
		DefaultDecorationTypes,
		DefaultApiaryTypes,
		DefaultBeeTypes,
		DefaultHoneyDenom,
		DefaultMinNameLength,
	)
}

// String implements the Stringer interface.
func (p Params) String() string {
	out, _ := yaml.Marshal(p)
	return string(out)
}

func validateAirHistoryLength(i interface{}) error {
	v, ok := i.(uint64)
	if !ok {
		return fmt.Errorf("invalid parameter type: %T", i)
	}

	if v <= 0 {
		return fmt.Errorf("invalid AirHistoryLength: %d", v)
	}

	return nil
}

func validateBlocksPerHour(i interface{}) error {
	v, ok := i.(uint64)
	if !ok {
		return fmt.Errorf("invalid parameter type: %T", i)
	}

	if v <= 0 {
		return fmt.Errorf("invalid BlocksPerHour: %d", v)
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

func validateFieldTypes(i interface{}) error {
	v, ok := i.([]FieldParams)
	if !ok {
		return fmt.Errorf("invalid parameter type: %T", i)
	}

	for _, params := range v {
		if !params.PriceTile.IsValid() {
			return fmt.Errorf("invalid PriceTile parameter in FieldParams: %v", v)
		}
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
			return fmt.Errorf("invalid Price parameter in TreeParams: %v", v)
		}

		if !params.Reward.IsValid() {
			return fmt.Errorf("invalid Reward parameter in TreeParams: %v", v)
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

		if params.MaxHoney.LTE(sdk.ZeroDec()) {
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

func validateHoneyDenom(i interface{}) error {
	v, ok := i.(string)
	if !ok {
		return fmt.Errorf("invalid parameter type: %T", i)
	}

	return sdk.ValidateDenom(v)
}

func validateMinNameLength(i interface{}) error {
	v, ok := i.(uint64)
	if !ok {
		return fmt.Errorf("invalid parameter type: %T", i)
	}

	if v <= 0 {
		return fmt.Errorf("invalid MinNameLength: %d", v)
	}

	return nil
}