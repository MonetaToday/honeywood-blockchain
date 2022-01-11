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

func (k Keeper) BearNamesAll(c context.Context, req *types.QueryAllBearNamesRequest) (*types.QueryAllBearNamesResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var bearNamess []types.BearNames
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	bearNamesStore := prefix.NewStore(store, types.KeyPrefix(types.BearNamesKeyPrefix))

	pageRes, err := query.Paginate(bearNamesStore, req.Pagination, func(key []byte, value []byte) error {
		var bearNames types.BearNames
		if err := k.cdc.Unmarshal(value, &bearNames); err != nil {
			return err
		}

		bearNamess = append(bearNamess, bearNames)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllBearNamesResponse{BearNames: bearNamess, Pagination: pageRes}, nil
}

func (k Keeper) BearNames(c context.Context, req *types.QueryGetBearNamesRequest) (*types.QueryGetBearNamesResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetBearNames(
		ctx,
		req.Name,
	)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetBearNamesResponse{BearNames: val}, nil
}
