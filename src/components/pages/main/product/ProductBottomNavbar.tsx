import React from 'react';
import LikeButton from '@/components/ui/LikeButton';
import { Gift } from 'lucide-react';
import { Drawer, DrawerTrigger } from '@/components/ui/drawer';
import ProductBottomNavbarDrawer from './ProductBottomNavbarDrawer';

function ProductBottomNavbar() {
  return (
    <ul className="w-full flex items-center text-center h-14 fixed bottom-0 left-0 z-10 bg-white font-semibold">
      <li className="w-[15%] h-full border flex justify-center items-center">
        <LikeButton w={30} h={30} />
      </li>
      <Drawer>
        <DrawerTrigger className="w-full h-full flex">
          <li className="w-[40%] h-full border flex gap-1 justify-center items-center">
            <Gift width={20} />
            선물하기
          </li>
          <li className="w-[65%] h-full border flex justify-center items-center text-white bg-starbucks-red">
            구매하기
          </li>
        </DrawerTrigger>
        <ProductBottomNavbarDrawer />
      </Drawer>
    </ul>
  );
}

export default ProductBottomNavbar;
