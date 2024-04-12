import styled from "styled-components";

export const PriviewLabel = styled.label`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    border-color: #111;
  }
  background-color: ${(props) => (props.isActive ? "#efeef3" : "transparent")};
  border-color: ${(props) => (props.isActive ? "#111" : "inherit")};
`;

export const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* contain */
`;

export const FileInput = styled.input`
  display: none;
  &::file-selector-button {
    font-size: 14px;
    background: #fff;
    border: 1px solid #111;
    border-radius: 12px;
    padding: 4px 32px;
  }
`;
export const ImageIconWrapperDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const DescDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0 20px;
  font-size: 20px;
`;
export const DownloadBtn = styled.button`
  padding: 7px 15px;
  font-size: 14px;
  font-weight: bold;
  color: white;
  background-color: #0095f6;
  &:hover {
    background-color: #1877f2;
  }
  border: none;
  border-radius: 7px;
  cursor: pointer;
`;

// .file::file-selector-button {
//   font-size: 14px;
//   background: #fff;
//   border: 1px solid #111;
//   border-radius: 12px;
//   padding: 4px 32px;
//   cursor: pointer;
// }
