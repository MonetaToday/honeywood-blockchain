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
	PriceSetName            types.Coin `protobuf:"bytes,1,opt,name=price_set_name,json=priceSetName,proto3" json:"price_set_name" yaml:"price_set_name"`
	PriceTile               types.Coin `protobuf:"bytes,2,opt,name=price_tile,json=priceTile,proto3" json:"price_tile" yaml:"price_tile"`
	PriceTree               types.Coin `protobuf:"bytes,3,opt,name=price_tree,json=priceTree,proto3" json:"price_tree" yaml:"price_tree"`
	RewardTree              types.Coin `protobuf:"bytes,4,opt,name=reward_tree,json=rewardTree,proto3" json:"reward_tree" yaml:"reward_tree"`
	PriceDecorationFlowers  types.Coin `protobuf:"bytes,5,opt,name=price_decoration_flowers,json=priceDecorationFlowers,proto3" json:"price_decoration_flowers" yaml:"price_decoration_flowers"`
	PriceDecorationFlag     types.Coin `protobuf:"bytes,6,opt,name=price_decoration_flag,json=priceDecorationFlag,proto3" json:"price_decoration_flag" yaml:"price_decoration_flag"`
	PriceDecorationLamp     types.Coin `protobuf:"bytes,7,opt,name=price_decoration_lamp,json=priceDecorationLamp,proto3" json:"price_decoration_lamp" yaml:"price_decoration_lamp"`
	PriceDecorationGreenBee types.Coin `protobuf:"bytes,8,opt,name=price_decoration_green_bee,json=priceDecorationGreenBee,proto3" json:"price_decoration_green_bee" yaml:"price_decoration_green_bee"`
	PriceDecorationFountain types.Coin `protobuf:"bytes,9,opt,name=price_decoration_fountain,json=priceDecorationFountain,proto3" json:"price_decoration_fountain" yaml:"price_decoration_fountain"`
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

func (m *Params) GetPriceSetName() types.Coin {
	if m != nil {
		return m.PriceSetName
	}
	return types.Coin{}
}

func (m *Params) GetPriceTile() types.Coin {
	if m != nil {
		return m.PriceTile
	}
	return types.Coin{}
}

func (m *Params) GetPriceTree() types.Coin {
	if m != nil {
		return m.PriceTree
	}
	return types.Coin{}
}

func (m *Params) GetRewardTree() types.Coin {
	if m != nil {
		return m.RewardTree
	}
	return types.Coin{}
}

func (m *Params) GetPriceDecorationFlowers() types.Coin {
	if m != nil {
		return m.PriceDecorationFlowers
	}
	return types.Coin{}
}

func (m *Params) GetPriceDecorationFlag() types.Coin {
	if m != nil {
		return m.PriceDecorationFlag
	}
	return types.Coin{}
}

func (m *Params) GetPriceDecorationLamp() types.Coin {
	if m != nil {
		return m.PriceDecorationLamp
	}
	return types.Coin{}
}

func (m *Params) GetPriceDecorationGreenBee() types.Coin {
	if m != nil {
		return m.PriceDecorationGreenBee
	}
	return types.Coin{}
}

func (m *Params) GetPriceDecorationFountain() types.Coin {
	if m != nil {
		return m.PriceDecorationFountain
	}
	return types.Coin{}
}

func init() {
	proto.RegisterType((*Params)(nil), "MonetaToday.honeywood.bears.Params")
}

func init() { proto.RegisterFile("bears/params.proto", fileDescriptor_8ad25feeeed35bd0) }

