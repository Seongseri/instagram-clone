import React, { useEffect, useState } from "react";
import '../../../styles/UI/login.css';
import Instagram from '../../../assets/Images/login/Instagram.png';
import screenshot1 from '../../../assets/Images/login/screenshot1.png';
import screenshot2 from '../../../assets/Images/login/screenshot2.png';
import screenshot3 from '../../../assets/Images/login/screenshot3.png';
import screenshot4 from '../../../assets/Images/login/screenshot4.png';

const Login = () => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const [show1, setshow1] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      if (show1 < 4) {
        setshow1(show1 + 1);
      } else {
        setshow1(1);
      }
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [show1]);

    const handleSubmit = (e) => {
        e.preventDefault(); // 폼 제출 시 페이지 리로드 방지
        console.log('로그인 시도:', user, password);
        // 여기에 로그인 로직을 구현할 수 있습니다.
      };
    
      return (
          <div id="wrapper">
            <div className="container">
            <div className="loginLeft">
          <div className="frontImgWrapper">
            <img
              src={screenshot1}
              className={show1 === 1 ? "frontImg show" : "frontImg hide"}
              alt=""
            />
            <img
              src={screenshot2}
              className={show1 === 2 ? "frontImg show" : "frontImg hide"}
              alt=""
            />
            <img
              src={screenshot3}
              className={show1 === 3 ? "frontImg show" : "frontImg hide"}
              alt=""
            />
            <img
              src={screenshot4}
              className={show1 === 4 ? "frontImg show" : "frontImg hide"}
              alt=""
            />
          </div>
        </div>
              <div className="form-data">
                <section>
                  <div className="logo">
                    <img src={Instagram}/>
                  </div>
                  <input
                    type="text"
                    placeholder="전화번호, 사용자 이름 또는 이메일"
                    onChange={(e) => setUser(e.target.value)}
                  />
                  <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="비밀번호" />
                  <button className="form-btn">
                    로그인
                  </button>
                  <span className="has-separator">또는</span>
                  <a href="#" className="facebook-login">
                    <i className="fab fa-facebook" /> Facebook으로 로그인
                  </a>
                  <a className="password-reset" href="#">
                    비밀번호를 잊으셨나요?
                  </a>
                </section>
                <div className="sign-up">
                  계정이 없으신가요? <a href="#">가입하기</a>
                </div>
                <div className="get-the-app">
                  <span>앱을 다운로드하세요.</span>
                  <div className="badge">
                    <img
                      src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
                      alt="android App"
                    />
                    <img
                      src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
                      alt="ios app"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
      );
    };
    
    export default Login;
