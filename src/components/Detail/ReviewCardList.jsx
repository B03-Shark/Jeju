import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getReviewlist } from '../../api/review.api';

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
    <>
      {reviewList.map((review) => {
        return <ReviewCard key={review.id} data={review} onClick={() => handleItemClick(review)} />;
      })}

      {selectedReview && <ReviewModal review={selectedReview} onClose={handleCloseModal} />}
    </>
  );
}

export default ReviewCardList;
