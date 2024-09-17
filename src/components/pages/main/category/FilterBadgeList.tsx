import { getMiddleCategories } from '@/actions/category/categoryActions';
import { middleCategoryDataType } from '@/types/ResponseTypes';
import React from 'react';

async function FilterBadgeList({ mainId }: { mainId: number }) {
  const middleCategories: middleCategoryDataType[] =
    await getMiddleCategories(mainId);
  return (
    <ul className="flex gap-3 text-xs px-4 py-2 text-gray-500">
      {middleCategories.map((c) => {
        if (c.middleCategoryName !== '카테고리')
          return (
            <li
              key={c.id}
              className="border border-gray-300 px-2 py-1 rounded-2xl"
            >
              {c.middleCategoryName}
            </li>
          );
      })}
    </ul>
  );
}

export default FilterBadgeList;
