package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/bears module sentinel errors
var (
	ErrInitGameMismatchBearIds    = sdkerrors.Register(ModuleName, 2, "Init game mismatch bear ids")
	ErrInitGameIsAlreadyExisted   = sdkerrors.Register(ModuleName, 3, "Init game is already existed")
	ErrNameIsAlreadyExisted       = sdkerrors.Register(ModuleName, 4, "Name is already existed")
	ErrBearIsNotExisted           = sdkerrors.Register(ModuleName, 5, "Bear is not existed yet")
	ErrAddressHasNoRights         = sdkerrors.Register(ModuleName, 6, "Address has no rights")
	ErrBearHasNoRights            = sdkerrors.Register(ModuleName, 7, "Bear has no rights")
	ErrFieldIsNotExisted          = sdkerrors.Register(ModuleName, 8, "Field is not existed yet")
	ErrFieldHasNoRowId            = sdkerrors.Register(ModuleName, 9, "There is no rowId in this field")
	ErrFieldHasNoColumnId         = sdkerrors.Register(ModuleName, 10, "There is no columnId in this field")
	ErrFieldTypeIsNotDefined      = sdkerrors.Register(ModuleName, 11, "Field type is not defined")
	ErrTileIsNotEmpty             = sdkerrors.Register(ModuleName, 12, "There is already something on the tile")
	ErrItemIsNotExistedOnTile     = sdkerrors.Register(ModuleName, 13, "Item is not existed on the tile")
	ErrItemTypeIsNotDefined       = sdkerrors.Register(ModuleName, 14, "Item Type is not defined")
	ErrTreeIsNotExisted           = sdkerrors.Register(ModuleName, 15, "Tree is not existed")
	ErrTreeTypeIsNotDefined       = sdkerrors.Register(ModuleName, 16, "Tree type is not defined")
	ErrDecorationIsNotExisted     = sdkerrors.Register(ModuleName, 17, "Decoration is not existed")
	ErrDecorationHasPosition      = sdkerrors.Register(ModuleName, 18, "Decoration has already had a position")
	ErrDecorationHasNotPosition   = sdkerrors.Register(ModuleName, 19, "Decoration haven't had a position yet")
	ErrDecorationTypeIsNotDefined = sdkerrors.Register(ModuleName, 20, "Decoration type is not defined")
	ErrApiaryTypeIsNotDefined     = sdkerrors.Register(ModuleName, 21, "Apiary type is not defined")
	ErrApiaryIsNotExisted         = sdkerrors.Register(ModuleName, 22, "Apiary is not existed")
	ErrApiaryHasNotEnoughSpace    = sdkerrors.Register(ModuleName, 23, "Apiary has not enough space")
	ErrApiaryHasNoBees            = sdkerrors.Register(ModuleName, 24, "Apiary has no bees")
	ErrApiaryHasBees              = sdkerrors.Register(ModuleName, 25, "There are bees in apiary")
	ErrApiaryHasUncollectedHoney  = sdkerrors.Register(ModuleName, 26, "There are uncollected honey in apiary")
	ErrBeeTypeIsNotDefined        = sdkerrors.Register(ModuleName, 27, "Bee type is not defined")
	ErrBeeIsNotExisted            = sdkerrors.Register(ModuleName, 28, "Bee is not existed")
	ErrBeeIsInApiaryHouse         = sdkerrors.Register(ModuleName, 29, "Bee is already in apiary house")
	ErrBeeIsNotInApiaryHouse      = sdkerrors.Register(ModuleName, 30, "Bee is not in apiary house yet")
)
