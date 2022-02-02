package cli

import (
	"fmt"
	"time"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/MonetaToday/HoneyWood/x/bears/types"
)

var (
	DefaultRelativePacketTimeoutTimestamp = uint64((time.Duration(10) * time.Minute).Nanoseconds())
)

const (
	flagPacketTimeoutTimestamp = "packet-timeout-timestamp"
	listSeparator              = ","
)

// GetTxCmd returns the transaction commands for this module
func GetTxCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("%s transactions subcommands", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(CmdInitGameAndSetName())
	cmd.AddCommand(CmdSetName())
	cmd.AddCommand(CmdInitGameAndExtend())
	cmd.AddCommand(CmdExtendField())
	cmd.AddCommand(CmdInitGameAndCreateTree())
	cmd.AddCommand(CmdCreateTree())
	cmd.AddCommand(CmdMoveItemOnField())
	cmd.AddCommand(CmdInitGameAndCreateDecoration())
	cmd.AddCommand(CmdCreateDecoration())
	cmd.AddCommand(CmdSetDecorationPosition())
	cmd.AddCommand(CmdUnsetDecorationPosition())
	cmd.AddCommand(CmdInitGameAndCreateApiary())
	cmd.AddCommand(CmdCreateApiary())
	// this line is used by starport scaffolding # 1

	return cmd
}
