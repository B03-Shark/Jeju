import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import styled from 'styled-components';
import { uploadImage } from '../../api/image.api';
import { addReview } from '../../api/review.api';
import { useParams } from 'react-router-dom';
import { getUser } from '../Auth/auth';

function PostModal({ handleModal }) {
  const [content, setContent] = useState('');
  const [imgSrc, setImgSrc] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const { id: dataCd } = useParams();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: addReview,
    onSuccess: () => {
      queryClient.invalidateQueries(['reviewList']);
      handleModal();
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = getUser();
    const path = await uploadImage(imageFile);
    const newReview = {
      nickname: user.nickname,
      user_id: user.id,
      dataCd,
      content,
      image_url: `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/images/${path}`
    };

    mutate(newReview);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    const fileUrl = URL.createObjectURL(file);
    setImgSrc(fileUrl);
  };

  return (
    <StModal>
      <StForm onSubmit={handleSubmit}>
        <StLabel htmlFor="image" imgSrc={imgSrc}></StLabel>
        <StImageUpload type="file" id="image" accept="image/*" onChange={handleImageChange} />
        <StReviewsContent type="text" value={content} onChange={(e) => setContent(e.target.value)}></StReviewsContent>
        <StReviewsSave type="submit">작성</StReviewsSave>
        <StReviewsCancel onClick={handleModal}>돌아가기</StReviewsCancel>
      </StForm>
    </StModal>
  );
}

const StModal = styled.div``;
const StForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const StImageUpload = styled.input`
  display: none;
`;
const StLabel = styled.label`
  aspect-ratio: 1/1;
  border: 1px solid #ccc;
  border-radius: 8px;
  cursor: pointer;
  background-image: url(${(props) => props.imgSrc});
  background-size: cover;
  background-position: center;
`;
const StReviewsContent = styled.textarea``;
const StReviewsSave = styled.button``;
const StReviewsCancel = styled.button``;

export default PostModal;
