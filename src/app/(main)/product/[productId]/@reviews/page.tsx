import {
  getMediaReviewList,
  getReviewList,
} from '@/actions/review/reviewActions';
import ReviewList from '@/components/pages/main/review/ReviewList';
import MediaReviewSummary from '@/components/pages/main/review/ReviewSummary';
import {
  productReviewSummaryType,
  reviewDataType,
} from '@/types/ResponseTypes';
import React from 'react';

async function Page({ params }: { params: { productId: string } }) {
  // todo: review summary 데이터 fetch 필요
  const reviewSummary: productReviewSummaryType = {
    reviewAvg: 4.2,
    reviewCnt: 1,
  };
  const reviewList: reviewDataType[] = await getReviewList(
    params.productId,
    0,
    5
  );
  const mediaReviewList: reviewDataType[] = await getMediaReviewList(
    params.productId,
    0,
    10
  );
  // todo: 리뷰 이미지 관련 fetch 필요
  return (
    <section
      id="review"
      className="flex flex-col gap-6 mt-4 bg-white px-4 py-8"
    >
      <h1 className="text-lg font-bold">고객 리뷰</h1>
      <MediaReviewSummary
        productUuid={params.productId}
        mediaReviewList={mediaReviewList}
        reviewSummary={reviewSummary}
      />
      <ReviewList reviewList={reviewList} />
    </section>
  );
}

export default Page;
