import { useState } from "react";
import * as S from "./Posting.Styles";
import PostingModal from "../Modals/PostingModal";

const Posting = ({ postingData }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [clickecImageUrl, setClickedImageUrl] = useState("");

  return (
    <>
      <S.PostingDiv>
        {postingData.postingImages.map((image) => (
          <S.PostingImg
            key={image.imgId}
            src={image.imgUrl}
            alt="Posting"
            style={{ width: "100%", height: "100%" }}
            onClick={() => {
              setModalOpen(true);
              setClickedImageUrl(image.imgUrl);
            }}
          />
        ))}
      </S.PostingDiv>
      <PostingModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        clickedImageUrl={clickecImageUrl}
      />
    </>
  );
};

export default Posting;
