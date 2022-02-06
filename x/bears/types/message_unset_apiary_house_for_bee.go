package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgUnsetApiaryHouseForBee = "unset_apiary_house_for_bee"

var _ sdk.Msg = &MsgUnsetApiaryHouseForBee{}

func NewMsgUnsetApiaryHouseForBee(creator string, beeId uint64) *MsgUnsetApiaryHouseForBee {
	return &MsgUnsetApiaryHouseForBee{
		Creator: creator,
		BeeId:   beeId,
	}
}

func (msg *MsgUnsetApiaryHouseForBee) Route() string {
	return RouterKey
}

func (msg *MsgUnsetApiaryHouseForBee) Type() string {
	return TypeMsgUnsetApiaryHouseForBee
}

func (msg *MsgUnsetApiaryHouseForBee) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUnsetApiaryHouseForBee) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUnsetApiaryHouseForBee) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
