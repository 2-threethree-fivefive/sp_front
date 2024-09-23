'use server';

import {
  commonResType,
  commonResultType,
  imageDataType,
  infiniteResType,
  reviewDataType,
} from '@/types/ResponseTypes';
import { getAllImageData } from '../image/imageActions';

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

// todo: 백엔드 url, 데이터 타입 변경 후 수정 필요
export async function getMediaReviewList(
  productUuid: string,
  pageNum: number,
  pageSize: number
): Promise<reviewDataType[]> {
  'use server';
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/review/allReviewsHaveMediaOfProduct?page=${pageNum}&size=${pageSize}`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch');
  }

  const data = (await res.json()) as infiniteResType<reviewDataType[]>;
  return data.result as reviewDataType[];
}

export async function getReviewItem(
  reviewUuid: string
): Promise<reviewDataType> {
  'use server';
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/review/${reviewUuid}`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch');
  }

  const data = (await res.json()) as commonResultType<reviewDataType>;
  return data.result as reviewDataType;
}

// 기본 리뷰 정보 + 이미지 추가
export async function getReviewIncludeImageList(reviewList: reviewDataType[]) {
  const updatedReviewList = await Promise.all(
    reviewList.map(async (review) => {
      const imagePath = await getAllImageData(review.reviewUuid);
      return { ...review, images: imagePath };
    })
  );
  return updatedReviewList;
}
