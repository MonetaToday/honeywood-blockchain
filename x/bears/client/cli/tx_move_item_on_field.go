package cli

import (
	"strconv"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdMoveItemOnField() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "move-item-on-field [field-id] [tile-id] [new-tile-id]",
		Short: "Move an item on field",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argFieldId, err := cast.ToUint64E(args[0])
			if err != nil {
				return err
			}
			argTileId, err := cast.ToUint64E(args[1])
			if err != nil {
				return err
			}
			argNewTileId, err := cast.ToUint64E(args[2])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgMoveItemOnField(
				clientCtx.GetFromAddress().String(),
				argFieldId,
				argTileId,
				argNewTileId,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
