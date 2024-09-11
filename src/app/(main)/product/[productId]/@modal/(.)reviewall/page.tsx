'use client';
import React, { useState } from 'react';
import ReviewAllModal from './modal';
import ReviewSummary from '@/components/pages/main/review/ReviewSummary';
import ReviewList from '@/components/pages/main/review/ReviewList';
import { reviewListData } from '@/datas/main/reviewDatas';
import ReviewItem from '@/components/cards/ReviewItem';
import ReviewFiltering from '@/components/ui/ReviewFiltering';
import ReviewOrdering from '@/components/ui/ReviewOrdering';

function Page() {
  // 필터링, 정렬에 따라 API 요청 (필터링 보류)
  const [filtering, setFiltering] = useState<string>('전체');
  const [ordering, setOrdering] = useState<string>('추천순');

  // productUUID 활용 무한스크롤 (use client)

  const reviewList = reviewListData;
  return (
    <ReviewAllModal>
      <div className="flex flex-col w-full gap-4 bg-starbucks-lightgray">
        <section className="px-4 py-8 bg-white">
          <ReviewSummary />
        </section>
        <section className="px-4 pb-8 pt-4 bg-white">
          <div className="w-full h-10 text-sm text-gray-500 border-b flex justify-between">
            <ReviewFiltering
              filtering={filtering}
              setFiltering={setFiltering}
            />
            <ReviewOrdering ordering={ordering} setOrdering={setOrdering} />
          </div>
          <div className="flex flex-col gap-4 text-sm divide-y">
            {reviewList.map((review) => (
              <ReviewItem key={review.reviewUuid} review={review} />
            ))}
          </div>
        </section>
      </div>
    </ReviewAllModal>
  );
}

export default Page;
