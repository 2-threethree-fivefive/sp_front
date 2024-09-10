'use client';
import { ArrowLeft, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function ReviewAllModal({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  return (
    <dialog
      open
      className="fixed top-0 left-0 w-full h-full overflow-hidden flex flex-col items-center z-50"
    >
      <header className="flex justify-center items-center relative w-full h-14">
        <ArrowLeft onClick={() => router.back()} />
        <h1>리뷰 전체 보기</h1>
      </header>
      {children}
    </dialog>
  );
}
