'use client';
import ProductRecommend from '@/components/pages/main/product/ProductRecommend';
import React, { useContext, useRef } from 'react';
import { SectionRefsContext } from '../page';

function Page() {
  const { recommendSection } = useContext(SectionRefsContext);

  return (
    <>
      <ProductRecommend recommendSection={recommendSection} />
    </>
  );
}

export default Page;
