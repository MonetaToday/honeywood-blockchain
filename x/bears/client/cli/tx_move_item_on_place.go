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

func CmdMoveItemOnPlace() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "move-item-on-place [place-id] [ground-id] [new-ground-id]",
		Short: "Move an item on place",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argPlaceId, err := cast.ToUint64E(args[0])
			if err != nil {
				return err
			}
			argGroundId, err := cast.ToUint64E(args[1])
			if err != nil {
				return err
			}
			argNewGroundId, err := cast.ToUint64E(args[2])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgMoveItemOnPlace(
				clientCtx.GetFromAddress().String(),
				argPlaceId,
				argGroundId,
				argNewGroundId,
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
