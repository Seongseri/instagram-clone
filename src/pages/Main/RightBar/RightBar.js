import React from "react";
import Member from "./Member";
import OtherInfo from "./OtherInfo";
import "./RightBar.css";

function RightBar() {
  return (
    <div className="rightBarBox">
      <div className="userBox"></div>
      <div className="txtBox">
        <span className="txt-1">회원님을 위한 추천</span>
        <span className="txt-2">모두보기</span>
      </div>
      <div className="member-list">
        <Member />
      </div>
      <OtherInfo />
    </div>
  );
}

export default RightBar;
