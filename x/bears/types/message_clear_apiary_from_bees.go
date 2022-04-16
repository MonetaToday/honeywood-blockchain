package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgClearApiaryFromBees = "clear_apiary_from_bees"

var _ sdk.Msg = &MsgClearApiaryFromBees{}

func NewMsgClearApiaryFromBees(creator string, apiaryId uint64) *MsgClearApiaryFromBees {
	return &MsgClearApiaryFromBees{
		Creator:  creator,
		ApiaryId: apiaryId,
	}
}

func (msg *MsgClearApiaryFromBees) Route() string {
	return RouterKey
}

func (msg *MsgClearApiaryFromBees) Type() string {
	return TypeMsgClearApiaryFromBees
}

func (msg *MsgClearApiaryFromBees) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgClearApiaryFromBees) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgClearApiaryFromBees) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
