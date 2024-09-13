import { postDeliveryAction } from '@/actions/mypage/deleveryAction';
import AddDeliveryForm from '@/components/forms/AddDeliveryForm';
import CloseHeader from '@/components/layouts/CloseHeader';
import MyPageHeader from '@/components/layouts/MyPageHeader';

function Page() {
  const handlePostDelivery = async (formData: FormData) => {
    'use server';
    const res = await postDeliveryAction(formData);
    console.log(res);
  };

  return (
    <>
      <CloseHeader />
      <MyPageHeader text="배송지 정보" />
      <AddDeliveryForm handlePostDelivery={handlePostDelivery} />
    </>
  );
}

export default Page;
