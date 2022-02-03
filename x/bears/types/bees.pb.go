// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: bears/bees.proto

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

type BeeParams struct {
	BeeType       string                                   `protobuf:"bytes,1,opt,name=bee_type,json=beeType,proto3" json:"bee_type,omitempty" yaml:"bee_type"`
	Price         github_com_cosmos_cosmos_sdk_types.Coins `protobuf:"bytes,2,rep,name=price,proto3,castrepeated=github.com/cosmos/cosmos-sdk/types.Coins" json:"price" yaml:"price"`
	HoneyPerBlock github_com_cosmos_cosmos_sdk_types.Dec   `protobuf:"bytes,3,opt,name=honey_per_block,json=honeyPerBlock,proto3,customtype=github.com/cosmos/cosmos-sdk/types.Dec" json:"honey_per_block" yaml:"honey_per_block"`
	BodySize      uint64                                   `protobuf:"varint,4,opt,name=body_size,json=bodySize,proto3" json:"body_size,omitempty" yaml:"size"`
	OxygenSense   github_com_cosmos_cosmos_sdk_types.Dec   `protobuf:"bytes,5,opt,name=oxygen_sense,json=oxygenSense,proto3,customtype=github.com/cosmos/cosmos-sdk/types.Dec" json:"oxygen_sense" yaml:"oxygen_sense"`
}

func (m *BeeParams) Reset()         { *m = BeeParams{} }
func (m *BeeParams) String() string { return proto.CompactTextString(m) }
func (*BeeParams) ProtoMessage()    {}
func (*BeeParams) Descriptor() ([]byte, []int) {
	return fileDescriptor_fa990cf1ae892223, []int{0}
}
func (m *BeeParams) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *BeeParams) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_BeeParams.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *BeeParams) XXX_Merge(src proto.Message) {
	xxx_messageInfo_BeeParams.Merge(m, src)
}
func (m *BeeParams) XXX_Size() int {
	return m.Size()
}
func (m *BeeParams) XXX_DiscardUnknown() {
	xxx_messageInfo_BeeParams.DiscardUnknown(m)
}

var xxx_messageInfo_BeeParams proto.InternalMessageInfo

func (m *BeeParams) GetBeeType() string {
	if m != nil {
		return m.BeeType
	}
	return ""
}

func (m *BeeParams) GetPrice() github_com_cosmos_cosmos_sdk_types.Coins {
	if m != nil {
		return m.Price
	}
	return nil
}

func (m *BeeParams) GetBodySize() uint64 {
	if m != nil {
		return m.BodySize
	}
	return 0
}

type ApiaryHouse struct {
	Id uint64 `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (m *ApiaryHouse) Reset()         { *m = ApiaryHouse{} }
func (m *ApiaryHouse) String() string { return proto.CompactTextString(m) }
func (*ApiaryHouse) ProtoMessage()    {}
func (*ApiaryHouse) Descriptor() ([]byte, []int) {
	return fileDescriptor_fa990cf1ae892223, []int{1}
}
func (m *ApiaryHouse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *ApiaryHouse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_ApiaryHouse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *ApiaryHouse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ApiaryHouse.Merge(m, src)
}
func (m *ApiaryHouse) XXX_Size() int {
	return m.Size()
}
func (m *ApiaryHouse) XXX_DiscardUnknown() {
	xxx_messageInfo_ApiaryHouse.DiscardUnknown(m)
}

var xxx_messageInfo_ApiaryHouse proto.InternalMessageInfo

func (m *ApiaryHouse) GetId() uint64 {
	if m != nil {
		return m.Id
	}
	return 0
}

type Bees struct {
	Id          uint64       `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	BearOwner   *BearOwner   `protobuf:"bytes,2,opt,name=bearOwner,proto3" json:"bearOwner,omitempty"`
	ApiaryHouse *ApiaryHouse `protobuf:"bytes,3,opt,name=apiaryHouse,proto3" json:"apiaryHouse,omitempty"`
	Params      BeeParams    `protobuf:"bytes,4,opt,name=params,proto3" json:"params"`
}

func (m *Bees) Reset()         { *m = Bees{} }
func (m *Bees) String() string { return proto.CompactTextString(m) }
func (*Bees) ProtoMessage()    {}
func (*Bees) Descriptor() ([]byte, []int) {
	return fileDescriptor_fa990cf1ae892223, []int{2}
}
func (m *Bees) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Bees) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Bees.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Bees) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Bees.Merge(m, src)
}
func (m *Bees) XXX_Size() int {
	return m.Size()
}
func (m *Bees) XXX_DiscardUnknown() {
	xxx_messageInfo_Bees.DiscardUnknown(m)
}

