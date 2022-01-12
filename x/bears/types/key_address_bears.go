package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// AddressBearsKeyPrefix is the prefix to retrieve all AddressBears
	AddressBearsKeyPrefix = "AddressBears/value/"
)

// AddressBearsKey returns the store key to retrieve a AddressBears from the index fields
func AddressBearsKey(
	address string,
) []byte {
	var key []byte

	addressBytes := []byte(address)
	key = append(key, addressBytes...)
	key = append(key, []byte("/")...)

	return key
}
