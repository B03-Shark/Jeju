import styled from "styled-components";

function PostModal() {
    return(
        <StModal>
            <form action="">
               <StUploaddingImg type="file" />
                <StReviewsContent type="text">리뷰내용작성</StReviewsContent>
                <StReviewsSave>저장</StReviewsSave>
                <StReviewsCancel>취소</StReviewsCancel>
            </form>
        </StModal>
    )
}
const StModal = styled.div``;
const StUploaddingImg = styled.input``;
const StReviewsContent = styled.textarea``;
const StReviewsSave = styled.button``;
const StReviewsCancel = styled.button``;

export default PostModal;