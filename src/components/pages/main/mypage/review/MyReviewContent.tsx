import { getMyReviewListData } from '@/actions/mypage/myReviewAction';
import { myReviewDataType } from '@/types/ResponseTypes';
import MyReviewCard from './MyReviewCard';

async function MyReviewContent() {
  const myReviewList: myReviewDataType[] =
    (await getMyReviewListData()) as myReviewDataType[];

  return (
    <ul className="px-6">
      {myReviewList.map((myReview, index) => (
        <>
          <li key={myReview.reviewUuid}>
            <MyReviewCard myReview={myReview} />
          </li>
          {index < myReviewList.length - 1 && <hr />}
        </>
      ))}
    </ul>
  );
}

export default MyReviewContent;
