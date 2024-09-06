import { orderDeliveryResType } from '@/types/ResponseTypes';

export const orderDeliveryData: orderDeliveryResType = {
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
