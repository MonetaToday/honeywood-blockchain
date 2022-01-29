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

func createNFields(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Fields {
	items := make([]types.Fields, n)
	for i := range items {
		items[i].Id = keeper.AppendFields(ctx, items[i])
	}
	return items
}

func TestFieldsGet(t *testing.T) {
	keeper, ctx := keepertest.BearsKeeper(t)
	items := createNFields(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetFields(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestFieldsRemove(t *testing.T) {
	keeper, ctx := keepertest.BearsKeeper(t)
	items := createNFields(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveFields(ctx, item.Id)
		_, found := keeper.GetFields(ctx, item.Id)
		require.False(t, found)
	}
}

func TestFieldsGetAll(t *testing.T) {
	keeper, ctx := keepertest.BearsKeeper(t)
	items := createNFields(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllFields(ctx)),
	)
}

func TestFieldsCount(t *testing.T) {
	keeper, ctx := keepertest.BearsKeeper(t)
	items := createNFields(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetFieldsCount(ctx))
}
