export interface reviewItemType {
  content: string;
  reviewUuid: string;
  reviewScore: number;
  productUuid: string;
  regDate: string;
  modDate: string;
}

export interface reviewSummaryType {
  productUUID: string;
  totalReviewScore: number;
  totalReviewCount: number;
  imagesCount: number;
}
