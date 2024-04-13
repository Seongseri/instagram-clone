import { useEffect, useRef, useState } from "react";
import * as S from "../ImageUploadModal/ImageUploadModal.Styles";
import FileUpload from "../../Steps/FileUpload";
import TextWriteModal from "../TextWriteModal/TextWriteModal";

const ImageUploadModal = ({ setIsModalOpen }) => {
  const modalBackground = useRef();
  const [selectedImage, setSelectedImage] = useState(null);
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleBackgroundClick = (e) => {
    if (e.target === modalBackground.current) {
      setIsModalOpen(false);
    }
  };

  const handleNextButtonClick = () => {
    if (selectedImage) {
      setIsPreviewModalOpen(true);
    }
  };

  return (
    <>
      <S.ImageUploadModalDiv
        ref={modalBackground}
        onClick={handleBackgroundClick}
      >
        <S.ModalCloseButton onClick={() => setIsModalOpen(false)}>
          X
        </S.ModalCloseButton>
        <S.ModalContentDiv>
          <S.TopWrapDiv>
            <S.TitleDiv>새 게시물 만들기</S.TitleDiv>
            <S.NextButton onClick={handleNextButtonClick}>다음</S.NextButton>
          </S.TopWrapDiv>
          <FileUpload onImageSelected={setSelectedImage} />
        </S.ModalContentDiv>
      </S.ImageUploadModalDiv>
      {isPreviewModalOpen && (
        <TextWriteModal
          selectedImage={selectedImage}
          setIsModalOpen={setIsPreviewModalOpen}
        />
      )}
    </>
  );
};

export default ImageUploadModal;
