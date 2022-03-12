package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgCreateApiary = "create_apiary"

var _ sdk.Msg = &MsgCreateApiary{}

func NewMsgCreateApiary(creator string, receiver string, bearId uint64, fieldId uint64, rowId uint64, columnId uint64, apiaryType string) *MsgCreateApiary {
	return &MsgCreateApiary{
		Creator:    creator,
		Receiver:   receiver,
		BearId:     bearId,
		FieldId:    fieldId,
		RowId:      rowId,
		ColumnId:   columnId,
		ApiaryType: apiaryType,
	}
}

func (msg *MsgCreateApiary) Route() string {
	return RouterKey
}

func (msg *MsgCreateApiary) Type() string {
	return TypeMsgCreateApiary
}

func (msg *MsgCreateApiary) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateApiary) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateApiary) ValidateBasic() error {
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
