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

func (k Keeper) FieldsAll(c context.Context, req *types.QueryAllFieldsRequest) (*types.QueryAllFieldsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var fieldss []types.Fields
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	fieldsStore := prefix.NewStore(store, types.KeyPrefix(types.FieldsKey))

	pageRes, err := query.Paginate(fieldsStore, req.Pagination, func(key []byte, value []byte) error {
		var fields types.Fields
		if err := k.cdc.Unmarshal(value, &fields); err != nil {
			return err
		}

		fieldss = append(fieldss, fields)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllFieldsResponse{Fields: fieldss, Pagination: pageRes}, nil
}

func (k Keeper) Fields(c context.Context, req *types.QueryGetFieldsRequest) (*types.QueryGetFieldsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	fields, found := k.GetFields(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetFieldsResponse{Fields: fields}, nil
}
