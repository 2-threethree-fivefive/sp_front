'use server';

import { commonResType } from '@/types/ResponseTypes';

// export async function getProductListByCategory(): Promise<> {
//   'use server';
//   const res = await fetch(
//     `${process.env.API_BASE_URL}/api/v1/product/${}`
//   );
//   if (!res.ok) {
//     throw new Error('Failed to fetch');
//   }

//   const data = (await res.json()) as commonResType<topCategoryDataType[]>;
//   console.log(data.data);
//   return data.data as topCategoryDataType[];
// }
