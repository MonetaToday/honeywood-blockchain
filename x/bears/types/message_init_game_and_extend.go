package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgInitGameAndExtend = "init_game_and_extend"

var _ sdk.Msg = &MsgInitGameAndExtendPlace{}

func NewMsgInitGameAndExtend(creator string) *MsgInitGameAndExtendPlace {
	return &MsgInitGameAndExtendPlace{
		Creator: creator,
	}
}

func (msg *MsgInitGameAndExtendPlace) Route() string {
	return RouterKey
}

func (msg *MsgInitGameAndExtendPlace) Type() string {
	return TypeMsgInitGameAndExtend
}

func (msg *MsgInitGameAndExtendPlace) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgInitGameAndExtendPlace) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgInitGameAndExtendPlace) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
