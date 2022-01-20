package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgInitGameAndExtend = "init_game_and_extend"

var _ sdk.Msg = &MsgInitGameAndExtend{}

func NewMsgInitGameAndExtend(creator string) *MsgInitGameAndExtend {
	return &MsgInitGameAndExtend{
		Creator: creator,
	}
}

func (msg *MsgInitGameAndExtend) Route() string {
	return RouterKey
}

func (msg *MsgInitGameAndExtend) Type() string {
	return TypeMsgInitGameAndExtend
}

func (msg *MsgInitGameAndExtend) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgInitGameAndExtend) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgInitGameAndExtend) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
