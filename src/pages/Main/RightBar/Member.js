import React, { useState } from "react";
import userData from "./UserData.js";

function Member() {
  let [data] = useState(userData);
  return (
    <div className="memberBox">
      <div>
        {data.map((a, i) => {
          return <User data={data[i]} i={i}></User>;
        })}
      </div>
    </div>
  );
}

function User(props) {
  const [btnTxt, setBtnTxt] = useState("팔로우");
  const [btnClick, setBtnClick] = useState(false);
  const handleFollow = () => {
    if (btnClick) {
      setBtnTxt("팔로잉");
      setBtnClick(false);
    } else {
      setBtnTxt("팔로우");
      setBtnClick(true);
    }
  };
  return (
    <div className="eachMember">
      <div className="eachMember-info">
        <img className="user-img" src={props.data.userImg} />
        <span>
          <p className="eachId">{props.data.userId}</p>
          <p className="eachTxt">{props.data.userTxt}</p>
        </span>
      </div>
      <button
        className="eachMember-btn"
        onClick={() => {
          handleFollow();
        }}
      >
        {btnTxt}
      </button>
    </div>
  );
}

export default Member;
