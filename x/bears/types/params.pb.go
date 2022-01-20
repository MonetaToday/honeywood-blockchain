// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: bears/params.proto

package types

import (
	fmt "fmt"
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
	SetNamePrice   types.Coin `protobuf:"bytes,1,opt,name=set_name_price,json=setNamePrice,proto3" json:"set_name_price" yaml:"set_name_price"`
	OneGroundPrice types.Coin `protobuf:"bytes,2,opt,name=one_ground_price,json=oneGroundPrice,proto3" json:"one_ground_price" yaml:"one_ground_price"`
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

func (m *Params) GetSetNamePrice() types.Coin {
	if m != nil {
		return m.SetNamePrice
	}
	return types.Coin{}
}

func (m *Params) GetOneGroundPrice() types.Coin {
	if m != nil {
		return m.OneGroundPrice
	}
	return types.Coin{}
}

func init() {
	proto.RegisterType((*Params)(nil), "MonetaToday.honeywood.bears.Params")
}

func init() { proto.RegisterFile("bears/params.proto", fileDescriptor_8ad25feeeed35bd0) }

var fileDescriptor_8ad25feeeed35bd0 = []byte{
	// 298 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x84, 0x90, 0xbf, 0x4a, 0xc3, 0x40,
	0x18, 0xc0, 0x73, 0x22, 0x1d, 0xa2, 0x14, 0x09, 0x8a, 0x5a, 0xf1, 0x22, 0x99, 0x9c, 0xee, 0xa8,
	0x6e, 0x1d, 0xeb, 0x60, 0x17, 0xa5, 0x14, 0x41, 0x70, 0x30, 0x5c, 0x92, 0x8f, 0x34, 0xe0, 0xdd,
	0x17, 0x72, 0x57, 0x35, 0x6f, 0xe1, 0xe8, 0xe8, 0xe3, 0x74, 0xec, 0xe0, 0xe0, 0x54, 0x24, 0x79,
	0x03, 0x9f, 0x40, 0x72, 0xc9, 0xa0, 0x2e, 0x6e, 0xf7, 0xe7, 0xfb, 0x7e, 0x3f, 0xf8, 0xb9, 0x5e,
	0x04, 0xa2, 0xd0, 0x3c, 0x17, 0x85, 0x90, 0x9a, 0xe5, 0x05, 0x1a, 0xf4, 0x8e, 0xae, 0x50, 0x81,
	0x11, 0x37, 0x98, 0x88, 0x92, 0xcd, 0x51, 0x41, 0xf9, 0x84, 0x98, 0x30, 0x3b, 0x39, 0xd8, 0x4d,
	0x31, 0x45, 0x3b, 0xc7, 0x9b, 0x53, 0xbb, 0x32, 0xa0, 0x31, 0x6a, 0x89, 0x9a, 0x47, 0x42, 0x03,
	0x7f, 0x1c, 0x46, 0x60, 0xc4, 0x90, 0xc7, 0x98, 0xa9, 0xf6, 0x3f, 0x78, 0x27, 0x6e, 0x6f, 0x6a,
	0x1d, 0xde, 0xbd, 0xdb, 0xd7, 0x60, 0x42, 0x25, 0x24, 0x84, 0x79, 0x91, 0xc5, 0x70, 0x40, 0x4e,
	0xc8, 0xe9, 0xd6, 0xd9, 0x21, 0x6b, 0x19, 0xac, 0x61, 0xb0, 0x8e, 0xc1, 0x2e, 0x30, 0x53, 0xe3,
	0xe3, 0xe5, 0xda, 0x77, 0xbe, 0xd6, 0xfe, 0x5e, 0x29, 0xe4, 0xc3, 0x28, 0xf8, 0xbd, 0x1e, 0xcc,
	0xb6, 0x35, 0x98, 0x6b, 0x21, 0x61, 0xda, 0x5c, 0xbd, 0xc4, 0xdd, 0x41, 0x05, 0x61, 0x5a, 0xe0,
	0x42, 0x25, 0x9d, 0x61, 0xe3, 0x3f, 0x83, 0xdf, 0x19, 0xf6, 0x5b, 0xc3, 0x5f, 0x40, 0x30, 0xeb,
	0xa3, 0x82, 0x4b, 0xfb, 0x62, 0x2d, 0xa3, 0xcd, 0xd7, 0x37, 0xdf, 0x19, 0x4f, 0x96, 0x15, 0x25,
	0xab, 0x8a, 0x92, 0xcf, 0x8a, 0x92, 0x97, 0x9a, 0x3a, 0xab, 0x9a, 0x3a, 0x1f, 0x35, 0x75, 0xee,
	0x58, 0x9a, 0x99, 0xf9, 0x22, 0x62, 0x31, 0x4a, 0xfe, 0x23, 0x27, 0x9f, 0x34, 0x39, 0x6f, 0x11,
	0x13, 0xfe, 0xcc, 0xdb, 0xf4, 0xa6, 0xcc, 0x41, 0x47, 0x3d, 0xdb, 0xe9, 0xfc, 0x3b, 0x00, 0x00,
	0xff, 0xff, 0x96, 0xbc, 0xce, 0xc3, 0x90, 0x01, 0x00, 0x00,
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
	{
		size, err := m.OneGroundPrice.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintParams(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x12
	{
		size, err := m.SetNamePrice.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
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
	l = m.SetNamePrice.Size()
	n += 1 + l + sovParams(uint64(l))
	l = m.OneGroundPrice.Size()
	n += 1 + l + sovParams(uint64(l))
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
				return fmt.Errorf("proto: wrong wireType = %d for field SetNamePrice", wireType)
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
			if err := m.SetNamePrice.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field OneGroundPrice", wireType)
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
			if err := m.OneGroundPrice.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
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
