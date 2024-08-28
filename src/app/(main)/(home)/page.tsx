import { mainCategoryList } from '@/datas/categoryDatas'
import Link from 'next/link'
import React from 'react'
import MainBanner from './_components/MainBanner'
import { eventThumbnailData } from '@/datas/eventDatas'

export default async function Page() {
  // 메인 카테고리 리스트 데이터 fetch
  // const res = await fetch('/api/main_categories')
  const res = await mainCategoryList
  // const eventBanner = await fetch
  const eventBanner = await eventThumbnailData

  console.log(res)
  return (
    <main>
      <ul className="fixed top-0 left-0 pt-20 z-40 flex overflow-x-auto gap-4 p-4 -mt-1 max-w-full bg-starbucks-green">
        {res.map((category) => {
          return (
            <Link href={`/products/${category.id}`} key={category.id}>
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
    </main>
  )
}
