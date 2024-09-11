'use client';
import React from 'react';
import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';

function CloseHeader({ title }: { title: string }) {
  const router = useRouter();
  return (
    <header className="flex justify-center items-center relative w-full h-14">
      <h1>{title}</h1>
      <X
        className="absolute top-[14px] right-4"
        onClick={() => router.back()}
      />
    </header>
  );
}

export default CloseHeader;
