package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgCreateBee = "create_bee"

var _ sdk.Msg = &MsgCreateBee{}

func NewMsgCreateBee(creator string, bearId uint64, beeType string, beeName string) *MsgCreateBee {
	return &MsgCreateBee{
		Creator: creator,
		BearId:  bearId,
		BeeType: beeType,
		BeeName: beeName,
	}
}

func (msg *MsgCreateBee) Route() string {
	return RouterKey
}

func (msg *MsgCreateBee) Type() string {
	return TypeMsgCreateBee
}

func (msg *MsgCreateBee) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateBee) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateBee) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}

	return ValidateNameInput(msg.BeeName)
}