var fileDescriptor_8ad25feeeed35bd0 = []byte{
	// 484 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xa4, 0x94, 0x41, 0x6b, 0xd4, 0x50,
	0x10, 0xc7, 0x13, 0xad, 0x5b, 0xfb, 0x2a, 0x82, 0xd1, 0x6a, 0x76, 0xd5, 0x6c, 0x0d, 0x82, 0xf5,
	0x92, 0x50, 0xbd, 0xf5, 0xb8, 0x4a, 0xed, 0x41, 0x45, 0xd2, 0xa2, 0xe0, 0xc1, 0x65, 0x92, 0x8c,
	0x69, 0x20, 0xc9, 0x84, 0xf7, 0x5e, 0x5d, 0x17, 0x04, 0xf1, 0x1b, 0x78, 0xf4, 0xe8, 0xc7, 0xe9,
	0xb1, 0x47, 0x2f, 0x16, 0xd9, 0xfd, 0x06, 0x7e, 0x02, 0x49, 0xde, 0xa3, 0x46, 0xb3, 0x4b, 0x40,
	0x6f, 0x79, 0xf9, 0xcf, 0xfc, 0x7e, 0xc3, 0x1c, 0x86, 0x59, 0x21, 0x02, 0x17, 0x7e, 0x09, 0x1c,
	0x72, 0xe1, 0x95, 0x9c, 0x24, 0x59, 0x37, 0x9f, 0x51, 0x81, 0x12, 0x0e, 0x28, 0x86, 0xa9, 0x77,
	0x48, 0x05, 0x4e, 0x27, 0x44, 0xb1, 0x57, 0x57, 0x0e, 0xae, 0x25, 0x94, 0x50, 0x5d, 0xe7, 0x57,
	0x5f, 0xaa, 0x65, 0xe0, 0x44, 0x24, 0x72, 0x12, 0x7e, 0x08, 0x02, 0xfd, 0x77, 0xdb, 0x21, 0x4a,
	0xd8, 0xf6, 0x23, 0x4a, 0x0b, 0x95, 0xbb, 0xdf, 0x57, 0x59, 0xef, 0x45, 0xed, 0xb0, 0xde, 0xb0,
	0xcb, 0x25, 0x4f, 0x23, 0x1c, 0x0b, 0x94, 0xe3, 0x02, 0x72, 0xb4, 0xcd, 0x4d, 0x73, 0x6b, 0xfd,
	0x41, 0xdf, 0x53, 0x0c, 0xaf, 0x62, 0x78, 0x9a, 0xe1, 0x3d, 0xa2, 0xb4, 0x18, 0xdd, 0x3e, 0x3e,
	0x1d, 0x1a, 0x3f, 0x4f, 0x87, 0x1b, 0x53, 0xc8, 0xb3, 0x1d, 0xf7, 0xcf, 0x76, 0x37, 0xb8, 0x54,
	0xff, 0xd8, 0x47, 0xf9, 0x1c, 0x72, 0xb4, 0xf6, 0x19, 0x53, 0x05, 0x32, 0xcd, 0xd0, 0x3e, 0xd7,
	0xc5, 0xee, 0x6b, 0xf6, 0x95, 0x26, 0xbb, 0x6a, 0x75, 0x83, 0xb5, 0xfa, 0x71, 0x90, 0x66, 0x4d,
	0x28, 0x47, 0xb4, 0xcf, 0xff, 0x1b, 0x94, 0xe3, 0x6f, 0x28, 0x47, 0xb4, 0x5e, 0xb2, 0x75, 0x8e,
	0x13, 0xe0, 0xb1, 0xa2, 0xae, 0x74, 0x51, 0x07, 0x9a, 0x6a, 0x29, 0x6a, 0xa3, 0xd7, 0x0d, 0x98,
	0x7a, 0xd5, 0xdc, 0x0f, 0xcc, 0x56, 0xc6, 0x18, 0x23, 0xe2, 0x20, 0x53, 0x2a, 0xc6, 0x6f, 0x33,
	0x9a, 0x20, 0x17, 0xf6, 0x85, 0x2e, 0xc9, 0x3d, 0x2d, 0x19, 0x36, 0x47, 0x6f, 0x83, 0xdc, 0xe0,
	0x7a, 0x1d, 0x3d, 0x3e, 0x4b, 0x76, 0x55, 0x60, 0x09, 0xb6, 0xb1, 0xa0, 0x09, 0x12, 0xbb, 0xd7,
	0xa5, 0xbe, 0xab, 0xd5, 0xb7, 0x96, 0xaa, 0x21, 0x71, 0x83, 0xab, 0x2d, 0x2f, 0x24, 0x0b, 0xa5,
	0x19, 0xe4, 0xa5, 0xbd, 0xfa, 0xbf, 0xd2, 0x8a, 0xd2, 0x96, 0x3e, 0x85, 0xbc, 0xb4, 0x3e, 0x99,
	0x6c, 0xd0, 0xaa, 0x4f, 0x38, 0x62, 0x31, 0x0e, 0x11, 0xed, 0x8b, 0x5d, 0xea, 0xfb, 0x5a, 0x7d,
	0x67, 0x89, 0xfa, 0x0c, 0xe5, 0x06, 0x37, 0xfe, 0xf2, 0x3f, 0xa9, 0xa2, 0x11, 0xa2, 0xf5, 0x91,
	0xf5, 0xdb, 0x7b, 0xa2, 0xa3, 0x42, 0x42, 0x5a, 0xd8, 0x6b, 0x5d, 0x13, 0x6c, 0xe9, 0x09, 0x36,
	0x97, 0x6d, 0x5c, 0x93, 0xda, 0x03, 0xec, 0xea, 0x64, 0x67, 0xe5, 0xcb, 0xd7, 0xa1, 0x31, 0xda,
	0x3b, 0x9e, 0x39, 0xe6, 0xc9, 0xcc, 0x31, 0x7f, 0xcc, 0x1c, 0xf3, 0xf3, 0xdc, 0x31, 0x4e, 0xe6,
	0x8e, 0xf1, 0x6d, 0xee, 0x18, 0xaf, 0xbd, 0x24, 0x95, 0x87, 0x47, 0xa1, 0x17, 0x51, 0xee, 0x37,
	0xee, 0x8a, 0xbf, 0x57, 0xdd, 0x95, 0x57, 0x44, 0xb1, 0xff, 0xde, 0x57, 0x37, 0x48, 0x4e, 0x4b,
	0x14, 0x61, 0xaf, 0x3e, 0x18, 0x0f, 0x7f, 0x05, 0x00, 0x00, 0xff, 0xff, 0x7e, 0xa4, 0x5e, 0x56,
	0x99, 0x04, 0x00, 0x00,
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
		size, err := m.PriceDecorationFountain.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintParams(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x4a
	{
		size, err := m.PriceDecorationGreenBee.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintParams(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x42
	{
		size, err := m.PriceDecorationLamp.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintParams(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x3a
	{
		size, err := m.PriceDecorationFlag.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintParams(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x32
	{
		size, err := m.PriceDecorationFlowers.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintParams(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x2a
	{
		size, err := m.RewardTree.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintParams(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x22
	{
		size, err := m.PriceTree.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintParams(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x1a
	{
		size, err := m.PriceTile.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintParams(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x12
	{
		size, err := m.PriceSetName.MarshalToSizedBuffer(dAtA[:i])
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
	l = m.PriceSetName.Size()
	n += 1 + l + sovParams(uint64(l))
	l = m.PriceTile.Size()
	n += 1 + l + sovParams(uint64(l))
	l = m.PriceTree.Size()
	n += 1 + l + sovParams(uint64(l))
	l = m.RewardTree.Size()
	n += 1 + l + sovParams(uint64(l))
	l = m.PriceDecorationFlowers.Size()
	n += 1 + l + sovParams(uint64(l))
	l = m.PriceDecorationFlag.Size()
	n += 1 + l + sovParams(uint64(l))
	l = m.PriceDecorationLamp.Size()
	n += 1 + l + sovParams(uint64(l))
	l = m.PriceDecorationGreenBee.Size()
	n += 1 + l + sovParams(uint64(l))
	l = m.PriceDecorationFountain.Size()
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
			if err := m.PriceSetName.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 2:
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
			if err := m.PriceTile.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 3:
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
			if err := m.PriceTree.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 4:
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
			if err := m.RewardTree.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 5:
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
			if err := m.PriceDecorationFlowers.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 6:
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
			if err := m.PriceDecorationFlag.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 7:
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
			if err := m.PriceDecorationLamp.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 8:
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
			if err := m.PriceDecorationGreenBee.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 9:
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
			if err := m.PriceDecorationFountain.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
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
