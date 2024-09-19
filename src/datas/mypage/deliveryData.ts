import { commonResType, deliveryDataType } from '@/types/ResponseTypes';

export const deliveryData: commonResType<deliveryDataType> = {
  HttpStatus: 'ok',
  code: 200,
  message: 'success',
  data: {
    deliveryId: '4',
    nickname: '우리집',
    name: '홍길동',
    postNumber: '46324',
    basicAddress: '부산 광역시 금정구 중앙대로 1920번길 10-8',
    detailAddress: '남영빌라 501호',
    phone1: '01041231234',
    phone2: '01098742314',
    message: '부재 시 문 앞에 놓아주세요.',
    isBase: true,
  },
};
