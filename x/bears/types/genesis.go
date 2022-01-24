package types

import (
	"fmt"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		BearNamesList:    []BearNames{},
		BearsList:        []Bears{},
		AddressBearsList: []AddressBears{},
		PlacesList:       []Places{},
		TreesList:        []Trees{},
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
	// Check for duplicated index in addressBears
	addressBearsIndexMap := make(map[string]struct{})

	for _, elem := range gs.AddressBearsList {
		index := string(AddressBearsKey(elem.Address))
		if _, ok := addressBearsIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for addressBears")
		}
		addressBearsIndexMap[index] = struct{}{}
	}
	// Check for duplicated ID in places
	placesIdMap := make(map[uint64]bool)
	placesCount := gs.GetPlacesCount()
	for _, elem := range gs.PlacesList {
		if _, ok := placesIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for places")
		}
		if elem.Id >= placesCount {
			return fmt.Errorf("places id should be lower or equal than the last id")
		}
		placesIdMap[elem.Id] = true
	}
	// Check for duplicated ID in trees
	treesIdMap := make(map[uint64]bool)
	treesCount := gs.GetTreesCount()
	for _, elem := range gs.TreesList {
		if _, ok := treesIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for trees")
		}
		if elem.Id >= treesCount {
			return fmt.Errorf("trees id should be lower or equal than the last id")
		}
		treesIdMap[elem.Id] = true
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
