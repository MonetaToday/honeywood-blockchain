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

func (k Keeper) BearsAll(c context.Context, req *types.QueryAllBearsRequest) (*types.QueryAllBearsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var bearss []types.Bears
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	bearsStore := prefix.NewStore(store, types.KeyPrefix(types.BearsKey))

	pageRes, err := query.Paginate(bearsStore, req.Pagination, func(key []byte, value []byte) error {
		var bears types.Bears
		if err := k.cdc.Unmarshal(value, &bears); err != nil {
			return err
		}

		bearss = append(bearss, bears)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllBearsResponse{Bears: bearss, Pagination: pageRes}, nil
}

func (k Keeper) Bears(c context.Context, req *types.QueryGetBearsRequest) (*types.QueryGetBearsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	bears, found := k.GetBears(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetBearsResponse{Bears: bears}, nil
}
