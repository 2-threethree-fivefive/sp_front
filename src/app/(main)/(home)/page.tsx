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
      <ul className="mt-16 flex justify-start overflow-x-auto gap-6 lg:gap-20 p-4 w-full bg-starbucks-green">
        {categoryList.map((category) => {
          return (
            <Link
              key={category.id}
              href={{
                pathname: '/products',
                query: { mainId: category.id },
              }}
            >
              <li>
                <span className="text-nowrap text-white">
                  {category.mainCategoryName}
                </span>
              </li>
            </Link>
          )
        })}
      </ul>
      <MainBanner eventBanner={eventBanner} />
      <TrendTags />
      {eventList.map((eventItem) => {
        return <ProductsByEvent eventItem={eventItem} key={eventItem.eventId} />
      })}
      <ReviewBest />
      <StarbucksBest categoryList={categoryList} />
    </main>
  )
}
