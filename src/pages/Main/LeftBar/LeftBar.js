import React, { useState } from "react";
import "./LeftBar.css";

function LeftBar() {
  const [menu, setMenu] = useState(false);

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
            src={process.env.PUBLIC_URL + "/assets/instagram.png"}
          />
        </div>
        <div className="leftBar-main">
          <div className="leftBar-main-tab">
            <img
              src={process.env.PUBLIC_URL + "/assets/home.png"}
              className="leftBar-icon"
            />
            <span className="leftBar-txt-home">홈</span>
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
            <span className="leftBar-txt">탐색 탭</span>
          </div>
          <div className="leftBar-main-tab">
            <img
              src={process.env.PUBLIC_URL + "/assets/send.png"}
              className="leftBar-icon"
            />
            <span className="leftBar-txt-direct">메시지</span>
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
        </div>
        <div className="leftBar-footer">
          <img
            src={process.env.PUBLIC_URL + "/assets/threads.png"}
            className="leftBar-icon"
          />
          <img
            src={process.env.PUBLIC_URL + "/assets/menu.png"}
            className="leftBar-icon"
            onClick={() => {
              setMenu(!menu);
            }}
          />
          {menu == true ? (
            <div>
              <div className="settings">
                <img
                  src={process.env.PUBLIC_URL + "/assets/settings.png"}
                  className="settings-icon"
                />
                <span className="settings-txt">설정</span>
                {/* 설정 누르면 설정페이지로 이동 */}
              </div>
              {/* <div
                className="settings-txt"
                onClick={() => {
                  alert("계정을 전환하시겠습니까?");
                }}
              >
                계정 전환
              </div> */}
              <div
                className="settings-txt"
                onClick={() => {
                  if (window.confirm("로그아웃 하시겠습니까?") == true) {
                    alert("로그아웃 되었습니다.");
                    //로그인 페이지로 이동
                  } else {
                    return;
                  }
                }}
              >
                로그아웃
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default LeftBar;
