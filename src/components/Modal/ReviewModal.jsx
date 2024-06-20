import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { deleteReview, updateReview } from '../../api/review.api';
import ModalBase from './ModalBase';

function ReviewModal({ review, onClose }) {
  const queryClient = useQueryClient();

  const { id, content, created_at, image_url, user_id, nickname } = review;

  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(content);

  const updateMutation = useMutation({
    mutationFn: updateReview,
    onSuccess: () => {
      queryClient.setQueryData(['reviews', id], (oldData) => {
        return { ...oldData, content: editedContent };
      });
      queryClient.invalidateQueries(['reviews', id]);
      review.content = editedContent;
      setIsEditing(false);
    },
    onError: (error) => {
      console.log(error);
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
    <ModalBase isOpen={true} onClose={onClose}>
      <>
        <h2>Review Details</h2>
        {isEditing ? (
          <textarea value={editedContent} onChange={(e) => setEditedContent(e.target.value)} />
        ) : (
          <p>{review?.content}</p>
        )}
        <button onClick={() => deleteMutation.mutate({ id })}>삭제</button>
        {isEditing ? (
          <button onClick={() => updateMutation.mutate({ id, content: editedContent })}>저장</button>
        ) : (
          <button onClick={() => setIsEditing(true)}>수정</button>
        )}
      </>
    </ModalBase>
  );
}

export default ReviewModal;
