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

func CmdSetDecorationPosition() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "set-decoration-position [decoration-id] [field-id] [row-id] [column-id]",
		Short: "Set decoration on field",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argDecorationId, err := cast.ToUint64E(args[0])
			if err != nil {
				return err
			}
			argFieldId, err := cast.ToUint64E(args[1])
			if err != nil {
				return err
			}
			argRowId, err := cast.ToUint64E(args[2])
			if err != nil {
				return err
			}
			argColumnId, err := cast.ToUint64E(args[3])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgSetDecorationPosition(
				clientCtx.GetFromAddress().String(),
				argDecorationId,
				argFieldId,
				argRowId,
				argColumnId,
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
