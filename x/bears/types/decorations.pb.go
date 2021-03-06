// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: bears/decorations.proto

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

type DecorationParams struct {
	DecorationType string                                   `protobuf:"bytes,1,opt,name=decoration_type,json=decorationType,proto3" json:"decoration_type,omitempty" yaml:"decoration_type"`
	Price          github_com_cosmos_cosmos_sdk_types.Coins `protobuf:"bytes,2,rep,name=price,proto3,castrepeated=github.com/cosmos/cosmos-sdk/types.Coins" json:"price" yaml:"price"`
}

func (m *DecorationParams) Reset()         { *m = DecorationParams{} }
func (m *DecorationParams) String() string { return proto.CompactTextString(m) }
func (*DecorationParams) ProtoMessage()    {}
func (*DecorationParams) Descriptor() ([]byte, []int) {
	return fileDescriptor_afedde01ed0e943f, []int{0}
}
func (m *DecorationParams) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *DecorationParams) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_DecorationParams.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *DecorationParams) XXX_Merge(src proto.Message) {
	xxx_messageInfo_DecorationParams.Merge(m, src)
}
func (m *DecorationParams) XXX_Size() int {
	return m.Size()
}
func (m *DecorationParams) XXX_DiscardUnknown() {
	xxx_messageInfo_DecorationParams.DiscardUnknown(m)
}

var xxx_messageInfo_DecorationParams proto.InternalMessageInfo

func (m *DecorationParams) GetDecorationType() string {
	if m != nil {
		return m.DecorationType
	}
	return ""
}

func (m *DecorationParams) GetPrice() github_com_cosmos_cosmos_sdk_types.Coins {
	if m != nil {
		return m.Price
	}
	return nil
}

