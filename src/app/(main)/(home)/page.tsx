import React from 'react';
import { eventThumbnailData } from '@/datas/main/eventDatas';
import { productsByEventDatas } from '@/datas/main/productDatas';
import MainBanner from '@/components/pages/main/home/MainBanner';
import TrendTags from '@/components/pages/main/home/TrendTags';
import ReviewBest from '@/components/pages/main/home/ReviewBest';
import StarbucksBest from '@/components/pages/main/home/StarbucksBest';
import ProductsByEventList from '@/components/pages/main/home/ProductsByEventList';
import { getTopCategories } from '@/actions/initial/categoryActions';
import { topCategoryDataType } from '@/types/ResponseTypes';

export default async function Page() {
  // 메인 카테고리 리스트 데이터 fetch
  const topCategories: topCategoryDataType[] = await getTopCategories();

  // const eventBanner = await fetch
  const eventBanner = await eventThumbnailData;

  // fetch
  // const res = await fetch('/api/products_by_event')
  const eventList = await productsByEventDatas;

  return (
    <main>
      <MainBanner eventBanner={eventBanner} />
      <TrendTags />
      <ProductsByEventList />
      <ReviewBest />
      <StarbucksBest categoryList={topCategories} />
    </main>
  );
}
