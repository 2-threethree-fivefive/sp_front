import { ArrowUpDown } from 'lucide-react';
import React, { Dispatch, SetStateAction, useState } from 'react';

function ReviewOrdering({
  ordering,
  setOrdering,
}: {
  ordering: string;
  setOrdering: Dispatch<SetStateAction<string>>;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = (ordering: string) => {
    setOrdering(ordering);
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex flex-col items-end text-base text-black">
      <div
        className="flex gap-2 w-fit min-w-fit"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{ordering}</span>
        <ArrowUpDown width={10} />
      </div>
      <div
        className={`inline-block w-32 z-20 mt-2 bg-white shadow-lg shadow-slate-500 ${!isOpen && 'hidden'}`}
      >
        <ul>
          <li
            className={`border-b border-gray-300 px-4 py-3 ${ordering === '추천순' && 'bg-gray-700 text-white'}`}
            onClick={() => handleClick('추천순')}
          >
            추천순
          </li>
          <li
            className={`border-b border-gray-300 px-4 py-3 ${ordering === '최신순' && 'bg-gray-700 text-white'}`}
            onClick={() => handleClick('최신순')}
          >
            최신순
          </li>
          <li
            className={`border-b border-gray-300 px-4 py-3 ${ordering === '평점높은순' && 'bg-gray-700 text-white'}`}
            onClick={() => handleClick('평점높은순')}
          >
            평점높은순
          </li>
          <li
            className={`border-b border-gray-300 px-4 py-3 ${ordering === '평점낮은순' && 'bg-gray-700 text-white'}`}
            onClick={() => handleClick('평점낮은순')}
          >
            평점낮은순
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ReviewOrdering;
