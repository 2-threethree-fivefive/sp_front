import { fetchCartItemList } from '@/actions/cart/cartAction';
import CartListContainer from '@/components/pages/main/cart/CartListContainer';
import React from 'react';

export default async function Page() {
  // const cartItemList = await fetchCartItemList();
  const cartItemList = [
    {
      id: '1',
      name: '이름',
      price: 33333,
      quantity: 1,
      isChecked: true,
    },
    {
      id: '2',
      name: '이름2',
      price: 22222,
      quantity: 2,
      isChecked: true,
    },
  ];
  return (
    <main className="bg-white w-full h-full">
      <CartListContainer cartItemList={cartItemList} />
    </main>
  );
}
