import { getBottomCategories } from '@/actions/initial/categoryActions';
import { bottomCategoryDataType } from '@/types/ResponseTypes';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

function CategoryAccordionItem({
  middleCategoryId,
  topCategoryId,
  handleCategoryRouter,
}: {
  middleCategoryId: number;
  topCategoryId: number;
  handleCategoryRouter: (mainId: number, subId?: number) => void;
}) {
  const [bottomCategories, setBottomCategories] = useState<
    bottomCategoryDataType[]
  >([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getBottomCategories(middleCategoryId);
      setBottomCategories(data);
    };
    getData();
  }, []);

  return (
    <div className="flex flex-col gap-3 bg-[#F5F5F5] p-6 border-t text-[#444444]">
      <span
        className="pb-1 border-b-2 border-[#777777]"
        onClick={() => handleCategoryRouter(topCategoryId)}
      >
        전체보기 +
      </span>
      <ul className="flex flex-col gap-3 pt-2">
        {bottomCategories.map((sub) => {
          return (
            <li
              key={sub.id}
              onClick={() => handleCategoryRouter(topCategoryId, sub.id)}
            >
              {sub.bottomCategoryName}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CategoryAccordionItem;
