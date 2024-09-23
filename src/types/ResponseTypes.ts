export interface commonResType<T> {
  HttpStatus: string;
  isSuccess: boolean;
  code: number;
  message: string;
  data?: T;
  result?: T;
}

// user
export interface userDataType {
  accessToken: string;
  name: string;
  uuid: string;
  registered?: boolean;
  email?: string;
}

// 이용 약관에 관한 정보 타입
export interface signUpIntroDataType {
  id: string;
  label: string;
}

// 주문/배송에 관한 정보 타입
export interface orderDeliveryDataType {
  id: string;
  value: number;
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

// 배송지에 관한 정보 타입
export interface deliveryDataType {
  deliveryId: string;
  nickname: string | null;
  receiver: string;
  postNumber: string;
  address: string;
  detailAddress: string;
  phone1: string;
  phone2: string | null;
  message: string | null;
  baseAddress: boolean;
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

// 상품 기본 정보 타입
export interface productBasicDataType {
  productName: string;
  productDescription: string;
  productInfo: string;
}

// 상품UUID로 상품 가격 정보 타입
export interface productPriceDataType {
  price: number;
}

// 상품UUID로 할인율 정보 타입
export interface productDiscountDataType {
  discountType: string;
  discountPrice: number;
}

// 상품 UUID에 대한 전체 리뷰 Score, Count:
export interface productReviewAllDataType {
  reviewAvg: number;
  reviewCnt: number;
}

// UUID로 이미지 정보 타입
export interface imageDataType {
  s3url: string;
  otherUuid: string;
  imageName: string;
}

// 카테고리 데이터 타입
export interface topCategoryDataType {
  id: number;
  topCategoryName: string;
}

export interface middleCategoryDataType {
  id: number;
  middleCategoryName: string;
}

export interface bottomCategoryDataType {
  id: number;
  bottomCategoryName: string;
}

// 상품 uuid만
export interface productUuidDataType {
  productUuid: string;
}

// 상품 요약 정보 (상세 페이지 진입 전 미리 보여주는 데이터)
export interface productInfoDataType {
  productUuid: string;
  productName: string;
  productDescription: string;
  productInfo: string;
  price: number;
  // productThumbnailImage: string;
  // reviewScore: number;
  // reviewCount: number;
}
