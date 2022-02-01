package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgInitGameAndCreateTree = "init_game_and_create_tree"

var _ sdk.Msg = &MsgInitGameAndCreateTree{}

func NewMsgInitGameAndCreateTree(creator string, treeType string) *MsgInitGameAndCreateTree {
	return &MsgInitGameAndCreateTree{
		Creator:  creator,
		TreeType: treeType,
	}
}

func (msg *MsgInitGameAndCreateTree) Route() string {
	return RouterKey
}

func (msg *MsgInitGameAndCreateTree) Type() string {
	return TypeMsgInitGameAndCreateTree
}

func (msg *MsgInitGameAndCreateTree) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgInitGameAndCreateTree) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgInitGameAndCreateTree) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}

	if _, ok := Trees_TreeTypes_value[msg.TreeType]; !ok {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Tree type must be in enum")
	}

	return nil
}
