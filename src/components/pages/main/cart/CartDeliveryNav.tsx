import { deliveryDataType } from '@/types/ResponseTypes';
import Link from 'next/link';

function CartDeliveryNav({ delivery }: { delivery: deliveryDataType }) {
  return (
    <div className="flex flex-col gap-y-1 text-md px-5 py-3 bg-gray-100 mt-1">
      <p className="flex justify-between font-extrabold">
        <span>
          {delivery.name}
          {delivery.nickname && <>{`(${delivery.nickname})`}</>}
          <span className="text-xs text-green-500 bg-green-100 p-1 ml-2">
            기본
          </span>
        </span>
        <span className="flex gap-x-5 text-sm mr-3 text-amber-700">
          배송지 변경
        </span>
      </p>
      <p className="font-normal">
        {`(${delivery.postNumber}) ${delivery.basicAddress}`} <br />
        {delivery.detailAddress}
      </p>
    </div>
  );
}

export default CartDeliveryNav;
