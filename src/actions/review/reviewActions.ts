'use server';

import {
  commonResType,
  infiniteResType,
  reviewDataType,
} from '@/types/ResponseTypes';

export async function getReviewList(
  productUuid: string,
  pageNum: number,
  pageSize: number
): Promise<reviewDataType[]> {
  'use server';
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/review/${productUuid}/allReviewsOfProduct?page=${pageNum}&size=${pageSize}`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch');
  }

  const data = (await res.json()) as infiniteResType<reviewDataType[]>;
  return data.result as reviewDataType[];
}

export async function getMediaReviewList(
  productUuid: string,
  pageNum: number,
  pageSize: number
): Promise<reviewDataType[]> {
  'use server';
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/review/${productUuid}/allReviewsHaveMediaOfProduct?page=${pageNum}&size=${pageSize}`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch');
  }

  const data = (await res.json()) as infiniteResType<reviewDataType[]>;
  return data.result as reviewDataType[];
}
