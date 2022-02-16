package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"

	keepertest "github.com/MonetaToday/HoneyWood/testutil/keeper"
	"github.com/MonetaToday/HoneyWood/testutil/nullify"
	"github.com/MonetaToday/HoneyWood/x/bears/keeper"
	"github.com/MonetaToday/HoneyWood/x/bears/types"
)

func createTestAirInfo(keeper *keeper.Keeper, ctx sdk.Context) types.AirInfo {
	item := types.AirInfo{}
	keeper.SetAirInfo(ctx, item)
	return item
}

func TestAirInfoGet(t *testing.T) {
	keeper, ctx := keepertest.BearsKeeper(t)
	item := createTestAirInfo(keeper, ctx)
	rst, found := keeper.GetAirInfo(ctx)
	require.True(t, found)
	require.Equal(t,
		nullify.Fill(&item),
		nullify.Fill(&rst),
	)
}

func TestAirInfoRemove(t *testing.T) {
	keeper, ctx := keepertest.BearsKeeper(t)
	createTestAirInfo(keeper, ctx)
	keeper.RemoveAirInfo(ctx)
	_, found := keeper.GetAirInfo(ctx)
	require.False(t, found)
}
