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

func (k Keeper) AirHistoryAll(c context.Context, req *types.QueryAllAirHistoryRequest) (*types.QueryAllAirHistoryResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var airHistories []types.AirHistory
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	airHistoryStore := prefix.NewStore(store, types.KeyPrefix(types.AirHistoryKey))

	pageRes, err := query.Paginate(airHistoryStore, req.Pagination, func(key []byte, value []byte) error {
		var airHistory types.AirHistory
		if err := k.cdc.Unmarshal(value, &airHistory); err != nil {
			return err
		}

		airHistories = append(airHistories, airHistory)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllAirHistoryResponse{AirHistory: airHistories, Pagination: pageRes}, nil
}
