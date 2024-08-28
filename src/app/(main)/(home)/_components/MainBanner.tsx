'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Autoplay, Pagination, Navigation } from 'swiper/modules'

import { eventThumbnailData } from '@/datas/eventDatas'
import { eventListDataType, eventThumbnailDataType } from '@/types/eventType'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

function MainBanner({ eventBanner }: { eventBanner: eventThumbnailDataType }) {
  return (
    <div className="pt-28">
      <Swiper
        spaceBetween={0}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        slidesPerView={'auto'}
        className=""
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
                  style={{ width: '100%', height: '100%' }}
                />
              </Link>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default MainBanner
