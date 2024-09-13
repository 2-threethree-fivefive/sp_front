import { getMiddleCategories } from '@/actions/initial/categoryActions';
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  bottomCategoryDataType,
  middleCategoryDataType,
  topCategoryDataType,
} from '@/types/ResponseTypes';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import CategoryAccordionItem from './CategoryAccordionItem';
import { useRouter } from 'next/navigation';

async function CategoryAccordion({
  main,
  handleToggle,
}: {
  main: topCategoryDataType;
  handleToggle: () => void;
}) {
  const [middleCategories, setmiddleCategories] = useState<
    middleCategoryDataType[]
  >([]);
  useEffect(() => {
    const getData = async () => {
      const data: middleCategoryDataType[] = (
        await getMiddleCategories(main.id)
      ).filter((category) => category.middleCategoryName === '카테고리');
      setmiddleCategories(data);
    };
    getData();
  }, []);

  const router = useRouter();

  const handleCategoryRouter = (mainId: number, subId?: number) => {
    handleToggle();
    if (subId) {
      router.push(`/category?mainId=${mainId}&subId=${subId}`);
    }
    router.push(`/category?mainId=${mainId}`);
  };

  return (
    <div>
      {middleCategories.length === 0 ? (
        <li
          className="py-4 border-b"
          onClick={() => handleCategoryRouter(main.id)}
        >
          {main.topCategoryName}
        </li>
      ) : (
        <AccordionItem value={main.topCategoryName}>
          <AccordionTrigger>
            <li className="font-semibold">{main.topCategoryName}</li>
          </AccordionTrigger>
          <AccordionContent>
            {middleCategories.map((middle) => {
              return (
                <CategoryAccordionItem
                  key={middle.id}
                  middleCategoryId={middle.id}
                  topCategoryId={main.id}
                  handleCategoryRouter={handleCategoryRouter}
                />
              );
            })}
          </AccordionContent>
        </AccordionItem>
      )}
    </div>
  );
}

export default CategoryAccordion;
