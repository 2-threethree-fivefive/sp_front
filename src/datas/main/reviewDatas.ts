import { reviewItemType, reviewSummaryType } from '@/types/main/reviewType';

export const reviewListData: reviewItemType[] = [
  {
    content:
      '리뷰 텍스트2줄이상은요약됨리뷰 텍스트2줄이상은요약됨리뷰 텍스트2줄이상은요약됨리뷰 텍스트2줄이상은요약됨리뷰 텍스트2줄이상은요약됨리뷰 텍스트2줄이상은요약됨',
    reviewUuid: '1',
    reviewScore: 4,
    productUuid: 'abcdefghij',
    regDate: '2024-08-10',
    modDate: '2024-08-10',
  },
  {
    content: '리뷰 텍스트..',
    reviewUuid: '2',
    reviewScore: 5,
    productUuid: 'abcdefghij',
    regDate: '2024-08-10',
    modDate: '2024-08-10',
  },
  {
    content: '리뷰 텍스트..',
    reviewUuid: '3',
    reviewScore: 3,
    productUuid: 'abcdefghij',
    regDate: '2024-08-10',
    modDate: '2024-08-10',
  },
  {
    content: '리뷰 텍스트..',
    reviewUuid: '4',
    reviewScore: 1,
    productUuid: 'abcdefghij',
    regDate: '2024-08-10',
    modDate: '2024-08-10',
  },
  {
    content: '리뷰 텍스트..',
    reviewUuid: '5',
    reviewScore: 2,
    productUuid: 'abcdefghij',
    regDate: '2024-08-10',
    modDate: '2024-08-10',
  },
];

export const reviewSummaryData: reviewSummaryType | null = {
  productUUID: 'abcdefghij',
  totalReviewScore: 4.5,
  totalReviewCount: 500,
  imagesCount: 20,
};
