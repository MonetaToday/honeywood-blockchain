// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: bears/tiles.proto

package types

import (
	fmt "fmt"
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

type Tiles_Items_ItemTypes int32

const (
	Tiles_Items_APIARY     Tiles_Items_ItemTypes = 0
	Tiles_Items_TREE       Tiles_Items_ItemTypes = 1
	Tiles_Items_DECORATION Tiles_Items_ItemTypes = 2
)

var Tiles_Items_ItemTypes_name = map[int32]string{
	0: "APIARY",
	1: "TREE",
	2: "DECORATION",
}

var Tiles_Items_ItemTypes_value = map[string]int32{
	"APIARY":     0,
	"TREE":       1,
	"DECORATION": 2,
}

func (x Tiles_Items_ItemTypes) String() string {
	return proto.EnumName(Tiles_Items_ItemTypes_name, int32(x))
}

func (Tiles_Items_ItemTypes) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_f386a3e26d6b339e, []int{0, 0, 0}
}

type Tiles struct {
	Item *Tiles_Items `protobuf:"bytes,2,opt,name=item,proto3" json:"item,omitempty"`
}

func (m *Tiles) Reset()         { *m = Tiles{} }
func (m *Tiles) String() string { return proto.CompactTextString(m) }
func (*Tiles) ProtoMessage()    {}
func (*Tiles) Descriptor() ([]byte, []int) {
	return fileDescriptor_f386a3e26d6b339e, []int{0}
}
func (m *Tiles) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Tiles) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Tiles.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Tiles) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Tiles.Merge(m, src)
}
func (m *Tiles) XXX_Size() int {
	return m.Size()
}
func (m *Tiles) XXX_DiscardUnknown() {
	xxx_messageInfo_Tiles.DiscardUnknown(m)
}

var xxx_messageInfo_Tiles proto.InternalMessageInfo

func (m *Tiles) GetItem() *Tiles_Items {
	if m != nil {
		return m.Item
	}
	return nil
}

type Tiles_Items struct {
	ItemId   uint64                `protobuf:"varint,1,opt,name=itemId,proto3" json:"itemId,omitempty"`
	ItemType Tiles_Items_ItemTypes `protobuf:"varint,2,opt,name=itemType,proto3,enum=MonetaToday.honeywood.bears.Tiles_Items_ItemTypes" json:"itemType,omitempty"`
}

func (m *Tiles_Items) Reset()         { *m = Tiles_Items{} }
func (m *Tiles_Items) String() string { return proto.CompactTextString(m) }
func (*Tiles_Items) ProtoMessage()    {}
func (*Tiles_Items) Descriptor() ([]byte, []int) {
	return fileDescriptor_f386a3e26d6b339e, []int{0, 0}
}
func (m *Tiles_Items) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Tiles_Items) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Tiles_Items.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Tiles_Items) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Tiles_Items.Merge(m, src)
}
func (m *Tiles_Items) XXX_Size() int {
	return m.Size()
}
func (m *Tiles_Items) XXX_DiscardUnknown() {
	xxx_messageInfo_Tiles_Items.DiscardUnknown(m)
}

var xxx_messageInfo_Tiles_Items proto.InternalMessageInfo

func (m *Tiles_Items) GetItemId() uint64 {
	if m != nil {
		return m.ItemId
	}
	return 0
}

func (m *Tiles_Items) GetItemType() Tiles_Items_ItemTypes {
	if m != nil {
		return m.ItemType
	}
	return Tiles_Items_APIARY
}

func init() {
	proto.RegisterEnum("MonetaToday.honeywood.bears.Tiles_Items_ItemTypes", Tiles_Items_ItemTypes_name, Tiles_Items_ItemTypes_value)
	proto.RegisterType((*Tiles)(nil), "MonetaToday.honeywood.bears.Tiles")
	proto.RegisterType((*Tiles_Items)(nil), "MonetaToday.honeywood.bears.Tiles.Items")
}

func init() { proto.RegisterFile("bears/tiles.proto", fileDescriptor_f386a3e26d6b339e) }

