package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgExtendPlace = "extend_place"

var _ sdk.Msg = &MsgExtendPlace{}

func NewMsgExtendPlace(creator string, id uint64) *MsgExtendPlace {
	return &MsgExtendPlace{
		Creator: creator,
		Id:      id,
	}
}

func (msg *MsgExtendPlace) Route() string {
	return RouterKey
}

func (msg *MsgExtendPlace) Type() string {
	return TypeMsgExtendPlace
}

func (msg *MsgExtendPlace) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgExtendPlace) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgExtendPlace) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
