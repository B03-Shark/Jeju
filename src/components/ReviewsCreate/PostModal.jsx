import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { uploadImage } from '../../api/image.api';
import { addReview } from '../../api/review.api';
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
        <StLabel htmlFor="image" imgSrc={imgSrc}>
          {!imgSrc && "이미지"}
        </StLabel>
        <StImageUpload type="file" id="image" accept="image/*" onChange={handleImageChange} />
        <StText>리뷰를 작성 해 보세요!</StText>
        <StReviewsContent type="text" value={content} onChange={(e) => setContent(e.target.value)}></StReviewsContent>
        <StBtnBox>
          <StReviewSaveBtn type="submit">작성</StReviewSaveBtn>
          <StReviewReturnBtn onClick={handleModal}>돌아가기</StReviewReturnBtn>
        </StBtnBox>
      </StForm>
    </StModal>
  );
}

const StModal = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: auto;
  margin-top: 5px;
`;

const StForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StImageUpload = styled.input`
  display: none;
`;

const StText = styled.p`
  text-align: center;
  margin-top: 30px;
`;

const StLabel = styled.label`
  display: flex;
  flex-direction: column;

  width: 400px;
  height: 300px;

  border: 2px solid #ccc;
  border-radius: 8px;

  cursor: pointer;

  text-align: center;
  justify-content: center;

  background-image: url(${(props) => props.imgSrc});
  background-size: cover;
  background-position: center;
`;

const StReviewsContent = styled.textarea`
  width: 379px;
  height: 400px;
  resize: none;
  height: 100px;
  border-radius: 8px;
  border: 2px solid #ccc;
  padding: 10px;
  &:focus {
    outline-color: #ffb752;
  }
`;

const StBtnBox = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin: 14px;
`;

const StReviewSaveBtn = styled.button`
  width: 100px;
  height: 30px;
  border: none;
  border-radius: 20px;
  font-size: 16px;
  background-color: #ffb752;
  color: white;
  &:hover {
    background-color: #fdae40;
  }
`;

const StReviewReturnBtn = styled.button`
  width: 100px;
  height: 30px;
  border: none;
  border-radius: 20px;
  font-size: 16px;
  background-color: #ffb752;
  color: white;
  &:hover {
    background-color: #fdae40;
  }
`;

export default PostModal;
