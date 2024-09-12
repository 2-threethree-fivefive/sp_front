import { imageData } from '@/datas/image/imageData';
import { imageResType } from '@/types/ResponseTypes';

export async function getImageData() {
  'use server';
  const res: imageResType = imageData;
  if (res.HttpStatus === 'ok') {
    return res.data;
  }

  return null;
}
