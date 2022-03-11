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

func CmdCreateApiary() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-apiary [receiver] [bear-id] [field-id] [row-id] [column-id] [apiary-type]",
		Short: "Create a apiary",
		Args:  cobra.ExactArgs(6),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argReceiver := args[0]
			argBearId, err := cast.ToUint64E(args[1])
			if err != nil {
				return err
			}
			argFieldId, err := cast.ToUint64E(args[2])
			if err != nil {
				return err
			}
			argRowId, err := cast.ToUint64E(args[3])
			if err != nil {
				return err
			}
			argColumnId, err := cast.ToUint64E(args[4])
			if err != nil {
				return err
			}
			argApiaryType := args[4]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateApiary(
				clientCtx.GetFromAddress().String(),
				argReceiver,
				argBearId,
				argFieldId,
				argRowId,
				argColumnId,
				argApiaryType,
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
