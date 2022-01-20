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

func (k Keeper) PlacesAll(c context.Context, req *types.QueryAllPlacesRequest) (*types.QueryAllPlacesResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var placess []types.Places
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	placesStore := prefix.NewStore(store, types.KeyPrefix(types.PlacesKey))

	pageRes, err := query.Paginate(placesStore, req.Pagination, func(key []byte, value []byte) error {
		var places types.Places
		if err := k.cdc.Unmarshal(value, &places); err != nil {
			return err
		}

		placess = append(placess, places)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllPlacesResponse{Places: placess, Pagination: pageRes}, nil
}

func (k Keeper) Places(c context.Context, req *types.QueryGetPlacesRequest) (*types.QueryGetPlacesResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	places, found := k.GetPlaces(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetPlacesResponse{Places: places}, nil
}
