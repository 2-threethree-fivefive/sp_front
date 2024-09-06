'use client';
import React, { useEffect, useRef } from 'react';
import BackIcon from '/public/assets/images/icons/backIcon.svg';
import CartBlackIcon from '/public/assets/images/icons/cartBlackIcon.svg';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

function ProductDetailHeader() {
  const router = useRouter();
  const [isTop, setIsTop] = React.useState(true);
  // 섹션 참조를 위한 전달된 ref는 Content에서 사용할 예정
  const infoSection = useRef(null);
  const reviewSection = useRef(null);
  const recommendSection = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // const scrollToSection = (sectionRef:) => {
  //   sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  // };

  return (
    <>
      {!isTop && (
        <header className="flex justify-between items-center fixed top-0 left-0 z-10 w-full bg-white h-14 px-4 transition-transform">
          <BackIcon onClick={() => router.back()} />
          <ul className="flex gap-6">
            <li>정보</li>
            <li>리뷰</li>
            <li>상품추천</li>
          </ul>
          {/* 카트 내 담긴 상품 개수 동적 변경 필요 */}
          <Link href="/cart">
            <div className="relative">
              <CartBlackIcon width="24" height="24" />
              <div className="absolute -top-1 -right-1 bg-starbucks-red rounded-full h-4 w-4 text-white text-[9px] font-bold flex justify-center items-center">
                10
              </div>
            </div>
          </Link>
        </header>
      )}
    </>
  );
}

export default ProductDetailHeader;
