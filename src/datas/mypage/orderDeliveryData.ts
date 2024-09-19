import { commonResType, orderDeliveryDataType } from '@/types/ResponseTypes';

export const orderDeliveryData: commonResType<orderDeliveryDataType[]> = {
  HttpStatus: 'ok',
  code: 200,
  message: 'success',
  data: [
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
