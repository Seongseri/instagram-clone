import React from "react";
import LeftBar from "./LeftBar/LeftBar";
import RightBar from "./RightBar/RightBar";
import Feed from "./Feed/Feed";
import "./Main.css";

function Main() {
  return (
    <div>
      <LeftBar />
      <div className="mainBox">
        <Feed />
        <RightBar />
      </div>
    </div>
  );
}

export default Main;
