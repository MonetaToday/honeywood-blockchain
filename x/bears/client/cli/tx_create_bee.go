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
		Use:   "create-bee [bear-id] [bee-type]",
		Short: "Create a bee",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argBearId, err := cast.ToUint64E(args[0])
			if err != nil {
				return err
			}
			argBeeType := args[1]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateBee(
				clientCtx.GetFromAddress().String(),
				argBearId,
				argBeeType,
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
