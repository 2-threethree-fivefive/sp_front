import React from 'react';

import { productDetailData } from '@/datas/main/productDetailDatas';
import ProductImgSwiper from '@/components/pages/main/product/ProductImgSwiper';
import ProductInfo from '@/components/pages/main/product/ProductInfo';
import ProductDetailInfo from '@/components/pages/main/product/ProductDetailInfo';
import ProductReview from '@/components/pages/main/product/ProductReview';
import ProductRecommend from '@/components/pages/main/product/ProductRecommend';
import ProductDetailHeader from '@/components/pages/main/product/ProductDetailHeader';

function Page({ params }: { params: { productId: number } }) {
  // console.log(params.productId)
  // fetch (productId 활용해서)
  const productInfo = productDetailData;

  return (
    <div className="w-full h-full bg-starbucks-lightgray">
      <ProductDetailHeader />
      <ProductImgSwiper productInfo={productInfo} />
      <ProductInfo productInfo={productInfo} />
      <ProductDetailInfo productInfo={productInfo} />
      <ProductReview productInfo={productInfo} />
      <ProductRecommend />
    </div>
  );
}

export default Page;