type Decorations struct {
	Id        uint64            `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	BearOwner *BearOwner        `protobuf:"bytes,2,opt,name=bearOwner,proto3" json:"bearOwner,omitempty"`
	Params    *DecorationParams `protobuf:"bytes,3,opt,name=params,proto3" json:"params,omitempty"`
	Position  *ItemPosition     `protobuf:"bytes,4,opt,name=position,proto3" json:"position,omitempty"`
}

func (m *Decorations) Reset()         { *m = Decorations{} }
func (m *Decorations) String() string { return proto.CompactTextString(m) }
func (*Decorations) ProtoMessage()    {}
func (*Decorations) Descriptor() ([]byte, []int) {
	return fileDescriptor_afedde01ed0e943f, []int{1}
}
func (m *Decorations) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Decorations) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Decorations.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Decorations) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Decorations.Merge(m, src)
}
func (m *Decorations) XXX_Size() int {
	return m.Size()
}
func (m *Decorations) XXX_DiscardUnknown() {
	xxx_messageInfo_Decorations.DiscardUnknown(m)
}

var xxx_messageInfo_Decorations proto.InternalMessageInfo

func (m *Decorations) GetId() uint64 {
	if m != nil {
		return m.Id
	}
	return 0
}

func (m *Decorations) GetBearOwner() *BearOwner {
	if m != nil {
		return m.BearOwner
	}
	return nil
}

func (m *Decorations) GetParams() *DecorationParams {
	if m != nil {
		return m.Params
	}
	return nil
}

func (m *Decorations) GetPosition() *ItemPosition {
	if m != nil {
		return m.Position
	}
	return nil
}

func init() {
	proto.RegisterType((*DecorationParams)(nil), "MonetaToday.honeywood.bears.DecorationParams")
	proto.RegisterType((*Decorations)(nil), "MonetaToday.honeywood.bears.Decorations")
}

func init() { proto.RegisterFile("bears/decorations.proto", fileDescriptor_afedde01ed0e943f) }

var fileDescriptor_afedde01ed0e943f = []byte{
	// 416 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x7c, 0x92, 0x41, 0x6e, 0xd4, 0x30,
	0x14, 0x86, 0xe3, 0xb4, 0x54, 0xd4, 0x83, 0x0a, 0x58, 0x08, 0x42, 0x90, 0x92, 0x51, 0x16, 0x28,
	0x2c, 0x6a, 0xab, 0x65, 0xc7, 0x0a, 0xa5, 0xad, 0x54, 0x16, 0x88, 0x2a, 0xaa, 0x84, 0xc4, 0x06,
	0x39, 0xb1, 0x99, 0x5a, 0x34, 0x79, 0x21, 0x0e, 0x94, 0xdc, 0x82, 0x73, 0x70, 0x92, 0x8a, 0x55,
	0x97, 0xac, 0x06, 0x34, 0x73, 0x02, 0xe6, 0x04, 0x28, 0x76, 0x3a, 0x19, 0xcd, 0x62, 0x36, 0x89,
	0xf5, 0xfc, 0xfe, 0xef, 0xbd, 0xff, 0x97, 0xf1, 0x93, 0x4c, 0xf2, 0x5a, 0x33, 0x21, 0x73, 0xa8,
	0x79, 0xa3, 0xa0, 0xd4, 0xb4, 0xaa, 0xa1, 0x01, 0xf2, 0xec, 0x2d, 0x94, 0xb2, 0xe1, 0xe7, 0x20,
	0x78, 0x4b, 0x2f, 0xa0, 0x94, 0xed, 0x15, 0x80, 0xa0, 0xa6, 0xdd, 0x0f, 0x72, 0xd0, 0x05, 0x68,
	0x96, 0x71, 0x2d, 0xd9, 0xb7, 0x83, 0x4c, 0x36, 0xfc, 0x80, 0xe5, 0xa0, 0x4a, 0x2b, 0xf6, 0x1f,
	0x4d, 0x60, 0x02, 0xe6, 0xc8, 0xba, 0x53, 0x5f, 0x25, 0x76, 0xd6, 0x27, 0x25, 0x2f, 0x45, 0x3f,
	0xc6, 0x7f, 0x68, 0x6b, 0xe6, 0x6b, 0x4b, 0xd1, 0x2f, 0x84, 0x1f, 0x1c, 0x2f, 0xf7, 0x39, 0xe3,
	0x35, 0x2f, 0x34, 0x39, 0xc2, 0xf7, 0x87, 0x1d, 0x3f, 0x36, 0x6d, 0x25, 0x3d, 0x34, 0x46, 0xf1,
	0x6e, 0xe2, 0x2f, 0xa6, 0xe1, 0xe3, 0x96, 0x17, 0x97, 0xaf, 0xa2, 0xb5, 0x86, 0x28, 0xdd, 0x1b,
	0x2a, 0xe7, 0x6d, 0x25, 0xc9, 0x17, 0x7c, 0xa7, 0xaa, 0x55, 0x2e, 0x3d, 0x77, 0xbc, 0x15, 0x8f,
	0x0e, 0x9f, 0x52, 0x6b, 0x83, 0x76, 0x36, 0x68, 0x6f, 0x83, 0x1e, 0x81, 0x2a, 0x93, 0xd7, 0xd7,
	0xd3, 0xd0, 0x59, 0x4c, 0xc3, 0x7b, 0x96, 0x6c, 0x54, 0xd1, 0xcf, 0x3f, 0x61, 0x3c, 0x51, 0xcd,
	0xc5, 0xd7, 0x8c, 0xe6, 0x50, 0xb0, 0x3e, 0x03, 0xfb, 0xdb, 0xd7, 0xe2, 0x33, 0xeb, 0xa6, 0x6a,
	0x03, 0xd0, 0xa9, 0x9d, 0x14, 0xfd, 0x43, 0x78, 0x34, 0x98, 0xd1, 0x64, 0x0f, 0xbb, 0x4a, 0x98,
	0xd5, 0xb7, 0x53, 0x57, 0x09, 0x72, 0x8c, 0x77, 0x3b, 0xef, 0xef, 0xae, 0x4a, 0x59, 0x7b, 0xee,
	0x18, 0xc5, 0xa3, 0xc3, 0xe7, 0x74, 0x43, 0xf4, 0x34, 0xb9, 0xed, 0x4e, 0x07, 0x21, 0x39, 0xc1,
	0x3b, 0x95, 0xc9, 0xc9, 0xdb, 0x32, 0x88, 0xfd, 0x8d, 0x88, 0xf5, 0x70, 0xd3, 0x5e, 0x4c, 0x4e,
	0xf0, 0xdd, 0x0a, 0xb4, 0xea, 0x6e, 0xbc, 0x6d, 0x03, 0x7a, 0xb1, 0x11, 0xf4, 0xa6, 0x91, 0xc5,
	0x59, 0x2f, 0x48, 0x97, 0xd2, 0xe4, 0xf4, 0x7a, 0x16, 0xa0, 0x9b, 0x59, 0x80, 0xfe, 0xce, 0x02,
	0xf4, 0x63, 0x1e, 0x38, 0x37, 0xf3, 0xc0, 0xf9, 0x3d, 0x0f, 0x9c, 0x0f, 0x74, 0x25, 0xbe, 0x15,
	0x30, 0x3b, 0xed, 0xc0, 0xef, 0x01, 0x04, 0xfb, 0x6e, 0x9f, 0x82, 0x8d, 0x32, 0xdb, 0x31, 0x2f,
	0xe2, 0xe5, 0xff, 0x00, 0x00, 0x00, 0xff, 0xff, 0x8e, 0x5a, 0xe9, 0x9e, 0xa6, 0x02, 0x00, 0x00,
}

func (m *DecorationParams) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *DecorationParams) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *DecorationParams) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Price) > 0 {
		for iNdEx := len(m.Price) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.Price[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintDecorations(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x12
		}
	}
	if len(m.DecorationType) > 0 {
		i -= len(m.DecorationType)
		copy(dAtA[i:], m.DecorationType)
		i = encodeVarintDecorations(dAtA, i, uint64(len(m.DecorationType)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *Decorations) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Decorations) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Decorations) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Position != nil {
		{
			size, err := m.Position.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintDecorations(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x22
	}
	if m.Params != nil {
		{
			size, err := m.Params.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintDecorations(dAtA, i, uint64(size))
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
			i = encodeVarintDecorations(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x12
	}
	if m.Id != 0 {
		i = encodeVarintDecorations(dAtA, i, uint64(m.Id))
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func encodeVarintDecorations(dAtA []byte, offset int, v uint64) int {
	offset -= sovDecorations(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *DecorationParams) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.DecorationType)
	if l > 0 {
		n += 1 + l + sovDecorations(uint64(l))
	}
	if len(m.Price) > 0 {
		for _, e := range m.Price {
			l = e.Size()
			n += 1 + l + sovDecorations(uint64(l))
		}
	}
	return n
}

func (m *Decorations) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Id != 0 {
		n += 1 + sovDecorations(uint64(m.Id))
	}
	if m.BearOwner != nil {
		l = m.BearOwner.Size()
		n += 1 + l + sovDecorations(uint64(l))
	}
	if m.Params != nil {
		l = m.Params.Size()
		n += 1 + l + sovDecorations(uint64(l))
	}
	if m.Position != nil {
		l = m.Position.Size()
		n += 1 + l + sovDecorations(uint64(l))
	}
	return n
}

func sovDecorations(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozDecorations(x uint64) (n int) {
	return sovDecorations(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *DecorationParams) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowDecorations
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
			return fmt.Errorf("proto: DecorationParams: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: DecorationParams: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field DecorationType", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowDecorations
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
				return ErrInvalidLengthDecorations
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthDecorations
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.DecorationType = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Price", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowDecorations
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
				return ErrInvalidLengthDecorations
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthDecorations
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Price = append(m.Price, types.Coin{})
			if err := m.Price[len(m.Price)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipDecorations(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthDecorations
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
func (m *Decorations) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowDecorations
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
			return fmt.Errorf("proto: Decorations: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Decorations: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Id", wireType)
			}
			m.Id = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowDecorations
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
					return ErrIntOverflowDecorations
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
				return ErrInvalidLengthDecorations
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthDecorations
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
				return fmt.Errorf("proto: wrong wireType = %d for field Params", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowDecorations
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
				return ErrInvalidLengthDecorations
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthDecorations
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Params == nil {
				m.Params = &DecorationParams{}
			}
			if err := m.Params.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Position", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowDecorations
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
				return ErrInvalidLengthDecorations
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthDecorations
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Position == nil {
				m.Position = &ItemPosition{}
			}
			if err := m.Position.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipDecorations(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthDecorations
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
func skipDecorations(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowDecorations
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
					return 0, ErrIntOverflowDecorations
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
					return 0, ErrIntOverflowDecorations
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
				return 0, ErrInvalidLengthDecorations
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupDecorations
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthDecorations
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthDecorations        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowDecorations          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupDecorations = fmt.Errorf("proto: unexpected end of group")
)
