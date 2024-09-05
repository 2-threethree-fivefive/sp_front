import { reviewBestDatas } from '@/datas/main/reviewBestDatas';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import StarIcon from '/public/assets/images/icons/starIcon.svg';

async function ReviewBest() {
  // fetch
  // const res = await fetch('/api/review_best')
  const res = await reviewBestDatas;
  return (
    <section className="w-full flex flex-col gap-1 pt-10 px-4">
      <h1 className="text-2xl font-bold">Review Best</h1>
      <p className="text-xs text-[#666666]">베스트리뷰 상품들을 만나보세요</p>
      <div className="flex overflow-x-auto gap-2 py-4">
        {res.data.map((review) => {
          return (
            <div
              key={review.reviewId}
              className="w-80 min-w-80 h-auto mr-4 flex gap-1 "
            >
              <Link
                href={`/product/${review.product.productId}`}
                className="w-2/5"
              >
                <Image
                  src={review.product.productThumbnailImage}
                  alt={review.product.productName}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                  priority
                />
              </Link>
              <div className="w-3/5 flex flex-col gap-0.5 pl-2">
                <Link href={`/product/${review.product.productId}`}>
                  <p className="text-xs text-[#666666]">스타벅스</p>
                  <p className="text-sm text-[#222222] line-clamp-1">
                    {review.product.productName}
                  </p>
                  <p className="font-bold">
                    {review.product.productPrice.toLocaleString()}원
                  </p>
                  <div className="flex gap-1 items-center text-[#777777] text-xs">
                    <StarIcon />
                    <span>{review.product.reviewScore}</span>
                    <div className="border-solid h-3/4 w-[1px] bg-gray-300"></div>
                    <span>{review.product.reviewCount}건</span>
                  </div>
                </Link>
                <Link href={`/reviewDetail/${review.reviewId}`}>
                  <p className="text-xs text-[#666666] text-ellipsis line-clamp-3">
                    {review.reviewText}
                  </p>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ReviewBest;
