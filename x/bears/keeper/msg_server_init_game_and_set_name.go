package keeper

import (
	"context"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) InitGameAndSetName(goCtx context.Context, msg *types.MsgInitGameAndSetName) (*types.MsgInitGameAndSetNameResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	newBear, initGameErr := k.Keeper.InitGame(ctx, msg.Creator)
	if initGameErr != nil {
		return nil, initGameErr
	}

	_, found := k.Keeper.GetBearNames(ctx, msg.Name)
	if found {
		return nil, types.ErrNameIsAlreadyExisted
	}

	creatorAcc, _ := sdk.AccAddressFromBech32(msg.Creator)
	setNamePrice := k.Keeper.SetNamePrice(ctx)

	err := k.Keeper.bankKeeper.SendCoinsFromAccountToModule(ctx, creatorAcc, k.Keeper.feeCollectorName, sdk.NewCoins(setNamePrice))
	if err != nil {
		return nil, sdkerrors.Wrapf(sdkerrors.ErrInsufficientFunds, err.Error())
	}

	k.Keeper.RemoveBearNames(ctx, newBear.Name)
	k.Keeper.SetBearName(ctx, newBear.Id, msg.Name)

	return &types.MsgInitGameAndSetNameResponse{}, nil
}
