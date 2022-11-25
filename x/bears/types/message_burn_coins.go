package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgBurnCoins = "burn_coins"

var _ sdk.Msg = &MsgBurnCoins{}

func NewMsgBurnCoins(creator string, coins sdk.Coins) *MsgBurnCoins {
	return &MsgBurnCoins{
		Creator: creator,
		Coins:   coins,
	}
}

func (msg *MsgBurnCoins) Route() string {
	return RouterKey
}

func (msg *MsgBurnCoins) Type() string {
	return TypeMsgBurnCoins
}

func (msg *MsgBurnCoins) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgBurnCoins) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgBurnCoins) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
