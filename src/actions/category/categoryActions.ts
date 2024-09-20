'use server';

import {
  bottomCategoryDataType,
  commonResType,
  middleCategoryDataType,
  topCategoryDataType,
} from '@/types/ResponseTypes';

export async function getTopCategories(): Promise<topCategoryDataType[]> {
  'use server';
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/category/top-categories`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch');
  }
  const data = (await res.json()) as commonResType<topCategoryDataType[]>;
  return data.data as topCategoryDataType[];
}

export async function getMiddleCategories(
  topCategoryId: number
): Promise<middleCategoryDataType[]> {
  'use server';
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/category/middle-categories/by-id/${topCategoryId}`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch');
  }

  const data = (await res.json()) as commonResType<middleCategoryDataType[]>;
  return data.data as middleCategoryDataType[];
}

export async function getBottomCategories(
  middleCategoryId: number
): Promise<bottomCategoryDataType[]> {
  'use server';
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/category/bottom-categories/by-id/${middleCategoryId}`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch');
  }

  const data = (await res.json()) as commonResType<bottomCategoryDataType[]>;
  return data.data as bottomCategoryDataType[];
}
