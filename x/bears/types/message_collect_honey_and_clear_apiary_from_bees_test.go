package types

import (
	"testing"

	"github.com/MonetaToday/HoneyWood/testutil/sample"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"
)

func TestMsgCollectHoneyAndClearApiaryFromBees_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgCollectHoneyAndClearApiaryFromBees
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgCollectHoneyAndClearApiaryFromBees{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgCollectHoneyAndClearApiaryFromBees{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}
