'use client';

import { deliveryDataType } from '@/types/ResponseTypes';
import { Button } from '../ui/button';
import { Layout } from '../ui/layout';
import DeliveryField from './DeliveryField';

function UpdateDeliveryForm({
  delivery,
  handlePutDelivery,
}: {
  delivery: deliveryDataType;
  handlePutDelivery: (formData: FormData) => void;
}) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(console.log(Object.fromEntries(formData)));
    handlePutDelivery(formData);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md rounded-lg mx-auto text-black px-4"
    >
      <DeliveryField delivery={delivery} />
      <Layout className="z-20" variant="submitDiv">
        <Button size={'submit'} type="submit">
          수정하기
        </Button>
      </Layout>
    </form>
  );
}

export default UpdateDeliveryForm;
