package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgSetDecorationPosition = "set_decoration_position"

var _ sdk.Msg = &MsgSetDecorationPosition{}

func NewMsgSetDecorationPosition(creator string, decorationId uint64, fieldId uint64, rowId uint64, columnId uint64) *MsgSetDecorationPosition {
	return &MsgSetDecorationPosition{
		Creator:      creator,
		DecorationId: decorationId,
		FieldId:      fieldId,
		RowId:        rowId,
		ColumnId:     columnId,
	}
}

func (msg *MsgSetDecorationPosition) Route() string {
	return RouterKey
}

func (msg *MsgSetDecorationPosition) Type() string {
	return TypeMsgSetDecorationPosition
}

func (msg *MsgSetDecorationPosition) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgSetDecorationPosition) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSetDecorationPosition) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
