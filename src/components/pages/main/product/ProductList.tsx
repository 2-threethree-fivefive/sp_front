import Product from '@/components/cards/Product';
import { bestDatas } from '@/datas/main/bestDatas';
import React from 'react';

function ProductList() {
  const productList = bestDatas.productList;
  return (
    <div className="flex flex-wrap gap-2 px-4 py-2">
      {productList.map((product) => {
        return <Product key={product.productId} product={product} size="xl" />;
      })}
    </div>
  );
}

export default ProductList;
