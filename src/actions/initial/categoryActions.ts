'use server';
import {
  middleCategoryDataType,
  subCategoryDataType,
  topCategoryDataType,
} from '@/types/main/categoryType';
import { commonResType } from '@/types/ResponseTypes';

export async function getTopCategories(): Promise<topCategoryDataType[]> {
  'use server';
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/category/top-categories`,
    { next: { revalidate: 60 * 60 * 24 } }
  );
  if (!res.ok) {
    throw new Error('Failed to fetch');
  }

  const data = (await res.json()) as commonResType<topCategoryDataType[]>;
  // console.log(data.data);
  return data.data as topCategoryDataType[];
}

export async function getSubCategories(
  topCategoryId: number
): Promise<middleCategoryDataType[]> {
  'use server';
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/category/top-categories/${topCategoryId}/middle-categories`,
    { next: { revalidate: 60 * 60 * 24 } }
  );
  if (!res.ok) {
    throw new Error('Failed to fetch');
  }

  const data = (await res.json()) as commonResType<middleCategoryDataType[]>;
  return data.data as middleCategoryDataType[];
}
