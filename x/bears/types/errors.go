package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/bears module sentinel errors
var (
	ErrInitGameMismatchBearIds    = sdkerrors.Register(ModuleName, 2, "Mismatch bear ids while creating game")
	ErrInitGameIsAlreadyExisted   = sdkerrors.Register(ModuleName, 3, "The Game is already existed")
	ErrNameIsAlreadyTaken         = sdkerrors.Register(ModuleName, 4, "The Name is already taken")
	ErrBearIsNotExisted           = sdkerrors.Register(ModuleName, 5, "The Bear is not existed")
	ErrAddressHasNoRight          = sdkerrors.Register(ModuleName, 6, "The Address has no right to do it")
	ErrBearHasNoRight             = sdkerrors.Register(ModuleName, 7, "The Bear has no right to do it")
	ErrFieldIsNotExisted          = sdkerrors.Register(ModuleName, 8, "The Field is not existed")
	ErrFieldHasNoRowId            = sdkerrors.Register(ModuleName, 9, "There is no rowId on the field")
	ErrFieldHasNoColumnId         = sdkerrors.Register(ModuleName, 10, "There is no columnId on the field")
	ErrFieldTypeIsNotDefined      = sdkerrors.Register(ModuleName, 11, "The Field type is not defined")
	ErrTileIsOccupied             = sdkerrors.Register(ModuleName, 12, "The Tile is already occupied by something")
	ErrItemIsNotExistedOnTile     = sdkerrors.Register(ModuleName, 13, "The Item is not existed on the tile")
	ErrItemTypeIsNotDefined       = sdkerrors.Register(ModuleName, 14, "The Item type is not defined")
	ErrTreeIsNotExisted           = sdkerrors.Register(ModuleName, 15, "The Tree is not existed")
	ErrTreeTypeIsNotDefined       = sdkerrors.Register(ModuleName, 16, "The Tree type is not defined")
	ErrDecorationIsNotExisted     = sdkerrors.Register(ModuleName, 17, "The Decoration is not existed")
	ErrDecorationHasPosition      = sdkerrors.Register(ModuleName, 18, "The Decoration has already had a position on the field")
	ErrDecorationHasNotPosition   = sdkerrors.Register(ModuleName, 19, "The Decoration haven't had a position on the field yet")
	ErrDecorationTypeIsNotDefined = sdkerrors.Register(ModuleName, 20, "The Decoration type is not defined")
	ErrApiaryTypeIsNotDefined     = sdkerrors.Register(ModuleName, 21, "The Apiary type is not defined")
	ErrApiaryIsNotExisted         = sdkerrors.Register(ModuleName, 22, "The Apiary is not existed")
	ErrApiaryHasNoEnoughSpace     = sdkerrors.Register(ModuleName, 23, "There is no enough space in the apiary")
	ErrApiaryHasNoBees            = sdkerrors.Register(ModuleName, 24, "There are no bees in the apiary")
	ErrApiaryHasBees              = sdkerrors.Register(ModuleName, 25, "There are any bees in the apiary")
	ErrApiaryHasUncollectedHoney  = sdkerrors.Register(ModuleName, 26, "There are uncollected honey in the apiary")
	ErrBeeTypeIsNotDefined        = sdkerrors.Register(ModuleName, 27, "The Bee type is not defined")
	ErrBeeIsNotExisted            = sdkerrors.Register(ModuleName, 28, "The Bee is not existed")
	ErrBeeIsInApiary              = sdkerrors.Register(ModuleName, 29, "The Bee is already in the apiary")
	ErrBeeIsNotInApiary           = sdkerrors.Register(ModuleName, 30, "The Bee is not in the apiary")
)
