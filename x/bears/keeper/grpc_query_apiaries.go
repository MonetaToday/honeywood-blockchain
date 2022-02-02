package keeper

import (
	"context"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) ApiariesAll(c context.Context, req *types.QueryAllApiariesRequest) (*types.QueryAllApiariesResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var apiariess []types.Apiaries
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	apiariesStore := prefix.NewStore(store, types.KeyPrefix(types.ApiariesKey))

	pageRes, err := query.Paginate(apiariesStore, req.Pagination, func(key []byte, value []byte) error {
		var apiaries types.Apiaries
		if err := k.cdc.Unmarshal(value, &apiaries); err != nil {
			return err
		}

		apiariess = append(apiariess, apiaries)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllApiariesResponse{Apiaries: apiariess, Pagination: pageRes}, nil
}

func (k Keeper) Apiaries(c context.Context, req *types.QueryGetApiariesRequest) (*types.QueryGetApiariesResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	apiaries, found := k.GetApiaries(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetApiariesResponse{Apiaries: apiaries}, nil
}
