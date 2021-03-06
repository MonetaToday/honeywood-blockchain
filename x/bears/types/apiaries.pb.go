// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: bears/apiaries.proto

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

type ApiaryParams struct {
	ApiaryType     string                                   `protobuf:"bytes,1,opt,name=apiary_type,json=apiaryType,proto3" json:"apiary_type,omitempty" yaml:"apiary_type"`
	Price          github_com_cosmos_cosmos_sdk_types.Coins `protobuf:"bytes,2,rep,name=price,proto3,castrepeated=github.com/cosmos/cosmos-sdk/types.Coins" json:"price" yaml:"price"`
	SpaceAvailable uint64                                   `protobuf:"varint,3,opt,name=space_available,json=spaceAvailable,proto3" json:"space_available,omitempty" yaml:"space_available"`
	MaxHoney       github_com_cosmos_cosmos_sdk_types.Dec   `protobuf:"bytes,4,opt,name=max_honey,json=maxHoney,proto3,customtype=github.com/cosmos/cosmos-sdk/types.Dec" json:"max_honey" yaml:"max_honey"`
	DeleteReward   github_com_cosmos_cosmos_sdk_types.Coins `protobuf:"bytes,5,rep,name=delete_reward,json=deleteReward,proto3,castrepeated=github.com/cosmos/cosmos-sdk/types.Coins" json:"delete_reward" yaml:"delete_reward"`
}

func (m *ApiaryParams) Reset()         { *m = ApiaryParams{} }
func (m *ApiaryParams) String() string { return proto.CompactTextString(m) }
func (*ApiaryParams) ProtoMessage()    {}
func (*ApiaryParams) Descriptor() ([]byte, []int) {
	return fileDescriptor_e18fa6f115c398f1, []int{0}
}
func (m *ApiaryParams) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *ApiaryParams) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_ApiaryParams.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *ApiaryParams) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ApiaryParams.Merge(m, src)
}
func (m *ApiaryParams) XXX_Size() int {
	return m.Size()
}
func (m *ApiaryParams) XXX_DiscardUnknown() {
	xxx_messageInfo_ApiaryParams.DiscardUnknown(m)
}

var xxx_messageInfo_ApiaryParams proto.InternalMessageInfo

func (m *ApiaryParams) GetApiaryType() string {
	if m != nil {
		return m.ApiaryType
	}
	return ""
}

func (m *ApiaryParams) GetPrice() github_com_cosmos_cosmos_sdk_types.Coins {
	if m != nil {
		return m.Price
	}
	return nil
}

func (m *ApiaryParams) GetSpaceAvailable() uint64 {
	if m != nil {
		return m.SpaceAvailable
	}
	return 0
}

func (m *ApiaryParams) GetDeleteReward() github_com_cosmos_cosmos_sdk_types.Coins {
	if m != nil {
		return m.DeleteReward
	}
	return nil
}

type CycleHistory struct {
	Height uint64   `protobuf:"varint,1,opt,name=height,proto3" json:"height,omitempty"`
	Bees   []uint64 `protobuf:"varint,2,rep,packed,name=bees,proto3" json:"bees,omitempty"`
}

func (m *CycleHistory) Reset()         { *m = CycleHistory{} }
func (m *CycleHistory) String() string { return proto.CompactTextString(m) }
func (*CycleHistory) ProtoMessage()    {}
func (*CycleHistory) Descriptor() ([]byte, []int) {
	return fileDescriptor_e18fa6f115c398f1, []int{1}
}
func (m *CycleHistory) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *CycleHistory) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_CycleHistory.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *CycleHistory) XXX_Merge(src proto.Message) {
	xxx_messageInfo_CycleHistory.Merge(m, src)
}
func (m *CycleHistory) XXX_Size() int {
	return m.Size()
}
func (m *CycleHistory) XXX_DiscardUnknown() {
	xxx_messageInfo_CycleHistory.DiscardUnknown(m)
}

var xxx_messageInfo_CycleHistory proto.InternalMessageInfo

func (m *CycleHistory) GetHeight() uint64 {
	if m != nil {
		return m.Height
	}
	return 0
}

func (m *CycleHistory) GetBees() []uint64 {
	if m != nil {
		return m.Bees
	}
	return nil
}

