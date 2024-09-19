import Product from '@/components/cards/Product';
import { productInfoType } from '@/types/main/productType';
import React from 'react';

function ProductList({ productList }: { productList: productInfoType[] }) {
  return (
    <div className="flex flex-wrap justify-between p-4">
      {productList.map((product) => {
        return <Product key={product.productId} product={product} size="xl" />;
      })}
    </div>
  );
}

export default ProductList;
