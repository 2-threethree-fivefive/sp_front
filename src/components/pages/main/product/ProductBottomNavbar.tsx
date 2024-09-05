import React from 'react';
import GiftIcon from '/public/assets/images/icons/giftIcon.svg';
import LikeButton from '@/components/ui/LikeButton';

function ProductBottomNavbar() {
  return (
    <ul className="w-full flex items-center text-center h-16 fixed bottom-0 left-0 z-10 bg-white font-semibold">
      <li className="w-[15%] h-full border flex justify-center items-center">
        <LikeButton w={30} h={30} />
      </li>
      <li className="w-[30%] h-full border flex gap-1 justify-center items-center">
        <GiftIcon />
        선물하기
      </li>
      <li className="w-[55%] h-full border flex justify-center items-center text-white bg-starbucks-red">
        구매하기
      </li>
    </ul>
  );
}

export default ProductBottomNavbar;
