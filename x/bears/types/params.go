package types

import (
	"fmt"
	sdk "github.com/cosmos/cosmos-sdk/types"
	paramtypes "github.com/cosmos/cosmos-sdk/x/params/types"
	"gopkg.in/yaml.v2"
)

var _ paramtypes.ParamSet = (*Params)(nil)

var (
	KeySetNamePrice              = []byte("SetNamePrice")
	DefaultSetNamePrice sdk.Coin = sdk.NewCoin("honey", sdk.NewInt(100))
	MaxNameLength								 = 100
)

// NewParams creates a new Params instance
func NewParams(
	setNamePrice sdk.Coin,
) Params {
	return Params{
		SetNamePrice: setNamePrice,
	}
}

// ParamSetPairs get the params.ParamSet
func (p *Params) ParamSetPairs() paramtypes.ParamSetPairs {
	return paramtypes.ParamSetPairs{
		paramtypes.NewParamSetPair(KeySetNamePrice, &p.SetNamePrice, validateSetNamePrice),
	}
}

// Validate validates the set of params
func (p Params) Validate() error {
	if err := validateSetNamePrice(p.SetNamePrice); err != nil {
		return err
	}

	return nil
}

// ParamKeyTable the param key table for launch module
func ParamKeyTable() paramtypes.KeyTable {
	return paramtypes.NewKeyTable(
		paramtypes.NewParamSetPair(KeySetNamePrice, sdk.Coin{}, validateSetNamePrice),
	)
}

// DefaultParams returns a default set of parameters
func DefaultParams() Params {
	return NewParams(DefaultSetNamePrice)
}

// String implements the Stringer interface.
func (p Params) String() string {
	out, _ := yaml.Marshal(p)
	return string(out)
}

func validateSetNamePrice(i interface{}) error {
	v, ok := i.(sdk.Coin)
	if !ok {
		return fmt.Errorf("invalid parameter type: %T", i)
	}

	if !v.IsValid() {
		return fmt.Errorf("invalid set_name_price: %s", v)
	}

	return nil
}
