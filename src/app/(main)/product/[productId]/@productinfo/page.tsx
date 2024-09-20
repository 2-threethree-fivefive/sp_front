import { getProductInfo } from '@/actions/product/productActions';
import ImgSwiper from '@/components/layouts/ImgSwiper';
import ProductDetailInfo from '@/components/pages/main/product/ProductDetailInfo';
import ProductInfo from '@/components/pages/main/product/ProductInfo';
import { productDetailData } from '@/datas/main/productDetailDatas';
import { productInfoDataType } from '@/types/ResponseTypes';
import React from 'react';

async function Page({ params }: { params: { productId: string } }) {
  // fetch (productId 활용해서)
  // const productInfo = productDetailData;
  const productInfo: productInfoDataType = await getProductInfo(
    params.productId
  );
  console.log(productInfo);

  return (
    <>
      <div>{params.productId}</div>
      {/* <ImgSwiper imgList={productInfo.productThumbnailImageList} /> */}
      <ProductInfo productInfo={productInfo} />
      <ProductDetailInfo productInfo={productInfo} />
    </>
  );
}

export default Page;
