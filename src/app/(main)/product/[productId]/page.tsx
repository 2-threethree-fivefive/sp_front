'use client';
import React, { RefObject, useEffect, useRef, useState } from 'react';

import { productDetailData } from '@/datas/main/productDetailDatas';
import ProductImgSwiper from '@/components/pages/main/product/ProductImgSwiper';
import ProductInfo from '@/components/pages/main/product/ProductInfo';
import ProductDetailInfo from '@/components/pages/main/product/ProductDetailInfo';
import ProductRecommend from '@/components/pages/main/product/ProductRecommend';
import ProductDetailHeader from '@/components/pages/main/product/ProductDetailHeader';
import ProductReview from '@/components/pages/main/review/ProductReview';

function Page({ params }: { params: { productId: number } }) {
  // console.log(params.productId)
  // fetch (productId 활용해서)
  const productInfo = productDetailData;

  const infoSection = useRef<HTMLDivElement>(null);
  const reviewSection = useRef<HTMLDivElement>(null);
  const recommendSection = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionRef: RefObject<HTMLDivElement>) => {
    const headerOffset = 56;
    const elementPosition =
      sectionRef.current?.getBoundingClientRect().top || 0;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  return (
    <div className="w-full h-full bg-starbucks-lightgray">
      <ProductDetailHeader
        scrollToSection={scrollToSection}
        infoSection={infoSection}
        reviewSection={reviewSection}
        recommendSection={recommendSection}
      />
      <ProductImgSwiper productInfo={productInfo} />
      <ProductInfo productInfo={productInfo} />
      <ProductDetailInfo productInfo={productInfo} infoSection={infoSection} />
      <ProductReview productInfo={productInfo} reviewSection={reviewSection} />
      <ProductRecommend recommendSection={recommendSection} />
    </div>
  );
}

export default Page;
