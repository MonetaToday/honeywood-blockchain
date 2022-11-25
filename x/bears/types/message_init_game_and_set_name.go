package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"regexp"
	"strings"
)

const TypeMsgInitGameAndSetName = "init_game_and_set_name"

var _ sdk.Msg = &MsgInitGameAndSetName{}

func ValidateNameInput(name string) error {
	if len(name) > MaxNameLength {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidRequest, "Name must not be greater than %d", MaxNameLength)
	}

	if len(name) == 0 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Name must not be empty")
	}

	if len(strings.TrimSpace(name)) < len(name) {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Name must not have any spaces around")
	}

	if !regexp.MustCompile(`^[a-zA-Z0-9]+( {1}[a-zA-Z0-9]+)*$`).MatchString(name) {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Name can only contain alphanumeric characters with a single space between them")
	}

	_, errName := sdk.AccAddressFromBech32(name)
	if errName == nil {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Name must not be like an address")
	}

	return nil
}

func NewMsgInitGameAndSetName(creator string, name string) *MsgInitGameAndSetName {
	return &MsgInitGameAndSetName{
		Creator: creator,
		Name:    name,
	}
}

func (msg *MsgInitGameAndSetName) Route() string {
	return RouterKey
}

func (msg *MsgInitGameAndSetName) Type() string {
	return TypeMsgInitGameAndSetName
}

func (msg *MsgInitGameAndSetName) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgInitGameAndSetName) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgInitGameAndSetName) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}

	return ValidateNameInput(msg.Name)
}
