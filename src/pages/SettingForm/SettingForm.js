import React from "react";
import "./SettingForm.css";
import EditProfile from "../../assets/Images/SettingAccount/EditProfile.svg";
import Notification from "../../assets/Images/SettingAccount/Notification.svg";
import AccountsDisabledUpdates from "../../assets/Images/SettingAccount/AccountsDisabledUpdates.svg";
import NumberLikesShares from "../../assets/Images/SettingAccount/NumberLikesShares.svg";
import AccountDisclosureScope from "../../assets/Images/SettingAccount/AccountDisclosureScope.svg";
import CloseFriend from "../../assets/Images/SettingAccount/CloseFriend.svg";
import BlockedAccount from "../../assets/Images/SettingAccount/BlockedAccount.svg";
import HideStoriesLiveBroadcasts from "../../assets/Images/SettingAccount/HideStoriesLiveBroadcasts.svg";
import MessageStoryReply from "../../assets/Images/SettingAccount/MessageStoryReply.svg";
import TagsMentions from "../../assets/Images/SettingAccount/TagsMentions.svg";
import Comments from "../../assets/Images/SettingAccount/Comments.svg";
import SharingRemixing from "../../assets/Images/SettingAccount/SharingRemixing.svg";
import RestrictedAccount from "../../assets/Images/SettingAccount/RestrictedAccount.svg";
import HiddeLanguage from "../../assets/Images/SettingAccount/HiddeLanguage.svg";
import ArchiveDownload from "../../assets/Images/SettingAccount/ArchiveDownload.svg";
import Language from "../../assets/Images/SettingAccount/Language.svg";
import WebsitePermissions from "../../assets/Images/SettingAccount/WebsitePermissions.svg";
import SupervisionManagement from "../../assets/Images/SettingAccount/SupervisionManagement.svg";
import AccountTypesTools from "../../assets/Images/SettingAccount/AccountTypesTools.svg";
import Help from "../../assets/Images/SettingAccount/Help.svg";
import AccountStatus from "../../assets/Images/SettingAccount/AccountStatus.svg";

const settingsOptions = [
  {
    title: "내 Instagram 사용 방식",
    contents: [
      {
        text: "프로필 편집",
        image: EditProfile,
      },
      { text: "알림", image: Notification },
    ],
  },
  {
    title: "내가 볼 수 있는 내용",
    contents: [
      {
        text: "업데이트를 보지 않도록 설정한 계정",
        image: AccountsDisabledUpdates,
      },
      { text: "좋아요 수 및 공유 수", image: NumberLikesShares },
    ],
  },
  {
    title: "내 콘텐츠를 볼 수 있는 사람",
    contents: [
      {
        text: "계정 공개 범위",
        image: AccountDisclosureScope,
      },
      { text: "친한 친구", image: CloseFriend },
      { text: "차단된 계정", image: BlockedAccount },
      {
        text: "스토리 및 라이브 방송 숨기기",
        image: HideStoriesLiveBroadcasts,
      },
    ],
  },
  {
    title: "다른 사람이 나와 소통할 수 있는 방법",
    contents: [
      { text: "메시지 및 스토리 답장", image: MessageStoryReply },
      { text: "태그 및 언급", image: TagsMentions },
      { text: "댓글", image: Comments },
      { text: "공유 및 리믹스", image: SharingRemixing },
      { text: "제한된 계정", image: RestrictedAccount },
      { text: "숨겨진 단어", image: HiddeLanguage },
    ],
  },
  {
    title: "내 앱 및 미디어",
    contents: [
      { text: "보관 및 다운로드", image: ArchiveDownload },
      { text: "언어", image: Language },
      { text: "웹사이트 권한", image: WebsitePermissions },
    ],
  },
  {
    title: "가족",
    contents: [{ text: "관리 감독", image: SupervisionManagement }],
  },
  {
    title: "프로페셔널",
    contents: [{ text: "계정 유형 및 도구", image: AccountTypesTools }],
  },
  {
    title: "더 많은 정보 및 지원",
    contents: [
      { text: "도움말", image: Help },
      { text: "계정 상태", image: AccountStatus },
    ],
  },
];

function SettingForm() {
  return (
    <div className="settingsContainer">
      <div className="middleBar">
        <div className="settingsHeader">설정</div>
        {settingsOptions.map((option) => (
          <div key={option.title} className="option">
            <div className="optionTitle">{option.title}</div>
            <ul className="optionContents">
              {option.contents.map((content, index) => (
                <li key={index}>
                  <img src={content.image} alt={content.text} /> {content.text}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SettingForm;
