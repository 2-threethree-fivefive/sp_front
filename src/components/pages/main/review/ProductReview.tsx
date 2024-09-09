import { productDetailDataType } from '@/types/main/productDetailType';
import React, { RefObject } from 'react';
import ReviewSummary from './ReviewSummary';
import ReviewList from './ReviewList';

function ProductReview({
  productInfo,
  reviewSection,
}: {
  productInfo: productDetailDataType;
  reviewSection: RefObject<HTMLDivElement> | null;
}) {
  return (
    <div
      ref={reviewSection}
      id="review"
      className="flex flex-col gap-8 mt-4 bg-white px-4 py-8"
    >
      <h1 className="text-lg font-bold">고객 리뷰</h1>
      <ReviewSummary />
      <ReviewList />
    </div>
  );
}

export default ProductReview;
