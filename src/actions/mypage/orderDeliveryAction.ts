import { orderDeliveryData } from '@/datas/mypage/orderDeliveryData';
import { orderDeliveryResType } from '@/types/ResponseTypes';

export async function getOrderDeliveryData() {
  'use server';
  const res: orderDeliveryResType = orderDeliveryData;
  if (res.HttpStatus === 'ok') {
    return res.data;
  }

  return null;
}
