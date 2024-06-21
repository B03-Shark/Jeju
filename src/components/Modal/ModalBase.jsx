import styled from 'styled-components';

function ModalBase({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <StModalBackground onClick={onClose}>
      <StModalContainer onClick={(e) => e.stopPropagation()}>
        {children}
        <StExitBtn onClick={onClose}>✖️</StExitBtn>
      </StModalContainer>
    </StModalBackground>
  );
}

export const StModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const StModalContainer = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 10px;
  max-width: 500px;
  width: 100%;
  position: relative;
`;

export const StExitBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
`;

export default ModalBase;
