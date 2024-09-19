import React from 'react';
import SimpleHeader from '@/components/layouts/SimpleHeader';
import { bestDatas } from '@/datas/main/bestDatas';
import ProductHorizontalList from '@/components/pages/main/recent/ProductHorizontalList';

function Page() {
  // todo: 좋아요 목록 조회 (회원만 가능)
  const productList = bestDatas.productList;
  return (
    <div className="w-full h-full min-h-screen bg-starbucks-lightgray">
      <SimpleHeader title="좋아요" />
      <ProductHorizontalList productList={productList} />
    </div>
  );
}

export default Page;
