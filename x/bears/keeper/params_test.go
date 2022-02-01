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
	require.EqualValues(t, params.PriceSetName, k.PriceSetName(ctx))
	require.EqualValues(t, params.PriceTile, k.PriceTile(ctx))
	require.EqualValues(t, params.PriceTree, k.PriceTree(ctx))
	require.EqualValues(t, params.RewardTree, k.RewardTree(ctx))
}
