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

func createNDecorations(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Decorations {
	items := make([]types.Decorations, n)
	for i := range items {
		items[i].Id = keeper.AppendDecorations(ctx, items[i])
	}
	return items
}

func TestDecorationsGet(t *testing.T) {
	keeper, ctx := keepertest.BearsKeeper(t)
	items := createNDecorations(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetDecorations(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestDecorationsRemove(t *testing.T) {
	keeper, ctx := keepertest.BearsKeeper(t)
	items := createNDecorations(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveDecorations(ctx, item.Id)
		_, found := keeper.GetDecorations(ctx, item.Id)
		require.False(t, found)
	}
}

func TestDecorationsGetAll(t *testing.T) {
	keeper, ctx := keepertest.BearsKeeper(t)
	items := createNDecorations(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllDecorations(ctx)),
	)
}

func TestDecorationsCount(t *testing.T) {
	keeper, ctx := keepertest.BearsKeeper(t)
	items := createNDecorations(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetDecorationsCount(ctx))
}
