import React from 'react'
import CategoryIcon from '/public/assets/images/icons/categoryIcon.svg'
import StarbucksIcon from '/public/assets/images/icons/starbucksIcon.svg'
import SearchIcon from '/public/assets/images/icons/searchIcon.svg'
import CartWhiteIcon from '/public/assets/images/icons/cartWhiteIcon.svg'
import Link from 'next/link'

function MainPageHeader() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full flex justify-between px-4 items-center h-16 bg-starbucks-green">
      <div className="flex items-center gap-3">
        <CategoryIcon />
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
  )
}

export default MainPageHeader
