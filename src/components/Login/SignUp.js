import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebaseConfig";
import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import "../../styles/UI/signup.css";
import Footer from "../Footer";
import microsofrBtn from "../../assets/Images/login/microsofr_btn.png";
import goolgleBtn from "../../assets/Images/login/goolgle_btn.png";

const SignUp = ({
  onChangeInput,
  handleGoogleSignup,
  handleSignUp,
  email,
  username,
  displayName,
  password,
  error,
}) => {
  const { message } = error || {};
  const [userData, setUserData] = useState(null);
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  function handleFacebookLogin() {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        setUserData(result.user); // 사용자 데이터 설정
      })
      .catch((error) => {
        console.error("로그인 실패:", error);
      });
  }

  return (
    <div id="signupWrapper">
      <div className="signContainer">
        <div className="sign-up-box">
          <div className="logo">
            <img
              src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
              alt="instagram"
            />
          </div>
          <div className="notice">
            친구들의 사진과 동영상을 보려면 가입하세요.
          </div>
          <button onClick={handleFacebookLogin} className="facebookLogin">
            <span>Facebook으로 로그인</span>
          </button>
          <div className="contour">
            <div className="line"></div>
            <div className="or">또는</div>
            <div className="line"></div>
          </div>
          <form className="sign-up-form" onSubmit={handleSignUp}>
            <input
              name="email"
              type="text"
              placeholder="휴대폰 번호 또는 이메일 주소"
              value={email}
              onChange={onChangeInput}
              required
            />
            <input
              name="username"
              type="text"
              placeholder="성명"
              value={username}
              onChange={onChangeInput}
            />
            <input
              name="displayName"
              type="text"
              placeholder="사용자 이름"
              value={displayName}
              onChange={onChangeInput}
            />

            <div className="pw-container">
              <input
                name="password"
                type={passwordShown ? "text" : "password"}
                placeholder="비밀번호"
                value={password}
                onChange={onChangeInput}
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="togglePassword"
              >
                {passwordShown ? "숨기기" : "비밀번호 표시"}
              </button>
            </div>

            {message && <div className="error-box">{message}</div>}
            <button
              type="submit"
              className="form-btn"
              disabled={!password?.length}
            >
              가입
            </button>
          </form>
          <div className="notice2">
            저희 서비스를 이용하는 사람이 회원님의 연락처 정보를 Instagram에
            업로드했을 수도 있습니다.&nbsp;
            <a
              className="infoForgot"
              href="https://www.facebook.com/help/instagram/261704639352628"
              target="_blank"
            >
              더 알아보기
            </a>
          </div>
        </div>
        <div className="login-wrapper">
          <div className="login">
            <div className="question-box">
              <div className="text">계정이 있으신가요?</div>
              <Link to="/login" className="sign-up-link">
                로그인
              </Link>
            </div>
          </div>
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
        <Footer />
      </div>
    </div>
  );
};

export default SignUp;
