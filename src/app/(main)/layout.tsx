import React from 'react'
import MainPageHeader from '@/components/layouts/MainPageHeader'
import ScrollTopButton from '@/components/buttons/ScrollTopButton'
import BottomNavbar from '@/components/layouts/BottomNavbar'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MainPageHeader />
      {children}
      <ScrollTopButton />
      <BottomNavbar />
    </>
  )
}

export default Layout
