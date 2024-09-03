import React, { useEffect } from 'react'
import CloseIcon from '/public/assets/images/icons/closeIcon.svg'
import { eventThumbnailData } from '@/datas/main/eventDatas'
import { eventThumbnailDataType } from '@/types/main/eventType'
import Image from 'next/image'
import Link from 'next/link'

function ShowAllEventList({
  eventBanner,
  handleShowAll,
}: {
  eventBanner: eventThumbnailDataType
  handleShowAll: () => void
}) {
  // 데이터
  const eventList = eventBanner.eventThumbnailList

  useEffect(() => {
    // 모달이 열릴 때 body의 스크롤을 비활성화
    document.body.style.overflow = 'hidden'

    // 컴포넌트가 언마운트될 때 스크롤을 복원
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])
  return (
    <div className="flex flex-col fixed top-0 left-0 w-full h-full overflow-y-auto z-50">
      <header className="fixed w-full bg-white text-center font-bold py-4 items-center">
        <h1>전체보기</h1>
        <CloseIcon
          fill="black"
          onClick={handleShowAll}
          className="absolute top-3 right-2"
        />
      </header>
      <div className="mt-14">
        {eventList.map((event) => {
          return (
            <Link key={event.id} href={`/event/${event.id}`}>
              <Image
                src={event.imageUrl}
                alt={event.eventName}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default ShowAllEventList
