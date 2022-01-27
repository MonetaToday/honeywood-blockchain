package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgCreateTree = "create_tree"

var _ sdk.Msg = &MsgCreateTree{}

func NewMsgCreateTree(creator string, bearId uint64, placeId uint64, groundId uint64) *MsgCreateTree {
	return &MsgCreateTree{
		Creator:  creator,
		BearId: bearId,
		PlaceId:  placeId,
		GroundId: groundId,
	}
}

func (msg *MsgCreateTree) Route() string {
	return RouterKey
}

func (msg *MsgCreateTree) Type() string {
	return TypeMsgCreateTree
}

func (msg *MsgCreateTree) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateTree) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateTree) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
