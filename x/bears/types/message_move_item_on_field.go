package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgMoveItemOnField = "move_item_on_field"

var _ sdk.Msg = &MsgMoveItemOnField{}

func NewMsgMoveItemOnField(creator string, fieldId uint64, tileId uint64, newTileId uint64) *MsgMoveItemOnField {
	return &MsgMoveItemOnField{
		Creator:     creator,
		FieldId:     fieldId,
		TileId:    tileId,
		NewTileId: newTileId,
	}
}

func (msg *MsgMoveItemOnField) Route() string {
	return RouterKey
}

func (msg *MsgMoveItemOnField) Type() string {
	return TypeMsgMoveItemOnField
}

func (msg *MsgMoveItemOnField) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgMoveItemOnField) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgMoveItemOnField) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
