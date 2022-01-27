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
	ErrPlaceIsNotExisted        = sdkerrors.Register(ModuleName, 8, "Place is not existed yet")
	ErrPlaceHasNoGroundId       = sdkerrors.Register(ModuleName, 9, "There is no groundId in this place")
	ErrGroundIsNotEmpty         = sdkerrors.Register(ModuleName, 10, "There is already something on the ground")
	ErrItemIsNotExistedOnGround = sdkerrors.Register(ModuleName, 11, "Item is not existed on the ground")
	ErrItemTypeIsNotDefined     = sdkerrors.Register(ModuleName, 12, "Item Type is not defined")
	ErrTreeIsNotExister         = sdkerrors.Register(ModuleName, 13, "Tree is not existed")
)
