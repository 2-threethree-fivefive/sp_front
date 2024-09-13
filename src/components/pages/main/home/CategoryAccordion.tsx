import { getSubCategories } from '@/actions/initial/categoryActions';
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  middleCategoryDataType,
  topCategoryDataType,
} from '@/types/main/categoryType';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

async function CategoryAccordion({
  main,
  handleClose,
}: {
  main: topCategoryDataType;
  handleClose: () => void;
}) {
  const [middleCategories, setMiddleCategories] = useState<
    middleCategoryDataType[] | null
  >(null);

  useEffect(() => {
    const getMiddle = async () => {
      const topCategories = await getSubCategories(main.id);
      setMiddleCategories(topCategories);
    };
    getMiddle();
  }, []);

  return (
    <div>
      {middleCategories && middleCategories[0].bottomCategories.length === 0 ? (
        <Link
          href={{
            pathname: '/products',
            query: { mainId: main.id },
          }}
          onClick={handleClose}
        >
          <li className="py-4 border-b">{main.topCategoryName}</li>
        </Link>
      ) : (
        <AccordionItem value={main.topCategoryName}>
          <AccordionTrigger>
            <li className="font-semibold">{main.topCategoryName}</li>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-3 bg-[#F5F5F5] p-6 border-t text-[#444444]">
              <Link
                href={{
                  pathname: '/category',
                  query: { mainId: main.id },
                }}
                onClick={handleClose}
              >
                <span className="pb-1 border-b-2 border-[#777777]">
                  전체보기 +
                </span>
              </Link>
              <ul className="flex flex-col gap-3 pt-2">
                {middleCategories &&
                  middleCategories[0].bottomCategories.map((sub) => {
                    return (
                      <Link
                        key={sub.id}
                        href={{
                          pathname: '/category',
                          query: {
                            mainId: main.id,
                            subId: sub.id,
                          },
                        }}
                        onClick={handleClose}
                      >
                        <li>{sub.bottomCategoryName}</li>
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
}

export default CategoryAccordion;
