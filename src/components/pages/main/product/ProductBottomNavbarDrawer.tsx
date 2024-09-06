'use client';
import { DrawerContent } from '@/components/ui/drawer';
import React, { useState } from 'react';

function ProductBottomNavbarDrawer() {
  const [productCount, setProductCount] = useState(1);
  return (
    <DrawerContent>
      <div className="px-4 pt-8">
        <div className="w-full h-20 bg-starbucks-lightgray">바탕</div>
        <div className="w-full">
          <button className="w-1/2 bg-black text-white">장바구니</button>
          <button className="w-1/2 bg-starbucks-red text-white">
            바로구매
          </button>
        </div>
      </div>
    </DrawerContent>
  );
}

export default ProductBottomNavbarDrawer;
