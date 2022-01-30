// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: bears/fields.proto

package types

import (
	fmt "fmt"
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

type Fields_FieldTypes int32

const (
	Fields_DEFAULT Fields_FieldTypes = 0
)

var Fields_FieldTypes_name = map[int32]string{
	0: "DEFAULT",
}

var Fields_FieldTypes_value = map[string]int32{
	"DEFAULT": 0,
}

func (x Fields_FieldTypes) String() string {
	return proto.EnumName(Fields_FieldTypes_name, int32(x))
}

func (Fields_FieldTypes) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_fb33884978356795, []int{1, 0}
}

type FieldRows struct {
	Tiles []Tiles `protobuf:"bytes,4,rep,name=tiles,proto3" json:"tiles"`
}

func (m *FieldRows) Reset()         { *m = FieldRows{} }
func (m *FieldRows) String() string { return proto.CompactTextString(m) }
func (*FieldRows) ProtoMessage()    {}
func (*FieldRows) Descriptor() ([]byte, []int) {
	return fileDescriptor_fb33884978356795, []int{0}
}
func (m *FieldRows) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *FieldRows) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_FieldRows.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *FieldRows) XXX_Merge(src proto.Message) {
	xxx_messageInfo_FieldRows.Merge(m, src)
}
func (m *FieldRows) XXX_Size() int {
	return m.Size()
}
func (m *FieldRows) XXX_DiscardUnknown() {
	xxx_messageInfo_FieldRows.DiscardUnknown(m)
}

var xxx_messageInfo_FieldRows proto.InternalMessageInfo

func (m *FieldRows) GetTiles() []Tiles {
	if m != nil {
		return m.Tiles
	}
	return nil
}

