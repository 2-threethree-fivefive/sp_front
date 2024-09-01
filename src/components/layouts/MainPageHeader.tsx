'use client'

import React from 'react'
import CategoryIcon from '/public/assets/images/icons/categoryIcon.svg'
import StarbucksIcon from '/public/assets/images/icons/starbucksIcon.svg'
import SearchIcon from '/public/assets/images/icons/searchIcon.svg'
import CartWhiteIcon from '/public/assets/images/icons/cartWhiteIcon.svg'
import Link from 'next/link'
import { Dialog, DialogTrigger } from '../ui/dialog'
import HamburgerCategory from './HamburgerCategory'
import CloseIcon from '/public/assets/images/icons/closeIcon.svg'

function MainPageHeader() {
  // 햄버거 메뉴 상태
  const [isOpen, setIsOpen] = React.useState(false)
  const handleOpen = () => {
    setIsOpen(true)
    document.body.style.overflow = 'hidden'
  }
  const handleClose = () => {
    setIsOpen(false)
    document.body.style.overflow = 'auto'
  }

  // // 검색 컴포넌트 상태
  // const [isSearchOpen, setIsSearchOpen] = React.useState(false)
  // const toggleSearch = () => {
  //   setIsSearchOpen(!isSearchOpen)
  // }
  return (
    <div>
      <header className="fixed top-0 left-0 z-50 w-full flex justify-between px-4 items-center h-16 bg-starbucks-green">
        <div className="flex items-center gap-3">
          {isOpen ? (
            <CloseIcon fill={'white'} onClick={handleClose} />
          ) : (
            <CategoryIcon onClick={handleOpen} />
          )}
          <Link href={'/'}>
            <StarbucksIcon />
          </Link>
        </div>
        <div className="flex gap-3">
          <SearchIcon />
          <Link href={'/cart'}>
            <CartWhiteIcon />
          </Link>
        </div>
      </header>
      {isOpen && (
        <HamburgerCategory isOpen={isOpen} handleClose={handleClose} />
      )}
    </div>
  )
}

export default MainPageHeader
