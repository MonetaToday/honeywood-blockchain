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

func (k Keeper) TreesAll(c context.Context, req *types.QueryAllTreesRequest) (*types.QueryAllTreesResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var treess []types.Trees
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	treesStore := prefix.NewStore(store, types.KeyPrefix(types.TreesKey))

	pageRes, err := query.Paginate(treesStore, req.Pagination, func(key []byte, value []byte) error {
		var trees types.Trees
		if err := k.cdc.Unmarshal(value, &trees); err != nil {
			return err
		}

		treess = append(treess, trees)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllTreesResponse{Trees: treess, Pagination: pageRes}, nil
}

func (k Keeper) Trees(c context.Context, req *types.QueryGetTreesRequest) (*types.QueryGetTreesResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	trees, found := k.GetTrees(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetTreesResponse{Trees: trees}, nil
}
