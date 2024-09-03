'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import BackIcon from '/public/assets/images/icons/backIcon.svg'
import { productInfoType } from '@/types/main/productType'
import { productsByEventDatas } from '@/datas/main/productDatas'
import { bestDatas } from '@/datas/main/bestDatas'

function Page() {
  const router = useRouter()
  // const [recentProductList, setRecentProductList] = useState<productInfoType[]>(
  //   []
  // )
  // useEffect(() => {
  //   async function getRecentProductList() {
  //     // let res = await fetch ()
  //     let res = await bestDatas
  //     setRecentProductList(res.productList)
  //   }
  //   getRecentProductList()
  // }, [])

  return (
    <div className="p-4 pt-8 bg-gray-100">
      <header className="relative font-bold text-center">
        최근 본 상품
        <BackIcon
          className="absolute top-0 left-0"
          onClick={() => router.back()}
        />
      </header>
    </div>
  )
}

export default Page
