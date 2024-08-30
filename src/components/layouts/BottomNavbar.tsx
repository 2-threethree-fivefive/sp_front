import React from 'react'
import HomeIcon from '/public/assets/images/icons/homeIcon.svg'
import EmptyHeartIcon from '/public/assets/images/icons/emptyHeartIcon.svg'
import MyPageIcon from '/public/assets/images/icons/myPageIcon.svg'
import RecentWatchIcon from '/public/assets/images/icons/recentWatchIcon.svg'
import Link from 'next/link'

function BottomNavbar() {
  return (
    <div className="w-full flex justify-around items-center h-16 fixed bottom-0 left-0 z-50 bg-white">
      <Link href={'/'} className="flex flex-col items-center">
        <HomeIcon />
        <span className="pt-[4] text-xs">홈</span>
      </Link>
      <Link href={'/wishlish'} className="flex flex-col items-center">
        <EmptyHeartIcon width="24" height="24" />
        <span className="pt-[4] text-xs">찜목록</span>
      </Link>
      <Link href={'/mypage'} className="flex flex-col items-center">
        <MyPageIcon />
        <span className="pt-[4] text-xs">My</span>
      </Link>
      <Link href={'/recent'} className="flex flex-col items-center">
        <RecentWatchIcon />
        <span className="pt-[4] text-xs">최근본</span>
      </Link>
    </div>
  )
}

export default BottomNavbar
