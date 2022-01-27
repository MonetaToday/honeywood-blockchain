package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgMoveItemOnPlace = "move_item_on_place"

var _ sdk.Msg = &MsgMoveItemOnPlace{}

func NewMsgMoveItemOnPlace(creator string, placeId uint64, groundId uint64, newGroundId uint64) *MsgMoveItemOnPlace {
	return &MsgMoveItemOnPlace{
		Creator:     creator,
		PlaceId:     placeId,
		GroundId:    groundId,
		NewGroundId: newGroundId,
	}
}

func (msg *MsgMoveItemOnPlace) Route() string {
	return RouterKey
}

func (msg *MsgMoveItemOnPlace) Type() string {
	return TypeMsgMoveItemOnPlace
}

func (msg *MsgMoveItemOnPlace) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgMoveItemOnPlace) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgMoveItemOnPlace) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
