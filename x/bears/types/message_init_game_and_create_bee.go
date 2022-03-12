package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgInitGameAndCreateBee = "init_game_and_create_bee"

var _ sdk.Msg = &MsgInitGameAndCreateBee{}

func NewMsgInitGameAndCreateBee(creator string, receiver string, beeType string, beeName string) *MsgInitGameAndCreateBee {
	return &MsgInitGameAndCreateBee{
		Creator:  creator,
		Receiver: receiver,
		BeeType:  beeType,
		BeeName:  beeName,
	}
}

func (msg *MsgInitGameAndCreateBee) Route() string {
	return RouterKey
}

func (msg *MsgInitGameAndCreateBee) Type() string {
	return TypeMsgInitGameAndCreateBee
}

func (msg *MsgInitGameAndCreateBee) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgInitGameAndCreateBee) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgInitGameAndCreateBee) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}

	_, err = sdk.AccAddressFromBech32(msg.Receiver)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid receiver address (%s)", err)
	}

	return ValidateNameInput(msg.BeeName)
}
