import React, { useEffect } from 'react'
import BackIcon from '/public/assets/images/icons/arrowLeftIcon.svg'
import CartBlackIcon from '/public/assets/images/icons/cartBlackIcon.svg'

function SearchModal({ toggleSearch }: { toggleSearch: () => void }) {
  useEffect(() => {
    // 모달이 열릴 때 body의 스크롤을 비활성화
    document.body.style.overflow = 'hidden'

    // 컴포넌트가 언마운트될 때 스크롤을 복원
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <div className="bg-white w-full h-full px-4 fixed left-0 top-0 z-[100]">
      <div className="flex justify-between items-center h-16">
        <BackIcon onClick={toggleSearch} />
        <input
          type="text"
          className="w-3/4 h-10 px-4 text-sm rounded-full bg-[#F5F5F5]"
          placeholder="원하시는 상품을 검색해보세요."
        />
        <CartBlackIcon width="24" height="24" />
      </div>
    </div>
  )
}

export default SearchModal
