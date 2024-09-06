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
