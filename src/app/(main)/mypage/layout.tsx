import BottomNavbar from '@/components/layouts/BottomNavbar';
import Footer from '@/components/layouts/Footer';
import ProductDetailHeader from '@/components/pages/main/product/ProductDetailHeader';
import ScrollTopButton from '@/components/ui/ScrollTopButton';
import React from 'react';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProductDetailHeader />
      <main className="absolute top-16 w-full">{children}</main>
      <ScrollTopButton />
      <BottomNavbar />
    </>
  );
}

export default Layout;
