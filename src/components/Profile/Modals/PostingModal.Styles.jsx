import styled from "styled-components";

export const PostingClickButton = styled.button`
  cursor: pointer;
  margin-left: auto;
`;
export const ModalCloseButton = styled.button`
  cursor: pointer;
  margin-left: auto;
`;
export const PostingModalDiv = styled.div`
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
export const ModalContentDiv = styled.div`
  background-color: #ffffff;
  width: 80%;
  height: 85%;
  border-radius: 10px;
  padding: 15px;
  > img {
    width: 60%;
    height: 100%;
    object-fit: contain;
  }
  > p {
    position: fixed;
    top: 8%;
    right: 25%;
  }
`;
