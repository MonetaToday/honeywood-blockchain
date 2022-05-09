package types

import "encoding/binary"
import "strings"

var _ binary.ByteOrder

const (
	// BearNamesKeyPrefix is the prefix to retrieve all BearNames
	BearNamesKeyPrefix = "BearNames/value/"
)

// BearNamesKey returns the store key to retrieve a BearNames from the index fields
func BearNamesKey(
	name string,
) []byte {
	var key []byte

	nameBytes := []byte(strings.ToLower(name))
	key = append(key, nameBytes...)
	key = append(key, []byte("/")...)

	return key
}
