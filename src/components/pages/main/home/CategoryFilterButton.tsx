import { topCategoryDataType } from '@/types/ResponseTypes';
import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react';

function CategoryFilterButton({
  category,
  idx,
  isSelected,
  selected,
  setSelected,
  scrollRef,
}: {
  category: topCategoryDataType;
  idx: number;
  isSelected: boolean;
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
  scrollRef: React.RefObject<HTMLUListElement> | null;
}) {
  // const handleClick = (idx: number) => {
  //   setSelected(idx)
  //   scrollRef?.current?.scrollIntoView({ inline: 'center', behavior: 'smooth' })
  // }
  // const scrollLiRef = useRef<HTMLLIElement>(null)
  // useEffect(() => {
  //   console.log(scrollLiRef.current)
  //   scrollLiRef.current?.scrollTo({
  //     behavior: 'smooth',
  //     left: window.innerWidth / 2,
  //   })
  // }, [selected])
  return (
    <li
      // ref={scrollLiRef}
      className={`text-nowrap px-3 py-2 border tracking-tighter ${isSelected && 'bg-black text-white'}`}
      onClick={() => setSelected(idx)}
    >
      <button>{category.topCategoryName}</button>
    </li>
  );
}

export default CategoryFilterButton;
