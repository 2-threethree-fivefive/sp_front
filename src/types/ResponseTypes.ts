export interface commonResType {
  HttpStatus: string;
  code: number;
  message: string;
  data: unknown;
}

// 이용 약관에 관한 정보 타입
export interface signUpIntroDataType {
  id: string;
  label: string;
}

// 이용 약관에 관한 Res 타입
export interface signUpIntroResType {
  HttpStatus: string;
  code: number;
  message: string;
  data: signUpIntroDataType[];
}

// 주문/배송에 관한 정보 타입
export interface orderDeliveryDataType {
  id: string;
  value: number;
}

// 주문/배송에 관한 Res 타입
export interface orderDeliveryResType {
  HttpStatus: string;
  code: number;
  message: string;
  data: orderDeliveryDataType[];
}

// 쿠폰에 관한 정보 타입
export interface couponDataType {
  couponId: string;
  discount: number;
  available: boolean;
  couponTitle: string;
  startDate: string;
  endDate: string;
  condition: string;
}

// 쿠폰에 관한 Res 타입
export interface couponResType {
  HttpStatus: string;
  code: number;
  message: string;
  data: couponDataType[];
}

// 쿠폰에 관한 정보 타입
export interface deliveryDataType {
  deliveryId: string;
  nickname: string | null;
  name: string;
  postNumber: string;
  basicAddress: string;
  detailAddress: string;
  phone1: string;
  phone2: string | null;
  Message: string | null;
  isBase: boolean;
}

// 쿠폰에 관한 Res 타입
export interface deliveryResType {
  HttpStatus: string;
  code: number;
  message: string;
  data: deliveryDataType[];
}