type Apiaries struct {
	Id            uint64                                 `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	BearOwner     *BearOwner                             `protobuf:"bytes,2,opt,name=bearOwner,proto3" json:"bearOwner,omitempty"`
	Position      ItemPosition                           `protobuf:"bytes,3,opt,name=position,proto3" json:"position"`
	Params        *ApiaryParams                          `protobuf:"bytes,4,opt,name=params,proto3" json:"params,omitempty"`
	CycleHistory  []CycleHistory                         `protobuf:"bytes,5,rep,name=cycleHistory,proto3" json:"cycleHistory"`
	SpaceOccupied uint64                                 `protobuf:"varint,6,opt,name=spaceOccupied,proto3" json:"spaceOccupied,omitempty"`
	HoneyFromPast github_com_cosmos_cosmos_sdk_types.Dec `protobuf:"bytes,7,opt,name=honeyFromPast,proto3,customtype=github.com/cosmos/cosmos-sdk/types.Dec" json:"honeyFromPast"`
}

func (m *Apiaries) Reset()         { *m = Apiaries{} }
func (m *Apiaries) String() string { return proto.CompactTextString(m) }
func (*Apiaries) ProtoMessage()    {}
func (*Apiaries) Descriptor() ([]byte, []int) {
	return fileDescriptor_e18fa6f115c398f1, []int{2}
}
func (m *Apiaries) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Apiaries) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Apiaries.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Apiaries) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Apiaries.Merge(m, src)
}
func (m *Apiaries) XXX_Size() int {
	return m.Size()
}
func (m *Apiaries) XXX_DiscardUnknown() {
	xxx_messageInfo_Apiaries.DiscardUnknown(m)
}

var xxx_messageInfo_Apiaries proto.InternalMessageInfo

func (m *Apiaries) GetId() uint64 {
	if m != nil {
		return m.Id
	}
	return 0
}

func (m *Apiaries) GetBearOwner() *BearOwner {
	if m != nil {
		return m.BearOwner
	}
	return nil
}

func (m *Apiaries) GetPosition() ItemPosition {
	if m != nil {
		return m.Position
	}
	return ItemPosition{}
}

func (m *Apiaries) GetParams() *ApiaryParams {
	if m != nil {
		return m.Params
	}
	return nil
}

func (m *Apiaries) GetCycleHistory() []CycleHistory {
	if m != nil {
		return m.CycleHistory
	}
	return nil
}

func (m *Apiaries) GetSpaceOccupied() uint64 {
	if m != nil {
		return m.SpaceOccupied
	}
	return 0
}

func init() {
	proto.RegisterType((*ApiaryParams)(nil), "MonetaToday.honeywood.bears.ApiaryParams")
	proto.RegisterType((*CycleHistory)(nil), "MonetaToday.honeywood.bears.CycleHistory")
	proto.RegisterType((*Apiaries)(nil), "MonetaToday.honeywood.bears.Apiaries")
}

func init() { proto.RegisterFile("bears/apiaries.proto", fileDescriptor_e18fa6f115c398f1) }

var fileDescriptor_e18fa6f115c398f1 = []byte{
	// 621 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x94, 0x54, 0xcd, 0x6e, 0xd3, 0x4c,
	0x14, 0x8d, 0x93, 0x34, 0x5f, 0x3b, 0x49, 0xfb, 0xc1, 0xa8, 0xaa, 0x4c, 0x90, 0xec, 0xc8, 0x42,
	0x55, 0x58, 0x30, 0x56, 0xcb, 0x02, 0xa9, 0x2b, 0xe2, 0x56, 0x28, 0x08, 0xa1, 0x56, 0xa6, 0x12,
	0x12, 0x9b, 0x68, 0x6c, 0x5f, 0x92, 0x11, 0x71, 0xc6, 0x78, 0xdc, 0x1f, 0xbf, 0x01, 0x4b, 0x9e,
	0x83, 0xb7, 0x60, 0xd7, 0x65, 0x97, 0x88, 0x85, 0x41, 0xed, 0x92, 0x5d, 0x9e, 0x00, 0x79, 0x66,
	0x5a, 0x1c, 0x16, 0x2d, 0xdd, 0x24, 0xd7, 0x37, 0x73, 0xce, 0x3d, 0x73, 0xee, 0x89, 0xd1, 0x7a,
	0x00, 0x34, 0x15, 0x2e, 0x4d, 0x18, 0x4d, 0x19, 0x08, 0x92, 0xa4, 0x3c, 0xe3, 0xf8, 0xe1, 0x6b,
	0x3e, 0x83, 0x8c, 0x1e, 0xf2, 0x88, 0xe6, 0x64, 0xc2, 0x67, 0x90, 0x9f, 0x70, 0x1e, 0x11, 0x79,
	0xb6, 0x6b, 0x85, 0x5c, 0xc4, 0x5c, 0xb8, 0x01, 0x15, 0xe0, 0x1e, 0x6f, 0x05, 0x90, 0xd1, 0x2d,
	0x37, 0xe4, 0x6c, 0xa6, 0xc0, 0xdd, 0xf5, 0x31, 0x1f, 0x73, 0x59, 0xba, 0x65, 0xa5, 0xbb, 0x58,
	0x0d, 0x7a, 0xcf, 0x60, 0x1a, 0xe9, 0x31, 0xdd, 0xfb, 0xaa, 0x27, 0x3f, 0x55, 0xcb, 0xf9, 0xd5,
	0x40, 0x9d, 0x41, 0x29, 0x26, 0x3f, 0xa0, 0x29, 0x8d, 0x05, 0x7e, 0x86, 0xda, 0x52, 0x5c, 0x3e,
	0xca, 0xf2, 0x04, 0x4c, 0xa3, 0x67, 0xf4, 0x57, 0xbc, 0x8d, 0x79, 0x61, 0xe3, 0x9c, 0xc6, 0xd3,
	0x1d, 0xa7, 0xf2, 0xa3, 0xe3, 0x23, 0xf5, 0x74, 0x98, 0x27, 0x80, 0x3f, 0xa2, 0xa5, 0x24, 0x65,
	0x21, 0x98, 0xf5, 0x5e, 0xa3, 0xdf, 0xde, 0x7e, 0x40, 0x94, 0x6c, 0x52, 0xca, 0x26, 0x5a, 0x36,
	0xd9, 0xe5, 0x6c, 0xe6, 0x3d, 0x3f, 0x2b, 0xec, 0xda, 0xbc, 0xb0, 0x3b, 0x8a, 0x51, 0xa2, 0x9c,
	0x2f, 0x3f, 0xec, 0xfe, 0x98, 0x65, 0x93, 0xa3, 0x80, 0x84, 0x3c, 0x76, 0xf5, 0x9d, 0xd5, 0xd7,
	0x13, 0x11, 0x7d, 0x70, 0xcb, 0x89, 0x42, 0x12, 0x08, 0x5f, 0x4d, 0xc2, 0xbb, 0xe8, 0x7f, 0x91,
	0xd0, 0x10, 0x46, 0xf4, 0x98, 0xb2, 0x29, 0x0d, 0xa6, 0x60, 0x36, 0x7a, 0x46, 0xbf, 0xe9, 0x75,
	0xe7, 0x85, 0xbd, 0xa1, 0xd8, 0xff, 0x3a, 0xe0, 0xf8, 0x6b, 0xb2, 0x33, 0xb8, 0x6a, 0xe0, 0x11,
	0x5a, 0x89, 0xe9, 0xe9, 0x48, 0xba, 0x6e, 0x36, 0xe5, 0x75, 0xbd, 0x52, 0xe0, 0xf7, 0xc2, 0xde,
	0xfc, 0x07, 0x41, 0x7b, 0x10, 0xce, 0x0b, 0xfb, 0x9e, 0x1a, 0x76, 0x4d, 0xe4, 0xf8, 0xcb, 0x31,
	0x3d, 0x1d, 0x96, 0x25, 0xfe, 0x64, 0xa0, 0xd5, 0x08, 0xa6, 0x90, 0xc1, 0x28, 0x85, 0x13, 0x9a,
	0x46, 0xe6, 0xd2, 0x6d, 0x0e, 0x0d, 0xb5, 0x43, 0xeb, 0x8a, 0x76, 0x01, 0x7d, 0x37, 0xa7, 0x3a,
	0x0a, 0xeb, 0x2b, 0xe8, 0x0e, 0xea, 0xec, 0xe6, 0xe1, 0x14, 0x86, 0x4c, 0x64, 0x3c, 0xcd, 0xf1,
	0x06, 0x6a, 0x4d, 0x80, 0x8d, 0x27, 0x99, 0xdc, 0x73, 0xd3, 0xd7, 0x4f, 0x18, 0xa3, 0x66, 0x00,
	0x20, 0xe4, 0x2a, 0x9b, 0xbe, 0xac, 0x9d, 0xaf, 0x0d, 0xb4, 0x3c, 0xd0, 0xb1, 0xc5, 0x6b, 0xa8,
	0xce, 0x22, 0x0d, 0xaa, 0xb3, 0x08, 0xef, 0xa1, 0x95, 0x32, 0x55, 0xfb, 0x27, 0x33, 0x48, 0xcd,
	0x7a, 0xcf, 0xe8, 0xb7, 0xb7, 0x37, 0xc9, 0x0d, 0xa1, 0x26, 0xde, 0xd5, 0x69, 0xff, 0x0f, 0x10,
	0xbf, 0x42, 0xcb, 0x09, 0x17, 0x2c, 0x63, 0x7c, 0x26, 0x17, 0xd9, 0xde, 0x7e, 0x7c, 0x23, 0xc9,
	0xcb, 0x0c, 0xe2, 0x03, 0x0d, 0xf0, 0x9a, 0xa5, 0x67, 0xfe, 0x35, 0x01, 0x1e, 0xa0, 0x56, 0x22,
	0x23, 0x2d, 0x97, 0x7a, 0x1b, 0x55, 0xf5, 0x3f, 0xe0, 0x6b, 0x20, 0x7e, 0x83, 0x3a, 0x61, 0xc5,
	0x2e, 0xbd, 0xb7, 0x9b, 0x89, 0xaa, 0xfe, 0x6a, 0x4d, 0x0b, 0x24, 0xf8, 0x11, 0x5a, 0x95, 0x09,
	0xdc, 0x0f, 0xc3, 0xa3, 0x84, 0x41, 0x64, 0xb6, 0xa4, 0x8b, 0x8b, 0x4d, 0x7c, 0x88, 0x56, 0x25,
	0xf3, 0x8b, 0x94, 0xc7, 0x07, 0x54, 0x64, 0xe6, 0x7f, 0x32, 0x99, 0xe4, 0x6e, 0xc9, 0xf4, 0x17,
	0x49, 0xbc, 0xe1, 0xd9, 0x85, 0x65, 0x9c, 0x5f, 0x58, 0xc6, 0xcf, 0x0b, 0xcb, 0xf8, 0x7c, 0x69,
	0xd5, 0xce, 0x2f, 0xad, 0xda, 0xb7, 0x4b, 0xab, 0xf6, 0x8e, 0x54, 0x08, 0x2b, 0xd7, 0x73, 0x65,
	0x84, 0xdf, 0x72, 0x1e, 0xb9, 0xa7, 0xea, 0xbd, 0xa1, 0xc8, 0x83, 0x96, 0x7c, 0x7d, 0x3c, 0xfd,
	0x1d, 0x00, 0x00, 0xff, 0xff, 0x5c, 0x36, 0xa0, 0xd5, 0xd0, 0x04, 0x00, 0x00,
}

func (m *ApiaryParams) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *ApiaryParams) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *ApiaryParams) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.DeleteReward) > 0 {
		for iNdEx := len(m.DeleteReward) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.DeleteReward[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintApiaries(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x2a
		}
	}
	{
		size := m.MaxHoney.Size()
		i -= size
		if _, err := m.MaxHoney.MarshalTo(dAtA[i:]); err != nil {
			return 0, err
		}
		i = encodeVarintApiaries(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x22
	if m.SpaceAvailable != 0 {
		i = encodeVarintApiaries(dAtA, i, uint64(m.SpaceAvailable))
		i--
		dAtA[i] = 0x18
	}
	if len(m.Price) > 0 {
		for iNdEx := len(m.Price) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.Price[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintApiaries(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x12
		}
	}
	if len(m.ApiaryType) > 0 {
		i -= len(m.ApiaryType)
		copy(dAtA[i:], m.ApiaryType)
		i = encodeVarintApiaries(dAtA, i, uint64(len(m.ApiaryType)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *CycleHistory) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *CycleHistory) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *CycleHistory) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Bees) > 0 {
		dAtA2 := make([]byte, len(m.Bees)*10)
		var j1 int
		for _, num := range m.Bees {
			for num >= 1<<7 {
				dAtA2[j1] = uint8(uint64(num)&0x7f | 0x80)
				num >>= 7
				j1++
			}
			dAtA2[j1] = uint8(num)
			j1++
		}
		i -= j1
		copy(dAtA[i:], dAtA2[:j1])
		i = encodeVarintApiaries(dAtA, i, uint64(j1))
		i--
		dAtA[i] = 0x12
	}
	if m.Height != 0 {
		i = encodeVarintApiaries(dAtA, i, uint64(m.Height))
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func (m *Apiaries) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Apiaries) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Apiaries) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	{
		size := m.HoneyFromPast.Size()
		i -= size
		if _, err := m.HoneyFromPast.MarshalTo(dAtA[i:]); err != nil {
			return 0, err
		}
		i = encodeVarintApiaries(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x3a
	if m.SpaceOccupied != 0 {
		i = encodeVarintApiaries(dAtA, i, uint64(m.SpaceOccupied))
		i--
		dAtA[i] = 0x30
	}
	if len(m.CycleHistory) > 0 {
		for iNdEx := len(m.CycleHistory) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.CycleHistory[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintApiaries(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x2a
		}
	}
	if m.Params != nil {
		{
			size, err := m.Params.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintApiaries(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x22
	}
	{
		size, err := m.Position.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintApiaries(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x1a
	if m.BearOwner != nil {
		{
			size, err := m.BearOwner.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintApiaries(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x12
	}
	if m.Id != 0 {
		i = encodeVarintApiaries(dAtA, i, uint64(m.Id))
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func encodeVarintApiaries(dAtA []byte, offset int, v uint64) int {
	offset -= sovApiaries(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *ApiaryParams) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.ApiaryType)
	if l > 0 {
		n += 1 + l + sovApiaries(uint64(l))
	}
	if len(m.Price) > 0 {
		for _, e := range m.Price {
			l = e.Size()
			n += 1 + l + sovApiaries(uint64(l))
		}
	}
	if m.SpaceAvailable != 0 {
		n += 1 + sovApiaries(uint64(m.SpaceAvailable))
	}
	l = m.MaxHoney.Size()
	n += 1 + l + sovApiaries(uint64(l))
	if len(m.DeleteReward) > 0 {
		for _, e := range m.DeleteReward {
			l = e.Size()
			n += 1 + l + sovApiaries(uint64(l))
		}
	}
	return n
}

func (m *CycleHistory) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Height != 0 {
		n += 1 + sovApiaries(uint64(m.Height))
	}
	if len(m.Bees) > 0 {
		l = 0
		for _, e := range m.Bees {
			l += sovApiaries(uint64(e))
		}
		n += 1 + sovApiaries(uint64(l)) + l
	}
	return n
}

func (m *Apiaries) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Id != 0 {
		n += 1 + sovApiaries(uint64(m.Id))
	}
	if m.BearOwner != nil {
		l = m.BearOwner.Size()
		n += 1 + l + sovApiaries(uint64(l))
	}
	l = m.Position.Size()
	n += 1 + l + sovApiaries(uint64(l))
	if m.Params != nil {
		l = m.Params.Size()
		n += 1 + l + sovApiaries(uint64(l))
	}
	if len(m.CycleHistory) > 0 {
		for _, e := range m.CycleHistory {
			l = e.Size()
			n += 1 + l + sovApiaries(uint64(l))
		}
	}
	if m.SpaceOccupied != 0 {
		n += 1 + sovApiaries(uint64(m.SpaceOccupied))
	}
	l = m.HoneyFromPast.Size()
	n += 1 + l + sovApiaries(uint64(l))
	return n
}

func sovApiaries(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozApiaries(x uint64) (n int) {
	return sovApiaries(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *ApiaryParams) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowApiaries
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
			return fmt.Errorf("proto: ApiaryParams: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: ApiaryParams: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ApiaryType", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowApiaries
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
				return ErrInvalidLengthApiaries
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthApiaries
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.ApiaryType = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Price", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowApiaries
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
				return ErrInvalidLengthApiaries
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthApiaries
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Price = append(m.Price, types.Coin{})
			if err := m.Price[len(m.Price)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 3:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field SpaceAvailable", wireType)
			}
			m.SpaceAvailable = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowApiaries
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.SpaceAvailable |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field MaxHoney", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowApiaries
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
				return ErrInvalidLengthApiaries
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthApiaries
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.MaxHoney.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field DeleteReward", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowApiaries
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
				return ErrInvalidLengthApiaries
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthApiaries
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.DeleteReward = append(m.DeleteReward, types.Coin{})
			if err := m.DeleteReward[len(m.DeleteReward)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipApiaries(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthApiaries
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
func (m *CycleHistory) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowApiaries
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
			return fmt.Errorf("proto: CycleHistory: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: CycleHistory: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Height", wireType)
			}
			m.Height = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowApiaries
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Height |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 2:
			if wireType == 0 {
				var v uint64
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return ErrIntOverflowApiaries
					}
					if iNdEx >= l {
						return io.ErrUnexpectedEOF
					}
					b := dAtA[iNdEx]
					iNdEx++
					v |= uint64(b&0x7F) << shift
					if b < 0x80 {
						break
					}
				}
				m.Bees = append(m.Bees, v)
			} else if wireType == 2 {
				var packedLen int
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return ErrIntOverflowApiaries
					}
					if iNdEx >= l {
						return io.ErrUnexpectedEOF
					}
					b := dAtA[iNdEx]
					iNdEx++
					packedLen |= int(b&0x7F) << shift
					if b < 0x80 {
						break
					}
				}
				if packedLen < 0 {
					return ErrInvalidLengthApiaries
				}
				postIndex := iNdEx + packedLen
				if postIndex < 0 {
					return ErrInvalidLengthApiaries
				}
				if postIndex > l {
					return io.ErrUnexpectedEOF
				}
				var elementCount int
				var count int
				for _, integer := range dAtA[iNdEx:postIndex] {
					if integer < 128 {
						count++
					}
				}
				elementCount = count
				if elementCount != 0 && len(m.Bees) == 0 {
					m.Bees = make([]uint64, 0, elementCount)
				}
				for iNdEx < postIndex {
					var v uint64
					for shift := uint(0); ; shift += 7 {
						if shift >= 64 {
							return ErrIntOverflowApiaries
						}
						if iNdEx >= l {
							return io.ErrUnexpectedEOF
						}
						b := dAtA[iNdEx]
						iNdEx++
						v |= uint64(b&0x7F) << shift
						if b < 0x80 {
							break
						}
					}
					m.Bees = append(m.Bees, v)
				}
			} else {
				return fmt.Errorf("proto: wrong wireType = %d for field Bees", wireType)
			}
		default:
			iNdEx = preIndex
			skippy, err := skipApiaries(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthApiaries
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
func (m *Apiaries) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowApiaries
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
			return fmt.Errorf("proto: Apiaries: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Apiaries: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Id", wireType)
			}
			m.Id = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowApiaries
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Id |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field BearOwner", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowApiaries
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
				return ErrInvalidLengthApiaries
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthApiaries
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.BearOwner == nil {
				m.BearOwner = &BearOwner{}
			}
			if err := m.BearOwner.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Position", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowApiaries
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
				return ErrInvalidLengthApiaries
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthApiaries
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.Position.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Params", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowApiaries
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
				return ErrInvalidLengthApiaries
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthApiaries
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Params == nil {
				m.Params = &ApiaryParams{}
			}
			if err := m.Params.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field CycleHistory", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowApiaries
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
				return ErrInvalidLengthApiaries
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthApiaries
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.CycleHistory = append(m.CycleHistory, CycleHistory{})
			if err := m.CycleHistory[len(m.CycleHistory)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 6:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field SpaceOccupied", wireType)
			}
			m.SpaceOccupied = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowApiaries
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.SpaceOccupied |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 7:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field HoneyFromPast", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowApiaries
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
				return ErrInvalidLengthApiaries
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthApiaries
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.HoneyFromPast.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipApiaries(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthApiaries
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
func skipApiaries(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowApiaries
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
					return 0, ErrIntOverflowApiaries
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
					return 0, ErrIntOverflowApiaries
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
				return 0, ErrInvalidLengthApiaries
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupApiaries
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthApiaries
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthApiaries        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowApiaries          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupApiaries = fmt.Errorf("proto: unexpected end of group")
)
