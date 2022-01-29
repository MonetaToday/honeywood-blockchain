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
	MaxNameLength                = 100

	KeyOneTilePrice              = []byte("OneTilePrice")
	DefaultOneTilePrice sdk.Coin = sdk.NewCoin("honey", sdk.NewInt(100))

	KeyOneTreePrice              = []byte("OneTreePrice")
	DefaultOneTreePrice sdk.Coin = sdk.NewCoin("honey", sdk.NewInt(100))

	KeyOneTreeReward              = []byte("OneTreeReward")
	DefaultOneTreeReward sdk.Coin = sdk.NewCoin("cone", sdk.NewInt(100))
)

// NewParams creates a new Params instance
func NewParams(
	setNamePrice sdk.Coin,
	oneTilePrice sdk.Coin,
	oneTreePrice sdk.Coin,
	oneTreeReward sdk.Coin,
) Params {
	return Params{
		SetNamePrice:   setNamePrice,
		OneTilePrice: oneTilePrice,
		OneTreePrice:   oneTreePrice,
		OneTreeReward:  oneTreeReward,
	}
}

// ParamSetPairs get the params.ParamSet
func (p *Params) ParamSetPairs() paramtypes.ParamSetPairs {
	return paramtypes.ParamSetPairs{
		paramtypes.NewParamSetPair(KeySetNamePrice, &p.SetNamePrice, validateSetNamePrice),
		paramtypes.NewParamSetPair(KeyOneTilePrice, &p.OneTilePrice, validateOneTilePrice),
		paramtypes.NewParamSetPair(KeyOneTreePrice, &p.OneTreePrice, validateOneTreePrice),
		paramtypes.NewParamSetPair(KeyOneTreeReward, &p.OneTreeReward, validateOneTreeReward),
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
		paramtypes.NewParamSetPair(KeyOneTilePrice, sdk.Coin{}, validateOneTilePrice),
		paramtypes.NewParamSetPair(KeyOneTreePrice, sdk.Coin{}, validateOneTreePrice),
		paramtypes.NewParamSetPair(KeyOneTreeReward, sdk.Coin{}, validateOneTreeReward),
	)
}

// DefaultParams returns a default set of parameters
func DefaultParams() Params {
	return NewParams(DefaultSetNamePrice, DefaultOneTilePrice, DefaultOneTreePrice, DefaultOneTreeReward)
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

func validateOneTilePrice(i interface{}) error {
	v, ok := i.(sdk.Coin)
	if !ok {
		return fmt.Errorf("invalid parameter type: %T", i)
	}

	if !v.IsValid() {
		return fmt.Errorf("invalid one_tile_price: %s", v)
	}

	return nil
}

func validateOneTreePrice(i interface{}) error {
	v, ok := i.(sdk.Coin)
	if !ok {
		return fmt.Errorf("invalid parameter type: %T", i)
	}

	if !v.IsValid() {
		return fmt.Errorf("invalid one_tree_price: %s", v)
	}

	return nil
}

func validateOneTreeReward(i interface{}) error {
	v, ok := i.(sdk.Coin)
	if !ok {
		return fmt.Errorf("invalid parameter type: %T", i)
	}

	if !v.IsValid() {
		return fmt.Errorf("invalid one_tree_reward: %s", v)
	}

	return nil
}
