import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

function SimpleHeader({ title }: { title: string }) {
  const router = useRouter();
  return (
    <div className="p-4 pt-8 bg-gray-100">
      <header className="relative font-bold text-center">
        {title}
        <ChevronLeft
          className="absolute top-0 left-0"
          onClick={() => router.back()}
        />
      </header>
    </div>
  );
}

export default SimpleHeader;
