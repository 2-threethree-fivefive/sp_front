'use client';
import ProductDetailHeader from '@/components/pages/main/product/ProductDetailHeader';
import { SectionRefsContextType } from '@/types/main/context/refsContextType';
import React, {
  createContext,
  RefObject,
  useEffect,
  useRef,
  useState,
} from 'react';

export const SectionRefsContext = createContext<SectionRefsContextType>({
  infoSection: { current: null },
  reviewSection: { current: null },
  recommendSection: { current: null },
  scrollToSection: () => {},
});

function Page({
  params,
  children,
}: {
  params: { productId: string };
  children: React.ReactNode;
}) {
  const infoSection = useRef<HTMLDivElement>(null);
  const reviewSection = useRef<HTMLDivElement>(null);
  const recommendSection = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionRef: RefObject<HTMLDivElement>) => {
    const headerOffset = 56;
    const elementPosition =
      sectionRef.current?.getBoundingClientRect().top || 0;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;
    console.log('scrollToSection ' + sectionRef?.current);
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  return (
    <SectionRefsContext.Provider
      value={{ infoSection, reviewSection, recommendSection, scrollToSection }}
    >
      <ProductDetailHeader
        scrollToSection={scrollToSection}
        infoSection={infoSection}
        reviewSection={reviewSection}
        recommendSection={recommendSection}
      />
      <div>{children}</div>
    </SectionRefsContext.Provider>
  );
}

export default Page;
