// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: bears/grounds.proto

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

type Grounds struct {
	ItemId   uint64 `protobuf:"varint,1,opt,name=itemId,proto3" json:"itemId,omitempty"`
	ItemType uint64 `protobuf:"varint,2,opt,name=itemType,proto3" json:"itemType,omitempty"`
}

func (m *Grounds) Reset()         { *m = Grounds{} }
func (m *Grounds) String() string { return proto.CompactTextString(m) }
func (*Grounds) ProtoMessage()    {}
func (*Grounds) Descriptor() ([]byte, []int) {
	return fileDescriptor_59e580121fd30612, []int{0}
}
func (m *Grounds) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Grounds) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Grounds.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Grounds) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Grounds.Merge(m, src)
}
func (m *Grounds) XXX_Size() int {
	return m.Size()
}
func (m *Grounds) XXX_DiscardUnknown() {
	xxx_messageInfo_Grounds.DiscardUnknown(m)
}

var xxx_messageInfo_Grounds proto.InternalMessageInfo

func (m *Grounds) GetItemId() uint64 {
	if m != nil {
		return m.ItemId
	}
	return 0
}

func (m *Grounds) GetItemType() uint64 {
	if m != nil {
		return m.ItemType
	}
	return 0
}

func init() {
	proto.RegisterType((*Grounds)(nil), "MonetaToday.honeywood.bears.Grounds")
}

func init() { proto.RegisterFile("bears/grounds.proto", fileDescriptor_59e580121fd30612) }

var fileDescriptor_59e580121fd30612 = []byte{
	// 179 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x12, 0x4e, 0x4a, 0x4d, 0x2c,
	0x2a, 0xd6, 0x4f, 0x2f, 0xca, 0x2f, 0xcd, 0x4b, 0x29, 0xd6, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17,
	0x92, 0xf6, 0xcd, 0xcf, 0x4b, 0x2d, 0x49, 0x0c, 0xc9, 0x4f, 0x49, 0xac, 0xd4, 0xcb, 0xc8, 0xcf,
	0x4b, 0xad, 0x2c, 0xcf, 0xcf, 0x4f, 0xd1, 0x03, 0x2b, 0x55, 0xb2, 0xe5, 0x62, 0x77, 0x87, 0xa8,
	0x16, 0x12, 0xe3, 0x62, 0xcb, 0x2c, 0x49, 0xcd, 0xf5, 0x4c, 0x91, 0x60, 0x54, 0x60, 0xd4, 0x60,
	0x09, 0x82, 0xf2, 0x84, 0xa4, 0xb8, 0x38, 0x40, 0xac, 0x90, 0xca, 0x82, 0x54, 0x09, 0x26, 0xb0,
	0x0c, 0x9c, 0xef, 0xe4, 0x71, 0xe2, 0x91, 0x1c, 0xe3, 0x85, 0x47, 0x72, 0x8c, 0x0f, 0x1e, 0xc9,
	0x31, 0x4e, 0x78, 0x2c, 0xc7, 0x70, 0xe1, 0xb1, 0x1c, 0xc3, 0x8d, 0xc7, 0x72, 0x0c, 0x51, 0x7a,
	0xe9, 0x99, 0x25, 0x19, 0xa5, 0x49, 0x7a, 0xc9, 0xf9, 0xb9, 0xfa, 0x48, 0x0e, 0xd0, 0xf7, 0x00,
	0x39, 0x20, 0x3c, 0x3f, 0x3f, 0x45, 0xbf, 0x42, 0x1f, 0xe2, 0xda, 0x92, 0xca, 0x82, 0xd4, 0xe2,
	0x24, 0x36, 0xb0, 0x63, 0x8d, 0x01, 0x01, 0x00, 0x00, 0xff, 0xff, 0xa9, 0x18, 0xeb, 0x9d, 0xc3,
	0x00, 0x00, 0x00,
}

func (m *Grounds) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Grounds) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Grounds) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.ItemType != 0 {
		i = encodeVarintGrounds(dAtA, i, uint64(m.ItemType))
		i--
		dAtA[i] = 0x10
	}
	if m.ItemId != 0 {
		i = encodeVarintGrounds(dAtA, i, uint64(m.ItemId))
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func encodeVarintGrounds(dAtA []byte, offset int, v uint64) int {
	offset -= sovGrounds(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Grounds) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.ItemId != 0 {
		n += 1 + sovGrounds(uint64(m.ItemId))
	}
	if m.ItemType != 0 {
		n += 1 + sovGrounds(uint64(m.ItemType))
	}
	return n
}

func sovGrounds(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozGrounds(x uint64) (n int) {
	return sovGrounds(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Grounds) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowGrounds
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
			return fmt.Errorf("proto: Grounds: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Grounds: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field ItemId", wireType)
			}
			m.ItemId = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGrounds
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
					return ErrIntOverflowGrounds
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.ItemType |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		default:
			iNdEx = preIndex
			skippy, err := skipGrounds(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthGrounds
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
func skipGrounds(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowGrounds
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
					return 0, ErrIntOverflowGrounds
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
					return 0, ErrIntOverflowGrounds
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
				return 0, ErrInvalidLengthGrounds
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupGrounds
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthGrounds
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthGrounds        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowGrounds          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupGrounds = fmt.Errorf("proto: unexpected end of group")
)
