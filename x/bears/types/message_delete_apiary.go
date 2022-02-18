package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgDeleteApiary = "delete_apiary"

var _ sdk.Msg = &MsgDeleteApiary{}

func NewMsgDeleteApiary(creator string, apiaryId uint64) *MsgDeleteApiary {
	return &MsgDeleteApiary{
		Creator:  creator,
		ApiaryId: apiaryId,
	}
}

func (msg *MsgDeleteApiary) Route() string {
	return RouterKey
}

func (msg *MsgDeleteApiary) Type() string {
	return TypeMsgDeleteApiary
}

func (msg *MsgDeleteApiary) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteApiary) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteApiary) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
