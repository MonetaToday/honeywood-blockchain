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
	AttributeKeyFieldId = "field_id"
	AttributeKeyCountTiles = "count_tiles"
	AttributeKeyItemId = "item_id"
	AttributeKeyItemType = "item_type"
	AttributeKeyOldRowId = "old_row_id"
	AttributeKeyOldColumnId = "old_column_id"
	AttributeKeyRowId = "row_id"
	AttributeKeyColumnId = "column_id"
	AttributeKeyAddress = "address"
	AttributeKeyBearName = "bear_name"
	AttributeKeyApiaryId = "apiary_id"
	AttributeKeyCountHoney = "count_honey"

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

// NewFieldExtendedEvent
// nolint: interfacer
func NewFieldExtendedEvent(id uint64, countTiles uint64) sdk.Event {
	return sdk.NewEvent(
		EventTypeFieldExtended,
		sdk.NewAttribute(AttributeKeyId, strconv.FormatUint(id, 10)),
		sdk.NewAttribute(AttributeKeyCountTiles, strconv.FormatUint(countTiles, 10)),
	)
}

// NewItemMovedOnFieldEvent
// nolint: interfacer
func NewItemMovedOnFieldEvent(fieldId uint64, oldRowId uint64, oldColumnId uint64, newRowId uint64, newColumnId uint64, itemId uint64, itemType string) sdk.Event {
	return sdk.NewEvent(
		EventTypeItemMovedOnField,
		sdk.NewAttribute(AttributeKeyFieldId, strconv.FormatUint(fieldId, 10)),
		sdk.NewAttribute(AttributeKeyOldRowId, strconv.FormatUint(oldRowId, 10)),
		sdk.NewAttribute(AttributeKeyOldColumnId, strconv.FormatUint(oldColumnId, 10)),
		sdk.NewAttribute(AttributeKeyRowId, strconv.FormatUint(newRowId, 10)),
		sdk.NewAttribute(AttributeKeyColumnId, strconv.FormatUint(newColumnId, 10)),
		sdk.NewAttribute(AttributeKeyItemId, strconv.FormatUint(itemId, 10)),
		sdk.NewAttribute(AttributeKeyItemType, itemType),
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

// NewTreeCreatedEvent
// nolint: interfacer
func NewTreeCreatedEvent(id uint64) sdk.Event {
	return sdk.NewEvent(
		EventTypeTreeCreated,
		sdk.NewAttribute(AttributeKeyId, strconv.FormatUint(id, 10)),
	)
}

// NewDecorationCreatedEvent
// nolint: interfacer
func NewDecorationCreatedEvent(id uint64) sdk.Event {
	return sdk.NewEvent(
		EventTypeDecorationCreated,
		sdk.NewAttribute(AttributeKeyId, strconv.FormatUint(id, 10)),
	)
}

// NewDecorationPositionSetEvent
// nolint: interfacer
func NewDecorationPositionSetEvent(id uint64, fieldId uint64, rowId uint64, columnId uint64) sdk.Event {
	return sdk.NewEvent(
		EventTypeDecorationPositionSet,
		sdk.NewAttribute(AttributeKeyId, strconv.FormatUint(id, 10)),
		sdk.NewAttribute(AttributeKeyFieldId, strconv.FormatUint(fieldId, 10)),
		sdk.NewAttribute(AttributeKeyRowId, strconv.FormatUint(rowId, 10)),
		sdk.NewAttribute(AttributeKeyColumnId, strconv.FormatUint(columnId, 10)),
	)
}

// NewDecorationPositionUnsetEvent
// nolint: interfacer
func NewDecorationPositionUnsetEvent(id uint64) sdk.Event {
	return sdk.NewEvent(
		EventTypeDecorationPositionUnset,
		sdk.NewAttribute(AttributeKeyId, strconv.FormatUint(id, 10)),
	)
}

// NewApiaryCreatedEvent
// nolint: interfacer
func NewApiaryCreatedEvent(id uint64) sdk.Event {
	return sdk.NewEvent(
		EventTypeApiaryCreated,
		sdk.NewAttribute(AttributeKeyId, strconv.FormatUint(id, 10)),
	)
}

// NewHoneyCollectedFromApiaryEvent
// nolint: interfacer
func NewHoneyCollectedFromApiaryEvent(id uint64, honey sdk.Coin) sdk.Event {
	return sdk.NewEvent(
		EventTypeHoneyCollectedFromApiary,
		sdk.NewAttribute(AttributeKeyId, strconv.FormatUint(id, 10)),
		sdk.NewAttribute(AttributeKeyCountHoney, honey.String()),
	)
}



// NewApiaryDeletedEvent
// nolint: interfacer
func NewApiaryDeletedEvent(id uint64) sdk.Event {
	return sdk.NewEvent(
		EventTypeApiaryDeleted,
		sdk.NewAttribute(AttributeKeyId, strconv.FormatUint(id, 10)),
	)
}


// NewBeeCreatedEvent
// nolint: interfacer
func NewBeeCreatedEvent(id uint64) sdk.Event {
	return sdk.NewEvent(
		EventTypeBeeCreated,
		sdk.NewAttribute(AttributeKeyId, strconv.FormatUint(id, 10)),
	)
}

// NewBeeApiaryHouseSetEvent
// nolint: interfacer
func NewBeeApiaryHouseSetEvent(id uint64, apiaryId uint64) sdk.Event {
	return sdk.NewEvent(
		EventTypeBeeApiaryHouseSet,
		sdk.NewAttribute(AttributeKeyId, strconv.FormatUint(id, 10)),
		sdk.NewAttribute(AttributeKeyApiaryId, strconv.FormatUint(apiaryId, 10)),
	)
}

// NewBeeApiaryHouseUnsetEvent
// nolint: interfacer
func NewBeeApiaryHouseUnsetEvent(id uint64, apiaryId uint64) sdk.Event {
	return sdk.NewEvent(
		EventTypeBeeApiaryHouseUnset,
		sdk.NewAttribute(AttributeKeyId, strconv.FormatUint(id, 10)),
		sdk.NewAttribute(AttributeKeyApiaryId, strconv.FormatUint(apiaryId, 10)),
	)
}
