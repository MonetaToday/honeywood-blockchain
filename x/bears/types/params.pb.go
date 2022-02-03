// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: bears/params.proto

package types

import (
	fmt "fmt"
	github_com_cosmos_cosmos_sdk_types "github.com/cosmos/cosmos-sdk/types"
	types "github.com/cosmos/cosmos-sdk/types"
	_ "github.com/gogo/protobuf/gogoproto"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

// Params defines the parameters for the module.
type Params struct {
	BurnRate                github_com_cosmos_cosmos_sdk_types.Dec   `protobuf:"bytes,1,opt,name=burn_rate,json=burnRate,proto3,customtype=github.com/cosmos/cosmos-sdk/types.Dec" json:"burn_rate" yaml:"burn_rate"`
	PriceSetName            github_com_cosmos_cosmos_sdk_types.Coins `protobuf:"bytes,2,rep,name=price_set_name,json=priceSetName,proto3,castrepeated=github.com/cosmos/cosmos-sdk/types.Coins" json:"price_set_name" yaml:"price_set_name"`
	PriceTile               github_com_cosmos_cosmos_sdk_types.Coins `protobuf:"bytes,3,rep,name=price_tile,json=priceTile,proto3,castrepeated=github.com/cosmos/cosmos-sdk/types.Coins" json:"price_tile" yaml:"price_tile"`
	PriceTree               github_com_cosmos_cosmos_sdk_types.Coins `protobuf:"bytes,4,rep,name=price_tree,json=priceTree,proto3,castrepeated=github.com/cosmos/cosmos-sdk/types.Coins" json:"price_tree" yaml:"price_tree"`
	RewardTree              github_com_cosmos_cosmos_sdk_types.Coins `protobuf:"bytes,5,rep,name=reward_tree,json=rewardTree,proto3,castrepeated=github.com/cosmos/cosmos-sdk/types.Coins" json:"reward_tree" yaml:"reward_tree"`
	PriceDecorationFlowers  github_com_cosmos_cosmos_sdk_types.Coins `protobuf:"bytes,6,rep,name=price_decoration_flowers,json=priceDecorationFlowers,proto3,castrepeated=github.com/cosmos/cosmos-sdk/types.Coins" json:"price_decoration_flowers" yaml:"price_decoration_flowers"`
	PriceDecorationFlag     github_com_cosmos_cosmos_sdk_types.Coins `protobuf:"bytes,7,rep,name=price_decoration_flag,json=priceDecorationFlag,proto3,castrepeated=github.com/cosmos/cosmos-sdk/types.Coins" json:"price_decoration_flag" yaml:"price_decoration_flag"`
	PriceDecorationLamp     github_com_cosmos_cosmos_sdk_types.Coins `protobuf:"bytes,8,rep,name=price_decoration_lamp,json=priceDecorationLamp,proto3,castrepeated=github.com/cosmos/cosmos-sdk/types.Coins" json:"price_decoration_lamp" yaml:"price_decoration_lamp"`
	PriceDecorationGreenBee github_com_cosmos_cosmos_sdk_types.Coins `protobuf:"bytes,9,rep,name=price_decoration_green_bee,json=priceDecorationGreenBee,proto3,castrepeated=github.com/cosmos/cosmos-sdk/types.Coins" json:"price_decoration_green_bee" yaml:"price_decoration_green_bee"`
	PriceDecorationFountain github_com_cosmos_cosmos_sdk_types.Coins `protobuf:"bytes,10,rep,name=price_decoration_fountain,json=priceDecorationFountain,proto3,castrepeated=github.com/cosmos/cosmos-sdk/types.Coins" json:"price_decoration_fountain" yaml:"price_decoration_fountain"`
	ApiaryTypes             []ApiaryParams                           `protobuf:"bytes,11,rep,name=apiary_types,json=apiaryTypes,proto3" json:"apiary_types" yaml:"apiary_bee_house_params"`
}

func (m *Params) Reset()      { *m = Params{} }
func (*Params) ProtoMessage() {}
func (*Params) Descriptor() ([]byte, []int) {
	return fileDescriptor_8ad25feeeed35bd0, []int{0}
}
func (m *Params) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Params) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Params.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Params) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Params.Merge(m, src)
}
func (m *Params) XXX_Size() int {
	return m.Size()
}
func (m *Params) XXX_DiscardUnknown() {
	xxx_messageInfo_Params.DiscardUnknown(m)
}

