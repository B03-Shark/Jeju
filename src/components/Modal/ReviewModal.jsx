import { useState } from 'react';
import styled from 'styled-components';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteReview, updateReview } from '../../api/review.api';

function ReviewModal({ reviewId, onClose }) {
  const queryClient = useQueryClient();

  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState('');

  const data = queryClient.getQueryData(['reviewList']).filter((review) => review.id === reviewId);

  const updateMutation = useMutation({
    mutationFn: updateReview,
    onSuccess: () => {
      queryClient.invalidateQueries(['review', reviewId]);
      setIsEditing(false);
    }
  });

  const deleteMutation = useMutation({
    mutationFn: deleteReview,
    onSuccess: () => {
      queryClient.invalidateQueries('reviews');
      onClose();
    }
  });

  return (
    <StModalBackground onClick={onClose}>
      <StModalContainer onClick={(e) => e.stopPropagation()}>
        <>
          <h2>Review Details</h2>
          {isEditing ? (
            <textarea value={editedContent} onChange={(e) => setEditedContent(e.target.value)} />
          ) : (
            <p>{data.content}</p>
          )}
          <button onClick={() => deleteMutation.mutate()}>삭제</button>
          {isEditing ? (
            <button onClick={() => updateMutation.mutate()}>저장</button>
          ) : (
            <button onClick={() => setIsEditing(true)}>수정</button>
          )}
          <button onClick={onClose}>닫기</button>
        </>
      </StModalContainer>
    </StModalBackground>
  );
}

export default ReviewModal;

const StModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StModalContainer = styled.div`
  background-color: white;
  padding: 24px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
`;
