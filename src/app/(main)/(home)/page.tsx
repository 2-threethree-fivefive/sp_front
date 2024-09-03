import { mainCategoryListData } from '@/datas/main/categoryDatas'
import Link from 'next/link'
import React from 'react'
import MainBanner from './_components/MainBanner'
import { eventThumbnailData } from '@/datas/main/eventDatas'
import TrendTags from './_components/TrendTags'
import ProductsByEvent from './_components/ProductsByEvent'
import { productsByEventDatas } from '@/datas/main/productDatas'
import ReviewBest from './_components/ReviewBest'
import StarbucksBest from './_components/StarbucksBest'
import Footer from '@/components/layouts/Footer'
import ScrollTopButton from '@/components/buttons/ScrollTopButton'
import BottomNavbar from '@/components/layouts/BottomNavbar'
import MainPageHeader from '@/components/layouts/MainPageHeader'
import CategorySlider from './_components/CategorySlider'

export default async function Page() {
  // 메인 카테고리 리스트 데이터 fetch
  // const res = await fetch('/api/main_categories')
  const categoryList = await mainCategoryListData
  // const eventBanner = await fetch
  const eventBanner = await eventThumbnailData

  // fetch
  // const res = await fetch('/api/products_by_event')
  const eventList = await productsByEventDatas

  return (
    <main>
      <MainPageHeader />
      <CategorySlider categoryList={categoryList} />
      <MainBanner eventBanner={eventBanner} />
      <TrendTags />
      {eventList.map((eventItem) => {
        return <ProductsByEvent eventItem={eventItem} key={eventItem.eventId} />
      })}
      <ReviewBest />
      <StarbucksBest categoryList={categoryList} />
      <ScrollTopButton />
      <BottomNavbar />
      <Footer />
    </main>
  )
}
