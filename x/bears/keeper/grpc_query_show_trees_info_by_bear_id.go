package keeper

import (
	"context"

	"github.com/MonetaToday/HoneyWood/x/bears/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) ShowTreesInfoByBearId(goCtx context.Context, req *types.QueryShowTreesInfoByBearIdRequest) (*types.QueryShowTreesInfoByBearIdResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	bear, bearFound := k.GetBears(ctx, req.BearId)
	if !bearFound {
		return nil, types.ErrBearIsNotExisted
	}

	treesInfo := []types.QueryShowTreesInfoByBearIdResponse_TreeInfo{}

	for _, treeId := range bear.Trees {
		tree, treeFound := k.GetTrees(ctx, treeId)
		if !treeFound {
			return nil, types.ErrTreeIsNotExisted
		}

		treesInfo = append(treesInfo, types.QueryShowTreesInfoByBearIdResponse_TreeInfo{
			Id:         treeId,
			Params:     tree.Params,
		})
	}

	return &types.QueryShowTreesInfoByBearIdResponse{
		TreesInfo: treesInfo,
	}, nil
}
