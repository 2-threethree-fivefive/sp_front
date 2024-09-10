import ImgSwiper from '@/components/layouts/ImgSwiper';
import ProductDetailInfo from '@/components/pages/main/product/ProductDetailInfo';
import ProductInfo from '@/components/pages/main/product/ProductInfo';
import { productDetailData } from '@/datas/main/productDetailDatas';
import React from 'react';

function Page({ params }: { params: { productId: string } }) {
  // fetch (productId 활용해서)
  const productInfo = productDetailData;

  return (
    <>
      <ImgSwiper imgList={productInfo.productThumbnailImageList} />
      <ProductInfo productInfo={productInfo} />
      <ProductDetailInfo productInfo={productInfo} />
    </>
  );
}

export default Page;
