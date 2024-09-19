import { productData } from '@/datas/main/productData';
import { commonResType, productDataType } from '@/types/ResponseTypes';

export async function getProductData() {
  'use server';
  const res: commonResType<productDataType> = productData;
  if (res.HttpStatus === 'ok') {
    return res.data;
  }

  return null;
}
