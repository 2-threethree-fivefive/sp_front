import React, { LegacyRef, useEffect, useRef } from 'react';
import CloseIcon from '/public/assets/images/icons/closeIcon.svg';
import { eventThumbnailData } from '@/datas/main/eventDatas';
import { eventThumbnailDataType } from '@/types/main/eventType';
import Image from 'next/image';
import Link from 'next/link';
import FitImage from '@/components/ui/FitImage';

function ShowAllEventList({
  eventBanner,
  handleShowAll,
  currentIndex,
}: {
  eventBanner: eventThumbnailDataType;
  handleShowAll: () => void;
  currentIndex: number;
}) {
  // 데이터
  const eventList = eventBanner.eventThumbnailList;

  // 최상단 위치 스크롤을 위함 (마진은 고려가 안됨 -> 나중에 수정 필요)
  // const linkRefs = useRef<(HTMLAnchorElement | null)[]>([])

  useEffect(() => {
    // 모달이 열릴 때 body의 스크롤을 비활성화
    document.body.style.overflow = 'hidden';

    // useRef 작업
    // linkRefs.current.forEach((ref, index) => {
    //   if (ref && index === currentIndex) {
    //     console.log(`Link ${index + 1}:`, ref) // 각 링크 요소에 대한 참조
    //     ref.scrollIntoView({ behavior: 'smooth' })
    //     return
    //   }
    // })

    // 컴포넌트가 언마운트될 때 스크롤을 복원
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [currentIndex]);

  return (
    <div className="flex flex-col fixed top-0 left-0 w-full h-full overflow-y-auto z-50">
      <header className="fixed w-full bg-white text-center font-bold py-4 items-center">
        <h1>전체보기</h1>
        <CloseIcon
          fill="black"
          onClick={handleShowAll}
          className="absolute top-3 right-2"
        />
      </header>
      <div className="mt-14">
        {eventList.map((event, index) => {
          return (
            <Link
              key={event.id}
              href={`/event/${event.id}`}
              // ref={(el) => {
              //   linkRefs.current[index] = el
              // }}
            >
              <FitImage src={event.imageUrl} alt={event.eventName} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default ShowAllEventList;
