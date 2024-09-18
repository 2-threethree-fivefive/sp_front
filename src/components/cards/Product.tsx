// 'use client'

import { productInfoType } from '@/types/main/productType';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import CartBlackIcon from '/public/assets/images/icons/cartBlackIcon.svg';
import StarIcon from '/public/assets/images/icons/starIcon.svg';
import LikeButton from '@/components/ui/LikeButton';
import FitImage from '../ui/FitImage';

function Product({
  product,
  size,
}: {
  product: productInfoType;
  size: string;
}) {
  return (
    <div
      className={`h-auto pb-4 flex flex-col items-center gap-2 ${size === 'md' ? 'w-36 min-w-36' : size === 'lg' ? 'w-[45%]' : 'w-40 min-w-40'}`}
    >
      <Link href={`/product/${product.productId}`}>
        <FitImage
          src={product.productThumbnailImage}
          alt={product.productName}
        />
      </Link>
      <div className="w-full flex flex-col gap-1 text-sm text-[#222222]">
        <div className="flex justify-between items-center text-xs">
          <span>스타벅스</span>
          <div className="flex gap-2">
            <LikeButton w={20} h={20} />
            <CartBlackIcon width="20" height="20" />
          </div>
        </div>
        <Link href={`/product/${product.productId}`}>
          <p className="line-clamp-2">{product.productName}</p>
          <p className="text-base font-bold text-black">
            {product.productPrice.toLocaleString()}원
          </p>
          {product.reviewCount > 0 ? (
            <div className="flex gap-1 items-center text-[#777777] text-xs">
              <StarIcon width="11" height="16" fill="#C6C6C6" />
              <span>{product.reviewScore}</span>
              <div className="border-solid h-3/4 w-[1px] bg-gray-300"></div>
              <span>{product.reviewCount}건</span>
            </div>
          ) : null}
        </Link>
      </div>
    </div>
  );
}

export default Product;
