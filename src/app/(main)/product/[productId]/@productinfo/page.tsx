'use client';
import ProductDetailHeader from '@/components/pages/main/product/ProductDetailHeader';
import ProductDetailInfo from '@/components/pages/main/product/ProductDetailInfo';
import ProductImgSwiper from '@/components/pages/main/product/ProductImgSwiper';
import ProductInfo from '@/components/pages/main/product/ProductInfo';
import ProductRecommend from '@/components/pages/main/product/ProductRecommend';
import ProductReview from '@/components/pages/main/review/ProductReview';
import { productDetailData } from '@/datas/main/productDetailDatas';
import React, { RefObject, useContext, useRef } from 'react';
import { SectionRefsContext } from '../page';

function Page({ params }: { params: { productId: string } }) {
  // fetch (productId 활용해서)
  const productInfo = productDetailData;
  const { infoSection } = useContext(SectionRefsContext);

  return (
    <>
      <ProductImgSwiper productInfo={productInfo} />
      <ProductInfo productInfo={productInfo} />
      <ProductDetailInfo productInfo={productInfo} infoSection={infoSection} />
    </>
  );
}

export default Page;
