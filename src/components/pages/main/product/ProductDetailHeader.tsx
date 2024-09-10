'use client';
import React, { useEffect, useState } from 'react';
import BackIcon from '/public/assets/images/icons/backIcon.svg';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import CartIcon from '@/components/ui/CartIcon';

function ProductDetailHeader() {
  const router = useRouter();
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header>
      {!isTop && (
        <header className="flex justify-between items-center fixed top-0 left-0 z-10 w-full bg-white h-14 px-4 transition-transform">
          <BackIcon onClick={() => router.back()} />
          <ul className="flex gap-6">
            <li>정보</li>
            <li>리뷰</li>
            <li>상품추천</li>
          </ul>
          <CartIcon count={10} />
        </header>
      )}
    </header>
  );
}

export default ProductDetailHeader;
