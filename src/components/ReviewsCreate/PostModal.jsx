import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { uploadImage } from '../../api/image.api';
import { addReview } from '../../api/review.api';

function PostModal() {
  const [content, setContent] = useState('');
  const [imgSrc, setImgSrc] = useState('');
  const [imageFile, setImageFile] = useState(null);
  // 닉네임, 이미지, 리뷰 내용
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: addReview,
    onSuccess: () => {
      queryClient.invalidateQueries(['reviewList']);
      navigate('/');
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const path = await uploadImage(imageFile);
    const newReview = {
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
        <StReviewsCancel>돌아가기</StReviewsCancel>
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
