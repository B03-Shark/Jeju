import styled from 'styled-components';
import LikeBtn from './LikeBtn';

function ReviewCard({ review, onClick }) {
  const { id, created_at, content, image_url, nickname, likes, dataCd } = review;
  const dateY = created_at.slice(0, 10);
  return (
    <>
      <StCardDiv onClick={onClick}>
        <StUserBox>
          <StUserAvatar>🍊</StUserAvatar>
          <StInfo>
            <StUserName>{nickname}</StUserName>
            <StUserDate>{dateY}</StUserDate>
          </StInfo>
        </StUserBox>
        <StImgDiv>
          <img src={image_url} alt="" />{' '}
        </StImgDiv>
        <StTextDiv>
          <LikeBtn likes={likes} review_id={id} dataCd={dataCd} />
          <StTextP>{content}</StTextP>
        </StTextDiv>
      </StCardDiv>
    </>
  );
}

const StCardDiv = styled.div`
  min-width: 260px;
  height: 330px;
  border: 1px solid grey;
  border-radius: 20px;
  background-color: white;
`;

const StUserBox = styled.div`
  width: 90%;
  height: 20px;
  margin: 10px auto;
  display: flex;
  gap: 10px;
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

const StInfo = styled.div`
  margin: 2px 0;
  height: 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StUserName = styled.h2`
  width: 100%;
  margin: 0;
  text-align: start;
  font-size: 13px;
  font-weight: 700;
`;

const StUserDate = styled.h3`
  width: 100%;
  margin: 0;
  text-align: end;
  font-size: 10px;
  font-weight: 700;
`;

const StTextDiv = styled.div`
  font-size: 1.2rem;
  width: 230px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const StTextP = styled.p`
  display: block;
  margin: 0;
  font-size: 15px;
  max-width: 230px;
  height: 45px;
  overflow-y: hidden;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  white-space: wrap;
`;

const StImgDiv = styled.div`
  margin: 10px auto;
  align-content: center;
  img {
    display: block;
    margin: 20px auto;
    width: 100%;
    max-width: 230px;
    height: 150px;
    object-fit: scale-down;
    border: 1px solid black;
    border-radius: 5px;
  }
`;

export default ReviewCard;
