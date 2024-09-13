import {
  mainCategoryDataType,
  topCategoryDataType,
} from '@/types/main/categoryType';
import Link from 'next/link';
import React from 'react';

function CategorySlider({
  categoryList,
}: {
  categoryList: topCategoryDataType[];
}) {
  return (
    <ul className="mt-16 flex justify-start overflow-x-auto gap-6 lg:gap-20 p-4 w-full bg-starbucks-green">
      {categoryList.map((category) => {
        return (
          <Link
            key={category.id}
            href={{
              pathname: '/category',
              query: { mainId: category.id },
            }}
          >
            <li>
              <span className="text-nowrap text-white">
                {category.topCategoryName}
              </span>
            </li>
          </Link>
        );
      })}
    </ul>
  );
}

export default CategorySlider;
