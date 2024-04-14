import styled from "styled-components";

export const ImageUploadModalDiv = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`;
export const ModalCloseButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
`;
export const ModalContentDiv = styled.div`
  background-color: #ffffff;
  width: 40%;
  height: 75%;
  border-radius: 10px;
  padding: 13px 0;
  position: relative;
`;
export const TopWrapDiv = styled.div`
  display: flex;
  border-bottom: 1px solid rgb(194, 188, 191);
  padding-bottom: 35px;
`;
export const TitleDiv = styled.div`
  position: fixed;
  left: 47%;
  font-size: 16px;
  font-weight: bold;
`;
export const NextButton = styled.button`
  position: fixed;
  right: 31%;
  font-size: 18px;
  border: none;
  background-color: transparent;
  color: #1854cd;
  font-weight: bold;
  cursor: pointer;
`;
export const SvgWrapperDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 250px;
`;
export const DescriptionDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0 20px;
  font-size: 20px;
`;

export const BtnWrapperDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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

// Git merge 후 ThemeProvider 정의되면
/* background-color: ${(props) => props.theme.blue};
  &:hover {
  ${(props) => props.theme.blueHover}
} */
