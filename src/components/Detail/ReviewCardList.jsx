import ReviewCard from './ReviewCard';
import { useQuery } from '@tanstack/react-query';
import { getReviewlist } from '../../api/review.api';
import styled from 'styled-components';

function ReviewCardList({ dataCd }) {
  const {
    data: reviewList,
    isPending,
    error
  } = useQuery({
    queryKey: ['reviewList', dataCd],
    queryFn: getReviewlist
  });
  console.log(reviewList);
  if (isPending) {
    return <div>리뷰 리스트를 로딩중입니다...</div>;
  }
  if (error) {
    return <div>리뷰 리스트를 불러오는데 실패했습니다.{error}</div>;
  }
  return (
    <StCardBox>
      {reviewList.map((review) => {
        return <ReviewCard key={review.id} review={review} />;
      })}
    </StCardBox>
  );
}

const StCardBox = styled.div`
  display: flex;
`;

export default ReviewCardList;
