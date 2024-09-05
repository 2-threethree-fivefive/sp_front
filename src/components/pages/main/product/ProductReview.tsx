import { productDetailDataType } from '@/types/main/productDetailType'
import React from 'react'

function ProductReview({
  productInfo,
}: {
  productInfo: productDetailDataType
}) {
  return (
    <div className="flex flex-col gap-4 mt-4 bg-white px-4 py-8">
      <h1 className="text-lg font-bold">고객 리뷰</h1>
      <div className="flex flex-col gap-2">
        <div className="flex items-baseline gap-1">
          <span>★</span>
          <span className="text-lg font-bold">{productInfo.reviewScore}</span>
          <span className="text-sm text-gray-600">
            ({productInfo.reviewCount.toLocaleString()})
          </span>
        </div>
        <div className="flex w-full overflow-x-auto font-bold">
          <span>포토&동영상 리뷰</span>
        </div>
      </div>
    </div>
  )
}

export default ProductReview
