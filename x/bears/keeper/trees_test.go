package keeper_test

import (
	"testing"

	keepertest "github.com/MonetaToday/HoneyWood/testutil/keeper"
	"github.com/MonetaToday/HoneyWood/testutil/nullify"
	"github.com/MonetaToday/HoneyWood/x/bears/keeper"
	"github.com/MonetaToday/HoneyWood/x/bears/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

func createNTrees(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Trees {
	items := make([]types.Trees, n)
	for i := range items {
		items[i].Id = keeper.AppendTrees(ctx, items[i])
	}
	return items
}

func TestTreesGet(t *testing.T) {
	keeper, ctx := keepertest.BearsKeeper(t)
	items := createNTrees(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetTrees(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestTreesRemove(t *testing.T) {
	keeper, ctx := keepertest.BearsKeeper(t)
	items := createNTrees(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveTrees(ctx, item.Id)
		_, found := keeper.GetTrees(ctx, item.Id)
		require.False(t, found)
	}
}

func TestTreesGetAll(t *testing.T) {
	keeper, ctx := keepertest.BearsKeeper(t)
	items := createNTrees(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllTrees(ctx)),
	)
}

func TestTreesCount(t *testing.T) {
	keeper, ctx := keepertest.BearsKeeper(t)
	items := createNTrees(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetTreesCount(ctx))
}
