'use client';

import React, { useEffect, useState } from 'react';
import HamburgerCategory from './HamburgerCategory';
import SearchModal from '../modals/SearchModal';
import CategorySlider from '../pages/main/home/CategorySlider';
import MainHeaderNav from './MainHeaderNav';
import { topCategoryDataType } from '@/types/ResponseTypes';
import { getTopCategories } from '@/actions/initial/categoryActions';

function MainPageHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  };

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const [topCategories, setTopCategories] = useState<topCategoryDataType[]>([]);
  useEffect(() => {
    const getData = async () => {
      const data = await getTopCategories();
      setTopCategories(data);
    };
    getData();
  }, []);

  return (
    <header>
      <MainHeaderNav isOpen={isOpen} handleToggle={handleToggle} />
      <CategorySlider topCategories={topCategories} />
      <HamburgerCategory
        topCategories={topCategories}
        isOpen={isOpen}
        handleToggle={handleToggle}
      />
    </header>
  );
}

export default MainPageHeader;
