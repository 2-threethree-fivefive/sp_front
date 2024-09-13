import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { getTopCategories } from '@/actions/initial/categoryActions';
import CategoryAccordion from '../pages/main/home/CategoryAccordion';
import { topCategoryDataType } from '@/types/main/categoryType';

function HamburgerCategory({
  isOpen,
  handleClose,
}: {
  isOpen: boolean;
  handleClose: () => void;
}) {
  // const topCategories = getTopCategories();
  const [topCategories, setTopCategories] = useState<
    topCategoryDataType[] | null
  >(null);
  useEffect(() => {
    const getTop = async () => {
      const topCategories = await getTopCategories();
      setTopCategories(topCategories);
    };
    getTop();
  }, []);

  return (
    <div>
      <ul className="w-full fixed top-16 left-0 bg-white font-semibold text-[#666666] z-50 p-4">
        <Accordion type="single" collapsible>
          {topCategories?.map((main) => {
            return (
              <div key={main.id}>
                <CategoryAccordion main={main} handleClose={handleClose} />
              </div>
            );
          })}
        </Accordion>
      </ul>
      <div
        onClick={handleClose}
        className="w-full h-full z-40 fixed bg-black bg-opacity-50"
      ></div>
    </div>
  );
}

export default HamburgerCategory;
