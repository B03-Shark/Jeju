import ReviewCard from './ReviewCard';
import { useQuery } from '@tanstack/react-query';
import { getReviewlist } from '../../api/review.api';

function ReviewCardList({ dataCd }) {
  const {
    data: reviewList,
    isPending,
    error
  } = useQuery({
    queryKey: ['reviewList', dataCd],
    queryFn: getReviewlist
  });

  if (isPending) {
    return <div>리뷰 리스트를 로딩중입니다...</div>;
  }
  if (error) {
    return <div>리뷰 리스트를 불러오는데 실패했습니다.{error}</div>;
  }
  return (
    <>
      {reviewList.map((e) => {
        return <ReviewCard key={e.id} data={e} />;
      })}
    </>
  );
}

export default ReviewCardList;
