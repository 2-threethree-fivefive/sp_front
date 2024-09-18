'use client';

import {
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';

import React, { Dispatch, SetStateAction, useEffect } from 'react';
import CloseIcon from '/public/assets/images/icons/closeIcon.svg';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { topCategoryDataType } from '@/types/ResponseTypes';

function CategoryDrawer({
  categoryList,
  selected,
  setSelected,
  handleDrawerToggle,
}: {
  categoryList: topCategoryDataType[];
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
  handleDrawerToggle: () => void;
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
              onClick={() => {
                handleSelected(index);
                handleDrawerToggle();
              }}
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
                {category.topCategoryName}
              </label>
            </div>
          );
        })}
      </RadioGroup>
    </DrawerContent>
  );
}

export default CategoryDrawer;
