package simulation

import (
	"math/rand"

	"github.com/MonetaToday/HoneyWood/x/bears/keeper"
	"github.com/MonetaToday/HoneyWood/x/bears/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
)

func SimulateMsgSetApiaryHouseForBee(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgSetApiaryHouseForBee{
			Creator: simAccount.Address.String(),
		}

		// TODO: Handling the SetApiaryHouseForBee simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "SetApiaryHouseForBee simulation not implemented"), nil, nil
	}
}
