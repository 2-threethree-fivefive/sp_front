'use client';
import React from 'react';
import BackIcon from '/public/assets/images/icons/backIcon.svg';
import { useRouter } from 'next/navigation';

function Page() {
  const router = useRouter();

  return (
    <div className="p-4 pt-8 bg-gray-100">
      <header className="relative font-bold text-center">
        좋아요
        <BackIcon
          className="absolute top-0 left-0"
          onClick={() => router.back()}
        />
      </header>
    </div>
  );
}

export default Page;
