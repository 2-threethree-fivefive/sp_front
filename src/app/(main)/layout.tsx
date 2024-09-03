import React from 'react'
import MainPageHeader from '@/components/layouts/MainPageHeader'
import ScrollTopButton from '@/components/buttons/ScrollTopButton'
import BottomNavbar from '@/components/layouts/BottomNavbar'
import SearchModal from '@/components/modals/SearchModal'

function Layout({
  children,
  modal,
}: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <>
      {children}
      {/* {modal} */}
    </>
  )
}

export default Layout
