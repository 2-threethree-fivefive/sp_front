import { mainCategoryDataType } from '@/types/main/categoryType'
import React, { Dispatch, SetStateAction } from 'react'

function CategoryFilterButton({
  category,
  idx,
  isSelected,
  setSelected,
}: {
  category: mainCategoryDataType
  idx: number
  isSelected: boolean
  setSelected: Dispatch<SetStateAction<number>>
}) {
  return (
    <li
      className={`text-nowrap px-3 py-2 border tracking-tighter ${isSelected && 'bg-black text-white'}`}
      onClick={() => setSelected(idx)}
    >
      <button>{category.mainCategoryName}</button>
    </li>
  )
}

export default CategoryFilterButton
