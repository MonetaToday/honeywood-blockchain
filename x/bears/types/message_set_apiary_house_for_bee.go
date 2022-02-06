package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgSetApiaryHouseForBee = "set_apiary_house_for_bee"

var _ sdk.Msg = &MsgSetApiaryHouseForBee{}

func NewMsgSetApiaryHouseForBee(creator string, beeId uint64, apiaryId uint64) *MsgSetApiaryHouseForBee {
	return &MsgSetApiaryHouseForBee{
		Creator:  creator,
		BeeId:    beeId,
		ApiaryId: apiaryId,
	}
}

func (msg *MsgSetApiaryHouseForBee) Route() string {
	return RouterKey
}

func (msg *MsgSetApiaryHouseForBee) Type() string {
	return TypeMsgSetApiaryHouseForBee
}

func (msg *MsgSetApiaryHouseForBee) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgSetApiaryHouseForBee) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSetApiaryHouseForBee) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
