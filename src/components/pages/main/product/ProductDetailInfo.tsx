import { productDetailDataType } from '@/types/main/productDetailType'
import React from 'react'
import ReportIcon from '/public/assets/images/icons/reportIcon.svg'
import Link from 'next/link'
import Image from 'next/image'
import ProductDetailImageList from './ProductDetailImageList'

function ProductDetailInfo({
  productInfo,
}: {
  productInfo: productDetailDataType
}) {
  return (
    <div className="flex flex-col gap-4 bg-white mt-5 px-4 py-8">
      <h1 className="text-lg font-bold">상세 정보</h1>
      <p className="text-sm text-[#666666]">
        상품번호 : {productInfo.productId}
      </p>
      <div className="flex justify-between text-sm">
        <div className="flex items-center gap-2">
          <div className="p-2 border  rounded-full">
            <ReportIcon />
          </div>
          <p>
            상품정보에
            <br />
            문제가 있나요?
          </p>
        </div>
        {/* 로그인 시에만 신고 가능하도록 */}
        <Link
          href={{
            pathname: 'https://m.ssg.com/comm/reportError.ssg',
            query: {
              productId: productInfo.productId,
            },
          }}
        >
          <button className="px-4 py-2 border rounded-3xl font-bold">
            신고하기
          </button>
        </Link>
      </div>
      {/* 상품 공지? */}
      {/* 상품 상세 이미지 */}
      <ProductDetailImageList productInfo={productInfo} />
    </div>
  )
}

export default ProductDetailInfo
