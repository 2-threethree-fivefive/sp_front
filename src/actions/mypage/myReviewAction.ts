import { myReviewListData } from '@/datas/mypage/myReviewData';
import { myReviewListResType } from '@/types/ResponseTypes';

export async function getMyReviewListData() {
  'use server';
  const res: myReviewListResType = myReviewListData;
  if (res.HttpStatus === 'ok') {
    return res.data;
  }

  return null;
}
