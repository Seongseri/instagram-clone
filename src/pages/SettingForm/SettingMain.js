import React from "react";
import LeftBar from "../Main/LeftBar/LeftBar";
import "./SettingMain.css";
import SettingForm from "./SettingForm";

function Main() {
  return (
    <div>
      <LeftBar />
      <div className="mainBox">
        <SettingForm />
      </div>
    </div>
  );
}

export default Main;
