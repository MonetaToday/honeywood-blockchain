package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgInitGameAndCreateDecoration = "init_game_and_create_decoration"

var _ sdk.Msg = &MsgInitGameAndCreateDecoration{}

func NewMsgInitGameAndCreateDecoration(creator string, decorationType string) *MsgInitGameAndCreateDecoration {
	return &MsgInitGameAndCreateDecoration{
		Creator:        creator,
		DecorationType: decorationType,
	}
}

func (msg *MsgInitGameAndCreateDecoration) Route() string {
	return RouterKey
}

func (msg *MsgInitGameAndCreateDecoration) Type() string {
	return TypeMsgInitGameAndCreateDecoration
}

func (msg *MsgInitGameAndCreateDecoration) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgInitGameAndCreateDecoration) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgInitGameAndCreateDecoration) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}

	return nil
}
