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
		FieldsList:       []Fields{},
		TreesList:        []Trees{},
		DecorationsList:  []Decorations{},
		ApiariesList:     []Apiaries{},
		BeesList:         []Bees{},
		AirInfo:       AirInfo{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated index in bearNames
	bearNamesIndexMap := make(map[string]BearNames)

	countNames := uint64(0)
	for _, elem := range gs.BearNamesList {
		index := string(BearNamesKey(elem.Name))
		if _, ok := bearNamesIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for bearNames")
		}
		bearNamesIndexMap[index] = BearNames{
			BearId: elem.BearId,
		}
		countNames++
	}
	// Check for duplicated ID in bears
	bearsIdMap := make(map[uint64]bool)
	bearsCount := gs.GetBearsCount()
	if countNames != bearsCount {
		return fmt.Errorf("count bears is not equal count names")
	}
	for _, elem := range gs.BearsList {
		if _, ok := bearsIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for bears")
		}
		if elem.Id >= bearsCount {
			return fmt.Errorf("bears id should be lower or equal than the last id")
		}
		if name, ok := bearNamesIndexMap[string(BearNamesKey(elem.Name))]; !ok || name.BearId != elem.Id {
			return fmt.Errorf("name for bear %d is not existed", elem.Id)
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
	// Check for duplicated ID in fields
	fieldsIdMap := make(map[uint64]bool)
	fieldsCount := gs.GetFieldsCount()
	for _, elem := range gs.FieldsList {
		if _, ok := fieldsIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for fields")
		}
		if elem.Id >= fieldsCount {
			return fmt.Errorf("fields id should be lower or equal than the last id")
		}
		fieldsIdMap[elem.Id] = true
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
	// Check for duplicated ID in decorations
	decorationsIdMap := make(map[uint64]bool)
	decorationsCount := gs.GetDecorationsCount()
	for _, elem := range gs.DecorationsList {
		if _, ok := decorationsIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for decorations")
		}
		if elem.Id >= decorationsCount {
			return fmt.Errorf("decorations id should be lower or equal than the last id")
		}
		decorationsIdMap[elem.Id] = true
	}
	// Check for duplicated ID in apiaries
	apiariesIdMap := make(map[uint64]bool)
	apiariesCount := gs.GetApiariesCount()
	for _, elem := range gs.ApiariesList {
		if _, ok := apiariesIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for apiaries")
		}
		if elem.Id >= apiariesCount {
			return fmt.Errorf("apiaries id should be lower or equal than the last id")
		}
		apiariesIdMap[elem.Id] = true
	}
	// Check for duplicated ID in bees
	beesIdMap := make(map[uint64]bool)
	beesCount := gs.GetBeesCount()
	for _, elem := range gs.BeesList {
		if _, ok := beesIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for bees")
		}
		if elem.Id >= beesCount {
			return fmt.Errorf("bees id should be lower or equal than the last id")
		}
		beesIdMap[elem.Id] = true
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
