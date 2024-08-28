import React from 'react'
import HomeIcon from '/public/assets/images/icons/homeIcon.svg'
import EmptyHeartIcon from '/public/assets/images/icons/emptyHeartIcon.svg'
import MyPageIcon from '/public/assets/images/icons/myPageIcon.svg'
import RecentWatchIcon from '/public/assets/images/icons/recentWatchIcon.svg'

function BottomNavbar() {
  return (
    <div className="w-full flex justify-around items-center bg-starbucks-green h-16 fixed bottom-0">
      <div className="flex flex-col items-center">
        <HomeIcon />
        <span className="pt-[4] text-xs">홈</span>
      </div>
      <div className="flex flex-col items-center">
        <EmptyHeartIcon />
        <span className="pt-[4] text-xs">찜목록</span>
      </div>
      <div className="flex flex-col items-center">
        <MyPageIcon />
        <span className="pt-[4] text-xs">My</span>
      </div>
      <div className="flex flex-col items-center">
        <RecentWatchIcon />
        <span className="pt-[4] text-xs">최근본</span>
      </div>
    </div>
  )
}

export default BottomNavbar
