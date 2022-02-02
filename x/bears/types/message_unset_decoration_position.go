package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgUnsetDecorationPosition = "unset_decoration_position"

var _ sdk.Msg = &MsgUnsetDecorationPosition{}

func NewMsgUnsetDecorationPosition(creator string, decorationId uint64) *MsgUnsetDecorationPosition {
	return &MsgUnsetDecorationPosition{
		Creator:      creator,
		DecorationId: decorationId,
	}
}

func (msg *MsgUnsetDecorationPosition) Route() string {
	return RouterKey
}

func (msg *MsgUnsetDecorationPosition) Type() string {
	return TypeMsgUnsetDecorationPosition
}

func (msg *MsgUnsetDecorationPosition) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUnsetDecorationPosition) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUnsetDecorationPosition) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
