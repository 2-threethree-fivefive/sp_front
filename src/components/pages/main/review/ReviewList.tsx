import ReviewItem from '@/components/cards/ReviewItem';
import { reviewListData } from '@/datas/main/reviewDatas';
import { reviewItemType } from '@/types/main/reviewType';
import React, { useEffect, useState } from 'react';

function ReviewList() {
  const [reviewList, setReviewList] = useState<reviewItemType[] | null>(null);
  useEffect(() => {
    const getReviewList = async () => {
      const reviewList = await reviewListData;
      setReviewList(reviewList);
    };
    getReviewList();
  }, []);
  return (
    <>
      {reviewList ? (
        <div>
          <span className="font-bold">전체 리뷰</span>
          <div className="flex flex-col gap-4 text-sm divide-y">
            {reviewList.map((review) => (
              <ReviewItem key={review.reviewUuid} review={review} />
            ))}
          </div>
          {reviewList.length > 4 && (
            <button className="border h-10 w-full mt-4 text-sm">
              전체보기
            </button>
          )}
        </div>
      ) : null}
    </>
  );
}

export default ReviewList;
