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

func CmdCreateBee() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-bee [receiver] [bear-id] [bee-type] [bee-name]",
		Short: "Create a bee",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argReceiver := args[0]
			argBearId, err := cast.ToUint64E(args[1])
			if err != nil {
				return err
			}
			argBeeType := args[2]
			argBeeName := args[3]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateBee(
				clientCtx.GetFromAddress().String(),
				argReceiver,
				argBearId,
				argBeeType,
				argBeeName,
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
