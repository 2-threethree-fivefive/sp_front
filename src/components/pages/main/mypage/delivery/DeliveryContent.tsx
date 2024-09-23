import {
  deleteDeliveryData,
  getDeliveryListData,
} from '@/actions/mypage/deleveryAction';
import { deliveryDataType } from '@/types/ResponseTypes';
import DeliveryCard from './DeliveryCard';
import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';

async function DeliveryContent() {
  const session = await getServerSession(options);
  const deliveries: deliveryDataType[] = (await getDeliveryListData(
    session?.user?.accessToken
  )) as deliveryDataType[];

  const baseDeliveries = deliveries.filter((delivery) => delivery.baseAddress);
  const otherDeliveries = deliveries.filter(
    (delivery) => !delivery.baseAddress
  );

  const sortedDeliveries = [...baseDeliveries, ...otherDeliveries];

  const handleDeleteDelivery = async (deliveryId: string) => {
    'use server';
    const res = await deleteDeliveryData(
      deliveryId,
      session?.user?.accessToken
    );
    console.log(res);
  };

  return (
    <ul className="mb-[60px]">
      {sortedDeliveries.map((delivery, index) => (
        <>
          <li key={delivery.deliveryId}>
            <DeliveryCard
              delivery={delivery}
              handleDeleteDelivery={handleDeleteDelivery}
            ></DeliveryCard>
          </li>
          {index < sortedDeliveries.length - 1 && <hr />}
        </>
      ))}
    </ul>
  );
}

export default DeliveryContent;
