package keeper_test

import (
	"testing"

	testkeeper "github.com/MonetaToday/HoneyWood/testutil/keeper"
	"github.com/MonetaToday/HoneyWood/x/bears/types"
	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.BearsKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
	require.EqualValues(t, params.SetNamePrice, k.SetNamePrice(ctx))
	require.EqualValues(t, params.OneTilePrice, k.OneTilePrice(ctx))
	require.EqualValues(t, params.OneTreePrice, k.OneTreePrice(ctx))
	require.EqualValues(t, params.OneTreeReward, k.OneTreeReward(ctx))
}
