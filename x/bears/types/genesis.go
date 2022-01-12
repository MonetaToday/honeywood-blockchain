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
		BearsList:     []Bears{},
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
	// Check for duplicated ID in bears
	bearsIdMap := make(map[uint64]bool)
	bearsCount := gs.GetBearsCount()
	for _, elem := range gs.BearsList {
		if _, ok := bearsIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for bears")
		}
		if elem.Id >= bearsCount {
			return fmt.Errorf("bears id should be lower or equal than the last id")
		}
		bearsIdMap[elem.Id] = true
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
