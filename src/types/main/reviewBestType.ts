import { productInfoType } from './productType';

export interface reviewBestType {
  HttpStatus: string;
  code: number;
  message: string;
  data: reviewBestDataType[];
}

export interface reviewBestDataType {
  reviewId: number;
  reviewText: string;
  reviewImageUrl: string;
  product: productInfoType;
}
