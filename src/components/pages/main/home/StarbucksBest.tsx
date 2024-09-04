'use client'

import { mainCategoryListData } from '@/datas/main/categoryDatas'
import { mainCategoryDataType } from '@/types/main/categoryType'
import React, { useEffect, useRef, useState } from 'react'
import ArrowDownIcon from '/public/assets/images/icons/arrowDownIcon.svg'
import { Drawer, DrawerTrigger } from '@/components/ui/drawer'
import CategoryDrawer from './CategoryDrawer'
import Product from '../../../cards/Product'
import { bestDatas } from '@/datas/main/bestDatas'
import {
  productBestDataTpe,
  productByEventType,
  productInfoType,
} from '@/types/main/productType'
import CategoryFilterButton from './CategoryFilterButton'

function StarbucksBest({
  categoryList,
}: {
  categoryList: mainCategoryDataType[]
}) {
  // todo: 무한 스크롤 (최대 50개까지)
  // 선택되는 카테고리 index
  const [selected, setSelected] = useState<number>(0)

  // 카테고리 선택 시 자동 스크롤
  const scrollRef = useRef<HTMLUListElement>(null)
  const handleClick = (idx: number) => {
    setSelected(idx)
    scrollRef.current?.scrollIntoView({ behavior: 'smooth', inline: 'center' })
  }

  // 조회되는 상품 목록들
  const [productList, setProductList] = useState<productInfoType[]>([])

  useEffect(() => {
    async function getProductListByCategory() {
      // let res = await fetch ('API_BASE_URL/product/best?대카테고리ID')
      let res = await bestDatas
      setProductList(res.productList)
      // let res: productInfoType[] = await bestDatas.productList
    }
    getProductListByCategory()
  }, [productList])

  return (
    <section className="w-full flex flex-col gap-1 pt-10">
      <h1 className="text-2xl font-bold px-4">스타벅스 베스트</h1>
      <p className="text-xs text-[#666666] px-4">
        스타벅스 인기 상품들을 만나보세요
      </p>
      <div className="w-full flex justify-around items-center">
        <ul className="w-[90%] flex overflow-x-auto gap-2 text-sm py-2 px-4">
          {categoryList.map((category, index) => {
            return (
              <CategoryFilterButton
                key={category.id}
                category={category}
                idx={index}
                isSelected={selected === index}
                selected={selected}
                setSelected={setSelected}
                scrollRef={scrollRef}
              />
            )
          })}
        </ul>
        <Drawer>
          <DrawerTrigger asChild>
            <button className="bg-white border p-1 mr-4 shadow-[0px_0px_10px_10px_rgba(255,255,255,0.95)]">
              <ArrowDownIcon />
            </button>
          </DrawerTrigger>
          <CategoryDrawer
            categoryList={categoryList}
            selected={selected}
            setSelected={setSelected}
          />
        </Drawer>
      </div>
      <div className="flex flex-wrap justify-between pl-4">
        {productList.map((product) => {
          return <Product key={product.productId} product={product} size="lg" />
        })}
      </div>
    </section>
  )
}

export default StarbucksBest
