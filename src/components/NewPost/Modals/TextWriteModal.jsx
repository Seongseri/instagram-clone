import { useState } from "react";
import * as S from "./TextWriteModal.Styles";

const TextWriteModal = ({ selectedImage, setIsModalOpen }) => {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    console.log(text);
    setIsModalOpen(false);
  };

  return (
    <S.ModalDiv>
      <S.ModalContentDiv>
        <S.ImagePreview src={selectedImage} alt="Uploaded" />
        <S.TextArea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="여기에 글을 작성해주세요..."
        />
        <S.SubmitButton onClick={handleSubmit}>게시</S.SubmitButton>
      </S.ModalContentDiv>
    </S.ModalDiv>
  );
};

export default TextWriteModal;
