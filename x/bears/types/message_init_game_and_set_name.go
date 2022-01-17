package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgInitGameAndSetName = "init_game_and_set_name"

var _ sdk.Msg = &MsgInitGameAndSetName{}

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

	_, errName := sdk.AccAddressFromBech32(msg.Name)
	if errName == nil {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Name must not be like an address")
	}

	return nil
}
