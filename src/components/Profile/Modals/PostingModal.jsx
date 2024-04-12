import { useRef } from "react";
import * as S from "./PostingModal.Styles";

const PostingModal = ({ modalOpen, setModalOpen, clickedImageUrl }) => {
  const modalBackground = useRef();

  return (
    <>
      {modalOpen && (
        <S.ModalCloseButton onClick={() => setModalOpen(false)}>
          X
        </S.ModalCloseButton>
      )}

      {modalOpen && (
        <S.PostingModalDiv
          ref={modalBackground}
          onClick={(e) => {
            if (e.target === modalBackground.current) {
              setModalOpen(false);
            }
          }}
        >
          <S.ModalContentDiv>
            <img
              src={clickedImageUrl}
              alt="Selected Posting"
              style={{ maxWidth: "100%" }}
            />
            <p>댓글, 좋아요</p>
          </S.ModalContentDiv>
        </S.PostingModalDiv>
      )}
    </>
  );
};

export default PostingModal;
