'use client';
import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { Dispatch, SetStateAction, useState } from 'react';

function ReviewFiltering({
  filtering,
  setFiltering,
}: {
  filtering: string;
  setFiltering: Dispatch<SetStateAction<string>>;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClick = (val: string) => {
    setFiltering(val);
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex flex-col text-base text-black">
      <div className="flex gap-2 w-fit" onClick={() => setIsOpen(!isOpen)}>
        <span>{filtering}</span>
        {isOpen ? <ChevronUp width={14} /> : <ChevronDown width={14} />}
      </div>
      <div
        className={`inline-block w-32 z-20 mt-2 bg-white shadow-lg shadow-slate-500 ${!isOpen && 'hidden'}`}
      >
        <ul>
          <li
            className={`border-b border-gray-300 px-4 py-3 ${filtering === '전체' && 'bg-gray-700 text-white'}`}
            onClick={() => handleClick('전체')}
          >
            전체
          </li>
          <li
            className={`border-b border-gray-300 px-4 py-3 ${filtering === '포토' && 'bg-gray-700 text-white'}`}
            onClick={() => handleClick('포토')}
          >
            포토
          </li>
          <li
            className={`border-b border-gray-300 px-4 py-3 ${filtering === '동영상' && 'bg-gray-700 text-white'}`}
            onClick={() => handleClick('동영상')}
          >
            동영상
          </li>
          <li
            className={`border-b border-gray-300 px-4 py-3 ${filtering === '선물' && 'bg-gray-700 text-white'}`}
            onClick={() => handleClick('선물')}
          >
            선물
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ReviewFiltering;
