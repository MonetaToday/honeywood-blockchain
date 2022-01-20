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
	ErrAddressHasNoRights       = sdkerrors.Register(ModuleName, 6, "Address has no rights to the bear")
	ErrPlaceIsNotExisted        = sdkerrors.Register(ModuleName, 7, "Place is not existed yet")
)
