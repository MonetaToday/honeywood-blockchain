package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgCollectHoneyAndClearApiaryFromBees = "collect_honey_and_clear_apiary_from_bees"

var _ sdk.Msg = &MsgCollectHoneyAndClearApiaryFromBees{}

func NewMsgCollectHoneyAndClearApiaryFromBees(creator string, apiaryId uint64) *MsgCollectHoneyAndClearApiaryFromBees {
	return &MsgCollectHoneyAndClearApiaryFromBees{
		Creator:  creator,
		ApiaryId: apiaryId,
	}
}

func (msg *MsgCollectHoneyAndClearApiaryFromBees) Route() string {
	return RouterKey
}

func (msg *MsgCollectHoneyAndClearApiaryFromBees) Type() string {
	return TypeMsgCollectHoneyAndClearApiaryFromBees
}

func (msg *MsgCollectHoneyAndClearApiaryFromBees) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCollectHoneyAndClearApiaryFromBees) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCollectHoneyAndClearApiaryFromBees) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
