package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgInitGameAndSetName{}, "bears/InitGameAndSetName", nil)
	cdc.RegisterConcrete(&MsgSetName{}, "bears/SetName", nil)
	cdc.RegisterConcrete(&MsgInitGameAndExtendPlace{}, "bears/InitGameAndExtendPlace", nil)
	cdc.RegisterConcrete(&MsgExtendPlace{}, "bears/ExtendPlace", nil)
	cdc.RegisterConcrete(&MsgInitGameAndCreateTree{}, "bears/InitGameAndCreateTree", nil)
	cdc.RegisterConcrete(&MsgCreateTree{}, "bears/CreateTree", nil)
	cdc.RegisterConcrete(&MsgMoveItemOnPlace{}, "bears/MoveItemOnPlace", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgInitGameAndSetName{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgSetName{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgInitGameAndExtendPlace{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgExtendPlace{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgInitGameAndCreateTree{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateTree{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgMoveItemOnPlace{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
