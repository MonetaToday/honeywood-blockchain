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

func createNBears(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Bears {
	items := make([]types.Bears, n)
	for i := range items {
		items[i].Id = keeper.AppendBears(ctx, items[i])
	}
	return items
}

func TestBearsGet(t *testing.T) {
	keeper, ctx := keepertest.BearsKeeper(t)
	items := createNBears(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetBears(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestBearsRemove(t *testing.T) {
	keeper, ctx := keepertest.BearsKeeper(t)
	items := createNBears(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveBears(ctx, item.Id)
		_, found := keeper.GetBears(ctx, item.Id)
		require.False(t, found)
	}
}

func TestBearsGetAll(t *testing.T) {
	keeper, ctx := keepertest.BearsKeeper(t)
	items := createNBears(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllBears(ctx)),
	)
}

func TestBearsCount(t *testing.T) {
	keeper, ctx := keepertest.BearsKeeper(t)
	items := createNBears(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetBearsCount(ctx))
}
