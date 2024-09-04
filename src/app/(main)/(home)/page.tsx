import { mainCategoryListData } from '@/datas/main/categoryDatas'
import React from 'react'
import { eventThumbnailData } from '@/datas/main/eventDatas'
import { productsByEventDatas } from '@/datas/main/productDatas'
import Footer from '@/components/layouts/Footer'
import BottomNavbar from '@/components/layouts/BottomNavbar'
import MainPageHeader from '@/components/layouts/MainPageHeader'
import CategorySlider from '@/components/pages/main/home/CategorySlider'
import MainBanner from '@/components/pages/main/home/MainBanner'
import TrendTags from '@/components/pages/main/home/TrendTags'
import ProductsByEvent from '@/components/pages/main/home/ProductsByEvent'
import ReviewBest from '@/components/pages/main/home/ReviewBest'
import StarbucksBest from '@/components/pages/main/home/StarbucksBest'
import ProductsByEventList from '@/components/pages/main/home/ProductsByEventList'

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
      <CategorySlider categoryList={categoryList} />
      <MainBanner eventBanner={eventBanner} />
      <TrendTags />
      <ProductsByEventList />
      <ReviewBest />
      <StarbucksBest categoryList={categoryList} />
    </main>
  )
}
