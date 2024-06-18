import { useState } from 'react';
import styled from 'styled-components';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import supabase from '../../../supabase/supabase';

function ReviewModal({ reviewId, onClose }) {
  const queryClient = useQueryClient();

  // sample
  reviewId = '4b91e35e-6fd4-4eee-bd82-21020f9257bd';

  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState('');

  const getReview = async () => {
    const { data, error } = await supabase.from('reviews').select().eq('id', reviewId).single();
    if (error) throw new Error(error.message);
    return data;
  };

  const updateReview = async () => {
    const { error } = await supabase.from('reviews').update({ content: editedContent }).eq('id', reviewId);
    if (error) throw new Error(error.message);
  };

  const deleteReview = async () => {
    const { error } = await supabase.from('reviews').delete().eq('id', reviewId);
    if (error) throw new Error(error.message);
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ['review', reviewId],
    queryFn: getReview,
    onSuccess: (data) => {
      setEditedContent(data.content);
    }
  });

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
        {isLoading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <div>Error: {error.message}</div>
        ) : (
          <>
            <h2>Review Details</h2>
            {isEditing ? (
              <textarea value={editedContent} onChange={(e) => setEditedContent(e.target.value)} />
            ) : (
              <p>{data.content}</p>
            )}
            <div>
              <button onClick={() => deleteMutation.mutate()}>삭제</button>
              {isEditing ? (
                <button onClick={() => updateMutation.mutate()}>저장</button>
              ) : (
                <button onClick={() => setIsEditing(true)}>수정</button>
              )}
            </div>
            <button onClick={onClose}>닫기</button>
          </>
        )}
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
