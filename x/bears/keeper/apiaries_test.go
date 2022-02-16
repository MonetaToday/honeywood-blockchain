package keeper_test

import (
	"testing"

	keepertest "github.com/MonetaToday/HoneyWood/testutil/keeper"
	"github.com/MonetaToday/HoneyWood/testutil/nullify"
	"github.com/MonetaToday/HoneyWood/testutil/sample"
	"github.com/MonetaToday/HoneyWood/x/bears/keeper"
	"github.com/MonetaToday/HoneyWood/x/bears/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
)

func createNApiaries(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Apiaries {
	items := make([]types.Apiaries, n)
	for i := range items {
		items[i].Id = keeper.AppendApiaries(ctx, items[i])
	}
	return items
}

func TestApiariesGet(t *testing.T) {
	keeper, ctx := keepertest.BearsKeeper(t)
	items := createNApiaries(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetApiaries(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestApiariesRemove(t *testing.T) {
	keeper, ctx := keepertest.BearsKeeper(t)
	items := createNApiaries(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveApiaries(ctx, item.Id)
		_, found := keeper.GetApiaries(ctx, item.Id)
		require.False(t, found)
	}
}

func TestApiariesGetAll(t *testing.T) {
	keeper, ctx := keepertest.BearsKeeper(t)
	items := createNApiaries(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllApiaries(ctx)),
	)
}

func TestApiariesCount(t *testing.T) {
	keeper, ctx := keepertest.BearsKeeper(t)
	items := createNApiaries(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetApiariesCount(ctx))
}

func TestCalculateHoneyInApiary(t *testing.T) {
	keeper, ctx := keepertest.BearsKeeper(t)

	address := sample.AccAddress()
	bear := initGameForAddress(keeper, ctx, address)


	// items := createNApiaries(keeper, ctx, 10)
	// count := uint64(len(items))
	// require.Equal(t, count, keeper.GetApiariesCount(ctx))
}