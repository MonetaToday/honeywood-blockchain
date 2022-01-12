package keeper

import (
	"context"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) AddressBearsAll(c context.Context, req *types.QueryAllAddressBearsRequest) (*types.QueryAllAddressBearsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var addressBearss []types.AddressBears
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	addressBearsStore := prefix.NewStore(store, types.KeyPrefix(types.AddressBearsKeyPrefix))

	pageRes, err := query.Paginate(addressBearsStore, req.Pagination, func(key []byte, value []byte) error {
		var addressBears types.AddressBears
		if err := k.cdc.Unmarshal(value, &addressBears); err != nil {
			return err
		}

		addressBearss = append(addressBearss, addressBears)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllAddressBearsResponse{AddressBears: addressBearss, Pagination: pageRes}, nil
}

func (k Keeper) AddressBears(c context.Context, req *types.QueryGetAddressBearsRequest) (*types.QueryGetAddressBearsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetAddressBears(
		ctx,
		req.Address,
	)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetAddressBearsResponse{AddressBears: val}, nil
}
