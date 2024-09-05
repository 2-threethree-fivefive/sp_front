'use client';

import {
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
import { mainCategoryDataType } from '@/types/main/categoryType';
import React, { Dispatch, SetStateAction, useEffect } from 'react';
import CloseIcon from '/public/assets/images/icons/closeIcon.svg';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

function CategoryDrawer({
  categoryList,
  selected,
  setSelected,
}: {
  categoryList: mainCategoryDataType[];
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
}) {
  const handleSelected = (idx: number) => {
    setSelected(idx);
  };

  return (
    <DrawerContent className="pb-8">
      <DrawerHeader className="border-b border-gray-300 mb-2">
        <DrawerTitle className="text-sm">전체 카테고리</DrawerTitle>
        <DrawerDescription />
        <DrawerClose className="absolute right-4">
          <CloseIcon fill={'black'} />
        </DrawerClose>
      </DrawerHeader>
      <RadioGroup value={selected.toString()} className="p-4">
        {categoryList.map((category, index) => {
          return (
            <div
              key={category.id}
              className="space-x-4 mb-[10px] text-sm text-start"
              onClick={() => handleSelected(index)}
            >
              <RadioGroupItem
                value={index.toString()}
                className={
                  selected === index
                    ? 'border-red-400 text-red-500'
                    : 'border-gray-400'
                }
                id={index.toString()}
              />
              <label
                className={selected === index ? 'font-bold' : 'text-[#666666]'}
                htmlFor={index.toString()}
              >
                {category.mainCategoryName}
              </label>
            </div>
          );
        })}
      </RadioGroup>
    </DrawerContent>
  );
}

export default CategoryDrawer;
