package simulation

import (
	"math/rand"

	"github.com/MonetaToday/HoneyWood/x/bears/keeper"
	"github.com/MonetaToday/HoneyWood/x/bears/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
)

func SimulateMsgCollectHoneyAndClearApiaryFromBees(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgCollectHoneyAndClearApiaryFromBees{
			Creator: simAccount.Address.String(),
		}

		// TODO: Handling the CollectHoneyAndClearApiaryFromBees simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "CollectHoneyAndClearApiaryFromBees simulation not implemented"), nil, nil
	}
}
