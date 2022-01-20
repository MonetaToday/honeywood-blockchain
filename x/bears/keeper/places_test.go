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

func createNPlaces(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Places {
	items := make([]types.Places, n)
	for i := range items {
		items[i].Id = keeper.AppendPlaces(ctx, items[i])
	}
	return items
}

func TestPlacesGet(t *testing.T) {
	keeper, ctx := keepertest.BearsKeeper(t)
	items := createNPlaces(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetPlaces(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestPlacesRemove(t *testing.T) {
	keeper, ctx := keepertest.BearsKeeper(t)
	items := createNPlaces(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemovePlaces(ctx, item.Id)
		_, found := keeper.GetPlaces(ctx, item.Id)
		require.False(t, found)
	}
}

func TestPlacesGetAll(t *testing.T) {
	keeper, ctx := keepertest.BearsKeeper(t)
	items := createNPlaces(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllPlaces(ctx)),
	)
}

func TestPlacesCount(t *testing.T) {
	keeper, ctx := keepertest.BearsKeeper(t)
	items := createNPlaces(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetPlacesCount(ctx))
}
