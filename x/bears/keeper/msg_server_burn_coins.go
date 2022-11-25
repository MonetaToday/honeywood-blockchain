package keeper

import (
	"context"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	// authtypes "github.com/cosmos/cosmos-sdk/x/auth/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) BurnCoins(goCtx context.Context, msg *types.MsgBurnCoins) (*types.MsgBurnCoinsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	creatorAcc, _ := sdk.AccAddressFromBech32(msg.Creator)
	err := k.Keeper.bankKeeper.SendCoinsFromAccountToModule(ctx, creatorAcc, types.ModuleName, msg.Coins)
	if err != nil {
		return nil, sdkerrors.Wrapf(sdkerrors.ErrInsufficientFunds, err.Error())
	}

	return &types.MsgBurnCoinsResponse{}, k.Keeper.bankKeeper.BurnCoins(ctx, types.ModuleName, msg.Coins)
}
