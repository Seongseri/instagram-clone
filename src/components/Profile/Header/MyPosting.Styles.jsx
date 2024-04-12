import styled from "styled-components";

export const MyPostingWrapperDiv = styled.div`
  border-top: 1px solid rgb(228, 228, 228);
  margin: 0 auto 80px;
  padding: 0;
  width: 50%;
`;
export const MyPostingSelectOptionDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 0;
  padding: 0;
`;
export const AllPostingTabButton = styled.button`
  cursor: pointer;
  padding: 15px 15px;
  margin: 0 5px;
  border: none;
  background-color: transparent;
  display: flex;
`;
export const SavedTabButton = styled.button`
  cursor: pointer;
  padding: 15px 15px;
  margin: 0 5px;
  border: none;
  background-color: transparent;
  display: flex;
`;
export const TaggedTabButton = styled.button`
  cursor: pointer;
  padding: 15px 15px;
  margin: 0 5px;
  border: none;
  background-color: transparent;
  display: flex;
`;
export const SelectedTabDiv = styled.div`
  font-size: 14px;
  margin-left: 5px;
`;
export const MyPosingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 10px;
`;
