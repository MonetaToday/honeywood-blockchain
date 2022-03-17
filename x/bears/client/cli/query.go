package cli

import (
	"fmt"
	// "strings"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	// sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
)

// GetQueryCmd returns the cli query commands for this module
func GetQueryCmd(queryRoute string) *cobra.Command {
	// Group bears queries under a subcommand
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("Querying commands for the %s module", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(CmdQueryParams())
	cmd.AddCommand(CmdListBearNames())
	cmd.AddCommand(CmdShowBearNames())
	cmd.AddCommand(CmdListBears())
	cmd.AddCommand(CmdShowBears())
	cmd.AddCommand(CmdListAddressBears())
	cmd.AddCommand(CmdShowAddressBears())
	cmd.AddCommand(CmdListFields())
	cmd.AddCommand(CmdShowFields())
	cmd.AddCommand(CmdListTrees())
	cmd.AddCommand(CmdShowTrees())
	cmd.AddCommand(CmdListDecorations())
	cmd.AddCommand(CmdShowDecorations())
	cmd.AddCommand(CmdListApiaries())
	cmd.AddCommand(CmdShowApiaries())
	cmd.AddCommand(CmdListBees())
	cmd.AddCommand(CmdShowBees())
	cmd.AddCommand(CmdCalculateHoneyInApiary())

	cmd.AddCommand(CmdShowAirInfo())
	cmd.AddCommand(CmdShowLastAirInfo())

	cmd.AddCommand(CmdShowHoneyFromAllBearApiaries())

	// this line is used by starport scaffolding # 1

	return cmd
}
