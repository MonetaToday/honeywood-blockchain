package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgInitGameAndCreateApiary = "init_game_and_create_apiary"

var _ sdk.Msg = &MsgInitGameAndCreateApiary{}

func NewMsgInitGameAndCreateApiary(creator string, receiver string, apiaryType string) *MsgInitGameAndCreateApiary {
	return &MsgInitGameAndCreateApiary{
		Creator:    creator,
		Receiver:   receiver,
		ApiaryType: apiaryType,
	}
}

func (msg *MsgInitGameAndCreateApiary) Route() string {
	return RouterKey
}

func (msg *MsgInitGameAndCreateApiary) Type() string {
	return TypeMsgInitGameAndCreateApiary
}

func (msg *MsgInitGameAndCreateApiary) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgInitGameAndCreateApiary) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgInitGameAndCreateApiary) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}

	_, err = sdk.AccAddressFromBech32(msg.Receiver)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid receiver address (%s)", err)
	}

	return nil
}
