import { productDetailDataType } from '@/types/main/productDetailType';
import React from 'react';
import ArrowRightIcon from '/public/assets/images/icons/arrowRightIcon.svg';
import Image from 'next/image';
import ReviewItem from '@/components/cards/ReviewItem';
import StarRating from '@/components/ui/StarRating';

function ProductReview({
  productInfo,
}: {
  productInfo: productDetailDataType;
}) {
  return (
    <div className="flex flex-col gap-8 mt-4 bg-white px-4 py-8">
      <h1 className="text-lg font-bold">고객 리뷰</h1>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <StarRating rating={productInfo.reviewScore} w={30} />
          <div className="flex items-baseline gap-1">
            <span className="text-lg font-bold">{productInfo.reviewScore}</span>
            <span className="text-sm text-gray-600">
              ({productInfo.reviewCount.toLocaleString()})
            </span>
          </div>
        </div>
        <div className="flex w-full justify-between">
          <span className="font-bold">포토&동영상 리뷰</span>
          {/* 크기가 스크린 너비 넘어갈 경우에만 더보기 노출 & 모달 열기 */}
          <div className="flex items-center text-sm">
            <span>더보기(20)</span>
            <ArrowRightIcon fill="black" />
          </div>
        </div>
        {/* 포토 동영상 imgList 보여주기 */}
        <div className="flex gap-2 overflow-x-auto">
          <div className="w-24 min-w-24 h-24 bg-gray-500">상품사진</div>
          <div className="w-24 min-w-24 h-24 bg-gray-500">상품사진</div>
          <div className="w-24 min-w-24 h-24 bg-gray-500">상품사진</div>
          <div className="w-24 min-w-24 h-24 bg-gray-500">상품사진</div>
          <div className="w-24 min-w-24 h-24 bg-gray-500">상품사진</div>
          <div className="w-24 min-w-24 h-24 bg-gray-300 flex flex-col justify-center items-center">
            <span>+</span>
            <span>더보기</span>
          </div>
        </div>
      </div>
      {/* 전체리뷰 */}
      <div>
        <span className="font-bold">전체 리뷰</span>
        <ReviewItem />
      </div>
    </div>
  );
}

export default ProductReview;
