import Footer from '@/components/layouts/Footer'
import ProductBottomNavbar from '@/components/pages/main/product/ProductBottomNavbar'
import ProductDetailHeader from '@/components/pages/main/product/ProductDetailHeader'
import ScrollTopButton from '@/components/ui/ScrollTopButton'
import React from 'react'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProductDetailHeader />
      {children}
      <ScrollTopButton />
      <Footer />
      <ProductBottomNavbar />
    </>
  )
}

export default Layout
