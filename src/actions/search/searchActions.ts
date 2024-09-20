'use server';

import { commonResType, productUuidDataType } from '@/types/ResponseTypes';

export async function getSearchResults({
  searchValue,
}: {
  searchValue: string;
}): Promise<productUuidDataType[]> {
  'use server';
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/product/search/${searchValue}`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch');
  }

  const data = (await res.json()) as commonResType<productUuidDataType[]>;
  return data.data as productUuidDataType[];
}
