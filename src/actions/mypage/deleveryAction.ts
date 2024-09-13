import { deliveryData } from '@/datas/mypage/deliveryData';
import { deliveryListData } from '@/datas/mypage/deliveryListData';
import { AddDeliveryRequestType } from '@/types/RequestTypes';
import { deliveryListResType, deliveryResType } from '@/types/ResponseTypes';

// 배송지 정보 받아오기
export async function getDeliveryData() {
  'use server';
  const res: deliveryResType = deliveryData;
  if (res.HttpStatus === 'ok') {
    return res.data;
  }

  return null;
}

// 배송지리스트 정보 받아오기
export async function getDeliveryListData() {
  'use server';
  const res: deliveryListResType = deliveryListData;
  if (res.HttpStatus === 'ok') {
    return res.data;
  }

  return null;
}

// 배송지 정보 등록하기
export async function postDeliveryAction(formData: FormData) {
  'use server';
  const payload: AddDeliveryRequestType = {
    nickname: formData.get('nickname') as string,
    name: formData.get('name') as string,
    postNumber: formData.get('postNumber') as string,
    basicAddress: formData.get('basicAddress') as string,
    detailAddress: formData.get('detailAddress') as string,
    phone1: formData.get('phone1') as string,
    phone2: formData.get('phone2') as string,
    message:
      formData.get('message') === '직접 입력'
        ? (formData.get('customMessage') as string)
        : (formData.get('message') as string),
    isBase: formData.get('isBase') === 'on',
  };
  console.log('action payload', payload);

  // todo: api 완성 후 하기
  // const res = await fetch(`${process.env.API_BASE_URL}/api/v1/`, {
  //   method: 'POST',
  //   body: JSON.stringify(payload),
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // });

  // console.log(res);
  // if (res.ok) {
  //   return await res.json();
  // }
  // return null;
}

// 배송지 정보 수정하기
export async function putDeliveryAction(formData: FormData) {
  'use server';
  const payload: AddDeliveryRequestType = {
    nickname: formData.get('nickname') as string,
    name: formData.get('name') as string,
    postNumber: formData.get('postNumber') as string,
    basicAddress: formData.get('basicAddress') as string,
    detailAddress: formData.get('detailAddress') as string,
    phone1: formData.get('phone1') as string,
    phone2: formData.get('phone2') as string,
    message:
      formData.get('message') === '직접 입력'
        ? (formData.get('customMessage') as string)
        : (formData.get('message') as string),
    isBase: formData.get('isBase') === 'on',
  };
  console.log('action payload', payload);

  // todo: api 완성 후 하기
  // const res = await fetch(`${process.env.API_BASE_URL}/api/v1/`, {
  //   method: 'POST',
  //   body: JSON.stringify(payload),
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // });

  // console.log(res);
  // if (res.ok) {
  //   return await res.json();
  // }
  // return null;
}
