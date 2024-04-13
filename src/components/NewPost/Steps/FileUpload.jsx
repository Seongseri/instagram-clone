import * as S from "./FileUpload.Styles";
import { ReactComponent as ImageVideo } from "../../../assets/Images/sidebarTab/ImageVideo.svg";
import { useRef, useState } from "react";

const FileUpload = ({ onImageSelected }) => {
  const [isActive, setActive] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const inputRef = useRef(null);

  const handleDragStart = () => setActive(true);
  const handleDragEnd = () => setActive(false);
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    readImage(file);
    setActive(false);
  };

  const readImage = (file) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      setImagePreview(event.target.result);
      onImageSelected(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleDownloadButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };

  return (
    <S.PriviewLabel
      isActive={isActive}
      onDragEnter={handleDragStart}
      onDragOver={handleDragOver}
      onDragLeave={handleDragEnd}
      onDrop={handleDrop}
    >
      {imagePreview ? (
        <S.PreviewImage src={imagePreview} alt="File preview" />
      ) : (
        <>
          <S.FileInput
            id="file-upload"
            ref={inputRef}
            type="file"
            style={{ display: "none" }}
          />
          <label htmlFor="file-upload">
            <S.ImageIconWrapperDiv>
              <ImageVideo />
            </S.ImageIconWrapperDiv>
            <S.DescDiv>사진과 동영상을 여기에 끌어다 놓으세요.</S.DescDiv>
          </label>
          <S.DownloadBtn onClick={handleDownloadButtonClick}>
            컴퓨터에서 선택
          </S.DownloadBtn>
        </>
      )}
    </S.PriviewLabel>
  );
};

export default FileUpload;
