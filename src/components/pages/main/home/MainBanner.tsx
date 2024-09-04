'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Autoplay, Pagination, Navigation } from 'swiper/modules'

import { eventThumbnailData } from '@/datas/main/eventDatas'
import {
  eventListDataType,
  eventThumbnailDataType,
} from '@/types/main/eventType'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import ArrowRightIcon from '/public/assets/images/icons/arrowRightIcon.svg'
import ShowAllEventList from './ShowAllEventList'
import PlayIcon from '/public/assets/images/icons/playIcon.svg'
import PauseIcon from '/public/assets/images/icons/pauseIcon.svg'
import SwiperCore from 'swiper'

function MainBanner({ eventBanner }: { eventBanner: eventThumbnailDataType }) {
  // 전체보기 클릭 시 전체 이벤트 리스트 노출
  const [showAll, setShowAll] = useState(false)
  const handleShowAll = () => {
    setShowAll(!showAll)
  }

  const [currentIndex, setCurrentIndex] = useState(1)

  const handleSlideChange = (swiper: SwiperCore) => {
    setCurrentIndex(swiper.realIndex) // loop 상태에서 제대로 된 index 가져올 수 있음
  }

  // auto play
  const swiperRef = useRef<SwiperCore | null>(null)
  const [isAutoplay, setIsAutoplay] = useState(true)

  const toggleAutoplay = () => {
    if (swiperRef.current) {
      if (isAutoplay) {
        swiperRef.current.autoplay.stop()
      } else {
        swiperRef.current.autoplay.start()
      }
      setIsAutoplay(!isAutoplay)
    }
  }
  return (
    <div className="w-full relative">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)} // swiper 인스턴스 설정
        onSlideChange={handleSlideChange}
        spaceBetween={0}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        slidesPerView={'auto'}
      >
        {eventBanner.eventThumbnailList.map((event: eventListDataType) => {
          return (
            <SwiperSlide key={event.id}>
              <Link href={`/event/${event.id}`}>
                <Image
                  src={event.imageUrl}
                  alt={event.eventName}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />
              </Link>
            </SwiperSlide>
          )
        })}
      </Swiper>
      <div className="flex gap-[2px] text-white font-bold text-xs absolute z-20 right-0 bottom-0">
        <div className="flex items-center gap-2 bg-gray-800 bg-opacity-60 px-2">
          {isAutoplay ? (
            <PauseIcon onClick={toggleAutoplay} />
          ) : (
            <PlayIcon onClick={toggleAutoplay} />
          )}
          <div className="tracking-widest">
            <span>{currentIndex + 1}</span>
            <span className="text-gray-400">
              /{eventBanner.eventThumbnailList.length}
            </span>
          </div>
        </div>
        <button
          className="flex items-center bg-gray-800 bg-opacity-60 p-2 pl-3"
          onClick={handleShowAll}
        >
          전체보기
          <ArrowRightIcon />
        </button>
      </div>
      {showAll && (
        <ShowAllEventList
          eventBanner={eventBanner}
          handleShowAll={handleShowAll}
          currentIndex={currentIndex}
        />
      )}
    </div>
  )
}

export default MainBanner
