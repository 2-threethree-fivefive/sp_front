import ServiceItem from './ServiceItem';

function ServiceList() {
  return (
    <>
      <div className="text-xl font-bold">서비스</div>
      <ul className="flex flex-col justify-around text-center p-2 my-4">
        <ServiceItem text="주문내역" link="myorder" />
        <ServiceItem text="선물함" link="giftbox" />
        <ServiceItem text="쿠폰" link="coupon" />
        <ServiceItem text="배송지 관리" link="delivery-management" />
        <ServiceItem text="입고 알림 내역" link="in-stock-noti" />
      </ul>
    </>
  );
}

export default ServiceList;
