import React, { useState } from "react";
import "./LeftBar.css";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import loopy from "../../../assets/Images/profile/loopy.png";
import Bookmark from "../../../assets/Images/sidebarTab/Bookmark.svg";
import Activity from "../../../assets/Images/sidebarTab/activity.svg";
import SwitchMode from "../../../assets/Images/sidebarTab/SwitchMode.svg";
import ReportProblem from "../../../assets/Images/sidebarTab/reportProblem.svg";
import Setting from "../../../assets/Images/sidebarTab/Setting.svg";
import InstagramLogo from "../../../assets/Images/sidebar/instagram_logo.png";

function LeftBar() {
  const [menu, setMenu] = useState(false);
  let navigate = useNavigate();

  return (
    <>
      <div className="leftBarBox">
        <div className="leftBar-header">
          <img
            className="leftBar-header-icon"
            src={process.env.PUBLIC_URL + "/assets/logo.png"}
          />
          <img
            className="leftBar-logo"
            src={InstagramLogo}
            onClick={() => {
              navigate("/main");
            }}
          />
        </div>
        <div className="leftBar-main">
          <div className="leftBar-main-tab">
            <img
              src={process.env.PUBLIC_URL + "/assets/home.png"}
              className="leftBar-icon"
            />
            <span
              className="leftBar-txt-home"
              onClick={() => {
                navigate("/main");
              }}
            >
              홈
            </span>
          </div>
          <div className="leftBar-main-tab">
            <img
              src={process.env.PUBLIC_URL + "/assets/search.png"}
              className="leftBar-icon"
            />
            <span className="leftBar-txt-search">검색</span>
          </div>
          <div className="leftBar-main-tab">
            <img
              src={process.env.PUBLIC_URL + "/assets/compass.png"}
              className="leftBar-icon"
            />
            <span className="leftBar-txt-compass">탐색 탭</span>
          </div>
          <div className="leftBar-main-tab">
            <img
              src={process.env.PUBLIC_URL + "/assets/send.png"}
              className="leftBar-icon"
            />
            <span
              className="leftBar-txt-direct"
              onClick={() => {
                navigate("/dm");
              }}
            >
              메시지
            </span>
          </div>
          <div className="leftBar-main-tab">
            <img
              src={process.env.PUBLIC_URL + "/assets/heart.png"}
              className="leftBar-icon"
            />
            <span className="leftBar-txt-like">알림</span>
          </div>
          <div className="leftBar-main-tab">
            <img
              src={process.env.PUBLIC_URL + "/assets/plus.png"}
              className="leftBar-icon"
            />
            <span className="leftBar-txt-plus">만들기</span>
          </div>
          <div className="leftBar-main-tab">
            <img src={loopy} className="leftBar-profileIcon" />
            <span
              className="leftBar-txt-profile"
              onClick={() => {
                navigate("/profile");
              }}
            >
              내 프로필
            </span>
          </div>
        </div>
        <div className="leftBar-footer">
          <div className="leftBar-main-tab">
            <img
              src={process.env.PUBLIC_URL + "/assets/menu.png"}
              className="leftBar-icon"
              onClick={() => {
                setMenu(!menu);
              }}
            />
            <span
              className="leftBar-txt-more"
              onClick={() => {
                setMenu(!menu);
              }}
            >
              더 보기
            </span>
          </div>
          {menu && (
            <div
              className={`settings-menu ${menu ? "" : "settings-menu-hidden"}`}
            >
              <div className="settings">
                <img src={Setting} className="settings-icon" />
                <span
                  className="settings-txt"
                  onClick={() => {
                    navigate("/accounts"); // 설정 페이지로 이동
                  }}
                >
                  설정
                </span>
              </div>

              <div className="leftBar-show-tab">
                <img
                  src={Activity}
                  className="leftBar-icon"
                  onClick={() => {
                    setMenu(!menu);
                  }}
                />
                <span className="hiddenBar-txt">내 활동</span>
              </div>
              <div className="leftBar-show-tab">
                <img
                  src={Bookmark}
                  className="leftBar-icon"
                  onClick={() => {
                    setMenu(!menu);
                  }}
                />
                <span className="hiddenBar-txt">저장됨</span>
              </div>
              <div className="leftBar-show-tab">
                <img
                  src={SwitchMode}
                  className="leftBar-icon"
                  onClick={() => {
                    setMenu(!menu);
                  }}
                />
                <span className="hiddenBar-txt">모드 전환</span>
              </div>
              <div className="leftBar-show-tab">
                <img
                  src={process.env.PUBLIC_URL + ReportProblem}
                  className="leftBar-icon"
                  onClick={() => {
                    setMenu(!menu);
                  }}
                />
                <span className="hiddenBar-txt">문제 신고</span>
              </div>
              <div className="leftBar-show-tab">
                <img
                  src={process.env.PUBLIC_URL + "/assets/threads.png"}
                  className="leftBar-icon"
                  onClick={() => {
                    setMenu(!menu);
                  }}
                />
                <span className="hiddenBar-txt">threads</span>
              </div>
              <div className="tab-txt">계정 전환</div>
              <div
                className="tab-txt"
                onClick={() => {
                  if (window.confirm("로그아웃 하시겠습니까?")) {
                    alert("로그아웃 되었습니다.");
                    navigate("/"); // 로그인 페이지 경로로 이동
                  } else {
                    return;
                  }
                }}
              >
                로그아웃
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default LeftBar;
