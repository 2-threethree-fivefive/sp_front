// 'use client'

import { productListByEventType } from '@/types/main/productType'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import EmptyHeartIcon from '/public/assets/images/icons/emptyHeartIcon.svg'
import CartBlackIcon from '/public/assets/images/icons/cartBlackIcon.svg'
import StarIcon from '/public/assets/images/icons/starIcon.svg'

function Product({
  product,
  width,
}: {
  product: productListByEventType
  width: number
}) {
  return (
    <div
      className={`w-36 min-w-36 h-auto mr-4 pb-4 flex flex-col items-center gap-2`}
    >
      <Link
        href={{
          pathname: '/products/productDetail',
          query: { productId: product.productId },
        }}
      >
        <Image
          src={product.productThumbnailImage}
          alt={product.productName}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
      </Link>
      <div className="w-full flex flex-col gap-1 text-sm text-[#222222]">
        <div className="flex justify-between items-center text-xs">
          <span>스타벅스</span>
          <div className="flex gap-2">
            <EmptyHeartIcon width="20" height="20" />
            <CartBlackIcon />
          </div>
        </div>
        <Link
          href={{
            pathname: '/products/productDetail',
            query: { productId: product.productId },
          }}
        >
          <p className="line-clamp-2">{product.productName}</p>
          <p className="text-base font-bold text-black">
            {product.productPrice.toLocaleString()}원
          </p>
          <div className="flex gap-1 items-center text-[#777777] text-xs">
            <StarIcon />
            <span>{product.reviewScore}</span>
            <div className="border-solid h-3/4 w-[1px] bg-gray-300"></div>
            <span>{product.reviewCount}건</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Product
