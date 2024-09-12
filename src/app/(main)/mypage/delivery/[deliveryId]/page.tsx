import {
  getDeliveryData,
  putDeliveryAction,
} from '@/actions/mypage/deleveryAction';
import UpdateDeliveryForm from '@/components/forms/UpdateDeliveryForm';
import CloseHeader from '@/components/layouts/CloseHeader';
import MyPageHeader from '@/components/layouts/MyPageHeader';
import { deliveryDataType } from '@/types/ResponseTypes';

async function Page() {
  const delivery: deliveryDataType =
    (await getDeliveryData()) as deliveryDataType;

  const handlePutDelivery = async (formData: FormData) => {
    'use server';
    const res = await putDeliveryAction(formData);
    console.log(res);
  };

  return (
    <>
      <CloseHeader />
      <MyPageHeader text="배송지 정보" />
      <UpdateDeliveryForm
        handlePutDelivery={handlePutDelivery}
        delivery={delivery}
      />
    </>
  );
}

export default Page;