type Fields struct {
	Id         uint64            `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	BearOwner  *BearOwner        `protobuf:"bytes,2,opt,name=bearOwner,proto3" json:"bearOwner,omitempty"`
	FieldType  Fields_FieldTypes `protobuf:"varint,3,opt,name=fieldType,proto3,enum=MonetaToday.honeywood.bears.Fields_FieldTypes" json:"fieldType,omitempty"`
	Rows       []FieldRows       `protobuf:"bytes,4,rep,name=rows,proto3" json:"rows"`
	CountTiles uint64            `protobuf:"varint,5,opt,name=countTiles,proto3" json:"countTiles,omitempty"`
}

func (m *Fields) Reset()         { *m = Fields{} }
func (m *Fields) String() string { return proto.CompactTextString(m) }
func (*Fields) ProtoMessage()    {}
func (*Fields) Descriptor() ([]byte, []int) {
	return fileDescriptor_fb33884978356795, []int{1}
}
func (m *Fields) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Fields) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Fields.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Fields) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Fields.Merge(m, src)
}
func (m *Fields) XXX_Size() int {
	return m.Size()
}
func (m *Fields) XXX_DiscardUnknown() {
	xxx_messageInfo_Fields.DiscardUnknown(m)
}

var xxx_messageInfo_Fields proto.InternalMessageInfo

func (m *Fields) GetId() uint64 {
	if m != nil {
		return m.Id
	}
	return 0
}

func (m *Fields) GetBearOwner() *BearOwner {
	if m != nil {
		return m.BearOwner
	}
	return nil
}

func (m *Fields) GetFieldType() Fields_FieldTypes {
	if m != nil {
		return m.FieldType
	}
	return Fields_DEFAULT
}

func (m *Fields) GetRows() []FieldRows {
	if m != nil {
		return m.Rows
	}
	return nil
}

func (m *Fields) GetCountTiles() uint64 {
	if m != nil {
		return m.CountTiles
	}
	return 0
}

func init() {
	proto.RegisterEnum("MonetaToday.honeywood.bears.Fields_FieldTypes", Fields_FieldTypes_name, Fields_FieldTypes_value)
	proto.RegisterType((*FieldRows)(nil), "MonetaToday.honeywood.bears.FieldRows")
	proto.RegisterType((*Fields)(nil), "MonetaToday.honeywood.bears.Fields")
}

func init() { proto.RegisterFile("bears/fields.proto", fileDescriptor_fb33884978356795) }

var fileDescriptor_fb33884978356795 = []byte{
	// 340 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x84, 0x91, 0xc1, 0x6a, 0xfa, 0x40,
	0x10, 0xc6, 0xb3, 0x31, 0xfa, 0xc7, 0x11, 0xe4, 0xdf, 0xa5, 0x87, 0xd4, 0xc2, 0x36, 0xe4, 0x20,
	0x39, 0x6d, 0xc0, 0xde, 0x4b, 0x2b, 0x56, 0x84, 0x5a, 0x0a, 0x21, 0xa5, 0xd0, 0x9b, 0x9a, 0xad,
	0x06, 0x6c, 0x46, 0x92, 0x48, 0xea, 0x5b, 0xf4, 0x35, 0xfa, 0x26, 0x1e, 0x3d, 0xf6, 0x54, 0x8a,
	0xbe, 0x48, 0xd9, 0x5d, 0x45, 0x7b, 0xb1, 0x97, 0x64, 0x19, 0xbe, 0xef, 0x37, 0x33, 0xdf, 0x00,
	0x1d, 0x8a, 0x41, 0x9a, 0xf9, 0x2f, 0xb1, 0x98, 0x46, 0x19, 0x9f, 0xa5, 0x98, 0x23, 0x3d, 0xbf,
	0xc7, 0x44, 0xe4, 0x83, 0x10, 0xa3, 0xc1, 0x82, 0x4f, 0x30, 0x11, 0x8b, 0x02, 0x31, 0xe2, 0x4a,
	0xd9, 0x38, 0x1d, 0xe3, 0x18, 0x95, 0xce, 0x97, 0x2f, 0x6d, 0x69, 0x9c, 0x68, 0x4c, 0x1e, 0x4f,
	0x45, 0xf6, 0xbb, 0xa4, 0xbe, 0xba, 0xe4, 0xde, 0x41, 0xb5, 0x2b, 0x1b, 0x05, 0x58, 0x64, 0xf4,
	0x0a, 0xca, 0x4a, 0x6e, 0x5b, 0x4e, 0xc9, 0xab, 0xb5, 0x5c, 0x7e, 0xa4, 0x2b, 0x0f, 0xa5, 0xb2,
	0x6d, 0x2d, 0xbf, 0x2e, 0x8c, 0x40, 0xdb, 0xdc, 0x0f, 0x13, 0x2a, 0x8a, 0x96, 0xd1, 0x3a, 0x98,
	0x71, 0x64, 0x13, 0x87, 0x78, 0x56, 0x60, 0xc6, 0x11, 0xed, 0x40, 0x55, 0xda, 0x1e, 0x8a, 0x44,
	0xa4, 0xb6, 0xe9, 0x10, 0xaf, 0xd6, 0x6a, 0x1e, 0xc5, 0xb7, 0x77, 0xea, 0x60, 0x6f, 0xa4, 0x7d,
	0xa8, 0xaa, 0x58, 0xc2, 0xc5, 0x4c, 0xd8, 0x25, 0x87, 0x78, 0xf5, 0x16, 0x3f, 0x4a, 0xd1, 0xd3,
	0xe8, 0x9f, 0x34, 0x65, 0xc1, 0x1e, 0x40, 0xaf, 0xc1, 0x4a, 0xb1, 0xd8, 0x6d, 0xdb, 0xfc, 0x1b,
	0x24, 0x43, 0xda, 0x6e, 0xac, 0x9c, 0x94, 0x01, 0x8c, 0x70, 0x9e, 0xe4, 0x2a, 0x0b, 0xbb, 0xac,
	0xb6, 0x3d, 0xa8, 0xb8, 0x67, 0x00, 0xfb, 0xd6, 0xb4, 0x06, 0xff, 0x3a, 0xb7, 0xdd, 0x9b, 0xc7,
	0x7e, 0xf8, 0xdf, 0x68, 0xf7, 0x96, 0x6b, 0x46, 0x56, 0x6b, 0x46, 0xbe, 0xd7, 0x8c, 0xbc, 0x6f,
	0x98, 0xb1, 0xda, 0x30, 0xe3, 0x73, 0xc3, 0x8c, 0x67, 0x3e, 0x8e, 0xf3, 0xc9, 0x7c, 0xc8, 0x47,
	0xf8, 0xea, 0x1f, 0x8c, 0xe4, 0xf7, 0xe4, 0x48, 0x4f, 0x88, 0x91, 0xff, 0xe6, 0x6f, 0x6f, 0x2b,
	0xb1, 0xc3, 0x8a, 0xba, 0xe4, 0xe5, 0x4f, 0x00, 0x00, 0x00, 0xff, 0xff, 0x8b, 0x31, 0x1d, 0x5d,
	0x38, 0x02, 0x00, 0x00,
}

func (m *FieldRows) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *FieldRows) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *FieldRows) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Tiles) > 0 {
		for iNdEx := len(m.Tiles) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.Tiles[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintFields(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x22
		}
	}
	return len(dAtA) - i, nil
}

func (m *Fields) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Fields) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Fields) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.CountTiles != 0 {
		i = encodeVarintFields(dAtA, i, uint64(m.CountTiles))
		i--
		dAtA[i] = 0x28
	}
	if len(m.Rows) > 0 {
		for iNdEx := len(m.Rows) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.Rows[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintFields(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x22
		}
	}
	if m.FieldType != 0 {
		i = encodeVarintFields(dAtA, i, uint64(m.FieldType))
		i--
		dAtA[i] = 0x18
	}
	if m.BearOwner != nil {
		{
			size, err := m.BearOwner.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintFields(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x12
	}
	if m.Id != 0 {
		i = encodeVarintFields(dAtA, i, uint64(m.Id))
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func encodeVarintFields(dAtA []byte, offset int, v uint64) int {
	offset -= sovFields(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *FieldRows) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if len(m.Tiles) > 0 {
		for _, e := range m.Tiles {
			l = e.Size()
			n += 1 + l + sovFields(uint64(l))
		}
	}
	return n
}

func (m *Fields) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Id != 0 {
		n += 1 + sovFields(uint64(m.Id))
	}
	if m.BearOwner != nil {
		l = m.BearOwner.Size()
		n += 1 + l + sovFields(uint64(l))
	}
	if m.FieldType != 0 {
		n += 1 + sovFields(uint64(m.FieldType))
	}
	if len(m.Rows) > 0 {
		for _, e := range m.Rows {
			l = e.Size()
			n += 1 + l + sovFields(uint64(l))
		}
	}
	if m.CountTiles != 0 {
		n += 1 + sovFields(uint64(m.CountTiles))
	}
	return n
}

func sovFields(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozFields(x uint64) (n int) {
	return sovFields(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *FieldRows) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowFields
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
			return fmt.Errorf("proto: FieldRows: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: FieldRows: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Tiles", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowFields
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
				return ErrInvalidLengthFields
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthFields
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Tiles = append(m.Tiles, Tiles{})
			if err := m.Tiles[len(m.Tiles)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipFields(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthFields
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
func (m *Fields) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowFields
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
			return fmt.Errorf("proto: Fields: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Fields: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Id", wireType)
			}
			m.Id = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowFields
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
					return ErrIntOverflowFields
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
				return ErrInvalidLengthFields
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthFields
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
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field FieldType", wireType)
			}
			m.FieldType = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowFields
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.FieldType |= Fields_FieldTypes(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Rows", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowFields
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
				return ErrInvalidLengthFields
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthFields
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Rows = append(m.Rows, FieldRows{})
			if err := m.Rows[len(m.Rows)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 5:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field CountTiles", wireType)
			}
			m.CountTiles = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowFields
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.CountTiles |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		default:
			iNdEx = preIndex
			skippy, err := skipFields(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthFields
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
func skipFields(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowFields
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
					return 0, ErrIntOverflowFields
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
					return 0, ErrIntOverflowFields
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
				return 0, ErrInvalidLengthFields
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupFields
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthFields
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthFields        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowFields          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupFields = fmt.Errorf("proto: unexpected end of group")
)