var xxx_messageInfo_Params proto.InternalMessageInfo

func (m *Params) GetPriceSetName() github_com_cosmos_cosmos_sdk_types.Coins {
	if m != nil {
		return m.PriceSetName
	}
	return nil
}

func (m *Params) GetPriceTile() github_com_cosmos_cosmos_sdk_types.Coins {
	if m != nil {
		return m.PriceTile
	}
	return nil
}

func (m *Params) GetPriceTree() github_com_cosmos_cosmos_sdk_types.Coins {
	if m != nil {
		return m.PriceTree
	}
	return nil
}

func (m *Params) GetRewardTree() github_com_cosmos_cosmos_sdk_types.Coins {
	if m != nil {
		return m.RewardTree
	}
	return nil
}

func (m *Params) GetPriceDecorationFlowers() github_com_cosmos_cosmos_sdk_types.Coins {
	if m != nil {
		return m.PriceDecorationFlowers
	}
	return nil
}

func (m *Params) GetPriceDecorationFlag() github_com_cosmos_cosmos_sdk_types.Coins {
	if m != nil {
		return m.PriceDecorationFlag
	}
	return nil
}

func (m *Params) GetPriceDecorationLamp() github_com_cosmos_cosmos_sdk_types.Coins {
	if m != nil {
		return m.PriceDecorationLamp
	}
	return nil
}

func (m *Params) GetPriceDecorationGreenBee() github_com_cosmos_cosmos_sdk_types.Coins {
	if m != nil {
		return m.PriceDecorationGreenBee
	}
	return nil
}

func (m *Params) GetPriceDecorationFountain() github_com_cosmos_cosmos_sdk_types.Coins {
	if m != nil {
		return m.PriceDecorationFountain
	}
	return nil
}

func (m *Params) GetApiaryTypes() []ApiaryParams {
	if m != nil {
		return m.ApiaryTypes
	}
	return nil
}

func init() {
	proto.RegisterType((*Params)(nil), "MonetaToday.honeywood.bears.Params")
}

func init() { proto.RegisterFile("bears/params.proto", fileDescriptor_8ad25feeeed35bd0) }

