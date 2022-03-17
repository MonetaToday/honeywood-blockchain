package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgInitGameAndExtend = "init_game_and_extend"

var _ sdk.Msg = &MsgInitGameAndExtendField{}

func NewMsgInitGameAndExtend(creator string, receiver string) *MsgInitGameAndExtendField {
	return &MsgInitGameAndExtendField{
		Creator:  creator,
		Receiver: receiver,
	}
}

func (msg *MsgInitGameAndExtendField) Route() string {
	return RouterKey
}

func (msg *MsgInitGameAndExtendField) Type() string {
	return TypeMsgInitGameAndExtend
}

func (msg *MsgInitGameAndExtendField) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgInitGameAndExtendField) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgInitGameAndExtendField) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}

	_, err = sdk.AccAddressFromBech32(msg.Receiver)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid receiver address (%s)", err)
	}

	return nil
}
