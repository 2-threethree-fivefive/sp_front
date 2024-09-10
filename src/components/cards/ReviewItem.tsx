'use client';

import { reviewListData } from '@/datas/main/reviewDatas';
import { reviewItemType } from '@/types/main/reviewType';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import StarRatingBlack from '../ui/StarRatingBlack';

function ReviewItem({ review }: { review: reviewItemType }) {
  return (
    <div className="relative flex flex-col gap-1 pt-3">
      <div className="flex items-baseline">
        <StarRatingBlack reviewScore={review.reviewScore} />
        <span className="text-xs pl-1">사용자ID</span>
        <ChevronRight width={14} className="absolute top-3 right-0" />
      </div>
      <div className="line-clamp-2 pr-4">{review.content}</div>
      {/* 이미지가 있는 경우만 노출 */}
      <div className="flex gap-2 overflow-x-auto">
        <Link
          href={`/product/${review.productUuid}/reviewdetail?reviewId=${review.reviewUuid}`}
          scroll={false}
        >
          <div className="w-24 min-w-24 h-24 bg-gray-500">상품사진</div>
        </Link>
      </div>
      <div className="text-[10px] text-gray-500">{review.modDate}</div>
    </div>
  );
}

export default ReviewItem;
