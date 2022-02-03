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

func (k Keeper) BeesAll(c context.Context, req *types.QueryAllBeesRequest) (*types.QueryAllBeesResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var beess []types.Bees
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	beesStore := prefix.NewStore(store, types.KeyPrefix(types.BeesKey))

	pageRes, err := query.Paginate(beesStore, req.Pagination, func(key []byte, value []byte) error {
		var bees types.Bees
		if err := k.cdc.Unmarshal(value, &bees); err != nil {
			return err
		}

		beess = append(beess, bees)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllBeesResponse{Bees: beess, Pagination: pageRes}, nil
}

func (k Keeper) Bees(c context.Context, req *types.QueryGetBeesRequest) (*types.QueryGetBeesResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	bees, found := k.GetBees(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetBeesResponse{Bees: bees}, nil
}
