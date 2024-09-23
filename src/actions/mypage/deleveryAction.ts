'use server';

import { AddDeliveryRequestType } from '@/types/RequestTypes';
import { deliveryDataType } from '@/types/ResponseTypes';
import { revalidateTag } from 'next/cache';

// 배송지 정보 받아오기
export async function getDeliveryData(
  deliveryId: string,
  token: string
): Promise<deliveryDataType> {
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/shipping/shipping-only/${deliveryId}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    }
  );
  if (!res.ok) {
    throw new Error('Failed to fetch delivery item');
  }
  const data = await res.json();
  return data.result;
}

// 배송지리스트 정보 받아오기
export async function getDeliveryListData(
  token: string
): Promise<deliveryDataType[]> {
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/shipping/shipping-list`,
    {
      method: 'GET',
      next: { tags: ['deleteDelivery'] },
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    }
  );
  console.log('여기', res);
  if (!res.ok) {
    throw new Error('Failed to fetch delivery item list');
  }
  const data = await res.json();
  return data.result;
}

// 배송지 정보 등록하기
export async function postDeliveryAction(formData: FormData, token: string) {
  'use server';
  const payload: AddDeliveryRequestType = {
    nickname: formData.get('nickname') as string,
    postNumber: formData.get('postNumber') as string,
    address: formData.get('basicAddress') as string,
    detailAddress: formData.get('detailAddress') as string,
    phone1: formData.get('phone1') as string,
    phone2: formData.get('phone2') as string,
    message:
      formData.get('message') === '직접 입력'
        ? (formData.get('customMessage') as string)
        : (formData.get('message') as string),
    receiver: formData.get('name') as string,
    baseAddress: formData.get('isBase') === 'on',
  };

  const res = await fetch(`${process.env.API_BASE_URL}/api/v1/shipping/add`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });
  return await res.json();
}

// 배송지 정보 수정하기
export async function putDeliveryAction(
  formData: FormData,
  deliveryId: string,
  token: string
) {
  'use server';
  const payload: AddDeliveryRequestType = {
    nickname: formData.get('nickname') as string,
    receiver: formData.get('name') as string,
    postNumber: formData.get('postNumber') as string,
    address: formData.get('basicAddress') as string,
    detailAddress: formData.get('detailAddress') as string,
    phone1: formData.get('phone1') as string,
    phone2: formData.get('phone2') as string,
    message:
      formData.get('message') === '직접 입력'
        ? (formData.get('customMessage') as string)
        : (formData.get('message') as string),
    baseAddress: formData.get('isBase') === 'on',
  };

  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/shipping/modify/${deliveryId}`,
    {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    }
  );
  return await res.json();
}

// 배송지 정보 삭제하기
export async function deleteDeliveryData(
  deliveryId: string,
  token: string
): Promise<deliveryDataType[]> {
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/shipping/delete/${deliveryId}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    }
  );
  if (!res.ok) {
    throw new Error('Failed to delete delivery item list');
  }
  const data = await res.json();
  revalidateTag('deleteDelivery');
  return data.result;
}
