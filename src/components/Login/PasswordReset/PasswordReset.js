import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Common/Footer/footer";
import { auth } from "../../../firebase/firebaseConfig";
import { sendPasswordResetEmail } from "firebase/auth";

import "../PasswordReset/PasswordReset.css";

const ResetPasswordForm = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [userData, setUserData] = useState(null); // 사용자 데이터 상태 관리를 위한 useState

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      alert("비밀번호 재설정 링크를 이메일로 보냈습니다.");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div id="wrapper">
      <div className="PasswordContainer">
        <div className="password-reset-box">
          <div className="logo">
            <img
              src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
              alt="instagram"
            />
          </div>
          <div className="info">
            <p className="info_1">로그인에 문제가 있나요?</p>
            <p className="info_2">
              이메일 주소, 전화번호 또는 사용자 이름을 입력하시면 계정에 다시
              액세스할 수 있는 링크를 보내드립니다.
            </p>
          </div>
          <form className="password-reset-form" onSubmit={handleSubmit}>
            <input
              name="email"
              type="text"
              placeholder="휴대폰 번호 또는 이메일 주소"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="formBtn">
              로그인 링크 보내기
            </button>
          </form>
          <a
            className="infoForgot"
            href="https://www.instagram.com/accounts/account_recovery/?username=&hl=ko"
            target="_blank"
          >
            비밀번호를 재설정할 수 없나요?
          </a>
          <div className="contour">
            <div className="line"></div>
            <div className="or">또는</div>
            <div className="line"></div>
          </div>
          <div className="create-user">
            <Link to="/signup">새 계정 만들기</Link>
          </div>
          <div className="back-login">
            <Link to="/">로그인으로 돌아가기</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ResetPasswordForm;
