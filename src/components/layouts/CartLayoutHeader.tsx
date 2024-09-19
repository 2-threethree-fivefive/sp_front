import React from 'react';
import CartHeaderNav from '../pages/main/cart/CartHeaderNav';
import CartDeliveryNav from '../pages/main/cart/CartDeliveryNav';
import { deliveryDataType } from '@/types/ResponseTypes';
import { getDeliveryData } from '@/actions/mypage/deleveryAction';

async function CartLayoutHeader() {
  const delivery: deliveryDataType =
    (await getDeliveryData()) as deliveryDataType;
  return (
    <header className="w-full">
      <CartHeaderNav />
      <CartDeliveryNav delivery={delivery} />
    </header>
  );
}

export default CartLayoutHeader;
