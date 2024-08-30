import { reviewBestType } from '@/types/main/reviewBestType'

export const reviewBestDatas: reviewBestType = {
  HttpStatus: 'ok',
  code: 200,
  message: 'success',
  data: [
    {
      reviewId: 1,
      reviewText:
        '스타벅스랑 ssg.com이랑 연계해서 사용하면 적립도 되고 충전도 편리, 별도 더 빨리 모여서 좋아요!   bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
      reviewImageUrl:
        'https://succ.ssgcdn.com/uphoto/202408/20240802102941_1223449928_0_1.jpg',
      product: {
        productId: 1,
        productName: 'SS 크림 데비 텀블러 414mldddddddddddd',
        productPrice: 10000,
        productThumbnailImage:
          'https://sitem.ssgcdn.com/83/64/61/item/1000291616483_i1_750.jpg',
        reviewScore: 4.5,
        reviewCount: 100,
      },
    },
    {
      reviewId: 2,
      reviewText:
        '스타벅스랑 ssg.com이랑 연계해서 사용하면 적립도 되고 충전도 편리, 별도 더 빨리 모여서 좋아요!',
      reviewImageUrl:
        'https://succ.ssgcdn.com/uphoto/202408/20240802102941_1223449928_0_1.jpg',

      product: {
        productId: 3,
        productName: 'SS 우디 하우스 텀블러 591ml',
        productPrice: 15000,
        productThumbnailImage:
          'https://sitem.ssgcdn.com/11/88/17/item/1000561178811_i1_500.jpg',
        reviewScore: 4.8,
        reviewCount: 200,
      },
    },
    {
      reviewId: 3,
      reviewText:
        '스타벅스랑 ssg.com이랑 연계해서 사용하면 적립도 되고 충전도 편리, 별도 더 빨리 모여서 좋아요!',
      reviewImageUrl:
        'https://succ.ssgcdn.com/uphoto/202408/20240802102941_1223449928_0_1.jpg',

      product: {
        productId: 3,
        productName: 'SS 우디 하우스 텀블러 591ml',
        productPrice: 15000,
        productThumbnailImage:
          'https://sitem.ssgcdn.com/11/88/17/item/1000561178811_i1_500.jpg',
        reviewScore: 4.8,
        reviewCount: 200,
      },
    },
  ],
}
