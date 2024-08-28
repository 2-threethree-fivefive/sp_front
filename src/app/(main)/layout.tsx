import React from 'react'
import MainPageHeader from '@/components/layouts/MainPageHeader'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MainPageHeader />
      {children}
    </>
  )
}

export default Layout
