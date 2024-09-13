export interface commonResType<T> {
  HttpStatus: string;
  code: number;
  message: string;
  data?: T;
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

// 배송지에 관한 정보 타입
export interface deliveryDataType {
  deliveryId: string;
  nickname: string | null;
  name: string;
  postNumber: string;
  basicAddress: string;
  detailAddress: string;
  phone1: string;
  phone2: string | null;
  message: string | null;
  isBase: boolean;
}

// 배송지에 대한 정보타임
export interface deliveryResType {
  HttpStatus: string;
  code: number;
  message: string;
  data: deliveryDataType;
}

// 배송지리스트에 관한 Res 타입
export interface deliveryListResType {
  HttpStatus: string;
  code: number;
  message: string;
  data: deliveryDataType[];
}

// 내 리뷰에 관한 정보 타입
export interface myReviewDataType {
  content: string;
  reviewUuid: string;
  reviewScore: number;
  productUuid: string;
  regDate: string;
  modDate: string;
}

// 내 리뷰에 관한 Res 타입
export interface myReviewResType {
  HttpStatus: string;
  code: number;
  message: string;
  data: myReviewDataType;
}

// 내 리뷰리스트에 관한 Res 타입
export interface myReviewListResType {
  HttpStatus: string;
  code: number;
  message: string;
  data: myReviewDataType[];
}

// 상품 기본 정보 타입
export interface productDataType {
  productName: string;
  productDescription: string;
  productInfo: string;
}

// 상품 UUID로 상품 기본 정보에 관한 Res 타입
export interface productResType {
  HttpStatus: string;
  code: number;
  message: string;
  data: productDataType;
}

// 상품UUID로 상품 가격 정보 타입
export interface productPriceDataType {
  price: number;
}

// 상품 UUID로 상품 가격 정보에 관한 Res 타입
export interface productPriceResType {
  HttpStatus: string;
  code: number;
  message: string;
  data: productPriceDataType;
}

// 상품UUID로 할인율 정보 타입
export interface productDiscountDataType {
  discountType: string;
  discountPrice: number;
}

// 상품 UUID로 할인율 정보에 관한 Res 타입
export interface productDiscountResType {
  HttpStatus: string;
  code: number;
  message: string;
  data: productDiscountDataType;
}

// 상품 UUID에 대한 전체 리뷰 Score, Count:
export interface productReviewAllDataType {
  reviewAvg: number;
  reviewCnt: number;
}

// 상품 UUID로 할인율 정보에 관한 Res 타입
export interface productReviewAllResType {
  HttpStatus: string;
  code: number;
  message: string;
  data: productReviewAllDataType;
}

// UUID로 이미지 정보 타입
export interface imageDataType {
  s3url: string;
  otherUuid: string;
  imageName: string;
}

// UUID로 이미지 정보에 관한 Res 타입
export interface imageResType {
  HttpStatus: string;
  code: number;
  message: string;
  data: imageDataType;
}
