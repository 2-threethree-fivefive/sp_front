import { deliveryDataType } from '@/types/ResponseTypes';
import Link from 'next/link';

function DeliveryCard({ delivery }: { delivery: deliveryDataType }) {
  return (
    <div className="flex flex-col gap-y-1 text-md px-5 py-3">
      <p className="flex justify-between font-extrabold">
        <span>
          {delivery.name}
          {delivery.nickname && <>{`(${delivery.nickname})`}</>}
          {delivery.isBase && (
            <span className="text-xs text-green-500 bg-green-100 p-1 ml-2">
              기본
            </span>
          )}
        </span>
        <span className="flex gap-x-5 text-sm text-slate-500 font-medium">
          <Link href={`delivery/${delivery.deliveryId}`} className="">
            수정
          </Link>
          {!delivery.isBase && (
            <>
              |<span>삭제</span>
            </>
          )}
        </span>
      </p>
      <p className="font-semibold">
        {`(${delivery.postNumber}) ${delivery.basicAddress}`} <br />
        {delivery.detailAddress}
      </p>
      <p className="text-sm text-slate-500">
        {delivery.phone1}
        {delivery.phone2 && ` | ${delivery.phone2}`}
      </p>
      {delivery.message && (
        <p className="text-md text-slate-500 mt-1">{delivery.message}</p>
      )}
    </div>
  );
}

export default DeliveryCard;
