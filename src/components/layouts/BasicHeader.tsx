'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import BackIcon from '/public/assets/images/icons/backIcon.svg';
import StarbucksIcon from '/public/assets/images/icons/starbucksIcon.svg';
import SearchIcon from '/public/assets/images/icons/searchIcon.svg';
import CartBlackIcon from '/public/assets/images/icons/cartBlackIcon.svg';
import Link from 'next/link';
import Image from 'next/image';

function BasicHeader() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  const router = useRouter();
  return (
    <div>
      <header className="w-full flex justify-between px-4 items-center h-16 bg-white">
        <div className="flex items-center gap-3">
          <BackIcon onClick={() => router.back()} />
          <Link href={'/'}>
            <StarbucksIcon />
          </Link>
        </div>
        <div className="flex gap-3">
          <SearchIcon onClick={toggleSearch} fill="black" />
          <Link href={'/cart'}>
            <CartBlackIcon width="24" height="24" />
          </Link>
        </div>
      </header>
    </div>
  );
}

export default BasicHeader;
