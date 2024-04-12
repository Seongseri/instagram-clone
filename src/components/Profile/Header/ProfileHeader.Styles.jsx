import styled from "styled-components";

// https://velog.io/@sorious77/React-Styled-Components-%EC%82%AC%EC%9A%A9-%EB%B0%A9%EB%B2%95-e9o4rnfq
// 중복되는 거 위에처럼 정리

export const ProfileHeaderWrapperDiv = styled.div`
  margin-top: 20px;
  margin-bottom: 50px;
  padding-top: 50px;
  padding-bottom: 60px;
  display: flex;
  justify-content: center;
`;
export const ProfileIamgeWrapperButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
export const ProfileImg = styled.img`
  height: 130px;
  width: 130px;
  margin-right: 50px;
  border-radius: 50%;
`;
export const ProfileExpWrapperDiv = styled.div`
  padding-top: 15px;
`;
export const TopLevelDiv = styled.div`
  display: flex;
  padding-bottom: 10px;
`;
export const UserNickNameButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  font-size: 18px;
`;
export const ProfileEditButton = styled.button`
  margin: 0 10px 0 20px;
  cursor: pointer;
  border: none;
  padding: 7px 15px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 10px;
`;
export const ShowKeepedStoryButton = styled.button`
  cursor: pointer;
  border: none;
  padding: 7px 15px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 10px;
  margin-right: 8px;
`;
export const MidLevelDiv = styled.div`
  display: flex;
  margin-top: 10px;
  padding-bottom: 10px;
`;
export const PostingNumDiv = styled.div`
  display: flex;
  margin-right: 20px;
  font-size: 16px;
  > p {
    font-weight: bold;
    margin: 0;
  }
`;
export const FollwerNumButton = styled.button`
  display: flex;
  margin-right: 20px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  font-size: 16px;
  > p {
    font-weight: bold;
    margin: 0;
    padding-top: 2px;
  }
`;
export const FollwingNumButton = styled.button`
  display: flex;
  cursor: pointer;
  border: none;
  background-color: transparent;
  font-size: 16px;
  > p {
    font-weight: bold;
    margin: 0;
    padding-top: 2px;
  }
`;
export const BottomLevelDiv = styled.div`
  margin-top: 10px;
`;

export const NewPostBtnWrapperDiv = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
`;
export const NewPostingButton = styled.button`
  border: none;
  font-size: 15px;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
`;
