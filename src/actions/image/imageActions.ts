import { imageData } from '@/datas/image/imageData';
import {
  commonResultType,
  imageDataType,
  imageResType,
} from '@/types/ResponseTypes';

export async function getImageData() {
  'use server';
  const res: imageResType = imageData;
  if (res.HttpStatus === 'ok') {
    return res.data;
  }

  return null;
}

// 메인(썸네일) 이미지 조회
export async function getMainImageData(uuid: string): Promise<imageDataType> {
  'use server';
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/image/${uuid}/mainMedia`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch');
  }
  const data = (await res.json()) as commonResultType<imageDataType>;
  return data.result as imageDataType;
}

// 이미지 목록 조회
export async function getAllImageData(uuid: string): Promise<imageDataType[]> {
  'use server';
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/image/${uuid}/allMedias`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch');
  }
  const data = (await res.json()) as commonResultType<imageDataType[]>;
  return data.result as imageDataType[];
}
