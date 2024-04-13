import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../../firebase/firebaseConfig";
import {
  getAuth,
  signInWithPopup,
  FacebookAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";

import Footer from "../../Footer";
import ImageSlider from "../ImageSlider/ImageSlider";

import "../../styles/UI/login.css";
import InstagramLogo from "../../assets/Images/login/logo_text.png";
import microsofrBtn from "../../assets/Images/login/microsofr_btn.png";
import FacebookLogo from "../../assets/Facebook-Logo.jpg";
import goolgleBtn from "../../assets/Images/login/goolgle_btn.png";

const LoginForm = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [userData, setUserData] = useState(null); // 사용자 데이터 상태 관리를 위한 useState
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("로그인 시도:", user, password);

    // Firebase Authentication으로 로그인 시도
    const auth = getAuth();
    signInWithEmailAndPassword(auth, user, password)
      .then((userCredential) => {
        // 로그인 성공
        const user = userCredential.user;
        setUserData(user);
        setErrorMsg("");
        navigate("/main");
      })
      .catch((error) => {
        // 로그인 실패
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMsg("잘못 입력하셨습니다.");
      });
  };

  function handleFacebookLogin() {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        setUserData(result.user);
      })
      .catch((error) => {
        console.error("로그인 실패:", error);
      });
  }

  // 비밀번호 표시/숨김 전환 함수
  const togglePasswordVisibility = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  return (
    <div id="wrapper">
      <div className="container">
        <ImageSlider />
        <div className="form-data">
          <section>
            <div className="logo">
              <img src={InstagramLogo} />
            </div>
            <input
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={(e) => setUser(e.target.value)}
            />
            <div class="password-container">
              <input
                type={passwordType}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호"
                class="password-input"
              />
              <button
                onClick={togglePasswordVisibility}
                class="toggle-password"
              >
                {passwordType === "password" ? "비밀번호 표시" : "숨기기"}
              </button>
            </div>
            {errorMsg && <p className="error-msg">{errorMsg}</p>}
            <button className="form-btn" onClick={handleSubmit}>
              로그인
            </button>
            <span className="has-separator">또는</span>
            <button onClick={handleFacebookLogin} className="facebook-login">
              <span>
                <img src={FacebookLogo} alt="Facebook Logo" />
              </span>
              Facebook으로 로그인
            </button>
            <Link to="/forgot-password" className="password-reset">
              비밀번호를 잊으셨나요?
            </Link>
          </section>
          <div className="sign-up">
            계정이 없으신가요? <Link to="/signup">가입하기</Link>
          </div>
          <div className="get-the-app">
            <span>앱을 다운로드하세요.</span>
            <div className="badge">
              <a
                href="https://play.google.com/store/apps/details?id=com.instagram.android"
                target="_blank"
              >
                <img src={goolgleBtn} alt="android App" />
              </a>
              <a
                href="ms-windows-store://pdp/?productid=9nblggh5l9xt&referrer=appbadge&source=www.instagram.com&mode=mini&pos=1911%2C0%2C977%2C1080&hl=ko"
                target="_blank"
              >
                <img src={microsofrBtn} alt="microsoft app" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginForm;
