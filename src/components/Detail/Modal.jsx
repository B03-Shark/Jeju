import styled from 'styled-components';

function Modal({ setModalDisplay, children }) {
  const handleModal = () => {
    setModalDisplay((prev) => !prev);
  };

  return (
    <StModal>
        <StUserBox>
          <StUserAvatar src={''} />
          <StUserName>{'닉네임'}</StUserName>
        </StUserBox>
        <div>{children}</div>
      <StExitBtn onClick={handleModal}>X</StExitBtn>
    </StModal>
  );
}

const StModal = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid black;
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

const StUserBox = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const StUserAvatar = styled.div`
  width: 30px;
  height: 30px;
  border: 2px solid black;
  border-radius: 17px;
  background-color: gray;
`;

const StUserName = styled.h2`
  width: 100%;
  margin: 0;
  text-align: start;
  font-size: 13px;
  font-weight: 700;
`;

const StExitBtn = styled.button`
  width: 15px;
  height: 15px;
  padding: 0;
  margin: 0;
  border: 1px solid black;
  text-align: center;
  font-weight: 700;
  font-size: 12px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
  &:active {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export default Modal;
