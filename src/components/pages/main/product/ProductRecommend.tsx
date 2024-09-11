'use client';
import Product from '@/components/cards/Product';
import { productsByEventDatas } from '@/datas/main/productDatas';
import { eventListDataType } from '@/types/main/eventType';
import { productByEventType, productInfoType } from '@/types/main/productType';
import React, { RefObject, useEffect, useState } from 'react';

function ProductRecommend({ data }: { data: productInfoType[] }) {
  // 같은 기획전 상품, 추천 상품

  return (
    <section id="recommend" className="mt-4 py-8 px-4 bg-white mb-4">
      <h1 className="text-lg font-bold">추천상품</h1>
      <div className="pt-4 overflow-x-auto flex">
        {data.map((product) => {
          return (
            <Product key={product.productId} product={product} size="md" />
          );
        })}
      </div>
    </section>
  );
}

export default ProductRecommend;
