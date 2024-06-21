import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getReviewlist } from '../../api/review.api';
import styled from 'styled-components';
import ReviewCard from './ReviewCard';
import ReviewModal from '../Modal/ReviewModal';

function ReviewCardList({ dataCd }) {
  const [selectedReview, setSelectedReview] = useState(null);

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

  const handleItemClick = (review) => {
    setSelectedReview(review);
  };

  const handleCloseModal = () => {
    setSelectedReview(null);
  };

  return (
    <StCardBox>
      {reviewList.map((review) => {
        return <ReviewCard key={review.id} review={review} onClick={() => handleItemClick(review)} />;
      })}
      {selectedReview && <ReviewModal review={selectedReview} onClose={handleCloseModal} />}
    </StCardBox>
  );
}

const StCardBox = styled.div`
  max-width: 1090px;
  margin: 30px auto;
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  border-top: 1px solid gray;
  gap: 10px;
  /* justify-content: center; */
`;

export default ReviewCardList;
