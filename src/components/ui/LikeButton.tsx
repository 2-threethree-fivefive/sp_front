'use client'
import React, { useEffect, useState } from 'react'
import EmptyHeartIcon from '/public/assets/images/icons/emptyHeartIcon.svg'
import HeartIcon from '/public/assets/images/icons/heartIcon.svg'

function LikeButton({ w, h }: { w: number; h: number }) {
  const [isLike, setIsLike] = useState(false)
  // server actions 사용
  // useEffect(() => {
  //   // 좋아요 클릭 시 API 호출
  //   // setIsLike(true)
  // }, [])
  const handleClick = () => {
    setIsLike(!isLike)
  }
  return (
    <div onClick={handleClick}>
      {isLike ? (
        <HeartIcon width={w} height={h} />
      ) : (
        <EmptyHeartIcon width={w} height={h} />
      )}
    </div>
  )
}

export default LikeButton
