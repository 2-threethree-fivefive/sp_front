'use client';

import StarRating from '@/components/ui/StarRating';
import { productDetailData } from '@/datas/main/productDetailDatas';
import { reviewSummaryData } from '@/datas/main/reviewDatas';
import { reviewSummaryType } from '@/types/main/reviewType';
import { ArrowRightIcon, ChevronRight } from 'lucide-react';
import React, { useEffect, useState } from 'react';

function ReviewSummary() {
  const [reviewSummary, setReviewSummary] = useState<reviewSummaryType | null>(
    null
  );

  useEffect(() => {
    const getReviewSummary = async () => {
      const reviewSummary = await reviewSummaryData;
      setReviewSummary(reviewSummary);
    };
    getReviewSummary();
  }, []);

  return (
    <>
      {reviewSummary ? (
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <StarRating rating={reviewSummary.totalReviewScore} w={30} />
            <div className="flex items-baseline gap-1">
              <span className="text-lg font-bold">
                {reviewSummary.totalReviewScore}
              </span>
              <span className="text-sm text-gray-600">
                ({reviewSummary.imagesCount.toLocaleString()})
              </span>
            </div>
          </div>
          <div className="flex w-full justify-between">
            <span className="font-bold">포토&동영상 리뷰</span>
            {/* 크기가 스크린 너비 넘어갈 경우에만 더보기 노출 & 모달 열기 */}
            <div className="flex items-center text-sm">
              <span>더보기(20)</span>
              <ChevronRight width={16} className="text-gray-500" />
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
      ) : (
        <span className="text-gray-600 text-sm text-center">
          아직 등록된 리뷰가 없습니다.
        </span>
      )}
    </>
  );
}

export default ReviewSummary;
