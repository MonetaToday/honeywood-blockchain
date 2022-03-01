package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgCreateDecoration = "create_decoration"

var _ sdk.Msg = &MsgCreateDecoration{}

func NewMsgCreateDecoration(creator string, bearId uint64, decorationType string) *MsgCreateDecoration {
	return &MsgCreateDecoration{
		Creator:        creator,
		BearId:         bearId,
		DecorationType: decorationType,
	}
}

func (msg *MsgCreateDecoration) Route() string {
	return RouterKey
}

func (msg *MsgCreateDecoration) Type() string {
	return TypeMsgCreateDecoration
}

func (msg *MsgCreateDecoration) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateDecoration) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateDecoration) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}

	return nil
}
