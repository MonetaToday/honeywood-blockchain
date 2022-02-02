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
	cdc.RegisterConcrete(&MsgInitGameAndExtendField{}, "bears/InitGameAndExtendField", nil)
	cdc.RegisterConcrete(&MsgExtendField{}, "bears/ExtendField", nil)
	cdc.RegisterConcrete(&MsgInitGameAndCreateTree{}, "bears/InitGameAndCreateTree", nil)
	cdc.RegisterConcrete(&MsgCreateTree{}, "bears/CreateTree", nil)
	cdc.RegisterConcrete(&MsgMoveItemOnField{}, "bears/MoveItemOnField", nil)
	cdc.RegisterConcrete(&MsgInitGameAndCreateDecoration{}, "bears/InitGameAndCreateDecoration", nil)
	cdc.RegisterConcrete(&MsgCreateDecoration{}, "bears/CreateDecoration", nil)
	cdc.RegisterConcrete(&MsgSetDecorationPosition{}, "bears/SetDecorationPosition", nil)
	cdc.RegisterConcrete(&MsgUnsetDecorationPosition{}, "bears/UnsetDecorationPosition", nil)
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
		&MsgInitGameAndExtendField{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgExtendField{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgInitGameAndCreateTree{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateTree{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgMoveItemOnField{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgInitGameAndCreateDecoration{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateDecoration{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgSetDecorationPosition{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgUnsetDecorationPosition{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
