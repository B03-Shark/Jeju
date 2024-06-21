import styled from 'styled-components';
import { getUser } from '../Auth/auth';

function Modal({ setModalDisplay, children }) {
  const user = getUser();
  const handleModal = () => {
    setModalDisplay((prev) => !prev);
  };

  return (
    <StModal>
      <StModalHeader>
        <StUserBox>
          <StUserAvatar>🍊</StUserAvatar>
          <StUserName>{user.nickname}</StUserName>
        </StUserBox>
        <StExitBtn onClick={handleModal}>✕</StExitBtn>
      </StModalHeader>
      <div>{children}</div>
    </StModal>
  );
}

const StModal = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid #ccc;
  border-radius: 10px;
  padding: 1.5rem;
  background-color: white;
  width: 100%;
  height: 100%;
  max-width: 500px;
  max-height: 600px;
  z-index: 1000;
  animation: modal-show 1s;
  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
`;
const StModalHeader = styled.div`
  display: flex;
`;

const StUserBox = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  /* justify-content: space-between; */
  gap: 10px;
  margin-bottom: 10px;
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

const StUserName = styled.h2`
  width: 50%;
  margin: 0;
  text-align: start;
  font-size: 13px;
  font-weight: 700;
`;

const StExitBtn = styled.button`
  width: 20px;
  height: 20px;
  padding: 0;
  margin: 0;
  border: none;
  border-radius: 5px;
  color: black;
  background-color: #ffffff;
  text-align: center;
  font-weight: 700;
  font-size: 12px;
  &:hover {
    background-color: #ccc;
  }
  &:active {
    background-color: #ccc;
  }
`;

export default Modal;
