package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/bears module sentinel errors
var (
	ErrInitGameMismatchBearIds  = sdkerrors.Register(ModuleName, 2, "Init game mismatch bear ids")
	ErrInitGameIsAlreadyExisted = sdkerrors.Register(ModuleName, 3, "Init game is already existed")
	ErrNameIsAlreadyExisted     = sdkerrors.Register(ModuleName, 4, "Name is already existed")
	ErrBearIsNotExisted         = sdkerrors.Register(ModuleName, 5, "Bear is not existed yet")
	ErrAddressHasNoRights       = sdkerrors.Register(ModuleName, 6, "Address has no rights")
	ErrBearHasNoRights          = sdkerrors.Register(ModuleName, 7, "Bear has no rights")
	ErrFieldIsNotExisted        = sdkerrors.Register(ModuleName, 8, "Field is not existed yet")
	ErrFieldHasNoRowId          = sdkerrors.Register(ModuleName, 9, "There is no rowId in this field")
	ErrFieldHasNoColumnId       = sdkerrors.Register(ModuleName, 10, "There is no columnId in this field")
	ErrTileIsNotEmpty           = sdkerrors.Register(ModuleName, 11, "There is already something on the tile")
	ErrItemIsNotExistedOnTile   = sdkerrors.Register(ModuleName, 12, "Item is not existed on the tile")
	ErrItemTypeIsNotDefined     = sdkerrors.Register(ModuleName, 13, "Item Type is not defined")
	ErrTreeIsNotExisted         = sdkerrors.Register(ModuleName, 14, "Tree is not existed")
	ErrDecorationIsNotExisted   = sdkerrors.Register(ModuleName, 15, "Decoration is not existed")
	ErrDecorationHasPosition    = sdkerrors.Register(ModuleName, 16, "Decoration already has a position")
)
