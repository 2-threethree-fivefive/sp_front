import React from 'react';
import HamburgerCategoryModal from './modal';
import { getTopCategories } from '@/actions/initial/categoryActions';
import HamburgerCategory from '@/components/layouts/HamburgerCategory';

async function Page() {
  const topCategories = await getTopCategories();
  return (
    <HamburgerCategoryModal>
      <HamburgerCategory topCategories={topCategories} />
    </HamburgerCategoryModal>
  );
}

export default Page;
