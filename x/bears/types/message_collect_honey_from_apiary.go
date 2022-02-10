package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgCollectHoneyFromApiary = "collect_honey_from_apiary"

var _ sdk.Msg = &MsgCollectHoneyFromApiary{}

func NewMsgCollectHoneyFromApiary(creator string, apiaryId uint64) *MsgCollectHoneyFromApiary {
	return &MsgCollectHoneyFromApiary{
		Creator:  creator,
		ApiaryId: apiaryId,
	}
}

func (msg *MsgCollectHoneyFromApiary) Route() string {
	return RouterKey
}

func (msg *MsgCollectHoneyFromApiary) Type() string {
	return TypeMsgCollectHoneyFromApiary
}

func (msg *MsgCollectHoneyFromApiary) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCollectHoneyFromApiary) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCollectHoneyFromApiary) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
