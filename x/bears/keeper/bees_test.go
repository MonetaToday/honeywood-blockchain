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

func createNBees(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Bees {
	items := make([]types.Bees, n)
	for i := range items {
		items[i].Id = keeper.AppendBees(ctx, items[i])
	}
	return items
}

func TestBeesGet(t *testing.T) {
	keeper, ctx := keepertest.BearsKeeper(t)
	items := createNBees(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetBees(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestBeesRemove(t *testing.T) {
	keeper, ctx := keepertest.BearsKeeper(t)
	items := createNBees(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveBees(ctx, item.Id)
		_, found := keeper.GetBees(ctx, item.Id)
		require.False(t, found)
	}
}

func TestBeesGetAll(t *testing.T) {
	keeper, ctx := keepertest.BearsKeeper(t)
	items := createNBees(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllBees(ctx)),
	)
}

func TestBeesCount(t *testing.T) {
	keeper, ctx := keepertest.BearsKeeper(t)
	items := createNBees(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetBeesCount(ctx))
}
