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
		Use:   "move-item-on-field [field-id] [old-row-id] [old-column-id] [new-row-id] [new-column-id]",
		Short: "Move an item on field",
		Args:  cobra.ExactArgs(5),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argFieldId, err := cast.ToUint64E(args[0])
			if err != nil {
				return err
			}
			argRowId, err := cast.ToUint64E(args[1])
			if err != nil {
				return err
			}
			argColumnId, err := cast.ToUint64E(args[2])
			if err != nil {
				return err
			}
			argNewRowId, err := cast.ToUint64E(args[3])
			if err != nil {
				return err
			}
			argNewColumnId, err := cast.ToUint64E(args[4])
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
				argRowId,
				argColumnId,
				argNewRowId,
				argNewColumnId,
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
