'use client';
import React, { useEffect, useState } from 'react';
import { Accordion } from '../ui/accordion';
import { getTopCategories } from '@/actions/initial/categoryActions';
import CategoryAccordion from '../pages/main/home/CategoryAccordion';
import { topCategoryDataType } from '@/types/ResponseTypes';

function HamburgerCategory({
  topCategories,
  isOpen,
  handleToggle,
}: {
  topCategories: topCategoryDataType[];
  isOpen: boolean;
  handleToggle: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div>
      <ul className="w-full fixed top-16 left-0 bg-white font-semibold text-[#666666] z-50 p-4">
        <Accordion type="single" collapsible>
          {topCategories.map((main) => {
            return (
              <div key={main.id}>
                <CategoryAccordion main={main} handleToggle={handleToggle} />
              </div>
            );
          })}
        </Accordion>
      </ul>
      <div
        onClick={handleToggle}
        className="w-full h-full z-40 fixed bg-black bg-opacity-50"
      ></div>
    </div>
  );
}

export default HamburgerCategory;
