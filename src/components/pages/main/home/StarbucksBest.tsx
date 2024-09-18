import React from 'react';
import { topCategoryDataType } from '@/types/ResponseTypes';
import CategoryFilter from './CategoryFilter';

function StarbucksBest({
  categoryList,
}: {
  categoryList: topCategoryDataType[];
}) {
  // todo: 베스트 상품 목록 조회; 무한 스크롤 (최대 50개까지)
  // const productList = await getBestProductList();

  return (
    <section className="w-full flex flex-col gap-1 pt-10">
      <h1 className="text-2xl font-bold px-4">스타벅스 베스트</h1>
      <p className="text-xs text-[#666666] px-4">
        스타벅스 인기 상품들을 만나보세요
      </p>
      <CategoryFilter categoryList={categoryList} />
      <div className="flex flex-wrap justify-between pl-4">
        {/* {productList.map((product) => {
          return (
            <Product key={product.productId} product={product} size="lg" />
          );
        })} */}
      </div>
    </section>
  );
}

export default StarbucksBest;
