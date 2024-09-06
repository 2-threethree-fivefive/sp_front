import BasicHeader from '@/components/layouts/BasicHeader';
import Footer from '@/components/layouts/Footer';
import ProductBottomNavbar from '@/components/pages/main/product/ProductBottomNavbar';
import ScrollTopButton from '@/components/ui/ScrollTopButton';
import React from 'react';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BasicHeader />
      {children}
      <ScrollTopButton />
      <Footer />
      <ProductBottomNavbar />
    </>
  );
}

export default Layout;
