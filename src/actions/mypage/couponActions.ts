import { couponData } from '@/datas/mypage/couponData';
import { couponResType } from '@/types/ResponseTypes';

export async function getMyCouponData() {
  'use server';
  const res: couponResType = couponData;
  if (res.HttpStatus === 'ok') {
    return res.data;
  }

  return null;
}

export async function getCouponData() {
  'use server';
  const res: couponResType = couponData;
  if (res.HttpStatus === 'ok') {
    return res.data;
  }

  return null;
}
