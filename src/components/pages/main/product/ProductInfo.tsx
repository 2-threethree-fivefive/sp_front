import { productDetailDataType } from '@/types/main/productDetailType'
import React from 'react'

function ProductInfo({ productInfo }: { productInfo: productDetailDataType }) {
  return (
    <section className="p-4 text-lg bg-white">
      <p>{productInfo.productName}</p>
      <p className="pt-6 text-2xl font-bold">
        {productInfo.productPrice.toLocaleString()}원
      </p>
      <div>
        <span>{productInfo.reviewScore}</span>
      </div>
    </section>
  )
}

export default ProductInfo
