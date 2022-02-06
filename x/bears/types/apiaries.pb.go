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
	MaxHoney       uint64                                   `protobuf:"varint,4,opt,name=max_honey,json=maxHoney,proto3" json:"max_honey,omitempty" yaml:"max_honey"`
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

func (m *ApiaryParams) GetMaxHoney() uint64 {
	if m != nil {
		return m.MaxHoney
	}
	return 0
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
	Id            uint64         `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	BearOwner     *BearOwner     `protobuf:"bytes,2,opt,name=bearOwner,proto3" json:"bearOwner,omitempty"`
	Position      ItemPosition   `protobuf:"bytes,3,opt,name=position,proto3" json:"position"`
	Params        *ApiaryParams  `protobuf:"bytes,4,opt,name=params,proto3" json:"params,omitempty"`
	CycleHistory  []CycleHistory `protobuf:"bytes,6,rep,name=cycleHistory,proto3" json:"cycleHistory"`
	SpaceOccupied uint64         `protobuf:"varint,7,opt,name=spaceOccupied,proto3" json:"spaceOccupied,omitempty"`
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
	// 551 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x84, 0x53, 0xc1, 0x6e, 0xd3, 0x40,
	0x10, 0x8d, 0x5d, 0x13, 0x92, 0x4d, 0x28, 0xb0, 0x8a, 0x22, 0x13, 0x24, 0x3b, 0xb2, 0x10, 0x0a,
	0x07, 0x6c, 0x25, 0x1c, 0x90, 0x7a, 0x22, 0x0e, 0x87, 0x20, 0x84, 0x5a, 0x99, 0x4a, 0x48, 0x5c,
	0xa2, 0xb5, 0xbd, 0x24, 0x2b, 0x62, 0xaf, 0xf1, 0xba, 0x6d, 0xfc, 0x17, 0x7c, 0x07, 0x47, 0xbe,
	0xa2, 0xc7, 0x1e, 0x39, 0x05, 0x94, 0x1c, 0xb9, 0xe5, 0x0b, 0x90, 0x67, 0xdd, 0xe2, 0x72, 0x08,
	0x97, 0x64, 0x76, 0x76, 0xde, 0x9b, 0xe7, 0x37, 0xb3, 0xa8, 0xe3, 0x53, 0x92, 0x0a, 0x87, 0x24,
	0x8c, 0xa4, 0x8c, 0x0a, 0x3b, 0x49, 0x79, 0xc6, 0xf1, 0xe3, 0x77, 0x3c, 0xa6, 0x19, 0x39, 0xe5,
	0x21, 0xc9, 0xed, 0x05, 0x8f, 0x69, 0x7e, 0xc1, 0x79, 0x68, 0x43, 0x6d, 0xcf, 0x08, 0xb8, 0x88,
	0xb8, 0x70, 0x7c, 0x22, 0xa8, 0x73, 0x3e, 0xf4, 0x69, 0x46, 0x86, 0x4e, 0xc0, 0x59, 0x2c, 0xc1,
	0xbd, 0xce, 0x9c, 0xcf, 0x39, 0x84, 0x4e, 0x11, 0x95, 0x59, 0x2c, 0x1b, 0x7d, 0x62, 0x74, 0x19,
	0x96, 0x6d, 0x7a, 0x0f, 0x65, 0x0e, 0x7e, 0x65, 0xca, 0xfa, 0xae, 0xa2, 0xf6, 0xb8, 0x10, 0x93,
	0x9f, 0x90, 0x94, 0x44, 0x02, 0xbf, 0x44, 0x2d, 0x10, 0x97, 0xcf, 0xb2, 0x3c, 0xa1, 0xba, 0xd2,
	0x57, 0x06, 0x4d, 0xb7, 0xbb, 0x5b, 0x9b, 0x38, 0x27, 0xd1, 0xf2, 0xc8, 0xaa, 0x5c, 0x5a, 0x1e,
	0x92, 0xa7, 0xd3, 0x3c, 0xa1, 0xf8, 0x0b, 0xba, 0x93, 0xa4, 0x2c, 0xa0, 0xba, 0xda, 0x3f, 0x18,
	0xb4, 0x46, 0x8f, 0x6c, 0x29, 0xdb, 0x2e, 0x64, 0xdb, 0xa5, 0x6c, 0x7b, 0xc2, 0x59, 0xec, 0xbe,
	0xba, 0x5c, 0x9b, 0xb5, 0xdd, 0xda, 0x6c, 0x4b, 0x46, 0x40, 0x59, 0xdf, 0x7e, 0x9a, 0x83, 0x39,
	0xcb, 0x16, 0x67, 0xbe, 0x1d, 0xf0, 0xc8, 0x29, 0xbf, 0x59, 0xfe, 0x3d, 0x17, 0xe1, 0x67, 0xa7,
	0xe8, 0x28, 0x80, 0x40, 0x78, 0xb2, 0x13, 0x9e, 0xa0, 0xfb, 0x22, 0x21, 0x01, 0x9d, 0x91, 0x73,
	0xc2, 0x96, 0xc4, 0x5f, 0x52, 0xfd, 0xa0, 0xaf, 0x0c, 0x34, 0xb7, 0xb7, 0x5b, 0x9b, 0x5d, 0xc9,
	0xfe, 0x4f, 0x81, 0xe5, 0x1d, 0x42, 0x66, 0x7c, 0x9d, 0xc0, 0x43, 0xd4, 0x8c, 0xc8, 0x6a, 0x06,
	0xae, 0xeb, 0x1a, 0xc0, 0x3b, 0xbb, 0xb5, 0xf9, 0x40, 0xc2, 0x6f, 0xae, 0x2c, 0xaf, 0x11, 0x91,
	0xd5, 0x14, 0xc2, 0x23, 0xd4, 0x9e, 0xe4, 0xc1, 0x92, 0x4e, 0x99, 0xc8, 0x78, 0x9a, 0xe3, 0x2e,
	0xaa, 0x2f, 0x28, 0x9b, 0x2f, 0x32, 0xb0, 0x4b, 0xf3, 0xca, 0x13, 0xc6, 0x48, 0xf3, 0x29, 0x15,
	0xe0, 0x88, 0xe6, 0x41, 0x6c, 0xfd, 0x56, 0x51, 0x63, 0x5c, 0x4e, 0x1f, 0x1f, 0x22, 0x95, 0x85,
	0x25, 0x48, 0x65, 0x21, 0x7e, 0x8d, 0x9a, 0xc5, 0x70, 0x8e, 0x2f, 0x62, 0x9a, 0xea, 0x6a, 0x5f,
	0x19, 0xb4, 0x46, 0x4f, 0xed, 0x3d, 0xbb, 0x61, 0xbb, 0xd7, 0xd5, 0xde, 0x5f, 0x20, 0x7e, 0x8b,
	0x1a, 0x09, 0x17, 0x2c, 0x63, 0x3c, 0x06, 0x3f, 0x5a, 0xa3, 0x67, 0x7b, 0x49, 0xde, 0x64, 0x34,
	0x3a, 0x29, 0x01, 0xae, 0x56, 0x0c, 0xc7, 0xbb, 0x21, 0xc0, 0x63, 0x54, 0x4f, 0x60, 0x33, 0xc0,
	0x9b, 0xff, 0x51, 0x55, 0x57, 0xc9, 0x2b, 0x81, 0xf8, 0x3d, 0x6a, 0x07, 0x15, 0xbb, 0xf4, 0x3a,
	0x2c, 0xc8, 0x7e, 0xa2, 0xaa, 0xbf, 0xa5, 0xa6, 0x5b, 0x24, 0xf8, 0x09, 0xba, 0x07, 0x83, 0x3c,
	0x0e, 0x82, 0xb3, 0x84, 0xd1, 0x50, 0xbf, 0x0b, 0x2e, 0xde, 0x4e, 0xba, 0xd3, 0xcb, 0x8d, 0xa1,
	0x5c, 0x6d, 0x0c, 0xe5, 0xd7, 0xc6, 0x50, 0xbe, 0x6e, 0x8d, 0xda, 0xd5, 0xd6, 0xa8, 0xfd, 0xd8,
	0x1a, 0xb5, 0x8f, 0x76, 0x65, 0xd9, 0x2a, 0x42, 0x1c, 0x98, 0xf0, 0x07, 0xce, 0x43, 0x67, 0x25,
	0x1f, 0x8a, 0x5c, 0x3c, 0xbf, 0x0e, 0xef, 0xe5, 0xc5, 0x9f, 0x00, 0x00, 0x00, 0xff, 0xff, 0xb1,
	0xeb, 0xc6, 0xeb, 0xc1, 0x03, 0x00, 0x00,
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
	if m.MaxHoney != 0 {
		i = encodeVarintApiaries(dAtA, i, uint64(m.MaxHoney))
		i--
		dAtA[i] = 0x20
	}
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
	if m.SpaceOccupied != 0 {
		i = encodeVarintApiaries(dAtA, i, uint64(m.SpaceOccupied))
		i--
		dAtA[i] = 0x38
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
			dAtA[i] = 0x32
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
	if m.MaxHoney != 0 {
		n += 1 + sovApiaries(uint64(m.MaxHoney))
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
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field MaxHoney", wireType)
			}
			m.MaxHoney = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowApiaries
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.MaxHoney |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
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
		case 6:
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
		case 7:
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
