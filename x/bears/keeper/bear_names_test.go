package keeper_test

import (
	"strconv"
	"testing"

	keepertest "github.com/MonetaToday/HoneyWood/testutil/keeper"
	"github.com/MonetaToday/HoneyWood/testutil/nullify"
	"github.com/MonetaToday/HoneyWood/x/bears/keeper"
	"github.com/MonetaToday/HoneyWood/x/bears/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNBearNames(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.BearNames {
	items := make([]types.BearNames, n)
	for i := range items {
		items[i].Name = strconv.Itoa(i)

		keeper.SetBearNames(ctx, items[i])
	}
	return items
}

func TestBearNamesGet(t *testing.T) {
	keeper, ctx := keepertest.BearsKeeper(t)
	items := createNBearNames(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetBearNames(ctx,
			item.Name,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestBearNamesRemove(t *testing.T) {
	keeper, ctx := keepertest.BearsKeeper(t)
	items := createNBearNames(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveBearNames(ctx,
			item.Name,
		)
		_, found := keeper.GetBearNames(ctx,
			item.Name,
		)
		require.False(t, found)
	}
}

func TestBearNamesGetAll(t *testing.T) {
	keeper, ctx := keepertest.BearsKeeper(t)
	items := createNBearNames(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllBearNames(ctx)),
	)
}
