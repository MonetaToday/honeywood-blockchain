package types

const (
	// ModuleName defines the module name
	ModuleName = "bears"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey is the message route for slashing
	RouterKey = ModuleName

	// QuerierRoute defines the module's query routing key
	QuerierRoute = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_bears"
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}

const (
	BearsKey      = "Bears-value-"
	BearsCountKey = "Bears-count-"
)

const (
	FieldsKey      = "Fields-value-"
	FieldsCountKey = "Fields-count-"
)

const (
	TreesKey      = "Trees-value-"
	TreesCountKey = "Trees-count-"
)