var fileDescriptor_8ad25feeeed35bd0 = []byte{
	// 616 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xa4, 0xd5, 0xb1, 0x6e, 0xd3, 0x40,
	0x18, 0x07, 0xf0, 0x98, 0x96, 0xd2, 0x5c, 0x2a, 0x04, 0xa6, 0x05, 0xb7, 0x20, 0xbb, 0x64, 0xa8,
	0xca, 0xc0, 0x59, 0x85, 0xad, 0x1b, 0xa6, 0x94, 0x22, 0x01, 0xaa, 0xd2, 0x20, 0x24, 0x16, 0xeb,
	0x6c, 0x7f, 0x38, 0x16, 0xb1, 0xcf, 0x3a, 0x5f, 0x08, 0x99, 0x90, 0x18, 0x99, 0x18, 0xd9, 0x60,
	0x44, 0x20, 0x5e, 0x03, 0x75, 0xec, 0x88, 0x18, 0x02, 0x4a, 0xde, 0xa0, 0x4f, 0x80, 0x7c, 0x77,
	0x8a, 0x0c, 0x69, 0x30, 0x69, 0xa6, 0x58, 0xf2, 0xfd, 0xff, 0xdf, 0xcf, 0xb1, 0xe4, 0x0f, 0xe9,
	0x1e, 0x10, 0x96, 0xd9, 0x29, 0x61, 0x24, 0xce, 0x70, 0xca, 0x28, 0xa7, 0xfa, 0xd5, 0x47, 0x34,
	0x01, 0x4e, 0x9a, 0x34, 0x20, 0x3d, 0xdc, 0xa2, 0x09, 0xf4, 0xba, 0x94, 0x06, 0x58, 0x9c, 0x5c,
	0x5b, 0x0e, 0x69, 0x48, 0xc5, 0x39, 0x3b, 0xbf, 0x92, 0x91, 0x35, 0xd3, 0xa7, 0x59, 0x4c, 0x33,
	0xdb, 0x23, 0x19, 0xd8, 0x2f, 0xb7, 0x3c, 0xe0, 0x64, 0xcb, 0xf6, 0x69, 0x94, 0xa8, 0xfb, 0xcb,
	0x72, 0x0c, 0x49, 0x23, 0xc2, 0x22, 0x50, 0x83, 0xea, 0xdf, 0x96, 0xd0, 0xc2, 0xbe, 0x98, 0xac,
	0xbb, 0xa8, 0xea, 0x75, 0x58, 0xe2, 0x32, 0xc2, 0xc1, 0xd0, 0xd6, 0xb5, 0xcd, 0xaa, 0xe3, 0x1c,
	0xf6, 0xad, 0xca, 0x8f, 0xbe, 0xb5, 0x11, 0x46, 0xbc, 0xd5, 0xf1, 0xb0, 0x4f, 0x63, 0x5b, 0x8d,
	0x91, 0x3f, 0x37, 0xb3, 0xe0, 0x85, 0xcd, 0x7b, 0x29, 0x64, 0x78, 0x07, 0xfc, 0xe3, 0xbe, 0x75,
	0xa1, 0x47, 0xe2, 0xf6, 0x76, 0x7d, 0x54, 0x54, 0x6f, 0x2c, 0xe6, 0xd7, 0x0d, 0xc2, 0x41, 0x7f,
	0xab, 0xa1, 0xf3, 0x29, 0x8b, 0x7c, 0x70, 0x33, 0xe0, 0x6e, 0x42, 0x62, 0x30, 0xce, 0xac, 0xcf,
	0x6d, 0xd6, 0x6e, 0xad, 0x62, 0xd9, 0x86, 0x73, 0x3b, 0x56, 0x76, 0x7c, 0x97, 0x46, 0x89, 0xf3,
	0x20, 0x17, 0x1c, 0xf7, 0xad, 0x15, 0xd9, 0xfb, 0x67, 0xbc, 0xfe, 0xf9, 0xa7, 0xb5, 0xf9, 0x1f,
	0xb4, 0xbc, 0x29, 0x6b, 0x2c, 0x89, 0xf0, 0x01, 0xf0, 0xc7, 0x24, 0x06, 0xfd, 0x35, 0x42, 0xb2,
	0x8c, 0x47, 0x6d, 0x30, 0xe6, 0xca, 0x1c, 0xf7, 0x94, 0xe3, 0x62, 0xd1, 0x91, 0x47, 0xa7, 0x33,
	0x54, 0x45, 0xb0, 0x19, 0xb5, 0x8b, 0x00, 0x06, 0x60, 0xcc, 0x9f, 0x0e, 0xc0, 0xe0, 0x74, 0x00,
	0x06, 0xa0, 0xbf, 0xd1, 0x50, 0x8d, 0x41, 0x97, 0xb0, 0x40, 0x12, 0xce, 0x96, 0x11, 0x76, 0x15,
	0x41, 0x97, 0x84, 0x42, 0x76, 0x3a, 0x03, 0x92, 0x49, 0x81, 0xf8, 0xa4, 0x21, 0x43, 0x3e, 0x4b,
	0x00, 0x3e, 0x65, 0x84, 0x47, 0x34, 0x71, 0x9f, 0xb7, 0x69, 0x17, 0x58, 0x66, 0x2c, 0x94, 0x89,
	0x0e, 0x94, 0xc8, 0x2a, 0xfe, 0x29, 0xe3, 0x45, 0xd3, 0xf1, 0x2e, 0x8b, 0x9a, 0x9d, 0x51, 0xcb,
	0xae, 0x2c, 0xd1, 0x3f, 0x68, 0x68, 0xe5, 0x84, 0x09, 0x24, 0x34, 0xce, 0x95, 0x39, 0xf7, 0x95,
	0xf3, 0xda, 0x44, 0x27, 0x09, 0xa7, 0x43, 0x5e, 0x1a, 0x43, 0x92, 0xf0, 0x64, 0x61, 0x9b, 0xc4,
	0xa9, 0xb1, 0x38, 0xab, 0x30, 0x6f, 0x99, 0x4d, 0xf8, 0x90, 0xc4, 0xa9, 0xfe, 0x55, 0x43, 0x6b,
	0x63, 0xdd, 0x21, 0x03, 0x48, 0x5c, 0x0f, 0xc0, 0xa8, 0x96, 0x31, 0x9f, 0x28, 0xe6, 0xf5, 0x09,
	0xcc, 0x51, 0xd5, 0x74, 0xd6, 0x2b, 0x7f, 0x59, 0xef, 0xe7, 0x35, 0x0e, 0x80, 0xfe, 0x45, 0x43,
	0xab, 0xe3, 0x6f, 0x8b, 0x76, 0x12, 0x4e, 0xa2, 0xc4, 0x40, 0x65, 0xdc, 0xa6, 0xe2, 0xae, 0x4f,
	0x7a, 0xef, 0xaa, 0x69, 0x36, 0xed, 0xae, 0x6a, 0xd1, 0x39, 0x5a, 0x12, 0x9f, 0xf7, 0x9e, 0x2b,
	0x8e, 0x1b, 0x35, 0xe1, 0xbb, 0x81, 0xff, 0xb1, 0x4c, 0xf0, 0x1d, 0x11, 0x90, 0x2b, 0xc0, 0xd9,
	0x50, 0x5e, 0x53, 0x7a, 0x55, 0x99, 0x07, 0xe0, 0xb6, 0x68, 0x27, 0x03, 0x57, 0xee, 0xa8, 0x7a,
	0xa3, 0x26, 0xef, 0x34, 0xf3, 0x29, 0xdb, 0xf3, 0xef, 0x3f, 0x5a, 0x15, 0x67, 0xef, 0x70, 0x60,
	0x6a, 0x47, 0x03, 0x53, 0xfb, 0x35, 0x30, 0xb5, 0x77, 0x43, 0xb3, 0x72, 0x34, 0x34, 0x2b, 0xdf,
	0x87, 0x66, 0xe5, 0x19, 0x2e, 0x3c, 0x58, 0x41, 0x62, 0xef, 0xe5, 0x92, 0xa7, 0x94, 0x06, 0xf6,
	0x2b, 0x5b, 0xee, 0x26, 0xa1, 0xf6, 0x16, 0xc4, 0x66, 0xba, 0xfd, 0x3b, 0x00, 0x00, 0xff, 0xff,
	0x3e, 0xf1, 0x3c, 0x20, 0x18, 0x07, 0x00, 0x00,
}

