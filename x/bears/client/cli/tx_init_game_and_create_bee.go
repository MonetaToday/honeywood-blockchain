package cli

import (
	"strconv"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdInitGameAndCreateBee() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "init-game-and-create-bee [bee-type]",
		Short: "Initialize game and create a bee",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argBeeType := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgInitGameAndCreateBee(
				clientCtx.GetFromAddress().String(),
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