var xxx_messageInfo_Bees proto.InternalMessageInfo

func (m *Bees) GetId() uint64 {
	if m != nil {
		return m.Id
	}
	return 0
}

func (m *Bees) GetBearOwner() *BearOwner {
	if m != nil {
		return m.BearOwner
	}
	return nil
}

func (m *Bees) GetApiaryHouse() *ApiaryHouse {
	if m != nil {
		return m.ApiaryHouse
	}
	return nil
}

func (m *Bees) GetParams() BeeParams {
	if m != nil {
		return m.Params
	}
	return BeeParams{}
}

func init() {
	proto.RegisterType((*BeeParams)(nil), "MonetaToday.honeywood.bears.BeeParams")
	proto.RegisterType((*ApiaryHouse)(nil), "MonetaToday.honeywood.bears.ApiaryHouse")
	proto.RegisterType((*Bees)(nil), "MonetaToday.honeywood.bears.Bees")
}

func init() { proto.RegisterFile("bears/bees.proto", fileDescriptor_fa990cf1ae892223) }

var fileDescriptor_fa990cf1ae892223 = []byte{
	// 519 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x94, 0x53, 0xcf, 0x6e, 0xd3, 0x4c,
	0x10, 0x8f, 0x93, 0xb4, 0x5f, 0xb3, 0xee, 0x47, 0xc0, 0x45, 0xc8, 0x14, 0x61, 0x47, 0x3e, 0x54,
	0x3e, 0xc0, 0x5a, 0x0d, 0x37, 0x4e, 0x60, 0x82, 0x14, 0x21, 0x21, 0x2a, 0xb7, 0x12, 0x12, 0x97,
	0x68, 0xd7, 0x1e, 0x25, 0x56, 0x1b, 0x8f, 0xf1, 0xa6, 0xb4, 0xee, 0x53, 0xf0, 0x1c, 0x3c, 0x01,
	0x8f, 0xd0, 0x63, 0x8f, 0x88, 0x83, 0x41, 0xc9, 0x9d, 0x43, 0x9e, 0x00, 0xed, 0xae, 0xa3, 0x46,
	0x3d, 0x14, 0x38, 0x79, 0x67, 0x76, 0x7e, 0x7f, 0x3c, 0x33, 0x4b, 0xee, 0x72, 0x60, 0x85, 0x08,
	0x38, 0x80, 0xa0, 0x79, 0x81, 0x33, 0xb4, 0x1e, 0xbd, 0xc5, 0x0c, 0x66, 0xec, 0x08, 0x13, 0x56,
	0xd2, 0x09, 0x66, 0x50, 0x9e, 0x21, 0x26, 0x54, 0xd5, 0xed, 0x3a, 0x31, 0x8a, 0x29, 0x8a, 0x80,
	0x33, 0x01, 0xc1, 0xa7, 0x7d, 0x0e, 0x33, 0xb6, 0x1f, 0xc4, 0x98, 0x66, 0x1a, 0xbc, 0x7b, 0x7f,
	0x8c, 0x63, 0x54, 0xc7, 0x40, 0x9e, 0xea, 0xec, 0xbd, 0x95, 0x08, 0x2b, 0x6a, 0x15, 0xef, 0x6b,
	0x8b, 0x74, 0x42, 0x80, 0x03, 0x56, 0xb0, 0xa9, 0xb0, 0x28, 0xd9, 0xe2, 0x00, 0xa3, 0x59, 0x99,
	0x83, 0x6d, 0xf4, 0x0c, 0xbf, 0x13, 0xee, 0x2c, 0x2b, 0xb7, 0x5b, 0xb2, 0xe9, 0xc9, 0x73, 0x6f,
	0x75, 0xe3, 0x45, 0xff, 0x71, 0x80, 0xa3, 0x32, 0x07, 0xeb, 0x23, 0xd9, 0xc8, 0x8b, 0x34, 0x06,
	0xbb, 0xd9, 0x6b, 0xf9, 0x66, 0xff, 0x21, 0xd5, 0xb6, 0xa8, 0xb4, 0x45, 0x6b, 0x5b, 0xf4, 0x15,
	0xa6, 0x59, 0xf8, 0xe2, 0xb2, 0x72, 0x1b, 0xcb, 0xca, 0xdd, 0xd6, 0x5c, 0x0a, 0xe5, 0x7d, 0xf9,
	0xe1, 0xfa, 0xe3, 0x74, 0x36, 0x39, 0xe5, 0x34, 0xc6, 0x69, 0x50, 0xff, 0x93, 0xfe, 0x3c, 0x15,
	0xc9, 0x71, 0x20, 0xe5, 0x84, 0x22, 0x10, 0x91, 0x56, 0xb2, 0x72, 0xd2, 0x55, 0xcd, 0x18, 0xe5,
	0x50, 0x8c, 0xf8, 0x09, 0xc6, 0xc7, 0x76, 0x4b, 0x39, 0x1d, 0x4a, 0x85, 0xef, 0x95, 0xbb, 0xf7,
	0x17, 0x8c, 0x03, 0x88, 0x97, 0x95, 0xfb, 0x40, 0x7b, 0xb9, 0x41, 0xe7, 0x45, 0xff, 0xab, 0xcc,
	0x01, 0x14, 0xa1, 0x8c, 0xad, 0x27, 0xa4, 0xc3, 0x31, 0x29, 0x47, 0x22, 0xbd, 0x00, 0xbb, 0xdd,
	0x33, 0xfc, 0x76, 0xd8, 0x5d, 0x56, 0xae, 0xa9, 0xd1, 0x32, 0xeb, 0x45, 0x5b, 0xb2, 0xe2, 0x30,
	0xbd, 0x00, 0x6b, 0x42, 0xb6, 0xf1, 0xbc, 0x1c, 0x43, 0x36, 0x12, 0x90, 0x09, 0xb0, 0x37, 0x94,
	0xb9, 0xd7, 0xff, 0x6c, 0x6e, 0x47, 0xd3, 0xaf, 0x73, 0x79, 0x91, 0xa9, 0xc3, 0x43, 0x15, 0x3d,
	0x26, 0xe6, 0xcb, 0x3c, 0x65, 0x45, 0x39, 0xc4, 0x53, 0x01, 0xd6, 0x1d, 0xd2, 0x4c, 0x13, 0x35,
	0xb5, 0x76, 0xd4, 0x4c, 0x13, 0xef, 0x97, 0x41, 0xda, 0x21, 0x80, 0xb8, 0x79, 0x61, 0x0d, 0x48,
	0x47, 0x6e, 0xc0, 0xbb, 0xb3, 0x0c, 0x0a, 0xbb, 0xd9, 0x33, 0x7c, 0xb3, 0xbf, 0x47, 0x6f, 0x59,
	0x36, 0x1a, 0xae, 0xaa, 0xa3, 0x6b, 0xa0, 0xf5, 0x86, 0x98, 0xec, 0x5a, 0x5d, 0xcd, 0xc0, 0xec,
	0xfb, 0xb7, 0xf2, 0xac, 0xb9, 0x8d, 0xd6, 0xc1, 0xd6, 0x80, 0x6c, 0xe6, 0x6a, 0x01, 0x55, 0x7b,
	0xff, 0x6c, 0xa7, 0x5e, 0xd7, 0xb0, 0x2d, 0xbb, 0x1a, 0xd5, 0xd8, 0x70, 0x78, 0x39, 0x77, 0x8c,
	0xab, 0xb9, 0x63, 0xfc, 0x9c, 0x3b, 0xc6, 0xe7, 0x85, 0xd3, 0xb8, 0x5a, 0x38, 0x8d, 0x6f, 0x0b,
	0xa7, 0xf1, 0x81, 0xae, 0x75, 0x7d, 0x8d, 0x39, 0x18, 0x4a, 0xe6, 0xf7, 0x88, 0x49, 0x70, 0xae,
	0x1f, 0x85, 0x9e, 0x00, 0xdf, 0x54, 0x6f, 0xe3, 0xd9, 0xef, 0x00, 0x00, 0x00, 0xff, 0xff, 0x85,
	0x3c, 0x3c, 0x9b, 0x95, 0x03, 0x00, 0x00,
}

