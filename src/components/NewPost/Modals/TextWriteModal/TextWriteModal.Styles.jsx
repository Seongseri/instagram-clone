import styled from "styled-components";

export const ModalDiv = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: rgba(0, 0, 0, 0.5); */
`;
export const ModalContentDiv = styled.div`
  background-color: #ffffff;
  width: 40%;
  height: 75%;
  border-radius: 10px;
  padding: 13px 0;
  position: relative;
`;
export const ImagePreview = styled.img`
  width: 400px;
  height: 400px;
  object-fit: contain;
`;
export const TextArea = styled.textarea`
  position: fixed;
  width: 270px;
  height: 300px;
`;
export const SubmitButton = styled.button`
  position: fixed;
  top: 50%;
`;
