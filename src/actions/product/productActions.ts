import { productData } from '@/datas/main/productData';
import { productResType } from '@/types/ResponseTypes';

export async function getProductData() {
  'use server';
  const res: productResType = productData;
  if (res.HttpStatus === 'ok') {
    return res.data;
  }

  return null;
}
