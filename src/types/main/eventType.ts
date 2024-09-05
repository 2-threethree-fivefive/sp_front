export interface eventThumbnailDataType {
  eventTotalCnt: number;
  page: number;
  isLast: boolean;
  pageSize: number;
  eventThumbnailList: eventListDataType[];
}

export interface eventListDataType {
  id: number;
  imageUrl: string;
  eventName: string;
}
