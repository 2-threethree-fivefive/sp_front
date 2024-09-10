'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import BackIcon from '/public/assets/images/icons/backIcon.svg';
import { productInfoType } from '@/types/main/productType';
import { productsByEventDatas } from '@/datas/main/productDatas';
import { bestDatas } from '@/datas/main/bestDatas';
import SimpleHeader from '@/components/layouts/SimpleHeader';

function Page() {
  const router = useRouter();
  // const [recentProductList, setRecentProductList] = useState<productInfoType[]>(
  //   []
  // )
  // useEffect(() => {
  //   async function getRecentProductList() {
  //     // let res = await fetch ()
  //     let res = await bestDatas
  //     setRecentProductList(res.productList)
  //   }
  //   getRecentProductList()
  // }, [])

  return <SimpleHeader title="최근 본 상품" />;
}

export default Page;
