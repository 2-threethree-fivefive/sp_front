export interface SignUpErrorMessageType {
  id: string;
  name: string;
  nickname: string;
  email: string;
  password: string;
  confirmPassword: string;
  terms: string;
}

export interface SignUpRequestType {
  id: string;
  nickname: string;
  email: string;
  password: string;
  confirmPassword: string;
  terms: string[];
}

export interface ChangePwRequestType {
  password: string;
  confirmPassword: string;
}

export interface AddDeliveryRequestType {
  nickname: string;
  name: string;
  postNumber: string;
  basicAddress: string;
  detailAddress: string;
  phone1: string;
  phone2: string;
  message: string;
  isBase: boolean;
}

export interface cartItemType {
  id: string;
  name: string;
  price: number;
  quantity: number;
  isChecked: boolean;
}
