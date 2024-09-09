'use client';
import React, { RefObject, useEffect, useRef, useState } from 'react';
import BackIcon from '/public/assets/images/icons/backIcon.svg';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import CartIcon from '@/components/ui/CartIcon';

function ProductDetailHeader({
  scrollToSection,
  infoSection,
  reviewSection,
  recommendSection,
}: {
  scrollToSection: (sectionRef: RefObject<HTMLDivElement>) => void;
  infoSection: RefObject<HTMLDivElement>;
  reviewSection: RefObject<HTMLDivElement>;
  recommendSection: RefObject<HTMLDivElement>;
}) {
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
    <>
      {!isTop && (
        <header className="flex justify-between items-center fixed top-0 left-0 z-10 w-full bg-white h-14 px-4 transition-transform">
          <BackIcon onClick={() => router.back()} />
          <ul className="flex gap-6">
            <li onClick={() => scrollToSection(infoSection)}>정보</li>
            <li onClick={() => scrollToSection(reviewSection)}>리뷰</li>
            <li onClick={() => scrollToSection(recommendSection)}>상품추천</li>
          </ul>
          <CartIcon count={10} />
        </header>
      )}
    </>
  );
}

export default ProductDetailHeader;
