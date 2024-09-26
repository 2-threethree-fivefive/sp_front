import { commonResType, orderDeliveryDataType } from '@/types/ResponseTypes';

export const orderDeliveryData: commonResType<orderDeliveryDataType[]> = {
  HttpStatus: 'ok',
  isSuccess: true,
  code: 200,
  message: 'success',
  result: [
    {
      id: 'paid',
      value: 4,
    },
    {
      id: 'ready',
      value: 0,
    },
    {
      id: 'ing',
      value: 3,
    },
    {
      id: 'complete',
      value: 1,
    },
  ],
};
