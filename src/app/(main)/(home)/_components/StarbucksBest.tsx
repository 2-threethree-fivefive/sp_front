'use client'

import CategoryFilterButton from '@/components/buttons/CategoryFilterButton'
import { mainCategoryListData } from '@/datas/main/categoryDatas'
import { mainCategoryDataType } from '@/types/main/categoryType'
import React, { useState } from 'react'
import ArrowDownIcon from '/public/assets/images/icons/arrowDownIcon.svg'

function StarbucksBest({
  categoryList,
}: {
  categoryList: mainCategoryDataType[]
}) {
  // 무한 스크롤 (최대 50개까지)
  const [selected, setSelected] = useState<number>(0)

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
                setSelected={setSelected}
              />
            )
          })}
        </ul>
        <button className="bg-white border p-1 shadow-[0px_0px_10px_10px_rgba(255,255,255,0.95)]">
          <ArrowDownIcon />
        </button>
      </div>
    </section>
  )
}

export default StarbucksBest
