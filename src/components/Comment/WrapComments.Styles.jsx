import styled from "styled-components";

export const UlBox = styled.ul`
  position: fixed;
  top: 15%;
  left: 60%;
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
`;

export const InputDiv = styled.div`
  position: fixed;
  bottom: 20%;
  left: 60%;
  > input {
    width: 400px;
    height: 50px;
  }
  > button {
    background-color: #5050e4;
    width: 50px;
    height: 50px;
  }
`;

export const CommentDiv = styled.div`
  width: 100px;
  height: 50px;
`;
