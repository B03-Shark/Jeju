import { useState } from 'react';
import styled from 'styled-components';
import Modal from '../components/Detail/Modal';

function Detail() {
  const [modalDisplay, setModalDisplay] = useState(false);
  const handleModal = () => {
    setModalDisplay((prev) => !prev);
  };

  return (
    <div>
      {modalDisplay ? <StModalWrapper onClick={handleModal} /> : ''}
      {modalDisplay ? <Modal setModalDisplay={setModalDisplay} /> : ''}
      <button onClick={handleModal}>모달 버튼</button>
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