func (m *Params) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Params) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Params) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.ApiaryTypes) > 0 {
		for iNdEx := len(m.ApiaryTypes) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.ApiaryTypes[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintParams(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x5a
		}
	}
	if len(m.PriceDecorationFountain) > 0 {
		for iNdEx := len(m.PriceDecorationFountain) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.PriceDecorationFountain[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintParams(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x52
		}
	}
	if len(m.PriceDecorationGreenBee) > 0 {
		for iNdEx := len(m.PriceDecorationGreenBee) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.PriceDecorationGreenBee[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintParams(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x4a
		}
	}
	if len(m.PriceDecorationLamp) > 0 {
		for iNdEx := len(m.PriceDecorationLamp) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.PriceDecorationLamp[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintParams(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x42
		}
	}
	if len(m.PriceDecorationFlag) > 0 {
		for iNdEx := len(m.PriceDecorationFlag) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.PriceDecorationFlag[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintParams(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x3a
		}
	}
	if len(m.PriceDecorationFlowers) > 0 {
		for iNdEx := len(m.PriceDecorationFlowers) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.PriceDecorationFlowers[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintParams(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x32
		}
	}
	if len(m.RewardTree) > 0 {
		for iNdEx := len(m.RewardTree) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.RewardTree[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintParams(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x2a
		}
	}
	if len(m.PriceTree) > 0 {
		for iNdEx := len(m.PriceTree) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.PriceTree[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintParams(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x22
		}
	}
	if len(m.PriceTile) > 0 {
		for iNdEx := len(m.PriceTile) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.PriceTile[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintParams(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x1a
		}
	}
	if len(m.PriceSetName) > 0 {
		for iNdEx := len(m.PriceSetName) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.PriceSetName[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintParams(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x12
		}
	}
	{
		size := m.BurnRate.Size()
		i -= size
		if _, err := m.BurnRate.MarshalTo(dAtA[i:]); err != nil {
			return 0, err
		}
		i = encodeVarintParams(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0xa
	return len(dAtA) - i, nil
}

func encodeVarintParams(dAtA []byte, offset int, v uint64) int {
	offset -= sovParams(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Params) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = m.BurnRate.Size()
	n += 1 + l + sovParams(uint64(l))
	if len(m.PriceSetName) > 0 {
		for _, e := range m.PriceSetName {
			l = e.Size()
			n += 1 + l + sovParams(uint64(l))
		}
	}
	if len(m.PriceTile) > 0 {
		for _, e := range m.PriceTile {
			l = e.Size()
			n += 1 + l + sovParams(uint64(l))
		}
	}
	if len(m.PriceTree) > 0 {
		for _, e := range m.PriceTree {
			l = e.Size()
			n += 1 + l + sovParams(uint64(l))
		}
	}
	if len(m.RewardTree) > 0 {
		for _, e := range m.RewardTree {
			l = e.Size()
			n += 1 + l + sovParams(uint64(l))
		}
	}
	if len(m.PriceDecorationFlowers) > 0 {
		for _, e := range m.PriceDecorationFlowers {
			l = e.Size()
			n += 1 + l + sovParams(uint64(l))
		}
	}
	if len(m.PriceDecorationFlag) > 0 {
		for _, e := range m.PriceDecorationFlag {
			l = e.Size()
			n += 1 + l + sovParams(uint64(l))
		}
	}
	if len(m.PriceDecorationLamp) > 0 {
		for _, e := range m.PriceDecorationLamp {
			l = e.Size()
			n += 1 + l + sovParams(uint64(l))
		}
	}
	if len(m.PriceDecorationGreenBee) > 0 {
		for _, e := range m.PriceDecorationGreenBee {
			l = e.Size()
			n += 1 + l + sovParams(uint64(l))
		}
	}
	if len(m.PriceDecorationFountain) > 0 {
		for _, e := range m.PriceDecorationFountain {
			l = e.Size()
			n += 1 + l + sovParams(uint64(l))
		}
	}
	if len(m.ApiaryTypes) > 0 {
		for _, e := range m.ApiaryTypes {
			l = e.Size()
			n += 1 + l + sovParams(uint64(l))
		}
	}
	return n
}

func sovParams(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozParams(x uint64) (n int) {
	return sovParams(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Params) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowParams
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: Params: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Params: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field BurnRate", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowParams
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthParams
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthParams
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.BurnRate.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field PriceSetName", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowParams
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthParams
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthParams
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.PriceSetName = append(m.PriceSetName, types.Coin{})
			if err := m.PriceSetName[len(m.PriceSetName)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field PriceTile", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowParams
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthParams
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthParams
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.PriceTile = append(m.PriceTile, types.Coin{})
			if err := m.PriceTile[len(m.PriceTile)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field PriceTree", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowParams
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthParams
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthParams
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.PriceTree = append(m.PriceTree, types.Coin{})
			if err := m.PriceTree[len(m.PriceTree)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field RewardTree", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowParams
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthParams
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthParams
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.RewardTree = append(m.RewardTree, types.Coin{})
			if err := m.RewardTree[len(m.RewardTree)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 6:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field PriceDecorationFlowers", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowParams
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthParams
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthParams
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.PriceDecorationFlowers = append(m.PriceDecorationFlowers, types.Coin{})
			if err := m.PriceDecorationFlowers[len(m.PriceDecorationFlowers)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 7:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field PriceDecorationFlag", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowParams
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthParams
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthParams
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.PriceDecorationFlag = append(m.PriceDecorationFlag, types.Coin{})
			if err := m.PriceDecorationFlag[len(m.PriceDecorationFlag)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 8:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field PriceDecorationLamp", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowParams
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthParams
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthParams
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.PriceDecorationLamp = append(m.PriceDecorationLamp, types.Coin{})
			if err := m.PriceDecorationLamp[len(m.PriceDecorationLamp)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 9:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field PriceDecorationGreenBee", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowParams
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthParams
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthParams
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.PriceDecorationGreenBee = append(m.PriceDecorationGreenBee, types.Coin{})
			if err := m.PriceDecorationGreenBee[len(m.PriceDecorationGreenBee)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 10:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field PriceDecorationFountain", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowParams
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthParams
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthParams
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.PriceDecorationFountain = append(m.PriceDecorationFountain, types.Coin{})
			if err := m.PriceDecorationFountain[len(m.PriceDecorationFountain)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 11:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ApiaryTypes", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowParams
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthParams
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthParams
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.ApiaryTypes = append(m.ApiaryTypes, ApiaryParams{})
			if err := m.ApiaryTypes[len(m.ApiaryTypes)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipParams(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthParams
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipParams(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowParams
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowParams
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowParams
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthParams
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupParams
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthParams
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthParams        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowParams          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupParams = fmt.Errorf("proto: unexpected end of group")
)
