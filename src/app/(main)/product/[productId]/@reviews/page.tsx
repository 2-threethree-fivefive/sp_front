import ProductReview from '@/components/pages/main/review/ProductReview';
import { productDetailData } from '@/datas/main/productDetailDatas';
import React from 'react';

function Page() {
  // fetch
  const productInfo = productDetailData;
  return <ProductReview />;
}

export default Page;
