'use client';
import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function ReviewDetailModal({
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
        <h1>리뷰 상세</h1>
        <X className="absolute top-3 right-4" onClick={() => router.back()} />
      </header>
      {children}
    </dialog>
  );
}
