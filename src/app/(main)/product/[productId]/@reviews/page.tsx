'use client';
import ProductReview from '@/components/pages/main/review/ProductReview';
import { productDetailData } from '@/datas/main/productDetailDatas';
import React, { useContext, useRef } from 'react';
import { SectionRefsContext } from '../page';

function Page() {
  // fetch
  const productInfo = productDetailData;
  const { reviewSection } = useContext(SectionRefsContext);
  console.log(reviewSection);
  return (
    <>
      <ProductReview productInfo={productInfo} reviewSection={reviewSection} />
    </>
  );
}

export default Page;
