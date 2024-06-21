import { useEffect, useState } from 'react';
import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query';
import { deleteReview, updateReview, getReview } from '../../api/review.api';
import ModalBase from './ModalBase';
import { getUser } from '../Auth/auth';
import styled from 'styled-components';

function ReviewModal({ review, onClose }) {
  const queryClient = useQueryClient();
  const [isEditing, setIsEditing] = useState(false);
  const [editedReview, setEditedReview] = useState({ content: '', image_url: '', nickname: '' });
  const { data, isLoading } = useQuery({
    queryKey: ['review', review.id],
    queryFn: getReview,
    onSuccess: (data) => {
      setEditedReview(data);
    }
  });
  useEffect(() => {
    if (isEditing && data) {
      setEditedReview(data);
    }
  }, [isEditing, data]);
  const updateMutation = useMutation({
    mutationFn: updateReview,
    onSuccess: () => {
      queryClient.setQueryData(['review', review.dataCd], (oldData) => {
        return { ...oldData, ...editedReview };
      });
      queryClient.invalidateQueries(['reviewList']);
      setIsEditing(false);
    },
    onError: (error) => {
      console.log(error);
    }
  });
  const deleteMutation = useMutation({
    mutationFn: deleteReview,
    onSuccess: () => {
      queryClient.invalidateQueries(['reviews']);
      onClose();
    }
  });
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setEditedReview((prev) => ({ ...prev, image_url: reader.result }));
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const handleContentChange = (e) => {
    setEditedReview((prev) => ({ ...prev, content: e.target.value }));
  };
  const user = getUser();

  const isShowEditing = review.user_id == user?.id;

  return (
    <ModalBase isOpen={true} onClose={onClose}>
      <StWrapper>
        <StUserAvatar>🍊</StUserAvatar>
        <StBox>
          <StUser>{review.nickname}</StUser>
          <StUser>{review.created_at}</StUser>
        </StBox>
      </StWrapper>

      {isLoading ? (
        <div>IsLoading...</div>
      ) : isEditing ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 16 }}>
          <StyledLabel htmlFor="image" imageUrl={editedReview?.image_url} />
          <input id="image" type="file" accept="image/*" style={{ display: 'none' }} onChange={handleImageChange} />
          <StyledTextarea value={editedReview.content} onChange={handleContentChange} />
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 16 }}>
          <StReviewImage htmlFor="image" imageUrl={data?.image_url} />
          <StyledTextSize>{data?.content}</StyledTextSize>
        </div>
      )}
      <ButtonContainer>
        {isShowEditing && !isEditing && (
          <StButton onClick={() => deleteMutation.mutate({ reviewId: review.id })}>삭제</StButton>
        )}
        {isEditing && (
          <StButton
            onClick={() =>
              updateMutation.mutate({
                reviewId: editedReview.id,
                content: editedReview.content,
                image_url: editedReview.image_url
              })
            }
          >
            저장
          </StButton>
        )}
        {isShowEditing && !isEditing && <StButton onClick={() => setIsEditing(true)}>수정</StButton>}
      </ButtonContainer>
    </ModalBase>
  );
}

const StyledLabel = styled.label`
  aspect-ratio: 16/12;
  border: 1px solid #ccc;
  border-radius: 8px;
  cursor: pointer;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.imageUrl});
`;

const StReviewImage = styled.img`
  aspect-ratio: 16/12;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
`;

const StyledTextarea = styled.textarea`
  font-size: 20px;
  border-radius: 10px;
  height: 100px;
`;

const StyledTextSize = styled.p`
  font-size: 25px;
`;

const StWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const StUserAvatar = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid white;
  border-radius: 17px;
  background-color: #ffedd2;
  text-align: center;
  align-content: center;
  font-size: 20px;
`;

const StBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StUser = styled.h2``;

const StButton = styled.button`
  background-color: #fcba5e;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;

export default ReviewModal;
