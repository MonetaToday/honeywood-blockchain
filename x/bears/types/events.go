package types

import (
	"strconv"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// bears module event types
const (
	EventTypeBearCreated = "bear_created"
	
	EventTypeFieldCreated = "field_created"
	EventTypeFieldExtended = "field_extended"
	EventTypeItemMovedOnField = "item_moved_on_field"

	EventTypeApiaryCreated = "apiary_created"
	EventTypeHoneyCollectedFromApiary = "honey_collected_from_apiary"
	EventTypeApiaryClearedFromBees = "apiary_cleared_from_bees"
	EventTypeApiaryDeleted = "apiary_deleted"

	EventTypeBeeCreated = "bee_created"
	EventTypeBeeApiaryHouseSet = "bee_apiary_house_set"
	EventTypeBeeApiaryHouseUnset = "bee_apiary_house_unset"
	
	EventTypeDecorationCreated = "decoration_created"
	EventTypeDecorationPositionSet = "decoration_position_set"
	EventTypeDecorationPositionUnset = "decoration_position_unset"
	
	EventTypeTreeCreated = "tree_created"
	
	EventTypeNameSet = "name_set"


	AttributeKeyId = "id"
	AttributeKeyBearId = "bear_id"
	AttributeKeyAddress = "address"
	AttributeKeyBearName = "bear_name"


	AttributeValueCategory = ModuleName
)



// NewBearCreatedEvent
// nolint: interfacer
func NewBearCreatedEvent(id uint64, address string) sdk.Event {
	return sdk.NewEvent(
		EventTypeBearCreated,
		sdk.NewAttribute(AttributeKeyId, strconv.FormatUint(id, 10)),
		sdk.NewAttribute(AttributeKeyAddress, address),
	)
}

// NewFieldCreatedEvent
// nolint: interfacer
func NewFieldCreatedEvent(id uint64) sdk.Event {
	return sdk.NewEvent(
		EventTypeFieldCreated,
		sdk.NewAttribute(AttributeKeyId, strconv.FormatUint(id, 10)),
	)
}

// NewNameSetEvent
// nolint: interfacer
func NewNameSetEvent(name string, bearId uint64) sdk.Event {
	return sdk.NewEvent(
		EventTypeNameSet,
		sdk.NewAttribute(AttributeKeyBearId, strconv.FormatUint(bearId, 10)),
		sdk.NewAttribute(AttributeKeyBearName, name),
	)
}
