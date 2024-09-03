'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

export default function AuthServiceHeader() {
  const router = useRouter();
  const pathName = usePathname();

  const [state, setState] = useState<string>('');

  useEffect(() => {
    if (pathName.includes('/found')) {
      setState('push');
    } else {
      setState('back');
    }
  });

  return (
    <header className="flex flex-col justify-center w-full h-[40px]">
      <nav>
        <ul className="flex">
          {state === 'back' ? (
            <li onClick={() => router.back()}>
              <Image
                alt="arrow-back-button"
                src="/assets/images/icons/arrowLeftIcon.svg"
                width={40}
                height={40}
                className="px-2"
                priority
              />
            </li>
          ) : (
            <li onClick={() => router.push('/sign-in')}>
              <Image
                alt="close-button"
                src="/assets/images/icons/closeIcon.svg"
                width={40}
                height={40}
                className="px-2"
                priority
              />
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
