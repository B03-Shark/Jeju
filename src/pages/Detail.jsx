import { useState } from 'react';
import styled from 'styled-components';
import Modal from '../components/Detail/Modal';
import ReviewModal from '../components/Modal/ReviewModal';

function Detail() {
  const [modalDisplay, setModalDisplay] = useState(false);

  const handleModal = () => {
    setModalDisplay((prev) => !prev);
  };

  const [selectedReview, setSelectedReview] = useState(null);

  const handleItemClick = (reviewId) => {
    setSelectedReview(reviewId);
  };

  const handleCloseModal = () => {
    setSelectedReview(null);
  };

  return (
    <div>
      {modalDisplay ? <StModalWrapper onClick={handleModal} /> : ''}
      {modalDisplay ? <Modal setModalDisplay={setModalDisplay} /> : ''}
      <button onClick={handleModal}>모달 버튼</button>

      <br></br>
      <br></br>
      <br></br>

      <button onClick={() => handleItemClick('4b91e35e-6fd4-4eee-bd82-21020f9257bd')}>희수 모달 열기</button>
      {selectedReview && <ReviewModal reviewId={selectedReview} onClose={handleCloseModal} />}
    </div>
  );
}

const StModalWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  z-index: 100;
  animation: modal-bg-show 1s;
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
export default Detail;