func (m *BeeParams) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *BeeParams) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *BeeParams) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	{
		size := m.OxygenSense.Size()
		i -= size
		if _, err := m.OxygenSense.MarshalTo(dAtA[i:]); err != nil {
			return 0, err
		}
		i = encodeVarintBees(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x2a
	if m.BodySize != 0 {
		i = encodeVarintBees(dAtA, i, uint64(m.BodySize))
		i--
		dAtA[i] = 0x20
	}
	{
		size := m.HoneyPerBlock.Size()
		i -= size
		if _, err := m.HoneyPerBlock.MarshalTo(dAtA[i:]); err != nil {
			return 0, err
		}
		i = encodeVarintBees(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x1a
	if len(m.Price) > 0 {
		for iNdEx := len(m.Price) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.Price[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintBees(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x12
		}
	}
	if len(m.BeeType) > 0 {
		i -= len(m.BeeType)
		copy(dAtA[i:], m.BeeType)
		i = encodeVarintBees(dAtA, i, uint64(len(m.BeeType)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *ApiaryHouse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *ApiaryHouse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *ApiaryHouse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Id != 0 {
		i = encodeVarintBees(dAtA, i, uint64(m.Id))
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func (m *Bees) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Bees) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Bees) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	{
		size, err := m.Params.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintBees(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x22
	if m.ApiaryHouse != nil {
		{
			size, err := m.ApiaryHouse.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintBees(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x1a
	}
	if m.BearOwner != nil {
		{
			size, err := m.BearOwner.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintBees(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x12
	}
	if m.Id != 0 {
		i = encodeVarintBees(dAtA, i, uint64(m.Id))
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func encodeVarintBees(dAtA []byte, offset int, v uint64) int {
	offset -= sovBees(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *BeeParams) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.BeeType)
	if l > 0 {
		n += 1 + l + sovBees(uint64(l))
	}
	if len(m.Price) > 0 {
		for _, e := range m.Price {
			l = e.Size()
			n += 1 + l + sovBees(uint64(l))
		}
	}
	l = m.HoneyPerBlock.Size()
	n += 1 + l + sovBees(uint64(l))
	if m.BodySize != 0 {
		n += 1 + sovBees(uint64(m.BodySize))
	}
	l = m.OxygenSense.Size()
	n += 1 + l + sovBees(uint64(l))
	return n
}

func (m *ApiaryHouse) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Id != 0 {
		n += 1 + sovBees(uint64(m.Id))
	}
	return n
}

func (m *Bees) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Id != 0 {
		n += 1 + sovBees(uint64(m.Id))
	}
	if m.BearOwner != nil {
		l = m.BearOwner.Size()
		n += 1 + l + sovBees(uint64(l))
	}
	if m.ApiaryHouse != nil {
		l = m.ApiaryHouse.Size()
		n += 1 + l + sovBees(uint64(l))
	}
	l = m.Params.Size()
	n += 1 + l + sovBees(uint64(l))
	return n
}

func sovBees(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozBees(x uint64) (n int) {
	return sovBees(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *BeeParams) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowBees
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
			return fmt.Errorf("proto: BeeParams: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: BeeParams: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field BeeType", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowBees
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
				return ErrInvalidLengthBees
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthBees
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.BeeType = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Price", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowBees
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
				return ErrInvalidLengthBees
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthBees
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
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field HoneyPerBlock", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowBees
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
				return ErrInvalidLengthBees
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthBees
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.HoneyPerBlock.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 4:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field BodySize", wireType)
			}
			m.BodySize = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowBees
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.BodySize |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field OxygenSense", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowBees
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
				return ErrInvalidLengthBees
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthBees
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.OxygenSense.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipBees(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthBees
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
func (m *ApiaryHouse) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowBees
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
			return fmt.Errorf("proto: ApiaryHouse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: ApiaryHouse: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Id", wireType)
			}
			m.Id = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowBees
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
		default:
			iNdEx = preIndex
			skippy, err := skipBees(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthBees
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
func (m *Bees) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowBees
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
			return fmt.Errorf("proto: Bees: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Bees: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Id", wireType)
			}
			m.Id = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowBees
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
					return ErrIntOverflowBees
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
				return ErrInvalidLengthBees
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthBees
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
				return fmt.Errorf("proto: wrong wireType = %d for field ApiaryHouse", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowBees
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
				return ErrInvalidLengthBees
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthBees
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.ApiaryHouse == nil {
				m.ApiaryHouse = &ApiaryHouse{}
			}
			if err := m.ApiaryHouse.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
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
					return ErrIntOverflowBees
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
				return ErrInvalidLengthBees
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthBees
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.Params.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipBees(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthBees
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
func skipBees(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowBees
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
					return 0, ErrIntOverflowBees
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
					return 0, ErrIntOverflowBees
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
				return 0, ErrInvalidLengthBees
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupBees
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthBees
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthBees        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowBees          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupBees = fmt.Errorf("proto: unexpected end of group")
)
