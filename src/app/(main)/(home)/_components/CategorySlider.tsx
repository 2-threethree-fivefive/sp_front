import { mainCategoryDataType } from '@/types/main/categoryType'
import Link from 'next/link'
import React from 'react'

function CategorySlider({
  categoryList,
}: {
  categoryList: mainCategoryDataType[]
}) {
  return (
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
  )
}

export default CategorySlider
