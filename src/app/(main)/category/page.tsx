'use client';

import { useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';

export default function Page() {
  const params = useSearchParams();
  console.log(params.get('mainId'), params.get('subId'));
  // fetch data
  useEffect(() => {
    async function getProductListByCategory() {
      // const res = await fetch(
      //   `/api/products_by_category?mainId=${params.get('mainId')}&subId=${params.get('subId')}`
      // )
      // const data = await res.json()
      // console.log(data)
      console.log('fetch data');
    }
    getProductListByCategory();
  }, [params]);

  return (
    <main>
      <div className="bg-yellow-500 mt-16">{}</div>
    </main>
  );
}
