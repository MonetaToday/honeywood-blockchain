package keeper

import (
	"context"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	authtypes "github.com/cosmos/cosmos-sdk/x/auth/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) ListAddressesStatistic(goCtx context.Context, req *types.QueryListAddressesStatisticRequest) (*types.QueryListAddressesStatisticResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	var addresses []types.QueryListAddressesStatisticResponse_AddressesStatistic
	store := ctx.KVStore(k.authStoreKey)
	accountsStore := prefix.NewStore(store, authtypes.AddressStoreKeyPrefix)

	pageRes, err := query.Paginate(accountsStore, req.Pagination, func(key, value []byte) error {
		account, err := k.accountKeeper.UnmarshalAccount(value)
		if err != nil {
			panic(err)
		}

		_, isModuleAccount := account.(authtypes.ModuleAccountI)
		addresses = append(addresses, types.QueryListAddressesStatisticResponse_AddressesStatistic{
			Address:  account.GetAddress().String(),
			Balances: k.bankKeeper.SpendableCoins(ctx, account.GetAddress()),
			Module:   isModuleAccount,
		})

		return nil
	})

	if err != nil {
		return nil, status.Errorf(codes.Internal, "paginate: %v", err)
	}

	return &types.QueryListAddressesStatisticResponse{Addresses: addresses, Pagination: pageRes}, nil
}
