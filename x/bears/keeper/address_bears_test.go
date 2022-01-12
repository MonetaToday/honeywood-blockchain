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

func createNAddressBears(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.AddressBears {
	items := make([]types.AddressBears, n)
	for i := range items {
		items[i].Address = strconv.Itoa(i)

		keeper.SetAddressBears(ctx, items[i])
	}
	return items
}

func TestAddressBearsGet(t *testing.T) {
	keeper, ctx := keepertest.BearsKeeper(t)
	items := createNAddressBears(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetAddressBears(ctx,
			item.Address,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestAddressBearsRemove(t *testing.T) {
	keeper, ctx := keepertest.BearsKeeper(t)
	items := createNAddressBears(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveAddressBears(ctx,
			item.Address,
		)
		_, found := keeper.GetAddressBears(ctx,
			item.Address,
		)
		require.False(t, found)
	}
}

func TestAddressBearsGetAll(t *testing.T) {
	keeper, ctx := keepertest.BearsKeeper(t)
	items := createNAddressBears(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllAddressBears(ctx)),
	)
}
