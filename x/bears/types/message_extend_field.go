package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgExtendField = "extend_field"

var _ sdk.Msg = &MsgExtendField{}

func NewMsgExtendField(creator string, id uint64) *MsgExtendField {
	return &MsgExtendField{
		Creator: creator,
		Id:      id,
	}
}

func (msg *MsgExtendField) Route() string {
	return RouterKey
}

func (msg *MsgExtendField) Type() string {
	return TypeMsgExtendField
}

func (msg *MsgExtendField) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgExtendField) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgExtendField) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
