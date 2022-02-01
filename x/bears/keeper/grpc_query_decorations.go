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

func (k Keeper) DecorationsAll(c context.Context, req *types.QueryAllDecorationsRequest) (*types.QueryAllDecorationsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var decorationss []types.Decorations
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	decorationsStore := prefix.NewStore(store, types.KeyPrefix(types.DecorationsKey))

	pageRes, err := query.Paginate(decorationsStore, req.Pagination, func(key []byte, value []byte) error {
		var decorations types.Decorations
		if err := k.cdc.Unmarshal(value, &decorations); err != nil {
			return err
		}

		decorationss = append(decorationss, decorations)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllDecorationsResponse{Decorations: decorationss, Pagination: pageRes}, nil
}

func (k Keeper) Decorations(c context.Context, req *types.QueryGetDecorationsRequest) (*types.QueryGetDecorationsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	decorations, found := k.GetDecorations(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetDecorationsResponse{Decorations: decorations}, nil
}
