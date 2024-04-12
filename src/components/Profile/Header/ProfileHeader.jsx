import * as S from "./ProfileHeader.Styles";
import loopy from "../../../assets/Images/profile/loopy.png";
import { ReactComponent as Setting } from "../../../assets/Svgs/Setting.svg";
import ImageUploadModal from "../../NewPost/Modals/ImageUploadModal";
import { useState } from "react";

const ProfileHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <S.ProfileHeaderWrapperDiv>
        <S.ProfileIamgeWrapperButton>
          <S.ProfileImg src={loopy}></S.ProfileImg>
        </S.ProfileIamgeWrapperButton>
        <S.ProfileExpWrapperDiv>
          <S.TopLevelDiv>
            <S.UserNickNameButton>Loopy</S.UserNickNameButton>
            <S.ProfileEditButton>프로필 편집</S.ProfileEditButton>
            <S.ShowKeepedStoryButton>
              보관된 스토리 보기
            </S.ShowKeepedStoryButton>
            <Setting width="30px" height="30px" />
          </S.TopLevelDiv>
          <S.MidLevelDiv>
            <S.PostingNumDiv>
              게시물&nbsp;<p>20</p>
            </S.PostingNumDiv>
            <S.FollwerNumButton>
              팔로워&nbsp;<p>150</p>
            </S.FollwerNumButton>
            <S.FollwingNumButton>
              팔로우&nbsp;<p>100</p>
            </S.FollwingNumButton>
          </S.MidLevelDiv>
          <S.BottomLevelDiv>일상 피드 입니다.</S.BottomLevelDiv>
          <S.NewPostBtnWrapperDiv>
            <S.NewPostingButton onClick={openModal}>
              Post new things!
            </S.NewPostingButton>
          </S.NewPostBtnWrapperDiv>
          {isModalOpen && <ImageUploadModal setIsModalOpen={setIsModalOpen} />}
        </S.ProfileExpWrapperDiv>
      </S.ProfileHeaderWrapperDiv>
    </>
  );
};

export default ProfileHeader;
