import React, { Dispatch, SetStateAction } from 'react';
import { Dialog, DialogContent } from '../ui/dialog';
import { categoryDetailData } from '@/datas/main/categoryDatas';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

function HamburgerCategory({
  isOpen,
  handleClose,
}: {
  isOpen: boolean;
  handleClose: () => void;
}) {
  // fetch : 대중소분류 카테고리 모두 들고오기
  // const categoryList = await fetch('/api/main_categories')
  const categoryList = categoryDetailData;

  return (
    <div>
      <ul className="w-full fixed top-16 left-0 bg-white font-semibold text-[#666666] z-50 p-4">
        <Accordion type="single" collapsible>
          {categoryList.map((main) => {
            return (
              <div key={main.mainCategoryId}>
                {main.subCategoryList.length === 0 ? (
                  <Link
                    href={{
                      pathname: '/products',
                      query: { mainId: main.mainCategoryId },
                    }}
                    onClick={handleClose}
                  >
                    <li className="py-4 border-b">{main.mainCategoryName}</li>
                  </Link>
                ) : (
                  <AccordionItem value={main.mainCategoryName}>
                    <AccordionTrigger>
                      <li>{main.mainCategoryName}</li>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col gap-3 bg-[#F5F5F5] p-6 border-t text-[#444444]">
                        <Link
                          href={{
                            pathname: '/category',
                            query: { mainId: main.mainCategoryId },
                          }}
                          onClick={handleClose}
                        >
                          <span className="pb-1 border-b-2 border-[#777777]">
                            전체보기 +
                          </span>
                        </Link>
                        <ul className="flex flex-col gap-3 pt-2">
                          {main.subCategoryList.map((sub) => {
                            return (
                              <Link
                                key={sub.subCategoryId}
                                href={{
                                  pathname: '/category',
                                  query: {
                                    mainId: main.mainCategoryId,
                                    subId: sub.subCategoryId,
                                  },
                                }}
                                onClick={handleClose}
                              >
                                <li>{sub.subCategoryName}</li>
                              </Link>
                            );
                          })}
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                )}
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
