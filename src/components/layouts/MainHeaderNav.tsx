'use client';
import React from 'react';
import CategoryIcon from '/public/assets/images/icons/categoryIcon.svg';
import StarbucksIcon from '/public/assets/images/icons/starbucksIcon.svg';
import SearchIcon from '/public/assets/images/icons/searchIcon.svg';
import CartWhiteIcon from '/public/assets/images/icons/cartWhiteIcon.svg';
import CloseIcon from '/public/assets/images/icons/closeIcon.svg';
import Link from 'next/link';

function MainHeaderNav({
  isOpen,
  handleToggle,
}: {
  isOpen: boolean;
  handleToggle: () => void;
}) {
  return (
    <nav
      id="global-nav-bar"
      className="fixed top-0 left-0 z-50 w-full flex justify-between px-4 items-center h-14 bg-starbucks-green"
    >
      <ul className="flex items-center gap-3">
        <li onClick={handleToggle}>
          {isOpen ? <CloseIcon fill={'white'} /> : <CategoryIcon />}
        </li>
        <li>
          <Link href={'/'}>
            <StarbucksIcon />
          </Link>
        </li>
      </ul>
      <ul className="flex gap-3">
        <li>
          <Link href="/search" scroll={false}>
            <SearchIcon fill="white" />
          </Link>
        </li>
        <li>
          <Link href={'/cart'}>
            <CartWhiteIcon />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default MainHeaderNav;
