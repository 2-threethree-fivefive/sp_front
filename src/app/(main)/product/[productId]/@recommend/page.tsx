import ProductRecommend from '@/components/pages/main/product/ProductRecommend';
import { productsByEventDatas } from '@/datas/main/productDatas';
import { productInfoType } from '@/types/main/productType';
import React from 'react';

async function Page() {
  // fetch (params - productId 활용) => actions에 넣기
  const recommendData: productInfoType[] =
    await productsByEventDatas[0].productList;
  return <ProductRecommend data={recommendData} />;
}

export default Page;
