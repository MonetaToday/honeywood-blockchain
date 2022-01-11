package types

import (
	"fmt"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		BearNamesList: []BearNames{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated index in bearNames
	bearNamesIndexMap := make(map[string]struct{})

	for _, elem := range gs.BearNamesList {
		index := string(BearNamesKey(elem.Name))
		if _, ok := bearNamesIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for bearNames")
		}
		bearNamesIndexMap[index] = struct{}{}
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
