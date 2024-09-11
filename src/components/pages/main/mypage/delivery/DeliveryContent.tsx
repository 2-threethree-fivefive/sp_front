import { getDeliveryData } from '@/actions/mypage/deleveryAction';
import { deliveryDataType } from '@/types/ResponseTypes';
import DeliveryCard from './DeliveryCard';

async function DeliveryContent() {
  const deliveries: deliveryDataType[] =
    (await getDeliveryData()) as deliveryDataType[];

  const baseDeliveries = deliveries.filter((delivery) => delivery.isBase);
  const otherDeliveries = deliveries.filter((delivery) => !delivery.isBase);

  const sortedDeliveries = [...baseDeliveries, ...otherDeliveries];

  return (
    <ul className="mb-[60px]">
      {sortedDeliveries.map((delivery, index) => (
        <>
          <li key={delivery.deliveryId}>
            <DeliveryCard delivery={delivery}></DeliveryCard>
          </li>
          {index < sortedDeliveries.length - 1 && <hr />}
        </>
      ))}
    </ul>
  );
}

export default DeliveryContent;
