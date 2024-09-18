import { getTopCategories } from '@/actions/category/categoryActions';
import React from 'react';
import HamburgerCategoryModal from '../@modal/(.)categories/modal';
import HamburgerCategory from '@/components/layouts/HamburgerCategory';
import MainPageHeader from '@/components/layouts/MainPageHeader';

async function Page() {
  const topCategories = await getTopCategories();
  return (
    <>
      <MainPageHeader />
      <HamburgerCategoryModal>
        <HamburgerCategory topCategories={topCategories} />
      </HamburgerCategoryModal>
    </>
  );
}

export default Page;
