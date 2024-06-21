import styled from 'styled-components';

export const StSideImg = styled.img`
  height: 100vh;
  @media (max-width: 1300px) {
    opacity: 0;
  }
  transition: all 0.2s;
`;

export const StDiv = styled.div`
  background-color: white;
  margin: 0 auto;
  right: 0;
  width: 60vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  @media (max-width: 1300px) {
    width: 100%;
  }
  transition: all 0.2s;
`;

export const StContainer = styled.div`
  position: fixed;
  top: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    font-weight: bold;
    font-size: 22px;
    margin-bottom: 50px;
  }
`;

export const StInputGroup = styled.div`
  margin-bottom: 15px;
  width: 550px;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

export const StButton = styled.button`
  border: none;
  border-radius: 8px;
  padding: 8px 100px;
  background-color: #ffb752;
  color: white;
  font-size: 16px;
  font-weight: bold;
  margin: 18px;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const StPWrapper = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  p {
    color: #bbbbbbf0;
    font-size: 15px;
    font-weight: 600;
  }

  p:hover {
    cursor: pointer;
    color: #ffb752;
  }
`;