var fileDescriptor_f386a3e26d6b339e = []byte{
	// 265 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x12, 0x4c, 0x4a, 0x4d, 0x2c,
	0x2a, 0xd6, 0x2f, 0xc9, 0xcc, 0x49, 0x2d, 0xd6, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0x92, 0xf6,
	0xcd, 0xcf, 0x4b, 0x2d, 0x49, 0x0c, 0xc9, 0x4f, 0x49, 0xac, 0xd4, 0xcb, 0xc8, 0xcf, 0x4b, 0xad,
	0x2c, 0xcf, 0xcf, 0x4f, 0xd1, 0x03, 0x2b, 0x54, 0x7a, 0xc5, 0xc8, 0xc5, 0x1a, 0x02, 0x52, 0x2c,
	0x64, 0xc3, 0xc5, 0x92, 0x59, 0x92, 0x9a, 0x2b, 0xc1, 0xa4, 0xc0, 0xa8, 0xc1, 0x6d, 0xa4, 0xa1,
	0x87, 0x47, 0x97, 0x1e, 0x58, 0x87, 0x9e, 0x67, 0x49, 0x6a, 0x6e, 0x71, 0x10, 0x58, 0x97, 0xd4,
	0x22, 0x46, 0x2e, 0x56, 0x30, 0x5f, 0x48, 0x8c, 0x8b, 0x0d, 0x24, 0xe2, 0x99, 0x22, 0xc1, 0xa8,
	0xc0, 0xa8, 0xc1, 0x12, 0x04, 0xe5, 0x09, 0xf9, 0x71, 0x71, 0x80, 0x58, 0x21, 0x95, 0x05, 0xa9,
	0x60, 0x3b, 0xf8, 0x8c, 0x8c, 0x88, 0xb5, 0x03, 0x4c, 0x82, 0x34, 0x16, 0x07, 0xc1, 0xcd, 0x50,
	0x32, 0xe4, 0xe2, 0x84, 0x0b, 0x0b, 0x71, 0x71, 0xb1, 0x39, 0x06, 0x78, 0x3a, 0x06, 0x45, 0x0a,
	0x30, 0x08, 0x71, 0x70, 0xb1, 0x84, 0x04, 0xb9, 0xba, 0x0a, 0x30, 0x0a, 0xf1, 0x71, 0x71, 0xb9,
	0xb8, 0x3a, 0xfb, 0x07, 0x39, 0x86, 0x78, 0xfa, 0xfb, 0x09, 0x30, 0x39, 0x79, 0x9c, 0x78, 0x24,
	0xc7, 0x78, 0xe1, 0x91, 0x1c, 0xe3, 0x83, 0x47, 0x72, 0x8c, 0x13, 0x1e, 0xcb, 0x31, 0x5c, 0x78,
	0x2c, 0xc7, 0x70, 0xe3, 0xb1, 0x1c, 0x43, 0x94, 0x5e, 0x7a, 0x66, 0x49, 0x46, 0x69, 0x92, 0x5e,
	0x72, 0x7e, 0xae, 0x3e, 0x92, 0xa3, 0xf4, 0x3d, 0x40, 0x8e, 0x0a, 0xcf, 0xcf, 0x4f, 0xd1, 0xaf,
	0xd0, 0x87, 0x86, 0x2c, 0xc8, 0xbe, 0x24, 0x36, 0x70, 0xd0, 0x1a, 0x03, 0x02, 0x00, 0x00, 0xff,
	0xff, 0xd0, 0xe6, 0x21, 0x80, 0x6f, 0x01, 0x00, 0x00,
}

func (m *Tiles) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Tiles) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Tiles) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Item != nil {
		{
			size, err := m.Item.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintTiles(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x12
	}
	return len(dAtA) - i, nil
}

func (m *Tiles_Items) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Tiles_Items) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Tiles_Items) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.ItemType != 0 {
		i = encodeVarintTiles(dAtA, i, uint64(m.ItemType))
		i--
		dAtA[i] = 0x10
	}
	if m.ItemId != 0 {
		i = encodeVarintTiles(dAtA, i, uint64(m.ItemId))
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func encodeVarintTiles(dAtA []byte, offset int, v uint64) int {
	offset -= sovTiles(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Tiles) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Item != nil {
		l = m.Item.Size()
		n += 1 + l + sovTiles(uint64(l))
	}
	return n
}

func (m *Tiles_Items) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.ItemId != 0 {
		n += 1 + sovTiles(uint64(m.ItemId))
	}
	if m.ItemType != 0 {
		n += 1 + sovTiles(uint64(m.ItemType))
	}
	return n
}

func sovTiles(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozTiles(x uint64) (n int) {
	return sovTiles(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Tiles) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowTiles
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
			return fmt.Errorf("proto: Tiles: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Tiles: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Item", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTiles
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
				return ErrInvalidLengthTiles
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthTiles
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Item == nil {
				m.Item = &Tiles_Items{}
			}
			if err := m.Item.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipTiles(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthTiles
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
func (m *Tiles_Items) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowTiles
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
			return fmt.Errorf("proto: Items: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Items: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field ItemId", wireType)
			}
			m.ItemId = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTiles
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.ItemId |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 2:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field ItemType", wireType)
			}
			m.ItemType = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTiles
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.ItemType |= Tiles_Items_ItemTypes(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		default:
			iNdEx = preIndex
			skippy, err := skipTiles(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthTiles
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
func skipTiles(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowTiles
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
					return 0, ErrIntOverflowTiles
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
					return 0, ErrIntOverflowTiles
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
				return 0, ErrInvalidLengthTiles
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupTiles
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthTiles
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthTiles        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowTiles          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupTiles = fmt.Errorf("proto: unexpected end of group")
)