import Product from '@/components/cards/Product';
import { productsByEventDatas } from '@/datas/main/productDatas';
import { eventListDataType } from '@/types/main/eventType';
import { productByEventType } from '@/types/main/productType';
import React, { RefObject, useEffect, useState } from 'react';

function ProductRecommend({
  recommendSection,
}: {
  recommendSection: RefObject<HTMLDivElement> | null;
}) {
  // 같은 기획전 상품, 추천 상품
  const [recommendList, setRecommendList] = useState<productByEventType | null>(
    null
  );

  useEffect(() => {
    const getRecommendList = async () => {
      const recommendList = await productsByEventDatas[0];
      setRecommendList(recommendList);
    };
    getRecommendList();
  }, []);
  return (
    <div
      ref={recommendSection}
      id="recommend"
      className="mt-4 py-8 px-4 bg-white mb-4"
    >
      <h1 className="text-lg font-bold">추천상품</h1>
      <div className="pt-4 overflow-x-auto flex">
        {recommendList?.productList.map((product) => {
          return (
            <Product key={product.productId} product={product} size="md" />
          );
        })}
      </div>
    </div>
  );
}

export default ProductRecommend;
