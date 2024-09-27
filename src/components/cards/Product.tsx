'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import CartBlackIcon from '/public/assets/images/icons/cartBlackIcon.svg';
import LikeButton from '@/components/ui/LikeButton';
import FitImage from '../ui/FitImage';
import { StarIcon } from 'lucide-react';
import {
  getProductBasicInfo,
  getProductInfo,
  getProductPrice,
  getProductReviewSummary,
} from '@/actions/product/productActions';
import { productInfoDataType } from '@/types/ResponseTypes';
import { getMainImageData } from '@/actions/image/imageActions';

function Product({ productUuid, size }: { productUuid: string; size: string }) {
  const [productInfo, setProductInfo] = useState<productInfoDataType>();
  useEffect(() => {
    const getData = async () => {
      const [basicInfo, price, reviewSummary, image] = await Promise.all([
        getProductBasicInfo(productUuid),
        getProductPrice(productUuid),
        getProductReviewSummary(productUuid),
        getMainImageData(productUuid),
      ]);
      const data = {
        productUuid: productUuid,
        ...basicInfo,
        ...price,
        ...reviewSummary,
        image: image,
      } as productInfoDataType;
      setProductInfo(data);
    };
    getData();
  }, []);
  return (
    <>
      {productInfo && (
        <div
          className={`h-auto pb-4 flex flex-col items-center gap-2 ${size === 'md' ? 'w-36 min-w-36' : size === 'lg' ? 'w-[45%]' : 'w-[167px] min-w-[167px]'}`}
        >
          <Link href={`/product/${productInfo.productUuid}`}>
            <FitImage
              src={productInfo.image.s3url}
              alt={productInfo.image.imageName}
            />
          </Link>
          <div className="w-full flex flex-col gap-1 text-sm text-[#222222]">
            <div className="flex justify-between items-center text-xs">
              <span>스타벅스</span>
              <div className="flex gap-2">
                <LikeButton
                  w={20}
                  h={20}
                  productUuid={productInfo.productUuid}
                />
                <CartBlackIcon width="20" height="20" />
              </div>
            </div>
            <Link href={`/product/${productInfo.productUuid}`}>
              <p className="line-clamp-2">{productInfo.productName}</p>
              <p className="text-base font-bold text-black">
                {productInfo.price.toLocaleString()}원
              </p>
              {productInfo.reviewcount > 0 ? (
                <div className="flex gap-1 items-center text-[#777777] text-xs">
                  <StarIcon
                    width="11"
                    height="16"
                    fill="#C6C6C6"
                    stroke="#C6C6C6"
                  />
                  <span>{productInfo.reviewscoreAvg}</span>
                  <div className="border-solid h-3/4 w-[1px] bg-gray-300"></div>
                  <span>{productInfo.reviewcount}건</span>
                </div>
              ) : null}
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Product;
