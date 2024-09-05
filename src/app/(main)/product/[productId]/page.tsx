import React from 'react'

import { productDetailData } from '@/datas/main/productDetailDatas'
import ProductImgSwiper from '@/components/pages/main/product/ProductImgSwiper'
import ProductInfo from '@/components/pages/main/product/ProductInfo'
import ProductDetailInfo from '@/components/pages/main/product/ProductDetailInfo'
import ProductReview from '@/components/pages/main/product/ProductReview'

function Page({ params }: { params: { productId: number } }) {
  // console.log(params.productId)
  // fetch (productId 활용해서)
  const productInfo = productDetailData

  return (
    <div className="w-full h-full mt-16 bg-starbucks-lightgray">
      <ProductImgSwiper productInfo={productInfo} />
      <ProductInfo productInfo={productInfo} />
      <ProductDetailInfo productInfo={productInfo} />
      <ProductReview productInfo={productInfo} />
    </div>
  )
}

export default Page
