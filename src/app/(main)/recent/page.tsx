import React from 'react';
import SimpleHeader from '@/components/layouts/SimpleHeader';
import { bestDatas } from '@/datas/main/bestDatas';
import ProductHorizontalList from '@/components/pages/main/recent/ProductHorizontalList';

function Page() {
  // 회원별 최근 본 상품 조회 (token?)
  const productList = bestDatas.productList;
  return (
    <div className="w-full h-full min-h-screen bg-starbucks-lightgray">
      <SimpleHeader title="최근 본 상품" />
      <ProductHorizontalList productList={productList} />
    </div>
  );
}

export default Page;
