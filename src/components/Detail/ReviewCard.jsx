import styled from 'styled-components';

function ReviewCard({ data }) {
  const { id, created_at, content, image_url, nickname } = data;

  return (
    <>
      <StCardDiv>
        <StUserBox>
          <StUserAvatar />
          <div>
            <StUserName>{nickname}</StUserName>
            <StUserDate>{created_at}</StUserDate>
          </div>
        </StUserBox>
        <StImgDiv>
          <img src={image_url} alt="" />{' '}
        </StImgDiv>
        <StTextDiv>
          <StTextP>{content}</StTextP>
          {/* <StFavorDiv>
            <StFavorSpan>{item.like}</StFavorSpan>
          </StFavorDiv> */}
        </StTextDiv>
      </StCardDiv>
    </>
  );
}

const StCardDiv = styled.div`
  width: 260px;
  height: 330px;
  border: 2px solid black;
  border-radius: 20px;
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

const StUserDate = styled.h3`
  width: 100%;
  margin: 0;
  text-align: end;
  font-size: 10px;
  font-weight: 700;
`;

const StH2 = styled.div`
  box-sizing: border-box;
  padding: 0 20px;
  text-align: center;
  margin-top: 5px;
  font-weight: 600;
  width: 100%;
  height: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const StNickNameDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 12px 30px 6px 20px;
`;

const StTextDiv = styled.div`
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 20px;
`;

const StTextP = styled.p`
  font-size: 15px;
  max-width: 180px;
  height: 17px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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
    border: 2px solid black;
  }
`;

export default ReviewCard;
