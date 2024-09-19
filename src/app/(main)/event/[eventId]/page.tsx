import Product from '@/components/cards/Product';
import SimpleHeader from '@/components/layouts/SimpleHeader';
import ProductList from '@/components/pages/main/product/ProductList';
import FitImage from '@/components/ui/FitImage';
import { eventThumbnailData } from '@/datas/main/eventDatas';
import { productsByEventDatas } from '@/datas/main/productDatas';
import React from 'react';

async function Page({ params }: { params: { eventId: number } }) {
  // todo: eventId에 따른 상품 목록 조회, event 정보(이미지, 이름 등) 조회
  const eventImageList = await eventThumbnailData.eventThumbnailList;
  const eventData = await productsByEventDatas[0];
  return (
    <>
      <SimpleHeader title={eventData.eventName} />
      {eventImageList.map((eventImage) => {
        return (
          <FitImage
            key={eventImage.id}
            src={eventImage.imageUrl}
            alt={eventImage.eventName}
          />
        );
      })}
      <ProductList productList={eventData.productList} />
      {/* <div className="flex flex-wrap p-4 justify-between">
        {eventData.productList.map((product) => {
          return (
            <Product key={product.productId} product={product} size="lg" />
          );
        })}
      </div> */}
    </>
  );
}

export default Page;
